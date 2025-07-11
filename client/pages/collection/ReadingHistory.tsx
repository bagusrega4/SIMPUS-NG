import { useState, useEffect } from "react";
import {
  Search,
  Filter,
  BookOpen,
  Clock,
  Calendar,
  TrendingUp,
  Award,
  Target,
  BarChart3,
  Download,
  Eye,
  Star,
  Lock,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Navigation from "@/components/Navigation";
import HelpPopup from "@/components/HelpPopup";
import { useAuth } from "@/contexts/AuthContext";

export default function ReadingHistory() {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-white">
        <Navigation />
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-emerald-50 via-white to-teal-50 pt-16">
          <div className="text-center max-w-md mx-auto px-4">
            <div className="w-24 h-24 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-8">
              <Lock className="w-12 h-12 text-emerald-600" />
            </div>
            <h1 className="text-2xl font-bold text-gray-900 mb-4">
              Login Diperlukan
            </h1>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Silakan login terlebih dahulu untuk mengakses riwayat baca Anda.
            </p>
            <a href="/login">
              <Button className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-lg">
                Login Sekarang
              </Button>
            </a>
          </div>
        </div>
      </div>
    );
  }
  const helpItems = [
    {
      question: "Apa itu reading streak?",
      answer:
        "Jumlah hari berturut-turut Anda membaca buku. Semakin konsisten membaca, streak akan semakin tinggi.",
    },
    {
      question: "Bagaimana cara melihat progress membaca?",
      answer:
        "Lihat di bagian 'Reading Goals' untuk melihat target dan pencapaian membaca Anda.",
    },
    {
      question: "Bisakah memberikan rating pada buku?",
      answer:
        "Ya, Anda dapat memberikan rating dan review buku yang telah dibaca untuk membantu pengguna lain.",
    },
  ];
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedPeriod, setSelectedPeriod] = useState("semua");
  const [selectedCategory, setSelectedCategory] = useState("semua");

  const readingStats = [
    {
      type: "Total Dibaca",
      count: 89,
      icon: BookOpen,
      color: "text-stis-blue",
    },
    { type: "Jam Baca", count: 234, icon: Clock, color: "text-stis-cyan" },
    { type: "Bulan Ini", count: 12, icon: Calendar, color: "text-green-500" },
    {
      type: "Rata-rata/Bulan",
      count: 7,
      icon: TrendingUp,
      color: "text-orange-500",
    },
  ];

  const readingGoals = {
    yearly_target: 120,
    current_progress: 89,
    monthly_target: 10,
    current_month: 12,
    reading_streak: 15,
    achievements: [
      { name: "Bookworm", description: "Baca 50 buku", achieved: true },
      {
        name: "Speed Reader",
        description: "Baca 10 buku/bulan",
        achieved: true,
      },
      { name: "Scholar", description: "Baca 100 buku", achieved: false },
      {
        name: "Consistent Reader",
        description: "Baca 30 hari berturut",
        achieved: false,
      },
    ],
  };

  const readingHistory = [
    {
      id: 1,
      title: "Statistika Dasar: Teori dan Aplikasi",
      authors: ["Prof. Dr. Supranto, M.A."],
      category: "Statistika",
      type: "Physical Book",
      started_date: "2024-01-20",
      finished_date: "2024-01-27",
      reading_time: 12.5,
      pages_read: 458,
      rating: 5,
      notes: "Buku yang sangat bagus untuk pemahaman dasar statistika",
      progress: 100,
      favorite: true,
    },
    {
      id: 2,
      title: "Machine Learning untuk Analisis Data",
      authors: ["Dr. Budi Raharjo"],
      category: "Machine Learning",
      type: "E-Book",
      started_date: "2024-01-15",
      finished_date: "2024-01-25",
      reading_time: 18.3,
      pages_read: 456,
      rating: 5,
      notes: "Implementasi ML yang praktis dengan studi kasus menarik",
      progress: 100,
      favorite: true,
    },
    {
      id: 3,
      title: "R for Data Science",
      authors: ["Hadley Wickham", "Garrett Grolemund"],
      category: "Data Science",
      type: "E-Book",
      started_date: "2024-01-10",
      finished_date: null,
      reading_time: 8.7,
      pages_read: 320,
      rating: null,
      notes: "",
      progress: 75,
      favorite: false,
    },
    {
      id: 4,
      title: "Ekonometrika: Dasar dan Aplikasinya",
      authors: ["Dr. Nachrowi Djalal Nachrowi"],
      category: "Ekonometrika",
      type: "Physical Book",
      started_date: "2024-01-05",
      finished_date: "2024-01-18",
      reading_time: 15.2,
      pages_read: 524,
      rating: 4,
      notes: "Pembahasan yang detail tentang model ekonometrika",
      progress: 100,
      favorite: false,
    },
    {
      id: 5,
      title: "Introduction to Mathematical Statistics",
      authors: ["Robert V. Hogg", "Joseph McKean"],
      category: "Statistika",
      type: "Physical Book",
      started_date: "2023-12-20",
      finished_date: "2024-01-08",
      reading_time: 22.1,
      pages_read: 694,
      rating: 5,
      notes: "Referensi yang sangat baik untuk statistika matematika",
      progress: 100,
      favorite: true,
    },
  ];

  const monthlyReading = [
    { month: "Jan", books: 12, hours: 45 },
    { month: "Dec", books: 8, hours: 32 },
    { month: "Nov", books: 6, hours: 28 },
    { month: "Oct", books: 9, hours: 38 },
    { month: "Sep", books: 7, hours: 30 },
    { month: "Aug", books: 5, hours: 22 },
  ];

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("id-ID", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  };

  const getProgressColor = (progress: number) => {
    if (progress === 100) return "bg-green-500";
    if (progress >= 75) return "bg-blue-500";
    if (progress >= 50) return "bg-yellow-500";
    return "bg-gray-300";
  };

  const filteredHistory = readingHistory.filter((item) => {
    const matchesSearch =
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.authors.some((author) =>
        author.toLowerCase().includes(searchQuery.toLowerCase()),
      );
    const matchesCategory =
      selectedCategory === "semua" ||
      item.category.toLowerCase() === selectedCategory.toLowerCase();

    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Header */}
      <div className="bg-gradient-to-br from-stis-blue-light via-white to-stis-gray-light pt-24 pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="secondary" className="mb-4">
              Koleksi
            </Badge>
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              Riwayat <span className="text-stis-blue">Baca</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 leading-relaxed">
              Pantau progress membaca Anda, catat buku yang telah dibaca, dan
              analisis kebiasaan membaca untuk meningkatkan produktivitas
              belajar
            </p>
          </div>
        </div>
      </div>

      {/* Reading Statistics */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
              {readingStats.map((stat, index) => {
                const IconComponent = stat.icon;
                return (
                  <Card key={index} className="border-0 shadow-lg text-center">
                    <CardContent className="p-6">
                      <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                        <IconComponent className={`w-6 h-6 ${stat.color}`} />
                      </div>
                      <div className={`text-2xl font-bold mb-1 ${stat.color}`}>
                        {stat.count}
                      </div>
                      <div className="text-sm text-gray-600">{stat.type}</div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            {/* Reading Goals */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Progress Cards */}
              <div className="space-y-6">
                <Card className="border-0 shadow-lg">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">
                      Target Tahunan
                    </h3>
                    <div className="mb-4">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm text-gray-600">Progress</span>
                        <span className="text-sm font-medium">
                          {readingGoals.current_progress}/
                          {readingGoals.yearly_target} buku
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-3">
                        <div
                          className="bg-stis-blue h-3 rounded-full transition-all duration-300"
                          style={{
                            width: `${(readingGoals.current_progress / readingGoals.yearly_target) * 100}%`,
                          }}
                        ></div>
                      </div>
                    </div>
                    <p className="text-sm text-gray-600">
                      {Math.round(
                        (readingGoals.current_progress /
                          readingGoals.yearly_target) *
                          100,
                      )}
                      % dari target tahunan
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">
                      Target Bulanan
                    </h3>
                    <div className="mb-4">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm text-gray-600">Bulan Ini</span>
                        <span className="text-sm font-medium">
                          {readingGoals.current_month}/
                          {readingGoals.monthly_target} buku
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-3">
                        <div
                          className="bg-green-500 h-3 rounded-full transition-all duration-300"
                          style={{
                            width: `${Math.min((readingGoals.current_month / readingGoals.monthly_target) * 100, 100)}%`,
                          }}
                        ></div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Target className="w-4 h-4 text-green-500" />
                      <span className="text-sm text-green-600 font-medium">
                        Target bulan ini tercapai! 🎉
                      </span>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Achievements */}
              <Card className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">
                    Pencapaian
                  </h3>
                  <div className="space-y-4">
                    {readingGoals.achievements.map((achievement, index) => (
                      <div
                        key={index}
                        className={`flex items-center gap-3 p-3 rounded-lg ${
                          achievement.achieved
                            ? "bg-green-50 border border-green-200"
                            : "bg-gray-50 border border-gray-200"
                        }`}
                      >
                        <div
                          className={`w-8 h-8 rounded-full flex items-center justify-center ${
                            achievement.achieved
                              ? "bg-green-500 text-white"
                              : "bg-gray-300 text-gray-600"
                          }`}
                        >
                          <Award className="w-4 h-4" />
                        </div>
                        <div className="flex-1">
                          <h4
                            className={`font-medium ${
                              achievement.achieved
                                ? "text-green-800"
                                : "text-gray-700"
                            }`}
                          >
                            {achievement.name}
                          </h4>
                          <p
                            className={`text-sm ${
                              achievement.achieved
                                ? "text-green-600"
                                : "text-gray-500"
                            }`}
                          >
                            {achievement.description}
                          </p>
                        </div>
                        {achievement.achieved && (
                          <Badge className="bg-green-500 hover:bg-green-600">
                            Tercapai
                          </Badge>
                        )}
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 p-4 bg-stis-blue-light rounded-lg">
                    <div className="flex items-center gap-2 mb-2">
                      <TrendingUp className="w-5 h-5 text-stis-blue" />
                      <span className="font-medium text-stis-blue">
                        Reading Streak
                      </span>
                    </div>
                    <p className="text-2xl font-bold text-stis-blue">
                      {readingGoals.reading_streak} hari
                    </p>
                    <p className="text-sm text-gray-600">
                      Anda telah membaca secara konsisten
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Search & Filter */}
      <section className="py-8 bg-stis-gray-light border-b border-gray-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col lg:flex-row gap-6 items-center">
              {/* Search */}
              <div className="flex-1 w-full lg:w-auto">
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <Input
                    type="text"
                    placeholder="Cari judul buku atau penulis..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-12 py-3 text-base rounded-xl border-2 border-gray-200 focus:border-stis-blue"
                  />
                </div>
              </div>

              {/* Filters */}
              <div className="flex gap-4 w-full lg:w-auto">
                <Select
                  value={selectedCategory}
                  onValueChange={setSelectedCategory}
                >
                  <SelectTrigger className="w-full lg:w-48">
                    <SelectValue placeholder="Kategori" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="semua">Semua Kategori</SelectItem>
                    <SelectItem value="statistika">Statistika</SelectItem>
                    <SelectItem value="machine learning">
                      Machine Learning
                    </SelectItem>
                    <SelectItem value="data science">Data Science</SelectItem>
                    <SelectItem value="ekonometrika">Ekonometrika</SelectItem>
                  </SelectContent>
                </Select>

                <Select
                  value={selectedPeriod}
                  onValueChange={setSelectedPeriod}
                >
                  <SelectTrigger className="w-full lg:w-36">
                    <SelectValue placeholder="Periode" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="semua">Semua</SelectItem>
                    <SelectItem value="bulan-ini">Bulan Ini</SelectItem>
                    <SelectItem value="3-bulan">3 Bulan</SelectItem>
                    <SelectItem value="tahun-ini">Tahun Ini</SelectItem>
                  </SelectContent>
                </Select>

                <Button
                  variant="outline"
                  className="border-emerald-600 text-emerald-600 hover:bg-emerald-600 hover:text-white"
                >
                  <Search className="w-4 h-4 mr-2" />
                  Cari
                </Button>

                <Button
                  variant="outline"
                  className="border-stis-blue text-stis-blue hover:bg-stis-blue hover:text-white"
                >
                  <Download className="w-4 h-4 mr-2" />
                  Export
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <Tabs defaultValue="history" className="w-full">
              <TabsList className="grid w-full grid-cols-2 max-w-md mx-auto mb-12">
                <TabsTrigger value="history">Riwayat Baca</TabsTrigger>
                <TabsTrigger value="analytics">Analitik</TabsTrigger>
              </TabsList>

              {/* Reading History Tab */}
              <TabsContent value="history">
                <div className="mb-8">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-2xl font-bold text-gray-900">
                      Riwayat Membaca ({filteredHistory.length})
                    </h3>
                    <Select defaultValue="terbaru">
                      <SelectTrigger className="w-48">
                        <SelectValue placeholder="Urutkan" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="terbaru">Terbaru</SelectItem>
                        <SelectItem value="rating">Rating Tertinggi</SelectItem>
                        <SelectItem value="waktu-baca">Waktu Baca</SelectItem>
                        <SelectItem value="judul">Judul A-Z</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-4">
                    {filteredHistory.map((book) => (
                      <Card
                        key={book.id}
                        className="border-0 shadow-lg hover:shadow-xl transition-shadow"
                      >
                        <CardContent className="p-6">
                          <div className="flex flex-col lg:flex-row gap-6">
                            {/* Book Cover */}
                            <div className="w-full lg:w-20 h-28 lg:h-24 bg-gradient-to-br from-stis-blue-light to-stis-gray-light rounded-lg flex items-center justify-center flex-shrink-0 relative">
                              <BookOpen className="w-8 h-8 text-stis-blue/40" />
                              {book.favorite && (
                                <div className="absolute -top-2 -right-2 w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center">
                                  <Star className="w-3 h-3 text-white fill-current" />
                                </div>
                              )}
                            </div>

                            {/* Book Details */}
                            <div className="flex-1">
                              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
                                <div className="flex-1">
                                  <div className="flex items-center gap-2 mb-2">
                                    <Badge
                                      variant="secondary"
                                      className="text-xs"
                                    >
                                      {book.category}
                                    </Badge>
                                    <Badge
                                      variant="outline"
                                      className="text-xs"
                                    >
                                      {book.type}
                                    </Badge>
                                    <Badge
                                      variant={
                                        book.progress === 100
                                          ? "default"
                                          : "destructive"
                                      }
                                      className="text-xs"
                                    >
                                      {book.progress === 100
                                        ? "Selesai"
                                        : `${book.progress}%`}
                                    </Badge>
                                  </div>

                                  <h4 className="text-lg font-semibold text-gray-900 mb-2">
                                    {book.title}
                                  </h4>

                                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm text-gray-600 mb-3">
                                    <div>
                                      <p>
                                        <strong>Penulis:</strong>{" "}
                                        {book.authors.join(", ")}
                                      </p>
                                      <p>
                                        <strong>Mulai Baca:</strong>{" "}
                                        {formatDate(book.started_date)}
                                      </p>
                                      {book.finished_date && (
                                        <p>
                                          <strong>Selesai:</strong>{" "}
                                          {formatDate(book.finished_date)}
                                        </p>
                                      )}
                                    </div>
                                    <div>
                                      <p>
                                        <strong>Waktu Baca:</strong>{" "}
                                        {book.reading_time} jam
                                      </p>
                                      <p>
                                        <strong>Halaman:</strong>{" "}
                                        {book.pages_read}
                                      </p>
                                      {book.rating && (
                                        <div className="flex items-center gap-1">
                                          <strong>Rating:</strong>
                                          <div className="flex">
                                            {[1, 2, 3, 4, 5].map((star) => (
                                              <Star
                                                key={star}
                                                className={`w-3 h-3 ${
                                                  star <= book.rating
                                                    ? "text-yellow-400 fill-current"
                                                    : "text-gray-300"
                                                }`}
                                              />
                                            ))}
                                          </div>
                                        </div>
                                      )}
                                    </div>
                                  </div>

                                  {/* Progress Bar */}
                                  <div className="mb-3">
                                    <div className="flex justify-between items-center mb-1">
                                      <span className="text-xs text-gray-600">
                                        Progress Baca
                                      </span>
                                      <span className="text-xs font-medium">
                                        {book.progress}%
                                      </span>
                                    </div>
                                    <div className="w-full bg-gray-200 rounded-full h-2">
                                      <div
                                        className={`h-2 rounded-full transition-all duration-300 ${getProgressColor(book.progress)}`}
                                        style={{ width: `${book.progress}%` }}
                                      ></div>
                                    </div>
                                  </div>

                                  {book.notes && (
                                    <div className="bg-gray-50 rounded-lg p-3 mb-3">
                                      <h5 className="font-medium text-gray-900 mb-1 text-sm">
                                        Catatan:
                                      </h5>
                                      <p className="text-sm text-gray-600 italic">
                                        "{book.notes}"
                                      </p>
                                    </div>
                                  )}
                                </div>

                                {/* Action Buttons */}
                                <div className="flex flex-col gap-2 lg:w-32">
                                  <Button
                                    size="sm"
                                    className="bg-stis-blue hover:bg-stis-blue-dark"
                                  >
                                    <Eye className="w-4 h-4 mr-2" />
                                    Detail
                                  </Button>
                                  {book.progress < 100 && (
                                    <Button
                                      size="sm"
                                      variant="outline"
                                      className="border-stis-cyan text-stis-cyan hover:bg-stis-cyan hover:text-white"
                                    >
                                      Lanjut Baca
                                    </Button>
                                  )}
                                </div>
                              </div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              </TabsContent>

              {/* Analytics Tab */}
              <TabsContent value="analytics">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {/* Monthly Reading Chart */}
                  <Card className="border-0 shadow-lg">
                    <CardContent className="p-6">
                      <h3 className="text-lg font-semibold text-gray-900 mb-6">
                        Aktivitas Baca Bulanan
                      </h3>
                      <div className="space-y-4">
                        {monthlyReading.map((month, index) => (
                          <div key={index} className="flex items-center gap-4">
                            <div className="w-12 text-sm font-medium text-gray-600">
                              {month.month}
                            </div>
                            <div className="flex-1">
                              <div className="flex justify-between items-center mb-1">
                                <span className="text-sm text-gray-600">
                                  {month.books} buku
                                </span>
                                <span className="text-sm text-gray-500">
                                  {month.hours} jam
                                </span>
                              </div>
                              <div className="w-full bg-gray-200 rounded-full h-2">
                                <div
                                  className="bg-stis-blue h-2 rounded-full"
                                  style={{
                                    width: `${(month.books / 15) * 100}%`,
                                  }}
                                ></div>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>

                  {/* Category Distribution */}
                  <Card className="border-0 shadow-lg">
                    <CardContent className="p-6">
                      <h3 className="text-lg font-semibold text-gray-900 mb-6">
                        Distribusi Kategori
                      </h3>
                      <div className="space-y-4">
                        {[
                          { category: "Statistika", count: 25, percentage: 35 },
                          {
                            category: "Machine Learning",
                            count: 18,
                            percentage: 25,
                          },
                          {
                            category: "Data Science",
                            count: 15,
                            percentage: 21,
                          },
                          {
                            category: "Ekonometrika",
                            count: 10,
                            percentage: 14,
                          },
                          { category: "Matematika", count: 4, percentage: 5 },
                        ].map((cat, index) => (
                          <div key={index} className="flex items-center gap-4">
                            <div className="w-24 text-sm font-medium text-gray-900">
                              {cat.category}
                            </div>
                            <div className="flex-1">
                              <div className="flex justify-between items-center mb-1">
                                <span className="text-sm text-gray-600">
                                  {cat.count} buku
                                </span>
                                <span className="text-sm text-gray-500">
                                  {cat.percentage}%
                                </span>
                              </div>
                              <div className="w-full bg-gray-200 rounded-full h-2">
                                <div
                                  className="bg-stis-cyan h-2 rounded-full"
                                  style={{ width: `${cat.percentage}%` }}
                                ></div>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-stis-blue text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Brand */}
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                  <BookOpen className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h4 className="text-2xl font-bold">SIMPus</h4>
                  <p className="text-white/80">
                    Sistem Informasi Manajemen Perpustakaan STIS
                  </p>
                </div>
              </div>
              <p className="text-white/80 mb-6 max-w-md">
                Perpustakaan digital modern yang mendukung kegiatan akademik dan
                penelitian di Politeknik Statistika STIS.
              </p>
            </div>

            {/* Contact Info */}
            <div>
              <h5 className="text-lg font-semibold mb-4">Kontak</h5>
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <div className="w-5 h-5 text-white/60 mt-1 flex-shrink-0">
                    📍
                  </div>
                  <p className="text-white/80 text-sm">
                    Jl. Otto Iskandardinata No.64C, Jakarta Timur 13330
                  </p>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-5 h-5 text-white/60">📞</div>
                  <p className="text-white/80 text-sm">(021) 8191437</p>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-5 h-5 text-white/60">🕒</div>
                  <p className="text-white/80 text-sm">
                    Senin - Jumat: 08:00 - 16:00
                  </p>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h5 className="text-lg font-semibold mb-4">Pintasan</h5>
              <div className="space-y-3">
                <a
                  href="#"
                  className="block text-white/80 hover:text-white transition-colors text-sm"
                >
                  Katalog Online
                </a>
                <a
                  href="#"
                  className="block text-white/80 hover:text-white transition-colors text-sm"
                >
                  Perpanjangan Buku
                </a>
                <a
                  href="#"
                  className="block text-white/80 hover:text-white transition-colors text-sm"
                >
                  Reservasi Ruang
                </a>
                <a
                  href="#"
                  className="block text-white/80 hover:text-white transition-colors text-sm"
                >
                  Download Formulir
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-white/20 mt-12 pt-8 text-center">
            <p className="text-white/60 text-sm">
              © 2024 Perpustakaan STIS. Hak cipta dilindungi undang-undang.
            </p>
          </div>
        </div>
      </footer>

      {/* Help Popup */}
      <HelpPopup pageHelp={helpItems} />
    </div>
  );
}
