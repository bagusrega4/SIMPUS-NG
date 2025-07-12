import {
  Calendar,
  Users,
  BookOpen,
  Clock,
  Award,
  Target,
  Phone,
  MapPin,
  Instagram,
  Twitter,
  Youtube,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Navigation from "@/components/Navigation";
import HelpPopup from "@/components/HelpPopup";

export default function Profile() {
  const helpItems = [
    {
      question: "Apa itu Perpustakaan Polstat STIS?",
      answer:
        "Perpustakaan khusus yang fokus pada statistika, matematika, dan komputasi dengan koleksi berkualitas tinggi.",
    },
    {
      question: "Berapa lama perpustakaan sudah beroperasi?",
      answer:
        "Perpustakaan telah melayani komunitas akademik selama lebih dari 65 tahun sejak 1958.",
    },
    {
      question: "Apa keunggulan perpustakaan ini?",
      answer:
        "Memiliki fokus khusus pada statistika, standar internasional, dan teknologi modern terintegrasi.",
    },
  ];
  const achievements = [
    {
      icon: Users,
      title: "15,000+",
      subtitle: "Anggota Aktif",
      description: "Mahasiswa, dosen, dan peneliti yang terdaftar",
    },
    {
      icon: BookOpen,
      title: "50,000+",
      subtitle: "Koleksi Total",
      description: "Buku cetak, digital, jurnal, dan publikasi",
    },
    {
      icon: Clock,
      title: "24/7",
      subtitle: "Layanan Online",
      description: "Akses portal dan koleksi digital sepanjang waktu",
    },
    {
      icon: Award,
      title: "ISO 21500",
      subtitle: "Sertifikasi",
      description: "Standar manajemen perpustakaan internasional",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Header */}
      <div className="bg-gradient-to-br from-stis-blue-light via-white to-stis-gray-light pt-24 pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              Profil{" "}
              <span className="text-stis-blue">Perpustakaan Polstat STIS</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 leading-relaxed">
              Perpustakaan Politeknik Statistika STIS telah melayani komunitas
              akademik selama lebih dari 65 tahun sebagai pusat informasi dan
              pembelajaran statistika terdepan di Indonesia.
            </p>
          </div>
        </div>
      </div>

      {/* Overview */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Pusat Informasi Statistika Terdepan
                </h2>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Perpustakaan Polstat STIS merupakan perpustakaan khusus yang
                  fokus pada bidang statistika, matematika, dan komputasi. Kami
                  berkomitmen untuk menyediakan sumber daya informasi
                  berkualitas tinggi yang mendukung proses pembelajaran,
                  penelitian, dan pengembangan ilmu pengetahuan.
                </p>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Dengan koleksi yang terus berkembang dan teknologi terkini,
                  perpustakaan kami menjadi tulang punggung dalam menciptakan
                  lulusan yang kompeten dan siap menghaditi tantangan era
                  digital.
                </p>
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-2">
                    <Target className="w-5 h-5 text-stis-blue" />
                    <span className="text-sm font-medium text-gray-700">
                      Fokus Statistika
                    </span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Award className="w-5 h-5 text-stis-cyan" />
                    <span className="text-sm font-medium text-gray-700">
                      Standar Internasional
                    </span>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-6">
                {achievements.map((achievement, index) => {
                  const IconComponent = achievement.icon;
                  return (
                    <Card
                      key={index}
                      className="text-center border-0 shadow-lg"
                    >
                      <CardContent className="p-6">
                        <div className="w-12 h-12 bg-stis-blue/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                          <IconComponent className="w-6 h-6 text-stis-blue" />
                        </div>
                        <div className="text-2xl font-bold text-stis-blue mb-1">
                          {achievement.title}
                        </div>
                        <div className="text-sm font-medium text-gray-900 mb-2">
                          {achievement.subtitle}
                        </div>
                        <div className="text-xs text-gray-600">
                          {achievement.description}
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Current Status */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Kondisi Terkini
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Saat ini, Perpustakaan Polstat STIS telah berkembang menjadi
              perpustakaan modern yang mengintegrasikan teknologi terdepan
              dengan layanan konvensional untuk memberikan pengalaman pengguna
              yang optimal.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="border-0 shadow-lg">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-stis-blue/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <BookOpen className="w-8 h-8 text-stis-blue" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Koleksi Terlengkap
                  </h3>
                  <p className="text-sm text-gray-600">
                    Koleksi statistika dan matematika terlengkap di Indonesia
                    dengan akses digital 24/7
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-stis-cyan/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Users className="w-8 h-8 text-stis-cyan" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Layanan Prima
                  </h3>
                  <p className="text-sm text-gray-600">
                    Didukung oleh pustakawan profesional dan sistem teknologi
                    informasi modern
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-stis-blue/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Award className="w-8 h-8 text-stis-blue" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Standar Internasional
                  </h3>
                  <p className="text-sm text-gray-600">
                    Menerapkan standar pengelolaan perpustakaan internasional
                    dan best practices
                  </p>
                </CardContent>
              </Card>
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

      {/* Help Popup */}
      <HelpPopup pageHelp={helpItems} />
    </div>
  );
}
