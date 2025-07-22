import { useState, useEffect } from "react";
import {
  Search,
  Filter,
  BookOpen,
  Calendar,
  CheckCircle,
  Clock,
  AlertCircle,
  RotateCcw,
  Download,
  Eye,
  Lock,
  Phone,
  MapPin,
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
import { useAuth } from "@/contexts/AuthContext";
import { useBorrowedBooks } from "@/contexts/BorrowedBooksContext";

export default function BorrowingHistory() {
  const { isAuthenticated, user } = useAuth();
  const { getBorrowedBooksByUser } = useBorrowedBooks();

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-white">
        <Navigation />
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-stis-blue-light via-white to-stis-gray-light pt-16">
          <div className="text-center max-w-md mx-auto px-4">
            <div className="w-24 h-24 bg-stis-blue/10 rounded-full flex items-center justify-center mx-auto mb-8">
              <Lock className="w-12 h-12 text-stis-blue" />
            </div>
            <h1 className="text-2xl font-bold text-gray-900 mb-4">
              Login Diperlukan
            </h1>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Silakan login terlebih dahulu untuk mengakses riwayat peminjaman
              Anda.
            </p>
            <a href="/login">
              <Button className="bg-stis-blue hover:bg-stis-blue-dark text-white px-6 py-3 rounded-lg">
                Login Sekarang
              </Button>
            </a>
          </div>
        </div>
      </div>
    );
  }
  const helpItems = [
    {
      question: "Bagaimana cara memperpanjang peminjaman?",
      answer:
        "Klik tombol 'Perpanjang' pada buku yang ingin diperpanjang, atau datang langsung ke perpustakaan.",
    },
    {
      question: "Bagaimana jika saya terlambat mengembalikan buku?",
      answer:
        "Akan ada denda keterlambatan. Segera kembalikan buku dan bayar denda di meja sirkulasi.",
    },
    {
      question: "Berapa batas maksimal peminjaman?",
      answer:
        "Mahasiswa: 3 buku, Dosen: 5 buku. Perpanjangan maksimal 2 kali jika tidak ada antrian.",
    },
  ];
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedStatus, setSelectedStatus] = useState("semua");
  const [selectedPeriod, setSelectedPeriod] = useState("semua");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  // Search and pagination for current borrowings
  const [currentBorrowingsSearch, setCurrentBorrowingsSearch] = useState("");
  const [currentBorrowingsPage, setCurrentBorrowingsPage] = useState(1);
  const [currentBorrowingsStatus, setCurrentBorrowingsStatus] =
    useState("semua");
  const [currentBorrowingsRenewal, setCurrentBorrowingsRenewal] =
    useState("semua");
  const currentBorrowingsPerPage = 5;
  const [selectedBook, setSelectedBook] = useState<any>(null);
  const [showDetailModal, setShowDetailModal] = useState(false);
  const [showQRISModal, setShowQRISModal] = useState(false);
  const [paymentAmount, setPaymentAmount] = useState(0);
  const [showExtensionModal, setShowExtensionModal] = useState(false);
  const [extensionBook, setExtensionBook] = useState<any>(null);

  const borrowingStats = [
    {
      type: "Total Pinjaman",
      count: 147,
      icon: BookOpen,
      color: "text-stis-blue",
    },
    {
      type: "Sedang Dipinjam",
      count: 3,
      icon: Clock,
      color: "text-orange-500",
    },
    {
      type: "Sudah Dikembalikan",
      count: 144,
      icon: CheckCircle,
      color: "text-stis-blue",
    },
    { type: "Terlambat", count: 2, icon: AlertCircle, color: "text-red-500" },
  ];

  // Get dynamically borrowed books from context
  const contextBorrowedBooks = user ? getBorrowedBooksByUser(user.email) : [];

  // Convert context books to current borrowings format
  const dynamicBorrowings = contextBorrowedBooks.map((book, index) => {
    const borrowDate = new Date(book.borrowedDate);
    const dueDate = new Date(borrowDate.getTime() + 14 * 24 * 60 * 60 * 1000); // 14 days
    const today = new Date();
    const daysRemaining = Math.ceil(
      (dueDate.getTime() - today.getTime()) / (1000 * 60 * 60 * 24),
    );

    return {
      id: parseInt(book.id) + 100, // Offset to avoid conflicts with static data
      title: book.title,
      authors: [book.author],
      isbn: `978-${Math.random().toString().substring(2, 15)}`, // Generate fake ISBN
      call_number: `AUTO-${book.id}`,
      borrowed_date: book.borrowedDate,
      due_date: dueDate.toISOString().split("T")[0],
      status: daysRemaining >= 0 ? "Dipinjam" : "Terlambat",
      days_remaining: daysRemaining >= 0 ? daysRemaining : undefined,
      days_overdue: daysRemaining < 0 ? Math.abs(daysRemaining) : undefined,
      renewal_count: 0,
      can_renew: true,
      fine: daysRemaining < 0 ? Math.abs(daysRemaining) * 1000 : undefined,
    };
  });

  const staticBorrowings = [
    {
      id: 1,
      title: "Statistika Dasar: Teori dan Aplikasi",
      authors: ["Prof. Dr. Supranto, M.A."],
      isbn: "978-602-298-123-4",
      call_number: "A1.2.3",
      borrowed_date: "2024-01-15",
      due_date: "2024-01-29",
      status: "Dipinjam",
      days_remaining: 5,
      renewal_count: 1,
      can_renew: true,
    },
    {
      id: 2,
      title: "R for Data Science",
      authors: ["Hadley Wickham", "Garrett Grolemund"],
      isbn: "978-149-205-170-4",
      call_number: "D2.2.4",
      borrowed_date: "2024-01-10",
      due_date: "2024-01-24",
      status: "Terlambat",
      days_overdue: 3,
      renewal_count: 2,
      can_renew: false,
      fine: 3000,
    },
    {
      id: 3,
      title: "Machine Learning untuk Analisis Data",
      authors: ["Dr. Budi Raharjo"],
      isbn: "978-602-291-456-7",
      call_number: "C3.1.8",
      borrowed_date: "2024-01-20",
      due_date: "2024-02-03",
      status: "Dipinjam",
      days_remaining: 10,
      renewal_count: 0,
      can_renew: true,
    },
    {
      id: 4,
      title: "Applied Econometrics with R",
      authors: ["Christian Kleiber", "Achim Zeileis"],
      isbn: "978-038-777-316-2",
      call_number: "E2.3.1",
      borrowed_date: "2024-01-18",
      due_date: "2024-02-01",
      status: "Dipinjam",
      days_remaining: 8,
      renewal_count: 0,
      can_renew: true,
    },
    {
      id: 5,
      title: "Time Series Analysis and Its Applications",
      authors: ["Robert H. Shumway", "David S. Stoffer"],
      isbn: "978-144-197-864-6",
      call_number: "T1.2.5",
      borrowed_date: "2024-01-22",
      due_date: "2024-02-05",
      status: "Dipinjam",
      days_remaining: 12,
      renewal_count: 0,
      can_renew: true,
    },
    {
      id: 6,
      title: "Deep Learning with Python",
      authors: ["François Chollet"],
      isbn: "978-161-729-686-4",
      call_number: "C3.1.7",
      borrowed_date: "2024-01-12",
      due_date: "2024-01-26",
      status: "Terlambat",
      days_overdue: 1,
      renewal_count: 1,
      can_renew: true,
      fine: 1000,
    },
    {
      id: 7,
      title: "Bayesian Data Analysis",
      authors: ["Andrew Gelman", "John Carlin"],
      isbn: "978-143-984-095-5",
      call_number: "B3.2.4",
      borrowed_date: "2024-01-20",
      due_date: "2024-02-03",
      status: "Dipinjam",
      days_remaining: 10,
      renewal_count: 0,
      can_renew: true,
    },
    {
      id: 8,
      title: "Statistical Learning with Python",
      authors: ["Sebastian Raschka", "Vahid Mirjalili"],
      isbn: "978-178-712-806-3",
      call_number: "P2.1.8",
      borrowed_date: "2024-01-16",
      due_date: "2024-01-30",
      status: "Dipinjam",
      days_remaining: 6,
      renewal_count: 1,
      can_renew: true,
    },
    {
      id: 9,
      title: "Introduction to Algorithms",
      authors: ["Thomas H. Cormen", "Charles E. Leiserson"],
      isbn: "978-026-204-630-7",
      call_number: "A3.1.2",
      borrowed_date: "2024-01-14",
      due_date: "2024-01-28",
      status: "Terlambat",
      days_overdue: 2,
      renewal_count: 2,
      can_renew: false,
      fine: 2000,
    },
    {
      id: 10,
      title: "Pattern Recognition and Machine Learning",
      authors: ["Christopher M. Bishop"],
      isbn: "978-038-731-073-2",
      call_number: "M1.3.6",
      borrowed_date: "2024-01-19",
      due_date: "2024-02-02",
      status: "Dipinjam",
      days_remaining: 9,
      renewal_count: 0,
      can_renew: true,
    },
  ];

  // Combine static and dynamic borrowings
  const allCurrentBorrowings = [...staticBorrowings, ...dynamicBorrowings];

  // Filter current borrowings based on search and filters
  const filteredCurrentBorrowings = allCurrentBorrowings.filter((item) => {
    const matchesSearch =
      item.title
        .toLowerCase()
        .includes(currentBorrowingsSearch.toLowerCase()) ||
      item.authors.some((author) =>
        author.toLowerCase().includes(currentBorrowingsSearch.toLowerCase()),
      ) ||
      item.call_number
        .toLowerCase()
        .includes(currentBorrowingsSearch.toLowerCase());

    const matchesStatus =
      currentBorrowingsStatus === "semua" ||
      (currentBorrowingsStatus === "dipinjam" &&
        item.status === "Dipinjam" &&
        (item.days_remaining === undefined || item.days_remaining > 3)) ||
      (currentBorrowingsStatus === "segera-jatuh-tempo" &&
        item.status === "Dipinjam" &&
        item.days_remaining !== undefined &&
        item.days_remaining <= 3) ||
      (currentBorrowingsStatus === "terlambat" && item.status === "Terlambat");

    const matchesRenewal =
      currentBorrowingsRenewal === "semua" ||
      (currentBorrowingsRenewal === "bisa-diperpanjang" &&
        item.can_renew &&
        item.status !== "Terlambat") ||
      (currentBorrowingsRenewal === "tidak-bisa" &&
        (!item.can_renew || item.status === "Terlambat"));

    return matchesSearch && matchesStatus && matchesRenewal;
  });

  // Pagination for current borrowings
  const totalCurrentBorrowingsPages = Math.ceil(
    filteredCurrentBorrowings.length / currentBorrowingsPerPage,
  );
  const startCurrentBorrowingsIndex =
    (currentBorrowingsPage - 1) * currentBorrowingsPerPage;
  const endCurrentBorrowingsIndex =
    startCurrentBorrowingsIndex + currentBorrowingsPerPage;
  const currentBorrowings = filteredCurrentBorrowings.slice(
    startCurrentBorrowingsIndex,
    endCurrentBorrowingsIndex,
  );

  const borrowingHistory = [
    {
      id: 1,
      title: "Introduction to Mathematical Statistics",
      authors: ["Robert V. Hogg", "Joseph McKean"],
      isbn: "978-013-468-824-9",
      call_number: "B2.1.5",
      borrowed_date: "2023-12-01",
      returned_date: "2023-12-14",
      due_date: "2023-12-15",
      status: "Dikembalikan",
      duration: 13,
      on_time: true,
      rating: 5,
    },
    {
      id: 2,
      title: "Ekonometrika: Dasar dan Aplikasinya",
      authors: ["Dr. Nachrowi Djalal Nachrowi"],
      isbn: "978-979-456-789-1",
      call_number: "C1.3.7",
      borrowed_date: "2023-11-10",
      returned_date: "2023-11-28",
      due_date: "2023-11-24",
      status: "Terlambat",
      duration: 18,
      days_late: 4,
      fine_paid: 4000,
      on_time: false,
      rating: 4,
    },
    {
      id: 3,
      title: "Metode Penelitian Kuantitatif",
      authors: ["Prof. Dr. Sugiyono"],
      isbn: "978-602-289-456-7",
      call_number: "E1.1.8",
      borrowed_date: "2023-10-15",
      returned_date: "2023-10-29",
      due_date: "2023-10-29",
      status: "Dikembalikan",
      duration: 14,
      on_time: true,
      rating: 5,
    },
    {
      id: 4,
      title: "Kalkulus dan Aljabar Linear",
      authors: ["Dr. Ir. Bambang Murdaka, M.T."],
      isbn: "978-602-291-234-5",
      call_number: "F2.3.1",
      borrowed_date: "2023-09-20",
      returned_date: "2023-10-05",
      due_date: "2023-10-04",
      status: "Terlambat",
      duration: 15,
      days_late: 1,
      fine_paid: 1000,
      on_time: false,
      rating: 4,
    },
    {
      id: 5,
      title: "Deep Learning dengan Python",
      authors: ["François Chollet"],
      isbn: "978-161-729-686-4",
      call_number: "C2.1.9",
      borrowed_date: "2023-08-15",
      returned_date: "2023-08-29",
      due_date: "2023-08-29",
      status: "Dikembalikan",
      duration: 14,
      on_time: true,
      rating: 5,
    },
    {
      id: 6,
      title: "Time Series Analysis and Its Applications",
      authors: ["Robert H. Shumway", "David S. Stoffer"],
      isbn: "978-144-197-864-6",
      call_number: "A3.2.1",
      borrowed_date: "2023-07-20",
      returned_date: "2023-08-05",
      due_date: "2023-08-03",
      status: "Terlambat",
      duration: 16,
      days_late: 2,
      fine_paid: 2000,
      on_time: false,
      rating: 4,
    },
    {
      id: 7,
      title: "Applied Multivariate Statistical Analysis",
      authors: ["Richard A. Johnson", "Dean W. Wichern"],
      isbn: "978-013-479-572-9",
      call_number: "B1.3.5",
      borrowed_date: "2023-06-10",
      returned_date: "2023-06-24",
      due_date: "2023-06-24",
      status: "Dikembalikan",
      duration: 14,
      on_time: true,
      rating: 5,
    },
    {
      id: 8,
      title: "Bayesian Data Analysis",
      authors: ["Andrew Gelman", "John Carlin"],
      isbn: "978-143-984-095-5",
      call_number: "A2.2.7",
      borrowed_date: "2023-05-15",
      returned_date: "2023-06-01",
      due_date: "2023-05-29",
      status: "Terlambat",
      duration: 17,
      days_late: 3,
      fine_paid: 3000,
      on_time: false,
      rating: 4,
    },
    {
      id: 9,
      title: "The Elements of Statistical Learning",
      authors: ["Trevor Hastie", "Robert Tibshirani"],
      isbn: "978-038-795-284-0",
      call_number: "B3.1.2",
      borrowed_date: "2023-04-20",
      returned_date: "2023-05-04",
      due_date: "2023-05-04",
      status: "Dikembalikan",
      duration: 14,
      on_time: true,
      rating: 5,
    },
    {
      id: 10,
      title: "Pattern Recognition and Machine Learning",
      authors: ["Christopher M. Bishop"],
      isbn: "978-038-731-073-2",
      call_number: "C1.2.8",
      borrowed_date: "2023-03-25",
      returned_date: "2023-04-10",
      due_date: "2023-04-08",
      status: "Terlambat",
      duration: 16,
      days_late: 2,
      fine_paid: 2000,
      on_time: false,
      rating: 4,
    },
    {
      id: 11,
      title: "Applied Regression Analysis",
      authors: ["Norman R. Draper", "Harry Smith"],
      isbn: "978-047-117-082-2",
      call_number: "A1.3.4",
      borrowed_date: "2023-02-18",
      returned_date: "2023-03-04",
      due_date: "2023-03-04",
      status: "Dikembalikan",
      duration: 14,
      on_time: true,
      rating: 4,
    },
    {
      id: 12,
      title: "Computational Statistics",
      authors: ["Geof H. Givens", "Jennifer A. Hoeting"],
      isbn: "978-047-053-331-4",
      call_number: "C2.3.6",
      borrowed_date: "2023-01-20",
      returned_date: "2023-02-05",
      due_date: "2023-02-03",
      status: "Terlambat",
      duration: 16,
      days_late: 2,
      fine_paid: 2000,
      on_time: false,
      rating: 3,
    },
    {
      id: 13,
      title: "Data Mining: Practical Machine Learning Tools",
      authors: ["Ian H. Witten", "Eibe Frank"],
      isbn: "978-012-374-856-0",
      call_number: "C3.1.4",
      borrowed_date: "2022-12-15",
      returned_date: "2022-12-29",
      due_date: "2022-12-29",
      status: "Dikembalikan",
      duration: 14,
      on_time: true,
      rating: 5,
    },
    {
      id: 14,
      title: "Introduction to Linear Regression Analysis",
      authors: ["Douglas C. Montgomery", "Elizabeth A. Peck"],
      isbn: "978-111-900-274-4",
      call_number: "A2.1.3",
      borrowed_date: "2022-11-20",
      returned_date: "2022-12-06",
      due_date: "2022-12-04",
      status: "Terlambat",
      duration: 16,
      days_late: 2,
      fine_paid: 2000,
      on_time: false,
      rating: 4,
    },
    {
      id: 15,
      title: "Mathematical Statistics with Applications",
      authors: ["Dennis D. Wackerly", "William Mendenhall"],
      isbn: "978-049-538-508-2",
      call_number: "A1.1.7",
      borrowed_date: "2022-10-25",
      returned_date: "2022-11-08",
      due_date: "2022-11-08",
      status: "Dikembalikan",
      duration: 14,
      on_time: true,
      rating: 5,
    },
  ];

  const getStatusBadge = (
    status: string,
    daysRemaining?: number,
    daysOverdue?: number,
  ) => {
    if (status === "Dipinjam") {
      if (daysRemaining && daysRemaining <= 3) {
        return (
          <Badge variant="destructive" className="text-xs">
            <Clock className="w-3 h-3 mr-1" />
            Segera Jatuh Tempo
          </Badge>
        );
      }
      return (
        <Badge variant="default" className="text-xs bg-blue-500">
          <BookOpen className="w-3 h-3 mr-1" />
          Dipinjam
        </Badge>
      );
    } else if (status === "Terlambat") {
      return (
        <Badge variant="destructive" className="text-xs">
          <AlertCircle className="w-3 h-3 mr-1" />
          Terlambat {daysOverdue} hari
        </Badge>
      );
    } else if (status === "Dikembalikan") {
      return (
        <Badge
          variant="secondary"
          className="text-xs bg-stis-blue-light text-stis-blue"
        >
          <CheckCircle className="w-3 h-3 mr-1" />
          Dikembalikan
        </Badge>
      );
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

  const handlePayment = (fine: number) => {
    setPaymentAmount(fine);
    setShowQRISModal(true);
  };

  const handleExtendBook = (book: any) => {
    setExtensionBook(book);
    setShowExtensionModal(true);
  };

  const filteredHistory = borrowingHistory.filter((item) => {
    const matchesSearch =
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.authors.some((author) =>
        author.toLowerCase().includes(searchQuery.toLowerCase()),
      ) ||
      item.isbn.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus =
      selectedStatus === "semua" ||
      (selectedStatus === "tepat-waktu" && item.on_time) ||
      (selectedStatus === "terlambat" && !item.on_time);

    return matchesSearch && matchesStatus;
  });

  // Pagination calculations
  const totalPages = Math.ceil(filteredHistory.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentHistoryItems = filteredHistory.slice(startIndex, endIndex);

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Header */}
      <div className="bg-gradient-to-br from-stis-blue-light via-white to-stis-gray-light pt-24 pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              Riwayat <span className="text-stis-blue">Pinjaman</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 leading-relaxed">
              Pantau dan kelola riwayat peminjaman buku Anda, termasuk status
              pengembalian, perpanjangan, dan denda yang harus dibayar
            </p>
          </div>
        </div>
      </div>

      {/* Statistics */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {borrowingStats.map((stat, index) => {
                const IconComponent = stat.icon;
                return (
                  <Card key={index} className="border-0 shadow-lg text-center">
                    <CardContent className="p-6">
                      <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                        <IconComponent className={`w-6 h-6 ${stat.color}`} />
                      </div>
                      <div className={`text-2xl font-bold mb-1 ${stat.color}`}>
                        {stat.count}
                      </div>
                      <div className="text-sm text-gray-600">{stat.type}</div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <Tabs defaultValue="current" className="w-full">
              <TabsList className="grid w-full grid-cols-2 max-w-md mx-auto mb-12">
                <TabsTrigger value="current">Sedang Dipinjam</TabsTrigger>
                <TabsTrigger value="history">Riwayat</TabsTrigger>
              </TabsList>

              {/* Current Borrowings Tab */}
              <TabsContent value="current">
                <div className="mb-8">
                  {/* Search & Filter for Current Borrowings */}
                  <div className="bg-stis-gray-light border border-gray-200 rounded-xl p-6 mb-8">
                    <div className="flex flex-col lg:flex-row gap-6 items-center">
                      {/* Search */}
                      <div className="flex-1 w-full lg:w-auto">
                        <div className="relative">
                          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                          <Input
                            type="text"
                            placeholder="Cari judul buku, penulis, atau call number..."
                            value={currentBorrowingsSearch}
                            onChange={(e) => {
                              setCurrentBorrowingsSearch(e.target.value);
                              setCurrentBorrowingsPage(1);
                            }}
                            className="pl-12 py-3 text-base rounded-xl border-2 border-gray-200 focus:border-stis-blue"
                          />
                        </div>
                      </div>

                      {/* Filter by Status */}
                      <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full lg:w-auto">
                        <Select
                          value={currentBorrowingsStatus}
                          onValueChange={(value) => {
                            setCurrentBorrowingsStatus(value);
                            setCurrentBorrowingsPage(1);
                          }}
                        >
                          <SelectTrigger className="w-full sm:w-40 lg:w-48 focus:ring-stis-blue">
                            <SelectValue placeholder="Status Pinjaman" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem
                              className="focus:bg-stis-blue/10 focus:text-stis-blue data-[highlighted]:bg-stis-blue/10 data-[highlighted]:text-stis-blue"
                              value="semua"
                            >
                              Semua Status
                            </SelectItem>
                            <SelectItem
                              className="focus:bg-stis-blue/10 focus:text-stis-blue data-[highlighted]:bg-stis-blue/10 data-[highlighted]:text-stis-blue"
                              value="dipinjam"
                            >
                              Dipinjam
                            </SelectItem>
                            <SelectItem
                              className="focus:bg-stis-blue/10 focus:text-stis-blue data-[highlighted]:bg-stis-blue/10 data-[highlighted]:text-stis-blue"
                              value="segera-jatuh-tempo"
                            >
                              Segera Jatuh Tempo
                            </SelectItem>
                            <SelectItem
                              className="focus:bg-stis-blue/10 focus:text-stis-blue data-[highlighted]:bg-stis-blue/10 data-[highlighted]:text-stis-blue"
                              value="terlambat"
                            >
                              Terlambat
                            </SelectItem>
                          </SelectContent>
                        </Select>

                        <Select
                          value={currentBorrowingsRenewal}
                          onValueChange={(value) => {
                            setCurrentBorrowingsRenewal(value);
                            setCurrentBorrowingsPage(1);
                          }}
                        >
                          <SelectTrigger className="w-full sm:w-32 lg:w-40 focus:ring-stis-blue">
                            <SelectValue placeholder="Perpanjangan" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem
                              className="focus:bg-stis-blue/10 focus:text-stis-blue data-[highlighted]:bg-stis-blue/10 data-[highlighted]:text-stis-blue"
                              value="semua"
                            >
                              Semua
                            </SelectItem>
                            <SelectItem
                              className="focus:bg-stis-blue/10 focus:text-stis-blue data-[highlighted]:bg-stis-blue/10 data-[highlighted]:text-stis-blue"
                              value="bisa-diperpanjang"
                            >
                              Bisa Diperpanjang
                            </SelectItem>
                            <SelectItem
                              className="focus:bg-stis-blue/10 focus:text-stis-blue data-[highlighted]:bg-stis-blue/10 data-[highlighted]:text-stis-blue"
                              value="tidak-bisa"
                            >
                              Tidak Bisa
                            </SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-2xl font-bold text-gray-900">
                      Buku Sedang Dipinjam ({filteredCurrentBorrowings.length})
                      - Halaman {currentBorrowingsPage} dari{" "}
                      {totalCurrentBorrowingsPages}
                    </h3>
                    <Button
                      variant="outline"
                      className="border-stis-blue text-stis-blue hover:bg-stis-blue hover:text-white"
                    >
                      Perpanjang Semua
                    </Button>
                  </div>

                  <div className="space-y-4">
                    {currentBorrowings.map((book) => (
                      <Card
                        key={book.id}
                        className="border-0 shadow-lg hover:shadow-xl transition-shadow"
                      >
                        <CardContent className="p-6">
                          <div className="flex flex-col lg:flex-row gap-6">
                            {/* Book Cover */}
                            <div className="w-full lg:w-20 h-28 lg:h-24 bg-gradient-to-br from-stis-blue-light to-stis-gray-light rounded-lg flex items-center justify-center flex-shrink-0">
                              <BookOpen className="w-8 h-8 text-stis-blue/40" />
                            </div>

                            {/* Book Details */}
                            <div className="flex-1">
                              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
                                <div className="flex-1">
                                  <div className="flex items-center gap-2 mb-2">
                                    {getStatusBadge(
                                      book.status,
                                      book.days_remaining,
                                      book.days_overdue,
                                    )}
                                    {book.fine && (
                                      <Badge
                                        variant="destructive"
                                        className="text-xs"
                                      >
                                        Denda: Rp {book.fine.toLocaleString()}
                                      </Badge>
                                    )}
                                  </div>

                                  <h4 className="text-lg font-semibold text-gray-900 mb-2">
                                    {book.title}
                                  </h4>

                                  <div className="space-y-1 text-sm text-gray-600 mb-3">
                                    <p>
                                      <strong>Penulis:</strong>{" "}
                                      {book.authors.join(", ")}
                                    </p>
                                    <p>
                                      <strong>ISBN:</strong> {book.isbn} •{" "}
                                      <strong>Call Number:</strong>{" "}
                                      {book.call_number}
                                    </p>
                                    <p>
                                      <strong>Tanggal Pinjam:</strong>{" "}
                                      {formatDate(book.borrowed_date)}
                                    </p>
                                    <p>
                                      <strong>Tanggal Kembali:</strong>{" "}
                                      {formatDate(book.due_date)}
                                    </p>
                                    <p>
                                      <strong>Perpanjangan:</strong>{" "}
                                      {book.renewal_count}/2 kali
                                    </p>
                                  </div>

                                  {book.status === "Dipinjam" &&
                                    book.days_remaining && (
                                      <div className="text-sm text-blue-600 font-medium">
                                        Sisa waktu: {book.days_remaining} hari
                                      </div>
                                    )}

                                  {book.status === "Terlambat" && (
                                    <div className="text-sm text-red-600 font-medium">
                                      Terlambat: {book.days_overdue} hari
                                      {book.fine &&
                                        ` • Denda: Rp ${book.fine.toLocaleString()}`}
                                    </div>
                                  )}
                                </div>

                                {/* Action Buttons */}
                                <div className="flex flex-col sm:flex-row lg:flex-col gap-2 w-full lg:w-36">
                                  <Button
                                    size="sm"
                                    className="bg-stis-blue hover:bg-stis-blue-dark flex-1 lg:flex-none text-xs sm:text-sm"
                                    disabled={book.status === "Terlambat"}
                                    onClick={() => {
                                      setSelectedBook(book);
                                      setShowDetailModal(true);
                                    }}
                                  >
                                    <Eye className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                                    Detail
                                  </Button>
                                  <Button
                                    size="sm"
                                    variant="outline"
                                    className="border-stis-cyan text-stis-cyan hover:bg-stis-cyan hover:text-white flex-1 lg:flex-none text-xs sm:text-sm"
                                    disabled={
                                      !book.can_renew ||
                                      book.status === "Terlambat"
                                    }
                                    onClick={() => handleExtendBook(book)}
                                  >
                                    <RotateCcw className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                                    <span className="hidden sm:inline">Perpanjang</span>
                                    <span className="sm:hidden">Extend</span>
                                  </Button>
                                  {book.fine && (
                                    <Button
                                      size="sm"
                                      variant="destructive"
                                      className="flex-1 lg:flex-none text-xs sm:text-sm"
                                      onClick={() => handlePayment(book.fine)}
                                    >
                                      <span className="hidden sm:inline">Bayar Denda</span>
                                      <span className="sm:hidden">Bayar</span>
                                    </Button>
                                  )}
                                </div>
                              </div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>

                  {currentBorrowings.length === 0 && (
                    <Card className="border-0 shadow-lg">
                      <CardContent className="p-12 text-center">
                        <BookOpen className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                        <h3 className="text-lg font-medium text-gray-900 mb-2">
                          Tidak ada buku yang sedang dipinjam
                        </h3>
                        <p className="text-gray-600">
                          Jelajahi koleksi perpustakaan dan pinjam buku yang
                          Anda butuhkan.
                        </p>
                      </CardContent>
                    </Card>
                  )}

                  {/* Pagination for Current Borrowings */}
                  {totalCurrentBorrowingsPages > 1 && (
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-2 mt-8 px-4">
                      {/* Mobile: Simplified pagination with page info */}
                      <div className="sm:hidden flex items-center justify-between w-full gap-2">
                        <Button
                          variant="outline"
                          size="sm"
                          disabled={currentBorrowingsPage === 1}
                          onClick={() =>
                            setCurrentBorrowingsPage(currentBorrowingsPage - 1)
                          }
                          className="border-stis-blue text-stis-blue hover:bg-stis-blue hover:text-white text-xs px-3 py-2"
                        >
                          ‹ Prev
                        </Button>

                        <span className="text-sm text-gray-600 px-3 py-2 bg-gray-100 rounded-lg">
                          {currentBorrowingsPage} / {totalCurrentBorrowingsPages}
                        </span>

                        <Button
                          variant="outline"
                          size="sm"
                          disabled={
                            currentBorrowingsPage === totalCurrentBorrowingsPages
                          }
                          onClick={() =>
                            setCurrentBorrowingsPage(currentBorrowingsPage + 1)
                          }
                          className="border-stis-blue text-stis-blue hover:bg-stis-blue hover:text-white text-xs px-3 py-2"
                        >
                          Next ›
                        </Button>
                      </div>

                      {/* Desktop: Full pagination */}
                      <div className="hidden sm:flex items-center justify-center gap-2">
                        <Button
                          variant="outline"
                          disabled={currentBorrowingsPage === 1}
                          onClick={() =>
                            setCurrentBorrowingsPage(currentBorrowingsPage - 1)
                          }
                          className="border-stis-blue text-stis-blue hover:bg-stis-blue hover:text-white"
                        >
                          Sebelumnya
                        </Button>

                        {Array.from(
                          { length: totalCurrentBorrowingsPages },
                          (_, i) => i + 1,
                        ).map((page) => (
                          <Button
                            key={page}
                            variant={
                              currentBorrowingsPage === page
                                ? "default"
                                : "outline"
                            }
                            className={
                              currentBorrowingsPage === page
                                ? "bg-stis-blue hover:bg-stis-blue-dark"
                                : "border-stis-blue text-stis-blue hover:bg-stis-blue hover:text-white"
                            }
                            onClick={() => setCurrentBorrowingsPage(page)}
                          >
                            {page}
                          </Button>
                        ))}

                        <Button
                          variant="outline"
                          disabled={
                            currentBorrowingsPage === totalCurrentBorrowingsPages
                          }
                          onClick={() =>
                            setCurrentBorrowingsPage(currentBorrowingsPage + 1)
                          }
                          className="border-stis-blue text-stis-blue hover:bg-stis-blue hover:text-white"
                        >
                          Selanjutnya
                        </Button>
                      </div>
                    </div>
                  )}
                </div>
              </TabsContent>

              {/* History Tab */}
              <TabsContent value="history">
                <div className="mb-8">
                  {/* Search & Filter for History */}
                  <div className="bg-stis-gray-light border border-gray-200 rounded-xl p-6 mb-8">
                    <div className="flex flex-col lg:flex-row gap-6 items-center">
                      {/* Search */}
                      <div className="flex-1 w-full lg:w-auto">
                        <div className="relative">
                          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                          <Input
                            type="text"
                            placeholder="Cari judul buku, penulis, atau ISBN..."
                            value={searchQuery}
                            onChange={(e) => {
                              setSearchQuery(e.target.value);
                              setCurrentPage(1);
                            }}
                            className="pl-12 py-3 text-base rounded-xl border-2 border-gray-200 focus:border-stis-blue"
                          />
                        </div>
                      </div>

                      {/* Filters */}
                      <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full lg:w-auto">
                        <div className="flex gap-3 sm:gap-4">
                          <Select
                            value={selectedStatus}
                            onValueChange={(value) => {
                              setSelectedStatus(value);
                              setCurrentPage(1);
                            }}
                          >
                            <SelectTrigger className="w-full sm:w-36 lg:w-48 focus:ring-stis-blue">
                              <SelectValue placeholder="Status Pengembalian" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem
                                className="focus:bg-stis-blue/10 focus:text-stis-blue data-[highlighted]:bg-stis-blue/10 data-[highlighted]:text-stis-blue"
                                value="semua"
                              >
                                Semua Status
                              </SelectItem>
                              <SelectItem
                                className="focus:bg-stis-blue/10 focus:text-stis-blue data-[highlighted]:bg-stis-blue/10 data-[highlighted]:text-stis-blue"
                                value="tepat-waktu"
                              >
                                Tepat Waktu
                              </SelectItem>
                              <SelectItem
                                className="focus:bg-stis-blue/10 focus:text-stis-blue data-[highlighted]:bg-stis-blue/10 data-[highlighted]:text-stis-blue"
                                value="terlambat"
                              >
                                Terlambat
                              </SelectItem>
                            </SelectContent>
                          </Select>

                          <Select
                            value={selectedPeriod}
                            onValueChange={(value) => {
                              setSelectedPeriod(value);
                              setCurrentPage(1);
                            }}
                          >
                            <SelectTrigger className="w-full sm:w-32 lg:w-40 focus:ring-stis-blue">
                              <SelectValue placeholder="Periode" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem
                                className="focus:bg-stis-blue/10 focus:text-stis-blue data-[highlighted]:bg-stis-blue/10 data-[highlighted]:text-stis-blue"
                                value="semua"
                              >
                                Semua
                              </SelectItem>
                              <SelectItem
                                className="focus:bg-stis-blue/10 focus:text-stis-blue data-[highlighted]:bg-stis-blue/10 data-[highlighted]:text-stis-blue"
                                value="bulan-ini"
                              >
                                Bulan Ini
                              </SelectItem>
                              <SelectItem
                                className="focus:bg-stis-blue/10 focus:text-stis-blue data-[highlighted]:bg-stis-blue/10 data-[highlighted]:text-stis-blue"
                                value="3-bulan"
                              >
                                3 Bulan
                              </SelectItem>
                              <SelectItem
                                className="focus:bg-stis-blue/10 focus:text-stis-blue data-[highlighted]:bg-stis-blue/10 data-[highlighted]:text-stis-blue"
                                value="tahun-ini"
                              >
                                Tahun Ini
                              </SelectItem>
                            </SelectContent>
                          </Select>
                        </div>

                        <Button
                          variant="outline"
                          className="border-stis-blue text-stis-blue hover:bg-stis-blue hover:text-white w-full sm:w-auto"
                        >
                          <Download className="w-4 h-4 mr-2" />
                          <span className="sm:inline">Export</span>
                        </Button>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-2xl font-bold text-gray-900">
                      Riwayat Peminjaman ({filteredHistory.length}) - Halaman{" "}
                      {currentPage} dari {totalPages}
                    </h3>
                    <Select defaultValue="terbaru">
                      <SelectTrigger className="w-48 focus:ring-stis-blue">
                        <SelectValue placeholder="Urutkan" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem
                          className="focus:bg-stis-blue/10 focus:text-stis-blue data-[highlighted]:bg-stis-blue/10 data-[highlighted]:text-stis-blue"
                          value="terbaru"
                        >
                          Terbaru
                        </SelectItem>
                        <SelectItem
                          className="focus:bg-stis-blue/10 focus:text-stis-blue data-[highlighted]:bg-stis-blue/10 data-[highlighted]:text-stis-blue"
                          value="terlama"
                        >
                          Terlama
                        </SelectItem>
                        <SelectItem
                          className="focus:bg-stis-blue/10 focus:text-stis-blue data-[highlighted]:bg-stis-blue/10 data-[highlighted]:text-stis-blue"
                          value="judul"
                        >
                          Judul
                        </SelectItem>
                        <SelectItem
                          className="focus:bg-stis-blue/10 focus:text-stis-blue data-[highlighted]:bg-stis-blue/10 data-[highlighted]:text-stis-blue"
                          value="status"
                        >
                          Status
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-4">
                    {currentHistoryItems.map((book) => (
                      <Card
                        key={book.id}
                        className="border-0 shadow-md hover:shadow-lg transition-shadow"
                      >
                        <CardContent className="p-6">
                          <div className="flex flex-col lg:flex-row gap-6">
                            {/* Book Cover */}
                            <div className="w-full lg:w-16 h-24 lg:h-20 bg-gradient-to-br from-stis-blue-light to-stis-gray-light rounded-lg flex items-center justify-center flex-shrink-0">
                              <BookOpen className="w-6 h-6 text-stis-blue/40" />
                            </div>

                            {/* Book Details */}
                            <div className="flex-1">
                              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
                                <div className="flex-1">
                                  <div className="flex items-center gap-2 mb-2">
                                    {getStatusBadge(book.status)}
                                    {!book.on_time && book.fine_paid && (
                                      <Badge
                                        variant="outline"
                                        className="text-xs"
                                      >
                                        Denda Dibayar: Rp{" "}
                                        {book.fine_paid.toLocaleString()}
                                      </Badge>
                                    )}
                                  </div>

                                  <h4 className="text-lg font-semibold text-gray-900 mb-2">
                                    {book.title}
                                  </h4>

                                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm text-gray-600 mb-3">
                                    <div>
                                      <p>
                                        <strong>Penulis:</strong>{" "}
                                        {book.authors.join(", ")}
                                      </p>
                                      <p>
                                        <strong>Dipinjam:</strong>{" "}
                                        {formatDate(book.borrowed_date)}
                                      </p>
                                      <p>
                                        <strong>Dikembalikan:</strong>{" "}
                                        {formatDate(book.returned_date)}
                                      </p>
                                    </div>
                                    <div>
                                      <p>
                                        <strong>Jatuh Tempo:</strong>{" "}
                                        {formatDate(book.due_date)}
                                      </p>
                                      <p>
                                        <strong>Durasi:</strong> {book.duration}{" "}
                                        hari
                                      </p>
                                      {!book.on_time && (
                                        <p className="text-red-600">
                                          <strong>Terlambat:</strong>{" "}
                                          {book.days_late} hari
                                        </p>
                                      )}
                                    </div>
                                  </div>

                                  <div className="flex items-center gap-4">
                                    <div className="flex items-center gap-1">
                                      <span className="text-sm text-gray-600">
                                        Rating:
                                      </span>
                                      <div className="flex">
                                        {[1, 2, 3, 4, 5].map((star) => (
                                          <div
                                            key={star}
                                            className={`w-3 h-3 ${
                                              star <= book.rating
                                                ? "text-yellow-400 fill-current"
                                                : "text-gray-300"
                                            }`}
                                          >
                                            ⭐
                                          </div>
                                        ))}
                                      </div>
                                    </div>
                                  </div>
                                </div>

                                {/* Action Button */}
                                <div className="w-full sm:w-auto lg:w-24">
                                  <Button
                                    size="sm"
                                    variant="outline"
                                    className="w-full border-stis-blue text-stis-blue hover:bg-stis-blue hover:text-white text-xs sm:text-sm"
                                    onClick={() => {
                                      setSelectedBook(book);
                                      setShowDetailModal(true);
                                    }}
                                  >
                                    <Eye className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                                    Detail
                                  </Button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>

                  {/* Pagination */}
                  {totalPages > 1 && (
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-2 mt-8 px-4">
                      {/* Mobile: Simplified pagination with page info */}
                      <div className="sm:hidden flex items-center justify-between w-full gap-2">
                        <Button
                          variant="outline"
                          size="sm"
                          disabled={currentPage === 1}
                          onClick={() => setCurrentPage(currentPage - 1)}
                          className="border-stis-blue text-stis-blue hover:bg-stis-blue hover:text-white text-xs px-3 py-2"
                        >
                          ‹ Prev
                        </Button>

                        <span className="text-sm text-gray-600 px-3 py-2 bg-gray-100 rounded-lg">
                          {currentPage} / {totalPages}
                        </span>

                        <Button
                          variant="outline"
                          size="sm"
                          disabled={currentPage === totalPages}
                          onClick={() => setCurrentPage(currentPage + 1)}
                          className="border-stis-blue text-stis-blue hover:bg-stis-blue hover:text-white text-xs px-3 py-2"
                        >
                          Next ›
                        </Button>
                      </div>

                      {/* Desktop: Full pagination */}
                      <div className="hidden sm:flex items-center justify-center gap-2">
                        <Button
                          variant="outline"
                          disabled={currentPage === 1}
                          onClick={() => setCurrentPage(currentPage - 1)}
                          className="border-stis-blue text-stis-blue hover:bg-stis-blue hover:text-white"
                        >
                          Sebelumnya
                        </Button>

                        {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                          (page) => (
                            <Button
                              key={page}
                              variant={
                                currentPage === page ? "default" : "outline"
                              }
                              className={
                                currentPage === page
                                  ? "bg-stis-blue hover:bg-stis-blue-dark"
                                  : "border-stis-blue text-stis-blue hover:bg-stis-blue hover:text-white"
                              }
                              onClick={() => setCurrentPage(page)}
                            >
                              {page}
                            </Button>
                          ),
                        )}

                        <Button
                          variant="outline"
                          disabled={currentPage === totalPages}
                          onClick={() => setCurrentPage(currentPage + 1)}
                          className="border-stis-blue text-stis-blue hover:bg-stis-blue hover:text-white"
                        >
                          Selanjutnya
                        </Button>
                      </div>
                    </div>
                  )}
                </div>
              </TabsContent>
            </Tabs>
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

      {/* Book Detail Modal */}
      {showDetailModal && selectedBook && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="mb-6">
                <h2 className="text-2xl font-bold text-gray-900">
                  Detail Buku Pinjaman
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                {/* Book Cover */}
                <div className="w-full h-64 bg-gradient-to-br from-stis-blue-light to-stis-gray-light rounded-lg flex items-center justify-center relative">
                  <BookOpen className="w-16 h-16 text-stis-blue/40" />
                  {selectedBook.status === "Terlambat" && (
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-red-500 rounded-full flex items-center justify-center">
                      <AlertCircle className="w-4 h-4 text-white" />
                    </div>
                  )}
                </div>

                {/* Book Information */}
                <div className="md:col-span-2 space-y-4">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {selectedBook.title}
                    </h3>
                    <p className="text-gray-600">
                      oleh {selectedBook.authors.join(", ")}
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-medium text-gray-900 mb-2">
                        Informasi Buku
                      </h4>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span className="text-gray-600">ISBN:</span>
                          <span className="font-medium">
                            {selectedBook.isbn}
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Call Number:</span>
                          <span className="font-medium">
                            {selectedBook.call_number}
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Status:</span>
                          <span
                            className={`font-medium ${
                              selectedBook.status === "Terlambat"
                                ? "text-red-600"
                                : selectedBook.status === "Dipinjam"
                                  ? "text-blue-600"
                                  : "text-green-600"
                            }`}
                          >
                            {selectedBook.status}
                          </span>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-medium text-gray-900 mb-2">
                        Detail Peminjaman
                      </h4>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span className="text-gray-600">Tgl Pinjam:</span>
                          <span className="font-medium">
                            {formatDate(selectedBook.borrowed_date)}
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Jatuh Tempo:</span>
                          <span className="font-medium">
                            {formatDate(
                              selectedBook.due_date ||
                                selectedBook.returned_date,
                            )}
                          </span>
                        </div>
                        {selectedBook.returned_date && (
                          <div className="flex justify-between">
                            <span className="text-gray-600">Dikembalikan:</span>
                            <span className="font-medium">
                              {formatDate(selectedBook.returned_date)}
                            </span>
                          </div>
                        )}
                        {selectedBook.renewal_count !== undefined && (
                          <div className="flex justify-between">
                            <span className="text-gray-600">Perpanjangan:</span>
                            <span className="font-medium">
                              {selectedBook.renewal_count}/2 kali
                            </span>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Status Information */}
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">
                      Status Peminjaman
                    </h4>
                    <div className="space-y-2">
                      {selectedBook.days_remaining && (
                        <div className="flex items-center gap-2">
                          <Clock className="w-4 h-4 text-blue-500" />
                          <span className="text-sm text-blue-600">
                            Sisa waktu: {selectedBook.days_remaining} hari
                          </span>
                        </div>
                      )}
                      {selectedBook.days_overdue && (
                        <div className="flex items-center gap-2">
                          <AlertCircle className="w-4 h-4 text-red-500" />
                          <span className="text-sm text-red-600">
                            Terlambat: {selectedBook.days_overdue} hari
                          </span>
                        </div>
                      )}
                      {selectedBook.fine && (
                        <div className="flex items-center gap-2">
                          <AlertCircle className="w-4 h-4 text-red-500" />
                          <span className="text-sm text-red-600">
                            Denda: Rp {selectedBook.fine.toLocaleString()}
                          </span>
                        </div>
                      )}
                      {selectedBook.fine_paid && (
                        <div className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-green-500" />
                          <span className="text-sm text-green-600">
                            Denda telah dibayar: Rp{" "}
                            {selectedBook.fine_paid.toLocaleString()}
                          </span>
                        </div>
                      )}
                      {selectedBook.duration && (
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4 text-gray-500" />
                          <span className="text-sm text-gray-600">
                            Durasi peminjaman: {selectedBook.duration} hari
                          </span>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Rating for history items */}
                  {selectedBook.rating && (
                    <div>
                      <h4 className="font-medium text-gray-900 mb-2">
                        Rating Buku
                      </h4>
                      <div className="flex items-center gap-2">
                        <div className="flex">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <div
                              key={star}
                              className={`w-4 h-4 ${
                                star <= selectedBook.rating
                                  ? "text-yellow-400"
                                  : "text-gray-300"
                              }`}
                            >
                              ���
                            </div>
                          ))}
                        </div>
                        <span className="text-sm text-gray-600">
                          {selectedBook.rating}/5 bintang
                        </span>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-3 justify-end">
                <Button
                  variant="outline"
                  onClick={() => setShowDetailModal(false)}
                  className="border-blue-600 text-blue-600 hover:bg-red-600 hover:text-white hover:border-red-600"
                >
                  Tutup
                </Button>
                {selectedBook.status === "Dipinjam" &&
                  selectedBook.can_renew && (
                    <Button className="bg-stis-cyan hover:bg-stis-cyan-dark text-white">
                      Perpanjang
                    </Button>
                  )}
                {selectedBook.fine && (
                  <Button
                    variant="destructive"
                    onClick={() => handlePayment(selectedBook.fine)}
                  >
                    Bayar Denda
                  </Button>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* QRIS Payment Modal */}
      {showQRISModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-md w-full p-6">
            <div className="text-center">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Pembayaran Denda
              </h2>

              <div className="bg-stis-blue-light rounded-lg p-4 mb-4">
                <p className="text-lg font-semibold text-gray-900 mb-2">
                  Jumlah yang harus dibayar:
                </p>
                <p className="text-2xl font-bold text-stis-blue">
                  Rp {paymentAmount.toLocaleString()}
                </p>
              </div>

              <div className="bg-white border-2 border-gray-200 rounded-lg p-4 mb-4">
                <p className="text-sm text-gray-600 mb-3">
                  Scan QRIS code untuk pembayaran:
                </p>
                {/* QRIS Code Placeholder */}
                <div className="w-48 h-48 bg-gray-100 border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <div className="text-center">
                    <div className="text-6xl mb-2">📱</div>
                    <p className="text-xs text-gray-500">QRIS Code</p>
                  </div>
                </div>
                <p className="text-xs text-gray-500">
                  Gunakan aplikasi mobile banking atau e-wallet Anda
                </p>
              </div>

              <div className="space-y-2 text-sm text-gray-600 mb-6">
                <p>• Pembayaran akan diverifikasi otomatis</p>
                <p>• Notifikasi akan dikirim setelah pembayaran berhasil</p>
                <p>• Simpan screenshot sebagai bukti pembayaran</p>
              </div>

              <div className="flex gap-3">
                <Button
                  variant="outline"
                  onClick={() => setShowQRISModal(false)}
                  className="flex-1 border-blue-600 text-blue-600 hover:bg-red-600 hover:text-white hover:border-red-600"
                >
                  Tutup
                </Button>
                <Button
                  onClick={() => {
                    setShowQRISModal(false);
                    alert("Pembayaran berhasil! Denda telah dibayar.");
                  }}
                  className="flex-1 bg-stis-blue hover:bg-stis-blue-dark"
                >
                  Konfirmasi Pembayaran
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Book Extension Modal */}
      {showExtensionModal && extensionBook && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-lg w-full max-h-[90vh] overflow-y-auto p-6">
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                Perpanjangan Peminjaman
              </h2>
              <p className="text-gray-600">
                Ajukan perpanjangan peminjaman untuk buku berikut:
              </p>
            </div>

            <div className="bg-stis-blue-light rounded-lg p-4 mb-6">
              <h3 className="font-semibold text-gray-900 mb-2">
                {extensionBook.title}
              </h3>
              <div className="space-y-1 text-sm text-gray-600">
                <p>
                  <strong>Penulis:</strong> {extensionBook.authors.join(", ")}
                </p>
                <p>
                  <strong>Tanggal Pinjam:</strong>{" "}
                  {formatDate(extensionBook.borrowed_date)}
                </p>
                <p>
                  <strong>Jatuh Tempo Saat Ini:</strong>{" "}
                  {formatDate(extensionBook.due_date)}
                </p>
                <p>
                  <strong>Perpanjangan ke:</strong>{" "}
                  {extensionBook.renewal_count + 1}/2
                </p>
              </div>
            </div>

            <div className="space-y-4 mb-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Alasan Perpanjangan <span className="text-red-500">*</span>
                </label>
                <select className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-stis-blue focus:border-stis-blue">
                  <option value="">Pilih alasan perpanjangan</option>
                  <option value="masih_digunakan">
                    Masih membutuhkan buku untuk penelitian
                  </option>
                  <option value="belum_selesai">Belum selesai membaca</option>
                  <option value="tugas_akhir">
                    Diperlukan untuk tugas akhir/skripsi
                  </option>
                  <option value="referensi_tambahan">
                    Memerlukan sebagai referensi tambahan
                  </option>
                  <option value="lainnya">Alasan lainnya</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Durasi Perpanjangan
                </label>
                <select className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-stis-blue focus:border-stis-blue">
                  <option value="7">7 hari</option>
                  <option value="14" selected>
                    14 hari (standar)
                  </option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Catatan Tambahan (Opsional)
                </label>
                <textarea
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-stis-blue focus:border-stis-blue"
                  rows={3}
                  placeholder="Berikan catatan tambahan jika diperlukan..."
                ></textarea>
              </div>
            </div>

            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-6">
              <div className="flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-yellow-600 mt-0.5" />
                <div className="text-sm">
                  <p className="font-medium text-yellow-800 mb-1">Perhatian:</p>
                  <ul className="text-yellow-700 space-y-1">
                    <li>• Perpanjangan maksimal 2 kali per buku</li>
                    <li>• Perpanjangan tidak dapat dilakukan jika ada denda</li>
                    <li>
                      • Buku yang direservasi orang lain tidak dapat
                      diperpanjang
                    </li>
                    <li>• Konfirmasi perpanjangan akan dikirim via email</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="flex gap-3">
              <Button
                variant="outline"
                onClick={() => setShowExtensionModal(false)}
                className="flex-1 border-blue-600 text-blue-600 hover:bg-red-600 hover:text-white hover:border-red-600"
              >
                Batal
              </Button>
              <Button
                onClick={() => {
                  setShowExtensionModal(false);
                  alert(
                    `Pengajuan perpanjangan untuk "${extensionBook.title}" berhasil dikirim! Konfirmasi akan dikirim via email.`,
                  );
                }}
                className="flex-1 bg-stis-blue hover:bg-stis-blue-dark"
              >
                Ajukan Perpanjangan
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* Help Popup */}
      <HelpPopup pageHelp={helpItems} />
    </div>
  );
}
