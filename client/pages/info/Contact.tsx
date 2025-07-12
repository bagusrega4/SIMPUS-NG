import { useState } from "react";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Users,
  MessageCircle,
  Send,
  Instagram,
  Twitter,
  Youtube,
  BookOpen,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "@/hooks/use-toast";
import Navigation from "@/components/Navigation";
import HelpPopup from "@/components/HelpPopup";

export default function Contact() {
  const helpItems = [
    {
      question: "Bagaimana cara menghubungi pustakawan?",
      answer:
        "Anda bisa menghubungi pustakawan melalui telepon, email, form kontak online, atau datang langsung ke meja layanan perpustakaan.",
    },
    {
      question: "Jam berapa perpustakaan buka untuk layanan konsultasi?",
      answer:
        "Layanan konsultasi tersedia setiap hari kerja dari jam 08:00-16:00. Untuk konsultasi khusus disarankan membuat janji terlebih dahulu.",
    },
    {
      question: "Bisakah mengirim pertanyaan melalui email?",
      answer:
        "Ya, Anda bisa mengirim pertanyaan ke perpustakaan@stis.ac.id. Tim kami akan merespons dalam 1x24 jam pada hari kerja.",
    },
  ];

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    category: "",
    message: "",
  });

  const contactInfo = [
    {
      icon: MapPin,
      title: "Alamat",
      content: "Jl. Otto Iskandardinata No.64C, Jakarta Timur 13330",
      description: "Gedung Perpustakaan STIS Lantai 1-3",
    },
    {
      icon: Phone,
      title: "Telepon",
      content: "(021) 8191437",
      description: "Layanan konsultasi dan informasi",
    },
    {
      icon: Mail,
      title: "Email",
      content: "perpustakaan@stis.ac.id",
      description: "Hubungi kami untuk pertanyaan umum",
    },
    {
      icon: Clock,
      title: "Jam Operasional",
      content: "Senin - Jumat: 08:00 - 16:00",
      description: "Sabtu - Minggu: Tutup",
    },
  ];

  const departments = [
    {
      name: "Layanan Sirkulasi",
      phone: "(021) 8191437 ext. 101",
      email: "sirkulasi@stis.ac.id",
      description: "Peminjaman, pengembalian, perpanjangan buku",
    },
    {
      name: "Layanan Referensi",
      phone: "(021) 8191437 ext. 102",
      email: "referensi@stis.ac.id",
      description: "Bantuan penelusuran informasi dan konsultasi",
    },
    {
      name: "Layanan Digital",
      phone: "(021) 8191437 ext. 103",
      email: "digital@stis.ac.id",
      description: "E-book, database online, repository",
    },
    {
      name: "Administrasi",
      phone: "(021) 8191437 ext. 104",
      email: "admin.perpus@stis.ac.id",
      description: "Administrasi umum dan keanggotaan",
    },
  ];

  const categories = [
    "Pertanyaan Umum",
    "Layanan Sirkulasi",
    "Koleksi Digital",
    "Bantuan Teknis",
    "Saran & Masukan",
    "Lainnya",
  ];

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);

    // Show success popup
    toast({
      title: "Pesan Berhasil Dikirim!",
      description:
        "Tim kami akan segera merespons pesan Anda dalam 1x24 jam pada hari kerja.",
      duration: 5000,
    });

    // Reset form
    setFormData({
      name: "",
      email: "",
      subject: "",
      category: "",
      message: "",
    });
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Header */}
      <div className="bg-gradient-to-br from-stis-blue-light via-white to-stis-gray-light pt-24 pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
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

      {/* Contact Information */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Informasi Kontak
              </h2>
              <p className="text-lg text-gray-600">
                Berbagai cara untuk menghubungi Perpustakaan STIS
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {contactInfo.map((info, index) => {
                const IconComponent = info.icon;
                return (
                  <Card
                    key={index}
                    className="border-0 shadow-lg hover:shadow-xl transition-shadow text-center h-full"
                  >
                    <CardContent className="p-6 h-full flex flex-col">
                      <div className="w-12 h-12 bg-stis-blue/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                        <IconComponent className="w-6 h-6 text-stis-blue" />
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        {info.title}
                      </h3>
                      <p className="text-stis-blue font-medium mb-2">
                        {info.content}
                      </p>
                      <p className="text-gray-600 text-sm flex-grow">
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

      {/* Contact Form & Departments */}
      <section className="py-16 bg-stis-gray-light">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <Card className="border-0 shadow-lg">
                <CardContent className="p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <MessageCircle className="w-6 h-6 text-stis-blue" />
                    <h3 className="text-2xl font-bold text-gray-900">
                      Kirim Pesan
                    </h3>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Nama Lengkap *
                      </label>
                      <Input
                        type="text"
                        value={formData.name}
                        onChange={(e) =>
                          handleInputChange("name", e.target.value)
                        }
                        placeholder="Masukkan nama lengkap Anda"
                        required
                        className="border-2 border-gray-200 focus:border-stis-blue"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email *
                      </label>
                      <Input
                        type="email"
                        value={formData.email}
                        onChange={(e) =>
                          handleInputChange("email", e.target.value)
                        }
                        placeholder="nama@email.com"
                        required
                        className="border-2 border-gray-200 focus:border-stis-blue"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Kategori *
                      </label>
                      <Select
                        value={formData.category}
                        onValueChange={(value) =>
                          handleInputChange("category", value)
                        }
                      >
                        <SelectTrigger className="border-2 border-gray-200 focus:border-stis-blue">
                          <SelectValue placeholder="Pilih kategori pertanyaan" />
                        </SelectTrigger>
                        <SelectContent>
                          {categories.map((category, index) => (
                            <SelectItem key={index} value={category}>
                              {category}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Subjek *
                      </label>
                      <Input
                        type="text"
                        value={formData.subject}
                        onChange={(e) =>
                          handleInputChange("subject", e.target.value)
                        }
                        placeholder="Subjek pesan Anda"
                        required
                        className="border-2 border-gray-200 focus:border-stis-blue"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Pesan *
                      </label>
                      <Textarea
                        value={formData.message}
                        onChange={(e) =>
                          handleInputChange("message", e.target.value)
                        }
                        placeholder="Tulis pesan atau pertanyaan Anda di sini..."
                        rows={5}
                        required
                        className="border-2 border-gray-200 focus:border-stis-blue"
                      />
                    </div>

                    <Button
                      type="submit"
                      className="w-full bg-stis-blue hover:bg-stis-blue-dark"
                    >
                      <Send className="w-4 h-4 mr-2" />
                      Kirim Pesan
                    </Button>
                  </form>
                </CardContent>
              </Card>

              {/* Departments */}
              <div className="space-y-6">
                <div className="flex items-center gap-3 mb-6">
                  <Users className="w-6 h-6 text-stis-blue" />
                  <h3 className="text-2xl font-bold text-gray-900">
                    Departemen Layanan
                  </h3>
                </div>

                <div className="space-y-4">
                  {departments.map((dept, index) => (
                    <Card key={index} className="border-0 shadow-md">
                      <CardContent className="p-6">
                        <h4 className="text-lg font-semibold text-gray-900 mb-2">
                          {dept.name}
                        </h4>
                        <p className="text-gray-600 text-sm mb-3">
                          {dept.description}
                        </p>
                        <div className="space-y-1 text-sm">
                          <div className="flex items-center gap-2">
                            <Phone className="w-4 h-4 text-stis-blue" />
                            <span className="text-stis-blue">{dept.phone}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Mail className="w-4 h-4 text-stis-blue" />
                            <span className="text-stis-blue">{dept.email}</span>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
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

      <HelpPopup pageHelp={helpItems} />
    </div>
  );
}
