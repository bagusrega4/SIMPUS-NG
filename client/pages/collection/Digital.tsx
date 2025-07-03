import { useState } from "react";
import {
  Search,
  Filter,
  Monitor,
  Download,
  Play,
  FileText,
  BookOpen,
  Globe,
  Lock,
  Eye,
  Star,
  Calendar,
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

export default function Digital() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeTab, setActiveTab] = useState("ebooks");

  const digitalStats = [
    { type: "E-Books", count: 8456, icon: BookOpen },
    { type: "E-Journals", count: 2890, icon: FileText },
    { type: "Video Tutorials", count: 567, icon: Play },
    { type: "Research Papers", count: 1234, icon: Monitor },
  ];

  const ebooks = [
    {
      id: 1,
      title: "Applied Statistics using R",
      authors: ["John Verzani"],
      publisher: "Springer",
      year: 2023,
      format: "PDF",
      size: "12.5 MB",
      pages: 528,
      downloads: 1456,
      rating: 4.8,
      category: "Statistika",
      language: "English",
      access: "Open Access",
      description:
        "Comprehensive guide to applied statistics using R programming language with practical examples and exercises.",
      thumbnail: "/placeholder.svg",
    },
    {
      id: 2,
      title: "Machine Learning untuk Analisis Data",
      authors: ["Dr. Budi Raharjo", "Prof. Siti Nurjannah"],
      publisher: "ITB Press",
      year: 2023,
      format: "PDF",
      size: "18.2 MB",
      pages: 456,
      downloads: 2134,
      rating: 4.9,
      category: "Machine Learning",
      language: "Indonesia",
      access: "Licensed",
      description:
        "Panduan lengkap machine learning untuk analisis data dengan studi kasus menggunakan Python dan R.",
      thumbnail: "/placeholder.svg",
    },
    {
      id: 3,
      title: "Introduction to Econometrics",
      authors: ["James H. Stock", "Mark W. Watson"],
      publisher: "Pearson",
      year: 2022,
      format: "EPUB",
      size: "8.9 MB",
      pages: 796,
      downloads: 987,
      rating: 4.7,
      category: "Ekonometrika",
      language: "English",
      access: "Licensed",
      description:
        "Modern approach to learning econometrics with real-world applications and updated examples.",
      thumbnail: "/placeholder.svg",
    },
  ];

  const ejournals = [
    {
      id: 1,
      title: "Journal of Statistical Software",
      publisher: "Foundation for Open Access Statistics",
      issn: "1548-7660",
      issues: 156,
      impact_factor: 3.8,
      frequency: "Monthly",
      access: "Open Access",
      category: "Software",
      description:
        "Publishes articles related to statistical software and algorithms.",
    },
    {
      id: 2,
      title: "Indonesian Journal of Statistics",
      publisher: "Polstat STIS Press",
      issn: "2085-7330",
      issues: 84,
      impact_factor: 2.1,
      frequency: "Quarterly",
      access: "Open Access",
      category: "Statistika",
      description:
        "Jurnal nasional yang memuat artikel penelitian di bidang statistika.",
    },
    {
      id: 3,
      title: "Computational Statistics & Data Analysis",
      publisher: "Elsevier",
      issn: "0167-9473",
      issues: 312,
      impact_factor: 4.2,
      frequency: "Monthly",
      access: "Licensed",
      category: "Computational Statistics",
      description:
        "International journal focusing on computational aspects of statistics.",
    },
  ];

  const databases = [
    {
      name: "IEEE Xplore Digital Library",
      description:
        "Database lengkap untuk publikasi IEEE dalam bidang teknologi dan engineering",
      subjects: ["Computer Science", "Engineering", "Mathematics"],
      access: "Licensed",
      url: "https://ieeexplore.ieee.org",
      resources: "5M+ documents",
    },
    {
      name: "SpringerLink",
      description:
        "Akses ke jurnal, buku, dan publikasi Springer dalam berbagai bidang ilmu",
      subjects: ["Statistics", "Mathematics", "Computer Science"],
      access: "Licensed",
      url: "https://link.springer.com",
      resources: "15M+ documents",
    },
    {
      name: "ScienceDirect",
      description:
        "Platform Elsevier untuk akses jurnal ilmiah dan buku dalam bidang sains",
      subjects: ["Statistics", "Economics", "Mathematics"],
      access: "Licensed",
      url: "https://sciencedirect.com",
      resources: "18M+ articles",
    },
    {
      name: "arXiv.org",
      description:
        "Repository pre-print untuk penelitian dalam fisika, matematika, dan statistika",
      subjects: ["Statistics", "Mathematics", "Physics"],
      access: "Open Access",
      url: "https://arxiv.org",
      resources: "2M+ papers",
    },
  ];

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
              Koleksi <span className="text-stis-blue">Digital</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 leading-relaxed">
              Akses ribuan e-book, jurnal elektronik, database, dan sumber daya
              digital lainnya yang dapat diakses kapan saja, di mana saja
            </p>
          </div>
        </div>
      </div>

      {/* Digital Statistics */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {digitalStats.map((stat, index) => {
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

      {/* Search Bar */}
      <section className="py-8 bg-stis-gray-light border-b border-gray-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <Input
                type="text"
                placeholder="Cari e-book, jurnal, atau sumber daya digital..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 pr-24 py-4 text-lg rounded-xl border-2 border-gray-200 focus:border-stis-blue"
              />
              <Button
                size="lg"
                className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-stis-blue hover:bg-stis-blue-dark rounded-lg"
              >
                Cari
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <Tabs
              value={activeTab}
              onValueChange={setActiveTab}
              className="w-full"
            >
              <TabsList className="grid w-full grid-cols-4 max-w-2xl mx-auto mb-12">
                <TabsTrigger value="ebooks">E-Books</TabsTrigger>
                <TabsTrigger value="ejournals">E-Journals</TabsTrigger>
                <TabsTrigger value="databases">Database</TabsTrigger>
                <TabsTrigger value="tutorials">Video</TabsTrigger>
              </TabsList>

              {/* E-Books Tab */}
              <TabsContent value="ebooks">
                <div className="mb-8">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-2xl font-bold text-gray-900">
                      E-Books Terpopuler
                    </h3>
                    <div className="flex gap-2">
                      <Select defaultValue="terbaru">
                        <SelectTrigger className="w-48">
                          <SelectValue placeholder="Urutkan" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="terbaru">Terbaru</SelectItem>
                          <SelectItem value="populer">
                            Paling Populer
                          </SelectItem>
                          <SelectItem value="rating">
                            Rating Tertinggi
                          </SelectItem>
                          <SelectItem value="judul">Judul A-Z</SelectItem>
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

                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {ebooks.map((book) => (
                      <Card
                        key={book.id}
                        className="border-0 shadow-lg hover:shadow-xl transition-shadow"
                      >
                        <CardContent className="p-6">
                          <div className="aspect-[3/4] bg-gradient-to-br from-stis-blue-light to-stis-gray-light rounded-lg flex items-center justify-center mb-4">
                            <Monitor className="w-12 h-12 text-stis-blue/40" />
                          </div>

                          <div className="mb-4">
                            <div className="flex items-center gap-2 mb-2">
                              <Badge variant="secondary" className="text-xs">
                                {book.category}
                              </Badge>
                              <Badge
                                variant={
                                  book.access === "Open Access"
                                    ? "default"
                                    : "destructive"
                                }
                                className="text-xs"
                              >
                                {book.access === "Open Access" ? (
                                  <Globe className="w-3 h-3 mr-1" />
                                ) : (
                                  <Lock className="w-3 h-3 mr-1" />
                                )}
                                {book.access}
                              </Badge>
                            </div>

                            <h4 className="font-semibold text-gray-900 mb-2 line-clamp-2">
                              {book.title}
                            </h4>

                            <p className="text-sm text-gray-600 mb-2">
                              {book.authors.join(", ")}
                            </p>

                            <p className="text-xs text-gray-500 mb-3">
                              {book.publisher} • {book.year} • {book.format} •{" "}
                              {book.size}
                            </p>

                            <p className="text-sm text-gray-600 mb-4 line-clamp-3">
                              {book.description}
                            </p>
                          </div>

                          <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
                            <div className="flex items-center gap-1">
                              <Star className="w-3 h-3 text-yellow-400 fill-current" />
                              <span>{book.rating}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <Download className="w-3 h-3" />
                              <span>{book.downloads}</span>
                            </div>
                            <span>{book.pages} halaman</span>
                          </div>

                          <div className="flex gap-2">
                            <Button
                              size="sm"
                              className="flex-1 bg-stis-blue hover:bg-stis-blue-dark text-xs"
                            >
                              <Eye className="w-3 h-3 mr-1" />
                              Baca
                            </Button>
                            <Button
                              size="sm"
                              variant="outline"
                              className="flex-1 border-stis-cyan text-stis-cyan hover:bg-stis-cyan hover:text-white text-xs"
                            >
                              <Download className="w-3 h-3 mr-1" />
                              Unduh
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              </TabsContent>

              {/* E-Journals Tab */}
              <TabsContent value="ejournals">
                <div className="mb-8">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-2xl font-bold text-gray-900">
                      E-Journals Berlangganan
                    </h3>
                    <Button
                      variant="outline"
                      className="border-stis-blue text-stis-blue hover:bg-stis-blue hover:text-white"
                    >
                      Lihat Semua Jurnal
                    </Button>
                  </div>

                  <div className="space-y-6">
                    {ejournals.map((journal) => (
                      <Card
                        key={journal.id}
                        className="border-0 shadow-lg hover:shadow-xl transition-shadow"
                      >
                        <CardContent className="p-6">
                          <div className="flex items-start gap-6">
                            <div className="w-16 h-16 bg-stis-cyan/10 rounded-lg flex items-center justify-center flex-shrink-0">
                              <FileText className="w-8 h-8 text-stis-cyan" />
                            </div>

                            <div className="flex-1">
                              <div className="flex items-start justify-between mb-4">
                                <div>
                                  <h4 className="text-xl font-semibold text-gray-900 mb-2">
                                    {journal.title}
                                  </h4>
                                  <p className="text-gray-600 mb-2">
                                    {journal.publisher} • ISSN: {journal.issn}
                                  </p>
                                  <p className="text-sm text-gray-600 mb-3">
                                    {journal.description}
                                  </p>
                                </div>
                                <Badge
                                  variant={
                                    journal.access === "Open Access"
                                      ? "default"
                                      : "destructive"
                                  }
                                  className="text-xs"
                                >
                                  {journal.access === "Open Access" ? (
                                    <Globe className="w-3 h-3 mr-1" />
                                  ) : (
                                    <Lock className="w-3 h-3 mr-1" />
                                  )}
                                  {journal.access}
                                </Badge>
                              </div>

                              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm text-gray-600 mb-4">
                                <div>
                                  <span className="font-medium">Issues:</span>{" "}
                                  {journal.issues}
                                </div>
                                <div>
                                  <span className="font-medium">
                                    Impact Factor:
                                  </span>{" "}
                                  {journal.impact_factor}
                                </div>
                                <div>
                                  <span className="font-medium">
                                    Frequency:
                                  </span>{" "}
                                  {journal.frequency}
                                </div>
                                <div>
                                  <span className="font-medium">Category:</span>{" "}
                                  {journal.category}
                                </div>
                              </div>

                              <div className="flex gap-2">
                                <Button
                                  size="sm"
                                  className="bg-stis-cyan hover:bg-stis-cyan/90"
                                >
                                  Akses Jurnal
                                </Button>
                                <Button
                                  size="sm"
                                  variant="outline"
                                  className="border-stis-blue text-stis-blue hover:bg-stis-blue hover:text-white"
                                >
                                  Arsip Issues
                                </Button>
                              </div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              </TabsContent>

              {/* Database Tab */}
              <TabsContent value="databases">
                <div className="mb-8">
                  <div className="text-center mb-12">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      Database Berlangganan
                    </h3>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                      Akses ke database internasional yang berisi jutaan artikel
                      jurnal, buku, dan publikasi ilmiah
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {databases.map((db, index) => (
                      <Card
                        key={index}
                        className="border-0 shadow-lg hover:shadow-xl transition-shadow"
                      >
                        <CardContent className="p-6">
                          <div className="flex items-start gap-4 mb-4">
                            <div className="w-12 h-12 bg-stis-blue/10 rounded-lg flex items-center justify-center flex-shrink-0">
                              <Monitor className="w-6 h-6 text-stis-blue" />
                            </div>
                            <div className="flex-1">
                              <h4 className="text-lg font-semibold text-gray-900 mb-2">
                                {db.name}
                              </h4>
                              <Badge
                                variant={
                                  db.access === "Open Access"
                                    ? "default"
                                    : "destructive"
                                }
                                className="text-xs mb-3"
                              >
                                {db.access === "Open Access" ? (
                                  <Globe className="w-3 h-3 mr-1" />
                                ) : (
                                  <Lock className="w-3 h-3 mr-1" />
                                )}
                                {db.access}
                              </Badge>
                            </div>
                          </div>

                          <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                            {db.description}
                          </p>

                          <div className="mb-4">
                            <h5 className="font-medium text-gray-900 mb-2 text-sm">
                              Subject Areas:
                            </h5>
                            <div className="flex flex-wrap gap-1">
                              {db.subjects.map((subject, idx) => (
                                <Badge
                                  key={idx}
                                  variant="outline"
                                  className="text-xs"
                                >
                                  {subject}
                                </Badge>
                              ))}
                            </div>
                          </div>

                          <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
                            <span className="font-medium">{db.resources}</span>
                            <span>{db.url}</span>
                          </div>

                          <Button
                            className="w-full bg-stis-blue hover:bg-stis-blue-dark"
                            size="sm"
                          >
                            Akses Database
                          </Button>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              </TabsContent>

              {/* Video Tutorials Tab */}
              <TabsContent value="tutorials">
                <div className="text-center py-16">
                  <div className="w-24 h-24 bg-stis-blue/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Play className="w-12 h-12 text-stis-blue" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    Video Tutorial & Webinar
                  </h3>
                  <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
                    Koleksi video tutorial, webinar, dan materi pembelajaran
                    multimedia untuk mendukung pemahaman materi statistika dan
                    penggunaan software analisis data.
                  </p>
                  <Button
                    size="lg"
                    className="bg-stis-blue hover:bg-stis-blue-dark"
                  >
                    Jelajahi Video Tutorial
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
                  <BookOpen className="w-7 h-7 text-white" />
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
