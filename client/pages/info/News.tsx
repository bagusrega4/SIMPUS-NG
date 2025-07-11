import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Search,
  Filter,
  Calendar,
  User,
  Eye,
  Tag,
  Clock,
  Megaphone,
  FileText,
  ArrowRight,
  BookOpen,
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
import StandardFooter from "@/components/StandardFooter";

export default function News() {
  const navigate = useNavigate();
  const helpItems = [
    {
      question: "Seberapa sering berita dan pengumuman diupdate?",
      answer:
        "Berita dan pengumuman diupdate secara berkala sesuai kebutuhan. Pengumuman penting akan ditampilkan di bagian featured.",
    },
    {
      question: "Bagaimana cara berlangganan newsletter?",
      answer:
        "Masukkan email Anda di form berlangganan newsletter untuk mendapat notifikasi berita dan pengumuman terbaru.",
    },
    {
      question: "Apakah bisa mendapat notifikasi pengumuman penting?",
      answer:
        "Ya, dengan berlangganan newsletter atau mengikuti akun media sosial perpustakaan Polstat STIS.",
    },
  ];
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("semua");
  const [selectedSort, setSelectedSort] = useState("terbaru");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  const categories = [
    { id: "semua", label: "Semua Kategori", count: 45 },
    { id: "pengumuman", label: "Pengumuman", count: 18 },
    { id: "berita", label: "Berita", count: 12 },
    { id: "event", label: "Event", count: 9 },
    { id: "koleksi-baru", label: "Koleksi Baru", count: 6 },
  ];

  const featuredNews = {
    id: 1,
    title: "Peluncuran SIMPus 3.0 dengan Fitur AI Assistant",
    excerpt:
      "Perpustakaan STIS dengan bangga memperkenalkan SIMPus versi 3.0 yang dilengkapi dengan AI Assistant untuk membantu pencarian koleksi dan rekomendasi bacaan yang lebih personal.",
    content:
      "Jakarta, 15 Januari 2024 - Perpustakaan Politeknik Statistika STIS resmi meluncurkan Sistem Informasi Manajemen Perpustakaan (SIMPus) versi 3.0 yang menghadirkan berbagai fitur revolusioner. Fitur unggulan adalah AI Assistant yang dapat membantu pengguna dalam mencari koleksi, memberikan rekomendasi bacaan berdasarkan minat dan riwayat baca, serta menjawab pertanyaan seputar layanan perpustakaan.",
    category: "pengumuman",
    author: "Tim IT Perpustakaan",
    date: "2024-01-15",
    views: 1247,
    image: "/placeholder.svg",
    tags: ["teknologi", "ai", "simpus", "update"],
    priority: "high",
  };

  const newsData = [
    {
      id: 2,
      title: "Workshop Literasi Digital untuk Mahasiswa Baru",
      excerpt:
        "Perpustakaan mengadakan workshop literasi digital khusus untuk mahasiswa baru angkatan 2024.",
      category: "event",
      author: "Dr. Siti Nurjannah",
      date: "2024-01-12",
      views: 456,
      image: "/placeholder.svg",
      tags: ["workshop", "literasi", "mahasiswa-baru"],
      priority: "medium",
    },
    {
      id: 3,
      title: "Koleksi E-Book Statistika Terbaru dari Springer",
      excerpt:
        "Perpustakaan menambah 150+ e-book terbaru dalam bidang statistika dan data science.",
      category: "koleksi-baru",
      author: "Pustakawan",
      date: "2024-01-10",
      views: 892,
      image: "/placeholder.svg",
      tags: ["e-book", "statistika", "springer"],
      priority: "medium",
    },
    {
      id: 4,
      title: "Perpanjangan Jam Operasional Selama Masa UAS",
      excerpt:
        "Mulai 20 Januari 2024, perpustakaan akan buka hingga pukul 20:00 WIB selama masa UAS.",
      category: "pengumuman",
      author: "Kepala Perpustakaan",
      date: "2024-01-08",
      views: 1567,
      image: "/placeholder.svg",
      tags: ["jam-buka", "uas", "perpanjangan"],
      priority: "high",
    },
    {
      id: 5,
      title: "Seminar Nasional Data Science 2024",
      excerpt:
        "STIS mengadakan seminar nasional dengan tema 'Big Data dan Machine Learning untuk Pembangunan Indonesia'.",
      category: "event",
      author: "Panitia Seminar",
      date: "2024-01-05",
      views: 723,
      image: "/placeholder.svg",
      tags: ["seminar", "data-science", "machine-learning"],
      priority: "medium",
    },
    {
      id: 6,
      title: "Maintenance Server Perpustakaan",
      excerpt:
        "SIMPus akan mengalami maintenance pada 25 Januari 2024 pukul 02:00-06:00 WIB.",
      category: "pengumuman",
      author: "Tim IT",
      date: "2024-01-03",
      views: 234,
      image: "/placeholder.svg",
      tags: ["maintenance", "server", "simpus"],
      priority: "low",
    },
    {
      id: 7,
      title: "Kerjasama dengan IEEE Digital Library",
      excerpt:
        "Perpustakaan STIS resmi bermitra dengan IEEE untuk akses database jurnal internasional.",
      category: "berita",
      author: "Kepala Perpustakaan",
      date: "2024-01-01",
      views: 945,
      image: "/placeholder.svg",
      tags: ["kerjasama", "ieee", "database"],
      priority: "medium",
    },
    {
      id: 8,
      title: "Program Mahasiswa Mentor Perpustakaan",
      excerpt:
        "Buka pendaftaran program mahasiswa mentor untuk membantu sesama mahasiswa dalam menggunakan layanan perpustakaan.",
      category: "pengumuman",
      author: "Bagian Layanan",
      date: "2023-12-28",
      views: 378,
      image: "/placeholder.svg",
      tags: ["mentor", "mahasiswa", "program"],
      priority: "medium",
    },
    {
      id: 9,
      title: "Pelatihan Penggunaan Database IEEE Xplore",
      excerpt:
        "Workshop khusus untuk mahasiswa dan dosen tentang cara mengakses dan menggunakan database IEEE Xplore secara optimal.",
      category: "event",
      author: "Tim Perpustakaan",
      date: "2023-12-25",
      views: 567,
      image: "/placeholder.svg",
      tags: ["workshop", "ieee", "database"],
      priority: "medium",
    },
    {
      id: 10,
      title: "Penambahan Koleksi Buku Data Science",
      excerpt:
        "Perpustakaan menambah 200+ buku terbaru dalam bidang data science, machine learning, dan artificial intelligence.",
      category: "koleksi-baru",
      author: "Kepala Perpustakaan",
      date: "2023-12-22",
      views: 1123,
      image: "/placeholder.svg",
      tags: ["data-science", "machine-learning", "ai"],
      priority: "high",
    },
    {
      id: 11,
      title: "Gangguan Layanan Internet 30 Desember",
      excerpt:
        "Layanan internet perpustakaan akan mengalami gangguan pada 30 Desember 2023 untuk pemeliharaan infrastruktur.",
      category: "pengumuman",
      author: "Tim IT",
      date: "2023-12-20",
      views: 234,
      image: "/placeholder.svg",
      tags: ["maintenance", "internet", "gangguan"],
      priority: "high",
    },
    {
      id: 12,
      title: "Kuliah Umum: Tren Data Analytics 2024",
      excerpt:
        "Kuliah umum dengan pembicara dari Google Indonesia membahas tren terbaru dalam bidang data analytics.",
      category: "event",
      author: "Humas STIS",
      date: "2023-12-18",
      views: 892,
      image: "/placeholder.svg",
      tags: ["kuliah-umum", "data-analytics", "google"],
      priority: "medium",
    },
    {
      id: 13,
      title: "Kerjasama dengan SpringerNature",
      excerpt:
        "STIS menandatangani kerjasama dengan SpringerNature untuk akses jurnal internasional premium.",
      category: "berita",
      author: "Kepala Perpustakaan",
      date: "2023-12-15",
      views: 678,
      image: "/placeholder.svg",
      tags: ["kerjasama", "springer", "jurnal"],
      priority: "medium",
    },
    {
      id: 14,
      title: "Perpanjangan Masa Berlaku Kartu Anggota",
      excerpt:
        "Masa berlaku kartu anggota perpustakaan untuk mahasiswa angkatan 2021 diperpanjang hingga Juni 2024.",
      category: "pengumuman",
      author: "Bagian Sirkulasi",
      date: "2023-12-12",
      views: 1456,
      image: "/placeholder.svg",
      tags: ["kartu-anggota", "perpanjangan", "mahasiswa"],
      priority: "medium",
    },
    {
      id: 15,
      title: "Webinar Literasi Informasi Digital",
      excerpt:
        "Webinar nasional tentang literasi informasi digital di era big data dan artificial intelligence.",
      category: "event",
      author: "Pustakawan Senior",
      date: "2023-12-10",
      views: 445,
      image: "/placeholder.svg",
      tags: ["webinar", "literasi", "digital"],
      priority: "medium",
    },
    {
      id: 16,
      title: "Pengumuman Libur Akhir Tahun 2023",
      excerpt:
        "Perpustakaan akan tutup mulai 25 Desember 2023 hingga 2 Januari 2024 untuk libur akhir tahun.",
      category: "pengumuman",
      author: "Kepala Perpustakaan",
      date: "2023-12-08",
      views: 2341,
      image: "/placeholder.svg",
      tags: ["libur", "akhir-tahun", "tutup"],
      priority: "high",
    },
    {
      id: 17,
      title: "Peluncuran Repository STIS",
      excerpt:
        "Repository institusi STIS resmi diluncurkan untuk menyimpan dan mendistribusikan karya ilmiah civitas akademika.",
      category: "berita",
      author: "Tim IT Perpustakaan",
      date: "2023-12-05",
      views: 789,
      image: "/placeholder.svg",
      tags: ["repository", "karya-ilmiah", "institusi"],
      priority: "high",
    },
    {
      id: 18,
      title: "Kompetisi Essay Statistika Nasional",
      excerpt:
        "Kompetisi penulisan essay bertema 'Statistika untuk Indonesia Maju' terbuka untuk seluruh mahasiswa.",
      category: "event",
      author: "Panitia Kompetisi",
      date: "2023-12-03",
      views: 623,
      image: "/placeholder.svg",
      tags: ["kompetisi", "essay", "statistika"],
      priority: "medium",
    },
    {
      id: 19,
      title: "Update Kebijakan Peminjaman Buku",
      excerpt:
        "Kebijakan peminjaman buku diperbarui dengan penambahan kategori buku referensi yang dapat dipinjam.",
      category: "pengumuman",
      author: "Bagian Sirkulasi",
      date: "2023-12-01",
      views: 1234,
      image: "/placeholder.svg",
      tags: ["kebijakan", "peminjaman", "referensi"],
      priority: "medium",
    },
    {
      id: 20,
      title: "Koleksi E-Journal Ekonomi Terbaru",
      excerpt:
        "Perpustakaan menambah 50+ e-journal terbaru dalam bidang ekonomi dan bisnis dari penerbit internasional.",
      category: "koleksi-baru",
      author: "Pustakawan",
      date: "2023-11-28",
      views: 567,
      image: "/placeholder.svg",
      tags: ["e-journal", "ekonomi", "bisnis"],
      priority: "medium",
    },
    {
      id: 21,
      title: "Workshop Mendeley untuk Manajemen Referensi",
      excerpt:
        "Pelatihan penggunaan Mendeley untuk membantu mahasiswa dalam manajemen referensi dan sitasi karya ilmiah.",
      category: "event",
      author: "Pustakawan Senior",
      date: "2023-11-25",
      views: 434,
      image: "/placeholder.svg",
      tags: ["workshop", "mendeley", "referensi"],
      priority: "medium",
    },
    {
      id: 22,
      title: "Kerjasama dengan Perpustakaan Nasional RI",
      excerpt:
        "Penandatanganan MoU dengan Perpustakaan Nasional RI untuk pertukaran koleksi dan program literasi.",
      category: "berita",
      author: "Kepala Perpustakaan",
      date: "2023-11-22",
      views: 856,
      image: "/placeholder.svg",
      tags: ["kerjasama", "perpusnas", "mou"],
      priority: "high",
    },
    {
      id: 23,
      title: "Pembaruan Sistem Katalog Online",
      excerpt:
        "Sistem katalog online OPAC mendapat pembaruan fitur dengan tampilan yang lebih user-friendly dan responsif.",
      category: "pengumuman",
      author: "Tim IT",
      date: "2023-11-20",
      views: 678,
      image: "/placeholder.svg",
      tags: ["update", "katalog", "opac"],
      priority: "medium",
    },
    {
      id: 24,
      title: "Seminar Internasional Big Data 2024",
      excerpt:
        "Seminar internasional dengan tema 'Big Data for Sustainable Development' menghadirkan pembicara dari berbagai negara.",
      category: "event",
      author: "Panitia Seminar",
      date: "2023-11-18",
      views: 1245,
      image: "/placeholder.svg",
      tags: ["seminar", "internasional", "big-data"],
      priority: "high",
    },
    {
      id: 25,
      title: "Penambahan Ruang Diskusi Baru",
      excerpt:
        "Perpustakaan menambah 4 ruang diskusi baru di lantai 3 untuk memfasilitasi kegiatan diskusi kelompok mahasiswa.",
      category: "berita",
      author: "Bagian Layanan",
      date: "2023-11-15",
      views: 789,
      image: "/placeholder.svg",
      tags: ["ruang-diskusi", "fasilitas", "mahasiswa"],
      priority: "medium",
    },
    {
      id: 26,
      title: "Koleksi Thesis Digital Angkatan 2023",
      excerpt:
        "Koleksi thesis digital mahasiswa angkatan 2023 telah tersedia dan dapat diakses melalui repository institusi.",
      category: "koleksi-baru",
      author: "Tim Repository",
      date: "2023-11-12",
      views: 923,
      image: "/placeholder.svg",
      tags: ["thesis", "digital", "repository"],
      priority: "medium",
    },
    {
      id: 27,
      title: "Pelatihan Literasi Digital untuk Dosen",
      excerpt:
        "Program pelatihan khusus untuk dosen dalam mengintegrasikan teknologi digital dalam proses pembelajaran.",
      category: "event",
      author: "P3M STIS",
      date: "2023-11-10",
      views: 345,
      image: "/placeholder.svg",
      tags: ["pelatihan", "dosen", "digital"],
      priority: "medium",
    },
    {
      id: 28,
      title: "Perpanjangan Akses Database SAGE",
      excerpt:
        "Akses database SAGE Publications diperpanjang hingga Desember 2024 untuk mendukung penelitian akademik.",
      category: "pengumuman",
      author: "Kepala Perpustakaan",
      date: "2023-11-08",
      views: 567,
      image: "/placeholder.svg",
      tags: ["database", "sage", "perpanjangan"],
      priority: "medium",
    },
    {
      id: 29,
      title: "Lomba Desain Poster Literasi",
      excerpt:
        "Kompetisi desain poster dengan tema 'Literasi untuk Masa Depan Indonesia' terbuka untuk seluruh mahasiswa.",
      category: "event",
      author: "Humas Perpustakaan",
      date: "2023-11-05",
      views: 445,
      image: "/placeholder.svg",
      tags: ["lomba", "poster", "literasi"],
      priority: "medium",
    },
    {
      id: 30,
      title: "Pembukaan Layanan 24 Jam Online",
      excerpt:
        "Layanan perpustakaan online kini tersedia 24 jam untuk akses koleksi digital dan layanan virtual.",
      category: "berita",
      author: "Tim IT Perpustakaan",
      date: "2023-11-03",
      views: 1678,
      image: "/placeholder.svg",
      tags: ["24-jam", "online", "virtual"],
      priority: "high",
    },
    {
      id: 31,
      title: "Koleksi Buku Bahasa Inggris Terbaru",
      excerpt:
        "Penambahan 100+ buku bahasa Inggris terbaru dalam bidang statistika, matematika, dan teknologi informasi.",
      category: "koleksi-baru",
      author: "Pustakawan",
      date: "2023-11-01",
      views: 678,
      image: "/placeholder.svg",
      tags: ["bahasa-inggris", "statistika", "ti"],
      priority: "medium",
    },
    {
      id: 32,
      title: "Maintenance Server Minggu Depan",
      excerpt:
        "Pemeliharaan server utama akan dilakukan pada 5 November 2023 pukul 01:00-05:00 WIB.",
      category: "pengumuman",
      author: "Tim IT",
      date: "2023-10-30",
      views: 234,
      image: "/placeholder.svg",
      tags: ["maintenance", "server", "gangguan"],
      priority: "medium",
    },
    {
      id: 33,
      title: "Forum Diskusi Alumni: Karir di Era Digital",
      excerpt:
        "Forum diskusi dengan alumni STIS yang sukses berkarir di bidang teknologi dan data science.",
      category: "event",
      author: "Alumni Association",
      date: "2023-10-28",
      views: 789,
      image: "/placeholder.svg",
      tags: ["alumni", "karir", "digital"],
      priority: "medium",
    },
    {
      id: 34,
      title: "Kerjasama Research dengan Universitas Terkemuka",
      excerpt:
        "STIS menjalin kerjasama penelitian dengan 5 universitas terkemuka untuk pengembangan ilmu statistika.",
      category: "berita",
      author: "Bagian Penelitian",
      date: "2023-10-25",
      views: 1123,
      image: "/placeholder.svg",
      tags: ["research", "kerjasama", "universitas"],
      priority: "high",
    },
    {
      id: 35,
      title: "Update Aturan Penggunaan Ruang Baca",
      excerpt:
        "Perubahan aturan penggunaan ruang baca untuk meningkatkan kenyamanan dan produktivitas belajar.",
      category: "pengumuman",
      author: "Bagian Layanan",
      date: "2023-10-22",
      views: 567,
      image: "/placeholder.svg",
      tags: ["aturan", "ruang-baca", "produktivitas"],
      priority: "medium",
    },
    {
      id: 36,
      title: "Workshop R Programming untuk Pemula",
      excerpt:
        "Pelatihan dasar pemrograman R untuk analisis statistik bagi mahasiswa semester awal.",
      category: "event",
      author: "Dosen Statistika",
      date: "2023-10-20",
      views: 445,
      image: "/placeholder.svg",
      tags: ["workshop", "r-programming", "statistik"],
      priority: "medium",
    },
    {
      id: 37,
      title: "Koleksi Jurnal Nasional Terakreditasi",
      excerpt:
        "Penambahan koleksi jurnal nasional terakreditasi SINTA untuk mendukung penelitian mahasiswa dan dosen.",
      category: "koleksi-baru",
      author: "Tim Koleksi",
      date: "2023-10-18",
      views: 678,
      image: "/placeholder.svg",
      tags: ["jurnal", "sinta", "terakreditasi"],
      priority: "medium",
    },
    {
      id: 38,
      title: "Pengumuman Seleksi Asisten Pustakawan",
      excerpt:
        "Dibuka kesempatan untuk mahasiswa menjadi asisten pustakawan dengan berbagai benefit menarik.",
      category: "pengumuman",
      author: "HRD Perpustakaan",
      date: "2023-10-15",
      views: 1234,
      image: "/placeholder.svg",
      tags: ["seleksi", "asisten", "mahasiswa"],
      priority: "medium",
    },
    {
      id: 39,
      title: "Seminar Nasional Data Visualization",
      excerpt:
        "Seminar nasional tentang teknik dan tools terbaru dalam visualisasi data untuk berbagai keperluan.",
      category: "event",
      author: "Lab Komputer",
      date: "2023-10-12",
      views: 856,
      image: "/placeholder.svg",
      tags: ["seminar", "visualisasi", "data"],
      priority: "medium",
    },
    {
      id: 40,
      title: "Kerjasama dengan Microsoft Education",
      excerpt:
        "Partnership dengan Microsoft Education memberikan akses gratis ke berbagai tools dan platform pembelajaran.",
      category: "berita",
      author: "Kepala STIS",
      date: "2023-10-10",
      views: 1567,
      image: "/placeholder.svg",
      tags: ["microsoft", "partnership", "education"],
      priority: "high",
    },
    {
      id: 41,
      title: "Program Peer Tutoring Statistika",
      excerpt:
        "Program tutorial sebaya untuk membantu mahasiswa yang mengalami kesulitan dalam mata kuliah statistika.",
      category: "pengumuman",
      author: "Bagian Akademik",
      date: "2023-10-08",
      views: 445,
      image: "/placeholder.svg",
      tags: ["tutoring", "statistika", "bantuan"],
      priority: "medium",
    },
    {
      id: 42,
      title: "Koleksi E-Book Python Programming",
      excerpt:
        "Tambahan koleksi e-book tentang Python programming untuk data science dan machine learning.",
      category: "koleksi-baru",
      author: "Pustakawan IT",
      date: "2023-10-05",
      views: 789,
      image: "/placeholder.svg",
      tags: ["python", "programming", "ebook"],
      priority: "medium",
    },
    {
      id: 43,
      title: "Workshop Citation Management",
      excerpt:
        "Pelatihan manajemen sitasi menggunakan berbagai tools seperti Zotero, EndNote, dan Mendeley.",
      category: "event",
      author: "Pustakawan Senior",
      date: "2023-10-03",
      views: 345,
      image: "/placeholder.svg",
      tags: ["citation", "zotero", "endnote"],
      priority: "medium",
    },
    {
      id: 44,
      title: "Renovasi Area Perpustakaan Lantai 2",
      excerpt:
        "Renovasi area perpustakaan lantai 2 untuk meningkatkan kenyamanan dan kapasitas ruang baca.",
      category: "berita",
      author: "Bagian Umum",
      date: "2023-10-01",
      views: 567,
      image: "/placeholder.svg",
      tags: ["renovasi", "lantai-2", "improvement"],
      priority: "medium",
    },
  ];

  const filteredNews = newsData.filter((news) => {
    const matchesSearch =
      news.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      news.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory =
      selectedCategory === "semua" || news.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  const sortedNews = [...filteredNews].sort((a, b) => {
    switch (selectedSort) {
      case "terbaru":
        return new Date(b.date).getTime() - new Date(a.date).getTime();
      case "terlama":
        return new Date(a.date).getTime() - new Date(b.date).getTime();
      case "populer":
        return b.views - a.views;
      default:
        return 0;
    }
  });

  // Pagination logic
  const totalPages = Math.ceil(sortedNews.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentNews = sortedNews.slice(startIndex, endIndex);

  // Reset to first page when filters change
  const handleCategoryChange = (categoryId: string) => {
    setSelectedCategory(categoryId);
    setCurrentPage(1);
  };

  const handleSortChange = (sortValue: string) => {
    setSelectedSort(sortValue);
    setCurrentPage(1);
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
    setCurrentPage(1);
  };

  const handleSearch = () => {
    // Trigger search functionality (already handled by searchQuery state)
    // Reset to first page when searching
    setCurrentPage(1);

    // Optional: Show feedback to user
    if (searchQuery.trim()) {
      // Search is automatically performed via filteredNews
      console.log(`Searching for: ${searchQuery}`);
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("id-ID", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "high":
        return "bg-red-500";
      case "medium":
        return "bg-yellow-500";
      case "low":
        return "bg-green-500";
      default:
        return "bg-gray-500";
    }
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "pengumuman":
        return Megaphone;
      case "berita":
        return FileText;
      case "event":
        return Calendar;
      case "koleksi-baru":
        return BookOpen;
      default:
        return Bell;
    }
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
              Berita & <span className="text-stis-blue">Pengumuman</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 leading-relaxed">
              Informasi terbaru tentang layanan, kegiatan, dan perkembangan
              Perpustakaan STIS yang perlu Anda ketahui
            </p>
          </div>
        </div>
      </div>

      {/* Featured News */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center gap-2 mb-8">
              <div
                className={`w-3 h-3 ${getPriorityColor(featuredNews.priority)} rounded-full`}
              />
              <Badge className="bg-stis-blue hover:bg-stis-blue-dark">
                Berita Utama
              </Badge>
            </div>

            <Card className="border-0 shadow-lg overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="aspect-video lg:aspect-auto bg-gradient-to-br from-stis-blue-light to-stis-gray-light flex items-center justify-center">
                  <FileText className="w-24 h-24 text-stis-blue/40" />
                </div>
                <CardContent className="p-8">
                  <div className="flex items-center gap-2 mb-4">
                    <Badge variant="outline" className="text-xs">
                      {
                        categories.find(
                          (cat) => cat.id === featuredNews.category,
                        )?.label
                      }
                    </Badge>
                    <div className="flex items-center gap-1 text-xs text-gray-500">
                      <Eye className="w-3 h-3" />
                      <span>{featuredNews.views}</span>
                    </div>
                  </div>

                  <h2 className="text-2xl font-bold text-gray-900 mb-4">
                    {featuredNews.title}
                  </h2>

                  <p className="text-gray-600 leading-relaxed mb-6">
                    {featuredNews.excerpt}
                  </p>

                  <div className="flex items-center justify-between text-sm text-gray-500 mb-6">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-1">
                        <User className="w-4 h-4" />
                        <span>{featuredNews.author}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        <span>{formatDate(featuredNews.date)}</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-1 mb-6">
                    {featuredNews.tags.map((tag, idx) => (
                      <Badge key={idx} variant="outline" className="text-xs">
                        <Tag className="w-3 h-3 mr-1" />
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  <Button
                    className="bg-stis-blue hover:bg-stis-blue-dark"
                    onClick={() => navigate(`/news/${featuredNews.id}`)}
                  >
                    Baca Selengkapnya
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </CardContent>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Search & Filter */}
      <section className="py-8 bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col lg:flex-row gap-6 items-center">
              {/* Search */}
              <div className="flex-1 w-full lg:w-auto">
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <Input
                    type="text"
                    placeholder="Cari berita atau pengumuman..."
                    value={searchQuery}
                    onChange={handleSearchChange}
                    className="pl-12 py-3 text-base rounded-xl border-2 border-gray-200 focus:border-stis-blue"
                  />
                </div>
              </div>

              {/* Sort and Search Button */}
              <div className="flex gap-4 w-full lg:w-auto">
                <Select value={selectedSort} onValueChange={handleSortChange}>
                  <SelectTrigger className="w-full lg:w-36">
                    <SelectValue placeholder="Urutkan" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="terbaru">Terbaru</SelectItem>
                    <SelectItem value="terlama">Terlama</SelectItem>
                    <SelectItem value="populer">Populer</SelectItem>
                  </SelectContent>
                </Select>

                <Button
                  variant="outline"
                  className="border-emerald-600 text-emerald-600 hover:bg-emerald-600 hover:text-white"
                  onClick={handleSearch}
                >
                  <Search className="w-4 h-4 mr-2" />
                  Cari
                </Button>
              </div>
            </div>

            {/* Category Filter */}
            <div className="flex gap-2 flex-wrap justify-center mt-6">
              {categories.map((category) => (
                <Button
                  key={category.id}
                  variant={
                    selectedCategory === category.id ? "default" : "outline"
                  }
                  size="sm"
                  onClick={() => handleCategoryChange(category.id)}
                  className={`${
                    selectedCategory === category.id
                      ? "bg-stis-blue hover:bg-stis-blue-dark"
                      : "border-stis-blue text-stis-blue hover:bg-stis-blue hover:text-white"
                  }`}
                >
                  {category.label}
                  <Badge
                    variant="secondary"
                    className="ml-2 text-xs px-1.5 py-0"
                  >
                    {category.count}
                  </Badge>
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* News List */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <Tabs defaultValue="grid" className="w-full">
              <div className="flex items-center justify-between mb-8">
                <h3 className="text-2xl font-bold text-gray-900">
                  Berita & Pengumuman ({sortedNews.length})
                </h3>
                <TabsList className="grid w-fit grid-cols-2">
                  <TabsTrigger value="grid">Grid</TabsTrigger>
                  <TabsTrigger value="list">List</TabsTrigger>
                </TabsList>
              </div>

              {/* Grid View */}
              <TabsContent value="grid">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {currentNews.map((news) => {
                    const CategoryIcon = getCategoryIcon(news.category);
                    return (
                      <Card
                        key={news.id}
                        className="border-0 shadow-lg hover:shadow-xl transition-shadow overflow-hidden"
                      >
                        <div className="aspect-video bg-gradient-to-br from-stis-blue-light to-stis-gray-light flex items-center justify-center">
                          <CategoryIcon className="w-12 h-12 text-stis-blue/40" />
                        </div>

                        <CardContent className="p-6">
                          <div className="flex items-center gap-2 mb-3">
                            <div
                              className={`w-2 h-2 ${getPriorityColor(news.priority)} rounded-full`}
                            />
                            <Badge variant="outline" className="text-xs">
                              {
                                categories.find(
                                  (cat) => cat.id === news.category,
                                )?.label
                              }
                            </Badge>
                            <div className="flex items-center gap-1 text-xs text-gray-500">
                              <Eye className="w-3 h-3" />
                              <span>{news.views}</span>
                            </div>
                          </div>

                          <h4 className="font-semibold text-gray-900 mb-3 line-clamp-2">
                            {news.title}
                          </h4>

                          <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                            {news.excerpt}
                          </p>

                          <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
                            <div className="flex items-center gap-1">
                              <User className="w-3 h-3" />
                              <span>{news.author}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <Clock className="w-3 h-3" />
                              <span>{formatDate(news.date)}</span>
                            </div>
                          </div>

                          <div className="flex flex-wrap gap-1 mb-4">
                            {news.tags.slice(0, 2).map((tag, idx) => (
                              <Badge
                                key={idx}
                                variant="outline"
                                className="text-xs"
                              >
                                {tag}
                              </Badge>
                            ))}
                            {news.tags.length > 2 && (
                              <Badge variant="outline" className="text-xs">
                                +{news.tags.length - 2}
                              </Badge>
                            )}
                          </div>

                          <Button
                            size="sm"
                            className="w-full bg-stis-blue hover:bg-stis-blue-dark"
                            onClick={() => navigate(`/news/${news.id}`)}
                          >
                            Baca Selengkapnya
                          </Button>
                        </CardContent>
                      </Card>
                    );
                  })}
                </div>
              </TabsContent>

              {/* List View */}
              <TabsContent value="list">
                <div className="space-y-6">
                  {currentNews.map((news) => {
                    const CategoryIcon = getCategoryIcon(news.category);
                    return (
                      <Card
                        key={news.id}
                        className="border-0 shadow-lg hover:shadow-xl transition-shadow"
                      >
                        <CardContent className="p-6">
                          <div className="flex gap-6">
                            <div className="w-24 h-24 bg-gradient-to-br from-stis-blue-light to-stis-gray-light rounded-lg flex items-center justify-center flex-shrink-0">
                              <CategoryIcon className="w-8 h-8 text-stis-blue/40" />
                            </div>

                            <div className="flex-1">
                              <div className="flex items-center gap-2 mb-2">
                                <div
                                  className={`w-2 h-2 ${getPriorityColor(news.priority)} rounded-full`}
                                />
                                <Badge variant="outline" className="text-xs">
                                  {
                                    categories.find(
                                      (cat) => cat.id === news.category,
                                    )?.label
                                  }
                                </Badge>
                                <div className="flex items-center gap-1 text-xs text-gray-500">
                                  <Eye className="w-3 h-3" />
                                  <span>{news.views}</span>
                                </div>
                              </div>

                              <h4 className="text-xl font-semibold text-gray-900 mb-2">
                                {news.title}
                              </h4>

                              <p className="text-gray-600 mb-4 leading-relaxed">
                                {news.excerpt}
                              </p>

                              <div className="flex items-center justify-between">
                                <div className="flex items-center gap-4 text-sm text-gray-500">
                                  <div className="flex items-center gap-1">
                                    <User className="w-4 h-4" />
                                    <span>{news.author}</span>
                                  </div>
                                  <div className="flex items-center gap-1">
                                    <Clock className="w-4 h-4" />
                                    <span>{formatDate(news.date)}</span>
                                  </div>
                                </div>

                                <Button
                                  size="sm"
                                  className="bg-stis-blue hover:bg-stis-blue-dark"
                                  onClick={() => navigate(`/news/${news.id}`)}
                                >
                                  Baca Selengkapnya
                                  <ArrowRight className="w-4 h-4 ml-2" />
                                </Button>
                              </div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    );
                  })}
                </div>
              </TabsContent>
            </Tabs>

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="flex items-center justify-center gap-2 mt-12">
                <Button
                  variant="outline"
                  disabled={currentPage === 1}
                  onClick={() => setCurrentPage(currentPage - 1)}
                >
                  Sebelumnya
                </Button>

                {/* Page numbers */}
                {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                  (page) => {
                    // Show first page, last page, current page, and pages around current page
                    if (
                      page === 1 ||
                      page === totalPages ||
                      (page >= currentPage - 1 && page <= currentPage + 1)
                    ) {
                      return (
                        <Button
                          key={page}
                          variant={currentPage === page ? "default" : "outline"}
                          className={currentPage === page ? "bg-stis-blue" : ""}
                          onClick={() => setCurrentPage(page)}
                        >
                          {page}
                        </Button>
                      );
                    } else if (
                      page === currentPage - 2 ||
                      page === currentPage + 2
                    ) {
                      return (
                        <span key={page} className="px-2">
                          ...
                        </span>
                      );
                    }
                    return null;
                  },
                )}

                <Button
                  variant="outline"
                  disabled={currentPage === totalPages}
                  onClick={() => setCurrentPage(currentPage + 1)}
                >
                  Selanjutnya
                </Button>
              </div>
            )}

            {/* Show pagination info */}
            <div className="text-center mt-4 text-sm text-gray-500">
              Menampilkan {startIndex + 1}-
              {Math.min(endIndex, sortedNews.length)} dari {sortedNews.length}{" "}
              berita
            </div>
          </div>
        </div>
      </section>

      <StandardFooter />

      {/* Help Popup */}
      <HelpPopup pageHelp={helpItems} />
    </div>
  );
}
