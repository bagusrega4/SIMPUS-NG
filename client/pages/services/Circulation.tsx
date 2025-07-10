import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  BookOpen,
  Calendar,
  Clock,
  CheckCircle,
  User,
  ArrowRight,
  Search,
  QrCode,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Navigation from "@/components/Navigation";
import HelpPopup from "@/components/HelpPopup";

export default function Circulation() {
  const navigate = useNavigate();
  const helpItems = [
    {
      question: "Bagaimana proses peminjaman buku?",
      answer:
        "1) Cari buku di katalog, 2) Klik tombol Pinjam, 3) Isi formulir peminjaman, 4) Ambil buku di perpustakaan",
    },
    {
      question: "Apa yang harus dibawa saat mengambil buku?",
      answer:
        "Bawa kartu identitas (KTM untuk mahasiswa, ID card untuk dosen) dan pastikan tidak ada tunggakan denda.",
    },
    {
      question: "Berapa lama masa peminjaman?",
      answer:
        "Mahasiswa: 14 hari, dapat diperpanjang 2 kali jika tidak ada antrian pemesanan.",
    },
  ];

  const serviceHours = [
    { day: "Senin - Jumat", hours: "08:00 - 16:00", status: "Buka" },
    { day: "Sabtu", hours: "08:00 - 12:00", status: "Buka" },
    { day: "Minggu", hours: "Tutup", status: "Tutup" },
    { day: "Hari Libur Nasional", hours: "Tutup", status: "Tutup" },
  ];

  const borrowingSteps = [
    {
      step: 1,
      title: "Cari Buku",
      description: "Temukan buku yang ingin dipinjam melalui katalog online",
      icon: Search,
      action: "Ke Koleksi Buku",
      link: "/collection/books",
    },
    {
      step: 2,
      title: "Ajukan Peminjaman",
      description: "Klik tombol Pinjam dan isi formulir peminjaman online",
      icon: BookOpen,
      action: "Lihat Panduan",
    },
    {
      step: 3,
      title: "Tunggu Konfirmasi",
      description:
        "Tim perpustakaan akan memproses dan mengkonfirmasi via email",
      icon: Clock,
      action: "Cek Email",
    },
    {
      step: 4,
      title: "Ambil Buku",
      description: "Datang ke perpustakaan dengan KTM untuk mengambil buku",
      icon: CheckCircle,
      action: "Info Lokasi",
      link: "/info/map",
    },
  ];

  const borrowingRules = [
    "Mahasiswa dapat meminjam maksimal 3 buku",
    "Masa peminjaman standar adalah 14 hari",
    "Buku dapat diperpanjang maksimal 2 kali",
    "Denda keterlambatan Rp 1.000 per hari per buku",
    "Wajib membawa kartu identitas saat pengambilan",
    "Buku tidak boleh dipinjamkan ke orang lain",
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Header */}
      <div className="bg-gradient-to-br from-stis-blue-light via-white to-stis-gray-light pt-24 pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="secondary" className="mb-4">
              Layanan
            </Badge>
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              Layanan <span className="text-stis-blue">Peminjaman</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 leading-relaxed">
              Proses peminjaman buku koleksi Perpustakaan STIS dengan sistem
              digital yang mudah dan efisien
            </p>
          </div>
        </div>
      </div>

      {/* Service Hours */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-gray-900">
                Jam Layanan Peminjaman
              </h2>
              <p className="text-gray-600 mt-2">
                Waktu operasional layanan peminjaman buku
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {serviceHours.map((schedule, index) => (
                <Card
                  key={index}
                  className={`border-0 shadow-lg text-center ${
                    schedule.status === "Buka"
                      ? "bg-green-50 border-green-200"
                      : "bg-red-50 border-red-200"
                  }`}
                >
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-gray-900 mb-2">
                      {schedule.day}
                    </h3>
                    <p className="text-sm text-gray-600 mb-3">
                      {schedule.hours}
                    </p>
                    <Badge
                      className={
                        schedule.status === "Buka"
                          ? "bg-green-100 text-green-700"
                          : "bg-red-100 text-red-700"
                      }
                    >
                      {schedule.status}
                    </Badge>
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
            <Tabs defaultValue="process" className="w-full">
              <TabsList className="grid w-full grid-cols-2 max-w-lg mx-auto mb-12">
                <TabsTrigger value="process">Proses Peminjaman</TabsTrigger>
                <TabsTrigger value="rules">Peraturan</TabsTrigger>
              </TabsList>

              {/* Borrowing Process Tab */}
              <TabsContent value="process">
                <div className="text-center mb-12">
                  <h3 className="text-3xl font-bold text-gray-900 mb-4">
                    Langkah-langkah Peminjaman
                  </h3>
                  <p className="text-lg text-gray-600">
                    Ikuti 4 langkah mudah untuk meminjam buku
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                  {borrowingSteps.map((step, index) => {
                    const IconComponent = step.icon;
                    return (
                      <Card
                        key={index}
                        className="border-0 shadow-lg hover:shadow-xl transition-shadow text-center relative"
                      >
                        <CardContent className="p-8">
                          <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                            <div className="w-8 h-8 bg-stis-blue rounded-full flex items-center justify-center text-white font-bold text-sm">
                              {step.step}
                            </div>
                          </div>

                          <div className="w-16 h-16 bg-stis-blue/10 rounded-xl flex items-center justify-center mx-auto mb-6 mt-4">
                            <IconComponent className="w-8 h-8 text-stis-blue" />
                          </div>

                          <h4 className="text-xl font-semibold text-gray-900 mb-3">
                            {step.title}
                          </h4>
                          <p className="text-gray-600 mb-6 leading-relaxed">
                            {step.description}
                          </p>

                          {step.link ? (
                            <Button
                              onClick={() => navigate(step.link)}
                              className="w-full bg-stis-blue hover:bg-stis-blue-dark"
                            >
                              {step.action}
                              <ArrowRight className="w-4 h-4 ml-2" />
                            </Button>
                          ) : (
                            <Button
                              variant="outline"
                              className="w-full border-stis-blue text-stis-blue hover:bg-stis-blue hover:text-white"
                            >
                              {step.action}
                            </Button>
                          )}
                        </CardContent>
                      </Card>
                    );
                  })}
                </div>

                {/* Quick Actions */}
                <div className="mt-16 text-center">
                  <h4 className="text-2xl font-bold text-gray-900 mb-8">
                    Mulai Peminjaman
                  </h4>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
                    <Button
                      onClick={() => navigate("/collection/books")}
                      className="flex-1 bg-stis-blue hover:bg-stis-blue-dark"
                      size="lg"
                    >
                      <BookOpen className="w-5 h-5 mr-2" />
                      Cari Buku
                    </Button>
                    <Button
                      onClick={() => navigate("/collection/borrowing-history")}
                      variant="outline"
                      className="flex-1 border-stis-blue text-stis-blue hover:bg-stis-blue hover:text-white"
                      size="lg"
                    >
                      <Clock className="w-5 h-5 mr-2" />
                      Lihat Riwayat
                    </Button>
                  </div>
                </div>
              </TabsContent>

              {/* Rules Tab */}
              <TabsContent value="rules">
                <div className="text-center mb-12">
                  <h3 className="text-3xl font-bold text-gray-900 mb-4">
                    Peraturan Peminjaman
                  </h3>
                  <p className="text-lg text-gray-600">
                    Ketentuan yang berlaku untuk peminjaman buku
                  </p>
                </div>

                <Card className="border-0 shadow-lg max-w-4xl mx-auto">
                  <CardContent className="p-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div>
                        <h4 className="text-xl font-semibold text-gray-900 mb-6 flex items-center">
                          <BookOpen className="w-5 h-5 text-stis-blue mr-2" />
                          Ketentuan Umum
                        </h4>
                        <div className="space-y-3">
                          {borrowingRules.map((rule, index) => (
                            <div
                              key={index}
                              className="flex items-start text-sm text-gray-600"
                            >
                              <CheckCircle className="w-4 h-4 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                              {rule}
                            </div>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h4 className="text-xl font-semibold text-gray-900 mb-6 flex items-center">
                          <User className="w-5 h-5 text-stis-blue mr-2" />
                          Persyaratan
                        </h4>
                        <div className="space-y-4">
                          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                            <h5 className="font-semibold text-blue-900 mb-2">
                              Mahasiswa:
                            </h5>
                            <ul className="space-y-1 text-sm text-blue-700">
                              <li>• Kartu Tanda Mahasiswa (KTM) aktif</li>
                              <li>• Tidak ada tunggakan denda</li>
                              <li>• Status mahasiswa aktif</li>
                            </ul>
                          </div>
                          <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                            <h5 className="font-semibold text-green-900 mb-2">
                              Dosen & Staff:
                            </h5>
                            <ul className="space-y-1 text-sm text-green-700">
                              <li>• ID Card pegawai STIS</li>
                              <li>• Kuota peminjaman lebih besar</li>
                              <li>• Periode peminjaman lebih lama</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="mt-8 pt-6 border-t border-gray-200">
                      <div className="text-center">
                        <h5 className="font-semibold text-gray-900 mb-4">
                          Butuh bantuan atau memiliki pertanyaan?
                        </h5>
                        <div className="flex flex-col sm:flex-row gap-3 justify-center">
                          <Button
                            onClick={() => navigate("/info/contact")}
                            variant="outline"
                            className="border-stis-blue text-stis-blue hover:bg-stis-blue hover:text-white"
                          >
                            Hubungi Perpustakaan
                          </Button>
                          <Button
                            onClick={() => navigate("/info/faq")}
                            variant="outline"
                            className="border-gray-300"
                          >
                            Lihat FAQ
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
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
                  href="/info/rules"
                  className="block text-white/80 hover:text-white transition-colors text-sm"
                >
                  Peraturan
                </a>
                <a
                  href="/info/contact"
                  className="block text-white/80 hover:text-white transition-colors text-sm"
                >
                  Kontak
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
