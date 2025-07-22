import { useState } from "react";
import {
  Search,
  Filter,
  FileText,
  Download,
  Eye,
  Star,
  Calendar,
  User,
  GraduationCap,
  Award,
  TrendingUp,
  BookOpen,
  Phone,
  MapPin,
  Clock,
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
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import Navigation from "@/components/Navigation";
import HelpPopup from "@/components/HelpPopup";

export default function Repository() {
  const helpItems = [
    {
      question: "Apa itu Repository Polstat STIS?",
      answer:
        "Kumpulan karya ilmiah civitas akademika Polstat STIS meliputi tugas akhir, skripsi, tesis, publikasi, dan laporan penelitian.",
    },
    {
      question: "Bagaimana cara submit karya ke repository?",
      answer:
        "Hubungi pustakawan atau gunakan sistem submit online. Pastikan dokumen dalam format PDF dengan metadata lengkap.",
    },
    {
      question: "Apakah semua karya bisa diakses publik?",
      answer:
        "Tergantung level akses yang ditetapkan. Ada yang open access, restricted, atau hanya untuk internal kampus.",
    },
  ];
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedYear, setSelectedYear] = useState("semua");
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedItem, setSelectedItem] = useState<any>(null);
  const itemsPerPage = 5;

  const repositoryStats = [
    { type: "Tugas Akhir D3", count: 342, icon: GraduationCap },
    { type: "Skripsi D4 Statistika", count: 298, icon: GraduationCap },
    { type: "Skripsi D4 Komputasi Statistik", count: 216, icon: GraduationCap },
    { type: "Karya Ilmiah Dosen", count: 300, icon: Award },
  ];

  const theses = [
    {
      id: 1,
      title:
        "Implementasi Machine Learning dalam Analisis Sentimen Media Sosial",
      author: "Sari Dewi",
      nim: "16.8888.2222",
      supervisor: "Prof. Dr. Cahya Utama, M.Kom",
      department: "D-IV Komputasi Statistik",
      year: 2023,
      pages: 98,
      file_size: "3.1 MB",
      downloads: 456,
      views: 2134,
      rating: 4.9,
      keywords: ["machine learning", "sentimen", "media sosial", "nlp"],
      abstract:
        "Studi tentang penerapan algoritma machine learning untuk menganalisis sentimen pada data media sosial...",
      type: "tugas_akhir",
      access: "open",
    },
    {
      id: 2,
      title: "Penerapan Metode Sampling Sistematis pada Survei Rumah Tangga",
      author: "Budi Santoso",
      nim: "16.8888.3333",
      supervisor: "Dr. Rina Kartika, M.Si",
      department: "D-IV Statistika",
      year: 2023,
      pages: 89,
      file_size: "1.8 MB",
      downloads: 189,
      views: 945,
      rating: 4.6,
      keywords: ["sampling", "survei", "rumah tangga", "metodologi"],
      abstract:
        "Penelitian ini membahas efektivitas metode sampling sistematis dalam survei rumah tangga...",
      type: "tugas_akhir",
      access: "open",
    },
    {
      id: 3,
      title: "Analisis Survival untuk Data Kesehatan Masyarakat",
      author: "Fitri Handayani",
      nim: "16.8888.4444",
      supervisor: "Dr. Agus Setiawan, M.Si",
      department: "D-IV Statistika",
      year: 2023,
      pages: 156,
      file_size: "4.2 MB",
      downloads: 298,
      views: 1876,
      rating: 4.7,
      keywords: [
        "survival analysis",
        "kesehatan",
        "masyarakat",
        "epidemiologi",
      ],
      abstract:
        "Penelitian ini mengaplikasikan analisis survival untuk menganalisis faktor-faktor yang mempengaruhi ketahanan hidup pasien...",
      type: "tugas_akhir",
      access: "open",
    },
    {
      id: 4,
      title: "Implementasi Algoritma Clustering untuk Segmentasi Pelanggan",
      author: "Rudi Hartono",
      nim: "16.8888.5555",
      supervisor: "Prof. Dr. Maya Sari, M.Kom",
      department: "D-IV Komputasi Statistik",
      year: 2022,
      pages: 134,
      file_size: "3.8 MB",
      downloads: 421,
      views: 2341,
      rating: 4.9,
      keywords: ["clustering", "segmentasi", "pelanggan", "data mining"],
      abstract:
        "Studi tentang penerapan algoritma clustering k-means dan hierarchical untuk segmentasi pelanggan...",
      type: "tugas_akhir",
      access: "open",
    },
    {
      id: 5,
      title: "Analisis Time Series untuk Peramalan Harga Komoditas",
      author: "Lina Kusuma",
      nim: "16.8888.6666",
      supervisor: "Dr. Hadi Wijaya, M.Si",
      department: "D-IV Statistika",
      year: 2022,
      pages: 112,
      file_size: "2.9 MB",
      downloads: 356,
      views: 1654,
      rating: 4.6,
      keywords: ["time series", "peramalan", "komoditas", "ARIMA"],
      abstract:
        "Penelitian ini menggunakan model ARIMA dan GARCH untuk meramalkan harga komoditas pangan...",
      type: "tugas_akhir",
      access: "open",
    },
    {
      id: 6,
      title: "Penerapan Deep Learning untuk Klasifikasi Citra Medis",
      author: "Ahmad Fauzi",
      nim: "16.8888.7777",
      supervisor: "Dr. Indira Pratiwi, M.Kom",
      department: "D-IV Komputasi Statistik",
      year: 2022,
      pages: 167,
      file_size: "5.1 MB",
      downloads: 512,
      views: 2987,
      rating: 4.8,
      keywords: ["deep learning", "CNN", "klasifikasi", "citra medis"],
      abstract:
        "Implementasi Convolutional Neural Network untuk klasifikasi otomatis citra X-ray paru-paru...",
      type: "tugas_akhir",
      access: "open",
    },
    {
      id: 7,
      title: "Analisis Regresi Logistik untuk Prediksi Kredit Macet",
      author: "Dewi Sartika",
      nim: "16.8888.8888",
      supervisor: "Dr. Bambang Suryanto, M.Si",
      department: "D-IV Statistika",
      year: 2021,
      pages: 143,
      file_size: "3.5 MB",
      downloads: 234,
      views: 1432,
      rating: 4.5,
      keywords: ["regresi logistik", "kredit", "risiko", "perbankan"],
      abstract:
        "Penelitian ini menggunakan model regresi logistik untuk memprediksi risiko kredit macet...",
      type: "tugas_akhir",
      access: "restricted",
    },
    {
      id: 8,
      title: "Implementasi Natural Language Processing untuk Chatbot",
      author: "Rizki Pratama",
      nim: "16.8888.9999",
      supervisor: "Prof. Dr. Eka Sari, M.Kom",
      department: "D-IV Komputasi Statistik",
      year: 2021,
      pages: 189,
      file_size: "4.7 MB",
      downloads: 387,
      views: 2156,
      rating: 4.7,
      keywords: ["NLP", "chatbot", "AI", "conversation"],
      abstract:
        "Pengembangan sistem chatbot menggunakan teknik Natural Language Processing dan machine learning...",
      type: "tugas_akhir",
      access: "open",
    },
    {
      id: 9,
      title: "Analisis Jaringan Sosial untuk Studi Penyebaran Informasi",
      author: "Maya Indrawati",
      nim: "16.8888.1010",
      supervisor: "Dr. Agung Prabowo, M.Si",
      department: "D-IV Statistika",
      year: 2021,
      pages: 198,
      file_size: "6.2 MB",
      downloads: 423,
      views: 1987,
      rating: 4.8,
      keywords: [
        "network analysis",
        "social media",
        "information diffusion",
        "graph theory",
      ],
      abstract:
        "Penelitian ini menganalisis pola penyebaran informasi di media sosial menggunakan teori graf...",
      type: "tugas_akhir",
      access: "open",
    },
  ];

  const publications = [
    {
      id: 1,
      title: "Statistical Analysis of Economic Indicators in Indonesia",
      author: "Dr. Ahmad Wijaya, M.Si",
      journal: "Indonesian Journal of Statistics",
      volume: "Vol. 24 No. 2",
      year: 2023,
      pages: "pp. 45-67",
      doi: "10.1234/ijs.2023.24.2.45",
      downloads: 189,
      views: 876,
      rating: 4.7,
      keywords: ["ekonomi", "indikator", "statistik", "indonesia"],
      abstract:
        "This study examines the correlation between various economic indicators...",
      type: "publikasi",
      access: "open",
    },
    {
      id: 2,
      title: "Big Data Analytics in Indonesian Government Statistics",
      author: "Prof. Dr. Sari Melati, M.Stat",
      journal: "International Journal of Government Statistics",
      volume: "Vol. 15 No. 3",
      year: 2023,
      pages: "pp. 112-135",
      doi: "10.1234/ijgs.2023.15.3.112",
      downloads: 267,
      views: 1234,
      rating: 4.8,
      keywords: ["big data", "analytics", "government", "statistics"],
      abstract:
        "This paper explores the implementation of big data analytics in government statistical systems...",
      type: "publikasi",
      access: "open",
    },
    {
      id: 3,
      title: "Machine Learning Applications in Official Statistics",
      author: "Dr. Budi Santoso, M.Stat",
      journal: "Journal of Official Statistics",
      volume: "Vol. 39 No. 4",
      year: 2023,
      pages: "pp. 789-812",
      doi: "10.2478/jos-2023-0035",
      downloads: 345,
      views: 1567,
      rating: 4.9,
      keywords: [
        "machine learning",
        "official statistics",
        "automation",
        "data processing",
      ],
      abstract:
        "This paper reviews the current applications of machine learning techniques in official statistics production...",
      type: "publikasi",
      access: "open",
    },
    {
      id: 4,
      title: "Analisis Spasial Kemiskinan di Indonesia Menggunakan GIS",
      author: "Prof. Dr. Sinta Dewi, M.Si",
      journal: "Jurnal Ekonomi dan Pembangunan Indonesia",
      volume: "Vol. 23 No. 1",
      year: 2022,
      pages: "pp. 15-32",
      doi: "10.21002/jepi.2022.23.1.15",
      downloads: 298,
      views: 1432,
      rating: 4.6,
      keywords: ["spasial", "kemiskinan", "GIS", "indonesia"],
      abstract:
        "Penelitian ini menganalisis pola spasial kemiskinan di Indonesia menggunakan sistem informasi geografis...",
      type: "publikasi",
      access: "open",
    },
    {
      id: 5,
      title: "Deep Learning for Time Series Forecasting in Economic Data",
      author: "Dr. Rina Kartika, M.Kom",
      journal: "International Journal of Forecasting",
      volume: "Vol. 39 No. 2",
      year: 2022,
      pages: "pp. 456-471",
      doi: "10.1016/j.ijforecast.2022.02.008",
      downloads: 567,
      views: 2341,
      rating: 4.8,
      keywords: [
        "deep learning",
        "time series",
        "forecasting",
        "economic data",
      ],
      abstract:
        "This study compares various deep learning architectures for economic time series forecasting...",
      type: "publikasi",
      access: "restricted",
    },
    {
      id: 6,
      title: "Implementasi Blockchain untuk Keamanan Data Statistik",
      author: "Dr. Ahmad Fauzi, M.Kom",
      journal: "Jurnal Teknologi Informasi dan Komunikasi",
      volume: "Vol. 12 No. 3",
      year: 2022,
      pages: "pp. 78-95",
      doi: "10.25126/jtik.2022.12.3.78",
      downloads: 234,
      views: 987,
      rating: 4.5,
      keywords: ["blockchain", "keamanan data", "statistik", "teknologi"],
      abstract:
        "Penelitian ini mengeksplorasi potensi teknologi blockchain untuk meningkatkan keamanan data statistik...",
      type: "publikasi",
      access: "open",
    },
    {
      id: 7,
      title: "Statistical Methods for Social Media Analytics",
      author: "Prof. Dr. Maya Sari, M.Stat",
      journal: "Social Media Research Journal",
      volume: "Vol. 8 No. 2",
      year: 2021,
      pages: "pp. 123-145",
      doi: "10.1177/smrj.2021.8.2.123",
      downloads: 456,
      views: 1876,
      rating: 4.7,
      keywords: [
        "statistical methods",
        "social media",
        "analytics",
        "digital behavior",
      ],
      abstract:
        "This paper presents novel statistical approaches for analyzing social media data and user behavior...",
      type: "publikasi",
      access: "open",
    },
    {
      id: 8,
      title: "Penggunaan Big Data dalam Survei Nasional Indonesia",
      author: "Dr. Indira Pratiwi, M.Si",
      journal: "Jurnal Survei Indonesia",
      volume: "Vol. 7 No. 1",
      year: 2021,
      pages: "pp. 45-67",
      doi: "10.15294/jsi.2021.7.1.45",
      downloads: 321,
      views: 1543,
      rating: 4.6,
      keywords: ["big data", "survei nasional", "metodologi", "indonesia"],
      abstract:
        "Studi ini mengevaluasi penggunaan big data untuk meningkatkan efisiensi dan akurasi survei nasional...",
      type: "publikasi",
      access: "restricted",
    },
  ];

  // Combine all items
  const allItems = [...theses, ...publications];

  // Filter items based on search and year (like Books component)
  const filteredItems = allItems.filter((item) => {
    const matchesSearch =
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.author.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesYear =
      selectedYear === "semua" || item.year.toString() === selectedYear;

    return matchesSearch && matchesYear;
  });

  // Pagination calculations (like Books component)
  const totalPages = Math.ceil(filteredItems.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = filteredItems.slice(startIndex, endIndex);

  // Reset pagination when filters change
  const handleFilterChange = () => {
    setCurrentPage(1);
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Header */}
      <div className="bg-gradient-to-br from-stis-blue-light via-white to-stis-gray-light pt-24 pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              Repository <span className="text-stis-blue">STIS</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 leading-relaxed">
              Repositori institusi yang menyimpan dan menyediakan akses terbuka
              terhadap karya ilmiah civitas akademika STIS, termasuk tugas
              akhir, penelitian, dan publikasi
            </p>
          </div>
        </div>
      </div>

      {/* Statistics */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Statistik Repository
              </h2>
              <p className="text-lg text-gray-600">
                Koleksi karya ilmiah yang tersedia di repository STIS
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {repositoryStats.map((stat, index) => {
                const IconComponent = stat.icon;
                return (
                  <Card key={index} className="border-0 shadow-lg text-center">
                    <CardContent className="p-6">
                      <div className="w-12 h-12 bg-stis-blue/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                        <IconComponent className="w-6 h-6 text-stis-blue" />
                      </div>
                      <div className="text-2xl font-bold text-stis-blue mb-1">
                        {stat.count}
                      </div>
                      <div className="text-sm text-gray-600">{stat.type}</div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Search & Filter */}
      <section className="py-8 bg-stis-gray-light border-y border-gray-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col lg:flex-row gap-6 items-center">
              <div className="flex-1 w-full lg:w-auto">
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <Input
                    type="text"
                    placeholder="Cari karya ilmiah, penulis, atau kata kunci..."
                    value={searchQuery}
                    onChange={(e) => {
                      setSearchQuery(e.target.value);
                      setCurrentPage(1);
                    }}
                    className="pl-12 py-3 text-base rounded-xl border-2 border-gray-200 focus:border-stis-blue"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="mb-8">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold text-gray-900">
                  Repository Items ({filteredItems.length} items) - Halaman{" "}
                  {currentPage} dari {totalPages}
                </h3>
              </div>
              <div className="space-y-6">
                {currentItems.map((item) => (
                  <Card
                    key={item.id}
                    className="border-0 shadow-lg hover:shadow-xl transition-shadow"
                  >
                    <CardContent className="p-6">
                      <div className="flex flex-col lg:flex-row gap-6">
                        <div className="w-full lg:w-32 h-32 lg:h-40 bg-gradient-to-br from-stis-blue-light to-stis-gray-light rounded-lg flex items-center justify-center flex-shrink-0">
                          <FileText className="w-8 lg:w-12 h-8 lg:h-12 text-stis-blue/40" />
                        </div>

                        <div className="flex-1">
                          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
                            <div className="flex-1">
                              <div className="flex items-center gap-2 mb-2">
                                <Badge variant="secondary" className="text-xs">
                                  {item.type === "tugas_akhir"
                                    ? (item as any).department || "Tugas Akhir"
                                    : (item as any).journal || "Publikasi"}
                                </Badge>
                                <Badge variant="outline" className="text-xs">
                                  {item.year}
                                </Badge>
                              </div>

                              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                                {item.title}
                              </h3>

                              <div className="space-y-2 text-sm text-gray-600 mb-4">
                                <div className="flex items-center gap-2">
                                  <User className="w-4 h-4" />
                                  <span>
                                    {item.author}{" "}
                                    {(item as any).nim &&
                                      `(${(item as any).nim})`}
                                  </span>
                                </div>
                                {(item as any).supervisor && (
                                  <div className="flex items-center gap-2">
                                    <GraduationCap className="w-4 h-4" />
                                    <span>
                                      Pembimbing: {(item as any).supervisor}
                                    </span>
                                  </div>
                                )}
                                {(item as any).journal && (
                                  <div className="flex items-center gap-2">
                                    <BookOpen className="w-4 h-4" />
                                    <span>
                                      {(item as any).journal}{" "}
                                      {(item as any).volume}
                                    </span>
                                  </div>
                                )}
                                {(item as any).doi && (
                                  <div className="flex items-center gap-2">
                                    <FileText className="w-4 h-4" />
                                    <span>DOI: {(item as any).doi}</span>
                                  </div>
                                )}
                              </div>

                              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                                {item.abstract}
                              </p>

                              <div className="flex items-center gap-4 text-xs text-gray-500">
                                <div className="flex items-center gap-1">
                                  <Star className="w-3 h-3 text-yellow-400 fill-current" />
                                  <span>{item.rating}</span>
                                </div>
                                <div className="flex items-center gap-1">
                                  <Eye className="w-3 h-3" />
                                  <span>{item.views} views</span>
                                </div>
                                <div className="flex items-center gap-1">
                                  <Download className="w-3 h-3" />
                                  <span>{item.downloads} downloads</span>
                                </div>
                                <span>
                                  {item.pages ? `${item.pages} halaman` : ""}{" "}
                                  {(item as any).file_size &&
                                    `�� ${(item as any).file_size}`}
                                </span>
                              </div>
                            </div>

                            <div className="flex flex-row lg:flex-col gap-2 w-full lg:w-32">
                              <Button
                                size="sm"
                                className="bg-stis-blue hover:bg-stis-blue-dark"
                                onClick={() => setSelectedItem(item)}
                              >
                                <Eye className="w-4 h-4 mr-2" />
                                Detail
                              </Button>
                              <Button
                                size="sm"
                                variant="outline"
                                className="border-stis-blue text-stis-blue hover:bg-stis-blue hover:text-white"
                              >
                                <Download className="w-4 h-4 mr-2" />
                                Unduh
                              </Button>
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
                <div className="flex items-center justify-center gap-2 mt-12">
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
                        variant={currentPage === page ? "default" : "outline"}
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
              )}
            </div>
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

      {/* Detail Dialog */}
      {selectedItem && (
        <Dialog
          open={!!selectedItem}
          onOpenChange={() => setSelectedItem(null)}
        >
          <DialogContent
            className="max-w-4xl max-h-[80vh] overflow-y-auto"
            hideCloseButton
          >
            <DialogHeader>
              <DialogTitle className="text-xl font-bold">
                {selectedItem.title}
              </DialogTitle>
            </DialogHeader>
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="md:col-span-1">
                  <div className="aspect-[3/4] bg-gradient-to-br from-stis-blue-light to-stis-gray-light rounded-lg flex items-center justify-center">
                    <FileText className="w-16 h-16 text-stis-blue/40" />
                  </div>
                </div>
                <div className="md:col-span-2 space-y-4">
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-3">
                      Informasi{" "}
                      {selectedItem.type === "tugas_akhir"
                        ? "Tugas Akhir"
                        : "Publikasi"}
                    </h3>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Penulis:</span>
                        <span className="font-medium">
                          {selectedItem.author}
                        </span>
                      </div>
                      {(selectedItem as any).nim && (
                        <div className="flex justify-between">
                          <span className="text-gray-600">NIM:</span>
                          <span className="font-medium">
                            {(selectedItem as any).nim}
                          </span>
                        </div>
                      )}
                      {(selectedItem as any).supervisor && (
                        <div className="flex justify-between">
                          <span className="text-gray-600">Pembimbing:</span>
                          <span className="font-medium">
                            {(selectedItem as any).supervisor}
                          </span>
                        </div>
                      )}
                      {(selectedItem as any).department && (
                        <div className="flex justify-between">
                          <span className="text-gray-600">Program Studi:</span>
                          <span className="font-medium">
                            {(selectedItem as any).department}
                          </span>
                        </div>
                      )}
                      {(selectedItem as any).journal && (
                        <div className="flex justify-between">
                          <span className="text-gray-600">Jurnal:</span>
                          <span className="font-medium">
                            {(selectedItem as any).journal}
                          </span>
                        </div>
                      )}
                      {(selectedItem as any).volume && (
                        <div className="flex justify-between">
                          <span className="text-gray-600">Volume:</span>
                          <span className="font-medium">
                            {(selectedItem as any).volume}
                          </span>
                        </div>
                      )}
                      {(selectedItem as any).doi && (
                        <div className="flex justify-between">
                          <span className="text-gray-600">DOI:</span>
                          <span className="font-medium text-blue-600">
                            {(selectedItem as any).doi}
                          </span>
                        </div>
                      )}
                      <div className="flex justify-between">
                        <span className="text-gray-600">Tahun:</span>
                        <span className="font-medium">{selectedItem.year}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Halaman:</span>
                        <span className="font-medium">
                          {selectedItem.pages} halaman
                        </span>
                      </div>
                      {(selectedItem as any).file_size && (
                        <div className="flex justify-between">
                          <span className="text-gray-600">Ukuran File:</span>
                          <span className="font-medium">
                            {(selectedItem as any).file_size}
                          </span>
                        </div>
                      )}
                      <div className="flex justify-between">
                        <span className="text-gray-600">Rating:</span>
                        <div className="flex items-center gap-1">
                          <Star className="w-4 h-4 text-yellow-400 fill-current" />
                          <span className="font-medium">
                            {selectedItem.rating}
                          </span>
                        </div>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Views:</span>
                        <span className="font-medium">
                          {selectedItem.views.toLocaleString()}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Downloads:</span>
                        <span className="font-medium">
                          {selectedItem.downloads.toLocaleString()}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">
                      Kata Kunci
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedItem.keywords.map(
                        (keyword: string, index: number) => (
                          <Badge
                            key={index}
                            variant="secondary"
                            className="text-xs"
                          >
                            {keyword}
                          </Badge>
                        ),
                      )}
                    </div>
                  </div>

                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">
                      Abstrak
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {selectedItem.abstract}
                    </p>
                  </div>

                  <div className="flex gap-3 pt-4">
                    <Button className="flex-1 bg-stis-blue hover:bg-stis-blue-dark">
                      <Eye className="w-4 h-4 mr-2" />
                      Baca Online
                    </Button>
                    <Button
                      variant="outline"
                      className="border-stis-blue text-stis-blue hover:bg-stis-blue hover:text-white"
                    >
                      <Download className="w-4 h-4 mr-2" />
                      Unduh PDF
                    </Button>
                    <Button
                      variant="outline"
                      className="border-gray-300 text-gray-700 hover:bg-red-500 hover:text-white hover:border-red-500"
                      onClick={() => setSelectedItem(null)}
                    >
                      Tutup
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      )}

      <HelpPopup pageHelp={helpItems} />
    </div>
  );
}
