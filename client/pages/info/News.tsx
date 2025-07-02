import { useState } from "react";
import {
  Search,
  Filter,
  Calendar,
  User,
  Eye,
  Tag,
  Clock,
  Bell,
  Megaphone,
  FileText,
  ArrowRight,
  BookOpen,
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

export default function News() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("semua");
  const [selectedSort, setSelectedSort] = useState("terbaru");

  const categories = [
    { id: "semua", label: "Semua", count: 28 },
    { id: "pengumuman", label: "Pengumuman", count: 12 },
    { id: "berita", label: "Berita", count: 8 },
    { id: "event", label: "Event", count: 5 },
    { id: "koleksi-baru", label: "Koleksi Baru", count: 3 },
  ];

  const featuredNews = {
    id: 1,
    title: "Peluncuran SIMPus 3.0 dengan Fitur AI Assistant",
    excerpt:
      "Perpustakaan STIS dengan bangga memperkenalkan SIMPus versi 3.0 yang dilengkapi dengan AI Assistant untuk membantu pencarian koleksi dan rekomendasi bacaan yang lebih personal.",
    content:
      "Jakarta, 15 Januari 2024 - Perpustakaan Politeknik Statistika STIS resmi meluncurkan Sistem Informasi Manajemen Perpustakaan (SIMPus) versi 3.0 yang menghadirkan berbagai fitur revolusioner. Fitur unggulan adalah AI Assistant yang dapat membantu pengguna dalam mencari koleksi, memberikan rekomendasi bacaan berdasarkan minat dan riwayat baca, serta menjawab pertanyaan seputar layanan perpustakaan.",
    category: "pengumuman",
    author: "Tim IT Perpustakaan",
    date: "2024-01-15",
    views: 1247,
    image: "/placeholder.svg",
    tags: ["teknologi", "ai", "simpus", "update"],
    priority: "high",
  };

  const newsData = [
    {
      id: 2,
      title: "Workshop Literasi Digital untuk Mahasiswa Baru",
      excerpt:
        "Perpustakaan mengadakan workshop literasi digital khusus untuk mahasiswa baru angkatan 2024.",
      category: "event",
      author: "Dr. Siti Nurjannah",
      date: "2024-01-12",
      views: 456,
      image: "/placeholder.svg",
      tags: ["workshop", "literasi", "mahasiswa-baru"],
      priority: "medium",
    },
    {
      id: 3,
      title: "Koleksi E-Book Statistika Terbaru dari Springer",
      excerpt:
        "Perpustakaan menambah 150+ e-book terbaru dalam bidang statistika dan data science.",
      category: "koleksi-baru",
      author: "Pustakawan",
      date: "2024-01-10",
      views: 892,
      image: "/placeholder.svg",
      tags: ["e-book", "statistika", "springer"],
      priority: "medium",
    },
    {
      id: 4,
      title: "Perpanjangan Jam Operasional Selama Masa UAS",
      excerpt:
        "Mulai 20 Januari 2024, perpustakaan akan buka hingga pukul 20:00 WIB selama masa UAS.",
      category: "pengumuman",
      author: "Kepala Perpustakaan",
      date: "2024-01-08",
      views: 1567,
      image: "/placeholder.svg",
      tags: ["jam-buka", "uas", "perpanjangan"],
      priority: "high",
    },
    {
      id: 5,
      title: "Seminar Nasional Data Science 2024",
      excerpt:
        "STIS mengadakan seminar nasional dengan tema 'Big Data dan Machine Learning untuk Pembangunan Indonesia'.",
      category: "event",
      author: "Panitia Seminar",
      date: "2024-01-05",
      views: 723,
      image: "/placeholder.svg",
      tags: ["seminar", "data-science", "machine-learning"],
      priority: "medium",
    },
    {
      id: 6,
      title: "Maintenance Server Perpustakaan",
      excerpt:
        "SIMPus akan mengalami maintenance pada 25 Januari 2024 pukul 02:00-06:00 WIB.",
      category: "pengumuman",
      author: "Tim IT",
      date: "2024-01-03",
      views: 234,
      image: "/placeholder.svg",
      tags: ["maintenance", "server", "simpus"],
      priority: "low",
    },
    {
      id: 7,
      title: "Kerjasama dengan IEEE Digital Library",
      excerpt:
        "Perpustakaan STIS resmi bermitra dengan IEEE untuk akses database jurnal internasional.",
      category: "berita",
      author: "Kepala Perpustakaan",
      date: "2024-01-01",
      views: 945,
      image: "/placeholder.svg",
      tags: ["kerjasama", "ieee", "database"],
      priority: "medium",
    },
    {
      id: 8,
      title: "Program Mahasiswa Mentor Perpustakaan",
      excerpt:
        "Buka pendaftaran program mahasiswa mentor untuk membantu sesama mahasiswa dalam menggunakan layanan perpustakaan.",
      category: "pengumuman",
      author: "Bagian Layanan",
      date: "2023-12-28",
      views: 378,
      image: "/placeholder.svg",
      tags: ["mentor", "mahasiswa", "program"],
      priority: "medium",
    },
  ];

  const filteredNews = newsData.filter((news) => {
    const matchesSearch =
      news.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      news.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory =
      selectedCategory === "semua" || news.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  const sortedNews = [...filteredNews].sort((a, b) => {
    switch (selectedSort) {
      case "terbaru":
        return new Date(b.date).getTime() - new Date(a.date).getTime();
      case "terlama":
        return new Date(a.date).getTime() - new Date(b.date).getTime();
      case "populer":
        return b.views - a.views;
      default:
        return 0;
    }
  });

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("id-ID", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "high":
        return "bg-red-500";
      case "medium":
        return "bg-yellow-500";
      case "low":
        return "bg-green-500";
      default:
        return "bg-gray-500";
    }
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "pengumuman":
        return Megaphone;
      case "berita":
        return FileText;
      case "event":
        return Calendar;
      case "koleksi-baru":
        return BookOpen;
      default:
        return Bell;
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Header */}
      <div className="bg-gradient-to-br from-stis-blue-light via-white to-stis-gray-light pt-24 pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="secondary" className="mb-4">
              Informasi
            </Badge>
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              Berita & <span className="text-stis-blue">Pengumuman</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 leading-relaxed">
              Informasi terbaru tentang layanan, kegiatan, dan perkembangan
              Perpustakaan STIS yang perlu Anda ketahui
            </p>
          </div>
        </div>
      </div>

      {/* Featured News */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center gap-2 mb-8">
              <div
                className={`w-3 h-3 ${getPriorityColor(featuredNews.priority)} rounded-full`}
              />
              <Badge className="bg-stis-blue hover:bg-stis-blue-dark">
                Berita Utama
              </Badge>
            </div>

            <Card className="border-0 shadow-lg overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="aspect-video lg:aspect-auto bg-gradient-to-br from-stis-blue-light to-stis-gray-light flex items-center justify-center">
                  <FileText className="w-24 h-24 text-stis-blue/40" />
                </div>
                <CardContent className="p-8">
                  <div className="flex items-center gap-2 mb-4">
                    <Badge variant="outline" className="text-xs">
                      {
                        categories.find(
                          (cat) => cat.id === featuredNews.category,
                        )?.label
                      }
                    </Badge>
                    <div className="flex items-center gap-1 text-xs text-gray-500">
                      <Eye className="w-3 h-3" />
                      <span>{featuredNews.views}</span>
                    </div>
                  </div>

                  <h2 className="text-2xl font-bold text-gray-900 mb-4">
                    {featuredNews.title}
                  </h2>

                  <p className="text-gray-600 leading-relaxed mb-6">
                    {featuredNews.excerpt}
                  </p>

                  <div className="flex items-center justify-between text-sm text-gray-500 mb-6">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-1">
                        <User className="w-4 h-4" />
                        <span>{featuredNews.author}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        <span>{formatDate(featuredNews.date)}</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-1 mb-6">
                    {featuredNews.tags.map((tag, idx) => (
                      <Badge key={idx} variant="outline" className="text-xs">
                        <Tag className="w-3 h-3 mr-1" />
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  <Button className="bg-stis-blue hover:bg-stis-blue-dark">
                    Baca Selengkapnya
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </CardContent>
              </div>
            </Card>
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
                    placeholder="Cari berita atau pengumuman..."
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
                    {categories.map((category) => (
                      <SelectItem key={category.id} value={category.id}>
                        {category.label} ({category.count})
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>

                <Select value={selectedSort} onValueChange={setSelectedSort}>
                  <SelectTrigger className="w-full lg:w-36">
                    <SelectValue placeholder="Urutkan" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="terbaru">Terbaru</SelectItem>
                    <SelectItem value="terlama">Terlama</SelectItem>
                    <SelectItem value="populer">Populer</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* News List */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <Tabs defaultValue="grid" className="w-full">
              <div className="flex items-center justify-between mb-8">
                <h3 className="text-2xl font-bold text-gray-900">
                  Berita & Pengumuman ({sortedNews.length})
                </h3>
                <TabsList className="grid w-fit grid-cols-2">
                  <TabsTrigger value="grid">Grid</TabsTrigger>
                  <TabsTrigger value="list">List</TabsTrigger>
                </TabsList>
              </div>

              {/* Grid View */}
              <TabsContent value="grid">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {sortedNews.map((news) => {
                    const CategoryIcon = getCategoryIcon(news.category);
                    return (
                      <Card
                        key={news.id}
                        className="border-0 shadow-lg hover:shadow-xl transition-shadow overflow-hidden"
                      >
                        <div className="aspect-video bg-gradient-to-br from-stis-blue-light to-stis-gray-light flex items-center justify-center">
                          <CategoryIcon className="w-12 h-12 text-stis-blue/40" />
                        </div>

                        <CardContent className="p-6">
                          <div className="flex items-center gap-2 mb-3">
                            <div
                              className={`w-2 h-2 ${getPriorityColor(news.priority)} rounded-full`}
                            />
                            <Badge variant="outline" className="text-xs">
                              {
                                categories.find(
                                  (cat) => cat.id === news.category,
                                )?.label
                              }
                            </Badge>
                            <div className="flex items-center gap-1 text-xs text-gray-500">
                              <Eye className="w-3 h-3" />
                              <span>{news.views}</span>
                            </div>
                          </div>

                          <h4 className="font-semibold text-gray-900 mb-3 line-clamp-2">
                            {news.title}
                          </h4>

                          <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                            {news.excerpt}
                          </p>

                          <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
                            <div className="flex items-center gap-1">
                              <User className="w-3 h-3" />
                              <span>{news.author}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <Clock className="w-3 h-3" />
                              <span>{formatDate(news.date)}</span>
                            </div>
                          </div>

                          <div className="flex flex-wrap gap-1 mb-4">
                            {news.tags.slice(0, 2).map((tag, idx) => (
                              <Badge
                                key={idx}
                                variant="outline"
                                className="text-xs"
                              >
                                {tag}
                              </Badge>
                            ))}
                            {news.tags.length > 2 && (
                              <Badge variant="outline" className="text-xs">
                                +{news.tags.length - 2}
                              </Badge>
                            )}
                          </div>

                          <Button
                            size="sm"
                            className="w-full bg-stis-blue hover:bg-stis-blue-dark"
                          >
                            Baca Selengkapnya
                          </Button>
                        </CardContent>
                      </Card>
                    );
                  })}
                </div>
              </TabsContent>

              {/* List View */}
              <TabsContent value="list">
                <div className="space-y-6">
                  {sortedNews.map((news) => {
                    const CategoryIcon = getCategoryIcon(news.category);
                    return (
                      <Card
                        key={news.id}
                        className="border-0 shadow-lg hover:shadow-xl transition-shadow"
                      >
                        <CardContent className="p-6">
                          <div className="flex gap-6">
                            <div className="w-24 h-24 bg-gradient-to-br from-stis-blue-light to-stis-gray-light rounded-lg flex items-center justify-center flex-shrink-0">
                              <CategoryIcon className="w-8 h-8 text-stis-blue/40" />
                            </div>

                            <div className="flex-1">
                              <div className="flex items-center gap-2 mb-2">
                                <div
                                  className={`w-2 h-2 ${getPriorityColor(news.priority)} rounded-full`}
                                />
                                <Badge variant="outline" className="text-xs">
                                  {
                                    categories.find(
                                      (cat) => cat.id === news.category,
                                    )?.label
                                  }
                                </Badge>
                                <div className="flex items-center gap-1 text-xs text-gray-500">
                                  <Eye className="w-3 h-3" />
                                  <span>{news.views}</span>
                                </div>
                              </div>

                              <h4 className="text-xl font-semibold text-gray-900 mb-2">
                                {news.title}
                              </h4>

                              <p className="text-gray-600 mb-4 leading-relaxed">
                                {news.excerpt}
                              </p>

                              <div className="flex items-center justify-between">
                                <div className="flex items-center gap-4 text-sm text-gray-500">
                                  <div className="flex items-center gap-1">
                                    <User className="w-4 h-4" />
                                    <span>{news.author}</span>
                                  </div>
                                  <div className="flex items-center gap-1">
                                    <Clock className="w-4 h-4" />
                                    <span>{formatDate(news.date)}</span>
                                  </div>
                                </div>

                                <Button
                                  size="sm"
                                  className="bg-stis-blue hover:bg-stis-blue-dark"
                                >
                                  Baca Selengkapnya
                                  <ArrowRight className="w-4 h-4 ml-2" />
                                </Button>
                              </div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    );
                  })}
                </div>
              </TabsContent>
            </Tabs>

            {/* Pagination */}
            <div className="flex items-center justify-center gap-2 mt-12">
              <Button variant="outline" disabled>
                Sebelumnya
              </Button>
              <Button variant="default" className="bg-stis-blue">
                1
              </Button>
              <Button variant="outline">2</Button>
              <Button variant="outline">3</Button>
              <Button variant="outline">Selanjutnya</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Subscription */}
      <section className="py-16 bg-stis-gray-light">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-stis-blue/10 rounded-xl flex items-center justify-center mx-auto mb-6">
                  <Bell className="w-8 h-8 text-stis-blue" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Dapatkan Update Terbaru
                </h3>
                <p className="text-gray-600 mb-6">
                  Berlangganan newsletter untuk mendapatkan informasi terbaru
                  tentang layanan dan kegiatan perpustakaan
                </p>
                <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                  <Input
                    type="email"
                    placeholder="Masukkan email Anda"
                    className="flex-1"
                  />
                  <Button className="bg-stis-blue hover:bg-stis-blue-dark">
                    Berlangganan
                  </Button>
                </div>
                <p className="text-xs text-gray-500 mt-3">
                  Kami menghormati privasi Anda. Unsubscribe kapan saja.
                </p>
              </CardContent>
            </Card>
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
                  <FileText className="w-7 h-7 text-white" />
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
    </div>
  );
}
