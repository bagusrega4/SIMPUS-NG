import React from "react";
import { useNavigate } from "react-router-dom";
import {
  BookOpen,
  Calendar,
  Clock,
  CheckCircle,
  User,
  ArrowRight,
  Search,
  QrCode,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

import Navigation from "@/components/Navigation";
import HelpPopup from "@/components/HelpPopup";
import StandardFooter from "@/components/StandardFooter";

export default function Circulation() {
  const navigate = useNavigate();
  const helpItems = [
    {
      question: "Bagaimana proses peminjaman buku?",
      answer:
        "Proses peminjaman buku dapat dilakukan secara online melalui SIMPus atau langsung datang ke perpustakaan dengan membawa kartu anggota.",
    },
    {
      question: "Berapa lama durasi peminjaman buku?",
      answer:
        "Durasi peminjaman buku adalah 7 hari untuk mahasiswa dan 14 hari untuk dosen/staff. Dapat diperpanjang maksimal 2 kali.",
    },
    {
      question: "Bagaimana cara memperpanjang peminjaman?",
      answer:
        "Perpanjangan dapat dilakukan melalui SIMPus online atau datang langsung ke perpustakaan sebelum batas waktu pengembalian.",
    },
  ];

  const services = [
    {
      title: "Peminjaman Buku",
      description: "Pinjam buku fisik dengan mudah melalui sistem online",
      icon: BookOpen,
      action: "Pinjam Sekarang",
      link: "/collection/books",
    },
    {
      title: "Reservasi Buku",
      description: "Reservasi buku yang sedang dipinjam pengguna lain",
      icon: Calendar,
      action: "Reservasi",
      link: "/services/reservation",
    },
    {
      title: "Perpanjangan",
      description: "Perpanjang masa peminjaman buku Anda",
      icon: Clock,
      action: "Perpanjang",
      link: "/collection/borrowing-history",
    },
    {
      title: "Pengembalian",
      description: "Informasi dan panduan pengembalian buku",
      icon: CheckCircle,
      action: "Info Lokasi",
      link: "/info/map",
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
              Layanan
            </Badge>
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              <span className="text-stis-blue">Sirkulasi</span> Perpustakaan
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 leading-relaxed">
              Kelola peminjaman, pengembalian, dan reservasi buku dengan mudah
              melalui sistem sirkulasi digital yang terintegrasi
            </p>
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {services.map((service, index) => {
                const IconComponent = service.icon;
                return (
                  <Card
                    key={index}
                    className="border-0 shadow-lg hover:shadow-xl transition-shadow group cursor-pointer"
                    onClick={() => navigate(service.link)}
                  >
                    <CardContent className="p-8 text-center">
                      <div className="w-16 h-16 bg-stis-blue/10 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:bg-stis-blue/20 transition-colors">
                        <IconComponent className="w-8 h-8 text-stis-blue" />
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">
                        {service.title}
                      </h3>
                      <p className="text-gray-600 mb-6 leading-relaxed">
                        {service.description}
                      </p>
                      <Button className="w-full bg-stis-blue hover:bg-stis-blue-dark group-hover:shadow-lg">
                        {service.action}
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Process Flow */}
      <section className="py-16 bg-stis-gray-light">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Alur Peminjaman Buku
              </h2>
              <p className="text-lg text-gray-600">
                Proses peminjaman buku yang mudah dan efisien
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-stis-blue rounded-full flex items-center justify-center mx-auto mb-4">
                  <Search className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  1. Cari Buku
                </h3>
                <p className="text-gray-600 text-sm">
                  Cari buku yang ingin dipinjam melalui katalog online
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-stis-blue rounded-full flex items-center justify-center mx-auto mb-4">
                  <User className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  2. Login Akun
                </h3>
                <p className="text-gray-600 text-sm">
                  Masuk dengan akun perpustakaan Anda untuk melanjutkan
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-stis-blue rounded-full flex items-center justify-center mx-auto mb-4">
                  <BookOpen className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  3. Pinjam Buku
                </h3>
                <p className="text-gray-600 text-sm">
                  Klik tombol pinjam dan konfirmasi peminjaman buku
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-stis-blue rounded-full flex items-center justify-center mx-auto mb-4">
                  <QrCode className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  4. Ambil Buku
                </h3>
                <p className="text-gray-600 text-sm">
                  Datang ke perpustakaan dengan kode QR untuk mengambil buku
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Rules and Info */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                  Peraturan Sirkulasi
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-4">
                      Ketentuan Peminjaman
                    </h4>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 mr-3 flex-shrink-0" />
                        <span className="text-gray-700">
                          Maksimal 3 buku untuk mahasiswa, 5 buku untuk dosen
                        </span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 mr-3 flex-shrink-0" />
                        <span className="text-gray-700">
                          Durasi peminjaman 7-14 hari tergantung status
                        </span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 mr-3 flex-shrink-0" />
                        <span className="text-gray-700">
                          Perpanjangan maksimal 2 kali
                        </span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-4">
                      Sanksi dan Denda
                    </h4>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-red-600 mt-0.5 mr-3 flex-shrink-0" />
                        <span className="text-gray-700">
                          Denda keterlambatan Rp. 1.000 per hari per buku
                        </span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-red-600 mt-0.5 mr-3 flex-shrink-0" />
                        <span className="text-gray-700">
                          Ganti rugi buku hilang sesuai harga buku
                        </span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-red-600 mt-0.5 mr-3 flex-shrink-0" />
                        <span className="text-gray-700">
                          Pemblokiran akun jika menunggak lebih dari 30 hari
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="mt-8 text-center">
                  <Button
                    className="bg-stis-blue hover:bg-stis-blue-dark"
                    onClick={() => navigate("/info/rules")}
                  >
                    Lihat Peraturan Lengkap
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <StandardFooter />

      {/* Help Popup */}
      <HelpPopup pageHelp={helpItems} />
    </div>
  );
}
