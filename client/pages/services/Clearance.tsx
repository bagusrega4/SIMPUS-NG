import { useState } from "react";
import {
  FileCheck,
  Download,
  Upload,
  CheckCircle,
  Clock,
  AlertCircle,
  User,
  Calendar,
  FileText,
  Printer,
  ArrowRight,
  ChevronDown,
  ChevronUp,
  BookOpen,
  Phone,
  MapPin,
  Instagram,
  Twitter,
  Youtube,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Navigation from "@/components/Navigation";
import HelpPopup from "@/components/HelpPopup";

export default function Clearance() {
  const helpItems = [
    {
      question: "Siapa yang memerlukan surat bebas perpustakaan?",
      answer:
        "Mahasiswa tingkat akhir, alumni yang akan wisuda, dan mahasiswa pindah/DO yang perlu menyelesaikan administrasi.",
    },
    {
      question: "Berapa lama proses pengurusan surat bebas perpustakaan?",
      answer:
        "Jika persyaratan lengkap dan tidak ada tunggakan: 1-2 hari kerja. Jika ada tunggakan: setelah tunggakan diselesaikan.",
    },
    {
      question: "Apa saja persyaratan yang harus dipenuhi?",
      answer:
        "Tidak ada tunggakan buku, denda lunas, submit tugas akhir ke repository (jika ada), dan isi form aplikasi lengkap.",
    },
  ];
  const [activeStep, setActiveStep] = useState(0);
  const [formData, setFormData] = useState({
    nama: "",
    nim: "",
    email: "",
    program_studi: "",
    tahun_lulus: "",
  });
  const [isAgreementChecked, setIsAgreementChecked] = useState(false);

  const requirements = [
    {
      title: "Tidak Ada Tunggakan Buku",
      description:
        "Semua buku yang dipinjam harus sudah dikembalikan dan tidak ada keterlambatan",
      status: "required",
      icon: FileCheck,
    },
    {
      title: "Tidak Ada Tunggakan Denda",
      description:
        "Semua denda keterlambatan dan sanksi lainnya harus sudah dibayar lunas",
      status: "required",
      icon: AlertCircle,
    },
    {
      title: "Kartu Anggota Aktif",
      description:
        "Kartu anggota perpustakaan masih berlaku dan tidak dalam status pemblokiran",
      status: "required",
      icon: User,
    },
    {
      title: "Formulir Bebas Perpustakaan",
      description:
        "Formulir yang telah diisi lengkap dan ditandatangani oleh pemohon",
      status: "optional",
      icon: FileText,
    },
  ];

  const processSteps = [
    {
      step: 1,
      title: "Pengajuan Online",
      description:
        "Isi formulir pengajuan surat bebas perpustakaan melalui website",
      duration: "5-10 menit",
      details: [
        "Lengkapi data pribadi dan akademik",
        "Upload dokumen pendukung jika diperlukan",
        "Submit formulir pengajuan",
        "Dapatkan nomor referensi pengajuan",
      ],
    },
    {
      step: 2,
      title: "Verifikasi Sistem",
      description:
        "Petugas akan memverifikasi status peminjaman dan tunggakan Anda",
      duration: "1-2 jam kerja",
      details: [
        "Cek status peminjaman buku",
        "Verifikasi pembayaran denda",
        "Validasi data anggota",
        "Konfirmasi kelengkapan syarat",
      ],
    },
    {
      step: 3,
      title: "Persetujuan",
      description:
        "Kepala perpustakaan akan menyetujui atau menolak pengajuan Anda",
      duration: "1-2 hari kerja",
      details: [
        "Review hasil verifikasi",
        "Pengecekan akhir oleh kepala perpustakaan",
        "Keputusan persetujuan atau penolakan",
        "Notifikasi ke pemohon",
      ],
    },
    {
      step: 4,
      title: "Pengambilan Surat",
      description:
        "Ambil surat bebas perpustakaan di meja layanan atau unduh secara digital",
      duration: "Langsung tersedia",
      details: [
        "Bawa kartu identitas untuk pengambilan",
        "Tunjukkan nomor referensi",
        "Verifikasi identitas pemohon",
        "Terima surat bebas perpustakaan",
      ],
    },
  ];

  const documents = [
    {
      name: "Formulir Bebas Perpustakaan",
      type: "PDF",
      size: "245 KB",
      description: "Formulir resmi untuk pengajuan surat bebas perpustakaan",
      required: true,
    },
    {
      name: "Panduan Pengisian",
      type: "PDF",
      size: "512 KB",
      description: "Panduan lengkap cara mengisi formulir bebas perpustakaan",
      required: false,
    },
    {
      name: "Contoh Surat Bebas Perpustakaan",
      type: "PDF",
      size: "189 KB",
      description: "Contoh surat bebas perpustakaan yang telah disetujui",
      required: false,
    },
  ];

  const handleFormChange = (field: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    alert("Formulir berhasil disubmit! Nomor referensi: REF-2024-001");
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Header */}
      <div className="bg-gradient-to-br from-stis-blue-light via-white to-stis-gray-light pt-24 pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              Surat <span className="text-stis-blue">Bebas Perpustakaan</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 leading-relaxed">
              Layanan pengurusan surat bebas perpustakaan untuk mahasiswa
              tingkat akhir, alumni, dan mahasiswa yang akan pindah
            </p>
          </div>
        </div>
      </div>

      {/* Requirements */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Syarat & Ketentuan
              </h2>
              <p className="text-lg text-gray-600">
                Pastikan Anda memenuhi semua persyaratan sebelum mengajukan
                surat bebas perpustakaan
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {requirements.map((req, index) => {
                const IconComponent = req.icon;
                return (
                  <Card
                    key={index}
                    className="border-0 shadow-lg hover:shadow-xl transition-shadow h-full"
                  >
                    <CardContent className="p-6 h-full flex flex-col">
                      <div className="flex items-start gap-4 h-full">
                        <div
                          className={`w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0 ${
                            req.status === "required"
                              ? "bg-red-100"
                              : "bg-blue-100"
                          }`}
                        >
                          <IconComponent
                            className={`w-6 h-6 ${
                              req.status === "required"
                                ? "text-red-500"
                                : "text-blue-500"
                            }`}
                          />
                        </div>
                        <div className="flex-1 flex flex-col">
                          <div className="flex items-center gap-2 mb-2">
                            <h3 className="text-lg font-semibold text-gray-900">
                              {req.title}
                            </h3>
                            <Badge
                              variant={
                                req.status === "required"
                                  ? "destructive"
                                  : "secondary"
                              }
                              className="text-xs"
                            >
                              {req.status === "required" ? "Wajib" : "Opsional"}
                            </Badge>
                          </div>
                          <p className="text-gray-600 leading-relaxed flex-grow">
                            {req.description}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            <Card className="border-0 shadow-lg mt-8 bg-yellow-50">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <AlertCircle className="w-6 h-6 text-yellow-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">
                      Penting untuk Diketahui
                    </h3>
                    <ul className="space-y-1 text-gray-600 text-sm">
                      <li>
                        • Surat bebas perpustakaan hanya dapat diterbitkan jika
                        semua syarat telah terpenuhi
                      </li>
                      <li>
                        • Proses verifikasi membutuhkan waktu 1-3 hari kerja
                      </li>
                      <li>
                        • Surat yang telah diterbitkan tidak dapat dibatalkan
                        atau diubah
                      </li>
                      <li>
                        • Untuk mahasiswa yang akan lulus, pengajuan disarankan
                        H-7 sebelum wisuda
                      </li>
                    </ul>
                  </div>
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
              <TabsList className="grid w-full grid-cols-3 max-w-md mx-auto mb-12">
                <TabsTrigger value="process">Proses</TabsTrigger>
                <TabsTrigger value="form">Formulir</TabsTrigger>
                <TabsTrigger value="documents">Dokumen</TabsTrigger>
              </TabsList>

              {/* Process Tab */}
              <TabsContent value="process">
                <div className="text-center mb-12">
                  <h3 className="text-3xl font-bold text-gray-900 mb-4">
                    Alur Pengajuan
                  </h3>
                  <p className="text-lg text-gray-600">
                    Proses pengajuan surat bebas perpustakaan secara digital
                  </p>
                </div>

                <div className="space-y-8">
                  {processSteps.map((step, index) => (
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
                            <div className="flex items-center justify-between mb-2">
                              <h4 className="text-xl font-semibold text-gray-900">
                                {step.title}
                              </h4>
                              <Badge
                                variant="outline"
                                className="text-xs flex items-center gap-1"
                              >
                                <Clock className="w-3 h-3" />
                                {step.duration}
                              </Badge>
                            </div>
                            <p className="text-gray-600 mb-4">
                              {step.description}
                            </p>

                            {activeStep === index && (
                              <div className="bg-white rounded-lg p-4">
                                <h5 className="font-medium text-gray-900 mb-3">
                                  Detail Proses:
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
                            {activeStep === index ? (
                              <ChevronUp className="w-6 h-6 text-stis-blue" />
                            ) : (
                              <ChevronDown className="w-6 h-6 text-gray-400" />
                            )}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              {/* Form Tab */}
              <TabsContent value="form">
                <div className="text-center mb-12">
                  <h3 className="text-3xl font-bold text-gray-900 mb-4">
                    Formulir Pengajuan
                  </h3>
                  <p className="text-lg text-gray-600">
                    Isi formulir di bawah ini untuk mengajukan surat bebas
                    perpustakaan
                  </p>
                </div>

                <Card className="border-0 shadow-lg max-w-4xl mx-auto">
                  <CardContent className="p-8">
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <Label
                            htmlFor="nama"
                            className="text-sm font-medium required-asterisk"
                          >
                            Nama Lengkap
                          </Label>
                          <Input
                            id="nama"
                            type="text"
                            value={formData.nama}
                            onChange={(e) =>
                              handleFormChange("nama", e.target.value)
                            }
                            placeholder="Masukkan nama lengkap"
                            required
                            className="mt-1"
                          />
                        </div>

                        <div>
                          <Label
                            htmlFor="nim"
                            className="text-sm font-medium required-asterisk"
                          >
                            NIM/NIP
                          </Label>
                          <Input
                            id="nim"
                            type="text"
                            value={formData.nim}
                            onChange={(e) =>
                              handleFormChange("nim", e.target.value)
                            }
                            placeholder="Masukkan NIM atau NIP"
                            required
                            className="mt-1"
                          />
                        </div>

                        <div>
                          <Label
                            htmlFor="email"
                            className="text-sm font-medium required-asterisk"
                          >
                            Email
                          </Label>
                          <Input
                            id="email"
                            type="email"
                            value={formData.email}
                            onChange={(e) =>
                              handleFormChange("email", e.target.value)
                            }
                            placeholder="contoh@stis.ac.id"
                            required
                            className="mt-1"
                          />
                        </div>

                        <div>
                          <Label
                            htmlFor="program_studi"
                            className="text-sm font-medium required-asterisk"
                          >
                            Program Studi
                          </Label>
                          <select
                            id="program_studi"
                            value={formData.program_studi}
                            onChange={(e) =>
                              handleFormChange("program_studi", e.target.value)
                            }
                            required
                            className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-stis-blue focus:border-transparent"
                          >
                            <option value="">Pilih Program Studi</option>
                            <option value="D4 Statistika">D4 Statistika</option>
                            <option value="D4 Komputasi Statistik">
                              D4 Komputasi Statistik
                            </option>
                            <option value="D3 Statistika">D3 Statistika</option>
                          </select>
                        </div>

                        <div>
                          <Label
                            htmlFor="tahun_lulus"
                            className="text-sm font-medium required-asterisk"
                          >
                            Tahun Lulus
                          </Label>
                          <Input
                            id="tahun_lulus"
                            type="number"
                            value={formData.tahun_lulus}
                            onChange={(e) =>
                              handleFormChange("tahun_lulus", e.target.value)
                            }
                            placeholder="2024"
                            min="2020"
                            max="2030"
                            required
                            className="mt-1"
                          />
                        </div>

                        <div>
                          <Label className="text-sm font-medium">
                            Upload Dokumen Pendukung
                          </Label>
                          <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                            <div className="space-y-1 text-center">
                              <Upload className="mx-auto h-12 w-12 text-gray-400" />
                              <div className="flex text-sm text-gray-600">
                                <label
                                  htmlFor="file-upload"
                                  className="relative cursor-pointer bg-white rounded-md font-medium text-stis-blue hover:text-stis-blue-dark focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-stis-blue"
                                >
                                  <span>Upload file</span>
                                  <input
                                    id="file-upload"
                                    name="file-upload"
                                    type="file"
                                    className="sr-only"
                                  />
                                </label>
                                <p className="pl-1">atau drag and drop</p>
                              </div>
                              <p className="text-xs text-gray-500">
                                PDF, DOC, DOCX hingga 10MB
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="bg-gray-50 rounded-lg p-4">
                        <h4 className="font-medium text-gray-900 mb-2">
                          Pernyataan
                        </h4>
                        <div className="flex items-start gap-3">
                          <input
                            type="checkbox"
                            id="agreement"
                            checked={isAgreementChecked}
                            onChange={(e) =>
                              setIsAgreementChecked(e.target.checked)
                            }
                            required
                            className="mt-1"
                          />
                          <label
                            htmlFor="agreement"
                            className="text-sm text-gray-600 leading-relaxed"
                          >
                            Saya menyatakan bahwa data yang saya berikan adalah
                            benar dan saya telah memenuhi semua persyaratan yang
                            ditetapkan oleh perpustakaan STIS. Saya bersedia
                            bertanggung jawab atas segala konsekuensi jika
                            terdapat kesalahan dalam data yang saya berikan.
                          </label>
                        </div>
                      </div>

                      <Button
                        type="submit"
                        disabled={!isAgreementChecked}
                        className="w-full bg-stis-blue hover:bg-stis-blue-dark disabled:bg-gray-400 disabled:cursor-not-allowed"
                      >
                        Submit Pengajuan
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Documents Tab */}
              <TabsContent value="documents">
                <div className="text-center mb-12">
                  <h3 className="text-3xl font-bold text-gray-900 mb-4">
                    Dokumen & Formulir
                  </h3>
                  <p className="text-lg text-gray-600">
                    Download formulir dan dokumen yang diperlukan
                  </p>
                </div>

                <div className="space-y-4 max-w-4xl mx-auto">
                  {documents.map((doc, index) => (
                    <Card
                      key={index}
                      className="border-0 shadow-lg hover:shadow-xl transition-shadow"
                    >
                      <CardContent className="p-4 sm:p-6">
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                          <div className="flex items-center gap-3 sm:gap-4 flex-1 min-w-0">
                            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
                              <FileText className="w-5 h-5 sm:w-6 sm:h-6 text-red-500" />
                            </div>
                            <div className="min-w-0 flex-1">
                              <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2 mb-1">
                                <h4 className="font-semibold text-gray-900 text-sm sm:text-base truncate">
                                  {doc.name}
                                </h4>
                                {doc.required && (
                                  <Badge
                                    variant="destructive"
                                    className="text-xs self-start sm:self-center flex-shrink-0"
                                  >
                                    Wajib
                                  </Badge>
                                )}
                              </div>
                              <p className="text-gray-600 text-xs sm:text-sm mb-1 leading-relaxed">
                                {doc.description}
                              </p>
                              <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3 text-xs text-gray-500">
                                <span>Format: {doc.type}</span>
                                <span>Ukuran: {doc.size}</span>
                              </div>
                            </div>
                          </div>

                          <div className="flex gap-2 w-full sm:w-auto">
                            <Button
                              variant="outline"
                              size="sm"
                              className="border-stis-blue text-stis-blue hover:bg-stis-blue hover:text-white flex-1 sm:flex-none text-xs sm:text-sm"
                            >
                              <Download className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                              <span className="hidden sm:inline">Download</span>
                              <span className="sm:hidden">Unduh</span>
                            </Button>
                            <Button
                              variant="outline"
                              size="sm"
                              className="border-gray-300 hover:bg-stis-blue hover:text-white hover:border-stis-blue px-2 sm:px-3"
                            >
                              <Printer className="w-3 h-3 sm:w-4 sm:h-4" />
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
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
