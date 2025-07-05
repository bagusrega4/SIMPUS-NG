import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Home, Search } from "lucide-react";
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

      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-emerald-50 via-white to-teal-50 pt-16">
        <div className="text-center max-w-md mx-auto px-4">
          <div className="w-24 h-24 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-8">
            <Search className="w-12 h-12 text-emerald-600" />
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
              <Button className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-lg flex items-center gap-2 mx-auto">
                <Home className="w-4 h-4" />
                Kembali ke Beranda
              </Button>
            </a>

            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a href="/collection/books">
                <Button
                  variant="outline"
                  className="border-emerald-600 text-emerald-600 hover:bg-emerald-50"
                >
                  Katalog Buku
                </Button>
              </a>
              <a href="/info/contact">
                <Button
                  variant="outline"
                  className="border-emerald-600 text-emerald-600 hover:bg-emerald-50"
                >
                  Hubungi Kami
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Help Popup */}
      <HelpPopup pageHelp={helpItems} />
    </div>
  );
};

export default NotFound;
