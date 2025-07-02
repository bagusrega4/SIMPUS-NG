import { useState } from "react";
import {
  Search,
  Filter,
  BookOpen,
  FileText,
  Monitor,
  Download,
  Eye,
  Star,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Collection() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("semua");

  const categories = [
    { id: "semua", label: "Semua Koleksi", count: "15,847" },
    { id: "buku", label: "Buku Cetak", count: "8,234" },
    { id: "ebook", label: "E-Book", count: "3,567" },
    { id: "jurnal", label: "Jurnal", count: "2,890" },
    { id: "skripsi", label: "Skripsi/Tugas Akhir", count: "1,156" },
  ];

  const featuredBooks = [
    {
      title: "Statistika Dasar untuk Penelitian",
      author: "Prof. Dr. Ahmad Statistika",
      year: "2023",
      category: "Metodologi",
      rating: 4.8,
      downloads: 1245,
      type: "ebook",
      cover: "/placeholder.svg",
    },
    {
      title: "Machine Learning untuk Analisis Data",
      author: "Dr. Sarah Computing, M.Kom",
      year: "2023",
      category: "Data Science",
      rating: 4.9,
      downloads: 892,
      type: "ebook",
      cover: "/placeholder.svg",
    },
    {
      title: "Ekonometrika Terapan",
      author: "Dr. Budi Ekonomi, M.SE",
      year: "2022",
      category: "Ekonomi",
      rating: 4.7,
      downloads: 756,
      type: "book",
      cover: "/placeholder.svg",
    },
    {
      title: "Metodologi Penelitian Kuantitatif",
      author: "Prof. Lisa Research, Ph.D",
      year: "2023",
      category: "Metodologi",
      rating: 4.8,
      downloads: 1134,
      type: "ebook",
      cover: "/placeholder.svg",
    },
  ];

  const recentJournals = [
    {
      title: "Indonesian Journal of Statistics",
      publisher: "STIS Press",
      issue: "Vol. 15 No. 2, 2023",
      articles: 12,
      type: "journal",
    },
    {
      title: "Statistical Computing Review",
      publisher: "International Statistics",
      issue: "Vol. 8 No. 4, 2023",
      articles: 8,
      type: "journal",
    },
    {
      title: "Data Analytics Quarterly",
      publisher: "Analytics Society",
      issue: "Vol. 3 No. 1, 2023",
      articles: 15,
      type: "journal",
    },
  ];

  const filteredBooks = featuredBooks.filter(
    (book) =>
      activeCategory === "semua" ||
      (activeCategory === "buku" && book.type === "book") ||
      (activeCategory === "ebook" && book.type === "ebook"),
  );

  return (
    <div className="min-h-screen bg-white">
      <Header />
      {/* Header */}
      <div className="bg-gradient-to-br from-stis-blue-light via-white to-stis-gray-light pt-24 pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              Koleksi <span className="text-stis-blue">Perpustakaan</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 mb-8">
              Temukan ribuan sumber daya akademik, buku, jurnal, dan publikasi
              digital untuk mendukung pembelajaran Anda
            </p>

            {/* Search Bar */}
            <div className="max-w-2xl mx-auto relative">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <Input
                  type="text"
                  placeholder="Cari judul buku, penulis, topik, atau kata kunci..."
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
        </div>
      </div>

      {/* Category Stats */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {categories.map((category) => (
              <Card
                key={category.id}
                className={`cursor-pointer transition-all hover:shadow-lg ${
                  activeCategory === category.id
                    ? "ring-2 ring-stis-blue bg-stis-blue-light"
                    : ""
                }`}
                onClick={() => setActiveCategory(category.id)}
              >
                <CardContent className="p-6 text-center">
                  <div className="text-2xl font-bold text-stis-blue mb-2">
                    {category.count}
                  </div>
                  <div className="text-gray-600 text-sm">{category.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-stis-gray-light">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Tabs defaultValue="books" className="w-full">
            <TabsList className="grid w-full grid-cols-3 max-w-md mx-auto mb-12">
              <TabsTrigger value="books">Buku & E-Book</TabsTrigger>
              <TabsTrigger value="journals">Jurnal</TabsTrigger>
              <TabsTrigger value="thesis">Skripsi</TabsTrigger>
            </TabsList>

            <TabsContent value="books">
              <div className="mb-8">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-2xl font-bold text-gray-900">
                    Koleksi Terpopuler
                  </h3>
                  <Button
                    variant="outline"
                    className="border-stis-blue text-stis-blue hover:bg-stis-blue hover:text-white"
                  >
                    <Filter className="w-4 h-4 mr-2" />
                    Filter
                  </Button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {filteredBooks.map((book, index) => (
                    <Card
                      key={index}
                      className="group hover:shadow-lg transition-all duration-300 border-0 shadow-md"
                    >
                      <CardContent className="p-0">
                        <div className="aspect-[3/4] bg-gradient-to-br from-stis-blue-light to-stis-gray-light rounded-t-lg flex items-center justify-center mb-4">
                          {book.type === "ebook" ? (
                            <Monitor className="w-16 h-16 text-stis-blue/40" />
                          ) : (
                            <BookOpen className="w-16 h-16 text-stis-blue/40" />
                          )}
                        </div>
                        <div className="p-4">
                          <div className="flex items-center gap-2 mb-2">
                            <Badge variant="secondary" className="text-xs">
                              {book.category}
                            </Badge>
                            <Badge variant="outline" className="text-xs">
                              {book.type === "ebook" ? "E-Book" : "Buku Cetak"}
                            </Badge>
                          </div>
                          <h4 className="font-semibold text-gray-900 mb-2 line-clamp-2 group-hover:text-stis-blue transition-colors">
                            {book.title}
                          </h4>
                          <p className="text-sm text-gray-600 mb-2">
                            {book.author}
                          </p>
                          <p className="text-xs text-gray-500 mb-3">
                            {book.year}
                          </p>

                          <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
                            <div className="flex items-center">
                              <Star className="w-3 h-3 text-yellow-400 fill-current mr-1" />
                              {book.rating}
                            </div>
                            <div className="flex items-center">
                              <Download className="w-3 h-3 mr-1" />
                              {book.downloads}
                            </div>
                          </div>

                          <div className="flex gap-2">
                            <Button
                              size="sm"
                              className="flex-1 bg-stis-blue hover:bg-stis-blue-dark text-xs"
                            >
                              <Eye className="w-3 h-3 mr-1" />
                              Lihat
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
              </div>
            </TabsContent>

            <TabsContent value="journals">
              <div className="mb-8">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-2xl font-bold text-gray-900">
                    Jurnal Terbaru
                  </h3>
                  <Button
                    variant="outline"
                    className="border-stis-blue text-stis-blue hover:bg-stis-blue hover:text-white"
                  >
                    Lihat Semua
                  </Button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {recentJournals.map((journal, index) => (
                    <Card
                      key={index}
                      className="hover:shadow-lg transition-shadow border-0 shadow-md"
                    >
                      <CardContent className="p-6">
                        <div className="flex items-center mb-4">
                          <div className="w-12 h-12 bg-stis-cyan/10 rounded-lg flex items-center justify-center mr-4">
                            <FileText className="w-6 h-6 text-stis-cyan" />
                          </div>
                          <Badge variant="secondary">Jurnal</Badge>
                        </div>
                        <h4 className="font-semibold text-gray-900 mb-2">
                          {journal.title}
                        </h4>
                        <p className="text-sm text-gray-600 mb-2">
                          {journal.publisher}
                        </p>
                        <p className="text-sm text-gray-500 mb-3">
                          {journal.issue}
                        </p>
                        <div className="flex items-center justify-between">
                          <span className="text-xs text-gray-500">
                            {journal.articles} artikel
                          </span>
                          <Button
                            size="sm"
                            variant="outline"
                            className="border-stis-cyan text-stis-cyan hover:bg-stis-cyan hover:text-white"
                          >
                            Baca
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </TabsContent>

            <TabsContent value="thesis">
              <div className="text-center py-16">
                <div className="w-24 h-24 bg-stis-blue/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <FileText className="w-12 h-12 text-stis-blue" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Repository Skripsi & Tugas Akhir
                </h3>
                <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
                  Akses koleksi skripsi dan tugas akhir mahasiswa STIS untuk
                  referensi penelitian Anda. Tersedia lebih dari 1,000 karya
                  ilmiah yang dapat diakses secara digital.
                </p>
                <Button
                  size="lg"
                  className="bg-stis-blue hover:bg-stis-blue-dark"
                >
                  Jelajahi Repository
                </Button>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Quick Access */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Akses Cepat
            </h3>
            <p className="text-lg text-gray-600">
              Shortcut untuk mengakses koleksi yang sering digunakan
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <Card className="hover:shadow-lg transition-shadow cursor-pointer border-0 shadow-md">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-stis-blue/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <BookOpen className="w-8 h-8 text-stis-blue" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">
                  Katalog Online
                </h4>
                <p className="text-sm text-gray-600">
                  Cari di seluruh koleksi perpustakaan
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow cursor-pointer border-0 shadow-md">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-stis-cyan/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Monitor className="w-8 h-8 text-stis-cyan" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">
                  Database Online
                </h4>
                <p className="text-sm text-gray-600">
                  Akses ke database internasional
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow cursor-pointer border-0 shadow-md">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-stis-blue/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <FileText className="w-8 h-8 text-stis-blue" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">
                  Repository STIS
                </h4>
                <p className="text-sm text-gray-600">
                  Karya ilmiah mahasiswa dan dosen
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow cursor-pointer border-0 shadow-md">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-stis-cyan/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Download className="w-8 h-8 text-stis-cyan" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">
                  E-Resources
                </h4>
                <p className="text-sm text-gray-600">Sumber daya elektronik</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
