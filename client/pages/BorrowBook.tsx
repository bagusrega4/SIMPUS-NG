import { useState, useEffect } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import {
  BookOpen,
  Calendar,
  Clock,
  User,
  Mail,
  Phone,
  AlertCircle,
  CheckCircle,
  ArrowLeft,
  Building,
  MapPin,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Textarea } from "@/components/ui/textarea";
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
import { useBorrowedBooks } from "@/contexts/BorrowedBooksContext";

export default function BorrowBook() {
  const { user, isAuthenticated } = useAuth();
  const { addBorrowedBook, isBookBorrowed } = useBorrowedBooks();
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // Get book info from URL params
  const bookId = searchParams.get("id");
  const bookTitle = searchParams.get("title") || "";
  const bookAuthor = searchParams.get("author") || "";
  const bookIsbn = searchParams.get("isbn") || "";
  const bookCallNumber = searchParams.get("callNumber") || "";

  const [borrowData, setBorrowData] = useState({
    borrowDate: new Date().toISOString().split("T")[0],
    returnDate: "",
    borrowPeriod: "14",
    purpose: "",
    notes: "",
    contactPhone: "",
    emergencyContact: "",
  });

  // Redirect if not authenticated
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-white">
        <Navigation />
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-stis-blue-light via-white to-stis-gray-light pt-16">
          <div className="text-center max-w-md mx-auto px-4">
            <div className="w-24 h-24 bg-stis-blue/10 rounded-full flex items-center justify-center mx-auto mb-8">
              <BookOpen className="w-12 h-12 text-stis-blue" />
            </div>
            <h1 className="text-2xl font-bold text-gray-900 mb-4">
              Login Diperlukan
            </h1>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Silakan login terlebih dahulu untuk meminjam buku.
            </p>
            <a href="/login">
              <Button className="bg-stis-blue hover:bg-stis-blue-dark text-white px-6 py-3 rounded-lg">
                Login Sekarang
              </Button>
            </a>
          </div>
        </div>
      </div>
    );
  }

  // Redirect if no book selected
  if (!bookId || !bookTitle) {
    return (
      <div className="min-h-screen bg-white">
        <Navigation />
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-stis-blue-light via-white to-stis-gray-light pt-16">
          <div className="text-center max-w-md mx-auto px-4">
            <div className="w-24 h-24 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-8">
              <AlertCircle className="w-12 h-12 text-red-600" />
            </div>
            <h1 className="text-2xl font-bold text-gray-900 mb-4">
              Buku Tidak Ditemukan
            </h1>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Informasi buku tidak lengkap. Silakan pilih buku dari koleksi.
            </p>
            <Button
              onClick={() => navigate("/collection/books")}
              className="bg-stis-blue hover:bg-stis-blue-dark text-white px-6 py-3 rounded-lg"
            >
              Kembali ke Koleksi
            </Button>
          </div>
        </div>
      </div>
    );
  }

  // Check if book is already borrowed
  if (isBookBorrowed(bookId)) {
    return (
      <div className="min-h-screen bg-white">
        <Navigation />
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-stis-blue-light via-white to-stis-gray-light pt-16">
          <div className="text-center max-w-md mx-auto px-4">
            <div className="w-24 h-24 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-8">
              <AlertCircle className="w-12 h-12 text-yellow-600" />
            </div>
            <h1 className="text-2xl font-bold text-gray-900 mb-4">
              Buku Sedang Dipinjam
            </h1>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Buku "<strong>{bookTitle}</strong>" sedang dipinjam oleh pengguna
              lain. Silakan pilih buku lain atau coba lagi nanti.
            </p>
            <div className="flex gap-4 justify-center">
              <Button
                onClick={() => navigate("/collection/books")}
                className="bg-stis-blue hover:bg-stis-blue-dark text-white px-6 py-3 rounded-lg"
              >
                Cari Buku Lain
              </Button>
              <Button
                onClick={() => navigate("/collection/borrowing-history")}
                variant="outline"
                className="border-stis-blue text-stis-blue hover:bg-stis-blue hover:text-white px-6 py-3 rounded-lg"
              >
                Lihat Riwayat
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  const helpItems = [
    {
      question: "Berapa lama buku bisa dipinjam?",
      answer:
        "Mahasiswa dapat meminjam buku selama 14 hari, dapat diperpanjang 2 kali jika tidak ada antrian.",
    },
    {
      question: "Bagaimana cara mengambil buku?",
      answer:
        "Buku dapat diambil langsung di perpustakaan atau diantar ke ruang kelas (terbatas).",
    },
    {
      question: "Berapa denda jika terlambat?",
      answer:
        "Denda keterlambatan adalah Rp 1.000 per hari per buku yang terlambat dikembalikan.",
    },
  ];

  useEffect(() => {
    // Calculate return date based on borrow period
    if (borrowData.borrowDate && borrowData.borrowPeriod) {
      const startDate = new Date(borrowData.borrowDate);
      const returnDate = new Date(
        startDate.getTime() +
          parseInt(borrowData.borrowPeriod) * 24 * 60 * 60 * 1000,
      );
      setBorrowData((prev) => ({
        ...prev,
        returnDate: returnDate.toISOString().split("T")[0],
      }));
    }
  }, [borrowData.borrowDate, borrowData.borrowPeriod]);

  const handleInputChange = (field: string, value: string) => {
    setBorrowData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Validate required fields
    if (!borrowData.purpose.trim()) {
      alert("Silakan isi tujuan peminjaman");
      setIsSubmitting(false);
      return;
    }

    if (!borrowData.contactPhone.trim()) {
      alert("Silakan isi nomor telepon kontak");
      setIsSubmitting(false);
      return;
    }

    // Simulate API call with shorter delay
    setTimeout(() => {
      // Add book to borrowed books list
      addBorrowedBook({
        id: bookId,
        title: bookTitle,
        author: bookAuthor,
        borrowedDate: borrowData.borrowDate,
        userId: user?.email || "unknown",
      });

      // Log the borrow request
      console.log("Borrow request submitted:", {
        bookId,
        bookTitle,
        user: user?.email,
        borrowData,
      });

      setIsSubmitting(false);
      setIsSuccess(true);

      // Immediate redirect to collection after success
      navigate("/collection/books");
    }, 1000);
  };

  if (isSuccess) {
    // Immediately redirect to Koleksi Cetak
    navigate("/collection/books");
    return null;
  }

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Header */}
      <div className="bg-gradient-to-br from-stis-blue-light via-white to-stis-gray-light pt-24 pb-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center mb-6">
              <Button
                onClick={() => navigate(-1)}
                variant="outline"
                size="sm"
                className="mr-4 border-stis-blue text-stis-blue hover:bg-stis-blue hover:text-white"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Kembali
              </Button>
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Formulir <span className="text-stis-blue">Peminjaman</span>
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed">
              Lengkapi formulir berikut untuk meminjam buku dari koleksi
              perpustakaan
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Book Information */}
              <div className="lg:col-span-1">
                <Card className="border-0 shadow-lg">
                  <CardHeader>
                    <CardTitle>Buku yang Dipinjam</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="w-full h-48 bg-gradient-to-br from-stis-blue-light to-stis-gray-light rounded-lg flex items-center justify-center">
                      <BookOpen className="w-12 h-12 text-stis-blue/40" />
                    </div>

                    <div className="space-y-3">
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-1">
                          {bookTitle}
                        </h3>
                        <p className="text-sm text-gray-600">{bookAuthor}</p>
                      </div>

                      <div className="text-sm text-gray-600 space-y-1">
                        <p>
                          <strong>ISBN:</strong> {bookIsbn}
                        </p>
                        <p>
                          <strong>Call Number:</strong> {bookCallNumber}
                        </p>
                        <p>
                          <strong>Status:</strong>{" "}
                          <Badge className="bg-green-100 text-green-700">
                            Tersedia
                          </Badge>
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Borrower Info */}
                <Card className="border-0 shadow-lg mt-6">
                  <CardHeader>
                    <CardTitle>Informasi Peminjam</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <User className="w-4 h-4 text-gray-400" />
                      <span className="text-sm">
                        {user?.name || "Agape Bagus Rega Anggara"}
                      </span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Mail className="w-4 h-4 text-gray-400" />
                      <span className="text-sm">{user?.email}</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Building className="w-4 h-4 text-gray-400" />
                      <span className="text-sm">D-IV Statistika</span>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Borrow Form */}
              <div className="lg:col-span-2">
                <Card className="border-0 shadow-lg">
                  <CardHeader>
                    <CardTitle>Detail Peminjaman</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-6">
                      {/* Borrowing Period */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <Label htmlFor="borrowDate">Tanggal Pinjam</Label>
                          <Input
                            id="borrowDate"
                            type="date"
                            value={borrowData.borrowDate}
                            onChange={(e) =>
                              handleInputChange("borrowDate", e.target.value)
                            }
                            className="mt-1"
                            style={{
                              colorScheme: "light",
                              position: "relative",
                            }}
                            required
                          />
                        </div>

                        <div>
                          <Label htmlFor="borrowPeriod">
                            Periode Peminjaman
                          </Label>
                          <Select
                            value={borrowData.borrowPeriod}
                            onValueChange={(value) =>
                              handleInputChange("borrowPeriod", value)
                            }
                          >
                            <SelectTrigger className="mt-1">
                              <SelectValue placeholder="Pilih periode" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="7">7 hari</SelectItem>
                              <SelectItem value="14">
                                14 hari (standar)
                              </SelectItem>
                              <SelectItem value="21">
                                21 hari (khusus)
                              </SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>

                      {/* Return Date Display */}
                      <div>
                        <Label>Tanggal Kembali</Label>
                        <div className="mt-1 p-3 bg-gray-50 rounded-lg flex items-center">
                          <Calendar className="w-4 h-4 text-gray-400 mr-2" />
                          <span className="text-gray-700">
                            {borrowData.returnDate
                              ? new Date(
                                  borrowData.returnDate,
                                ).toLocaleDateString("id-ID", {
                                  weekday: "long",
                                  year: "numeric",
                                  month: "long",
                                  day: "numeric",
                                })
                              : "-"}
                          </span>
                        </div>
                      </div>

                      {/* Purpose */}
                      <div>
                        <Label htmlFor="purpose" className="required-asterisk">
                          Tujuan Peminjaman
                        </Label>
                        <Select
                          value={borrowData.purpose}
                          onValueChange={(value) =>
                            handleInputChange("purpose", value)
                          }
                        >
                          <SelectTrigger className="mt-1">
                            <SelectValue placeholder="Pilih tujuan peminjaman" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="tugas">Tugas Kuliah</SelectItem>
                            <SelectItem value="skripsi">
                              Skripsi/Tugas Akhir
                            </SelectItem>
                            <SelectItem value="penelitian">
                              Penelitian
                            </SelectItem>
                            <SelectItem value="referensi">
                              Referensi Belajar
                            </SelectItem>
                            <SelectItem value="lainnya">Lainnya</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      {/* Contact Information */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <Label
                            htmlFor="contactPhone"
                            className="required-asterisk"
                          >
                            Nomor Telepon Kontak
                          </Label>
                          <Input
                            id="contactPhone"
                            type="tel"
                            value={borrowData.contactPhone}
                            onChange={(e) =>
                              handleInputChange("contactPhone", e.target.value)
                            }
                            placeholder="08xx-xxxx-xxxx"
                            className="mt-1"
                            required
                          />
                        </div>

                        <div>
                          <Label htmlFor="emergencyContact">
                            Kontak Darurat
                          </Label>
                          <Input
                            id="emergencyContact"
                            type="tel"
                            value={borrowData.emergencyContact}
                            onChange={(e) =>
                              handleInputChange(
                                "emergencyContact",
                                e.target.value,
                              )
                            }
                            placeholder="08xx-xxxx-xxxx (opsional)"
                            className="mt-1"
                          />
                        </div>
                      </div>

                      {/* Notes */}
                      <div>
                        <Label htmlFor="notes">Catatan Tambahan</Label>
                        <Textarea
                          id="notes"
                          value={borrowData.notes}
                          onChange={(e) =>
                            handleInputChange("notes", e.target.value)
                          }
                          placeholder="Catatan khusus untuk perpustakaan (opsional)"
                          className="mt-1"
                          rows={3}
                        />
                      </div>

                      {/* Terms and Conditions */}
                      <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                        <h4 className="font-semibold text-yellow-900 mb-2 flex items-center">
                          <AlertCircle className="w-4 h-4 mr-2" />
                          Syarat dan Ketentuan
                        </h4>
                        <ul className="text-yellow-800 text-sm space-y-1">
                          <li>• Buku harus dikembalikan tepat waktu</li>
                          <li>• Denda keterlambatan Rp 1.000/hari per buku</li>
                          <li>• Buku tidak boleh dipinjamkan ke orang lain</li>
                          <li>
                            • Kerusakan atau kehilangan menjadi tanggung jawab
                            peminjam
                          </li>
                          <li>
                            • Perpanjangan maksimal 2 kali jika tidak ada
                            antrian
                          </li>
                        </ul>
                      </div>

                      {/* Submit Button */}
                      <div className="flex gap-4 pt-4">
                        <Button
                          type="button"
                          variant="outline"
                          onClick={() => navigate(-1)}
                          className="flex-1 border-gray-300 text-gray-700 hover:bg-red-600 hover:text-white hover:border-red-600"
                        >
                          Batal
                        </Button>
                        <Button
                          type="submit"
                          disabled={isSubmitting}
                          className="flex-1 bg-stis-blue hover:bg-stis-blue-dark"
                        >
                          {isSubmitting ? (
                            <div className="flex items-center justify-center">
                              <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                              Memproses...
                            </div>
                          ) : (
                            <>
                              <BookOpen className="w-4 h-4 mr-2" />
                              Ajukan Peminjaman
                            </>
                          )}
                        </Button>
                      </div>
                    </form>
                  </CardContent>
                </Card>
              </div>
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

            {/* Quick Links */}
            <div>
              <h5 className="text-lg font-semibold mb-4">Pintasan</h5>
              <div className="space-y-3">
                <a
                  href="/collection/books"
                  className="block text-white/80 hover:text-white transition-colors text-sm"
                >
                  Katalog Buku
                </a>
                <a
                  href="/collection/borrowing-history"
                  className="block text-white/80 hover:text-white transition-colors text-sm"
                >
                  Riwayat Pinjaman
                </a>
                <a
                  href="/services/circulation"
                  className="block text-white/80 hover:text-white transition-colors text-sm"
                >
                  Layanan Sirkulasi
                </a>
                <a
                  href="/info/rules"
                  className="block text-white/80 hover:text-white transition-colors text-sm"
                >
                  Peraturan
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
