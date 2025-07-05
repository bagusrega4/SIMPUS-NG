import { useState } from "react";
import {
  Search,
  Filter,
  BookOpen,
  Eye,
  Download,
  Star,
  Calendar,
  User,
  Building,
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
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Navigation from "@/components/Navigation";
import HelpPopup from "@/components/HelpPopup";

export default function Books() {
  const helpItems = [
    {
      question: "Bagaimana cara mencari buku di koleksi cetak?",
      answer:
        "Gunakan fitur pencarian dan filter kategori. Anda dapat mencari berdasarkan judul, penulis, ISBN, atau kata kunci.",
    },
    {
      question: "Bagaimana cara meminjam buku?",
      answer:
        "Klik tombol 'Pinjam' pada buku yang tersedia, lalu datang ke perpustakaan dengan membawa kartu identitas untuk proses peminjaman.",
    },
    {
      question: "Berapa lama masa peminjaman buku?",
      answer:
        "Mahasiswa: 7 hari, Dosen: 14 hari. Dapat diperpanjang jika tidak ada antrian pemesanan.",
    },
  ];
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("semua");
  const [selectedLanguage, setSelectedLanguage] = useState("semua");
  const [selectedBook, setSelectedBook] = useState<any>(null);

  const categories = [
    { id: "semua", label: "Semua Kategori", count: 15234 },
    { id: "statistika", label: "Statistika", count: 5678 },
    { id: "matematika", label: "Matematika", count: 3456 },
    { id: "ekonomi", label: "Ekonometrika", count: 2345 },
    { id: "komputasi", label: "Komputasi Statistik", count: 1876 },
    { id: "metodologi", label: "Metodologi Penelitian", count: 1234 },
    { id: "referensi", label: "Buku Referensi", count: 645 },
  ];

  const books = [
    {
      id: 1,
      title: "Statistika Dasar: Teori dan Aplikasi",
      authors: ["Prof. Dr. Supranto, M.A.", "Dr. Nandan Limakrisna"],
      publisher: "Erlangga",
      year: 2023,
      edition: "Edisi ke-8",
      pages: 458,
      isbn: "978-602-298-123-4",
      category: "Statistika",
      language: "Indonesia",
      location: "Rak A1.2.3",
      status: "Tersedia",
      copies: 15,
      available: 12,
      rating: 4.8,
      description:
        "Buku komprehensif yang membahas konsep dasar statistika dengan pendekatan yang mudah dipahami, dilengkapi dengan contoh kasus dan latihan soal.",
    },
    {
      id: 2,
      title: "Introduction to Mathematical Statistics",
      authors: ["Robert V. Hogg", "Joseph McKean", "Allen T. Craig"],
      publisher: "Pearson",
      year: 2022,
      edition: "8th Edition",
      pages: 694,
      isbn: "978-013-468-824-9",
      category: "Statistika",
      language: "English",
      location: "Rak B2.1.5",
      status: "Tersedia",
      copies: 8,
      available: 6,
      rating: 4.9,
      description:
        "A comprehensive introduction to mathematical statistics for students with a solid mathematical background.",
    },
    {
      id: 3,
      title: "Ekonometrika: Dasar dan Aplikasinya",
      authors: ["Dr. Nachrowi Djalal Nachrowi", "Hardius Usman"],
      publisher: "Lembaga Penerbit FE UI",
      year: 2023,
      edition: "Edisi ke-5",
      pages: 524,
      isbn: "978-979-456-789-1",
      category: "Ekonometrika",
      language: "Indonesia",
      location: "Rak C1.3.7",
      status: "Tersedia",
      copies: 12,
      available: 9,
      rating: 4.7,
      description:
        "Pembahasan lengkap tentang teknik ekonometrika dari tingkat dasar hingga lanjutan dengan aplikasi menggunakan software statistik.",
    },
    {
      id: 4,
      title: "R for Data Science",
      authors: ["Hadley Wickham", "Garrett Grolemund"],
      publisher: "O'Reilly Media",
      year: 2023,
      edition: "2nd Edition",
      pages: 520,
      isbn: "978-149-205-170-4",
      category: "Komputasi Statistik",
      language: "English",
      location: "Rak D2.2.4",
      status: "Tersedia",
      copies: 10,
      available: 7,
      rating: 4.9,
      description:
        "Learn how to use R to turn raw data into insight, knowledge, and understanding with practical examples.",
    },
    {
      id: 5,
      title: "Metode Penelitian Kuantitatif",
      authors: ["Prof. Dr. Sugiyono"],
      publisher: "Alfabeta",
      year: 2022,
      edition: "Edisi ke-15",
      pages: 372,
      isbn: "978-602-289-456-7",
      category: "Metodologi Penelitian",
      language: "Indonesia",
      location: "Rak E1.1.8",
      status: "Dipinjam",
      copies: 20,
      available: 0,
      rating: 4.6,
      description:
        "Panduan lengkap untuk melakukan penelitian kuantitatif mulai dari perencanaan hingga laporan penelitian.",
    },
    {
      id: 6,
      title: "Kalkulus dan Aljabar Linear",
      authors: ["Dr. Ir. Bambang Murdaka, M.T.", "Dr. Sartono Putro"],
      publisher: "ITB Press",
      year: 2023,
      edition: "Edisi ke-3",
      pages: 628,
      isbn: "978-602-291-234-5",
      category: "Matematika",
      language: "Indonesia",
      location: "Rak F2.3.1",
      status: "Tersedia",
      copies: 18,
      available: 15,
      rating: 4.5,
      description:
        "Materi kalkulus dan aljabar linear yang disesuaikan untuk mahasiswa statistika dan matematika terapan.",
    },
  ];

  const filteredBooks = books.filter((book) => {
    const matchesSearch =
      book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      book.authors.some((author) =>
        author.toLowerCase().includes(searchQuery.toLowerCase()),
      );
    const matchesCategory =
      selectedCategory === "semua" ||
      book.category.toLowerCase() === selectedCategory;
    const matchesLanguage =
      selectedLanguage === "semua" ||
      book.language.toLowerCase() === selectedLanguage;

    return matchesSearch && matchesCategory && matchesLanguage;
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
              Koleksi <span className="text-stis-blue">Cetak</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 leading-relaxed">
              Temukan ribuan buku cetak berkualitas tinggi dalam bidang
              statistika, matematika, dan ilmu terkait yang tersedia di
              perpustakaan STIS
            </p>
          </div>
        </div>
      </div>

      {/* Search & Filter */}
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
                    placeholder="Cari judul buku, penulis, atau kata kunci..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-12 py-3 text-base rounded-xl border-2 border-gray-200 focus:border-stis-blue"
                  />
                </div>
              </div>

              {/* Filters */}
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

      {/* Categories Overview */}
      <section className="py-12 bg-stis-gray-light">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Kategori Koleksi
              </h2>
              <p className="text-gray-600">
                Jelajahi koleksi berdasarkan kategori ilmu
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
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
                    <div className="text-xl font-bold text-stis-blue mb-1">
                      {category.count.toLocaleString()}
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

      {/* Book List */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-bold text-gray-900">
                Hasil Pencarian ({filteredBooks.length} buku)
              </h2>
              <Select defaultValue="terbaru">
                <SelectTrigger className="w-48">
                  <SelectValue placeholder="Urutkan berdasarkan" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="terbaru">Terbaru</SelectItem>
                  <SelectItem value="judul">Judul</SelectItem>
                  <SelectItem value="penulis">Penulis</SelectItem>
                  <SelectItem value="rating">Rating Tertinggi</SelectItem>
                  <SelectItem value="tahun">Tahun Terbit</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-6">
              {filteredBooks.map((book) => (
                <Card
                  key={book.id}
                  className="border-0 shadow-lg hover:shadow-xl transition-shadow"
                >
                  <CardContent className="p-6">
                    <div className="flex flex-col lg:flex-row gap-6">
                      {/* Book Cover */}
                      <div className="w-full lg:w-32 h-48 lg:h-40 bg-gradient-to-br from-stis-blue-light to-stis-gray-light rounded-lg flex items-center justify-center flex-shrink-0">
                        <BookOpen className="w-12 h-12 text-stis-blue/40" />
                      </div>

                      {/* Book Details */}
                      <div className="flex-1">
                        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-2">
                              <Badge variant="secondary" className="text-xs">
                                {book.category}
                              </Badge>
                              <Badge variant="outline" className="text-xs">
                                {book.language}
                              </Badge>
                              <Badge
                                variant={
                                  book.status === "Tersedia"
                                    ? "default"
                                    : "destructive"
                                }
                                className="text-xs"
                              >
                                {book.status}
                              </Badge>
                            </div>

                            <h3 className="text-xl font-semibold text-gray-900 mb-2 hover:text-stis-blue transition-colors cursor-pointer">
                              {book.title}
                            </h3>

                            <div className="space-y-2 text-sm text-gray-600 mb-4">
                              <div className="flex items-center gap-2">
                                <User className="w-4 h-4" />
                                <span>{book.authors.join(", ")}</span>
                              </div>
                              <div className="flex items-center gap-2">
                                <Building className="w-4 h-4" />
                                <span>
                                  {book.publisher} • {book.year} •{" "}
                                  {book.edition}
                                </span>
                              </div>
                              <div className="flex items-center gap-2">
                                <MapPin className="w-4 h-4" />
                                <span>
                                  {book.location} • {book.pages} halaman
                                </span>
                              </div>
                            </div>

                            <p className="text-gray-600 text-sm leading-relaxed mb-4">
                              {book.description}
                            </p>

                            <div className="flex items-center gap-4 text-xs text-gray-500">
                              <div className="flex items-center gap-1">
                                <Star className="w-3 h-3 text-yellow-400 fill-current" />
                                <span>{book.rating}</span>
                              </div>
                              <span>
                                Tersedia: {book.available}/{book.copies}
                              </span>
                              <span>ISBN: {book.isbn}</span>
                            </div>
                          </div>

                          {/* Action Buttons */}
                          <div className="flex flex-col gap-2 lg:w-32">
                            <Button
                              size="sm"
                              className="bg-blue-600 hover:bg-blue-700"
                              disabled={book.status === "Dipinjam"}
                              onClick={() => setSelectedBook(book)}
                            >
                              <Eye className="w-4 h-4 mr-2" />
                              Detail
                            </Button>
                            <Button
                              size="sm"
                              variant="outline"
                              className="border-emerald-600 text-emerald-600 hover:bg-emerald-600 hover:text-white"
                              disabled={book.status === "Dipinjam"}
                            >
                              Pinjam
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
            <div className="flex items-center justify-center gap-2 mt-12">
              <Button variant="outline" disabled>
                Sebelumnya
              </Button>
              <Button variant="default" className="bg-stis-blue">
                1
              </Button>
              <Button variant="outline">2</Button>
              <Button variant="outline">3</Button>
              <Button variant="outline">...</Button>
              <Button variant="outline">10</Button>
              <Button variant="outline">Selanjutnya</Button>
            </div>
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

      {/* Book Detail Dialog */}
      {selectedBook && (
        <Dialog
          open={!!selectedBook}
          onOpenChange={() => setSelectedBook(null)}
        >
          <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle className="text-xl font-bold">
                {selectedBook.title}
              </DialogTitle>
            </DialogHeader>
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="md:col-span-1">
                  <div className="aspect-[3/4] bg-gradient-to-br from-stis-blue-light to-stis-gray-light rounded-lg flex items-center justify-center">
                    <BookOpen className="w-16 h-16 text-stis-blue/40" />
                  </div>
                </div>
                <div className="md:col-span-2 space-y-4">
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">
                      Detail Buku
                    </h3>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Penulis:</span>
                        <span className="font-medium">
                          {selectedBook.author}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Penerbit:</span>
                        <span className="font-medium">
                          {selectedBook.publisher}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Tahun:</span>
                        <span className="font-medium">{selectedBook.year}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">ISBN:</span>
                        <span className="font-medium">{selectedBook.isbn}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Halaman:</span>
                        <span className="font-medium">
                          {selectedBook.pages} halaman
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Lokasi:</span>
                        <span className="font-medium">
                          {selectedBook.location}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Status:</span>
                        <Badge
                          variant={
                            selectedBook.status === "Tersedia"
                              ? "default"
                              : "destructive"
                          }
                        >
                          {selectedBook.status}
                        </Badge>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Rating:</span>
                        <div className="flex items-center gap-1">
                          <Star className="w-4 h-4 text-yellow-400 fill-current" />
                          <span className="font-medium">
                            {selectedBook.rating}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">
                      Deskripsi
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {selectedBook.description}
                    </p>
                  </div>

                  <div className="flex gap-3 pt-4">
                    <Button
                      className="flex-1 bg-emerald-600 hover:bg-emerald-700"
                      disabled={selectedBook.status !== "Tersedia"}
                    >
                      Pinjam Buku
                    </Button>
                    <Button
                      variant="outline"
                      className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white"
                      onClick={() => setSelectedBook(null)}
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

      {/* Help Popup */}
      <HelpPopup pageHelp={helpItems} />
    </div>
  );
}
