import { useState } from "react";
import {
  Search,
  ChevronDown,
  ChevronUp,
  BookOpen,
  UserCheck,
  RotateCcw,
  CreditCard,
  Phone,
  Mail,
  MessageCircle,
  Download,
  Video,
  FileText,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

export default function Help() {
  const [searchQuery, setSearchQuery] = useState("");
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const quickHelp = [
    {
      icon: BookOpen,
      title: "Cara Meminjam Buku",
      description: "Panduan lengkap untuk meminjam buku dari perpustakaan",
      category: "Peminjaman",
    },
    {
      icon: UserCheck,
      title: "Pendaftaran Anggota",
      description: "Langkah-langkah mendaftar sebagai anggota perpustakaan",
      category: "Registrasi",
    },
    {
      icon: RotateCcw,
      title: "Perpanjangan Buku",
      description: "Cara memperpanjang masa peminjaman buku online",
      category: "Peminjaman",
    },
    {
      icon: CreditCard,
      title: "Pembayaran Denda",
      description: "Metode pembayaran denda keterlambatan pengembalian",
      category: "Pembayaran",
    },
  ];

  const faqs = [
    {
      category: "Umum",
      questions: [
        {
          question: "Bagaimana cara menjadi anggota perpustakaan STIS?",
          answer:
            "Untuk menjadi anggota perpustakaan STIS, Anda perlu membawa kartu identitas (KTP/SIM), pas foto 3x4 sebanyak 2 lembar, dan mengisi formulir pendaftaran. Pendaftaran gratis untuk mahasiswa, dosen, dan karyawan STIS.",
        },
        {
          question: "Jam operasional perpustakaan?",
          answer:
            "Perpustakaan STIS buka Senin-Jumat pukul 08:00-16:00 WIB. Pada hari Sabtu buka pukul 08:00-12:00 WIB. Layanan online tersedia 24/7.",
        },
        {
          question: "Apa saja fasilitas yang tersedia di perpustakaan?",
          answer:
            "Fasilitas yang tersedia meliputi: ruang baca, area diskusi, komputer akses internet, WiFi gratis, printer/scanner, loker, AC, dan area parkir.",
        },
      ],
    },
    {
      category: "Peminjaman",
      questions: [
        {
          question: "Berapa lama masa peminjaman buku?",
          answer:
            "Masa peminjaman untuk mahasiswa adalah 14 hari, dosen/karyawan 21 hari. Buku dapat diperpanjang maksimal 2 kali jika tidak ada yang mengantri.",
        },
        {
          question: "Berapa batas maksimal buku yang bisa dipinjam?",
          answer:
            "Mahasiswa dapat meminjam maksimal 3 buku, sedangkan dosen/karyawan dapat meminjam maksimal 5 buku secara bersamaan.",
        },
        {
          question: "Bagaimana cara memperpanjang peminjaman?",
          answer:
            "Peminjaman dapat diperpanjang melalui website SIMPus, datang langsung ke perpustakaan, atau menghubungi petugas perpustakaan via telepon/email.",
        },
      ],
    },
    {
      category: "Denda & Sanksi",
      questions: [
        {
          question: "Berapa besar denda keterlambatan?",
          answer:
            "Denda keterlambatan adalah Rp 1.000 per hari per buku. Pembayaran denda dapat dilakukan di kasir perpustakaan atau melalui transfer bank.",
        },
        {
          question: "Apa sanksi jika buku hilang atau rusak?",
          answer:
            "Jika buku hilang, peminjam wajib mengganti dengan buku yang sama atau membayar ganti rugi sesuai harga buku. Untuk buku rusak, dikenakan denda sesuai tingkat kerusakan.",
        },
      ],
    },
  ];

  const tutorials = [
    {
      title: "Cara Menggunakan Katalog Online",
      duration: "5 menit",
      type: "video",
      description:
        "Tutorial step-by-step menggunakan sistem pencarian katalog online",
    },
    {
      title: "Panduan Akses E-Journal",
      duration: "3 menit",
      type: "pdf",
      description: "Dokumentasi lengkap cara mengakses jurnal elektronik",
    },
    {
      title: "Tutorial Reservasi Ruang Baca",
      duration: "7 menit",
      type: "video",
      description: "Cara melakukan reservasi ruang baca dan diskusi online",
    },
  ];

  const contactMethods = [
    {
      icon: Phone,
      title: "Telepon",
      info: "(021) 8191437",
      description: "Senin - Jumat, 08:00 - 16:00 WIB",
    },
    {
      icon: Mail,
      title: "Email",
      info: "perpustakaan@stis.ac.id",
      description: "Respon dalam 24 jam",
    },
    {
      icon: MessageCircle,
      title: "Live Chat",
      info: "Chat Online",
      description: "Bantuan langsung dari petugas",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-gradient-to-br from-stis-blue-light via-white to-stis-gray-light pt-24 pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              Pusat <span className="text-stis-blue">Bantuan</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 mb-8">
              Temukan jawaban untuk pertanyaan Anda atau hubungi tim support
              kami
            </p>

            {/* Search Bar */}
            <div className="max-w-2xl mx-auto relative">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <Input
                  type="text"
                  placeholder="Cari panduan, FAQ, atau topik bantuan..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-12 pr-24 py-4 text-lg rounded-xl border-2 border-gray-200 focus:border-stis-blue"
                />
                <Button
                  size="lg"
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-stis-blue hover:bg-stis-blue-dark rounded-lg"
                >
                  Cari
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Help */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Bantuan Cepat
            </h2>
            <p className="text-lg text-gray-600">
              Panduan populer yang sering dicari
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {quickHelp.map((help, index) => {
              const IconComponent = help.icon;
              return (
                <Card
                  key={index}
                  className="group hover:shadow-lg transition-all duration-300 cursor-pointer border-0 shadow-md"
                >
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 bg-stis-blue/10 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-stis-blue/20 transition-colors">
                      <IconComponent className="w-8 h-8 text-stis-blue" />
                    </div>
                    <Badge variant="secondary" className="mb-3">
                      {help.category}
                    </Badge>
                    <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-stis-blue transition-colors">
                      {help.title}
                    </h3>
                    <p className="text-sm text-gray-600">{help.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Main Help Content */}
      <section className="py-16 bg-stis-gray-light">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Tabs defaultValue="faq" className="w-full">
            <TabsList className="grid w-full grid-cols-3 max-w-md mx-auto mb-12">
              <TabsTrigger value="faq">FAQ</TabsTrigger>
              <TabsTrigger value="tutorials">Tutorial</TabsTrigger>
              <TabsTrigger value="contact">Kontak</TabsTrigger>
            </TabsList>

            <TabsContent value="faq">
              <div className="max-w-4xl mx-auto">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    Frequently Asked Questions
                  </h3>
                  <p className="text-gray-600">
                    Jawaban untuk pertanyaan yang paling sering ditanyakan
                  </p>
                </div>

                {faqs.map((category, categoryIndex) => (
                  <div key={categoryIndex} className="mb-8">
                    <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                      <div className="w-2 h-2 bg-stis-blue rounded-full mr-3"></div>
                      {category.category}
                    </h4>
                    <div className="space-y-3">
                      {category.questions.map((faq, faqIndex) => {
                        const globalIndex = categoryIndex * 10 + faqIndex;
                        return (
                          <Collapsible
                            key={globalIndex}
                            open={openFAQ === globalIndex}
                            onOpenChange={() =>
                              setOpenFAQ(
                                openFAQ === globalIndex ? null : globalIndex,
                              )
                            }
                          >
                            <Card className="border-0 shadow-md hover:shadow-lg transition-shadow">
                              <CollapsibleTrigger asChild>
                                <Button
                                  variant="ghost"
                                  className="w-full p-6 text-left justify-between hover:bg-gray-50"
                                >
                                  <span className="font-medium text-gray-900">
                                    {faq.question}
                                  </span>
                                  {openFAQ === globalIndex ? (
                                    <ChevronUp className="w-5 h-5 text-gray-500" />
                                  ) : (
                                    <ChevronDown className="w-5 h-5 text-gray-500" />
                                  )}
                                </Button>
                              </CollapsibleTrigger>
                              <CollapsibleContent>
                                <div className="px-6 pb-6">
                                  <p className="text-gray-600 leading-relaxed">
                                    {faq.answer}
                                  </p>
                                </div>
                              </CollapsibleContent>
                            </Card>
                          </Collapsible>
                        );
                      })}
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="tutorials">
              <div className="max-w-4xl mx-auto">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    Tutorial & Panduan
                  </h3>
                  <p className="text-gray-600">
                    Video tutorial dan dokumentasi untuk membantu Anda
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {tutorials.map((tutorial, index) => (
                    <Card
                      key={index}
                      className="hover:shadow-lg transition-shadow border-0 shadow-md"
                    >
                      <CardContent className="p-6">
                        <div className="flex items-center mb-4">
                          <div className="w-12 h-12 bg-stis-cyan/10 rounded-lg flex items-center justify-center mr-4">
                            {tutorial.type === "video" ? (
                              <Video className="w-6 h-6 text-stis-cyan" />
                            ) : (
                              <FileText className="w-6 h-6 text-stis-cyan" />
                            )}
                          </div>
                          <div>
                            <Badge variant="secondary" className="text-xs">
                              {tutorial.type === "video" ? "Video" : "PDF"}
                            </Badge>
                            <p className="text-xs text-gray-500 mt-1">
                              {tutorial.duration}
                            </p>
                          </div>
                        </div>
                        <h4 className="font-semibold text-gray-900 mb-2">
                          {tutorial.title}
                        </h4>
                        <p className="text-sm text-gray-600 mb-4">
                          {tutorial.description}
                        </p>
                        <Button
                          size="sm"
                          className="w-full bg-stis-cyan hover:bg-stis-cyan/90"
                        >
                          <Download className="w-4 h-4 mr-2" />
                          {tutorial.type === "video" ? "Tonton" : "Unduh"}
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </TabsContent>

            <TabsContent value="contact">
              <div className="max-w-4xl mx-auto">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    Hubungi Kami
                  </h3>
                  <p className="text-gray-600">
                    Tim support siap membantu Anda
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                  {contactMethods.map((method, index) => {
                    const IconComponent = method.icon;
                    return (
                      <Card
                        key={index}
                        className="hover:shadow-lg transition-shadow cursor-pointer border-0 shadow-md"
                      >
                        <CardContent className="p-6 text-center">
                          <div className="w-16 h-16 bg-stis-blue/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                            <IconComponent className="w-8 h-8 text-stis-blue" />
                          </div>
                          <h4 className="font-semibold text-gray-900 mb-2">
                            {method.title}
                          </h4>
                          <p className="text-stis-blue font-medium mb-2">
                            {method.info}
                          </p>
                          <p className="text-sm text-gray-600">
                            {method.description}
                          </p>
                        </CardContent>
                      </Card>
                    );
                  })}
                </div>

                {/* Contact Form */}
                <Card className="border-0 shadow-lg">
                  <CardContent className="p-8">
                    <h4 className="text-xl font-semibold text-gray-900 mb-6 text-center">
                      Kirim Pesan
                    </h4>
                    <form className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Nama Lengkap
                          </label>
                          <Input placeholder="Masukkan nama lengkap" />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Email
                          </label>
                          <Input type="email" placeholder="contoh@email.com" />
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Subjek
                        </label>
                        <Input placeholder="Ringkasan masalah atau pertanyaan" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Pesan
                        </label>
                        <textarea
                          rows={5}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-stis-blue focus:border-transparent"
                          placeholder="Jelaskan masalah atau pertanyaan Anda dengan detail..."
                        ></textarea>
                      </div>
                      <Button
                        size="lg"
                        className="w-full bg-stis-blue hover:bg-stis-blue-dark"
                      >
                        Kirim Pesan
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </div>
  );
}
