import { Users, Target, Award, BookOpen, Building, Clock } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HelpPopup from "@/components/HelpPopup";

export default function About() {
  const helpItems = [
    {
      question: "Apa visi dan misi perpustakaan Polstat STIS?",
      answer:
        "Visi: Menjadi perpustakaan terdepan dalam pendidikan tinggi statistika. Misi: Menyediakan sumber daya berkualitas dan layanan inovatif.",
    },
    {
      question: "Siapa saja yang memimpin perpustakaan?",
      answer:
        "Tim profesional yang dipimpin oleh Kepala Perpustakaan dengan dukungan koordinator IT dan kepala layanan berpengalaman.",
    },
    {
      question: "Sejak kapan perpustakaan STIS berdiri?",
      answer:
        "Perpustakaan didirikan bersamaan dengan STIS pada tahun 1958 dan terus berkembang hingga era digital saat ini.",
    },
  ];
  const stats = [
    { number: "50+", label: "Tahun Pengalaman", icon: Clock },
    { number: "15K+", label: "Koleksi Buku", icon: BookOpen },
    { number: "2K+", label: "Mahasiswa Aktif", icon: Users },
    { number: "100+", label: "Staff Akademik", icon: Building },
  ];

  const team = [
    {
      name: "Dr. Maria Sari, M.Si",
      role: "Kepala Perpustakaan",
      description:
        "Ahli di bidang sistem informasi perpustakaan dengan pengalaman 20+ tahun",
    },
    {
      name: "Ahmad Wijaya, S.Kom",
      role: "Koordinator IT",
      description:
        "Spesialis dalam pengembangan sistem digital dan teknologi perpustakaan",
    },
    {
      name: "Siti Nurhaliza, S.Sos",
      role: "Kepala Layanan",
      description:
        "Berpengalaman dalam manajemen layanan dan pengembangan koleksi",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-emerald-600/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="w-8 h-8 text-stis-blue" />
                  </div>
                  <div className="text-3xl font-bold text-stis-blue mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-600 text-sm">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-stis-gray-light">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-emerald-600/10 rounded-lg flex items-center justify-center mr-4">
                    <Target className="w-6 h-6 text-stis-blue" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Visi</h3>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  Menjadi perpustakaan terdepan dalam mendukung pendidikan
                  tinggi statistika dan komputasi statistik yang berkelanjutan,
                  inovatif, dan berdaya saing global pada tahun 2030.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-stis-cyan/10 rounded-lg flex items-center justify-center mr-4">
                    <Award className="w-6 h-6 text-stis-cyan" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Misi</h3>
                </div>
                <ul className="text-gray-600 space-y-3">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-stis-cyan rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    Menyediakan sumber daya informasi berkualitas tinggi
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-stis-cyan rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    Mengembangkan layanan perpustakaan digital yang inovatif
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-stis-cyan rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    Mendukung kegiatan penelitian dan pembelajaran
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* History Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                Sejarah Perpustakaan
              </h3>
              <p className="text-lg text-gray-600">
                Perjalanan panjang dalam melayani kebutuhan informasi akademik
              </p>
            </div>

            <div className="space-y-8">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-emerald-600 rounded-full flex items-center justify-center text-white font-bold">
                    1958
                  </div>
                </div>
                <div className="ml-6">
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">
                    Pendirian STIS
                  </h4>
                  <p className="text-gray-600">
                    Perpustakaan Polstat STIS didirikan bersamaan dengan
                    pendirian institusi sebagai pusat pembelajaran statistika.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-stis-cyan rounded-full flex items-center justify-center text-white font-bold">
                    1990
                  </div>
                </div>
                <div className="ml-6">
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">
                    Modernisasi Sistem
                  </h4>
                  <p className="text-gray-600">
                    Implementasi sistem katalog digital pertama dan
                    komputerisasi manajemen koleksi.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-emerald-600 rounded-full flex items-center justify-center text-white font-bold">
                    2010
                  </div>
                </div>
                <div className="ml-6">
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">
                    Era Digital
                  </h4>
                  <p className="text-gray-600">
                    Pengembangan repositori digital dan akses online ke koleksi
                    elektronik.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-stis-cyan rounded-full flex items-center justify-center text-white font-bold">
                    2023
                  </div>
                </div>
                <div className="ml-6">
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">
                    SIMPus Modern
                  </h4>
                  <p className="text-gray-600">
                    Peluncuran sistem SIMPus terbaru dengan antarmuka modern dan
                    fitur-fitur canggih.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-stis-gray-light">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Tim Perpustakaan
            </h3>
            <p className="text-lg text-gray-600">
              Dedikasi profesional untuk melayani kebutuhan akademik Anda
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <Card
                key={index}
                className="border-0 shadow-lg hover:shadow-xl transition-shadow h-full"
              >
                <CardContent className="p-8 text-center h-full flex flex-col">
                  <div className="w-20 h-20 bg-gradient-to-br from-stis-blue to-stis-cyan rounded-full flex items-center justify-center mx-auto mb-6">
                    <Users className="w-10 h-10 text-white" />
                  </div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">
                    {member.name}
                  </h4>
                  <Badge variant="secondary" className="mb-4">
                    {member.role}
                  </Badge>
                  <p className="text-gray-600 text-sm leading-relaxed flex-grow">
                    {member.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />

      {/* Help Popup */}
      <HelpPopup pageHelp={helpItems} />
    </div>
  );
}
