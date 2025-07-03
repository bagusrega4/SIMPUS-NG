import { Users, Mail, Phone, Award, BookOpen } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Navigation from "@/components/Navigation";

export default function Structure() {
  const leadership = [
    {
      name: "Dr. Maria Sari Dewi, M.Si",
      position: "Kepala Perpustakaan",
      education: "S3 Ilmu Perpustakaan - Universitas Indonesia",
      experience: "25 tahun",
      email: "maria.sari@stis.ac.id",
      phone: "(021) 8191437 ext. 101",
      photo: "/placeholder.svg",
      achievements: [
        "Sertifikat Librarian Professional",
        "ISO 21500 Certified",
        "Best Library Manager 2023",
      ],
    },
  ];

  const departments = [
    {
      name: "Seksi Layanan Teknis",
      head: "Drs. Ahmad Wijaya, M.Kom",
      members: 4,
      responsibilities: [
        "Pengadaan dan seleksi bahan pustaka",
        "Pengolahan dan katalogisasi",
        "Pengembangan sistem informasi",
        "Maintenance database dan repository",
      ],
      contact: "teknis@stis.ac.id",
    },
    {
      name: "Seksi Layanan Pemustaka",
      head: "Siti Nurhaliza, S.Sos",
      members: 3,
      responsibilities: [
        "Layanan sirkulasi dan peminjaman",
        "Layanan referensi dan informasi",
        "Bimbingan pengguna perpustakaan",
        "Program literasi informasi",
      ],
      contact: "layanan@stis.ac.id",
    },
    {
      name: "Seksi Pengembangan Koleksi",
      head: "Dr. Budi Santoso, M.Stat",
      members: 3,
      responsibilities: [
        "Evaluasi dan pengembangan koleksi",
        "Kerjasama dengan penerbit",
        "Preservasi dan konservasi",
        "Digitalisasi koleksi",
      ],
      contact: "koleksi@stis.ac.id",
    },
  ];

  const staff = [
    {
      name: "Rizki Pratama, A.Md",
      position: "Pustakawan Pelaksana",
      specialization: "Cataloging & Metadata",
      experience: "8 tahun",
    },
    {
      name: "Lisa Permata, S.IP",
      position: "Pustakawan Pelaksana",
      specialization: "Digital Library Services",
      experience: "6 tahun",
    },
    {
      name: "Andi Kurniawan, S.Kom",
      position: "IT Support Specialist",
      specialization: "System Administration",
      experience: "5 tahun",
    },
    {
      name: "Maya Sari, A.Md.Pust",
      position: "Pustakawan Pelaksana",
      specialization: "User Services",
      experience: "7 tahun",
    },
    {
      name: "Doni Hermawan, S.Kom",
      position: "Web Developer",
      specialization: "Frontend Development",
      experience: "4 tahun",
    },
    {
      name: "Indah Lestari, S.IP",
      position: "Pustakawan Pelaksana",
      specialization: "Information Literacy",
      experience: "9 tahun",
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
              Struktur <span className="text-stis-blue">Organisasi</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 leading-relaxed">
              Tim profesional yang berdedikasi untuk memberikan layanan
              perpustakaan terbaik bagi komunitas akademik STIS
            </p>
          </div>
        </div>
      </div>

      {/* Leadership */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
              Pimpinan Perpustakaan
            </h2>

            {leadership.map((leader, index) => (
              <Card key={index} className="border-0 shadow-lg mb-8">
                <CardContent className="p-8">
                  <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
                    <div className="w-32 h-32 bg-gradient-to-br from-stis-blue to-stis-cyan rounded-full flex items-center justify-center flex-shrink-0">
                      <Users className="w-16 h-16 text-white" />
                    </div>

                    <div className="flex-1 text-center md:text-left">
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">
                        {leader.name}
                      </h3>
                      <Badge className="mb-4 bg-stis-blue hover:bg-stis-blue-dark">
                        {leader.position}
                      </Badge>

                      <div className="space-y-3 mb-6">
                        <p className="text-gray-600">
                          <strong>Pendidikan:</strong> {leader.education}
                        </p>
                        <p className="text-gray-600">
                          <strong>Pengalaman:</strong> {leader.experience}
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 text-sm text-gray-600">
                          <div className="flex items-center gap-2">
                            <Mail className="w-4 h-4" />
                            {leader.email}
                          </div>
                          <div className="flex items-center gap-2">
                            <Phone className="w-4 h-4" />
                            {leader.phone}
                          </div>
                        </div>
                      </div>

                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">
                          Sertifikasi & Penghargaan:
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {leader.achievements.map((achievement, idx) => (
                            <Badge
                              key={idx}
                              variant="outline"
                              className="text-xs"
                            >
                              {achievement}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Departments */}
      <section className="py-20 bg-stis-gray-light">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Struktur Organisasi
              </h2>
              <p className="text-lg text-gray-600">
                Pembagian tugas dan tanggung jawab dalam organisasi perpustakaan
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {departments.map((dept, index) => (
                <Card
                  key={index}
                  className="border-0 shadow-lg hover:shadow-xl transition-shadow"
                >
                  <CardContent className="p-6">
                    <div className="text-center mb-6">
                      <div className="w-16 h-16 bg-stis-blue/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                        <Users className="w-8 h-8 text-stis-blue" />
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">
                        {dept.name}
                      </h3>
                      <p className="text-sm text-gray-600 mb-2">
                        <strong>Kepala Seksi:</strong>
                        <br />
                        {dept.head}
                      </p>
                      <Badge variant="secondary" className="text-xs">
                        {dept.members} Anggota
                      </Badge>
                    </div>

                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 mb-3">
                        Tugas & Tanggung Jawab:
                      </h4>
                      <ul className="space-y-2">
                        {dept.responsibilities.map((resp, idx) => (
                          <li
                            key={idx}
                            className="text-sm text-gray-600 flex items-start"
                          >
                            <div className="w-1.5 h-1.5 bg-stis-blue rounded-full mt-2 mr-2 flex-shrink-0"></div>
                            {resp}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="text-center">
                      <div className="flex items-center justify-center gap-2 text-sm text-gray-600">
                        <Mail className="w-4 h-4" />
                        {dept.contact}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Staff */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Tim Perpustakaan
              </h2>
              <p className="text-lg text-gray-600">
                Pustakawan dan tenaga teknis yang siap melayani kebutuhan
                informasi Anda
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {staff.map((member, index) => (
                <Card
                  key={index}
                  className="border-0 shadow-md hover:shadow-lg transition-shadow"
                >
                  <CardContent className="p-6 text-center">
                    <div className="w-20 h-20 bg-gradient-to-br from-stis-blue to-stis-cyan rounded-full flex items-center justify-center mx-auto mb-4">
                      <Users className="w-10 h-10 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">
                      {member.name}
                    </h3>
                    <Badge variant="outline" className="mb-3 text-xs">
                      {member.position}
                    </Badge>
                    <div className="space-y-2 text-sm text-gray-600">
                      <p>
                        <strong>Spesialisasi:</strong>
                        <br />
                        {member.specialization}
                      </p>
                      <p>
                        <strong>Pengalaman:</strong> {member.experience}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-stis-gray-light">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Hubungi Tim Kami
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Tim perpustakaan siap membantu Anda dengan pertanyaan atau
              kebutuhan informasi apapun
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="border-0 shadow-lg">
                <CardContent className="p-6 text-center">
                  <Mail className="w-8 h-8 text-stis-blue mx-auto mb-4" />
                  <h3 className="font-semibold text-gray-900 mb-2">Email</h3>
                  <p className="text-sm text-gray-600">
                    perpustakaan@stis.ac.id
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardContent className="p-6 text-center">
                  <Phone className="w-8 h-8 text-stis-cyan mx-auto mb-4" />
                  <h3 className="font-semibold text-gray-900 mb-2">Telepon</h3>
                  <p className="text-sm text-gray-600">(021) 8191437</p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardContent className="p-6 text-center">
                  <Users className="w-8 h-8 text-stis-blue mx-auto mb-4" />
                  <h3 className="font-semibold text-gray-900 mb-2">Kunjungi</h3>
                  <p className="text-sm text-gray-600">
                    Lantai 2, Gedung Utama STIS
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
