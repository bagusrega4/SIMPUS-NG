import {
  BookOpen,
  Phone,
  MapPin,
  Clock,
  Instagram,
  Twitter,
  Youtube,
} from "lucide-react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
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
  );
}
