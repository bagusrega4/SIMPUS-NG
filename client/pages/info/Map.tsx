import { useState } from "react";
import {
  MapPin,
  Navigation as NavigationIcon,
  Layers,
  Maximize2,
  BookOpen,
  Monitor,
  Users,
  Coffee,
  Car,
  Wifi,
  Printer,
  Shield,
  MoveUp,
  Archive,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Navigation from "@/components/Navigation";

export default function Map() {
  const [selectedFloor, setSelectedFloor] = useState("lantai-1");
  const [selectedFacility, setSelectedFacility] = useState<string | null>(null);

  const floors = [
    {
      id: "lantai-1",
      name: "Lantai 1",
      description: "Area publik dan layanan utama",
      facilities: [
        {
          id: "lobby",
          name: "Lobby & Resepsionis",
          type: "service",
          icon: Users,
          position: { x: 20, y: 30 },
          description: "Area penerimaan tamu dan informasi umum perpustakaan",
        },
        {
          id: "sirkulasi",
          name: "Meja Sirkulasi",
          type: "service",
          icon: BookOpen,
          position: { x: 45, y: 25 },
          description: "Layanan peminjaman dan pengembalian buku",
        },
        {
          id: "koleksi-umum",
          name: "Koleksi Umum",
          type: "collection",
          icon: Archive,
          position: { x: 30, y: 50 },
          description: "Koleksi buku umum dan populer",
        },
        {
          id: "ruang-baca-1",
          name: "Ruang Baca Utama",
          type: "reading",
          icon: BookOpen,
          position: { x: 65, y: 45 },
          description: "Ruang baca dengan kapasitas 100 tempat duduk",
        },
        {
          id: "kantin",
          name: "Kantin Mini",
          type: "facility",
          icon: Coffee,
          position: { x: 85, y: 70 },
          description: "Area refreshment dan istirahat",
        },
        {
          id: "toilet-1",
          name: "Toilet",
          type: "facility",
          icon: MapPin,
          position: { x: 15, y: 70 },
          description: "Fasilitas toilet lantai 1",
        },
        {
          id: "parkir",
          name: "Area Parkir",
          type: "facility",
          icon: Car,
          position: { x: 5, y: 15 },
          description: "Parkir motor dan mobil",
        },
      ],
    },
    {
      id: "lantai-2",
      name: "Lantai 2",
      description: "Area studi dan koleksi khusus",
      facilities: [
        {
          id: "koleksi-referensi",
          name: "Koleksi Referensi",
          type: "collection",
          icon: Archive,
          position: { x: 25, y: 35 },
          description: "Buku referensi dan ensiklopedia",
        },
        {
          id: "digital-library",
          name: "Digital Library",
          type: "technology",
          icon: Monitor,
          position: { x: 50, y: 30 },
          description: "Area akses koleksi digital dan e-resources",
        },
        {
          id: "ruang-diskusi",
          name: "Ruang Diskusi",
          type: "reading",
          icon: Users,
          position: { x: 70, y: 40 },
          description: "6 ruang diskusi untuk grup kecil",
        },
        {
          id: "komputer",
          name: "Area Komputer",
          type: "technology",
          icon: Monitor,
          position: { x: 40, y: 60 },
          description: "30 unit komputer dengan internet",
        },
        {
          id: "ruang-staff",
          name: "Ruang Staff",
          type: "service",
          icon: Users,
          position: { x: 80, y: 20 },
          description: "Ruang kerja pustakawan dan staff",
        },
        {
          id: "print-station",
          name: "Print & Scan",
          type: "facility",
          icon: Printer,
          position: { x: 20, y: 65 },
          description: "Layanan cetak dan scan dokumen",
        },
        {
          id: "toilet-2",
          name: "Toilet",
          type: "facility",
          icon: MapPin,
          position: { x: 85, y: 75 },
          description: "Fasilitas toilet lantai 2",
        },
      ],
    },
  ];

  const facilityTypes = [
    {
      type: "service",
      label: "Layanan",
      color: "bg-stis-blue",
      icon: Users,
    },
    {
      type: "collection",
      label: "Koleksi",
      color: "bg-green-500",
      icon: Archive,
    },
    {
      type: "reading",
      label: "Ruang Baca",
      color: "bg-purple-500",
      icon: BookOpen,
    },
    {
      type: "technology",
      label: "Teknologi",
      color: "bg-stis-cyan",
      icon: Monitor,
    },
    {
      type: "facility",
      label: "Fasilitas",
      color: "bg-orange-500",
      icon: Coffee,
    },
  ];

  const accessibilityFeatures = [
    {
      feature: "Akses Difabel",
      description: "Ramp dan lift untuk akses kursi roda",
      icon: Shield,
    },
    {
      feature: "Tangga Darurat",
      description: "Tangga darurat di setiap lantai",
      icon: MoveUp,
    },
    {
      feature: "WiFi Coverage",
      description: "Sinyal WiFi di seluruh area perpustakaan",
      icon: Wifi,
    },
    {
      feature: "CCTV Security",
      description: "Sistem keamanan 24/7",
      icon: Shield,
    },
  ];

  const currentFloor = floors.find((floor) => floor.id === selectedFloor);

  const getFacilityColor = (type: string) => {
    const facilityType = facilityTypes.find((ft) => ft.type === type);
    return facilityType?.color || "bg-gray-500";
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Header */}
      <div className="bg-gradient-to-br from-stis-blue-light via-white to-stis-gray-light pt-24 pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="secondary" className="mb-4">
              Informasi
            </Badge>
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              Denah <span className="text-stis-blue">Perpustakaan</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 leading-relaxed">
              Peta interaktif Perpustakaan Polstat STIS untuk membantu Anda menemukan
              lokasi fasilitas, koleksi, dan layanan yang Anda butuhkan
            </p>
          </div>
        </div>
      </div>

      {/* Floor Selection */}
      <section className="py-8 bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <Layers className="w-5 h-5 text-stis-blue" />
                  <span className="font-medium text-gray-900">
                    Pilih Lantai:
                  </span>
                </div>
                <div className="flex gap-2">
                  {floors.map((floor) => (
                    <Button
                      key={floor.id}
                      variant={
                        selectedFloor === floor.id ? "default" : "outline"
                      }
                      size="sm"
                      onClick={() => setSelectedFloor(floor.id)}
                      className={
                        selectedFloor === floor.id
                          ? "bg-stis-blue hover:bg-stis-blue-dark"
                          : "border-stis-blue text-stis-blue hover:bg-stis-blue hover:text-white"
                      }
                    >
                      {floor.name}
                    </Button>
                  ))}
                </div>
              </div>

              <div className="flex items-center gap-4">
                <Button
                  variant="outline"
                  size="sm"
                  className="border-stis-blue text-stis-blue hover:bg-stis-blue hover:text-white"
                >
                  <Maximize2 className="w-4 h-4 mr-2" />
                  Perbesar
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="border-stis-cyan text-stis-cyan hover:bg-stis-cyan hover:text-white"
                >
                  <NavigationIcon className="w-4 h-4 mr-2" />
                  Navigasi
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-stis-gray-light">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <Tabs defaultValue="map" className="w-full">
              <TabsList className="grid w-full grid-cols-3 max-w-md mx-auto mb-12">
                <TabsTrigger value="map">Denah</TabsTrigger>
                <TabsTrigger value="facilities">Fasilitas</TabsTrigger>
                <TabsTrigger value="access">Akses</TabsTrigger>
              </TabsList>

              {/* Map Tab */}
              <TabsContent value="map">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  {/* Map Area */}
                  <div className="lg:col-span-2">
                    <Card className="border-0 shadow-lg">
                      <CardContent className="p-0">
                        <div className="bg-gradient-to-br from-blue-50 to-gray-50 p-6 rounded-t-lg">
                          <div className="flex items-center justify-between mb-4">
                            <h3 className="text-xl font-bold text-gray-900">
                              {currentFloor?.name}
                            </h3>
                            <Badge variant="secondary">
                              {currentFloor?.description}
                            </Badge>
                          </div>
                        </div>

                        {/* Interactive Map */}
                        <div
                          className="relative bg-white"
                          style={{ paddingBottom: "60%" }}
                        >
                          <div className="absolute inset-0 p-6">
                            {/* Floor Layout */}
                            <div className="w-full h-full border-2 border-gray-300 rounded-lg relative bg-gray-50">
                              {currentFloor?.facilities.map((facility) => (
                                <div
                                  key={facility.id}
                                  className={`absolute w-4 h-4 ${getFacilityColor(facility.type)} rounded-full cursor-pointer transform -translate-x-1/2 -translate-y-1/2 hover:scale-150 transition-transform ${
                                    selectedFacility === facility.id
                                      ? "ring-4 ring-white ring-opacity-50 scale-150"
                                      : ""
                                  }`}
                                  style={{
                                    left: `${facility.position.x}%`,
                                    top: `${facility.position.y}%`,
                                  }}
                                  onClick={() =>
                                    setSelectedFacility(
                                      selectedFacility === facility.id
                                        ? null
                                        : facility.id,
                                    )
                                  }
                                  title={facility.name}
                                />
                              ))}

                              {/* Room outlines (simplified) */}
                              <div className="absolute top-4 left-4 w-1/3 h-1/4 border border-gray-400 rounded opacity-30" />
                              <div className="absolute top-4 right-4 w-1/3 h-1/4 border border-gray-400 rounded opacity-30" />
                              <div className="absolute bottom-4 left-4 w-1/2 h-1/3 border border-gray-400 rounded opacity-30" />
                              <div className="absolute bottom-4 right-4 w-1/3 h-1/3 border border-gray-400 rounded opacity-30" />
                            </div>
                          </div>
                        </div>

                        {/* Legend */}
                        <div className="p-6 border-t border-gray-200">
                          <h4 className="font-medium text-gray-900 mb-3">
                            Legenda:
                          </h4>
                          <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
                            {facilityTypes.map((type) => {
                              const IconComponent = type.icon;
                              return (
                                <div
                                  key={type.type}
                                  className="flex items-center gap-2"
                                >
                                  <div
                                    className={`w-3 h-3 ${type.color} rounded-full`}
                                  />
                                  <span className="text-sm text-gray-600">
                                    {type.label}
                                  </span>
                                </div>
                              );
                            })}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>

                  {/* Facility Details */}
                  <div>
                    <Card className="border-0 shadow-lg">
                      <CardContent className="p-6">
                        <h4 className="text-lg font-bold text-gray-900 mb-4">
                          {selectedFacility
                            ? "Detail Fasilitas"
                            : "Daftar Fasilitas"}
                        </h4>

                        {selectedFacility ? (
                          (() => {
                            const facility = currentFloor?.facilities.find(
                              (f) => f.id === selectedFacility,
                            );
                            if (!facility) return null;
                            const IconComponent = facility.icon;
                            return (
                              <div>
                                <div className="flex items-center gap-3 mb-4">
                                  <div
                                    className={`w-10 h-10 ${getFacilityColor(facility.type)} rounded-lg flex items-center justify-center`}
                                  >
                                    <IconComponent className="w-5 h-5 text-white" />
                                  </div>
                                  <div>
                                    <h5 className="font-semibold text-gray-900">
                                      {facility.name}
                                    </h5>
                                    <Badge
                                      variant="outline"
                                      className="text-xs mt-1"
                                    >
                                      {
                                        facilityTypes.find(
                                          (ft) => ft.type === facility.type,
                                        )?.label
                                      }
                                    </Badge>
                                  </div>
                                </div>
                                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                                  {facility.description}
                                </p>
                                <Button
                                  variant="outline"
                                  size="sm"
                                  onClick={() => setSelectedFacility(null)}
                                  className="w-full"
                                >
                                  Kembali ke Daftar
                                </Button>
                              </div>
                            );
                          })()
                        ) : (
                          <div className="space-y-3">
                            {currentFloor?.facilities.map((facility) => {
                              const IconComponent = facility.icon;
                              return (
                                <div
                                  key={facility.id}
                                  className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 cursor-pointer transition-colors"
                                  onClick={() =>
                                    setSelectedFacility(facility.id)
                                  }
                                >
                                  <div
                                    className={`w-8 h-8 ${getFacilityColor(facility.type)} rounded-lg flex items-center justify-center`}
                                  >
                                    <IconComponent className="w-4 h-4 text-white" />
                                  </div>
                                  <div className="flex-1">
                                    <h6 className="font-medium text-gray-900 text-sm">
                                      {facility.name}
                                    </h6>
                                    <p className="text-xs text-gray-500">
                                      {
                                        facilityTypes.find(
                                          (ft) => ft.type === facility.type,
                                        )?.label
                                      }
                                    </p>
                                  </div>
                                </div>
                              );
                            })}
                          </div>
                        )}
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </TabsContent>

              {/* Facilities Tab */}
              <TabsContent value="facilities">
                <div className="text-center mb-12">
                  <h3 className="text-3xl font-bold text-gray-900 mb-4">
                    Fasilitas Perpustakaan
                  </h3>
                  <p className="text-lg text-gray-600">
                    Daftar lengkap fasilitas yang tersedia di setiap lantai
                  </p>
                </div>

                <div className="space-y-8">
                  {floors.map((floor) => (
                    <Card key={floor.id} className="border-0 shadow-lg">
                      <CardContent className="p-8">
                        <div className="flex items-center gap-3 mb-6">
                          <div className="w-10 h-10 bg-stis-blue/10 rounded-lg flex items-center justify-center">
                            <Layers className="w-5 h-5 text-stis-blue" />
                          </div>
                          <div>
                            <h4 className="text-xl font-bold text-gray-900">
                              {floor.name}
                            </h4>
                            <p className="text-gray-600 text-sm">
                              {floor.description}
                            </p>
                          </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                          {floor.facilities.map((facility) => {
                            const IconComponent = facility.icon;
                            return (
                              <div
                                key={facility.id}
                                className="flex items-start gap-3 p-4 bg-white rounded-lg border border-gray-100"
                              >
                                <div
                                  className={`w-8 h-8 ${getFacilityColor(facility.type)} rounded-lg flex items-center justify-center flex-shrink-0`}
                                >
                                  <IconComponent className="w-4 h-4 text-white" />
                                </div>
                                <div className="flex-1">
                                  <h5 className="font-medium text-gray-900 mb-1">
                                    {facility.name}
                                  </h5>
                                  <p className="text-xs text-gray-600 leading-relaxed">
                                    {facility.description}
                                  </p>
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              {/* Access Tab */}
              <TabsContent value="access">
                <div className="text-center mb-12">
                  <h3 className="text-3xl font-bold text-gray-900 mb-4">
                    Aksesibilitas & Keamanan
                  </h3>
                  <p className="text-lg text-gray-600">
                    Informasi mengenai aksesibilitas dan fitur keamanan
                    perpustakaan
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                  {accessibilityFeatures.map((feature, index) => {
                    const IconComponent = feature.icon;
                    return (
                      <Card key={index} className="border-0 shadow-lg">
                        <CardContent className="p-6">
                          <div className="flex items-start gap-4">
                            <div className="w-12 h-12 bg-stis-blue/10 rounded-lg flex items-center justify-center flex-shrink-0">
                              <IconComponent className="w-6 h-6 text-stis-blue" />
                            </div>
                            <div>
                              <h4 className="font-semibold text-gray-900 mb-2">
                                {feature.feature}
                              </h4>
                              <p className="text-gray-600 text-sm leading-relaxed">
                                {feature.description}
                              </p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    );
                  })}
                </div>

                {/* Emergency Info */}
                <Card className="border-0 shadow-lg bg-red-50">
                  <CardContent className="p-8">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Shield className="w-6 h-6 text-red-500" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-900 mb-4">
                          Informasi Darurat
                        </h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div>
                            <h5 className="font-medium text-gray-900 mb-2">
                              Prosedur Evakuasi:
                            </h5>
                            <ul className="space-y-1 text-sm text-gray-700">
                              <li>• Ikuti petunjuk petugas atau alarm</li>
                              <li>• Gunakan tangga darurat terdekat</li>
                              <li>• Berkumpul di titik aman di parkiran</li>
                              <li>• Tunggu instruksi lebih lanjut</li>
                            </ul>
                          </div>
                          <div>
                            <h5 className="font-medium text-gray-900 mb-2">
                              Kontak Darurat:
                            </h5>
                            <ul className="space-y-1 text-sm text-gray-700">
                              <li>• Security: ext. 911</li>
                              <li>• Damkar: 113</li>
                              <li>• Ambulans: 118</li>
                              <li>• Polisi: 110</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Visitor Guidelines */}
                <Card className="border-0 shadow-lg mt-8">
                  <CardContent className="p-8">
                    <h4 className="font-semibold text-gray-900 mb-6">
                      Panduan Pengunjung
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div>
                        <h5 className="font-medium text-stis-blue mb-3">
                          Pintu Masuk Utama
                        </h5>
                        <p className="text-sm text-gray-600 mb-2">
                          Lantai 1, area lobby
                        </p>
                        <p className="text-xs text-gray-500">
                          Buka: 08:00 - 16:00
                        </p>
                      </div>
                      <div>
                        <h5 className="font-medium text-stis-blue mb-3">
                          Loker Barang
                        </h5>
                        <p className="text-sm text-gray-600 mb-2">
                          Tersedia di lantai 1
                        </p>
                        <p className="text-xs text-gray-500">
                          Gratis dengan deposit
                        </p>
                      </div>
                      <div>
                        <h5 className="font-medium text-stis-blue mb-3">
                          Info Desk
                        </h5>
                        <p className="text-sm text-gray-600 mb-2">
                          Meja resepsionis
                        </p>
                        <p className="text-xs text-gray-500">
                          Bantuan informasi
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
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
                  <MapPin className="w-7 h-7 text-white" />
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
