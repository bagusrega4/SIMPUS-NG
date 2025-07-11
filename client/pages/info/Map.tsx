import { useState } from "react";
import {
  MapPin,
  Maximize2,
  BookOpen,
  Monitor,
  Users,
  Coffee,
  Car,
  Wifi,
  Printer,
  Shield,
  Archive,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Navigation from "@/components/Navigation";
import HelpPopup from "@/components/HelpPopup";

export default function Map() {
  const helpItems = [
    {
      question: "Bagaimana cara menggunakan denah interaktif?",
      answer:
        "Klik fasilitas pada peta untuk melihat detail lokasi dan fungsinya.",
    },
    {
      question: "Di mana lokasi meja layanan?",
      answer: "Meja layanan utama berada dekat pintu masuk perpustakaan.",
    },
    {
      question: "Apakah ada petunjuk arah di dalam perpustakaan?",
      answer:
        "Ya, terdapat signage dan petunjuk arah. Staf perpustakaan juga siap membantu jika Anda tersesat.",
    },
  ];

  const [selectedFacility, setSelectedFacility] = useState<string | null>(null);

  const facilities = [
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
      id: "ruang-baca",
      name: "Ruang Baca Utama",
      type: "reading",
      icon: BookOpen,
      position: { x: 65, y: 45 },
      description: "Ruang baca dengan kapasitas 100 tempat duduk",
    },
    {
      id: "digital-library",
      name: "Digital Library",
      type: "technology",
      icon: Monitor,
      position: { x: 50, y: 60 },
      description: "Area akses koleksi digital dan e-resources",
    },
    {
      id: "komputer",
      name: "Area Komputer",
      type: "technology",
      icon: Monitor,
      position: { x: 70, y: 65 },
      description: "30 unit komputer dengan internet",
    },
    {
      id: "ruang-diskusi",
      name: "Ruang Diskusi",
      type: "reading",
      icon: Users,
      position: { x: 75, y: 35 },
      description: "6 ruang diskusi untuk grup kecil",
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
      id: "print-station",
      name: "Print & Scan",
      type: "facility",
      icon: Printer,
      position: { x: 25, y: 70 },
      description: "Layanan cetak dan scan dokumen",
    },
    {
      id: "toilet",
      name: "Toilet",
      type: "facility",
      icon: MapPin,
      position: { x: 15, y: 75 },
      description: "Fasilitas toilet",
    },
    {
      id: "parkir",
      name: "Area Parkir",
      type: "facility",
      icon: Car,
      position: { x: 5, y: 15 },
      description: "Parkir motor dan mobil",
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

  const getFacilityColor = (type: string) => {
    const facilityType = facilityTypes.find((ft) => ft.type === type);
    return facilityType?.color || "bg-gray-500";
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Main Content */}
      <section className="py-16 bg-stis-gray-light">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Denah Perpustakaan
              </h2>
              <p className="text-lg text-gray-600">
                Peta interaktif fasilitas dan layanan Perpustakaan STIS
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Map Area */}
              <div className="lg:col-span-2">
                <Card className="border-0 shadow-lg">
                  <CardContent className="p-0">
                    <div className="bg-gradient-to-br from-blue-50 to-gray-50 p-6 rounded-t-lg">
                      <div className="flex items-center justify-between">
                        <h3 className="text-xl font-bold text-gray-900">
                          Denah Perpustakaan STIS
                        </h3>
                        <Button
                          variant="outline"
                          size="sm"
                          className="border-stis-blue text-stis-blue hover:bg-stis-blue hover:text-white"
                        >
                          <Maximize2 className="w-4 h-4 mr-2" />
                          Perbesar
                        </Button>
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
                          {facilities.map((facility) => {
                            const IconComponent = facility.icon;
                            return (
                              <div
                                key={facility.id}
                                className={`absolute w-8 h-8 ${getFacilityColor(facility.type)} rounded-lg cursor-pointer transform -translate-x-1/2 -translate-y-1/2 hover:scale-110 transition-all flex items-center justify-center ${
                                  selectedFacility === facility.id
                                    ? "ring-4 ring-white ring-opacity-70 scale-110 z-10"
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
                              >
                                <IconComponent className="w-4 h-4 text-white" />
                              </div>
                            );
                          })}

                          {/* Room outlines (simplified) */}
                          <div className="absolute top-4 left-4 w-1/3 h-1/4 border border-gray-400 rounded opacity-30" />
                          <div className="absolute top-4 right-4 w-1/3 h-1/4 border border-gray-400 rounded opacity-30" />
                          <div className="absolute bottom-4 left-4 w-1/2 h-1/3 border border-gray-400 rounded opacity-30" />
                          <div className="absolute bottom-4 right-4 w-1/3 h-1/3 border border-gray-400 rounded opacity-30" />

                          {/* Center corridor */}
                          <div className="absolute top-1/2 left-1/2 w-1/6 h-1/2 border border-gray-400 rounded opacity-20 transform -translate-x-1/2 -translate-y-1/2" />
                        </div>
                      </div>
                    </div>

                    {/* Legend */}
                    <div className="p-6 border-t border-gray-200">
                      <h4 className="font-medium text-gray-900 mb-3">
                        Legenda Fasilitas:
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
                                className={`w-6 h-6 ${type.color} rounded flex items-center justify-center`}
                              >
                                <IconComponent className="w-3 h-3 text-white" />
                              </div>
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

              {/* Facility Details and List */}
              <div className="space-y-6">
                {/* Selected Facility Detail */}
                <Card className="border-0 shadow-lg">
                  <CardContent className="p-6">
                    <h4 className="text-lg font-bold text-gray-900 mb-4">
                      {selectedFacility
                        ? "Detail Fasilitas"
                        : "Pilih Fasilitas"}
                    </h4>

                    {selectedFacility ? (
                      (() => {
                        const facility = facilities.find(
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
                              Tutup Detail
                            </Button>
                          </div>
                        );
                      })()
                    ) : (
                      <p className="text-gray-500 text-sm text-center">
                        Klik ikon fasilitas pada peta untuk melihat detail
                      </p>
                    )}
                  </CardContent>
                </Card>

                {/* Facilities List */}
                <Card className="border-0 shadow-lg">
                  <CardContent className="p-6">
                    <h4 className="text-lg font-bold text-gray-900 mb-4">
                      Daftar Fasilitas
                    </h4>
                    <div className="space-y-2 max-h-96 overflow-y-auto">
                      {facilities.map((facility) => {
                        const IconComponent = facility.icon;
                        return (
                          <div
                            key={facility.id}
                            className={`flex items-center gap-3 p-3 rounded-lg cursor-pointer transition-colors ${
                              selectedFacility === facility.id
                                ? "bg-stis-blue-light border border-stis-blue"
                                : "hover:bg-gray-50"
                            }`}
                            onClick={() =>
                              setSelectedFacility(
                                selectedFacility === facility.id
                                  ? null
                                  : facility.id,
                              )
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
                  </CardContent>
                </Card>

                {/* Quick Info */}
                <Card className="border-0 shadow-lg">
                  <CardContent className="p-6">
                    <h4 className="font-semibold text-gray-900 mb-4">
                      Informasi Umum
                    </h4>
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <Shield className="w-5 h-5 text-stis-blue" />
                        <div>
                          <p className="text-sm font-medium text-gray-900">
                            Keamanan 24/7
                          </p>
                          <p className="text-xs text-gray-500">
                            CCTV dan petugas keamanan
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <Wifi className="w-5 h-5 text-stis-cyan" />
                        <div>
                          <p className="text-sm font-medium text-gray-900">
                            WiFi Gratis
                          </p>
                          <p className="text-xs text-gray-500">
                            Akses internet di seluruh area
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <Car className="w-5 h-5 text-orange-500" />
                        <div>
                          <p className="text-sm font-medium text-gray-900">
                            Parkir Tersedia
                          </p>
                          <p className="text-xs text-gray-500">
                            Area parkir motor dan mobil
                          </p>
                        </div>
                      </div>
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
                  <MapPin className="w-7 h-7 text-white" />
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

      {/* Help Popup */}
      <HelpPopup pageHelp={helpItems} />
    </div>
  );
}
