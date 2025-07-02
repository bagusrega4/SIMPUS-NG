import { useState, useEffect } from "react";
import {
  Search,
  Menu,
  X,
  BookOpen,
  FileText,
  Monitor,
  RotateCcw,
  FileCheck,
  Armchair,
  ExternalLink,
  Calendar,
  ChevronDown,
  ChevronUp,
  Phone,
  MapPin,
  Clock,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

export default function Index() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const services = [
    {
      icon: BookOpen,
      title: "Peminjaman Buku",
      description:
        "Layanan peminjaman koleksi buku perpustakaan dengan sistem digital",
    },
    {
      icon: FileText,
      title: "Koleksi Cetak",
      description: "Akses koleksi buku, jurnal, dan publikasi cetak",
    },
    {
      icon: Monitor,
      title: "Koleksi Elektronik",
      description: "E-book, e-journal, dan sumber daya digital",
    },
    {
      icon: RotateCcw,
      title: "Layanan Sirkulasi",
      description: "Sistem manajemen peminjaman dan pengembalian",
    },
    {
      icon: FileCheck,
      title: "Surat Bebas Perpustakaan",
      description: "Pengurusan surat keterangan bebas perpustakaan",
    },
    {
      icon: Armchair,
      title: "Meja Baca",
      description: "Fasilitas ruang baca yang nyaman dan kondusif",
    },
  ];

  const announcements = [
    {
      date: "15 Juni 2023",
      title: "Perilisan SIMPus Web",
      description:
        "SIMPus versi web kini telah tersedia dengan fitur-fitur baru yang lebih lengkap dan user-friendly.",
      image: "/placeholder.svg",
    },
    {
      date: "24 Oktober 2023",
      title: "Koleksi Bacaan Terbaru",
      description:
        "Haiiii Sobat Perpus STIS! Koleksi buku dan jurnal terbaru telah tersedia untuk dipinjam.",
      image: "/placeholder.svg",
    },
  ];

  const faqs = [
    {
      question: "Bagaimana cara berkunjung di perpustakaan?",
      answer:
        "Untuk berkunjung ke perpustakaan, Anda perlu membawa kartu identitas mahasiswa atau dosen STIS. Daftar di meja resepsionis dan ikuti protokol kesehatan yang berlaku.",
    },
    {
      question:
        "Apa saja yang boleh dibawa ketika berkunjung ke dalam perpustakaan?",
      answer:
        "Anda diperbolehkan membawa alat tulis, laptop, dan tas kecil. Makanan dan minuman tidak diperbolehkan di dalam ruang baca.",
    },
    {
      question: "Apa sanksi yang dikenakan jika kehilangan kunci loker?",
      answer:
        "Jika kehilangan kunci loker, Anda akan dikenakan denda sesuai dengan ketentuan yang berlaku dan harus mengganti kunci yang hilang.",
    },
    {
      question: "Berapa lama maksimal peminjaman buku?",
      answer:
        "Maksimal peminjaman buku adalah 14 hari untuk mahasiswa dan 21 hari untuk dosen. Peminjaman dapat diperpanjang jika tidak ada antrian.",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-sm">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-stis-blue rounded-lg flex items-center justify-center">
                <BookOpen className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-stis-blue">SIMPus</h1>
                <p className="text-xs text-gray-600">STIS Library</p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <a
                href="#home"
                className="text-gray-700 hover:text-stis-blue transition-colors font-medium"
              >
                Beranda
              </a>
              <a
                href="#about"
                className="text-gray-700 hover:text-stis-blue transition-colors font-medium"
              >
                Tentang Kami
              </a>
              <a
                href="#collection"
                className="text-gray-700 hover:text-stis-blue transition-colors font-medium"
              >
                Koleksi
              </a>
              <a
                href="#help"
                className="text-gray-700 hover:text-stis-blue transition-colors font-medium"
              >
                Bantuan
              </a>
            </nav>

            {/* Login Button & Mobile Menu */}
            <div className="flex items-center space-x-4">
              <Button className="hidden sm:flex bg-stis-blue hover:bg-stis-blue-dark">
                Masuk
              </Button>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="md:hidden p-2 rounded-lg hover:bg-gray-100"
                aria-label="Toggle menu"
              >
                {isMenuOpen ? (
                  <X className="w-5 h-5" />
                ) : (
                  <Menu className="w-5 h-5" />
                )}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t border-gray-200">
              <nav className="flex flex-col space-y-3">
                <a
                  href="#home"
                  className="px-4 py-2 text-gray-700 hover:text-stis-blue transition-colors"
                >
                  Beranda
                </a>
                <a
                  href="#about"
                  className="px-4 py-2 text-gray-700 hover:text-stis-blue transition-colors"
                >
                  Tentang Kami
                </a>
                <a
                  href="#collection"
                  className="px-4 py-2 text-gray-700 hover:text-stis-blue transition-colors"
                >
                  Koleksi
                </a>
                <a
                  href="#help"
                  className="px-4 py-2 text-gray-700 hover:text-stis-blue transition-colors"
                >
                  Bantuan
                </a>
                <div className="px-4 pt-2">
                  <Button className="w-full bg-stis-blue hover:bg-stis-blue-dark">
                    Masuk
                  </Button>
                </div>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section
        id="home"
        className="pt-16 bg-gradient-to-br from-stis-blue-light via-white to-stis-gray-light"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Berbagai Kebutuhan
              <span className="text-stis-blue block">Perpustakaan STIS</span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Dapatkan akses mudah ke layanan perpustakaan digital, koleksi
              buku, jurnal elektronik, dan berbagai fasilitas pembelajaran
              modern
            </p>

            {/* Search Box */}
            <div className="max-w-2xl mx-auto relative">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <Input
                  type="text"
                  placeholder="Telusuri koleksi buku, jurnal, dan sumber daya..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-12 pr-24 py-4 text-lg rounded-xl border-2 border-gray-200 focus:border-stis-blue"
                />
                <Button
                  size="lg"
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-stis-blue hover:bg-stis-blue-dark rounded-lg"
                >
                  Cari
                </Button>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
              <div className="text-center">
                <div className="text-3xl font-bold text-stis-blue">15K+</div>
                <div className="text-gray-600">Koleksi Buku</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-stis-blue">5K+</div>
                <div className="text-gray-600">E-Journal</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-stis-blue">2K+</div>
                <div className="text-gray-600">E-Book</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-stis-blue">24/7</div>
                <div className="text-gray-600">Akses Online</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-stis-gray-light">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Fasilitas & Layanan
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Perpustakaan STIS menyediakan berbagai layanan dan fasilitas
              modern untuk mendukung kegiatan akademik Anda
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <Card
                  key={index}
                  className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-0 shadow-md"
                >
                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 bg-stis-blue/10 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:bg-stis-blue/20 transition-colors">
                      <IconComponent className="w-8 h-8 text-stis-blue" />
                    </div>
                    <h4 className="text-xl font-semibold text-gray-900 mb-3">
                      {service.title}
                    </h4>
                    <p className="text-gray-600 leading-relaxed">
                      {service.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Announcements Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Pengumuman Terbaru
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Informasi terkini tentang layanan, koleksi, dan kegiatan
              perpustakaan
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {announcements.map((announcement, index) => (
              <Card
                key={index}
                className="overflow-hidden hover:shadow-lg transition-shadow duration-300"
              >
                <div className="aspect-video bg-gradient-to-br from-stis-blue-light to-stis-gray-light flex items-center justify-center">
                  <Monitor className="w-16 h-16 text-stis-blue/40" />
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <Calendar className="w-4 h-4 text-gray-400" />
                    <span className="text-sm text-gray-500">
                      {announcement.date}
                    </span>
                  </div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-3">
                    {announcement.title}
                  </h4>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {announcement.description}
                  </p>
                  <Button
                    variant="outline"
                    className="border-stis-blue text-stis-blue hover:bg-stis-blue hover:text-white"
                  >
                    Baca Selengkapnya
                    <ExternalLink className="w-4 h-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-stis-gray-light">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Temukan jawaban untuk pertanyaan yang sering diajukan tentang
              layanan perpustakaan
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <Collapsible
                key={index}
                open={openFAQ === index}
                onOpenChange={() =>
                  setOpenFAQ(openFAQ === index ? null : index)
                }
              >
                <Card className="border-0 shadow-md hover:shadow-lg transition-shadow">
                  <CollapsibleTrigger asChild>
                    <Button
                      variant="ghost"
                      className="w-full p-6 text-left justify-between hover:bg-gray-50"
                    >
                      <span className="font-semibold text-gray-900 text-lg">
                        {faq.question}
                      </span>
                      {openFAQ === index ? (
                        <ChevronUp className="w-5 h-5 text-gray-500" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-gray-500" />
                      )}
                    </Button>
                  </CollapsibleTrigger>
                  <CollapsibleContent>
                    <div className="px-6 pb-6">
                      <p className="text-gray-600 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </CollapsibleContent>
                </Card>
              </Collapsible>
            ))}
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
