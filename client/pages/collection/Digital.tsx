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
    {
      title: "Deep Learning with Python",
      author: "François Chollet",
      year: "2023",
      category: "Data Science",
      rating: 4.9,
      downloads: 3421,
      pages: 384,
      format: "PDF, EPUB",
      size: "18.7 MB",
      isbn: "978-1617296864",
    },
    {
      title: "Bayesian Data Analysis",
      author: "Andrew Gelman",
      year: "2023",
      category: "Statistics",
      rating: 4.8,
      downloads: 1876,
      pages: 675,
      format: "PDF",
      size: "32.4 MB",
      isbn: "978-1439840955",
    },
    {
      title: "Time Series Forecasting in Python",
      author: "Marco Peixeiro",
      year: "2023",
      category: "Data Science",
      rating: 4.6,
      downloads: 1543,
      pages: 418,
      format: "PDF, EPUB",
      size: "21.3 MB",
      isbn: "978-1803246802",
    },
    {
      title: "Statistical Learning with Sparsity",
      author: "Trevor Hastie",
      year: "2022",
      category: "Statistics",
      rating: 4.7,
      downloads: 987,
      pages: 362,
      format: "PDF",
      size: "14.8 MB",
      isbn: "978-1498712163",
    },
    {
      title: "R Graphics Cookbook",
      author: "Winston Chang",
      year: "2023",
      category: "Data Science",
      rating: 4.5,
      downloads: 2134,
      pages: 415,
      format: "PDF, EPUB",
      size: "25.6 MB",
      isbn: "978-1491978597",
    },
    {
      title: "Applied Econometrics with R",
      author: "Christian Kleiber",
      year: "2022",
      category: "Economics",
      rating: 4.6,
      downloads: 1298,
      pages: 472,
      format: "PDF",
      size: "19.2 MB",
      isbn: "978-0387773162",
    },
    {
      title: "Hands-On Machine Learning",
      author: "Aurélien Géron",
      year: "2023",
      category: "Data Science",
      rating: 4.8,
      downloads: 4567,
      pages: 851,
      format: "PDF, EPUB",
      size: "41.2 MB",
      isbn: "978-1492032649",
    },
    {
      title: "Introduction to Statistical Learning",
      author: "Gareth James",
      year: "2023",
      category: "Statistics",
      rating: 4.9,
      downloads: 3892,
      pages: 426,
      format: "PDF",
      size: "23.7 MB",
      isbn: "978-1461471370",
    },
    {
      title: "Probability Theory and Examples",
      author: "Rick Durrett",
      year: "2022",
      category: "Mathematics",
      rating: 4.7,
      downloads: 1654,
      pages: 419,
      format: "PDF",
      size: "17.9 MB",
      isbn: "978-1108473682",
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
    {
      title: "Journal of Machine Learning Research",
      publisher: "JMLR Inc.",
      issn: "1532-4435",
      impact_factor: "4.31",
      frequency: "Continuous",
      category: "Data Science",
      access: "Open Access",
      issues: "2841",
      description:
        "Premier venue for machine learning research papers and methodologies",
    },
    {
      title: "Annals of Statistics",
      publisher: "Institute of Mathematical Statistics",
      issn: "0090-5364",
      impact_factor: "3.78",
      frequency: "Bi-monthly",
      category: "Statistics",
      access: "Licensed",
      issues: "298",
      description:
        "Theoretical developments in the field of statistics and probability",
    },
    {
      title: "Journal of Econometrics",
      publisher: "Elsevier",
      issn: "0304-4076",
      impact_factor: "3.12",
      frequency: "Monthly",
      category: "Economics",
      access: "Licensed",
      issues: "724",
      description:
        "Applied and theoretical econometric research and methodology",
    },
    {
      title: "Computational Statistics & Data Analysis",
      publisher: "Elsevier",
      issn: "0167-9473",
      impact_factor: "2.68",
      frequency: "Monthly",
      category: "Statistics",
      access: "Licensed",
      issues: "456",
      description:
        "Interface between statistics and computer science for data analysis",
    },
    {
      title: "IEEE Transactions on Pattern Analysis",
      publisher: "IEEE",
      issn: "0162-8828",
      impact_factor: "16.39",
      frequency: "Monthly",
      category: "Data Science",
      access: "Licensed",
      issues: "1423",
      description:
        "Computer vision, machine learning, and pattern recognition research",
    },
    {
      title: "Journal of Business & Economic Statistics",
      publisher: "Taylor & Francis",
      issn: "0735-0015",
      impact_factor: "2.94",
      frequency: "Quarterly",
      category: "Economics",
      access: "Licensed",
      issues: "289",
      description: "Statistical methods in business and economic applications",
    },
    {
      title: "Statistics in Medicine",
      publisher: "Wiley",
      issn: "0277-6715",
      impact_factor: "2.15",
      frequency: "Monthly",
      category: "Statistics",
      access: "Licensed",
      issues: "567",
      description: "Statistical methods and applications in medical research",
    },
    {
      title: "Nature Machine Intelligence",
      publisher: "Nature Publishing Group",
      issn: "2522-5839",
      impact_factor: "18.89",
      frequency: "Monthly",
      category: "Data Science",
      access: "Licensed",
      issues: "89",
      description:
        "Cutting-edge research in artificial intelligence and machine learning",
    },
    {
      title: "Journal of Applied Statistics",
      publisher: "Taylor & Francis",
      issn: "0266-4763",
      impact_factor: "1.23",
      frequency: "Monthly",
      category: "Statistics",
      access: "Licensed",
      issues: "892",
      description: "Applied statistical methods across various disciplines",
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
      <section className="py-8 bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col lg:flex-row gap-6 items-center">
              {/* Search */}
              <div className="flex-1 w-full lg:w-auto">
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <Input
                    type="text"
                    placeholder="Cari e-book, jurnal, atau topik tertentu..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-12 py-3 text-base rounded-xl border-2 border-gray-200 focus:border-stis-blue"
                  />
                </div>
              </div>

              {/* Search Button */}
              <div className="flex gap-4 w-full lg:w-auto">
                <Button
                  variant="outline"
                  className="border-emerald-600 text-emerald-600 hover:bg-emerald-600 hover:text-white"
                >
                  <Search className="w-4 h-4 mr-2" />
                  Cari
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

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
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
