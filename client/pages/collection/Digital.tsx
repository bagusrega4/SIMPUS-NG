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
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

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

  // Pagination logic for both ebooks and ejournals
  const getCurrentItems = (items: any[]) => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return items.slice(startIndex, endIndex);
  };

  const getTotalPages = (items: any[]) => {
    return Math.ceil(items.length / itemsPerPage);
  };

  // Filter data based on search query
  const filteredEbooks = ebooks.filter((book) => {
    if (!searchQuery) return true;
    return (
      book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      book.author.toLowerCase().includes(searchQuery.toLowerCase()) ||
      book.category.toLowerCase().includes(searchQuery.toLowerCase())
    );
  });

  const filteredEjournals = ejournals.filter((journal) => {
    if (!searchQuery) return true;
    return (
      journal.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      journal.publisher.toLowerCase().includes(searchQuery.toLowerCase()) ||
      journal.category.toLowerCase().includes(searchQuery.toLowerCase())
    );
  });

  const currentEbooks = getCurrentItems(filteredEbooks);
  const currentEjournals = getCurrentItems(filteredEjournals);
  const totalPagesEbooks = getTotalPages(filteredEbooks);
  const totalPagesEjournals = getTotalPages(filteredEjournals);

  // Reset pagination when changing tabs
  const handleTabChange = (value: string) => {
    setActiveTab(value);
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
            <Tabs
              value={activeTab}
              onValueChange={handleTabChange}
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
                      E-Books Terpopuler ({filteredEbooks.length} items) -
                      Halaman {currentPage} dari {totalPagesEbooks}
                    </h3>
                    <div className="flex gap-2">
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
                            value="populer"
                          >
                            Paling Populer
                          </SelectItem>
                          <SelectItem
                            className="focus:bg-stis-blue/10 focus:text-stis-blue data-[highlighted]:bg-stis-blue/10 data-[highlighted]:text-stis-blue"
                            value="rating"
                          >
                            Rating Tertinggi
                          </SelectItem>
                          {/* <SelectItem
                            className="focus:bg-stis-blue/10 focus:text-stis-blue data-[highlighted]:bg-stis-blue/10 data-[highlighted]:text-stis-blue" value="judul">Judul A-Z</SelectItem> */}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {currentEbooks.map((book, index) => (
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
                                className="flex-1 bg-stis-blue hover:bg-stis-blue-dark text-xs"
                              >
                                <Eye className="w-3 h-3 mr-1" />
                                Baca
                              </Button>
                              <Button
                                size="sm"
                                variant="outline"
                                className="flex-1 border-stis-blue text-stis-blue hover:bg-stis-blue hover:text-white text-xs"
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

                  {/* Pagination for E-books */}
                  {totalPagesEbooks > 1 && (
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-2 mt-12 px-4">
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
                          {currentPage} / {totalPagesEbooks}
                        </span>

                        <Button
                          variant="outline"
                          size="sm"
                          disabled={currentPage === totalPagesEbooks}
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

                        {Array.from(
                          { length: totalPagesEbooks },
                          (_, i) => i + 1,
                        ).map((page) => (
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
                        ))}

                        <Button
                          variant="outline"
                          disabled={currentPage === totalPagesEbooks}
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

              {/* E-Journals Tab */}
              <TabsContent value="ejournals">
                <div className="mb-8">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-2xl font-bold text-gray-900">
                      E-Journals Terpopuler ({filteredEjournals.length} items) -
                      Halaman {currentPage} dari {totalPagesEjournals}
                    </h3>
                    <div className="flex gap-2">
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
                            value="populer"
                          >
                            Paling Populer
                          </SelectItem>
                          <SelectItem
                            className="focus:bg-stis-blue/10 focus:text-stis-blue data-[highlighted]:bg-stis-blue/10 data-[highlighted]:text-stis-blue"
                            value="rating"
                          >
                            Rating Tertinggi
                          </SelectItem>
                          {/* <SelectItem
                            className="focus:bg-stis-blue/10 focus:text-stis-blue data-[highlighted]:bg-stis-blue/10 data-[highlighted]:text-stis-blue" value="judul">Judul A-Z</SelectItem> */}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {currentEjournals.map((journal, index) => (
                      <Card
                        key={index}
                        className="border-0 shadow-lg hover:shadow-xl transition-all duration-300"
                      >
                        <CardContent className="p-6">
                          <div className="aspect-[3/4] bg-gradient-to-br from-stis-blue-light to-stis-gray-light rounded-lg flex items-center justify-center mb-4">
                            <FileText className="w-16 h-16 text-stis-blue/60" />
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
                                className="flex-1 bg-stis-blue hover:bg-stis-blue-dark text-xs"
                              >
                                <Eye className="w-3 h-3 mr-1" />
                                Baca
                              </Button>
                              <Button
                                size="sm"
                                variant="outline"
                                className="flex-1 border-stis-blue text-stis-blue hover:bg-stis-blue hover:text-white text-xs"
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

                  {/* Pagination for E-journals */}
                  {totalPagesEjournals > 1 && (
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-2 mt-12 px-4">
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
                          {currentPage} / {totalPagesEjournals}
                        </span>

                        <Button
                          variant="outline"
                          size="sm"
                          disabled={currentPage === totalPagesEjournals}
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

                        {Array.from(
                          { length: totalPagesEjournals },
                          (_, i) => i + 1,
                        ).map((page) => (
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
                        ))}

                        <Button
                          variant="outline"
                          disabled={currentPage === totalPagesEjournals}
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

      {/* Help Popup */}
      <HelpPopup pageHelp={helpItems} />
    </div>
  );
}
