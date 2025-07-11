import { useState } from "react";
import {
  Search,
  ChevronDown,
  ChevronUp,
  HelpCircle,
  ThumbsUp,
  ThumbsDown,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import Navigation from "@/components/Navigation";
import HelpPopup from "@/components/HelpPopup";
import StandardFooter from "@/components/StandardFooter";

export default function FAQ() {
  const helpItems = [
    {
      question: "Bagaimana cara mencari FAQ yang spesifik?",
      answer:
        "Gunakan kotak pencarian di atas atau filter berdasarkan kategori untuk menemukan pertanyaan yang Anda cari.",
    },
    {
      question: "Bagaimana jika pertanyaan saya tidak ada di FAQ?",
      answer:
        "Gunakan form 'Ajukan Pertanyaan' di bawah atau hubungi langsung pustakawan melalui kontak yang tersedia.",
    },
    {
      question: "Apakah FAQ ini diupdate secara berkala?",
      answer:
        "Ya, FAQ diperbarui berdasarkan pertanyaan yang sering diajukan pengguna dan perubahan kebijakan perpustakaan.",
    },
  ];
  const [searchQuery, setSearchQuery] = useState("");
  const [openFAQ, setOpenFAQ] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState("semua");
  const [faqVotes, setFaqVotes] = useState<{
    [key: string]: { helpful: number; not_helpful: number };
  }>({});

  const handleVote = (faqId: string, isHelpful: boolean) => {
    setFaqVotes((prev) => {
      const currentVotes = prev[faqId] || { helpful: 0, not_helpful: 0 };
      return {
        ...prev,
        [faqId]: {
          helpful: isHelpful ? currentVotes.helpful + 1 : currentVotes.helpful,
          not_helpful: !isHelpful
            ? currentVotes.not_helpful + 1
            : currentVotes.not_helpful,
        },
      };
    });

    // Show feedback to user
    alert(
      isHelpful
        ? "Terima kasih atas feedback positif Anda!"
        : "Terima kasih atas feedback Anda. Kami akan meningkatkan jawaban ini.",
    );
  };

  const faqCategories = [
    { id: "semua", label: "Semua Kategori", count: 24 },
    { id: "umum", label: "Umum", count: 8 },
    { id: "peminjaman", label: "Peminjaman", count: 7 },
    { id: "digital", label: "Koleksi Digital", count: 5 },
    { id: "teknis", label: "Teknis", count: 4 },
  ];

  const faqs = [
    {
      id: "1",
      category: "umum",
      question: "Bagaimana cara menjadi anggota perpustakaan STIS?",
      answer:
        "Untuk menjadi anggota perpustakaan STIS, Anda perlu: 1) Membawa kartu identitas (KTP/SIM/KTM), 2) Mengisi formulir pendaftaran anggota, 3) Menyerahkan pas foto 3x4 sebanyak 2 lembar, 4) Verifikasi data oleh petugas. Pendaftaran gratis untuk seluruh sivitas akademika STIS (mahasiswa, dosen, karyawan).",
      tags: ["registrasi", "anggota", "pendaftaran"],
      popularity: 95,
      helpful: 87,
      not_helpful: 3,
    },
    {
      id: "2",
      category: "umum",
      question: "Apa saja jam operasional perpustakaan?",
      answer:
        "Perpustakaan STIS buka dengan jadwal: Senin-Jumat: 08:00-16:00 WIB, Sabtu: 08:00-12:00 WIB, Minggu dan hari libur nasional: Tutup. Layanan online (SIMPus, koleksi digital) tersedia 24/7. Untuk informasi perubahan jadwal khusus, silakan cek pengumuman di website atau media sosial perpustakaan.",
      tags: ["jam buka", "operasional", "jadwal"],
      popularity: 92,
      helpful: 156,
      not_helpful: 4,
    },
    {
      id: "3",
      category: "peminjaman",
      question: "Berapa lama masa peminjaman buku?",
      answer:
        "Masa peminjaman berbeda berdasarkan status: Mahasiswa D4: 14 hari (maksimal 3 buku), Dosen/Karyawan: 21 hari (maksimal 5 buku), Mahasiswa magang: 7 hari (maksimal 2 buku). Buku dapat diperpanjang maksimal 2-3 kali tergantung status, dengan syarat tidak ada anggota lain yang mengantri.",
      tags: ["durasi", "peminjaman", "perpanjangan"],
      popularity: 89,
      helpful: 134,
      not_helpful: 7,
    },
    {
      id: "4",
      category: "peminjaman",
      question: "Bagaimana cara memperpanjang masa peminjaman?",
      answer:
        "Perpanjangan bisa dilakukan melalui: 1) Website SIMPus (login dengan akun anggota), 2) Aplikasi mobile SIMPus, 3) Datang langsung ke meja sirkulasi, 4) Telepon ke (021) 8191437 ext. 205. Perpanjangan dapat dilakukan maksimal H-1 sebelum jatuh tempo, dengan syarat buku tidak direservasi anggota lain.",
      tags: ["perpanjangan", "online", "sirkulasi"],
      popularity: 85,
      helpful: 98,
      not_helpful: 2,
    },
    {
      id: "5",
      category: "peminjaman",
      question: "Berapa besar denda keterlambatan pengembalian?",
      answer:
        "Denda keterlambatan adalah Rp 1.000 per hari per buku, dengan maksimal Rp 50.000 per buku. Pembayaran denda dapat dilakukan: tunai di meja sirkulasi, transfer bank (BCA/Mandiri), debit card, atau e-wallet (OVO, GoPay, DANA). Anggota yang memiliki tunggakan denda tidak dapat meminjam buku baru.",
      tags: ["denda", "keterlambatan", "pembayaran"],
      popularity: 82,
      helpful: 145,
      not_helpful: 8,
    },
    {
      id: "6",
      category: "digital",
      question: "Bagaimana cara mengakses koleksi digital perpustakaan?",
      answer:
        "Koleksi digital dapat diakses melalui: 1) Website SIMPus (menu Koleksi Digital), 2) Login dengan akun anggota perpustakaan, 3) Dari dalam kampus: akses langsung, 4) Dari luar kampus: gunakan VPN STIS. Koleksi meliputi e-book, e-journal, database internasional (IEEE, SpringerLink, ScienceDirect), dan repository STIS.",
      tags: ["digital", "e-book", "akses online"],
      popularity: 78,
      helpful: 112,
      not_helpful: 15,
    },
    {
      id: "7",
      category: "digital",
      question: "Apakah bisa mengunduh e-book perpustakaan?",
      answer:
        "Ketentuan download tergantung lisensi: 1) E-book open access: dapat diunduh penuh, 2) E-book berlangganan: hanya dapat dibaca online atau download sementara (24-48 jam), 3) Repository STIS: dapat diunduh penuh, 4) Database komersial: sesuai ketentuan penerbit (biasanya chapter/artikel tertentu). Selalu perhatikan copyright dan fair use.",
      tags: ["download", "e-book", "lisensi"],
      popularity: 71,
      helpful: 89,
      not_helpful: 12,
    },
    {
      id: "8",
      category: "teknis",
      question: "WiFi perpustakaan tidak bisa terkoneksi, bagaimana solusinya?",
      answer:
        "Langkah troubleshooting WiFi: 1) Pastikan menggunakan SSID 'STIS-Library', 2) Password berubah bulanan, tanyakan ke petugas, 3) Restart WiFi di perangkat Anda, 4) Lupa device dari daftar WiFi, lalu sambung ulang, 5) Jika masih bermasalah, lapor ke petugas IT atau meja sirkulasi. Alternatif: gunakan WiFi 'STIS-Student' dengan login akun STIS.",
      tags: ["wifi", "internet", "koneksi"],
      popularity: 68,
      helpful: 76,
      not_helpful: 19,
    },
    {
      id: "9",
      category: "umum",
      question: "Apa saja fasilitas yang tersedia di perpustakaan?",
      answer:
        "Fasilitas perpustakaan meliputi: Ruang baca (150 tempat duduk), 8 ruang diskusi kelompok, 30 unit komputer dengan internet, area digital library, loker penyimpanan, WiFi gratis, layanan print & scan, kantin mini, mushola, toilet, AC central, dan area parkir. Semua fasilitas dapat digunakan gratis oleh anggota perpustakaan.",
      tags: ["fasilitas", "ruang baca", "komputer"],
      popularity: 75,
      helpful: 92,
      not_helpful: 3,
    },
    {
      id: "10",
      category: "peminjaman",
      question: "Bagaimana jika buku yang dipinjam hilang atau rusak?",
      answer:
        "Untuk buku hilang: 1) Laporkan segera ke petugas, 2) Ganti rugi 100% harga buku + biaya administrasi Rp 10.000, 3) Atau ganti dengan buku yang sama (edisi dan penerbit yang sama). Untuk buku rusak: denda 50-100% sesuai tingkat kerusakan yang dinilai petugas. Pembayaran dapat tunai atau transfer.",
      tags: ["hilang", "rusak", "ganti rugi"],
      popularity: 65,
      helpful: 67,
      not_helpful: 8,
    },
    {
      id: "11",
      category: "teknis",
      question: "Bagaimana cara mencetak atau scan dokumen di perpustakaan?",
      answer:
        "Layanan print & scan tersedia di lantai 2: 1) Print: Rp 500/lembar (hitam putih), Rp 1.000/lembar (warna), 2) Scan: Rp 2.000/lembar, 3) Fotokopi: Rp 300/lembar, 4) Pembayaran tunai atau debit card, 5) File bisa dari flashdisk, email, atau cloud storage. Jam layanan: Senin-Jumat 08:00-15:30, Sabtu 08:00-11:30.",
      tags: ["print", "scan", "fotokopi"],
      popularity: 73,
      helpful: 88,
      not_helpful: 5,
    },
    {
      id: "12",
      category: "umum",
      question: "Bolehkah membawa makanan dan minuman ke perpustakaan?",
      answer:
        "Aturan makanan & minuman: DILARANG membawa makanan ke dalam ruang perpustakaan. Minuman hanya diperbolehkan air mineral dalam botol tertutup. Untuk makan, tersedia kantin mini di lantai 1. Area makan khusus tersedia di area kantin. Pelanggaran akan mendapat teguran dari petugas.",
      tags: ["makanan", "minuman", "aturan"],
      popularity: 69,
      helpful: 145,
      not_helpful: 12,
    },
  ];

  const filteredFAQs = faqs.filter((faq) => {
    const matchesSearch =
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.tags.some((tag) =>
        tag.toLowerCase().includes(searchQuery.toLowerCase()),
      );
    const matchesCategory =
      selectedCategory === "semua" || faq.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

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
                    placeholder="Cari pertanyaan atau kata kunci..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-12 py-3 text-base rounded-xl border-2 border-gray-200 focus:border-stis-blue"
                  />
                </div>
              </div>

              {/* Search Button */}
              <div className="flex gap-4 w-full lg:w-auto">
                <Button
                  variant="outline"
                  className="border-emerald-600 text-emerald-600 hover:bg-emerald-600 hover:text-white"
                >
                  <Search className="w-4 h-4 mr-2" />
                  Cari
                </Button>
              </div>
            </div>

            {/* Category Filter */}
            <div className="flex gap-2 flex-wrap justify-center mt-6">
              {faqCategories.map((category) => (
                <Button
                  key={category.id}
                  variant={
                    selectedCategory === category.id ? "default" : "outline"
                  }
                  size="sm"
                  onClick={() => setSelectedCategory(category.id)}
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

      {/* Main Content */}
      <section className="py-16 bg-stis-gray-light">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Daftar FAQ ({filteredFAQs.length})
              </h3>
              <p className="text-gray-600">
                Klik pada pertanyaan untuk melihat jawaban lengkap
              </p>
            </div>

            <div className="space-y-4">
              {filteredFAQs.map((faq) => (
                <Collapsible
                  key={faq.id}
                  open={openFAQ === faq.id}
                  onOpenChange={() =>
                    setOpenFAQ(openFAQ === faq.id ? null : faq.id)
                  }
                >
                  <Card className="border-0 shadow-md hover:shadow-lg transition-shadow">
                    <CollapsibleTrigger asChild>
                      <Button
                        variant="ghost"
                        className="w-full p-6 text-left justify-between hover:bg-gray-50 h-auto"
                      >
                        <div className="flex-1 pr-4">
                          <div className="flex items-center gap-2 mb-2">
                            <Badge variant="outline" className="text-xs">
                              {
                                faqCategories.find(
                                  (cat) => cat.id === faq.category,
                                )?.label
                              }
                            </Badge>
                            <div className="flex items-center gap-1 text-xs text-gray-500">
                              <ThumbsUp className="w-3 h-3" />
                              <span>{faq.helpful}</span>
                            </div>
                          </div>
                          <span className="font-semibold text-gray-900 text-lg text-left block">
                            {faq.question}
                          </span>
                        </div>
                        {openFAQ === faq.id ? (
                          <ChevronUp className="w-5 h-5 text-gray-500 flex-shrink-0" />
                        ) : (
                          <ChevronDown className="w-5 h-5 text-gray-500 flex-shrink-0" />
                        )}
                      </Button>
                    </CollapsibleTrigger>
                    <CollapsibleContent>
                      <div className="px-6 pb-6">
                        <div className="bg-stis-blue-light rounded-lg p-4 mb-4">
                          <p className="text-gray-800 leading-relaxed">
                            {faq.answer}
                          </p>
                        </div>

                        <div className="flex items-center justify-between">
                          <div className="flex flex-wrap gap-1">
                            {faq.tags.map((tag, idx) => (
                              <Badge
                                key={idx}
                                variant="outline"
                                className="text-xs"
                              >
                                {tag}
                              </Badge>
                            ))}
                          </div>

                          <div className="flex items-center gap-4">
                            <span className="text-sm text-gray-500">
                              Apakah jawaban ini membantu?
                            </span>
                            <div className="flex gap-2">
                              <Button
                                size="sm"
                                variant="outline"
                                className="border-green-300 text-green-600 hover:bg-green-600 hover:text-white"
                                onClick={() => handleVote(faq.id, true)}
                              >
                                <ThumbsUp className="w-4 h-4 mr-1" />
                                Ya (
                                {(faqVotes[faq.id]?.helpful || 0) + faq.helpful}
                                )
                              </Button>
                              <Button
                                size="sm"
                                variant="outline"
                                className="border-red-300 text-red-600 hover:bg-red-600 hover:text-white"
                                onClick={() => handleVote(faq.id, false)}
                              >
                                <ThumbsDown className="w-4 h-4 mr-1" />
                                Tidak (
                                {(faqVotes[faq.id]?.not_helpful || 0) +
                                  faq.not_helpful}
                                )
                              </Button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CollapsibleContent>
                  </Card>
                </Collapsible>
              ))}
            </div>

            {filteredFAQs.length === 0 && (
              <Card className="border-0 shadow-lg">
                <CardContent className="p-12 text-center">
                  <HelpCircle className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                  <h3 className="text-lg font-medium text-gray-900 mb-2">
                    Tidak ada FAQ yang ditemukan
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Coba ubah kata kunci pencarian atau kategori yang dipilih.
                  </p>
                  <Button
                    onClick={() => {
                      setSearchQuery("");
                      setSelectedCategory("semua");
                    }}
                    className="bg-stis-blue hover:bg-stis-blue-dark"
                  >
                    Reset Filter
                  </Button>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </section>

      <StandardFooter />

      {/* Help Popup */}
      <HelpPopup pageHelp={helpItems} />
    </div>
  );
}
