import { useState } from "react";
import {
  Search,
  Filter,
  FileText,
  Download,
  Eye,
  Star,
  Calendar,
  User,
  GraduationCap,
  Award,
  TrendingUp,
  BookOpen,
  Phone,
  MapPin,
  Clock,
  Instagram,
  Twitter,
  Youtube,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Navigation from "@/components/Navigation";
import HelpPopup from "@/components/HelpPopup";

export default function Repository() {
  const helpItems = [
    {
      question: "Apa itu Repository Polstat STIS?",
      answer:
        "Kumpulan karya ilmiah civitas akademika Polstat STIS meliputi tugas akhir, skripsi, tesis, publikasi, dan laporan penelitian.",
    },
    {
      question: "Bagaimana cara submit karya ke repository?",
      answer:
        "Hubungi pustakawan atau gunakan sistem submit online. Pastikan dokumen dalam format PDF dengan metadata lengkap.",
    },
    {
      question: "Apakah semua karya bisa diakses publik?",
      answer:
        "Tergantung level akses yang ditetapkan. Ada yang open access, restricted, atau hanya untuk internal kampus.",
    },
  ];
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("semua");
  const [selectedYear, setSelectedYear] = useState("semua");
  const [selectedType, setSelectedType] = useState("semua");

  // Sample data for demonstration
  const theses = [
    {
      id: 1,
      title: "Analisis Regresi Berganda untuk Prediksi Inflasi Indonesia",
      author: "Andi Pratama",
      nim: "16.8888.1111",
      supervisor: "Dr. Bambang Hermanto, M.Si",
      department: "D-IV Statistika",
      year: 2023,
      pages: 125,
      file_size: "2.4 MB",
      downloads: 234,
      views: 1567,
      rating: 4.8,
      keywords: ["regresi", "inflasi", "ekonomi", "prediksi"],
      abstract:
        "Penelitian ini menganalisis faktor-faktor yang mempengaruhi inflasi di Indonesia menggunakan metode regresi berganda...",
      type: "tugas_akhir",
      access: "open",
    },
    {
      id: 2,
      title:
        "Implementasi Machine Learning dalam Analisis Sentimen Media Sosial",
      author: "Sari Dewi",
      nim: "16.8888.2222",
      supervisor: "Prof. Dr. Cahya Utama, M.Kom",
      department: "D-IV Komputasi Statistik",
      year: 2023,
      pages: 98,
      file_size: "3.1 MB",
      downloads: 456,
      views: 2134,
      rating: 4.9,
      keywords: ["machine learning", "sentimen", "media sosial", "nlp"],
      abstract:
        "Studi tentang penerapan algoritma machine learning untuk menganalisis sentimen pada data media sosial...",
      type: "tugas_akhir",
      access: "open",
    },
  ];

  const publications = [
    {
      id: 1,
      title: "Statistical Analysis of Economic Indicators in Indonesia",
      author: "Dr. Ahmad Wijaya, M.Si",
      journal: "Indonesian Journal of Statistics",
      volume: "Vol. 24 No. 2",
      year: 2023,
      pages: "pp. 45-67",
      doi: "10.1234/ijs.2023.24.2.45",
      downloads: 189,
      views: 876,
      rating: 4.7,
      keywords: ["ekonomi", "indikator", "statistik", "indonesia"],
      abstract:
        "This study examines the correlation between various economic indicators...",
      type: "publikasi",
      access: "open",
    },
  ];

  const reports = [
    {
      id: 1,
      title: "Laporan Survey Kepuasan Mahasiswa 2023",
      author: "Tim Peneliti STIS",
      department: "Pusat Penelitian STIS",
      year: 2023,
      pages: 78,
      file_size: "1.8 MB",
      downloads: 123,
      views: 567,
      rating: 4.5,
      keywords: ["survey", "kepuasan", "mahasiswa", "evaluasi"],
      abstract:
        "Laporan hasil survey tingkat kepuasan mahasiswa terhadap layanan akademik...",
      type: "laporan",
      access: "restricted",
    },
  ];

  // Combine all data based on selected type
  const getAllItems = () => {
    let items = [];
    if (selectedType === "semua" || selectedType === "tugas_akhir") {
      items = [...items, ...theses];
    }
    if (selectedType === "semua" || selectedType === "publikasi") {
      items = [...items, ...publications];
    }
    if (selectedType === "semua" || selectedType === "laporan") {
      items = [...items, ...reports];
    }
    return items;
  };

  // Filter function
  const filteredItems = () => {
    return getAllItems().filter((item) => {
      const matchesSearch =
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (Array.isArray(item.author)
          ? item.author.some((author) =>
              author.toLowerCase().includes(searchQuery.toLowerCase()),
            )
          : item.author.toLowerCase().includes(searchQuery.toLowerCase())) ||
        item.keywords.some((keyword) =>
          keyword.toLowerCase().includes(searchQuery.toLowerCase()),
        );
      const matchesYear =
        selectedYear === "semua" || item.year.toString() === selectedYear;

      return matchesSearch && matchesYear;
    });
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Header */}
      <div className="bg-gradient-to-br from-stis-blue-light via-white to-stis-gray-light pt-24 pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              Repository <span className="text-stis-blue">STIS</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 leading-relaxed">
              Repositori institusi yang menyimpan dan menyediakan akses terbuka
              terhadap karya ilmiah civitas akademika STIS, termasuk tugas
              akhir, penelitian, dan publikasi
            </p>
          </div>
        </div>
      </div>

      {/* Rest of the component content would go here */}
      <div className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-gray-600">
              Repository content will be implemented here.
            </p>
          </div>
        </div>
      </div>

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

      <HelpPopup pageHelp={helpItems} />
    </div>
  );
}
