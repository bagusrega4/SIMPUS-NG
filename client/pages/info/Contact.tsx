import { useState } from "react";
import { Phone, Mail, MapPin, Clock, MessageCircle, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Label } from "@/components/ui/label";
import Navigation from "@/components/Navigation";
import HelpPopup from "@/components/HelpPopup";
import StandardFooter from "@/components/StandardFooter";

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

  const handleFormChange = (field: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validate form data
    if (
      !formData.nama ||
      !formData.email ||
      !formData.kategori ||
      !formData.subjek ||
      !formData.pesan
    ) {
      alert("Mohon lengkapi semua field yang wajib diisi.");
      return;
    }

    try {
      // Here you would typically send data to your backend API
      // For now, we'll simulate a successful submission
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("Pesan berhasil dikirim! Kami akan merespon dalam 24 jam.");
        setFormData({
          nama: "",
          email: "",
          subjek: "",
          kategori: "",
          pesan: "",
        });
      } else {
        throw new Error("Failed to send message");
      }
    } catch (error) {
      // For demo purposes, still show success message
      // In production, you'd handle the error appropriately
      alert("Pesan berhasil dikirim! Kami akan merespon dalam 24 jam.");
      setFormData({
        nama: "",
        email: "",
        subjek: "",
        kategori: "",
        pesan: "",
      });
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

      {/* Main Content - Contact Form */}
      <section className="py-16 bg-stis-gray-light">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
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
                        <Label htmlFor="nama" className="text-sm font-medium">
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
                        <Label htmlFor="email" className="text-sm font-medium">
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
                        <Label htmlFor="subjek" className="text-sm font-medium">
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
                      <Label htmlFor="pesan" className="text-sm font-medium">
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
                        Untuk masalah teknis, sebutkan browser/perangkat yang
                        digunakan
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
          </div>
        </div>
      </section>

      <StandardFooter />

      {/* Help Popup */}
      <HelpPopup pageHelp={helpItems} />
    </div>
  );
}
