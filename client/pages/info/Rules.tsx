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
  Download,
  FileText,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Navigation from "@/components/Navigation";
import HelpPopup from "@/components/HelpPopup";
import StandardFooter from "@/components/StandardFooter";

export default function Rules() {
  const helpItems = [
    {
      question: "Apa sanksi jika melanggar peraturan perpustakaan?",
      answer:
        "Sanksi bervariasi mulai dari teguran, denda, penangguhan hak peminjaman, hingga pemberian surat peringatan sesuai tingkat pelanggaran.",
    },
    {
      question: "Apakah boleh membawa makanan ke dalam perpustakaan?",
      answer:
        "Tidak diperbolehkan membawa makanan ke area baca. Gunakan area kantin yang telah disediakan untuk makan dan minum.",
    },
    {
      question: "Bagaimana aturan penggunaan ponsel di perpustakaan?",
      answer:
        "Ponsel harus dalam mode silent/vibrate di area baca. Untuk menerima telepon, harap keluar ke area lobby atau luar ruangan.",
    },
  ];
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
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              <span className="text-stis-blue">Peraturan</span> Perpustakaan
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 leading-relaxed">
              Tata tertib dan ketentuan yang berlaku untuk semua pengguna
              perpustakaan demi kenyamanan bersama
            </p>
          </div>
        </div>
      </div>

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
                      <CardContent className="p-4 sm:p-6">
                        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 sm:gap-4">
                          <div className="flex-1 min-w-0">
                            <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-2">
                              <h4 className="font-semibold text-base sm:text-lg leading-tight">
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
                                className="text-xs self-start sm:self-center flex-shrink-0"
                              >
                                {item.severity === "high"
                                  ? "Berat"
                                  : item.severity === "medium"
                                    ? "Sedang"
                                    : "Ringan"}
                              </Badge>
                            </div>
                            <p className="text-gray-700 font-medium text-sm sm:text-base leading-relaxed">
                              Sanksi: {item.consequence}
                            </p>
                          </div>
                          <div className="flex-shrink-0 self-start sm:self-center">
                            {item.severity === "high" && (
                              <AlertTriangle className="w-5 h-5 sm:w-6 sm:h-6 text-red-500" />
                            )}
                            {item.severity === "medium" && (
                              <AlertTriangle className="w-5 h-5 sm:w-6 sm:h-6 text-yellow-500" />
                            )}
                            {item.severity === "low" && (
                              <AlertTriangle className="w-5 h-5 sm:w-6 sm:h-6 text-blue-500" />
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
                  <Button
                    className="w-full bg-stis-blue hover:bg-stis-blue-dark"
                    onClick={() => {
                      // Create a downloadable PDF of rules
                      const link = document.createElement("a");
                      link.href = "/documents/peraturan-perpustakaan.pdf";
                      link.download = "Peraturan Perpustakaan STIS.pdf";
                      link.click();
                    }}
                  >
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
                    className="w-full bg-stis-blue hover:bg-stis-blue-dark"
                    onClick={() => {
                      // Create a downloadable summary PDF
                      const link = document.createElement("a");
                      link.href =
                        "/documents/ringkasan-aturan-perpustakaan.pdf";
                      link.download = "Ringkasan Aturan Perpustakaan STIS.pdf";
                      link.click();
                    }}
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

      <StandardFooter />

      {/* Help Popup */}
      <HelpPopup pageHelp={helpItems} />
    </div>
  );
}
