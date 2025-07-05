import { useState } from "react";
import {
  BookOpen,
  Calendar,
  Clock,
  RotateCcw,
  CheckCircle,
  AlertCircle,
  User,
  CreditCard,
  QrCode,
  Smartphone,
  ArrowRight,
  Info,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Navigation from "@/components/Navigation";
import HelpPopup from "@/components/HelpPopup";

export default function Circulation() {
  const helpItems = [
    {
      question: "Bagaimana proses peminjaman buku?",
      answer:
        "1) Cari buku di katalog, 2) Datang ke perpustakaan dengan KTM/identitas, 3) Scan barcode buku dan kartu, 4) Selesai!",
    },
    {
      question: "Apa yang harus dibawa saat meminjam?",
      answer:
        "Bawa kartu identitas (KTM untuk mahasiswa, ID card untuk dosen) dan pastikan tidak ada tunggakan denda.",
    },
    {
      question: "Bagaimana cara menggunakan aplikasi mobile?",
      answer:
        "Download aplikasi SIMPus Mobile, login dengan akun STIS, dan gunakan untuk scan QR code, cek status peminjaman, dan layanan lainnya.",
    },
  ];
  const [activeStep, setActiveStep] = useState(0);

  const serviceHours = [
    { day: "Senin - Jumat", hours: "08:00 - 16:00", status: "Buka" },
    { day: "Sabtu", hours: "08:00 - 12:00", status: "Buka" },
    { day: "Minggu", hours: "Tutup", status: "Tutup" },
    { day: "Hari Libur Nasional", hours: "Tutup", status: "Tutup" },
  ];

  const borrowingRules = [
    {
      user_type: "Mahasiswa D4",
      max_books: 3,
      duration: "14 hari",
      renewal: "2 kali",
      fine: "Rp 1.000/hari",
    },
    {
      user_type: "Dosen Tetap",
      max_books: 5,
      duration: "21 hari",
      renewal: "3 kali",
      fine: "Rp 1.000/hari",
    },
    {
      user_type: "Karyawan",
      max_books: 3,
      duration: "14 hari",
      renewal: "2 kali",
      fine: "Rp 1.000/hari",
    },
    {
      user_type: "Mahasiswa Magang",
      max_books: 2,
      duration: "7 hari",
      renewal: "1 kali",
      fine: "Rp 1.000/hari",
    },
  ];

  const borrowingSteps = [
    {
      step: 1,
      title: "Registrasi Anggota",
      description:
        "Daftarkan diri sebagai anggota perpustakaan dengan membawa kartu identitas",
      details: [
        "Bawa KTM/KTP yang masih berlaku",
        "Isi formulir pendaftaran",
        "Foto untuk kartu anggota",
        "Verifikasi data oleh petugas",
      ],
    },
    {
      step: 2,
      title: "Pencarian Koleksi",
      description:
        "Gunakan katalog online atau minta bantuan petugas untuk menemukan buku",
      details: [
        "Akses katalog online SIMPUS",
        "Cari berdasarkan judul, penulis, atau subjek",
        "Catat nomor panggil buku",
        "Cek ketersediaan di rak",
      ],
    },
    {
      step: 3,
      title: "Proses Peminjaman",
      description:
        "Bawa buku dan kartu anggota ke meja sirkulasi untuk proses peminjaman",
      details: [
        "Bawa buku dan kartu anggota",
        "Tunjukkan ke petugas sirkulasi",
        "Scan barcode buku dan kartu",
        "Terima slip peminjaman",
      ],
    },
    {
      step: 4,
      title: "Pengembalian",
      description:
        "Kembalikan buku sebelum tanggal jatuh tempo untuk menghindari denda",
      details: [
        "Cek tanggal jatuh tempo",
        "Bawa buku ke meja sirkulasi",
        "Scan barcode untuk pengembalian",
        "Simpan slip pengembalian",
      ],
    },
  ];

  const onlineServices = [
    {
      icon: Smartphone,
      title: "Mobile App SIMPus",
      description: "Akses layanan perpustakaan melalui aplikasi mobile",
      features: [
        "Cek status peminjaman",
        "Perpanjangan online",
        "Reservasi buku",
        "History peminjaman",
      ],
    },
    {
      icon: QrCode,
      title: "QR Code Self-Service",
      description: "Layanan mandiri dengan scan QR code",
      features: [
        "Peminjaman mandiri",
        "Pengembalian cepat",
        "Cek informasi buku",
        "Panduan visual",
      ],
    },
    {
      icon: Calendar,
      title: "Online Renewal",
      description: "Perpanjang masa peminjaman secara online",
      features: [
        "Perpanjang via website",
        "Notifikasi otomatis",
        "Maksimal 2-3 kali",
        "Tidak ada antrian",
      ],
    },
  ];

  const fines = [
    {
      type: "Keterlambatan Pengembalian",
      amount: "Rp 1.000/hari/buku",
      max_amount: "Rp 50.000/buku",
      description:
        "Denda per hari untuk setiap buku yang terlambat dikembalikan",
    },
    {
      type: "Buku Hilang",
      amount: "100% harga buku",
      max_amount: "Sesuai harga",
      description: "Ganti rugi senilai harga buku plus biaya administrasi",
    },
    {
      type: "Buku Rusak",
      amount: "50-100% harga buku",
      max_amount: "Sesuai kerusakan",
      description: "Denda sesuai tingkat kerusakan yang dinilai petugas",
    },
    {
      type: "Kartu Anggota Hilang",
      amount: "Rp 10.000",
      max_amount: "Rp 10.000",
      description: "Biaya pembuatan kartu anggota pengganti",
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
              Layanan
            </Badge>
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              Layanan <span className="text-stis-blue">Sirkulasi</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 leading-relaxed">
              Layanan peminjaman dan pengembalian buku dengan sistem digital
              yang memudahkan akses koleksi perpustakaan STIS
            </p>
          </div>
        </div>
      </div>

      {/* Service Hours */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-stis-blue/10 rounded-lg flex items-center justify-center mr-4">
                    <Clock className="w-6 h-6 text-stis-blue" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">
                    Jam Layanan Sirkulasi
                  </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  {serviceHours.map((schedule, index) => (
                    <div
                      key={index}
                      className="bg-stis-gray-light rounded-lg p-4 text-center"
                    >
                      <h3 className="font-semibold text-gray-900 mb-2">
                        {schedule.day}
                      </h3>
                      <p className="text-gray-600 mb-2">{schedule.hours}</p>
                      <Badge
                        variant={
                          schedule.status === "Buka" ? "default" : "destructive"
                        }
                        className="text-xs"
                      >
                        {schedule.status}
                      </Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-stis-gray-light">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <Tabs defaultValue="process" className="w-full">
              <TabsList className="grid w-full grid-cols-4 max-w-2xl mx-auto mb-12">
                <TabsTrigger value="process">Proses</TabsTrigger>
                <TabsTrigger value="rules">Peraturan</TabsTrigger>
                <TabsTrigger value="online">Online</TabsTrigger>
                <TabsTrigger value="fines">Denda</TabsTrigger>
              </TabsList>

              {/* Process Tab */}
              <TabsContent value="process">
                <div className="text-center mb-12">
                  <h3 className="text-3xl font-bold text-gray-900 mb-4">
                    Cara Meminjam Buku
                  </h3>
                  <p className="text-lg text-gray-600">
                    Panduan lengkap proses peminjaman buku di perpustakaan STIS
                  </p>
                </div>

                <div className="space-y-8">
                  {borrowingSteps.map((step, index) => (
                    <Card
                      key={index}
                      className={`border-0 shadow-lg transition-all cursor-pointer ${
                        activeStep === index
                          ? "ring-2 ring-stis-blue bg-stis-blue-light"
                          : ""
                      }`}
                      onClick={() => setActiveStep(index)}
                    >
                      <CardContent className="p-6">
                        <div className="flex items-start gap-6">
                          <div className="flex-shrink-0">
                            <div
                              className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg ${
                                activeStep >= index
                                  ? "bg-stis-blue text-white"
                                  : "bg-gray-200 text-gray-600"
                              }`}
                            >
                              {step.step}
                            </div>
                          </div>

                          <div className="flex-1">
                            <h4 className="text-xl font-semibold text-gray-900 mb-2">
                              {step.title}
                            </h4>
                            <p className="text-gray-600 mb-4">
                              {step.description}
                            </p>

                            {activeStep === index && (
                              <div className="bg-white rounded-lg p-4">
                                <h5 className="font-medium text-gray-900 mb-3">
                                  Detail Langkah:
                                </h5>
                                <ul className="space-y-2">
                                  {step.details.map((detail, idx) => (
                                    <li
                                      key={idx}
                                      className="flex items-center text-sm text-gray-600"
                                    >
                                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                                      {detail}
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            )}
                          </div>

                          <div className="flex-shrink-0">
                            <ArrowRight
                              className={`w-6 h-6 ${
                                activeStep === index
                                  ? "text-stis-blue"
                                  : "text-gray-400"
                              }`}
                            />
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              {/* Rules Tab */}
              <TabsContent value="rules">
                <div className="text-center mb-12">
                  <h3 className="text-3xl font-bold text-gray-900 mb-4">
                    Peraturan Peminjaman
                  </h3>
                  <p className="text-lg text-gray-600">
                    Ketentuan peminjaman berdasarkan status keanggotaan
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {borrowingRules.map((rule, index) => (
                    <Card
                      key={index}
                      className="border-0 shadow-lg hover:shadow-xl transition-shadow"
                    >
                      <CardContent className="p-6">
                        <div className="flex items-center mb-4">
                          <div className="w-10 h-10 bg-stis-blue/10 rounded-lg flex items-center justify-center mr-3">
                            <User className="w-5 h-5 text-stis-blue" />
                          </div>
                          <h4 className="text-lg font-semibold text-gray-900">
                            {rule.user_type}
                          </h4>
                        </div>

                        <div className="space-y-3">
                          <div className="flex justify-between items-center py-2 border-b border-gray-100">
                            <span className="text-gray-600">
                              Maksimal Buku:
                            </span>
                            <span className="font-medium text-gray-900">
                              {rule.max_books} buku
                            </span>
                          </div>
                          <div className="flex justify-between items-center py-2 border-b border-gray-100">
                            <span className="text-gray-600">Durasi:</span>
                            <span className="font-medium text-gray-900">
                              {rule.duration}
                            </span>
                          </div>
                          <div className="flex justify-between items-center py-2 border-b border-gray-100">
                            <span className="text-gray-600">Perpanjangan:</span>
                            <span className="font-medium text-gray-900">
                              {rule.renewal}
                            </span>
                          </div>
                          <div className="flex justify-between items-center py-2">
                            <span className="text-gray-600">Denda:</span>
                            <span className="font-medium text-red-600">
                              {rule.fine}
                            </span>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                <Card className="border-0 shadow-lg mt-8">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <Info className="w-5 h-5 text-blue-500 mr-2" />
                      <h4 className="font-semibold text-gray-900">
                        Ketentuan Umum
                      </h4>
                    </div>
                    <ul className="space-y-2 text-gray-600">
                      <li className="flex items-start">
                        <div className="w-1.5 h-1.5 bg-stis-blue rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        Peminjaman hanya dapat dilakukan oleh anggota yang
                        terdaftar
                      </li>
                      <li className="flex items-start">
                        <div className="w-1.5 h-1.5 bg-stis-blue rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        Buku referensi, skripsi, dan koleksi langka tidak dapat
                        dipinjam
                      </li>
                      <li className="flex items-start">
                        <div className="w-1.5 h-1.5 bg-stis-blue rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        Perpanjangan tidak dapat dilakukan jika ada anggota lain
                        yang memesan
                      </li>
                      <li className="flex items-start">
                        <div className="w-1.5 h-1.5 bg-stis-blue rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        Anggota yang memiliki tunggakan denda tidak dapat
                        meminjam buku baru
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Online Services Tab */}
              <TabsContent value="online">
                <div className="text-center mb-12">
                  <h3 className="text-3xl font-bold text-gray-900 mb-4">
                    Layanan Online
                  </h3>
                  <p className="text-lg text-gray-600">
                    Akses layanan sirkulasi secara digital kapan saja
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {onlineServices.map((service, index) => {
                    const IconComponent = service.icon;
                    return (
                      <Card
                        key={index}
                        className="border-0 shadow-lg hover:shadow-xl transition-shadow text-center"
                      >
                        <CardContent className="p-8">
                          <div className="w-16 h-16 bg-stis-blue/10 rounded-xl flex items-center justify-center mx-auto mb-6">
                            <IconComponent className="w-8 h-8 text-stis-blue" />
                          </div>
                          <h4 className="text-xl font-semibold text-gray-900 mb-3">
                            {service.title}
                          </h4>
                          <p className="text-gray-600 mb-6">
                            {service.description}
                          </p>

                          <div className="space-y-2 mb-6">
                            {service.features.map((feature, idx) => (
                              <div
                                key={idx}
                                className="flex items-center text-sm text-gray-600"
                              >
                                <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                                {feature}
                              </div>
                            ))}
                          </div>

                          <Button className="w-full bg-stis-blue hover:bg-stis-blue-dark">
                            Akses Layanan
                          </Button>
                        </CardContent>
                      </Card>
                    );
                  })}
                </div>
              </TabsContent>

              {/* Fines Tab */}
              <TabsContent value="fines">
                <div className="text-center mb-12">
                  <h3 className="text-3xl font-bold text-gray-900 mb-4">
                    Denda & Sanksi
                  </h3>
                  <p className="text-lg text-gray-600">
                    Informasi tentang denda dan sanksi yang berlaku
                  </p>
                </div>

                <div className="space-y-6">
                  {fines.map((fine, index) => (
                    <Card
                      key={index}
                      className="border-0 shadow-lg hover:shadow-xl transition-shadow"
                    >
                      <CardContent className="p-6">
                        <div className="flex items-start gap-4">
                          <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
                            <AlertCircle className="w-5 h-5 text-red-500" />
                          </div>
                          <div className="flex-1">
                            <h4 className="text-lg font-semibold text-gray-900 mb-2">
                              {fine.type}
                            </h4>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-3">
                              <div>
                                <span className="text-sm text-gray-600">
                                  Jumlah Denda:
                                </span>
                                <p className="font-medium text-red-600">
                                  {fine.amount}
                                </p>
                              </div>
                              <div>
                                <span className="text-sm text-gray-600">
                                  Maksimal:
                                </span>
                                <p className="font-medium text-gray-900">
                                  {fine.max_amount}
                                </p>
                              </div>
                            </div>
                            <p className="text-gray-600 text-sm">
                              {fine.description}
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                <Card className="border-0 shadow-lg mt-8 bg-green-50">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <CreditCard className="w-5 h-5 text-green-600 mr-2" />
                      <h4 className="font-semibold text-gray-900">
                        Cara Pembayaran Denda
                      </h4>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h5 className="font-medium text-gray-900 mb-2">
                          Pembayaran Langsung:
                        </h5>
                        <ul className="space-y-1 text-sm text-gray-600">
                          <li>• Tunai di meja sirkulasi</li>
                          <li>• Debit card (EDC tersedia)</li>
                          <li>• Transfer bank (BCA, Mandiri)</li>
                        </ul>
                      </div>
                      <div>
                        <h5 className="font-medium text-gray-900 mb-2">
                          Pembayaran Online:
                        </h5>
                        <ul className="space-y-1 text-sm text-gray-600">
                          <li>• Melalui website SIMPus</li>
                          <li>• Mobile banking</li>
                          <li>• E-wallet (OVO, GoPay, DANA)</li>
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
