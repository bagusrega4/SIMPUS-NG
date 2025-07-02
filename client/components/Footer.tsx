import { BookOpen, Phone, MapPin, Clock } from "lucide-react";

export default function Footer() {
  return (
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
  );
}
