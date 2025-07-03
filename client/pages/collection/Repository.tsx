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

export default function Repository() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("semua");
  const [selectedYear, setSelectedYear] = useState("semua");

  const repositoryStats = [
    { type: "Tugas Akhir", count: 3456, icon: GraduationCap },
    { type: "Karya Ilmiah Dosen", count: 1234, icon: Award },
    { type: "Publikasi", count: 567, icon: FileText },
    { type: "Download/Bulan", count: 15678, icon: TrendingUp },
  ];

  const categories = [
    { id: "semua", label: "Semua Kategori", count: 5257 },
    { id: "tugas-akhir", label: "Tugas Akhir D4", count: 3456 },
    { id: "penelitian-dosen", label: "Penelitian Dosen", count: 890 },
    { id: "publikasi-jurnal", label: "Publikasi Jurnal", count: 567 },
    { id: "prosiding", label: "Prosiding Seminar", count: 234 },
    { id: "laporan-penelitian", label: "Laporan Penelitian", count: 110 },
  ];

  const theses = [
    {
      id: 1,
      title:
        "Analisis Prediksi Inflasi Indonesia Menggunakan Metode ARIMA dan Machine Learning",
      author: "Sari Dewi Lestari",
      nim: "1611234567",
      supervisor: "Dr. Budi Santoso, M.Si",
      year: 2023,
      program: "D4 Statistika",
      department: "Statistika",
      pages: 89,
      abstract:
        "Penelitian ini bertujuan untuk membandingkan akurasi prediksi inflasi Indonesia menggunakan metode tradisional ARIMA dengan metode machine learning seperti Random Forest dan Neural Network. Data yang digunakan adalah data inflasi bulanan Indonesia periode 2010-2023.",
      keywords: ["Inflasi", "ARIMA", "Machine Learning", "Prediksi"],
      downloads: 456,
      views: 1234,
      rating: 4.8,
      file_size: "3.2 MB",
      language: "Indonesia",
    },
    {
      id: 2,
      title:
        "Implementasi Model Time Series untuk Forecasting Jumlah Wisatawan Mancanegara di Indonesia",
      author: "Ahmad Rizki Pratama",
      nim: "1611234568",
      supervisor: "Prof. Dr. Siti Nurjannah, M.Stat",
      year: 2023,
      program: "D4 Statistika",
      department: "Statistika",
      pages: 76,
      abstract:
        "Studi ini menganalisis pola kunjungan wisatawan mancanegara ke Indonesia dan mengembangkan model forecasting menggunakan berbagai metode time series untuk mendukung perencanaan pariwisata nasional.",
      keywords: ["Time Series", "Forecasting", "Pariwisata", "Wisatawan"],
      downloads: 892,
      views: 2341,
      rating: 4.9,
      file_size: "2.8 MB",
      language: "Indonesia",
    },
    {
      id: 3,
      title:
        "Penerapan Data Mining untuk Segmentasi Pelanggan E-commerce Menggunakan Clustering Algorithm",
      author: "Maya Puspita Sari",
      nim: "1611234569",
      supervisor: "Dr. Ir. Bambang Murdaka, M.T",
      year: 2023,
      program: "D4 Komputasi Statistik",
      department: "Komputasi Statistik",
      pages: 94,
      abstract:
        "Penelitian ini mengaplikasikan teknik data mining khususnya algoritma clustering untuk melakukan segmentasi pelanggan pada platform e-commerce guna meningkatkan strategi pemasaran yang tepat sasaran.",
      keywords: ["Data Mining", "Clustering", "E-commerce", "Segmentasi"],
      downloads: 678,
      views: 1567,
      rating: 4.7,
      file_size: "4.1 MB",
      language: "Indonesia",
    },
  ];

  const publications = [
    {
      id: 1,
      title:
        "Statistical Analysis of Economic Growth Factors in Southeast Asian Countries",
      authors: ["Dr. Budi Santoso, M.Si", "Prof. Siti Nurjannah, M.Stat"],
      journal: "Asian Economic Journal",
      year: 2023,
      volume: "Vol. 15 No. 2",
      pages: "pp. 123-145",
      doi: "10.1234/aej.2023.15.2.123",
      abstract:
        "This study examines the key factors influencing economic growth in Southeast Asian countries using advanced statistical modeling techniques.",
      keywords: ["Economic Growth", "Southeast Asia", "Statistical Analysis"],
      downloads: 234,
      views: 567,
      rating: 4.6,
      type: "Jurnal Internasional",
    },
    {
      id: 2,
      title:
        "Pengembangan Model Prediksi Kemiskinan Menggunakan Small Area Estimation",
      authors: ["Dr. Ir. Bambang Murdaka, M.T", "Dr. Lisa Permatasari, M.Si"],
      journal: "Jurnal Ekonomi dan Pembangunan Indonesia",
      year: 2023,
      volume: "Vol. 23 No. 1",
      pages: "pp. 45-67",
      doi: "10.5678/jepi.2023.23.1.45",
      abstract:
        "Penelitian ini mengembangkan model prediksi tingkat kemiskinan di tingkat kabupaten/kota menggunakan teknik Small Area Estimation untuk mendukung kebijakan pembangunan.",
      keywords: ["Small Area Estimation", "Kemiskinan", "Prediksi"],
      downloads: 345,
      views: 789,
      rating: 4.8,
      type: "Jurnal Nasional",
    },
  ];

  const filteredTheses = theses.filter((thesis) => {
    const matchesSearch =
      thesis.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      thesis.author.toLowerCase().includes(searchQuery.toLowerCase()) ||
      thesis.keywords.some((keyword) =>
        keyword.toLowerCase().includes(searchQuery.toLowerCase()),
      );
    const matchesYear =
      selectedYear === "semua" || thesis.year.toString() === selectedYear;

    return matchesSearch && matchesYear;
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
              Repository <span className="text-stis-blue">STIS</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 leading-relaxed">
              Repositori institusi yang menyimpan dan menyediakan akses terbuka
              terhadap karya ilmiah civitas akademika Polstat STIS, termasuk tugas
              akhir, penelitian, dan publikasi
            </p>
          </div>
        </div>
      </div>

      {/* Statistics */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {repositoryStats.map((stat, index) => {
                const IconComponent = stat.icon;
                return (
                  <Card key={index} className="border-0 shadow-lg text-center">
                    <CardContent className="p-6">
                      <div className="w-12 h-12 bg-stis-blue/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                        <IconComponent className="w-6 h-6 text-stis-blue" />
                      </div>
                      <div className="text-2xl font-bold text-stis-blue mb-1">
                        {stat.count.toLocaleString()}
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
                    placeholder="Cari judul, penulis, atau kata kunci..."
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
                    <SelectValue placeholder="Pilih Kategori" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="semua">Semua Kategori</SelectItem>
                    <SelectItem value="tugas-akhir">Tugas Akhir D4</SelectItem>
                    <SelectItem value="penelitian-dosen">
                      Penelitian Dosen
                    </SelectItem>
                    <SelectItem value="publikasi-jurnal">
                      Publikasi Jurnal
                    </SelectItem>
                    <SelectItem value="prosiding">Prosiding Seminar</SelectItem>
                  </SelectContent>
                </Select>

                <Select value={selectedYear} onValueChange={setSelectedYear}>
                  <SelectTrigger className="w-full lg:w-32">
                    <SelectValue placeholder="Tahun" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="semua">Semua</SelectItem>
                    <SelectItem value="2023">2023</SelectItem>
                    <SelectItem value="2022">2022</SelectItem>
                    <SelectItem value="2021">2021</SelectItem>
                    <SelectItem value="2020">2020</SelectItem>
                  </SelectContent>
                </Select>

                <Button
                  variant="outline"
                  className="border-stis-blue text-stis-blue hover:bg-stis-blue hover:text-white"
                >
                  <Filter className="w-4 h-4 mr-2" />
                  Filter
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Overview */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Kategori Repository
              </h2>
              <p className="text-gray-600">
                Jelajahi karya ilmiah berdasarkan kategori
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {categories.map((category) => (
                <Card
                  key={category.id}
                  className={`cursor-pointer transition-all hover:shadow-lg ${
                    selectedCategory === category.id
                      ? "ring-2 ring-stis-blue bg-stis-blue-light"
                      : ""
                  }`}
                  onClick={() => setSelectedCategory(category.id)}
                >
                  <CardContent className="p-4 text-center">
                    <div className="text-lg font-bold text-stis-blue mb-1">
                      {category.count}
                    </div>
                    <div className="text-xs text-gray-600">
                      {category.label}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-stis-gray-light">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <Tabs defaultValue="theses" className="w-full">
              <TabsList className="grid w-full grid-cols-3 max-w-md mx-auto mb-12">
                <TabsTrigger value="theses">Tugas Akhir</TabsTrigger>
                <TabsTrigger value="publications">Publikasi</TabsTrigger>
                <TabsTrigger value="research">Penelitian</TabsTrigger>
              </TabsList>

              {/* Theses Tab */}
              <TabsContent value="theses">
                <div className="mb-8">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-2xl font-bold text-gray-900">
                      Tugas Akhir Terbaru ({filteredTheses.length})
                    </h3>
                    <Select defaultValue="terbaru">
                      <SelectTrigger className="w-48">
                        <SelectValue placeholder="Urutkan" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="terbaru">Terbaru</SelectItem>
                        <SelectItem value="populer">Paling Populer</SelectItem>
                        <SelectItem value="rating">Rating Tertinggi</SelectItem>
                        <SelectItem value="judul">Judul A-Z</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-6">
                    {filteredTheses.map((thesis) => (
                      <Card
                        key={thesis.id}
                        className="border-0 shadow-lg hover:shadow-xl transition-shadow"
                      >
                        <CardContent className="p-6">
                          <div className="flex flex-col lg:flex-row gap-6">
                            {/* Document Icon */}
                            <div className="w-full lg:w-24 h-32 lg:h-32 bg-gradient-to-br from-stis-blue-light to-stis-gray-light rounded-lg flex items-center justify-center flex-shrink-0">
                              <FileText className="w-12 h-12 text-stis-blue/40" />
                            </div>

                            {/* Thesis Details */}
                            <div className="flex-1">
                              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
                                <div className="flex-1">
                                  <div className="flex items-center gap-2 mb-2">
                                    <Badge
                                      variant="secondary"
                                      className="text-xs"
                                    >
                                      {thesis.program}
                                    </Badge>
                                    <Badge
                                      variant="outline"
                                      className="text-xs"
                                    >
                                      {thesis.year}
                                    </Badge>
                                    <Badge
                                      variant="outline"
                                      className="text-xs"
                                    >
                                      {thesis.language}
                                    </Badge>
                                  </div>

                                  <h3 className="text-lg font-semibold text-gray-900 mb-2 hover:text-stis-blue transition-colors cursor-pointer">
                                    {thesis.title}
                                  </h3>

                                  <div className="space-y-1 text-sm text-gray-600 mb-3">
                                    <div className="flex items-center gap-2">
                                      <User className="w-4 h-4" />
                                      <span>
                                        {thesis.author} ({thesis.nim})
                                      </span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                      <GraduationCap className="w-4 h-4" />
                                      <span>
                                        Pembimbing: {thesis.supervisor}
                                      </span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                      <Calendar className="w-4 h-4" />
                                      <span>
                                        {thesis.department} • {thesis.pages}{" "}
                                        halaman • {thesis.file_size}
                                      </span>
                                    </div>
                                  </div>

                                  <p className="text-gray-600 text-sm leading-relaxed mb-3">
                                    {thesis.abstract}
                                  </p>

                                  <div className="mb-3">
                                    <span className="text-xs font-medium text-gray-700 mr-2">
                                      Keywords:
                                    </span>
                                    <div className="inline-flex flex-wrap gap-1">
                                      {thesis.keywords.map((keyword, idx) => (
                                        <Badge
                                          key={idx}
                                          variant="outline"
                                          className="text-xs"
                                        >
                                          {keyword}
                                        </Badge>
                                      ))}
                                    </div>
                                  </div>

                                  <div className="flex items-center gap-4 text-xs text-gray-500">
                                    <div className="flex items-center gap-1">
                                      <Star className="w-3 h-3 text-yellow-400 fill-current" />
                                      <span>{thesis.rating}</span>
                                    </div>
                                    <div className="flex items-center gap-1">
                                      <Eye className="w-3 h-3" />
                                      <span>{thesis.views} views</span>
                                    </div>
                                    <div className="flex items-center gap-1">
                                      <Download className="w-3 h-3" />
                                      <span>{thesis.downloads} downloads</span>
                                    </div>
                                  </div>
                                </div>

                                {/* Action Buttons */}
                                <div className="flex flex-col gap-2 lg:w-32">
                                  <Button
                                    size="sm"
                                    className="bg-stis-blue hover:bg-stis-blue-dark"
                                  >
                                    <Eye className="w-4 h-4 mr-2" />
                                    Baca
                                  </Button>
                                  <Button
                                    size="sm"
                                    variant="outline"
                                    className="border-stis-cyan text-stis-cyan hover:bg-stis-cyan hover:text-white"
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
                </div>
              </TabsContent>

              {/* Publications Tab */}
              <TabsContent value="publications">
                <div className="mb-8">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-2xl font-bold text-gray-900">
                      Publikasi Dosen & Peneliti
                    </h3>
                    <Button
                      variant="outline"
                      className="border-stis-blue text-stis-blue hover:bg-stis-blue hover:text-white"
                    >
                      Lihat Semua Publikasi
                    </Button>
                  </div>

                  <div className="space-y-6">
                    {publications.map((pub) => (
                      <Card
                        key={pub.id}
                        className="border-0 shadow-lg hover:shadow-xl transition-shadow"
                      >
                        <CardContent className="p-6">
                          <div className="flex items-start gap-6">
                            <div className="w-16 h-16 bg-stis-cyan/10 rounded-lg flex items-center justify-center flex-shrink-0">
                              <Award className="w-8 h-8 text-stis-cyan" />
                            </div>

                            <div className="flex-1">
                              <div className="flex items-start justify-between mb-4">
                                <div className="flex-1">
                                  <div className="flex items-center gap-2 mb-2">
                                    <Badge
                                      variant="secondary"
                                      className="text-xs"
                                    >
                                      {pub.type}
                                    </Badge>
                                    <Badge
                                      variant="outline"
                                      className="text-xs"
                                    >
                                      {pub.year}
                                    </Badge>
                                  </div>

                                  <h4 className="text-lg font-semibold text-gray-900 mb-2">
                                    {pub.title}
                                  </h4>

                                  <div className="space-y-1 text-sm text-gray-600 mb-3">
                                    <p>
                                      <strong>Authors:</strong>{" "}
                                      {pub.authors.join(", ")}
                                    </p>
                                    <p>
                                      <strong>Published in:</strong>{" "}
                                      {pub.journal} • {pub.volume} • {pub.pages}
                                    </p>
                                    <p>
                                      <strong>DOI:</strong> {pub.doi}
                                    </p>
                                  </div>

                                  <p className="text-gray-600 text-sm mb-3 leading-relaxed">
                                    {pub.abstract}
                                  </p>

                                  <div className="mb-4">
                                    <span className="text-xs font-medium text-gray-700 mr-2">
                                      Keywords:
                                    </span>
                                    <div className="inline-flex flex-wrap gap-1">
                                      {pub.keywords.map((keyword, idx) => (
                                        <Badge
                                          key={idx}
                                          variant="outline"
                                          className="text-xs"
                                        >
                                          {keyword}
                                        </Badge>
                                      ))}
                                    </div>
                                  </div>

                                  <div className="flex items-center gap-4 text-xs text-gray-500">
                                    <div className="flex items-center gap-1">
                                      <Star className="w-3 h-3 text-yellow-400 fill-current" />
                                      <span>{pub.rating}</span>
                                    </div>
                                    <div className="flex items-center gap-1">
                                      <Eye className="w-3 h-3" />
                                      <span>{pub.views} views</span>
                                    </div>
                                    <div className="flex items-center gap-1">
                                      <Download className="w-3 h-3" />
                                      <span>{pub.downloads} downloads</span>
                                    </div>
                                  </div>
                                </div>

                                <div className="flex flex-col gap-2 ml-4">
                                  <Button
                                    size="sm"
                                    className="bg-stis-cyan hover:bg-stis-cyan/90"
                                  >
                                    Akses Paper
                                  </Button>
                                  <Button
                                    size="sm"
                                    variant="outline"
                                    className="border-stis-blue text-stis-blue hover:bg-stis-blue hover:text-white"
                                  >
                                    Detail
                                  </Button>
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

              {/* Research Tab */}
              <TabsContent value="research">
                <div className="text-center py-16">
                  <div className="w-24 h-24 bg-stis-blue/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <FileText className="w-12 h-12 text-stis-blue" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    Laporan Penelitian
                  </h3>
                  <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
                    Koleksi laporan penelitian yang dilakukan oleh dosen dan
                    peneliti STIS dalam berbagai bidang statistika dan ilmu
                    terkait.
                  </p>
                  <Button
                    size="lg"
                    className="bg-stis-blue hover:bg-stis-blue-dark"
                  >
                    Jelajahi Penelitian
                  </Button>
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
                  <FileText className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h4 className="text-2xl font-bold">SIMPus</h4>
                  <p className="text-white/80">
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
              © 2024 Perpustakaan Polstat STIS. Hak cipta dilindungi undang-undang.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
