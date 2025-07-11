import { useState } from "react";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageCircle,
  Send,
  User,
  Building,
  Globe,
  Facebook,
  Instagram,
  Twitter,
  Youtube,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Label } from "@/components/ui/label";
import Navigation from "@/components/Navigation";
import HelpPopup from "@/components/HelpPopup";

export default function Contact() {
  const helpItems = [
    {
      question: "Kapan waktu terbaik untuk menghubungi perpustakaan?",
      answer:
        "Jam operasional: Senin-Kamis 08:00-16:00, Jumat 08:00-15:30. Untuk respon email biasanya dalam 24 jam di hari kerja.",
    },
    {
      question: "Bagaimana cara menghubungi pustakawan spesialis?",
      answer:
        "Gunakan kontak khusus sesuai departemen atau datang langsung ke meja referensi untuk konsultasi.",
    },
    {
      question: "Apakah bisa berkonsultasi penelitian secara online?",
      answer:
        "Ya, bisa melalui email atau video call. Jadwalkan appointment terlebih dahulu melalui kontak yang tersedia.",
    },
  ];
  const [formData, setFormData] = useState({
    nama: "",
    email: "",
    subjek: "",
    kategori: "",
    pesan: "",
  });

  const contactInfo = [
    {
      icon: Phone,
      title: "Telepon",
      details: [
        { label: "Utama", value: "(021) 8191437" },
        { label: "Sirkulasi", value: "(021) 8191437 ext. 205" },
        { label: "IT Support", value: "(021) 8191437 ext. 210" },
      ],
      description: "Senin - Jumat: 08:00 - 16:00 WIB",
    },
    {
      icon: Mail,
      title: "Email",
      details: [
        { label: "Umum", value: "perpustakaan@stis.ac.id" },
        { label: "Layanan", value: "layanan@stis.ac.id" },
        { label: "IT", value: "it-support@stis.ac.id" },
      ],
      description: "Respon dalam 24 jam",
    },
    {
      icon: MapPin,
      title: "Alamat",
      details: [
        {
          label: "Perpustakaan STIS",
          value: "Lantai 2, Gedung Utama STIS",
        },
        {
          label: "Alamat",
          value: "Jl. Otto Iskandardinata No.64C",
        },
        { label: "Kota", value: "Jakarta Timur 13330" },
      ],
      description: "Akses mudah dengan transportasi umum",
    },
    {
      icon: Clock,
      title: "Jam Operasional",
      details: [
        { label: "Senin - Jumat", value: "08:00 - 16:00 WIB" },
        { label: "Sabtu", value: "08:00 - 12:00 WIB" },
        { label: "Minggu", value: "Tutup" },
      ],
      description: "Layanan online tersedia 24/7",
    },
  ];

  const departments = [
    {
      name: "Kepala Perpustakaan",
      person: "Dr. Maria Sari Dewi, M.Si",
      email: "kepala@stis.ac.id",
      phone: "(021) 8191437 ext. 201",
      responsibilities: [
        "Kebijakan perpustakaan",
        "Kerjasama institusi",
        "Pengembangan strategis",
      ],
    },
    {
      name: "Layanan Pemustaka",
      person: "Siti Nurhaliza, S.Sos",
      email: "layanan@stis.ac.id",
      phone: "(021) 8191437 ext. 205",
      responsibilities: [
        "Sirkulasi buku",
        "Layanan referensi",
        "Bimbingan pengguna",
      ],
    },
    {
      name: "Layanan Teknis",
      person: "Ahmad Wijaya, M.Kom",
      email: "teknis@stis.ac.id",
      phone: "(021) 8191437 ext. 210",
      responsibilities: [
        "Sistem informasi",
        "Katalogisasi",
        "Database digital",
      ],
    },
    {
      name: "Pengembangan Koleksi",
      person: "Dr. Budi Santoso, M.Stat",
      email: "koleksi@stis.ac.id",
      phone: "(021) 8191437 ext. 215",
      responsibilities: ["Akuisisi koleksi", "Evaluasi koleksi", "Preservasi"],
    },
  ];

  const socialMedia = [
    {
      platform: "Facebook",
      icon: Facebook,
      handle: "@PerpustakaanSTIS",
      url: "https://facebook.com/perpustakaanstis",
      color: "text-blue-600",
      followers: "2.5K",
    },
    {
      platform: "Instagram",
      icon: Instagram,
      handle: "@perpustakaan_stis",
      url: "https://instagram.com/perpustakaan_stis",
      color: "text-pink-600",
      followers: "1.8K",
    },
    {
      platform: "Twitter",
      icon: Twitter,
      handle: "@PerpusSTIS",
      url: "https://twitter.com/perpusstis",
      color: "text-blue-400",
      followers: "1.2K",
    },
    {
      platform: "YouTube",
      icon: Youtube,
      handle: "Perpustakaan STIS",
      url: "https://youtube.com/perpustakaanstis",
      color: "text-red-600",
      followers: "856",
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
    alert("Pesan berhasil dikirim! Kami akan merespon dalam 24 jam.");
    setFormData({
      nama: "",
      email: "",
      subjek: "",
      kategori: "",
      pesan: "",
    });
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
              Hubungi <span className="text-stis-blue">Kami</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 leading-relaxed">
              Tim perpustakaan siap membantu Anda dengan segala pertanyaan dan
              kebutuhan informasi. Jangan ragu untuk menghubungi kami!
            </p>
          </div>
        </div>
      </div>

      {/* Quick Contact */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {contactInfo.map((info, index) => {
                const IconComponent = info.icon;
                return (
                  <Card
                    key={index}
                    className="border-0 shadow-lg hover:shadow-xl transition-shadow text-center"
                  >
                    <CardContent className="p-6">
                      <div className="w-16 h-16 bg-stis-blue/10 rounded-xl flex items-center justify-center mx-auto mb-6">
                        <IconComponent className="w-8 h-8 text-stis-blue" />
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-4">
                        {info.title}
                      </h3>
                      <div className="space-y-2 mb-4">
                        {info.details.map((detail, idx) => (
                          <div key={idx} className="text-sm">
                            <span className="text-gray-600">
                              {detail.label}:
                            </span>
                            <br />
                            <span className="font-medium text-gray-900">
                              {detail.value}
                            </span>
                          </div>
                        ))}
                      </div>
                      <p className="text-xs text-gray-500">
                        {info.description}
                      </p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-stis-gray-light">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <Tabs defaultValue="form" className="w-full">
              <TabsList className="grid w-full grid-cols-4 max-w-2xl mx-auto mb-12">
                <TabsTrigger value="form">Form Kontak</TabsTrigger>
                <TabsTrigger value="departments">Departemen</TabsTrigger>
                <TabsTrigger value="location">Lokasi</TabsTrigger>
                <TabsTrigger value="social">Media Sosial</TabsTrigger>
              </TabsList>

              {/* Contact Form Tab */}
              <TabsContent value="form">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                  {/* Contact Form */}
                  <Card className="border-0 shadow-lg">
                    <CardContent className="p-8">
                      <h3 className="text-2xl font-bold text-gray-900 mb-6">
                        Kirim Pesan
                      </h3>
                      <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div>
                            <Label
                              htmlFor="nama"
                              className="text-sm font-medium"
                            >
                              Nama Lengkap *
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
                              htmlFor="email"
                              className="text-sm font-medium"
                            >
                              Email *
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
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div>
                            <Label
                              htmlFor="kategori"
                              className="text-sm font-medium"
                            >
                              Kategori *
                            </Label>
                            <select
                              id="kategori"
                              value={formData.kategori}
                              onChange={(e) =>
                                handleFormChange("kategori", e.target.value)
                              }
                              required
                              className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-stis-blue focus:border-transparent"
                            >
                              <option value="">Pilih kategori</option>
                              <option value="layanan">Layanan</option>
                              <option value="koleksi">Koleksi</option>
                              <option value="teknis">Masalah Teknis</option>
                              <option value="saran">Saran/Kritik</option>
                              <option value="lainnya">Lainnya</option>
                            </select>
                          </div>
                          <div>
                            <Label
                              htmlFor="subjek"
                              className="text-sm font-medium"
                            >
                              Subjek *
                            </Label>
                            <Input
                              id="subjek"
                              type="text"
                              value={formData.subjek}
                              onChange={(e) =>
                                handleFormChange("subjek", e.target.value)
                              }
                              placeholder="Ringkasan topik"
                              required
                              className="mt-1"
                            />
                          </div>
                        </div>

                        <div>
                          <Label
                            htmlFor="pesan"
                            className="text-sm font-medium"
                          >
                            Pesan *
                          </Label>
                          <textarea
                            id="pesan"
                            rows={6}
                            value={formData.pesan}
                            onChange={(e) =>
                              handleFormChange("pesan", e.target.value)
                            }
                            placeholder="Tulis pesan Anda dengan detail..."
                            required
                            className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-stis-blue focus:border-transparent"
                          ></textarea>
                        </div>

                        <Button
                          type="submit"
                          size="lg"
                          className="w-full bg-stis-blue hover:bg-stis-blue-dark"
                        >
                          <Send className="w-4 h-4 mr-2" />
                          Kirim Pesan
                        </Button>
                      </form>
                    </CardContent>
                  </Card>

                  {/* Contact Options */}
                  <div className="space-y-6">
                    <Card className="border-0 shadow-lg">
                      <CardContent className="p-6">
                        <h4 className="text-lg font-semibold text-gray-900 mb-4">
                          Metode Kontak Lainnya
                        </h4>
                        <div className="space-y-4">
                          <div className="flex items-start gap-3">
                            <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                              <MessageCircle className="w-4 h-4 text-green-600" />
                            </div>
                            <div>
                              <h5 className="font-medium text-gray-900">
                                WhatsApp
                              </h5>
                              <p className="text-sm text-gray-600">
                                +62 812-3456-7890
                              </p>
                              <p className="text-xs text-gray-500">
                                Chat langsung dengan petugas
                              </p>
                            </div>
                          </div>
                          <div className="flex items-start gap-3">
                            <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                              <Phone className="w-4 h-4 text-blue-600" />
                            </div>
                            <div>
                              <h5 className="font-medium text-gray-900">
                                Telepon Langsung
                              </h5>
                              <p className="text-sm text-gray-600">
                                (021) 8191437 ext. 205
                              </p>
                              <p className="text-xs text-gray-500">
                                Senin-Jumat, 08:00-16:00 WIB
                              </p>
                            </div>
                          </div>
                          <div className="flex items-start gap-3">
                            <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                              <MapPin className="w-4 h-4 text-purple-600" />
                            </div>
                            <div>
                              <h5 className="font-medium text-gray-900">
                                Kunjungi Langsung
                              </h5>
                              <p className="text-sm text-gray-600">
                                Lantai 2, Gedung Utama STIS
                              </p>
                              <p className="text-xs text-gray-500">
                                Meja resepsionis perpustakaan
                              </p>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="border-0 shadow-lg bg-stis-blue-light">
                      <CardContent className="p-6">
                        <h4 className="text-lg font-semibold text-gray-900 mb-4">
                          Tips Menghubungi Kami
                        </h4>
                        <ul className="space-y-2 text-sm text-gray-700">
                          <li className="flex items-start">
                            <div className="w-1.5 h-1.5 bg-stis-blue rounded-full mt-2 mr-3 flex-shrink-0"></div>
                            Sertakan detail yang jelas dalam pesan Anda
                          </li>
                          <li className="flex items-start">
                            <div className="w-1.5 h-1.5 bg-stis-blue rounded-full mt-2 mr-3 flex-shrink-0"></div>
                            Untuk masalah teknis, sebutkan browser/perangkat
                            yang digunakan
                          </li>
                          <li className="flex items-start">
                            <div className="w-1.5 h-1.5 bg-stis-blue rounded-full mt-2 mr-3 flex-shrink-0"></div>
                            Cantumkan NIM/NIP jika terkait akun perpustakaan
                          </li>
                          <li className="flex items-start">
                            <div className="w-1.5 h-1.5 bg-stis-blue rounded-full mt-2 mr-3 flex-shrink-0"></div>
                            Respon email biasanya dalam 24 jam kerja
                          </li>
                        </ul>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </TabsContent>

              {/* Departments Tab */}
              <TabsContent value="departments">
                <div className="text-center mb-12">
                  <h3 className="text-3xl font-bold text-gray-900 mb-4">
                    Kontak Departemen
                  </h3>
                  <p className="text-lg text-gray-600">
                    Hubungi departemen yang sesuai dengan kebutuhan Anda
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {departments.map((dept, index) => (
                    <Card
                      key={index}
                      className="border-0 shadow-lg hover:shadow-xl transition-shadow"
                    >
                      <CardContent className="p-8">
                        <div className="flex items-start gap-4 mb-6">
                          <div className="w-12 h-12 bg-stis-blue/10 rounded-lg flex items-center justify-center flex-shrink-0">
                            <Building className="w-6 h-6 text-stis-blue" />
                          </div>
                          <div className="flex-1">
                            <h4 className="text-xl font-semibold text-gray-900 mb-2">
                              {dept.name}
                            </h4>
                            <div className="flex items-center gap-2 mb-3">
                              <User className="w-4 h-4 text-gray-400" />
                              <span className="font-medium text-gray-700">
                                {dept.person}
                              </span>
                            </div>
                          </div>
                        </div>

                        <div className="space-y-3 mb-6">
                          <div className="flex items-center gap-2">
                            <Mail className="w-4 h-4 text-gray-400" />
                            <span className="text-sm text-gray-600">
                              {dept.email}
                            </span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Phone className="w-4 h-4 text-gray-400" />
                            <span className="text-sm text-gray-600">
                              {dept.phone}
                            </span>
                          </div>
                        </div>

                        <div>
                          <h5 className="font-medium text-gray-900 mb-3">
                            Tanggung Jawab:
                          </h5>
                          <ul className="space-y-1">
                            {dept.responsibilities.map((resp, idx) => (
                              <li
                                key={idx}
                                className="text-sm text-gray-600 flex items-center"
                              >
                                <div className="w-1.5 h-1.5 bg-stis-blue rounded-full mr-2"></div>
                                {resp}
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className="flex gap-2 mt-6">
                          <Button
                            size="sm"
                            className="flex-1 bg-stis-blue hover:bg-stis-blue-dark"
                          >
                            <Mail className="w-4 h-4 mr-2" />
                            Email
                          </Button>
                          <Button
                            size="sm"
                            variant="outline"
                            className="flex-1 border-stis-blue text-stis-blue hover:bg-stis-blue hover:text-white"
                          >
                            <Phone className="w-4 h-4 mr-2" />
                            Telepon
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              {/* Location Tab */}
              <TabsContent value="location">
                <div className="text-center mb-12">
                  <h3 className="text-3xl font-bold text-gray-900 mb-4">
                    Lokasi & Petunjuk Arah
                  </h3>
                  <p className="text-lg text-gray-600">
                    Temukan kami di kampus STIS Jakarta Timur
                  </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                  {/* Map */}
                  <Card className="border-0 shadow-lg">
                    <CardContent className="p-0">
                      <div className="aspect-video bg-gradient-to-br from-stis-blue-light to-stis-gray-light rounded-t-lg flex items-center justify-center">
                        <div className="text-center">
                          <MapPin className="w-16 h-16 text-stis-blue/40 mx-auto mb-4" />
                          <p className="text-gray-600">
                            Peta interaktif akan tersedia segera
                          </p>
                          <Button
                            className="mt-4 bg-stis-blue hover:bg-stis-blue-dark"
                            size="sm"
                          >
                            <Globe className="w-4 h-4 mr-2" />
                            Buka di Google Maps
                          </Button>
                        </div>
                      </div>
                      <div className="p-6">
                        <h4 className="font-semibold text-gray-900 mb-2">
                          Alamat Lengkap
                        </h4>
                        <p className="text-gray-600 mb-4">
                          Perpustakaan STIS
                          <br />
                          Lantai 2, Gedung Utama
                          <br />
                          Jl. Otto Iskandardinata No.64C
                          <br />
                          Bidara Cina, Jatinegara
                          <br />
                          Jakarta Timur 13330
                        </p>
                        <p className="text-sm text-gray-500">
                          Koordinat: -6.2088, 106.8456
                        </p>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Directions */}
                  <div className="space-y-6">
                    <Card className="border-0 shadow-lg">
                      <CardContent className="p-6">
                        <h4 className="text-lg font-semibold text-gray-900 mb-4">
                          Transportasi Umum
                        </h4>
                        <div className="space-y-4">
                          <div>
                            <h5 className="font-medium text-gray-900 mb-2">
                              🚇 KRL Commuter Line
                            </h5>
                            <p className="text-sm text-gray-600">
                              Stasiun Jatinegara (10 menit jalan kaki)
                              <br />
                              Stasiun Klender (15 menit jalan kaki)
                            </p>
                          </div>
                          <div>
                            <h5 className="font-medium text-gray-900 mb-2">
                              🚌 TransJakarta
                            </h5>
                            <p className="text-sm text-gray-600">
                              Halte Jatinegara (Koridor 9)
                              <br />
                              Dilanjutkan ojek online/jalan kaki
                            </p>
                          </div>
                          <div>
                            <h5 className="font-medium text-gray-900 mb-2">
                              🚗 Kendaraan Pribadi
                            </h5>
                            <p className="text-sm text-gray-600">
                              Dari Cawang: 15 menit via Jl. DI Panjaitan
                              <br />
                              Dari Rawamangun: 20 menit via Jl. Pemuda
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="border-0 shadow-lg">
                      <CardContent className="p-6">
                        <h4 className="text-lg font-semibold text-gray-900 mb-4">
                          Fasilitas Parkir
                        </h4>
                        <div className="space-y-3">
                          <div className="flex justify-between items-center">
                            <span className="text-gray-600">Motor</span>
                            <span className="font-medium">Gratis</span>
                          </div>
                          <div className="flex justify-between items-center">
                            <span className="text-gray-600">Mobil</span>
                            <span className="font-medium">Rp 3.000/jam</span>
                          </div>
                          <div className="flex justify-between items-center">
                            <span className="text-gray-600">Kapasitas</span>
                            <span className="font-medium">200 kendaraan</span>
                          </div>
                        </div>
                        <div className="mt-4 p-3 bg-yellow-50 rounded-lg">
                          <p className="text-sm text-yellow-700">
                            💡 Tip: Parkir gratis untuk kunjungan perpustakaan
                            di atas 2 jam
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </TabsContent>

              {/* Social Media Tab */}
              <TabsContent value="social">
                <div className="text-center mb-12">
                  <h3 className="text-3xl font-bold text-gray-900 mb-4">
                    Media Sosial
                  </h3>
                  <p className="text-lg text-gray-600">
                    Ikuti media sosial kami untuk update terbaru dan informasi
                    menarik
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {socialMedia.map((social, index) => {
                    const IconComponent = social.icon;
                    return (
                      <Card
                        key={index}
                        className="border-0 shadow-lg hover:shadow-xl transition-shadow"
                      >
                        <CardContent className="p-8 text-center">
                          <div
                            className={`w-16 h-16 bg-gray-100 rounded-xl flex items-center justify-center mx-auto mb-6`}
                          >
                            <IconComponent
                              className={`w-8 h-8 ${social.color}`}
                            />
                          </div>
                          <h4 className="text-xl font-semibold text-gray-900 mb-2">
                            {social.platform}
                          </h4>
                          <p className="text-gray-600 mb-2">{social.handle}</p>
                          <div className="flex items-center justify-center gap-4 text-sm text-gray-500 mb-6">
                            <span>{social.followers} followers</span>
                          </div>
                          <Button
                            className="w-full bg-stis-blue hover:bg-stis-blue-dark"
                            size="sm"
                          >
                            Ikuti Kami
                          </Button>
                        </CardContent>
                      </Card>
                    );
                  })}
                </div>

                <Card className="border-0 shadow-lg mt-12">
                  <CardContent className="p-8 text-center">
                    <h4 className="text-xl font-semibold text-gray-900 mb-4">
                      Mengapa Mengikuti Media Sosial Kami?
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div>
                        <h5 className="font-medium text-gray-900 mb-2">
                          📢 Update Terbaru
                        </h5>
                        <p className="text-sm text-gray-600">
                          Dapatkan informasi layanan dan koleksi terbaru
                        </p>
                      </div>
                      <div>
                        <h5 className="font-medium text-gray-900 mb-2">
                          🎓 Tips Akademik
                        </h5>
                        <p className="text-sm text-gray-600">
                          Tips belajar, penelitian, dan literasi digital
                        </p>
                      </div>
                      <div>
                        <h5 className="font-medium text-gray-900 mb-2">
                          🎉 Event & Workshop
                        </h5>
                        <p className="text-sm text-gray-600">
                          Info kegiatan, seminar, dan workshop perpustakaan
                        </p>
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
                  <Phone className="w-7 h-7 text-white" />
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
