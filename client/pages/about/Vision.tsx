import {
  Target,
  Eye,
  Heart,
  Users,
  BookOpen,
  Lightbulb,
  Globe,
  Award,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Navigation from "@/components/Navigation";

export default function Vision() {
  const visionPoints = [
    {
      icon: Globe,
      title: "Kelas Dunia",
      description:
        "Menjadi perpustakaan yang diakui secara internasional dengan standar pelayanan kelas dunia",
    },
    {
      icon: Lightbulb,
      title: "Inovasi",
      description:
        "Mengembangkan layanan inovatif yang mengintegrasikan teknologi terdepan",
    },
    {
      icon: Users,
      title: "Komunitas",
      description:
        "Membangun komunitas pembelajaran yang aktif dan kolaboratif",
    },
    {
      icon: Award,
      title: "Keunggulan",
      description:
        "Memberikan kontribusi nyata dalam pencapaian keunggulan akademik STIS",
    },
  ];

  const missions = [
    {
      icon: BookOpen,
      title: "Penyediaan Sumber Daya Berkualitas",
      description:
        "Menyediakan koleksi sumber daya informasi yang relevan, terkini, dan berkualitas tinggi untuk mendukung proses pembelajaran, penelitian, dan pengabdian masyarakat di bidang statistika dan ilmu terkait.",
      details: [
        "Pengembangan koleksi cetak dan digital",
        "Akses ke database internasional",
        "Kerjasama dengan perpustakaan global",
        "Kurasi konten berkualitas tinggi",
      ],
    },
    {
      icon: Lightbulb,
      title: "Pengembangan Layanan Inovatif",
      description:
        "Mengembangkan dan menyelenggarakan layanan perpustakaan yang inovatif dengan memanfaatkan teknologi informasi terbaru untuk meningkatkan aksesibilitas dan kualitas layanan.",
      details: [
        "Sistem manajemen perpustakaan modern",
        "Layanan digital 24/7",
        "Platform pembelajaran online",
        "Aplikasi mobile perpustakaan",
      ],
    },
    {
      icon: Users,
      title: "Pemberdayaan Komunitas Akademik",
      description:
        "Memberdayakan sivitas akademika STIS dalam pemanfaatan sumber daya informasi melalui program literasi informasi dan pendampingan penelitian.",
      details: [
        "Program literasi informasi",
        "Workshop penelitian",
        "Bimbingan penulisan ilmiah",
        "Pelatihan penggunaan database",
      ],
    },
    {
      icon: Target,
      title: "Peningkatan Kapasitas SDM",
      description:
        "Meningkatkan kapasitas dan profesionalisme sumber daya manusia perpustakaan melalui pengembangan berkelanjutan dan penerapan standar internasional.",
      details: [
        "Pelatihan pustakawan berkelanjutan",
        "Sertifikasi profesional",
        "Pengembangan soft skills",
        "Knowledge management",
      ],
    },
    {
      icon: Heart,
      title: "Layanan Prima Berorientasi Pengguna",
      description:
        "Memberikan layanan prima yang berorientasi pada kepuasan dan kebutuhan pengguna dengan prinsip aksesibilitas, responsivitas, dan kualitas.",
      details: [
        "Survei kepuasan pengguna",
        "Sistem feedback berkelanjutan",
        "Layanan konsultasi personal",
        "Akses inklusif untuk semua",
      ],
    },
    {
      icon: Globe,
      title: "Kerjasama dan Jejaring",
      description:
        "Membangun kerjasama strategis dengan berbagai institusi dalam dan luar negeri untuk memperkaya sumber daya dan meningkatkan kualitas layanan perpustakaan.",
      details: [
        "Konsorsium perpustakaan nasional",
        "Partnership internasional",
        "Resource sharing",
        "Program pertukaran pustakawan",
      ],
    },
  ];

  const values = [
    {
      title: "Profesional",
      description:
        "Menjalankan tugas dengan standar profesional tinggi dan etika kerja yang baik",
      color: "bg-stis-blue",
    },
    {
      title: "Inovatif",
      description:
        "Selalu mencari cara baru dan kreatif dalam memberikan layanan terbaik",
      color: "bg-stis-cyan",
    },
    {
      title: "Kolaboratif",
      description:
        "Membangun kerjasama yang sinergis dengan semua pemangku kepentingan",
      color: "bg-stis-blue",
    },
    {
      title: "Responsif",
      description: "Tanggap dan cepat dalam merespon kebutuhan dan perubahan",
      color: "bg-stis-cyan",
    },
    {
      title: "Inklusif",
      description:
        "Memberikan akses yang setara dan layanan untuk semua kalangan",
      color: "bg-stis-blue",
    },
    {
      title: "Berkelanjutan",
      description:
        "Mempertimbangkan dampak jangka panjang dalam setiap keputusan",
      color: "bg-stis-cyan",
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
              Visi & <span className="text-stis-blue">Misi</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 leading-relaxed">
              Roadmap strategis perpustakaan STIS dalam mencapai visi menjadi
              perpustakaan terdepan yang mendukung keunggulan akademik dan
              penelitian
            </p>
          </div>
        </div>
      </div>

      {/* Vision */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <div className="flex items-center justify-center mb-6">
                <div className="w-16 h-16 bg-stis-blue/10 rounded-xl flex items-center justify-center">
                  <Eye className="w-8 h-8 text-stis-blue" />
                </div>
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Visi Perpustakaan STIS
              </h2>
              <div className="bg-gradient-to-r from-stis-blue-light to-stis-gray-light rounded-2xl p-8 mb-8">
                <p className="text-xl sm:text-2xl font-semibold text-gray-900 leading-relaxed">
                  "Menjadi perpustakaan terdepan dalam mendukung pendidikan
                  tinggi statistika dan komputasi statistik yang berkelanjutan,
                  inovatif, dan berdaya saing global pada tahun 2030"
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {visionPoints.map((point, index) => {
                const IconComponent = point.icon;
                return (
                  <Card
                    key={index}
                    className="border-0 shadow-lg hover:shadow-xl transition-shadow"
                  >
                    <CardContent className="p-6 text-center">
                      <div className="w-12 h-12 bg-stis-blue/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                        <IconComponent className="w-6 h-6 text-stis-blue" />
                      </div>
                      <h3 className="font-semibold text-gray-900 mb-2">
                        {point.title}
                      </h3>
                      <p className="text-sm text-gray-600 leading-relaxed">
                        {point.description}
                      </p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 bg-stis-gray-light">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <div className="flex items-center justify-center mb-6">
                <div className="w-16 h-16 bg-stis-cyan/10 rounded-xl flex items-center justify-center">
                  <Target className="w-8 h-8 text-stis-cyan" />
                </div>
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Misi Perpustakaan STIS
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Langkah strategis yang akan dilakukan untuk mencapai visi
                perpustakaan STIS
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {missions.map((mission, index) => {
                const IconComponent = mission.icon;
                return (
                  <Card
                    key={index}
                    className="border-0 shadow-lg hover:shadow-xl transition-shadow"
                  >
                    <CardContent className="p-8">
                      <div className="flex items-start gap-4 mb-6">
                        <div className="w-12 h-12 bg-stis-cyan/10 rounded-lg flex items-center justify-center flex-shrink-0">
                          <IconComponent className="w-6 h-6 text-stis-cyan" />
                        </div>
                        <div>
                          <h3 className="text-xl font-semibold text-gray-900 mb-3">
                            {mission.title}
                          </h3>
                          <p className="text-gray-600 leading-relaxed mb-4">
                            {mission.description}
                          </p>
                        </div>
                      </div>

                      <div className="pl-16">
                        <h4 className="font-medium text-gray-900 mb-3">
                          Implementasi:
                        </h4>
                        <ul className="space-y-2">
                          {mission.details.map((detail, idx) => (
                            <li
                              key={idx}
                              className="text-sm text-gray-600 flex items-start"
                            >
                              <div className="w-1.5 h-1.5 bg-stis-cyan rounded-full mt-2 mr-3 flex-shrink-0"></div>
                              {detail}
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

      {/* Values */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <div className="flex items-center justify-center mb-6">
                <div className="w-16 h-16 bg-stis-blue/10 rounded-xl flex items-center justify-center">
                  <Heart className="w-8 h-8 text-stis-blue" />
                </div>
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Nilai-Nilai Perpustakaan
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Prinsip dasar yang menjadi panduan dalam setiap aktivitas dan
                pelayanan perpustakaan
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {values.map((value, index) => (
                <Card
                  key={index}
                  className="border-0 shadow-lg hover:shadow-xl transition-shadow group"
                >
                  <CardContent className="p-6 text-center">
                    <div
                      className={`w-12 h-12 ${value.color}/10 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:${value.color}/20 transition-colors`}
                    >
                      <Heart
                        className={`w-6 h-6 ${value.color === "bg-stis-blue" ? "text-stis-blue" : "text-stis-cyan"}`}
                      />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">
                      {value.title}
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-stis-gray-light">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Bersama Mewujudkan Visi
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Visi dan misi perpustakaan STIS akan tercapai dengan dukungan dan
              partisipasi aktif dari seluruh sivitas akademika. Mari
              bersama-sama membangun perpustakaan yang unggul.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="border-0 shadow-lg">
                <CardContent className="p-6 text-center">
                  <Users className="w-8 h-8 text-stis-blue mx-auto mb-4" />
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Mahasiswa
                  </h3>
                  <p className="text-sm text-gray-600">
                    Manfaatkan semua fasilitas dan layanan untuk mendukung studi
                    Anda
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardContent className="p-6 text-center">
                  <BookOpen className="w-8 h-8 text-stis-cyan mx-auto mb-4" />
                  <h3 className="font-semibold text-gray-900 mb-2">Dosen</h3>
                  <p className="text-sm text-gray-600">
                    Berkolaborasi dalam pengembangan koleksi dan program
                    literasi
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardContent className="p-6 text-center">
                  <Target className="w-8 h-8 text-stis-blue mx-auto mb-4" />
                  <h3 className="font-semibold text-gray-900 mb-2">Peneliti</h3>
                  <p className="text-sm text-gray-600">
                    Akses sumber daya berkualitas untuk mendukung penelitian
                    Anda
                  </p>
                </CardContent>
              </Card>
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
              © 2024 Perpustakaan STIS. Hak cipta dilindungi undang-undang.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
