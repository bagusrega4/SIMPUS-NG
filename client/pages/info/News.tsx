import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Search,
  Filter,
  Calendar,
  User,
  Eye,
  Tag,
  Clock,
  Megaphone,
  FileText,
  ArrowRight,
  BookOpen,
  Instagram,
  Twitter,
  Youtube,
  Phone,
  MapPin,
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

export default function News() {
  const navigate = useNavigate();
  const helpItems = [
    {
      question: "Bagaimana cara mendapatkan notifikasi berita terbaru?",
      answer:
        "Anda dapat berlangganan newsletter perpustakaan atau mengikuti media sosial kami untuk mendapat update berita dan pengumuman terbaru.",
    },
    {
      question: "Bisakah mengajukan liputan event di perpustakaan?",
      answer:
        "Ya, hubungi tim humas perpustakaan untuk koordinasi liputan event atau kegiatan yang akan diselenggarakan.",
    },
    {
      question: "Dimana arsip berita dan pengumuman lama?",
      answer:
        "Arsip berita dapat diakses melalui fitur pencarian atau filter berdasarkan tahun dan kategori yang tersedia di halaman ini.",
    },
  ];

  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("semua");
  const [selectedYear, setSelectedYear] = useState("semua");

  // Sample news data
  const news = [
    {
      id: 1,
      title: "Peluncuran SIMPus 3.0 dengan Fitur AI Assistant",
      excerpt:
        "Perpustakaan STIS dengan bangga memperkenalkan SIMPus versi 3.0 yang dilengkapi dengan AI Assistant untuk membantu pencarian koleksi dan rekomendasi bacaan yang lebih personal.",
      content:
        "Jakarta, 15 Januari 2024 - Perpustakaan Politeknik Statistika STIS resmi meluncurkan Sistem Informasi Manajemen Perpustakaan (SIMPus) versi 3.0 yang menghadirkan berbagai fitur revolusioner. Fitur unggulan adalah AI Assistant yang dapat membantu pengguna dalam mencari koleksi, memberikan rekomendasi bacaan berdasarkan minat dan riwayat baca, serta menjawab pertanyaan seputar layanan perpustakaan.",
      category: "pengumuman",
      author: "Tim IT Perpustakaan",
      date: "2024-01-15",
      views: 1250,
      image: "/placeholder.svg",
      tags: ["teknologi", "inovasi", "AI", "sistem baru"],
      priority: "high",
    },
    {
      id: 2,
      title: "Workshop Literasi Digital untuk Mahasiswa Baru",
      excerpt:
        "Program pelatihan literasi digital khusus mahasiswa baru tahun akademik 2024/2025 akan dimulai pada minggu kedua Februari 2024.",
      content:
        "Perpustakaan STIS mengundang seluruh mahasiswa baru angkatan 2024 untuk mengikuti Workshop Literasi Digital yang akan diselenggarakan mulai 12-16 Februari 2024. Workshop ini bertujuan untuk membekali mahasiswa dengan kemampuan mencari, mengevaluasi, dan menggunakan informasi digital secara efektif dan bertanggung jawab.",
      category: "acara",
      author: "Pustakawan Senior",
      date: "2024-01-10",
      views: 890,
      image: "/placeholder.svg",
      tags: ["workshop", "literasi", "mahasiswa baru", "digital"],
      priority: "medium",
    },
    {
      id: 3,
      title: "Koleksi E-Book Terbaru: 500+ Judul Bidang Data Science",
      excerpt:
        "Perpustakaan menambah koleksi e-book dengan 500+ judul terbaru di bidang Data Science, Machine Learning, dan Artificial Intelligence.",
      content:
        "Dalam upaya mendukung pembelajaran dan penelitian di era digital, Perpustakaan STIS telah menambahkan 500+ judul e-book terbaru dalam bidang Data Science, Machine Learning, dan Artificial Intelligence. Koleksi ini dapat diakses 24/7 melalui portal perpustakaan dengan menggunakan akun mahasiswa/dosen STIS.",
      category: "koleksi-baru",
      author: "Tim Pengembangan Koleksi",
      date: "2024-01-05",
      views: 672,
      image: "/placeholder.svg",
      tags: ["e-book", "data science", "machine learning", "AI"],
      priority: "medium",
    },
    {
      id: 4,
      title: "Penutupan Sementara Ruang Baca Lantai 2",
      excerpt:
        "Ruang baca lantai 2 akan ditutup sementara untuk renovasi sistem AC dan pencahayaan selama periode 20-31 Januari 2024.",
      content:
        "Diberitahukan kepada seluruh civitas akademika bahwa Ruang Baca Lantai 2 akan ditutup sementara untuk kegiatan renovasi sistem AC dan pencahayaan. Renovasi dilaksanakan pada 20-31 Januari 2024. Selama periode tersebut, mahasiswa dapat menggunakan fasilitas ruang baca di lantai 1 dan lantai 3.",
      category: "pengumuman",
      author: "Bagian Fasilitas",
      date: "2024-01-18",
      views: 445,
      image: "/placeholder.svg",
      tags: ["pengumuman", "renovasi", "ruang baca"],
      priority: "high",
    },
  ];

  const categories = [
    { id: "semua", label: "Semua Kategori" },
    { id: "pengumuman", label: "Pengumuman" },
    { id: "acara", label: "Acara & Event" },
    { id: "koleksi-baru", label: "Koleksi Baru" },
    { id: "beasiswa", label: "Beasiswa" },
  ];

  const years = ["semua", "2024", "2023", "2022", "2021"];

  const filteredNews = news.filter((item) => {
    const matchesSearch =
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.content.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.tags.some((tag) =>
        tag.toLowerCase().includes(searchQuery.toLowerCase()),
      );
    const matchesCategory =
      selectedCategory === "semua" || item.category === selectedCategory;
    const matchesYear =
      selectedYear === "semua" || item.date.startsWith(selectedYear);

    return matchesSearch && matchesCategory && matchesYear;
  });

  const featuredNews = news.find((item) => item.priority === "high") || news[0];

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "pengumuman":
        return Megaphone;
      case "acara":
        return Calendar;
      case "koleksi-baru":
        return BookOpen;
      default:
        return Megaphone;
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "high":
        return "bg-red-500";
      case "medium":
        return "bg-yellow-500";
      case "low":
        return "bg-stis-cyan";
      default:
        return "bg-gray-500";
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Header */}
      <div className="bg-gradient-to-br from-stis-blue-light via-white to-stis-gray-light pt-24 pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
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
      <section className="py-16 bg-stis-gray-light">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Berita Utama
              </h2>
              <p className="text-lg text-gray-600">
                Informasi penting yang perlu Anda ketahui
              </p>
            </div>

            <div className="flex items-center gap-2 mb-8">
              <div
                className={`w-3 h-3 ${getPriorityColor(featuredNews.priority)} rounded-full`}
              />
              <Badge className="bg-stis-blue hover:bg-stis-blue-dark">
                {featuredNews.category.replace("-", " ").toUpperCase()}
              </Badge>
            </div>

            <Card className="border-0 shadow-lg overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="aspect-video lg:aspect-auto bg-gradient-to-br from-stis-blue-light to-stis-gray-light flex items-center justify-center">
                  <FileText className="w-24 h-24 text-stis-blue/40" />
                </div>
                <div className="p-8">
                  <div className="flex items-center gap-2 mb-4">
                    <Calendar className="w-4 h-4 text-gray-500" />
                    <span className="text-sm text-gray-500">
                      {new Date(featuredNews.date).toLocaleDateString("id-ID", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </span>
                    <span className="text-gray-300">•</span>
                    <User className="w-4 h-4 text-gray-500" />
                    <span className="text-sm text-gray-500">
                      {featuredNews.author}
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {featuredNews.title}
                  </h3>

                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {featuredNews.excerpt}
                  </p>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4 text-sm text-gray-500">
                      <div className="flex items-center gap-1">
                        <Eye className="w-4 h-4" />
                        <span>{featuredNews.views} views</span>
                      </div>
                    </div>
                    <Button
                      className="bg-stis-blue hover:bg-stis-blue-dark"
                      onClick={() => navigate(`/info/news/${featuredNews.id}`)}
                    >
                      Baca Selengkapnya
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Search & Filter */}
      <section className="py-8 bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col lg:flex-row gap-6 items-center">
              <div className="flex-1 w-full lg:w-auto">
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <Input
                    type="text"
                    placeholder="Cari berita, pengumuman, atau topik..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-12 py-3 text-base rounded-xl border-2 border-gray-200 focus:border-stis-blue"
                  />
                </div>
              </div>

              <div className="flex gap-4 w-full lg:w-auto">
                <Select
                  value={selectedCategory}
                  onValueChange={setSelectedCategory}
                >
                  <SelectTrigger className="w-48 focus:ring-stis-blue">
                    <SelectValue placeholder="Kategori" />
                  </SelectTrigger>
                  <SelectContent>
                    {categories.map((category) => (
                      <SelectItem
                        key={category.id}
                        value={category.id}
                        className="focus:bg-stis-blue/10 focus:text-stis-blue data-[highlighted]:bg-stis-blue/10 data-[highlighted]:text-stis-blue"
                      >
                        {category.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>

                <Select value={selectedYear} onValueChange={setSelectedYear}>
                  <SelectTrigger className="w-32 focus:ring-stis-blue">
                    <SelectValue placeholder="Tahun" />
                  </SelectTrigger>
                  <SelectContent>
                    {years.map((year) => (
                      <SelectItem
                        key={year}
                        value={year}
                        className="focus:bg-stis-blue/10 focus:text-stis-blue data-[highlighted]:bg-stis-blue/10 data-[highlighted]:text-stis-blue"
                      >
                        {year === "semua" ? "Semua" : year}
                      </SelectItem>
                    ))}
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
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-3xl font-bold text-gray-900">
                Semua Berita & Pengumuman
              </h2>
              <span className="text-gray-600">
                {filteredNews.length} artikel ditemukan
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredNews.map((item) => {
                const CategoryIcon = getCategoryIcon(item.category);
                return (
                  <Card
                    key={item.id}
                    className="border-0 shadow-lg hover:shadow-xl transition-shadow group cursor-pointer h-full"
                  >
                    <CardContent className="p-0 h-full flex flex-col">
                      <div className="aspect-video bg-gradient-to-br from-stis-blue-light to-stis-gray-light flex items-center justify-center">
                        <CategoryIcon className="w-12 h-12 text-stis-blue/40" />
                      </div>

                      <div className="p-6 flex flex-col flex-grow">
                        <div className="flex items-center gap-2 mb-3">
                          <Badge variant="secondary" className="text-xs">
                            {item.category.replace("-", " ")}
                          </Badge>
                          <div
                            className={`w-2 h-2 ${getPriorityColor(item.priority)} rounded-full`}
                          />
                        </div>

                        <h3 className="text-lg font-semibold text-gray-900 mb-3 group-hover:text-stis-blue transition-colors line-clamp-2">
                          {item.title}
                        </h3>

                        <p className="text-gray-600 text-sm mb-4 leading-relaxed flex-grow line-clamp-3">
                          {item.excerpt}
                        </p>

                        <div className="space-y-3 mt-auto">
                          <div className="flex items-center gap-2 text-xs text-gray-500">
                            <Calendar className="w-3 h-3" />
                            <span>
                              {new Date(item.date).toLocaleDateString("id-ID")}
                            </span>
                            <span className="text-gray-300">•</span>
                            <Eye className="w-3 h-3" />
                            <span>{item.views} views</span>
                          </div>

                          <div className="flex flex-wrap gap-1">
                            {item.tags.slice(0, 3).map((tag, index) => (
                              <Badge
                                key={index}
                                variant="outline"
                                className="text-xs"
                              >
                                {tag}
                              </Badge>
                            ))}
                          </div>

                          <Button
                            size="sm"
                            variant="outline"
                            className="w-full border-stis-blue text-stis-blue hover:bg-stis-blue hover:text-white group-hover:shadow-md"
                            onClick={() => navigate(`/info/news/${item.id}`)}
                          >
                            Baca Selengkapnya
                            <ArrowRight className="w-3 h-3 ml-2" />
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            {filteredNews.length === 0 && (
              <div className="text-center py-16">
                <div className="w-24 h-24 bg-stis-blue/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Search className="w-12 h-12 text-stis-blue" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Tidak ada hasil
                </h3>
                <p className="text-gray-600">
                  Coba ubah kata kunci atau filter pencarian Anda
                </p>
              </div>
            )}
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

      <HelpPopup pageHelp={helpItems} />
    </div>
  );
}
