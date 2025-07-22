import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import {
  Home,
  Search,
  BookOpen,
  Phone,
  MapPin,
  Clock,
  Instagram,
  Twitter,
  Youtube,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import HelpPopup from "@/components/HelpPopup";

const NotFound = () => {
  const location = useLocation();

  const helpItems = [
    {
      question: "Mengapa halaman tidak ditemukan?",
      answer:
        "Halaman mungkin telah dipindah, dihapus, atau URL yang diketik salah. Coba periksa kembali URL atau gunakan navigasi menu.",
    },
    {
      question: "Bagaimana cara kembali ke halaman utama?",
      answer:
        "Klik tombol 'Kembali ke Beranda' atau gunakan menu navigasi di atas untuk mengakses halaman yang diinginkan.",
    },
    {
      question: "Apa yang harus dilakukan jika sering menemui error 404?",
      answer:
        "Laporkan kepada admin melalui halaman kontak jika Anda sering menemui halaman yang tidak ditemukan.",
    },
  ];

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname,
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-stis-blue-light via-white to-stis-gray-light pt-16">
        <div className="text-center max-w-md mx-auto px-4">
          <div className="w-24 h-24 bg-stis-blue/10 rounded-full flex items-center justify-center mx-auto mb-8">
            <Search className="w-12 h-12 text-stis-blue" />
          </div>

          <h1 className="text-6xl font-bold text-gray-900 mb-4">404</h1>
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">
            Halaman Tidak Ditemukan
          </h2>
          <p className="text-gray-600 mb-8 leading-relaxed">
            Maaf, halaman yang Anda cari tidak dapat ditemukan. Mungkin halaman
            telah dipindah atau URL yang dimasukkan salah.
          </p>

          <div className="space-y-4">
            <a href="/">
              <Button className="bg-stis-blue hover:bg-stis-blue-dark text-white px-6 py-3 rounded-lg flex items-center gap-2 mx-auto">
                <Home className="w-4 h-4" />
                Kembali ke Beranda
              </Button>
            </a>

            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a href="/collection/books">
                <Button
                  variant="outline"
                  className="border-stis-blue text-stis-blue hover:bg-stis-blue hover:text-white"
                >
                  Katalog Buku
                </Button>
              </a>
              <a href="/info/contact">
                <Button
                  variant="outline"
                  className="border-stis-blue text-stis-blue hover:bg-stis-blue hover:text-white"
                >
                  Hubungi Kami
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>

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
};

export default NotFound;
