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

export default function Facilities() {
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
        "Area dengan komputer yang terhubung internet dan software untuk keperluan akademik dan penelusuran informasi.",
      features: [
        "Windows 11",
        "Microsoft Office",
        "Internet Cepat",
        "Printer Access",
      ],
      image: "/placeholder.svg",
    },
    {
      icon: Database,
      title: "Digital Library Corner",
      capacity: "20 tempat duduk",
      description:
        "Area khusus untuk mengakses koleksi digital, e-book, dan database online dengan koneksi internet kecepatan tinggi.",
      features: [
        "Tablet Reading",
        "E-book Access",
        "Database Portal",
        "Technical Support",
      ],
      image: "/placeholder.svg",
    },
  ];

  const supportFacilities = [
    {
      icon: Wifi,
      title: "WiFi Gratis",
      description:
        "Koneksi internet berkecepatan tinggi di seluruh area perpustakaan",
      availability: "24/7",
    },
    {
      icon: Printer,
      title: "Layanan Print & Scan",
      description:
        "Fasilitas fotokopi, print, dan scan dokumen dengan kualitas tinggi",
      availability: "08:00 - 16:00",
    },
    {
      icon: Coffee,
      title: "Kantin Mini",
      description: "Area refreshment dengan menu ringan dan minuman",
      availability: "08:00 - 15:00",
    },
    {
      icon: Car,
      title: "Area Parkir",
      description: "Parkir motor dan mobil yang aman dengan security 24 jam",
      availability: "24/7",
    },
    {
      icon: Shield,
      title: "Loker Pribadi",
      description:
        "Loker untuk menyimpan tas dan barang pribadi selama di perpustakaan",
      availability: "Harian",
    },
    {
      icon: Thermometer,
      title: "AC Central",
      description: "Sistem pendingin ruangan di seluruh area perpustakaan",
      availability: "08:00 - 17:00",
    },
  ];

  const technicalFacilities = [
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

  const operationalHours = [
    { day: "Senin - Jumat", hours: "08:00 - 16:00", status: "Buka" },
    { day: "Sabtu", hours: "08:00 - 12:00", status: "Buka" },
    { day: "Minggu", hours: "Tutup", status: "Tutup" },
    { day: "Layanan Digital", hours: "24/7", status: "Online" },
  ];

  const floorPlan = [
    {
      floor: "Lantai 1",
      areas: [
        "Lobby & Resepsionis",
        "Koleksi Umum",
        "Area Sirkulasi",
        "Ruang Baca Utama",
        "Kantin Mini",
      ],
    },
    {
      floor: "Lantai 2",
      areas: [
        "Koleksi Referensi",
        "Digital Library",
        "Ruang Diskusi",
        "Area Komputer",
        "Ruang Staff",
      ],
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
              seluruh sivitas akademika STIS
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

                        <div>
                          <h4 className="font-medium text-gray-900 mb-3">
                            Fasilitas Tersedia:
                          </h4>
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
      <section className="py-20 bg-stis-gray-light">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Fasilitas Pendukung
              </h2>
              <p className="text-lg text-gray-600">
                Layanan dan fasilitas tambahan untuk kenyamanan pengguna
                perpustakaan
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {supportFacilities.map((facility, index) => {
                const IconComponent = facility.icon;
                return (
                  <Card
                    key={index}
                    className="border-0 shadow-lg hover:shadow-xl transition-shadow"
                  >
                    <CardContent className="p-6 text-center">
                      <div className="w-16 h-16 bg-stis-cyan/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                        <IconComponent className="w-8 h-8 text-stis-cyan" />
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        {facility.title}
                      </h3>
                      <p className="text-sm text-gray-600 mb-3 leading-relaxed">
                        {facility.description}
                      </p>
                      <div className="flex items-center justify-center gap-2">
                        <Clock className="w-4 h-4 text-gray-400" />
                        <span className="text-xs text-gray-500">
                          {facility.availability}
                        </span>
                      </div>
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
                Infrastruktur Teknologi
              </h2>
              <p className="text-lg text-gray-600">
                Sistem teknologi informasi yang mendukung operasional
                perpustakaan modern
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {technicalFacilities.map((facility, index) => {
                const IconComponent = facility.icon;
                return (
                  <Card key={index} className="border-0 shadow-lg">
                    <CardContent className="p-6">
                      <div className="w-12 h-12 bg-stis-blue/10 rounded-lg flex items-center justify-center mb-4">
                        <IconComponent className="w-6 h-6 text-stis-blue" />
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">
                        {facility.title}
                      </h3>
                      <p className="text-gray-600 mb-4 leading-relaxed">
                        {facility.description}
                      </p>
                      <div>
                        <h4 className="font-medium text-gray-900 mb-2">
                          Spesifikasi:
                        </h4>
                        <ul className="space-y-1">
                          {facility.specs.map((spec, idx) => (
                            <li
                              key={idx}
                              className="text-sm text-gray-600 flex items-center"
                            >
                              <div className="w-1.5 h-1.5 bg-stis-blue rounded-full mr-2"></div>
                              {spec}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Floor Plan & Operating Hours */}
      <section className="py-20 bg-stis-gray-light">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Floor Plan */}
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-8">
                  Denah Ruangan
                </h2>
                <div className="space-y-6">
                  {floorPlan.map((floor, index) => (
                    <Card key={index} className="border-0 shadow-lg">
                      <CardContent className="p-6">
                        <div className="flex items-center mb-4">
                          <div className="w-8 h-8 bg-stis-blue rounded-lg flex items-center justify-center mr-3">
                            <MapPin className="w-4 h-4 text-white" />
                          </div>
                          <h3 className="text-xl font-semibold text-gray-900">
                            {floor.floor}
                          </h3>
                        </div>
                        <ul className="space-y-2">
                          {floor.areas.map((area, idx) => (
                            <li
                              key={idx}
                              className="text-gray-600 flex items-center"
                            >
                              <div className="w-2 h-2 bg-stis-cyan rounded-full mr-3"></div>
                              {area}
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Operating Hours */}
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-8">
                  Jam Operasional
                </h2>
                <Card className="border-0 shadow-lg">
                  <CardContent className="p-6">
                    <div className="space-y-4">
                      {operationalHours.map((schedule, index) => (
                        <div
                          key={index}
                          className="flex items-center justify-between py-3 border-b border-gray-100 last:border-b-0"
                        >
                          <div className="flex items-center">
                            <Clock className="w-5 h-5 text-gray-400 mr-3" />
                            <span className="font-medium text-gray-900">
                              {schedule.day}
                            </span>
                          </div>
                          <div className="text-right">
                            <div className="font-medium text-gray-900">
                              {schedule.hours}
                            </div>
                            <Badge
                              variant={
                                schedule.status === "Tutup"
                                  ? "destructive"
                                  : "secondary"
                              }
                              className="text-xs mt-1"
                            >
                              {schedule.status}
                            </Badge>
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="mt-6 p-4 bg-stis-blue-light rounded-lg">
                      <h4 className="font-semibold text-gray-900 mb-2">
                        Catatan Penting:
                      </h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>
                          • Layanan digital tersedia 24/7 melalui portal online
                        </li>
                        <li>• Jadwal dapat berubah pada hari libur nasional</li>
                        <li>• Reservasi ruang diskusi dapat dilakukan H-1</li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
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
                  <div className="w-5 h-5 text-white/60 mt-1 flex-shrink-0">
                    📍
                  </div>
                  <p className="text-white/80 text-sm">
                    Jl. Otto Iskandardinata No.64C, Jakarta Timur 13330
                  </p>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-5 h-5 text-white/60">📞</div>
                  <p className="text-white/80 text-sm">(021) 8191437</p>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-5 h-5 text-white/60">🕒</div>
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
              © 2024 Perpustakaan Polstat STIS. Hak cipta dilindungi undang-undang.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
