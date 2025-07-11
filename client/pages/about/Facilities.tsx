import {
  MapPin,
  Wifi,
  Monitor,
  Printer,
  Coffee,
  Car,
  BookOpen,
  Users,
  Clock,
  Camera,
  Headphones,
  Database,
  Shield,
  Thermometer,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Navigation from "@/components/Navigation";
import HelpPopup from "@/components/HelpPopup";

export default function Facilities() {
  const helpItems = [
    {
      question: "Fasilitas apa saja yang tersedia di perpustakaan?",
      answer:
        "Tersedia ruang baca utama, ruang diskusi, area komputer, WiFi gratis, printer, dan berbagai fasilitas pendukung lainnya.",
    },
    {
      question: "Bagaimana cara reservasi ruang diskusi?",
      answer:
        "Reservasi dapat dilakukan melalui SIMPus atau langsung di meja layanan dengan menunjukkan kartu identitas.",
    },
    {
      question: "Apakah tersedia parkir untuk pengunjung?",
      answer:
        "Ya, tersedia area parkir motor dan mobil yang aman dengan sistem keamanan 24 jam.",
    },
  ];

  const mainFacilities = [
    {
      icon: BookOpen,
      title: "Ruang Baca Utama",
      capacity: "150 tempat duduk",
      description:
        "Ruang baca yang luas dan nyaman dengan pencahayaan optimal dan suasana tenang untuk aktivitas membaca dan belajar.",
      features: [
        "AC Central",
        "Pencahayaan LED",
        "Meja Individual",
        "Kursi Ergonomis",
      ],
      image: "/placeholder.svg",
    },
    {
      icon: Users,
      title: "Ruang Diskusi",
      capacity: "8 ruang (6-12 orang)",
      description:
        "Ruang diskusi dengan fasilitas audio visual untuk kegiatan kelompok, presentasi, dan diskusi akademik.",
      features: ["Proyektor", "Whiteboard", "Sound System", "AC"],
      image: "/placeholder.svg",
    },
    {
      icon: Monitor,
      title: "Area Komputer",
      capacity: "30 unit komputer",
      description:
        "Area komputer dengan akses internet cepat dan software khusus untuk mendukung kegiatan akademik dan penelitian.",
      features: [
        "Internet High Speed",
        "Microsoft Office",
        "Statistical Software",
        "Printing Service",
      ],
      image: "/placeholder.svg",
    },
  ];

  const supportFacilities = [
    {
      icon: Wifi,
      title: "WiFi Gratis",
      description: "Koneksi internet berkecepatan tinggi di seluruh area",
    },
    {
      icon: Printer,
      title: "Layanan Cetak",
      description: "Fasilitas printing dan scanning dengan harga terjangkau",
    },
    {
      icon: Coffee,
      title: "Kantin & Cafeteria",
      description: "Area istirahat dengan berbagai pilihan makanan dan minuman",
    },
    {
      icon: Car,
      title: "Area Parkir",
      description: "Parkir motor dan mobil yang aman dengan sistem keamanan",
    },
    {
      icon: Shield,
      title: "Keamanan 24/7",
      description: "Sistem keamanan terintegrasi dengan CCTV dan petugas",
    },
    {
      icon: Thermometer,
      title: "Kontrol Suhu",
      description: "AC central dengan pengaturan suhu optimal untuk kenyamanan",
    },
  ];

  const technicalInfrastructure = [
    {
      icon: Database,
      title: "Server & Database",
      specs: [
        "Sistem SIMPus",
        "Repository Digital",
        "Backup System",
        "Cloud Storage",
      ],
      description:
        "Infrastruktur IT yang mendukung sistem informasi perpustakaan",
    },
    {
      icon: Camera,
      title: "CCTV Security",
      specs: [
        "24/7 Monitoring",
        "HD Recording",
        "Access Control",
        "Emergency System",
      ],
      description:
        "Sistem keamanan terintegrasi untuk menjaga aset dan keamanan pengguna",
    },
    {
      icon: Headphones,
      title: "Audio Visual",
      specs: [
        "Sound System",
        "Projector 4K",
        "Interactive Display",
        "Video Conference",
      ],
      description:
        "Peralatan presentasi dan multimedia untuk kegiatan akademik",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Header */}
      <div className="bg-gradient-to-br from-stis-blue-light via-white to-stis-gray-light pt-24 pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="secondary" className="mb-4">
              Tentang Kami
            </Badge>
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              Fasilitas <span className="text-stis-blue">Perpustakaan</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 leading-relaxed">
              Fasilitas modern dan lengkap yang mendukung aktivitas
              pembelajaran, penelitian, dan pengembangan ilmu pengetahuan bagi
              seluruh sivitas akademika Polstat STIS
            </p>
          </div>
        </div>
      </div>

      {/* Main Facilities */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Fasilitas Utama
              </h2>
              <p className="text-lg text-gray-600">
                Ruang dan area utama yang tersedia untuk mendukung kegiatan
                akademik
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {mainFacilities.map((facility, index) => {
                const IconComponent = facility.icon;
                return (
                  <Card
                    key={index}
                    className="border-0 shadow-lg hover:shadow-xl transition-shadow"
                  >
                    <CardContent className="p-0">
                      <div className="aspect-video bg-gradient-to-br from-stis-blue-light to-stis-gray-light rounded-t-lg flex items-center justify-center">
                        <IconComponent className="w-16 h-16 text-stis-blue/40" />
                      </div>

                      <div className="p-6">
                        <div className="flex items-center justify-between mb-4">
                          <h3 className="text-xl font-semibold text-gray-900">
                            {facility.title}
                          </h3>
                          <Badge variant="outline" className="text-xs">
                            {facility.capacity}
                          </Badge>
                        </div>

                        <p className="text-gray-600 mb-4 leading-relaxed">
                          {facility.description}
                        </p>

                        <div className="flex flex-wrap gap-2">
                          {facility.features.map((feature, idx) => (
                            <Badge
                              key={idx}
                              variant="secondary"
                              className="text-xs"
                            >
                              {feature}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Support Facilities */}
      <section className="py-16 bg-stis-gray-light">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Fasilitas Pendukung
              </h2>
              <p className="text-lg text-gray-600">
                Layanan dan fasilitas tambahan untuk kenyamanan pengguna
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {supportFacilities.map((facility, index) => {
                const IconComponent = facility.icon;
                return (
                  <Card
                    key={index}
                    className="border-0 shadow-md hover:shadow-lg transition-shadow text-center"
                  >
                    <CardContent className="p-6">
                      <div className="w-12 h-12 bg-stis-blue/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                        <IconComponent className="w-6 h-6 text-stis-blue" />
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        {facility.title}
                      </h3>
                      <p className="text-gray-600 text-sm">
                        {facility.description}
                      </p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Technical Infrastructure */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Infrastruktur Teknis
              </h2>
              <p className="text-lg text-gray-600">
                Sistem dan teknologi yang mendukung operasional perpustakaan
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {technicalInfrastructure.map((tech, index) => {
                const IconComponent = tech.icon;
                return (
                  <Card
                    key={index}
                    className="border-0 shadow-lg hover:shadow-xl transition-shadow"
                  >
                    <CardContent className="p-6">
                      <div className="w-12 h-12 bg-stis-cyan/10 rounded-lg flex items-center justify-center mb-4">
                        <IconComponent className="w-6 h-6 text-stis-cyan" />
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        {tech.title}
                      </h3>
                      <p className="text-gray-600 text-sm mb-4">
                        {tech.description}
                      </p>
                      <div className="space-y-1">
                        {tech.specs.map((spec, idx) => (
                          <div
                            key={idx}
                            className="text-xs text-gray-500 flex items-center"
                          >
                            <div className="w-1.5 h-1.5 bg-stis-cyan rounded-full mr-2"></div>
                            {spec}
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-emerald-600 text-white">
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
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h5 className="text-lg font-semibold mb-4">Pintasan</h5>
              <div className="space-y-3">
                <a
                  href="/collection/books"
                  className="block text-white/80 hover:text-white transition-colors text-sm"
                >
                  Katalog Online
                </a>
                <a
                  href="/info/faq"
                  className="block text-white/80 hover:text-white transition-colors text-sm"
                >
                  Bantuan
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-white/20 mt-12 pt-8 text-center">
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
