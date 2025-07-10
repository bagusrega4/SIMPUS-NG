import { useState } from "react";
import {
  Search,
  BookOpen,
  Monitor,
  Download,
  Eye,
  Star,
  Globe,
  Lock,
  Filter,
  FileText,
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

export default function Digital() {
  const helpItems = [
    {
      question: "Bagaimana cara mengakses koleksi digital?",
      answer:
        "Login dengan akun Polstat STIS Anda untuk mengakses e-books, e-journals, dan database online yang tersedia.",
    },
    {
      question: "Apakah bisa mengunduh e-book?",
      answer:
        "Sebagian e-book bisa diunduh untuk dibaca offline sesuai dengan lisensi penerbit. Perhatikan batas waktu akses.",
    },
    {
      question: "Database apa saja yang tersedia?",
      answer:
        "Tersedia akses ke IEEE Xplore, SpringerLink, ScienceDirect, dan database statistika khusus lainnya.",
    },
  ];

  const [searchQuery, setSearchQuery] = useState("");
  const [activeTab, setActiveTab] = useState("ebooks");

  const ebooks = [
    {
      title: "Advanced Statistical Methods",
      author: "Dr. Sarah Johnson",
      year: "2023",
      category: "Statistics",
      rating: 4.8,
      downloads: 1245,
      pages: 450,
      format: "PDF",
      size: "15.2 MB",
      isbn: "978-0123456789",
    },
    {
      title: "Machine Learning for Data Science",
      author: "Prof. Michael Chen",
      year: "2023",
      category: "Data Science",
      rating: 4.9,
      downloads: 2156,
      pages: 523,
      format: "PDF, EPUB",
      size: "22.4 MB",
      isbn: "978-0987654321",
    },
    {
      title: "Econometric Analysis",
      author: "Dr. Amanda Smith",
      year: "2022",
      category: "Economics",
      rating: 4.7,
      downloads: 856,
      pages: 678,
      format: "PDF",
      size: "28.1 MB",
      isbn: "978-0456789123",
    },
  ];

  const ejournals = [
    {
      title: "Journal of Statistical Computing",
      publisher: "Statistical Society",
      issn: "2156-8952",
      impact_factor: "3.45",
      frequency: "Monthly",
      category: "Statistics",
      access: "Licensed",
      issues: "124",
      description: "Leading journal in statistical computing and methodology",
    },
    {
      title: "Data Science Review",
      publisher: "Data Science Institute",
      issn: "2234-5678",
      impact_factor: "2.89",
      frequency: "Bi-monthly",
      category: "Data Science",
      access: "Open Access",
      issues: "67",
      description: "Open access journal covering all aspects of data science",
    },
    {
      title: "Indonesian Journal of Statistics",
      publisher: "Polstat STIS Press",
      issn: "2085-7330",
      impact_factor: "1.23",
      frequency: "Quarterly",
      category: "Statistics",
      access: "Open Access",
      issues: "45",
      description:
        "Official journal of Polstat STIS covering statistical research",
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
              Akses ribuan e-book, jurnal elektronik, dan sumber daya digital
              lainnya yang dapat diakses kapan saja, di mana saja
            </p>
          </div>
        </div>
      </div>

      {/* Search Bar */}
      <section className="py-8 bg-stis-gray-light border-b border-gray-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <Input
                type="text"
                placeholder="Cari e-book, jurnal, atau topik tertentu..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 pr-24 py-4 text-lg rounded-xl border-2 border-gray-200 focus:border-stis-blue"
              />
              <Button
                size="lg"
                className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-emerald-600 hover:bg-emerald-700 rounded-lg"
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
              <TabsList className="grid w-full grid-cols-2 max-w-xl mx-auto mb-12">
                <TabsTrigger value="ebooks">E-Books</TabsTrigger>
                <TabsTrigger value="ejournals">E-Journals</TabsTrigger>
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
                    </div>
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {ebooks.map((book, index) => (
                      <Card
                        key={index}
                        className="border-0 shadow-lg hover:shadow-xl transition-all duration-300"
                      >
                        <CardContent className="p-6">
                          <div className="aspect-[3/4] bg-gradient-to-br from-stis-blue-light to-stis-gray-light rounded-lg flex items-center justify-center mb-4">
                            <Monitor className="w-16 h-16 text-stis-blue/40" />
                          </div>

                          <div className="space-y-3">
                            <div className="flex items-center gap-2 mb-2">
                              <Badge variant="secondary" className="text-xs">
                                {book.category}
                              </Badge>
                              <Badge variant="outline" className="text-xs">
                                {book.format}
                              </Badge>
                            </div>

                            <h4 className="font-semibold text-gray-900 line-clamp-2">
                              {book.title}
                            </h4>

                            <div className="text-sm text-gray-600 space-y-1">
                              <p>Penulis: {book.author}</p>
                              <p>Tahun: {book.year}</p>
                              <p>Halaman: {book.pages}</p>
                              <p>Ukuran: {book.size}</p>
                            </div>

                            <div className="flex items-center justify-between text-xs text-gray-500 py-2">
                              <div className="flex items-center gap-1">
                                <Star className="w-3 h-3 text-yellow-400 fill-current" />
                                <span>{book.rating}</span>
                              </div>
                              <div className="flex items-center gap-1">
                                <Download className="w-3 h-3" />
                                <span>{book.downloads}</span>
                              </div>
                            </div>

                            <div className="flex gap-2 pt-2">
                              <Button
                                size="sm"
                                className="flex-1 bg-emerald-600 hover:bg-emerald-700 text-xs"
                              >
                                <Eye className="w-3 h-3 mr-1" />
                                Baca
                              </Button>
                              <Button
                                size="sm"
                                variant="outline"
                                className="flex-1 border-teal-600 text-teal-600 hover:bg-teal-600 hover:text-white text-xs"
                              >
                                <Download className="w-3 h-3 mr-1" />
                                Unduh
                              </Button>
                            </div>
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
                      E-Journals Terpopuler
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
                          <SelectItem value="impact">Impact Factor</SelectItem>
                          <SelectItem value="judul">Judul A-Z</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {ejournals.map((journal, index) => (
                      <Card
                        key={index}
                        className="border-0 shadow-lg hover:shadow-xl transition-all duration-300"
                      >
                        <CardContent className="p-6">
                          <div className="aspect-[3/4] bg-gradient-to-br from-teal-100 to-cyan-100 rounded-lg flex items-center justify-center mb-4">
                            <FileText className="w-16 h-16 text-teal-600/60" />
                          </div>

                          <div className="space-y-3">
                            <div className="flex items-center gap-2 mb-2">
                              <Badge variant="secondary" className="text-xs">
                                {journal.category}
                              </Badge>
                              <Badge
                                variant={
                                  journal.access === "Open Access"
                                    ? "default"
                                    : "outline"
                                }
                                className={`text-xs ${
                                  journal.access === "Licensed"
                                    ? "border-red-500 text-red-600 bg-red-50"
                                    : ""
                                }`}
                              >
                                {journal.access === "Open Access" ? (
                                  <Globe className="w-3 h-3 mr-1" />
                                ) : (
                                  <Lock className="w-3 h-3 mr-1" />
                                )}
                                {journal.access}
                              </Badge>
                            </div>

                            <h4 className="font-semibold text-gray-900 line-clamp-2">
                              {journal.title}
                            </h4>

                            <div className="text-sm text-gray-600 space-y-1">
                              <p>Publisher: {journal.publisher}</p>
                              <p>ISSN: {journal.issn}</p>
                              <p>Impact Factor: {journal.impact_factor}</p>
                              <p>Issues: {journal.issues}</p>
                            </div>

                            <div className="flex items-center justify-between text-xs text-gray-500 py-2">
                              <div className="flex items-center gap-1">
                                <Star className="w-3 h-3 text-yellow-400 fill-current" />
                                <span>{journal.impact_factor}</span>
                              </div>
                              <div className="flex items-center gap-1">
                                <FileText className="w-3 h-3" />
                                <span>{journal.frequency}</span>
                              </div>
                            </div>

                            <div className="flex gap-2 pt-2">
                              <Button
                                size="sm"
                                className="flex-1 bg-teal-600 hover:bg-teal-700 text-xs"
                              >
                                <Eye className="w-3 h-3 mr-1" />
                                Baca
                              </Button>
                              <Button
                                size="sm"
                                variant="outline"
                                className="flex-1 border-emerald-600 text-emerald-600 hover:bg-emerald-600 hover:text-white text-xs"
                              >
                                <Download className="w-3 h-3 mr-1" />
                                Unduh
                              </Button>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-emerald-600 text-white">
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
                <p className="text-white/80 text-sm">
                  Jl. Otto Iskandardinata No.64C, Jakarta Timur 13330
                </p>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h5 className="text-lg font-semibold mb-4">Pintasan</h5>
              <div className="space-y-3">
                <a
                  href="/collection/books"
                  className="block text-white/80 hover:text-white transition-colors text-sm"
                >
                  Katalog Online
                </a>
                <a
                  href="/info/faq"
                  className="block text-white/80 hover:text-white transition-colors text-sm"
                >
                  Bantuan
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-white/20 mt-12 pt-8 text-center">
            <p className="text-white/60 text-sm">
              © 2024 Perpustakaan Polstat STIS. Hak cipta dilindungi
              undang-undang.
            </p>
          </div>
        </div>
      </footer>

      {/* Help Popup */}
      <HelpPopup pageHelp={helpItems} />
    </div>
  );
}
