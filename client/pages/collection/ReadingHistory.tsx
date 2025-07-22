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
  Phone,
  MapPin,
  Instagram,
  Twitter,
  Youtube,
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
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-stis-blue-light via-white to-stis-gray-light pt-16">
          <div className="text-center max-w-md mx-auto px-4">
            <div className="w-24 h-24 bg-stis-blue/10 rounded-full flex items-center justify-center mx-auto mb-8">
              <Lock className="w-12 h-12 text-stis-blue" />
            </div>
            <h1 className="text-2xl font-bold text-gray-900 mb-4">
              Login Diperlukan
            </h1>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Silakan login terlebih dahulu untuk mengakses riwayat baca Anda.
            </p>
            <a href="/login">
              <Button className="bg-stis-blue hover:bg-stis-blue-dark text-white px-6 py-3 rounded-lg">
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
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;
  const [selectedBook, setSelectedBook] = useState<any>(null);
  const [showDetailModal, setShowDetailModal] = useState(false);

  const readingStats = [
    {
      type: "Total Dibaca",
      count: 89,
      icon: BookOpen,
      color: "text-stis-blue",
    },
    { type: "Jam Baca", count: 234, icon: Clock, color: "text-stis-cyan" },
    { type: "Bulan Ini", count: 12, icon: Calendar, color: "text-stis-cyan" },
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
    {
      id: 6,
      title: "Applied Time Series Analysis",
      authors: ["Wayne A. Woodward", "Henry L. Gray"],
      category: "Statistika",
      type: "Physical Book",
      started_date: "2023-12-10",
      finished_date: "2023-12-28",
      reading_time: 16.7,
      pages_read: 634,
      rating: 4,
      notes: "Metode time series yang comprehensive dengan aplikasi praktis",
      progress: 100,
      favorite: false,
    },
    {
      id: 7,
      title: "Computational Statistics with R",
      authors: ["Maria L. Rizzo"],
      category: "Komputasi Statistik",
      type: "E-Book",
      started_date: "2023-11-15",
      finished_date: "2023-12-05",
      reading_time: 21.4,
      pages_read: 672,
      rating: 5,
      notes: "Excellent resource untuk computational statistics menggunakan R",
      progress: 100,
      favorite: true,
    },
    {
      id: 8,
      title: "Statistical Learning with Python",
      authors: ["Sebastian Raschka", "Vahid Mirjalili"],
      category: "Machine Learning",
      type: "E-Book",
      started_date: "2023-10-20",
      finished_date: null,
      reading_time: 12.3,
      pages_read: 395,
      rating: null,
      notes: "",
      progress: 65,
      favorite: false,
    },
    {
      id: 9,
      title: "Introduction to Probability Models",
      authors: ["Sheldon M. Ross"],
      category: "Probabilitas",
      type: "Physical Book",
      started_date: "2023-09-25",
      finished_date: "2023-10-18",
      reading_time: 19.8,
      pages_read: 782,
      rating: 4,
      notes: "Buku probabilitas yang sangat baik dengan banyak contoh aplikasi",
      progress: 100,
      favorite: true,
    },
    {
      id: 10,
      title: "Data Science from Scratch",
      authors: ["Joel Grus"],
      category: "Data Science",
      type: "E-Book",
      started_date: "2023-08-30",
      finished_date: "2023-09-20",
      reading_time: 24.5,
      pages_read: 330,
      rating: 5,
      notes: "Sangat bagus untuk memahami konsep dasar data science dari awal",
      progress: 100,
      favorite: true,
    },
    {
      id: 11,
      title: "Advanced Analytics with Spark",
      authors: ["Sandy Ryza", "Uri Laserson"],
      category: "Big Data",
      type: "E-Book",
      started_date: "2023-07-15",
      finished_date: "2023-08-12",
      reading_time: 28.9,
      pages_read: 218,
      rating: 4,
      notes: "Implementasi advanced analytics menggunakan Apache Spark",
      progress: 100,
      favorite: false,
    },
    {
      id: 12,
      title: "Practical Statistics for Data Scientists",
      authors: ["Peter Bruce", "Andrew Bruce"],
      category: "Data Science",
      type: "Physical Book",
      started_date: "2023-06-20",
      finished_date: "2023-07-10",
      reading_time: 17.2,
      pages_read: 318,
      rating: 5,
      notes: "Sangat praktis untuk applied statistics in data science",
      progress: 100,
      favorite: true,
    },
    {
      id: 13,
      title: "Statistical Rethinking",
      authors: ["Richard McElreath"],
      category: "Statistika Bayesian",
      type: "Physical Book",
      started_date: "2023-05-25",
      finished_date: null,
      reading_time: 14.7,
      pages_read: 287,
      rating: null,
      notes: "",
      progress: 45,
      favorite: false,
    },
    {
      id: 14,
      title: "Neural Networks and Deep Learning",
      authors: ["Michael Nielsen"],
      category: "Deep Learning",
      type: "E-Book",
      started_date: "2023-04-30",
      finished_date: "2023-05-20",
      reading_time: 22.6,
      pages_read: 623,
      rating: 5,
      notes: "Excellent introduction to neural networks dan deep learning",
      progress: 100,
      favorite: true,
    },
    {
      id: 15,
      title: "Forecasting: Principles and Practice",
      authors: ["Rob J Hyndman", "George Athanasopoulos"],
      category: "Time Series",
      type: "E-Book",
      started_date: "2023-03-15",
      finished_date: "2023-04-25",
      reading_time: 31.4,
      pages_read: 382,
      rating: 5,
      notes: "Comprehensive guide untuk time series forecasting",
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
    if (progress === 100) return "bg-stis-blue";
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

  // Pagination calculations
  const totalPages = Math.ceil(filteredHistory.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentHistoryItems = filteredHistory.slice(startIndex, endIndex);

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Header */}
      <div className="bg-gradient-to-br from-stis-blue-light via-white to-stis-gray-light pt-24 pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
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
                          className="bg-stis-blue h-3 rounded-full transition-all duration-300"
                          style={{
                            width: `${Math.min((readingGoals.current_month / readingGoals.monthly_target) * 100, 100)}%`,
                          }}
                        ></div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Target className="w-4 h-4 text-stis-blue" />
                      <span className="text-sm text-stis-blue font-medium">
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
                            ? "bg-stis-blue-light border border-stis-blue"
                            : "bg-gray-50 border border-gray-200"
                        }`}
                      >
                        <div
                          className={`w-8 h-8 rounded-full flex items-center justify-center ${
                            achievement.achieved
                              ? "bg-stis-blue text-white"
                              : "bg-gray-300 text-gray-600"
                          }`}
                        >
                          <Award className="w-4 h-4" />
                        </div>
                        <div className="flex-1">
                          <h4
                            className={`font-medium ${
                              achievement.achieved
                                ? "text-stis-blue"
                                : "text-gray-700"
                            }`}
                          >
                            {achievement.name}
                          </h4>
                          <p
                            className={`text-sm ${
                              achievement.achieved
                                ? "text-stis-blue"
                                : "text-gray-500"
                            }`}
                          >
                            {achievement.description}
                          </p>
                        </div>
                        {achievement.achieved && (
                          <Badge className="bg-stis-blue hover:bg-stis-blue-dark">
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
                {/* Search & Filter for Reading History */}
                <div className="py-8 bg-stis-gray-light border border-gray-200 rounded-xl mb-8">
                  <div className="max-w-6xl mx-auto px-6">
                    <div className="flex flex-col lg:flex-row gap-6 items-center">
                      {/* Search */}
                      <div className="flex-1 w-full lg:w-auto">
                        <div className="relative">
                          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                          <Input
                            type="text"
                            placeholder="Cari judul buku atau penulis..."
                            value={searchQuery}
                            onChange={(e) => {
                              setSearchQuery(e.target.value);
                              setCurrentPage(1);
                            }}
                            className="pl-12 py-3 text-base rounded-xl border-2 border-gray-200 focus:border-stis-blue"
                          />
                        </div>
                      </div>

                      {/* Filters */}
                      <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full lg:w-auto">
                        <div className="flex gap-3 sm:gap-4">
                          <Select
                            value={selectedCategory}
                            onValueChange={(value) => {
                              setSelectedCategory(value);
                              setCurrentPage(1);
                            }}
                          >
                            <SelectTrigger className="w-full sm:w-36 lg:w-48 focus:ring-stis-blue">
                              <SelectValue placeholder="Kategori" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem
                                className="focus:bg-stis-blue/10 focus:text-stis-blue data-[highlighted]:bg-stis-blue/10 data-[highlighted]:text-stis-blue"
                                value="semua"
                              >
                                Semua Kategori
                              </SelectItem>
                              <SelectItem
                                className="focus:bg-stis-blue/10 focus:text-stis-blue data-[highlighted]:bg-stis-blue/10 data-[highlighted]:text-stis-blue"
                                value="statistika"
                              >
                                Statistika
                              </SelectItem>
                              <SelectItem
                                className="focus:bg-stis-blue/10 focus:text-stis-blue data-[highlighted]:bg-stis-blue/10 data-[highlighted]:text-stis-blue"
                                value="machine learning"
                              >
                                Machine Learning
                              </SelectItem>
                              <SelectItem
                                className="focus:bg-stis-blue/10 focus:text-stis-blue data-[highlighted]:bg-stis-blue/10 data-[highlighted]:text-stis-blue"
                                value="data science"
                              >
                                Data Science
                              </SelectItem>
                              <SelectItem
                                className="focus:bg-stis-blue/10 focus:text-stis-blue data-[highlighted]:bg-stis-blue/10 data-[highlighted]:text-stis-blue"
                                value="ekonometrika"
                              >
                                Ekonometrika
                              </SelectItem>
                            </SelectContent>
                          </Select>

                          <Select
                            value={selectedPeriod}
                            onValueChange={(value) => {
                              setSelectedPeriod(value);
                              setCurrentPage(1);
                            }}
                          >
                            <SelectTrigger className="w-full sm:w-28 lg:w-36 focus:ring-stis-blue">
                              <SelectValue placeholder="Periode" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem
                                className="focus:bg-stis-blue/10 focus:text-stis-blue data-[highlighted]:bg-stis-blue/10 data-[highlighted]:text-stis-blue"
                                value="semua"
                              >
                                Semua
                              </SelectItem>
                              <SelectItem
                                className="focus:bg-stis-blue/10 focus:text-stis-blue data-[highlighted]:bg-stis-blue/10 data-[highlighted]:text-stis-blue"
                                value="bulan-ini"
                              >
                                Bulan Ini
                              </SelectItem>
                              <SelectItem
                                className="focus:bg-stis-blue/10 focus:text-stis-blue data-[highlighted]:bg-stis-blue/10 data-[highlighted]:text-stis-blue"
                                value="3-bulan"
                              >
                                3 Bulan
                              </SelectItem>
                              <SelectItem
                                className="focus:bg-stis-blue/10 focus:text-stis-blue data-[highlighted]:bg-stis-blue/10 data-[highlighted]:text-stis-blue"
                                value="tahun-ini"
                              >
                                Tahun Ini
                              </SelectItem>
                            </SelectContent>
                          </Select>
                        </div>

                        <Button
                          variant="outline"
                          className="border-stis-blue text-stis-blue hover:bg-stis-blue hover:text-white w-full sm:w-auto"
                        >
                          <Download className="w-4 h-4 mr-2" />
                          <span className="sm:inline">Export</span>
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mb-8">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-2xl font-bold text-gray-900">
                      Riwayat Membaca ({filteredHistory.length}) - Halaman{" "}
                      {currentPage} dari {totalPages}
                    </h3>
                    <Select defaultValue="terbaru">
                      <SelectTrigger className="w-48 focus:ring-stis-blue">
                        <SelectValue placeholder="Urutkan" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem
                          className="focus:bg-stis-blue/10 focus:text-stis-blue data-[highlighted]:bg-stis-blue/10 data-[highlighted]:text-stis-blue"
                          value="terbaru"
                        >
                          Terbaru
                        </SelectItem>
                        <SelectItem
                          className="focus:bg-stis-blue/10 focus:text-stis-blue data-[highlighted]:bg-stis-blue/10 data-[highlighted]:text-stis-blue"
                          value="rating"
                        >
                          Rating Tertinggi
                        </SelectItem>
                        <SelectItem
                          className="focus:bg-stis-blue/10 focus:text-stis-blue data-[highlighted]:bg-stis-blue/10 data-[highlighted]:text-stis-blue"
                          value="waktu-baca"
                        >
                          Waktu Baca
                        </SelectItem>
                        <SelectItem
                          className="focus:bg-stis-blue/10 focus:text-stis-blue data-[highlighted]:bg-stis-blue/10 data-[highlighted]:text-stis-blue"
                          value="judul"
                        >
                          Judul A-Z
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-4">
                    {currentHistoryItems.map((book) => (
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
                                <div className="flex flex-col sm:flex-row lg:flex-col gap-2 w-full lg:w-32">
                                  <Button
                                    size="sm"
                                    className="bg-stis-blue hover:bg-stis-blue-dark flex-1 lg:flex-none text-xs sm:text-sm"
                                    onClick={() => {
                                      setSelectedBook(book);
                                      setShowDetailModal(true);
                                    }}
                                  >
                                    <Eye className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                                    Detail
                                  </Button>
                                  {book.progress < 100 && (
                                    <Button
                                      size="sm"
                                      variant="outline"
                                      className="border-stis-cyan text-stis-cyan hover:bg-stis-cyan hover:text-white flex-1 lg:flex-none text-xs sm:text-sm"
                                    >
                                      <span className="hidden sm:inline">Lanjut Baca</span>
                                      <span className="sm:hidden">Lanjut</span>
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

                  {/* Pagination */}
                  {totalPages > 1 && (
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-2 mt-8 px-4">
                      {/* Mobile: Simplified pagination with page info */}
                      <div className="sm:hidden flex items-center justify-between w-full gap-2">
                        <Button
                          variant="outline"
                          size="sm"
                          disabled={currentPage === 1}
                          onClick={() => setCurrentPage(currentPage - 1)}
                          className="border-stis-blue text-stis-blue hover:bg-stis-blue hover:text-white text-xs px-3 py-2"
                        >
                          ‹ Prev
                        </Button>

                        <span className="text-sm text-gray-600 px-3 py-2 bg-gray-100 rounded-lg">
                          {currentPage} / {totalPages}
                        </span>

                        <Button
                          variant="outline"
                          size="sm"
                          disabled={currentPage === totalPages}
                          onClick={() => setCurrentPage(currentPage + 1)}
                          className="border-stis-blue text-stis-blue hover:bg-stis-blue hover:text-white text-xs px-3 py-2"
                        >
                          Next ›
                        </Button>
                      </div>

                      {/* Desktop: Full pagination */}
                      <div className="hidden sm:flex items-center justify-center gap-2">
                        <Button
                          variant="outline"
                          disabled={currentPage === 1}
                          onClick={() => setCurrentPage(currentPage - 1)}
                          className="border-stis-blue text-stis-blue hover:bg-stis-blue hover:text-white"
                        >
                          Sebelumnya
                        </Button>

                        {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                          (page) => (
                            <Button
                              key={page}
                              variant={
                                currentPage === page ? "default" : "outline"
                              }
                              className={
                                currentPage === page
                                  ? "bg-stis-blue hover:bg-stis-blue-dark"
                                  : "border-stis-blue text-stis-blue hover:bg-stis-blue hover:text-white"
                              }
                              onClick={() => setCurrentPage(page)}
                            >
                              {page}
                            </Button>
                          ),
                        )}

                        <Button
                          variant="outline"
                          disabled={currentPage === totalPages}
                          onClick={() => setCurrentPage(currentPage + 1)}
                          className="border-stis-blue text-stis-blue hover:bg-stis-blue hover:text-white"
                        >
                          Selanjutnya
                        </Button>
                      </div>
                    </div>
                  )}
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
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Brand */}
            <div className="sm:col-span-2 lg:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                  <BookOpen className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h4 className="text-xl sm:text-2xl font-bold">SIMPus</h4>
                  <p className="text-white/80 text-sm sm:text-base">
                    Sistem Informasi Manajemen Perpustakaan Polstat STIS
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
                  <MapPin className="w-5 h-5 text-white/60 mt-1 flex-shrink-0" />
                  <p className="text-white/80 text-sm">
                    Jl. Otto Iskandardinata No.64C, Jakarta Timur 13330
                  </p>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-white/60" />
                  <p className="text-white/80 text-sm">(021) 8191437</p>
                </div>
                <div className="flex items-center space-x-3">
                  <Clock className="w-5 h-5 text-white/60" />
                  <p className="text-white/80 text-sm">
                    Senin - Jumat: 08:00 - 16:00
                  </p>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div>
              <h5 className="text-lg font-semibold mb-4">Media Sosial</h5>
              <div className="space-y-3">
                <a
                  href="https://www.instagram.com/polstatstis?utm_source=ig_web_button_share_sheet&igsh=ODdmZWVhMTFiMw=="
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 text-white/80 hover:text-white transition-colors text-sm group"
                >
                  <Instagram className="w-5 h-5 group-hover:text-pink-400 transition-colors" />
                  <span>@polstatstis</span>
                </a>
                <a
                  href="https://twitter.com/stisjkt"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 text-white/80 hover:text-white transition-colors text-sm group"
                >
                  <Twitter className="w-5 h-5 group-hover:text-blue-400 transition-colors" />
                  <span>@stisjkt</span>
                </a>
                <a
                  href="https://www.youtube.com/@PoliteknikStatistikaSTIS"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 text-white/80 hover:text-white transition-colors text-sm group"
                >
                  <Youtube className="w-5 h-5 group-hover:text-red-400 transition-colors" />
                  <span>PoliteknikStatistikaSTIS</span>
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-white/20 mt-8 pt-8 text-center">
            <p className="text-white/60 text-sm">
              © 2024 Perpustakaan Polstat STIS. Hak cipta dilindungi
              undang-undang.
            </p>
          </div>
        </div>
      </footer>

      {/* Book Detail Modal */}
      {showDetailModal && selectedBook && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="mb-6">
                <h2 className="text-2xl font-bold text-gray-900">
                  Detail Buku
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                {/* Book Cover */}
                <div className="w-full h-64 bg-gradient-to-br from-stis-blue-light to-stis-gray-light rounded-lg flex items-center justify-center relative">
                  <BookOpen className="w-16 h-16 text-stis-blue/40" />
                  {selectedBook.favorite && (
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center">
                      <Star className="w-4 h-4 text-white fill-current" />
                    </div>
                  )}
                </div>

                {/* Book Information */}
                <div className="md:col-span-2 space-y-4">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {selectedBook.title}
                    </h3>
                    <p className="text-gray-600">
                      oleh {selectedBook.authors.join(", ")}
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-medium text-gray-900 mb-2">
                        Informasi Umum
                      </h4>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span className="text-gray-600">Kategori:</span>
                          <span className="font-medium">
                            {selectedBook.category}
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Jenis:</span>
                          <span className="font-medium">
                            {selectedBook.type}
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Progress:</span>
                          <span className="font-medium">
                            {selectedBook.progress}%
                          </span>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-medium text-gray-900 mb-2">
                        Detail Membaca
                      </h4>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span className="text-gray-600">Mulai Baca:</span>
                          <span className="font-medium">
                            {formatDate(selectedBook.started_date)}
                          </span>
                        </div>
                        {selectedBook.finished_date && (
                          <div className="flex justify-between">
                            <span className="text-gray-600">Selesai:</span>
                            <span className="font-medium">
                              {formatDate(selectedBook.finished_date)}
                            </span>
                          </div>
                        )}
                        <div className="flex justify-between">
                          <span className="text-gray-600">Waktu Baca:</span>
                          <span className="font-medium">
                            {selectedBook.reading_time} jam
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Halaman:</span>
                          <span className="font-medium">
                            {selectedBook.pages_read}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Rating */}
                  {selectedBook.rating && (
                    <div>
                      <h4 className="font-medium text-gray-900 mb-2">Rating</h4>
                      <div className="flex items-center gap-2">
                        <div className="flex">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <Star
                              key={star}
                              className={`w-5 h-5 ${
                                star <= selectedBook.rating
                                  ? "text-yellow-400 fill-current"
                                  : "text-gray-300"
                              }`}
                            />
                          ))}
                        </div>
                        <span className="text-sm text-gray-600">
                          {selectedBook.rating}/5 bintang
                        </span>
                      </div>
                    </div>
                  )}

                  {/* Progress Bar */}
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">
                      Progress Membaca
                    </h4>
                    <div className="w-full bg-gray-200 rounded-full h-3">
                      <div
                        className={`h-3 rounded-full transition-all duration-300 ${getProgressColor(selectedBook.progress)}`}
                        style={{ width: `${selectedBook.progress}%` }}
                      ></div>
                    </div>
                    <p className="text-sm text-gray-600 mt-1">
                      {selectedBook.progress}% dari total buku
                    </p>
                  </div>
                </div>
              </div>

              {/* Notes */}
              {selectedBook.notes && (
                <div className="mb-6">
                  <h4 className="font-medium text-gray-900 mb-2">
                    Catatan Pribadi
                  </h4>
                  <div className="bg-gray-50 rounded-lg p-4">
                    <p className="text-gray-700 italic">
                      "{selectedBook.notes}"
                    </p>
                  </div>
                </div>
              )}

              {/* Action Buttons */}
              <div className="flex gap-3 justify-end">
                <Button
                  variant="outline"
                  onClick={() => setShowDetailModal(false)}
                  className="border-blue-600 text-blue-600 hover:bg-red-600 hover:text-white hover:border-red-600"
                >
                  Tutup
                </Button>
                {selectedBook.progress < 100 && (
                  <Button className="bg-stis-blue hover:bg-stis-blue-dark">
                    Lanjut Baca
                  </Button>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Help Popup */}
      <HelpPopup pageHelp={helpItems} />
    </div>
  );
}
