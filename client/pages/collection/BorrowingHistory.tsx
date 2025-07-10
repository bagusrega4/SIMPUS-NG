import { useState, useEffect } from "react";
import {
  Search,
  Filter,
  BookOpen,
  Calendar,
  CheckCircle,
  Clock,
  AlertCircle,
  RotateCcw,
  Download,
  Eye,
  Lock,
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
import { useAuth } from "@/contexts/AuthContext";

export default function BorrowingHistory() {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-white">
        <Navigation />
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-emerald-50 via-white to-teal-50 pt-16">
          <div className="text-center max-w-md mx-auto px-4">
            <div className="w-24 h-24 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-8">
              <Lock className="w-12 h-12 text-emerald-600" />
            </div>
            <h1 className="text-2xl font-bold text-gray-900 mb-4">
              Login Diperlukan
            </h1>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Silakan login terlebih dahulu untuk mengakses riwayat peminjaman
              Anda.
            </p>
            <a href="/login">
              <Button className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-lg">
                Login Sekarang
              </Button>
            </a>
          </div>
        </div>
      </div>
    );
  }
  const helpItems = [
    {
      question: "Bagaimana cara memperpanjang peminjaman?",
      answer:
        "Klik tombol 'Perpanjang' pada buku yang ingin diperpanjang, atau datang langsung ke perpustakaan.",
    },
    {
      question: "Bagaimana jika saya terlambat mengembalikan buku?",
      answer:
        "Akan ada denda keterlambatan. Segera kembalikan buku dan bayar denda di meja sirkulasi.",
    },
    {
      question: "Berapa batas maksimal peminjaman?",
      answer:
        "Mahasiswa: 3 buku, Dosen: 5 buku. Perpanjangan maksimal 2 kali jika tidak ada antrian.",
    },
  ];
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedStatus, setSelectedStatus] = useState("semua");
  const [selectedPeriod, setSelectedPeriod] = useState("semua");

  const borrowingStats = [
    {
      type: "Total Pinjaman",
      count: 147,
      icon: BookOpen,
      color: "text-stis-blue",
    },
    {
      type: "Sedang Dipinjam",
      count: 3,
      icon: Clock,
      color: "text-orange-500",
    },
    {
      type: "Sudah Dikembalikan",
      count: 144,
      icon: CheckCircle,
      color: "text-green-500",
    },
    { type: "Terlambat", count: 2, icon: AlertCircle, color: "text-red-500" },
  ];

  const currentBorrowings = [
    {
      id: 1,
      title: "Statistika Dasar: Teori dan Aplikasi",
      authors: ["Prof. Dr. Supranto, M.A."],
      isbn: "978-602-298-123-4",
      call_number: "A1.2.3",
      borrowed_date: "2024-01-15",
      due_date: "2024-01-29",
      status: "Dipinjam",
      days_remaining: 5,
      renewal_count: 1,
      can_renew: true,
    },
    {
      id: 2,
      title: "R for Data Science",
      authors: ["Hadley Wickham", "Garrett Grolemund"],
      isbn: "978-149-205-170-4",
      call_number: "D2.2.4",
      borrowed_date: "2024-01-10",
      due_date: "2024-01-24",
      status: "Terlambat",
      days_overdue: 3,
      renewal_count: 2,
      can_renew: false,
      fine: 3000,
    },
    {
      id: 3,
      title: "Machine Learning untuk Analisis Data",
      authors: ["Dr. Budi Raharjo"],
      isbn: "978-602-291-456-7",
      call_number: "C3.1.8",
      borrowed_date: "2024-01-20",
      due_date: "2024-02-03",
      status: "Dipinjam",
      days_remaining: 10,
      renewal_count: 0,
      can_renew: true,
    },
  ];

  const borrowingHistory = [
    {
      id: 1,
      title: "Introduction to Mathematical Statistics",
      authors: ["Robert V. Hogg", "Joseph McKean"],
      isbn: "978-013-468-824-9",
      call_number: "B2.1.5",
      borrowed_date: "2023-12-01",
      returned_date: "2023-12-14",
      due_date: "2023-12-15",
      status: "Dikembalikan",
      duration: 13,
      on_time: true,
      rating: 5,
    },
    {
      id: 2,
      title: "Ekonometrika: Dasar dan Aplikasinya",
      authors: ["Dr. Nachrowi Djalal Nachrowi"],
      isbn: "978-979-456-789-1",
      call_number: "C1.3.7",
      borrowed_date: "2023-11-10",
      returned_date: "2023-11-28",
      due_date: "2023-11-24",
      status: "Terlambat",
      duration: 18,
      days_late: 4,
      fine_paid: 4000,
      on_time: false,
      rating: 4,
    },
    {
      id: 3,
      title: "Metode Penelitian Kuantitatif",
      authors: ["Prof. Dr. Sugiyono"],
      isbn: "978-602-289-456-7",
      call_number: "E1.1.8",
      borrowed_date: "2023-10-15",
      returned_date: "2023-10-29",
      due_date: "2023-10-29",
      status: "Dikembalikan",
      duration: 14,
      on_time: true,
      rating: 5,
    },
    {
      id: 4,
      title: "Kalkulus dan Aljabar Linear",
      authors: ["Dr. Ir. Bambang Murdaka, M.T."],
      isbn: "978-602-291-234-5",
      call_number: "F2.3.1",
      borrowed_date: "2023-09-20",
      returned_date: "2023-10-05",
      due_date: "2023-10-04",
      status: "Terlambat",
      duration: 15,
      days_late: 1,
      fine_paid: 1000,
      on_time: false,
      rating: 4,
    },
  ];

  const getStatusBadge = (
    status: string,
    daysRemaining?: number,
    daysOverdue?: number,
  ) => {
    if (status === "Dipinjam") {
      if (daysRemaining && daysRemaining <= 3) {
        return (
          <Badge variant="destructive" className="text-xs">
            <Clock className="w-3 h-3 mr-1" />
            Segera Jatuh Tempo
          </Badge>
        );
      }
      return (
        <Badge variant="default" className="text-xs bg-blue-500">
          <BookOpen className="w-3 h-3 mr-1" />
          Dipinjam
        </Badge>
      );
    } else if (status === "Terlambat") {
      return (
        <Badge variant="destructive" className="text-xs">
          <AlertCircle className="w-3 h-3 mr-1" />
          Terlambat {daysOverdue} hari
        </Badge>
      );
    } else if (status === "Dikembalikan") {
      return (
        <Badge
          variant="secondary"
          className="text-xs bg-green-100 text-green-700"
        >
          <CheckCircle className="w-3 h-3 mr-1" />
          Dikembalikan
        </Badge>
      );
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("id-ID", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  };

  const filteredHistory = borrowingHistory.filter((item) => {
    const matchesSearch =
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.authors.some((author) =>
        author.toLowerCase().includes(searchQuery.toLowerCase()),
      );
    const matchesStatus =
      selectedStatus === "semua" ||
      (selectedStatus === "tepat-waktu" && item.on_time) ||
      (selectedStatus === "terlambat" && !item.on_time);

    return matchesSearch && matchesStatus;
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
              Riwayat <span className="text-stis-blue">Pinjaman</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 leading-relaxed">
              Pantau dan kelola riwayat peminjaman buku Anda, termasuk status
              pengembalian, perpanjangan, dan denda yang harus dibayar
            </p>
          </div>
        </div>
      </div>

      {/* Statistics */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {borrowingStats.map((stat, index) => {
                const IconComponent = stat.icon;
                return (
                  <Card key={index} className="border-0 shadow-lg text-center">
                    <CardContent className="p-6">
                      <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                        <IconComponent className={`w-6 h-6 ${stat.color}`} />
                      </div>
                      <div className={`text-2xl font-bold mb-1 ${stat.color}`}>
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
                    placeholder="Cari judul buku atau penulis..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-12 py-3 text-base rounded-xl border-2 border-gray-200 focus:border-stis-blue"
                  />
                </div>
              </div>

              {/* Filters */}
              <div className="flex gap-4 w-full lg:w-auto">
                <Select
                  value={selectedStatus}
                  onValueChange={setSelectedStatus}
                >
                  <SelectTrigger className="w-full lg:w-48">
                    <SelectValue placeholder="Status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="semua">Semua Status</SelectItem>
                    <SelectItem value="tepat-waktu">Tepat Waktu</SelectItem>
                    <SelectItem value="terlambat">Terlambat</SelectItem>
                  </SelectContent>
                </Select>

                <Select
                  value={selectedPeriod}
                  onValueChange={setSelectedPeriod}
                >
                  <SelectTrigger className="w-full lg:w-36">
                    <SelectValue placeholder="Periode" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="semua">Semua</SelectItem>
                    <SelectItem value="bulan-ini">Bulan Ini</SelectItem>
                    <SelectItem value="3-bulan">3 Bulan</SelectItem>
                    <SelectItem value="tahun-ini">Tahun Ini</SelectItem>
                  </SelectContent>
                </Select>

                <Button
                  variant="outline"
                  className="border-stis-blue text-stis-blue hover:bg-stis-blue hover:text-white"
                >
                  <Download className="w-4 h-4 mr-2" />
                  Export
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
            <Tabs defaultValue="current" className="w-full">
              <TabsList className="grid w-full grid-cols-2 max-w-md mx-auto mb-12">
                <TabsTrigger value="current">Sedang Dipinjam</TabsTrigger>
                <TabsTrigger value="history">Riwayat</TabsTrigger>
              </TabsList>

              {/* Current Borrowings Tab */}
              <TabsContent value="current">
                <div className="mb-8">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-2xl font-bold text-gray-900">
                      Buku Sedang Dipinjam ({currentBorrowings.length})
                    </h3>
                    <Button
                      variant="outline"
                      className="border-stis-blue text-stis-blue hover:bg-stis-blue hover:text-white"
                    >
                      Perpanjang Semua
                    </Button>
                  </div>

                  <div className="space-y-4">
                    {currentBorrowings.map((book) => (
                      <Card
                        key={book.id}
                        className="border-0 shadow-lg hover:shadow-xl transition-shadow"
                      >
                        <CardContent className="p-6">
                          <div className="flex flex-col lg:flex-row gap-6">
                            {/* Book Cover */}
                            <div className="w-full lg:w-20 h-28 lg:h-24 bg-gradient-to-br from-stis-blue-light to-stis-gray-light rounded-lg flex items-center justify-center flex-shrink-0">
                              <BookOpen className="w-8 h-8 text-stis-blue/40" />
                            </div>

                            {/* Book Details */}
                            <div className="flex-1">
                              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
                                <div className="flex-1">
                                  <div className="flex items-center gap-2 mb-2">
                                    {getStatusBadge(
                                      book.status,
                                      book.days_remaining,
                                      book.days_overdue,
                                    )}
                                    {book.fine && (
                                      <Badge
                                        variant="destructive"
                                        className="text-xs"
                                      >
                                        Denda: Rp {book.fine.toLocaleString()}
                                      </Badge>
                                    )}
                                  </div>

                                  <h4 className="text-lg font-semibold text-gray-900 mb-2">
                                    {book.title}
                                  </h4>

                                  <div className="space-y-1 text-sm text-gray-600 mb-3">
                                    <p>
                                      <strong>Penulis:</strong>{" "}
                                      {book.authors.join(", ")}
                                    </p>
                                    <p>
                                      <strong>ISBN:</strong> {book.isbn} •{" "}
                                      <strong>Call Number:</strong>{" "}
                                      {book.call_number}
                                    </p>
                                    <p>
                                      <strong>Tanggal Pinjam:</strong>{" "}
                                      {formatDate(book.borrowed_date)}
                                    </p>
                                    <p>
                                      <strong>Tanggal Kembali:</strong>{" "}
                                      {formatDate(book.due_date)}
                                    </p>
                                    <p>
                                      <strong>Perpanjangan:</strong>{" "}
                                      {book.renewal_count}/2 kali
                                    </p>
                                  </div>

                                  {book.status === "Dipinjam" &&
                                    book.days_remaining && (
                                      <div className="text-sm text-blue-600 font-medium">
                                        Sisa waktu: {book.days_remaining} hari
                                      </div>
                                    )}

                                  {book.status === "Terlambat" && (
                                    <div className="text-sm text-red-600 font-medium">
                                      Terlambat: {book.days_overdue} hari
                                      {book.fine &&
                                        ` • Denda: Rp ${book.fine.toLocaleString()}`}
                                    </div>
                                  )}
                                </div>

                                {/* Action Buttons */}
                                <div className="flex flex-col gap-2 lg:w-36">
                                  <Button
                                    size="sm"
                                    className="bg-stis-blue hover:bg-stis-blue-dark"
                                    disabled={book.status === "Terlambat"}
                                  >
                                    <Eye className="w-4 h-4 mr-2" />
                                    Detail
                                  </Button>
                                  <Button
                                    size="sm"
                                    variant="outline"
                                    className="border-stis-cyan text-stis-cyan hover:bg-stis-cyan hover:text-white"
                                    disabled={
                                      !book.can_renew ||
                                      book.status === "Terlambat"
                                    }
                                  >
                                    <RotateCcw className="w-4 h-4 mr-2" />
                                    Perpanjang
                                  </Button>
                                  {book.fine && (
                                    <Button size="sm" variant="destructive">
                                      Bayar Denda
                                    </Button>
                                  )}
                                </div>
                              </div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>

                  {currentBorrowings.length === 0 && (
                    <Card className="border-0 shadow-lg">
                      <CardContent className="p-12 text-center">
                        <BookOpen className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                        <h3 className="text-lg font-medium text-gray-900 mb-2">
                          Tidak ada buku yang sedang dipinjam
                        </h3>
                        <p className="text-gray-600">
                          Jelajahi koleksi perpustakaan dan pinjam buku yang
                          Anda butuhkan.
                        </p>
                      </CardContent>
                    </Card>
                  )}
                </div>
              </TabsContent>

              {/* History Tab */}
              <TabsContent value="history">
                <div className="mb-8">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-2xl font-bold text-gray-900">
                      Riwayat Peminjaman ({filteredHistory.length})
                    </h3>
                    <Select defaultValue="terbaru">
                      <SelectTrigger className="w-48">
                        <SelectValue placeholder="Urutkan" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="terbaru">Terbaru</SelectItem>
                        <SelectItem value="terlama">Terlama</SelectItem>
                        <SelectItem value="judul">Judul A-Z</SelectItem>
                        <SelectItem value="status">Status</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-4">
                    {filteredHistory.map((book) => (
                      <Card
                        key={book.id}
                        className="border-0 shadow-md hover:shadow-lg transition-shadow"
                      >
                        <CardContent className="p-6">
                          <div className="flex flex-col lg:flex-row gap-6">
                            {/* Book Cover */}
                            <div className="w-full lg:w-16 h-24 lg:h-20 bg-gradient-to-br from-stis-blue-light to-stis-gray-light rounded-lg flex items-center justify-center flex-shrink-0">
                              <BookOpen className="w-6 h-6 text-stis-blue/40" />
                            </div>

                            {/* Book Details */}
                            <div className="flex-1">
                              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
                                <div className="flex-1">
                                  <div className="flex items-center gap-2 mb-2">
                                    {getStatusBadge(book.status)}
                                    {!book.on_time && book.fine_paid && (
                                      <Badge
                                        variant="outline"
                                        className="text-xs"
                                      >
                                        Denda Dibayar: Rp{" "}
                                        {book.fine_paid.toLocaleString()}
                                      </Badge>
                                    )}
                                  </div>

                                  <h4 className="text-lg font-semibold text-gray-900 mb-2">
                                    {book.title}
                                  </h4>

                                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm text-gray-600 mb-3">
                                    <div>
                                      <p>
                                        <strong>Penulis:</strong>{" "}
                                        {book.authors.join(", ")}
                                      </p>
                                      <p>
                                        <strong>Dipinjam:</strong>{" "}
                                        {formatDate(book.borrowed_date)}
                                      </p>
                                      <p>
                                        <strong>Dikembalikan:</strong>{" "}
                                        {formatDate(book.returned_date)}
                                      </p>
                                    </div>
                                    <div>
                                      <p>
                                        <strong>Jatuh Tempo:</strong>{" "}
                                        {formatDate(book.due_date)}
                                      </p>
                                      <p>
                                        <strong>Durasi:</strong> {book.duration}{" "}
                                        hari
                                      </p>
                                      {!book.on_time && (
                                        <p className="text-red-600">
                                          <strong>Terlambat:</strong>{" "}
                                          {book.days_late} hari
                                        </p>
                                      )}
                                    </div>
                                  </div>

                                  <div className="flex items-center gap-4">
                                    <div className="flex items-center gap-1">
                                      <span className="text-sm text-gray-600">
                                        Rating:
                                      </span>
                                      <div className="flex">
                                        {[1, 2, 3, 4, 5].map((star) => (
                                          <div
                                            key={star}
                                            className={`w-3 h-3 ${
                                              star <= book.rating
                                                ? "text-yellow-400 fill-current"
                                                : "text-gray-300"
                                            }`}
                                          >
                                            ⭐
                                          </div>
                                        ))}
                                      </div>
                                    </div>
                                  </div>
                                </div>

                                {/* Action Button */}
                                <div className="lg:w-24">
                                  <Button
                                    size="sm"
                                    variant="outline"
                                    className="w-full border-stis-blue text-stis-blue hover:bg-stis-blue hover:text-white"
                                  >
                                    <Eye className="w-4 h-4 mr-2" />
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

                  {/* Pagination */}
                  <div className="flex items-center justify-center gap-2 mt-8">
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

      {/* Help Popup */}
      <HelpPopup pageHelp={helpItems} />
    </div>
  );
}
