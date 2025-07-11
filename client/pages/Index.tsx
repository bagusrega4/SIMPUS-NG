import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Search,
  BookOpen,
  FileText,
  Monitor,
  RotateCcw,
  FileCheck,
  Scale,
  Database,
  ExternalLink,
  Calendar,
  ChevronDown,
  ChevronUp,
  Phone,
  MapPin,
  Clock,
  Instagram,
  Twitter,
  Youtube,
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
import Navigation from "@/components/Navigation";
import HelpPopup from "@/components/HelpPopup";
import SearchResults from "@/components/SearchResults";
import SearchSuggestions from "@/components/SearchSuggestions";

export default function Index() {
  const [searchQuery, setSearchQuery] = useState("");
  const [showSearchResults, setShowSearchResults] = useState(false);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  // Handle search functionality
  const handleSearch = () => {
    if (searchQuery.trim()) {
      setShowSearchResults(true);
      setShowSuggestions(false);
    }
  };

  const handleSearchKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  const handleSuggestionClick = (suggestion: string) => {
    setSearchQuery(suggestion);
    setShowSearchResults(true);
    setShowSuggestions(false);
  };

  const handleSearchFocus = () => {
    setShowSuggestions(true);
  };

  const handleSearchBlur = () => {
    // Delay hiding suggestions to allow clicking
    setTimeout(() => setShowSuggestions(false), 150);
  };

  // Close search results when clicking Escape
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setShowSearchResults(false);
      }
    };
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, []);

  const helpItems = [
    {
      question: "Bagaimana cara mencari informasi di SIMPus?",
      answer:
        "Gunakan kolom pencarian di atas untuk mencari halaman, layanan, koleksi, informasi, dan konten lainnya di seluruh website SIMPus. Hasil pencarian akan menampilkan semua halaman yang relevan.",
    },
    {
      question: "Bagaimana cara mengakses layanan perpustakaan?",
      answer:
        "Klik pada kartu layanan di bawah untuk mengakses setiap fitur. Pastikan Anda sudah login dengan akun Polstat STIS.",
    },
    {
      question: "Di mana saya bisa melihat pengumuman terbaru?",
      answer:
        "Pengumuman terbaru ditampilkan di bagian bawah halaman ini. Untuk pengumuman lengkap, kunjungi halaman Berita & Pengumuman.",
    },
  ];

  const operationalHours = [
    { day: "Senin - Kamis", hours: "08:00 - 16:00" },
    { day: "Jumat", hours: "08:00 - 15:30" },
    { day: "Sabtu - Minggu", hours: "Tutup" },
    { day: "Hari Libur Nasional", hours: "Tutup" },
  ];

  const services = [
    {
      icon: Scale,
      title: "Peraturan",
      description:
        "Tata tertib dan peraturan perpustakaan untuk kenyamanan bersama",
      href: "/info/rules",
    },
    {
      icon: FileText,
      title: "Koleksi Cetak",
      description: "Akses koleksi buku, jurnal, dan publikasi cetak",
      href: "/collection/books",
    },
    {
      icon: Monitor,
      title: "Koleksi Digital",
      description: "E-book, e-journal, dan sumber daya digital",
      href: "/collection/digital",
    },
    {
      icon: RotateCcw,
      title: "Layanan Sirkulasi",
      description: "Sistem manajemen peminjaman dan pengembalian",
      href: "/services/circulation",
    },
    {
      icon: FileCheck,
      title: "Surat Bebas Perpustakaan",
      description: "Pengurusan surat keterangan bebas perpustakaan",
      href: "/services/clearance",
    },
    {
      icon: Database,
      title: "Repository Polstat STIS",
      description: "Karya ilmiah mahasiswa dan dosen Polstat STIS",
      href: "/collection/repository",
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
        "Haiiii Sobat Perpus Polstat STIS! Koleksi buku dan jurnal terbaru telah tersedia untuk dipinjam.",
      image: "/placeholder.svg",
    },
  ];

  const faqs = [
    {
      question: "Bagaimana cara berkunjung di perpustakaan?",
      answer:
        "Untuk berkunjung ke perpustakaan, Anda perlu membawa kartu identitas mahasiswa atau dosen Polstat STIS. Daftar di meja resepsionis dan ikuti protokol kesehatan yang berlaku.",
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
      <Navigation />

      {/* Hero Section */}
      <section
        id="home"
        className="pt-16 bg-gradient-to-br from-stis-blue-light via-white to-stis-gray-light"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Berbagai Kebutuhan
              <span className="text-stis-blue block">
                Perpustakaan Polstat STIS
              </span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto px-4">
              Dapatkan akses mudah ke layanan perpustakaan digital, koleksi
              buku, jurnal elektronik, dan berbagai fasilitas pembelajaran
              modern
            </p>

            {/* Search Box */}
            <div className="max-w-4xl mx-auto px-4">
              <div className="flex flex-col sm:flex-row gap-4 items-stretch">
                {/* Search */}
                <div className="flex-1">
                  <div className="relative">
                    <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <Input
                      type="text"
                      placeholder="Cari koleksi buku, jurnal, e-book, berita, pengumuman, layanan..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      onKeyPress={handleSearchKeyPress}
                      onFocus={handleSearchFocus}
                      onBlur={handleSearchBlur}
                      className="w-full pl-12 py-3 text-base rounded-xl border-2 border-gray-200 focus:border-stis-blue"
                    />

                    {/* Search Suggestions */}
                    <SearchSuggestions
                      query={searchQuery}
                      isVisible={showSuggestions && !showSearchResults}
                      onSuggestionClick={handleSuggestionClick}
                      onClose={() => setShowSuggestions(false)}
                    />
                  </div>
                </div>

                {/* Search Button */}
                <div className="sm:w-auto w-full">
                  <Button
                    variant="outline"
                    onClick={handleSearch}
                    className="w-full sm:w-auto border-emerald-600 text-emerald-600 hover:bg-emerald-600 hover:text-white px-6 py-3"
                  >
                    <Search className="w-4 h-4 mr-2" />
                    Cari
                  </Button>
                </div>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 mt-12 sm:mt-16 px-4">
              <div className="text-center p-4">
                <div className="text-2xl sm:text-3xl font-bold text-stis-blue">
                  15K+
                </div>
                <div className="text-sm sm:text-base text-gray-600 mt-1">
                  Koleksi Buku
                </div>
              </div>
              <div className="text-center p-4">
                <div className="text-2xl sm:text-3xl font-bold text-stis-blue">
                  5K+
                </div>
                <div className="text-sm sm:text-base text-gray-600 mt-1">
                  E-Journal
                </div>
              </div>
              <div className="text-center p-4">
                <div className="text-2xl sm:text-3xl font-bold text-stis-blue">
                  2K+
                </div>
                <div className="text-sm sm:text-base text-gray-600 mt-1">
                  E-Book
                </div>
              </div>
              <div className="text-center p-4">
                <div className="text-2xl sm:text-3xl font-bold text-stis-blue">
                  24/7
                </div>
                <div className="text-sm sm:text-base text-gray-600 mt-1">
                  Akses Online
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-12 sm:py-20 bg-stis-gray-light">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Fasilitas & Layanan
            </h3>
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto px-4">
              Perpustakaan Polstat STIS menyediakan berbagai layanan dan
              fasilitas modern untuk mendukung kegiatan akademik Anda
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <Link key={index} to={service.href} className="h-full">
                  <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-0 shadow-md cursor-pointer h-full">
                    <CardContent className="p-8 text-center h-full flex flex-col">
                      <div className="w-16 h-16 bg-emerald-600/10 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:bg-emerald-600/20 transition-colors">
                        <IconComponent className="w-8 h-8 text-stis-blue" />
                      </div>
                      <h4 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-stis-blue transition-colors">
                        {service.title}
                      </h4>
                      <p className="text-gray-600 leading-relaxed flex-grow">
                        {service.description}
                      </p>
                    </CardContent>
                  </Card>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Operational Hours Section */}
      <section className="py-16 bg-emerald-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                Jam Operasional
              </h3>
              <p className="text-lg text-gray-600">
                Jadwal layanan Perpustakaan Polstat STIS
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {operationalHours.map((schedule, index) => (
                <Card key={index} className="bg-white border-0 shadow-md">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <Clock className="w-5 h-5 text-stis-blue" />
                        <span className="font-semibold text-gray-900">
                          {schedule.day}
                        </span>
                      </div>
                      <span className="text-stis-blue font-medium">
                        {schedule.hours}
                      </span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center mt-8">
              <p className="text-sm text-gray-600">
                * Jam operasional dapat berubah sewaktu-waktu mengikuti
                kebijakan kampus
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Announcements Section */}
      <section className="py-12 sm:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Pengumuman Terbaru
            </h3>
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto px-4">
              Informasi terkini tentang layanan, koleksi, dan kegiatan
              perpustakaan
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 max-w-6xl mx-auto">
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
                    className="border-stis-blue text-stis-blue hover:bg-emerald-600 hover:text-white"
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
      <footer className="bg-emerald-600 text-white">
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

      {/* Search Results Modal */}
      <SearchResults
        query={searchQuery}
        isOpen={showSearchResults}
        onClose={() => setShowSearchResults(false)}
      />

      {/* Help Popup */}
      <HelpPopup pageHelp={helpItems} />
    </div>
  );
}
