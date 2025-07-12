export interface SearchResult {
  id: string;
  title: string;
  description: string;
  content: string;
  url: string;
  category: string;
  tags?: string[];
}

export const searchData: SearchResult[] = [
  // Homepage Content
  {
    id: "home",
    title: "Beranda - SIMPus Polstat STIS",
    description:
      "Halaman utama sistem informasi manajemen perpustakaan Polstat STIS",
    content:
      "beranda homepage simpus perpustakaan polstat stis layanan fasilitas koleksi buku digital repository sirkulasi surat bebas perpustakaan jam operasional pengumuman berita",
    url: "/",
    category: "Umum",
    tags: ["beranda", "homepage", "layanan", "fasilitas"],
  },

  // About Section
  {
    id: "about-profile",
    title: "Profil Perpustakaan",
    description: "Informasi lengkap tentang profil Perpustakaan Polstat STIS",
    content:
      "profil perpustakaan polstat stis sejarah perkembangan visi misi tujuan sasaran koleksi layanan fasilitas teknologi informasi",
    url: "/about/profile",
    category: "Tentang Kami",
    tags: ["profil", "sejarah", "informasi"],
  },
  {
    id: "about-structure",
    title: "Struktur Organisasi",
    description: "Struktur organisasi dan manajemen Perpustakaan Polstat STIS",
    content:
      "struktur organisasi manajemen perpustakaan kepala unit staff karyawan jabatan tugas tanggung jawab organisasi institusi",
    url: "/about/structure",
    category: "Tentang Kami",
    tags: ["organisasi", "struktur", "manajemen", "staff"],
  },
  {
    id: "about-vision",
    title: "Visi, Misi & Tujuan",
    description: "Visi, misi, dan tujuan Perpustakaan Polstat STIS",
    content:
      "visi misi tujuan perpustakaan polstat stis strategic plan rencana strategis sasaran target pencapaian kualitas layanan",
    url: "/about/vision",
    category: "Tentang Kami",
    tags: ["visi", "misi", "tujuan", "strategic"],
  },
  {
    id: "about-facilities",
    title: "Fasilitas Perpustakaan",
    description:
      "Berbagai fasilitas dan amenitas yang tersedia di perpustakaan",
    content:
      "fasilitas perpustakaan ruang baca ruang diskusi loker wifi internet komputer printer scanner ac ruang kedap suara audio visual",
    url: "/about/facilities",
    category: "Tentang Kami",
    tags: ["fasilitas", "ruang", "wifi", "komputer"],
  },

  // Collection Section
  {
    id: "collection-books",
    title: "Koleksi Buku Cetak",
    description: "Katalog dan pencarian koleksi buku cetak perpustakaan",
    content:
      "koleksi buku cetak katalog pencarian ISBN penulis judul penerbit tahun terbit subjek statistika ekonomi matematika penelitian metodologi",
    url: "/collection/books",
    category: "Koleksi",
    tags: ["buku", "katalog", "pencarian", "cetak", "statistika"],
  },
  {
    id: "collection-digital",
    title: "Koleksi Digital",
    description: "E-book, e-journal, dan sumber daya digital",
    content:
      "koleksi digital ebook ejurnal journal elektronik database online sumber daya digital akses remote artikel jurnal penelitian akademik",
    url: "/collection/digital",
    category: "Koleksi",
    tags: ["digital", "ebook", "ejurnal", "database", "online"],
  },
  {
    id: "collection-repository",
    title: "Repository Polstat STIS",
    description: "Repositori karya ilmiah mahasiswa dan dosen",
    content:
      "repository repositori karya ilmiah mahasiswa dosen tugas akhir skripsi tesis disertasi penelitian publikasi akademik institutional repository",
    url: "/collection/repository",
    category: "Koleksi",
    tags: ["repository", "skripsi", "tesis", "karya ilmiah", "akademik"],
  },
  {
    id: "collection-borrowing-history",
    title: "Riwayat Peminjaman",
    description: "Riwayat peminjaman buku dan material perpustakaan",
    content:
      "riwayat peminjaman sejarah pinjam buku material perpustakaan tanggal peminjaman pengembalian denda status",
    url: "/collection/borrowing-history",
    category: "Koleksi",
    tags: ["riwayat", "peminjaman", "pinjam", "sejarah"],
  },
  {
    id: "collection-reading-history",
    title: "Riwayat Membaca",
    description: "Riwayat aktivitas membaca dan akses digital",
    content:
      "riwayat membaca reading history aktivitas baca akses digital ebook jurnal artikel bacaan preferensi",
    url: "/collection/reading-history",
    category: "Koleksi",
    tags: ["riwayat", "membaca", "reading", "akses"],
  },

  // Services Section
  {
    id: "services-circulation",
    title: "Layanan Sirkulasi",
    description: "Sistem manajemen peminjaman dan pengembalian buku",
    content:
      "layanan sirkulasi peminjaman pengembalian buku perpanjangan reservasi proses langkah cara meminjam buku koleksi",
    url: "/services/circulation",
    category: "Layanan",
    tags: ["sirkulasi", "peminjaman", "pengembalian", "perpanjangan"],
  },
  {
    id: "services-clearance",
    title: "Surat Bebas Perpustakaan",
    description: "Pengurusan surat keterangan bebas perpustakaan",
    content:
      "surat bebas perpustakaan clearance keterangan bebas tanggungan graduation wisuda pengurusan persyaratan administrasi",
    url: "/services/clearance",
    category: "Layanan",
    tags: ["surat bebas", "clearance", "wisuda", "graduation"],
  },

  // Information Section
  {
    id: "info-rules",
    title: "Peraturan Perpustakaan",
    description:
      "Tata tertib dan peraturan perpustakaan lengkap termasuk peminjaman",
    content:
      "peraturan tata tertib perpustakaan aturan penggunaan fasilitas sanksi denda ketentuan kewajiban hak pemustaka peminjaman pengembalian buku keterlambatan maksimal masa pinjam mahasiswa dosen staff ktm id card",
    url: "/info/rules",
    category: "Informasi",
    tags: [
      "peraturan",
      "tata tertib",
      "aturan",
      "sanksi",
      "peminjaman",
      "denda",
    ],
  },
  {
    id: "info-faq",
    title: "FAQ - Pertanyaan Umum",
    description: "Pertanyaan yang sering diajukan tentang layanan perpustakaan",
    content:
      "faq frequently asked questions pertanyaan umum jawaban bantuan help troubleshooting cara penggunaan layanan",
    url: "/info/faq",
    category: "Informasi",
    tags: ["faq", "pertanyaan", "bantuan", "help"],
  },
  {
    id: "info-contact",
    title: "Kontak & Lokasi",
    description: "Informasi kontak dan lokasi perpustakaan",
    content:
      "kontak contact alamat lokasi telepon email peta maps lokasi kampus perpustakaan polstat stis jakarta timur otto iskandardinata",
    url: "/info/contact",
    category: "Informasi",
    tags: ["kontak", "alamat", "telepon", "lokasi", "peta"],
  },
  {
    id: "info-map",
    title: "Peta Lokasi",
    description: "Peta dan panduan lokasi perpustakaan",
    content:
      "peta maps lokasi perpustakaan kampus polstat stis jakarta timur jalan otto iskandardinata arah transportasi akses",
    url: "/info/map",
    category: "Informasi",
    tags: ["peta", "maps", "lokasi", "arah", "transportasi"],
  },
  {
    id: "info-news",
    title: "Berita & Pengumuman",
    description: "Berita terbaru dan pengumuman perpustakaan",
    content:
      "berita news pengumuman announcement update informasi terbaru kegiatan event workshop seminar koleksi baru layanan",
    url: "/info/news",
    category: "Informasi",
    tags: ["berita", "pengumuman", "news", "event", "update"],
  },

  // User Pages
  {
    id: "login",
    title: "Login - Masuk Sistem",
    description: "Halaman login untuk mengakses layanan perpustakaan",
    content:
      "login masuk akses sistem akun account authentication google email password registrasi daftar",
    url: "/login",
    category: "Akun",
    tags: ["login", "masuk", "akun", "authentication"],
  },
  {
    id: "profile",
    title: "Profil Pengguna",
    description: "Halaman profil dan pengaturan akun pengguna",
    content:
      "profil pengguna user profile account settings pengaturan akun personal data biodata edit update",
    url: "/profile",
    category: "Akun",
    tags: ["profil", "user", "account", "settings"],
  },
  {
    id: "borrow-book",
    title: "Pinjam Buku",
    description: "Formulir dan proses peminjaman buku",
    content:
      "pinjam buku borrowing form formulir peminjaman request booking reservasi pilih buku durasi peminjaman",
    url: "/borrow-book",
    category: "Layanan",
    tags: ["pinjam", "buku", "borrowing", "form", "reservasi"],
  },

  // Additional searchable content
  {
    id: "operational-hours",
    title: "Jam Operasional",
    description: "Jadwal operasional perpustakaan",
    content:
      "jam operasional jadwal buka tutup senin selasa rabu kamis jumat sabtu minggu libur nasional waktu layanan",
    url: "/#operational-hours",
    category: "Informasi",
    tags: ["jam", "operasional", "jadwal", "buka", "tutup"],
  },
  {
    id: "library-statistics",
    title: "Statistik Perpustakaan",
    description: "Data statistik koleksi dan layanan perpustakaan",
    content:
      "statistik data koleksi buku ebook ejurnal digital akses online pengunjung peminjaman pengembalian",
    url: "/#statistics",
    category: "Informasi",
    tags: ["statistik", "data", "koleksi", "pengunjung"],
  },
  // Common search terms and variations
  {
    id: "help-general",
    title: "Bantuan & Tutorial",
    description: "Panduan penggunaan sistem dan bantuan umum",
    content:
      "bantuan help tutorial panduan cara menggunakan sistem perpustakaan troubleshooting masalah error solusi",
    url: "/info/faq",
    category: "Informasi",
    tags: ["bantuan", "help", "tutorial", "panduan"],
  },
  {
    id: "download-forms",
    title: "Download Formulir",
    description: "Unduh formulir dan dokumen perpustakaan",
    content:
      "download unduh formulir form dokumen surat permohonan aplikasi pdf template blanko",
    url: "/info/contact",
    category: "Layanan",
    tags: ["download", "formulir", "dokumen", "surat"],
  },
  {
    id: "wifi-internet",
    title: "WiFi & Internet",
    description: "Akses internet dan WiFi di perpustakaan",
    content:
      "wifi internet akses jaringan network koneksi password ssid online browsing",
    url: "/about/facilities",
    category: "Fasilitas",
    tags: ["wifi", "internet", "jaringan", "akses"],
  },
  {
    id: "thesis-submission",
    title: "Submit Tugas Akhir",
    description: "Pengajuan dan penyimpanan tugas akhir ke repository",
    content:
      "submit upload tugas akhir skripsi tesis repository pengajuan penyimpanan digital archive",
    url: "/collection/repository",
    category: "Layanan",
    tags: ["submit", "upload", "tugas akhir", "repository"],
  },
];

export function searchContent(query: string): SearchResult[] {
  if (!query.trim()) return [];

  const searchTerms = query.toLowerCase().split(/\s+/);

  return searchData
    .map((item) => {
      let score = 0;
      const searchableText =
        `${item.title} ${item.description} ${item.content} ${item.tags?.join(" ") || ""}`.toLowerCase();

      // Calculate relevance score
      searchTerms.forEach((term) => {
        // Title matches get highest score
        if (item.title.toLowerCase().includes(term)) {
          score += 10;
        }
        // Description matches get medium score
        if (item.description.toLowerCase().includes(term)) {
          score += 5;
        }
        // Content matches get lower score
        if (item.content.toLowerCase().includes(term)) {
          score += 2;
        }
        // Tag matches get medium score
        if (item.tags?.some((tag) => tag.toLowerCase().includes(term))) {
          score += 7;
        }
      });

      // Bonus for exact phrase matches
      if (searchableText.includes(query.toLowerCase())) {
        score += 15;
      }

      return { ...item, score };
    })
    .filter((item) => item.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, 10); // Return top 10 results
}
