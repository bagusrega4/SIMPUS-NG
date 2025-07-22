import { useParams, useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  Calendar,
  User,
  Eye,
  Tag,
  Clock,
  Share2,
  BookOpen,
  MapPin,
  Phone,
  Instagram,
  Twitter,
  Youtube,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import HelpPopup from "@/components/HelpPopup";

export default function NewsDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  const helpItems = [
    {
      question: "Bagaimana cara berbagi artikel ini?",
      answer:
        "Anda dapat berbagi artikel dengan menggunakan tombol Share atau menyalin URL halaman ini untuk dibagikan.",
    },
    {
      question: "Dimana saya bisa menemukan artikel serupa?",
      answer:
        "Kembali ke halaman berita utama dan gunakan filter kategori untuk menemukan artikel dengan topik yang sama.",
    },
    {
      question: "Bisakah menyimpan artikel ini?",
      answer:
        "Anda dapat menyimpan artikel dengan bookmark halaman ini di browser atau mencetak halaman untuk referensi offline.",
    },
  ];

  // Sample news data (in real app, this would come from API)
  const newsData = {
    1: {
      id: 1,
      title: "Peluncuran SIMPus 3.0 dengan Fitur AI Assistant",
      excerpt:
        "Perpustakaan STIS dengan bangga memperkenalkan SIMPus versi 3.0 yang dilengkapi dengan AI Assistant untuk membantu pencarian koleksi dan rekomendasi bacaan yang lebih personal.",
      content: `Jakarta, 15 Januari 2024 - Perpustakaan Politeknik Statistika STIS resmi meluncurkan Sistem Informasi Manajemen Perpustakaan (SIMPus) versi 3.0 yang menghadirkan berbagai fitur revolusioner. Fitur unggulan adalah AI Assistant yang dapat membantu pengguna dalam mencari koleksi, memberikan rekomendasi bacaan berdasarkan minat dan riwayat baca, serta menjawab pertanyaan seputar layanan perpustakaan.

**Fitur-Fitur Unggulan SIMPus 3.0:**

1. **AI Assistant Terintegrasi**
   - Chatbot cerdas yang dapat memahami pertanyaan dalam bahasa natural
   - Rekomendasi bacaan personal berdasarkan riwayat dan preferensi
   - Bantuan pencarian koleksi dengan kemampuan semantic search

2. **Interface yang Diperbarui**
   - Desain modern dan responsif untuk semua perangkat
   - Navigasi yang lebih intuitif dan user-friendly
   - Dark mode untuk kenyamanan membaca di malam hari

3. **Fitur Kolaborasi**
   - Sharing dan diskusi buku dengan sesama pengguna
   - Reading groups dan book clubs virtual
   - Sistem rating dan review yang terintegrasi

4. **Analytics dan Insights**
   - Dashboard personal reading statistics
   - Tracking progress membaca
   - Insights tentang tren bacaan dan rekomendasi

**Manfaat untuk Pengguna:**

SIMPus 3.0 dirancang untuk memberikan pengalaman yang lebih personal dan efisien. Dengan AI Assistant, mahasiswa dan dosen dapat menemukan sumber referensi yang tepat dengan lebih cepat. Sistem rekomendasi yang cerdas akan membantu mengeksplorasi bacaan baru yang sesuai dengan minat akademik.

**Implementasi Bertahap:**

Peluncuran SIMPus 3.0 akan dilakukan secara bertahap:
- **Fase 1 (Januari 2024)**: Fitur AI Assistant dan interface baru
- **Fase 2 (Februari 2024)**: Fitur kolaborasi dan sharing
- **Fase 3 (Maret 2024)**: Analytics dan dashboard personal

**Pelatihan Pengguna:**

Perpustakaan akan mengadakan sesi pelatihan untuk memaksimalkan penggunaan fitur-fitur baru:
- Workshop untuk mahasiswa baru: Setiap Senin jam 14:00
- Sesi khusus dosen dan peneliti: Kamis jam 10:00
- Tutorial online tersedia 24/7 di portal perpustakaan

Kepala Perpustakaan, Dr. Sarah Wijaya, menyatakan, "SIMPus 3.0 merupakan langkah besar dalam transformasi digital perpustakaan STIS. Kami berkomitmen untuk terus berinovasi dalam memberikan layanan terbaik kepada civitas akademika."

Tim pengembang SIMPus bekerja sama dengan mahasiswa Program Studi Komputasi Statistik untuk mengembangkan algoritma AI yang disesuaikan dengan kebutuhan akademik STIS. Proyek ini juga mendapat dukungan penuh dari Direktorat Teknologi Informasi STIS.`,
      category: "pengumuman",
      author: "Tim IT Perpustakaan",
      date: "2024-01-15",
      views: 1250,
      image: "/placeholder.svg",
      tags: ["teknologi", "inovasi", "AI", "sistem baru"],
      priority: "high",
    },
    2: {
      id: 2,
      title: "Workshop Literasi Digital untuk Mahasiswa Baru",
      excerpt:
        "Program pelatihan literasi digital khusus mahasiswa baru tahun akademik 2024/2025 akan dimulai pada minggu kedua Februari 2024.",
      content: `Perpustakaan STIS mengundang seluruh mahasiswa baru angkatan 2024 untuk mengikuti Workshop Literasi Digital yang akan diselenggarakan mulai 12-16 Februari 2024. Workshop ini bertujuan untuk membekali mahasiswa dengan kemampuan mencari, mengevaluasi, dan menggunakan informasi digital secara efektif dan bertanggung jawab.

**Tujuan Workshop:**

1. **Meningkatkan Kemampuan Pencarian Informasi**
   - Teknik pencarian efektif di database akademik
   - Penggunaan kata kunci dan operator Boolean
   - Evaluasi kredibilitas sumber informasi online

2. **Literasi Data dan Statistik**
   - Memahami jenis-jenis data dan visualisasi
   - Interpretasi grafik dan tabel statistik
   - Penggunaan tools analisis data dasar

3. **Etika Digital dan Plagiarisme**
   - Pemahaman hak cipta dan fair use
   - Teknik sitasi yang benar
   - Penggunaan tools deteksi plagiarisme

**Jadwal Workshop:**

- **Senin, 12 Februari**: Pengantar Literasi Digital (09:00-12:00)
- **Selasa, 13 Februari**: Pencarian Database Akademik (09:00-12:00)
- **Rabu, 14 Februari**: Evaluasi Sumber Informasi (09:00-12:00)
- **Kamis, 15 Februari**: Literasi Data dan Statistik (09:00-12:00)
- **Jumat, 16 Februari**: Etika Digital dan Sitasi (09:00-12:00)

**Lokasi dan Fasilitas:**

Workshop akan dilaksanakan di Lab Komputer Perpustakaan Lantai 2 dengan kapasitas 30 peserta per sesi. Setiap peserta akan mendapat:
- Modul pembelajaran digital
- Akses ke database premium selama workshop
- Sertifikat keikutsertaan
- Akun trial software reference manager

**Pendaftaran:**

Pendaftaran dibuka mulai 1 Februari 2024 melalui:
- Portal mahasiswa STIS
- Meja layanan perpustakaan
- Email: literasi@stis.ac.id

Kuota terbatas untuk 150 peserta dengan sistem first-come-first-served. Prioritas diberikan kepada mahasiswa semester 1 dan 2.

**Narasumber:**

Workshop akan dipimpin oleh tim pustakawan bersertifikat dan dosen dari Program Studi Statistika:
- Dr. Maria Sari, M.Lis. (Kepala Bagian Layanan Digital)
- Prof. Ahmad Rahman, Ph.D. (Pakar Data Science)
- Indra Gunawan, S.Kom., M.Kom. (IT Specialist)

Setelah mengikuti workshop, peserta diharapkan mampu memanfaatkan sumber daya digital perpustakaan secara optimal untuk mendukung kegiatan akademik dan penelitian.`,
      category: "acara",
      author: "Pustakawan Senior",
      date: "2024-01-10",
      views: 890,
      image: "/placeholder.svg",
      tags: ["workshop", "literasi", "mahasiswa baru", "digital"],
      priority: "medium",
    },
    3: {
      id: 3,
      title: "Koleksi E-Book Terbaru: 500+ Judul Bidang Data Science",
      excerpt:
        "Perpustakaan menambah koleksi e-book dengan 500+ judul terbaru di bidang Data Science, Machine Learning, dan Artificial Intelligence.",
      content: `Dalam upaya mendukung pembelajaran dan penelitian di era digital, Perpustakaan STIS telah menambahkan 500+ judul e-book terbaru dalam bidang Data Science, Machine Learning, dan Artificial Intelligence. Koleksi ini dapat diakses 24/7 melalui portal perpustakaan dengan menggunakan akun mahasiswa/dosen STIS.

**Kategori Koleksi Baru:**

1. **Data Science Fundamentals (150 judul)**
   - Python for Data Science
   - R Programming for Statistics
   - SQL for Data Analysis
   - Data Visualization Techniques

2. **Machine Learning (200 judul)**
   - Supervised Learning Algorithms
   - Unsupervised Learning Methods
   - Deep Learning and Neural Networks
   - Natural Language Processing

3. **Artificial Intelligence (100 judul)**
   - AI Ethics and Philosophy
   - Computer Vision Applications
   - Robotics and Automation
   - Expert Systems Development

4. **Applied Statistics (50 judul)**
   - Bayesian Statistics
   - Time Series Analysis
   - Multivariate Analysis
   - Statistical Software Manuals

**Platform dan Publisher:**

Koleksi e-book tersedia melalui berbagai platform ternama:
- **Springer Nature**: 200 judul terbaru tahun 2023-2024
- **Elsevier ScienceDirect**: 150 judul dengan akses unlimited
- **Wiley Online Library**: 100 judul termasuk handbook series
- **MIT Press**: 50 judul fokus AI dan computational thinking

**Cara Mengakses:**

1. Login ke portal perpustakaan (library.stis.ac.id)
2. Pilih menu "E-Resources" > "E-Books"
3. Gunakan filter kategori "Data Science" atau "AI/ML"
4. Klik judul buku yang diinginkan
5. Download PDF atau baca online langsung

**Fitur Tambahan:**

- **Bookmark dan Highlight**: Simpan bagian penting dari e-book
- **Citation Generator**: Otomatis generate sitasi berbagai format
- **Reading Progress**: Track progress membaca untuk setiap judul
- **Offline Reading**: Download untuk dibaca tanpa internet (24 jam)

**Workshop Pemanfaatan E-Book:**

Perpustakaan akan mengadakan workshop khusus:
- **"Maksimalkan E-Book untuk Penelitian"**
- Tanggal: 25 Januari 2024, jam 14:00-16:00
- Lokasi: Ruang Seminar Perpustakaan
- Materi: Tips searching, organizing, dan citing e-book resources

**Statistik Penggunaan:**

Sejak diluncurkan bulan lalu, koleksi e-book menunjukkan:
- 2,500+ download dalam 2 minggu pertama
- 85% user rating kepuasan
- Top 3 kategori populer: Python programming, Machine Learning basics, dan Data Visualization

**Roadmap Pengembangan:**

Perpustakaan merencanakan penambahan:
- Q2 2024: 300 judul bidang Cybersecurity dan Blockchain
- Q3 2024: 200 judul bidang Quantum Computing
- Q4 2024: 400 judul berbagai bahasa (Mandarin, Jepang, Korea)

Koleksi ini merupakan hasil kerjasama dengan Direktorat Penelitian dan Pengabdian Masyarakat STIS serta dukungan dana hibah pengembangan perpustakaan dari Kemendikbudristek.`,
      category: "koleksi-baru",
      author: "Tim Pengembangan Koleksi",
      date: "2024-01-05",
      views: 672,
      image: "/placeholder.svg",
      tags: ["e-book", "data science", "machine learning", "AI"],
      priority: "medium",
    },
    4: {
      id: 4,
      title: "Penutupan Sementara Ruang Baca Lantai 2",
      excerpt:
        "Ruang baca lantai 2 akan ditutup sementara untuk renovasi sistem AC dan pencahayaan selama periode 20-31 Januari 2024.",
      content: `Diberitahukan kepada seluruh civitas akademika bahwa Ruang Baca Lantai 2 akan ditutup sementara untuk kegiatan renovasi sistem AC dan pencahayaan. Renovasi dilaksanakan pada 20-31 Januari 2024. Selama periode tersebut, mahasiswa dapat menggunakan fasilitas ruang baca di lantai 1 dan lantai 3.

**Detail Renovasi:**

1. **Sistem Air Conditioning (AC)**
   - Penggantian unit AC dengan teknologi inverter hemat energi
   - Instalasi sistem kontrol suhu otomatis
   - Perbaikan ducting dan ventilasi udara

2. **Sistem Pencahayaan**
   - Upgrade ke lampu LED full spectrum eye-friendly
   - Instalasi sensor cahaya otomatis
   - Penambahan lampu baca personal di setiap meja

3. **Fasilitas Pendukung**
   - Perbaikan stop kontak dan charging station
   - Upgrade koneksi WiFi dengan access point tambahan
   - Pemasangan sound dampening panels

**Jadwal Pelaksanaan:**

- **20-22 Januari**: Pembongkaran sistem lama
- **23-26 Januari**: Instalasi sistem baru
- **27-29 Januari**: Testing dan fine-tuning
- **30-31 Januari**: Cleaning dan persiapan pembukaan
- **1 Februari**: Pembukaan kembali untuk umum

**Fasilitas Alternatif:**

Selama renovasi, tersedia fasilitas pengganti:

**Lantai 1 - Reading Zone:**
- 80 tempat duduk dengan meja individual
- Akses WiFi high-speed
- Koleksi referensi umum
- Jam buka: 08:00-20:00

**Lantai 3 - Study Hall:**
- 120 tempat duduk dalam silent zone
- Individual study booth (12 unit)
- Akses ke koleksi digital dan database
- Jam buka: 08:00-22:00

**Outdoor Reading Garden:**
- 30 tempat duduk semi-outdoor
- Suasana natural dengan tanaman
- Cocok untuk diskusi grup kecil
- Jam buka: 08:00-17:00

**Layanan Khusus Selama Renovasi:**

1. **Extended Hours di Lantai 3**: Buka hingga jam 22:00
2. **Book Delivery Service**: Pengambilan buku dari lantai 2 by request
3. **Temporary Locker**: Loker sementara untuk barang mahasiswa
4. **Group Study Room**: Reservasi ruang diskusi tanpa biaya tambahan

**Kompensasi dan Fasilitas Tambahan:**

- Free coffee/tea di area lantai 1 dan 3
- Akses premium ke database online selama periode renovasi
- Voucher fotocopy gratis 100 lembar per mahasiswa
- Extended borrowing period (perpanjangan otomatis 2 minggu)

**Informasi dan Keluhan:**

Untuk informasi lebih lanjut atau menyampaikan keluhan:
- WhatsApp: 0821-1234-5678
- Email: layanan@perpus-stis.ac.id
- Information desk di lantai 1

Kami mohon maaf atas ketidaknyamanan yang terjadi dan berterima kasih atas pengertian civitas akademika. Renovasi ini dilakukan untuk meningkatkan kualitas layanan dan kenyamanan belajar di perpustakaan STIS.`,
      category: "pengumuman",
      author: "Bagian Fasilitas",
      date: "2024-01-18",
      views: 445,
      image: "/placeholder.svg",
      tags: ["pengumuman", "renovasi", "ruang baca"],
      priority: "high",
    },
  };

  const news = newsData[parseInt(id!) as keyof typeof newsData];

  if (!news) {
    return (
      <div className="min-h-screen bg-white">
        <Navigation />
        <div className="container mx-auto px-4 py-24 text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">
            Artikel tidak ditemukan
          </h1>
          <Button onClick={() => navigate("/info/news")}>
            Kembali ke Berita
          </Button>
        </div>
      </div>
    );
  }

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "pengumuman":
        return "📢";
      case "acara":
        return "📅";
      case "koleksi-baru":
        return "📚";
      default:
        return "📢";
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "high":
        return "bg-red-500";
      case "medium":
        return "bg-yellow-500";
      case "low":
        return "bg-blue-500";
      default:
        return "bg-gray-500";
    }
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: news.title,
        text: news.excerpt,
        url: window.location.href,
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert("Link berhasil disalin!");
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Header */}
      <div className="bg-gradient-to-br from-stis-blue-light via-white to-stis-gray-light pt-24 pb-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <Button
              variant="ghost"
              onClick={() => navigate("/info/news")}
              className="mb-6 hover:bg-stis-blue hover:text-white"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Kembali ke Berita
            </Button>

            <div className="flex items-center gap-2 mb-4">
              <div
                className={`w-3 h-3 ${getPriorityColor(news.priority)} rounded-full`}
              />
              <Badge className="bg-stis-blue hover:bg-stis-blue-dark">
                {getCategoryIcon(news.category)}{" "}
                {news.category.replace("-", " ").toUpperCase()}
              </Badge>
            </div>

            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              {news.title}
            </h1>

            <div className="flex flex-wrap items-center gap-4 text-gray-600 mb-6">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>
                  {new Date(news.date).toLocaleDateString("id-ID", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </span>
              </div>
              <span className="text-gray-300">•</span>
              <div className="flex items-center gap-2">
                <User className="w-4 h-4" />
                <span>{news.author}</span>
              </div>
              <span className="text-gray-300">•</span>
              <div className="flex items-center gap-2">
                <Eye className="w-4 h-4" />
                <span>{news.views} views</span>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex flex-wrap gap-2">
                {news.tags.map((tag, index) => (
                  <Badge key={index} variant="outline" className="text-xs">
                    <Tag className="w-3 h-3 mr-1" />
                    {tag}
                  </Badge>
                ))}
              </div>
              <Button
                variant="outline"
                onClick={handleShare}
                className="border-stis-blue text-stis-blue hover:bg-stis-blue hover:text-white"
              >
                <Share2 className="w-4 h-4 mr-2" />
                Bagikan
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="prose prose-lg max-w-none">
                  <div className="aspect-video bg-gradient-to-br from-stis-blue-light to-stis-gray-light flex items-center justify-center mb-8 rounded-lg">
                    <span className="text-6xl">
                      {getCategoryIcon(news.category)}
                    </span>
                  </div>

                  <div className="whitespace-pre-line text-gray-700 leading-relaxed">
                    {news.content}
                  </div>
                </div>
              </CardContent>
            </Card>
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

      <HelpPopup pageHelp={helpItems} />
    </div>
  );
}
