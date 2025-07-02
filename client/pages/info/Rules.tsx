import { useState } from "react";
import {
  Scale,
  BookOpen,
  Users,
  Clock,
  Shield,
  AlertTriangle,
  CheckCircle,
  X,
  Search,
  Download,
  FileText,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import Navigation from "@/components/Navigation";

export default function Rules() {
  const [searchQuery, setSearchQuery] = useState("");

  const generalRules = [
    {
      category: "Keanggotaan",
      icon: Users,
      rules: [
        {
          id: 1,
          title: "Syarat Keanggotaan",
          content:
            "Setiap sivitas akademika STIS (mahasiswa, dosen, karyawan) berhak menjadi anggota perpustakaan dengan menunjukkan identitas resmi.",
          type: "allowed",
        },
        {
          id: 2,
          title: "Kartu Anggota",
          content:
            "Kartu anggota perpustakaan wajib dibawa setiap kali berkunjung dan harus dijaga dengan baik. Kehilangan kartu dikenakan biaya penggantian Rp 10.000.",
          type: "required",
        },
        {
          id: 3,
          title: "Masa Berlaku",
          content:
            "Kartu anggota berlaku selama menjadi sivitas akademika STIS. Perpanjangan kartu dilakukan setiap tahun akademik.",
          type: "info",
        },
      ],
    },
    {
      category: "Jam Operasional",
      icon: Clock,
      rules: [
        {
          id: 4,
          title: "Hari Kerja",
          content:
            "Perpustakaan buka Senin-Jumat pukul 08:00-16:00 WIB, Sabtu pukul 08:00-12:00 WIB.",
          type: "info",
        },
        {
          id: 5,
          title: "Hari Libur",
          content:
            "Perpustakaan tutup pada hari Minggu dan hari libur nasional. Layanan online tetap tersedia 24/7.",
          type: "info",
        },
        {
          id: 6,
          title: "Jam Berkunjung",
          content:
            "Pengunjung diharapkan memasuki perpustakaan maksimal 30 menit sebelum jam tutup.",
          type: "required",
        },
      ],
    },
    {
      category: "Tata Tertib Ruangan",
      icon: Shield,
      rules: [
        {
          id: 7,
          title: "Ketenangan",
          content:
            "Menjaga ketenangan dan tidak berbicara keras di area perpustakaan. Gunakan area diskusi untuk diskusi kelompok.",
          type: "required",
        },
        {
          id: 8,
          title: "Penggunaan Ponsel",
          content:
            "Ponsel harus dalam mode silent atau getar. Untuk menerima panggilan, harap keluar dari ruang baca.",
          type: "required",
        },
        {
          id: 9,
          title: "Makanan dan Minuman",
          content:
            "Dilarang membawa makanan ke dalam ruang perpustakaan. Air mineral dalam botol tertutup diperbolehkan.",
          type: "prohibited",
        },
        {
          id: 10,
          title: "Pakaian",
          content:
            "Menggunakan pakaian yang sopan dan rapi. Tidak diperkenankan menggunakan sandal jepit, kaos oblong, atau pakaian yang tidak pantas.",
          type: "required",
        },
      ],
    },
  ];

  const borrowingRules = [
    {
      title: "Ketentuan Peminjaman",
      rules: [
        "Peminjaman hanya dapat dilakukan oleh anggota terdaftar",
        "Maksimal peminjaman: Mahasiswa 3 buku, Dosen/Karyawan 5 buku",
        "Masa peminjaman: Mahasiswa 14 hari, Dosen/Karyawan 21 hari",
        "Perpanjangan maksimal 2-3 kali tergantung status anggota",
        "Buku referensi, skripsi, dan jurnal tidak dapat dipinjam",
      ],
    },
    {
      title: "Sanksi dan Denda",
      rules: [
        "Denda keterlambatan Rp 1.000 per hari per buku",
        "Maksimal denda Rp 50.000 per buku",
        "Buku hilang: ganti rugi 100% harga buku + biaya administrasi",
        "Buku rusak: denda 50-100% sesuai tingkat kerusakan",
        "Anggota dengan tunggakan tidak dapat meminjam buku baru",
      ],
    },
    {
      title: "Reservasi dan Perpanjangan",
      rules: [
        "Reservasi buku dapat dilakukan maksimal 3 hari",
        "Perpanjangan tidak dapat dilakukan jika ada anggota lain yang mereservasi",
        "Perpanjangan dapat dilakukan online melalui SIMPus",
        "Buku yang sudah diperpanjang maksimal tidak dapat diperpanjang lagi",
      ],
    },
  ];

  const prohibitedActions = [
    {
      action: "Merusak atau mencoret buku/fasilitas",
      consequence: "Ganti rugi + skorsing keanggotaan",
      severity: "high",
    },
    {
      action: "Membawa buku keluar tanpa izin",
      consequence: "Pencabutan keanggotaan sementara",
      severity: "high",
    },
    {
      action: "Mengganggu kenyamanan pengunjung lain",
      consequence: "Teguran lisan/tertulis",
      severity: "medium",
    },
    {
      action: "Merokok di area perpustakaan",
      consequence: "Teguran keras + laporan ke instansi",
      severity: "high",
    },
    {
      action: "Tidak mengembalikan buku tepat waktu",
      consequence: "Denda sesuai ketentuan",
      severity: "low",
    },
    {
      action: "Memalsukan identitas atau data",
      consequence: "Pencabutan keanggotaan permanen",
      severity: "high",
    },
  ];

  const filteredRules = generalRules.filter((category) =>
    category.rules.some(
      (rule) =>
        rule.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        rule.content.toLowerCase().includes(searchQuery.toLowerCase()),
    ),
  );

  const getRuleIcon = (type: string) => {
    switch (type) {
      case "allowed":
        return <CheckCircle className="w-4 h-4 text-green-500" />;
      case "required":
        return <AlertTriangle className="w-4 h-4 text-yellow-500" />;
      case "prohibited":
        return <X className="w-4 h-4 text-red-500" />;
      default:
        return <BookOpen className="w-4 h-4 text-blue-500" />;
    }
  };

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case "high":
        return "text-red-600 bg-red-50 border-red-200";
      case "medium":
        return "text-yellow-600 bg-yellow-50 border-yellow-200";
      case "low":
        return "text-blue-600 bg-blue-50 border-blue-200";
      default:
        return "text-gray-600 bg-gray-50 border-gray-200";
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Header */}
      <div className="bg-gradient-to-br from-stis-blue-light via-white to-stis-gray-light pt-24 pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="secondary" className="mb-4">
              Informasi
            </Badge>
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              Peraturan <span className="text-stis-blue">Perpustakaan</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 leading-relaxed">
              Tata tertib dan peraturan yang berlaku di Perpustakaan STIS untuk
              menciptakan lingkungan belajar yang kondusif dan nyaman bagi
              seluruh pengguna
            </p>
          </div>
        </div>
      </div>

      {/* Search */}
      <section className="py-8 bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <Input
                type="text"
                placeholder="Cari peraturan atau ketentuan..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 py-3 text-base rounded-xl border-2 border-gray-200 focus:border-stis-blue"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-stis-gray-light">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <Tabs defaultValue="general" className="w-full">
              <TabsList className="grid w-full grid-cols-3 max-w-md mx-auto mb-12">
                <TabsTrigger value="general">Umum</TabsTrigger>
                <TabsTrigger value="borrowing">Peminjaman</TabsTrigger>
                <TabsTrigger value="sanctions">Sanksi</TabsTrigger>
              </TabsList>

              {/* General Rules Tab */}
              <TabsContent value="general">
                <div className="text-center mb-12">
                  <h3 className="text-3xl font-bold text-gray-900 mb-4">
                    Peraturan Umum
                  </h3>
                  <p className="text-lg text-gray-600">
                    Ketentuan umum yang berlaku untuk semua pengguna
                    perpustakaan
                  </p>
                </div>

                <div className="space-y-8">
                  {filteredRules.map((category, index) => {
                    const IconComponent = category.icon;
                    return (
                      <Card
                        key={index}
                        className="border-0 shadow-lg hover:shadow-xl transition-shadow"
                      >
                        <CardContent className="p-8">
                          <div className="flex items-center gap-3 mb-6">
                            <div className="w-12 h-12 bg-stis-blue/10 rounded-lg flex items-center justify-center">
                              <IconComponent className="w-6 h-6 text-stis-blue" />
                            </div>
                            <h4 className="text-2xl font-bold text-gray-900">
                              {category.category}
                            </h4>
                          </div>

                          <div className="space-y-4">
                            {category.rules.map((rule) => (
                              <div
                                key={rule.id}
                                className="flex items-start gap-4 p-4 bg-white rounded-lg border border-gray-100"
                              >
                                <div className="flex-shrink-0 mt-1">
                                  {getRuleIcon(rule.type)}
                                </div>
                                <div className="flex-1">
                                  <h5 className="font-semibold text-gray-900 mb-2">
                                    {rule.title}
                                  </h5>
                                  <p className="text-gray-600 leading-relaxed">
                                    {rule.content}
                                  </p>
                                </div>
                              </div>
                            ))}
                          </div>
                        </CardContent>
                      </Card>
                    );
                  })}
                </div>
              </TabsContent>

              {/* Borrowing Rules Tab */}
              <TabsContent value="borrowing">
                <div className="text-center mb-12">
                  <h3 className="text-3xl font-bold text-gray-900 mb-4">
                    Peraturan Peminjaman
                  </h3>
                  <p className="text-lg text-gray-600">
                    Ketentuan khusus mengenai peminjaman dan pengembalian
                    koleksi
                  </p>
                </div>

                <div className="space-y-8">
                  {borrowingRules.map((section, index) => (
                    <Card
                      key={index}
                      className="border-0 shadow-lg hover:shadow-xl transition-shadow"
                    >
                      <CardContent className="p-8">
                        <h4 className="text-2xl font-bold text-gray-900 mb-6">
                          {section.title}
                        </h4>
                        <div className="space-y-3">
                          {section.rules.map((rule, ruleIndex) => (
                            <div
                              key={ruleIndex}
                              className="flex items-start gap-3 p-3 bg-stis-blue-light rounded-lg"
                            >
                              <div className="w-6 h-6 bg-stis-blue rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                                <span className="text-white text-xs font-bold">
                                  {ruleIndex + 1}
                                </span>
                              </div>
                              <p className="text-gray-800 leading-relaxed">
                                {rule}
                              </p>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                {/* Quick Reference */}
                <Card className="border-0 shadow-lg mt-8">
                  <CardContent className="p-8">
                    <h4 className="text-2xl font-bold text-gray-900 mb-6">
                      Ringkasan Cepat
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div className="text-center p-4 bg-blue-50 rounded-lg">
                        <div className="text-2xl font-bold text-blue-600 mb-2">
                          3 / 5
                        </div>
                        <div className="text-sm text-gray-600">
                          Maksimal Buku
                          <br />
                          (Mahasiswa / Dosen)
                        </div>
                      </div>
                      <div className="text-center p-4 bg-green-50 rounded-lg">
                        <div className="text-2xl font-bold text-green-600 mb-2">
                          14 / 21
                        </div>
                        <div className="text-sm text-gray-600">
                          Hari Peminjaman
                          <br />
                          (Mahasiswa / Dosen)
                        </div>
                      </div>
                      <div className="text-center p-4 bg-red-50 rounded-lg">
                        <div className="text-2xl font-bold text-red-600 mb-2">
                          Rp 1.000
                        </div>
                        <div className="text-sm text-gray-600">
                          Denda per Hari
                          <br />
                          per Buku
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Sanctions Tab */}
              <TabsContent value="sanctions">
                <div className="text-center mb-12">
                  <h3 className="text-3xl font-bold text-gray-900 mb-4">
                    Sanksi & Pelanggaran
                  </h3>
                  <p className="text-lg text-gray-600">
                    Jenis pelanggaran dan sanksi yang berlaku di perpustakaan
                  </p>
                </div>

                <div className="space-y-4">
                  {prohibitedActions.map((item, index) => (
                    <Card
                      key={index}
                      className={`border-0 shadow-lg transition-shadow ${getSeverityColor(item.severity)}`}
                    >
                      <CardContent className="p-6">
                        <div className="flex items-start justify-between gap-4">
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-2">
                              <h4 className="font-semibold text-lg">
                                {item.action}
                              </h4>
                              <Badge
                                variant={
                                  item.severity === "high"
                                    ? "destructive"
                                    : item.severity === "medium"
                                      ? "outline"
                                      : "secondary"
                                }
                                className="text-xs"
                              >
                                {item.severity === "high"
                                  ? "Berat"
                                  : item.severity === "medium"
                                    ? "Sedang"
                                    : "Ringan"}
                              </Badge>
                            </div>
                            <p className="text-gray-700 font-medium">
                              Sanksi: {item.consequence}
                            </p>
                          </div>
                          <div className="flex-shrink-0">
                            {item.severity === "high" && (
                              <AlertTriangle className="w-6 h-6 text-red-500" />
                            )}
                            {item.severity === "medium" && (
                              <AlertTriangle className="w-6 h-6 text-yellow-500" />
                            )}
                            {item.severity === "low" && (
                              <AlertTriangle className="w-6 h-6 text-blue-500" />
                            )}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                <Card className="border-0 shadow-lg mt-8 bg-yellow-50">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <AlertTriangle className="w-6 h-6 text-yellow-600 flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">
                          Catatan Penting
                        </h4>
                        <ul className="space-y-1 text-gray-700 text-sm">
                          <li>
                            • Pelanggaran berulang akan dikenakan sanksi yang
                            lebih berat
                          </li>
                          <li>
                            • Anggota yang dikenakan sanksi skorsing dapat
                            mengajukan banding
                          </li>
                          <li>
                            • Pencabutan keanggotaan permanen memerlukan
                            persetujuan kepala perpustakaan
                          </li>
                          <li>
                            • Sanksi akan dicatat dalam database keanggotaan
                            perpustakaan
                          </li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>

      {/* Download Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              Download Peraturan Lengkap
            </h3>
            <p className="text-lg text-gray-600 mb-8">
              Dapatkan salinan digital peraturan perpustakaan untuk referensi
              Anda
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-red-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <FileText className="w-8 h-8 text-red-500" />
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">
                    Peraturan Lengkap
                  </h4>
                  <p className="text-gray-600 text-sm mb-4">
                    Dokumen PDF berisi semua peraturan dan tata tertib
                    perpustakaan
                  </p>
                  <Button className="w-full bg-stis-blue hover:bg-stis-blue-dark">
                    <Download className="w-4 h-4 mr-2" />
                    Download PDF
                  </Button>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Scale className="w-8 h-8 text-blue-500" />
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">
                    Ringkasan Aturan
                  </h4>
                  <p className="text-gray-600 text-sm mb-4">
                    Ringkasan singkat aturan penting yang perlu diketahui
                    pengguna
                  </p>
                  <Button
                    variant="outline"
                    className="w-full border-stis-blue text-stis-blue hover:bg-stis-blue hover:text-white"
                  >
                    <Download className="w-4 h-4 mr-2" />
                    Download Ringkasan
                  </Button>
                </CardContent>
              </Card>
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
                  <Scale className="w-7 h-7 text-white" />
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
    </div>
  );
}
