import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Search,
  Filter,
  BookOpen,
  Eye,
  Download,
  Star,
  Calendar,
  User,
  Building,
  MapPin,
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
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Navigation from "@/components/Navigation";
import HelpPopup from "@/components/HelpPopup";
import StandardFooter from "@/components/StandardFooter";
import { useBorrowedBooks } from "@/contexts/BorrowedBooksContext";

export default function Books() {
  const navigate = useNavigate();
  const { isBookBorrowed } = useBorrowedBooks();
  const helpItems = [
    {
      question: "Bagaimana cara mencari buku di koleksi cetak?",
      answer:
        "Gunakan fitur pencarian dan filter kategori. Anda dapat mencari berdasarkan judul, penulis, ISBN, atau kata kunci.",
    },
    {
      question: "Bagaimana cara meminjam buku?",
      answer:
        "Klik tombol 'Pinjam' pada buku yang tersedia, lalu datang ke perpustakaan dengan membawa kartu identitas untuk proses peminjaman.",
    },
    {
      question: "Berapa lama masa peminjaman buku?",
      answer:
        "Mahasiswa: 7 hari, Dosen: 14 hari. Dapat diperpanjang jika tidak ada antrian pemesanan.",
    },
  ];
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("semua");
  const [selectedLanguage, setSelectedLanguage] = useState("semua");
  const [selectedBook, setSelectedBook] = useState<any>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const booksPerPage = 5;

  const categories = [
    { id: "semua", label: "Semua Kategori", count: 50 },
    { id: "statistika", label: "Statistika", count: 10 },
    { id: "matematika", label: "Matematika", count: 10 },
    { id: "ekonomi", label: "Ekonometrika", count: 10 },
    { id: "komputasi", label: "Komputasi Statistik", count: 10 },
    { id: "metodologi", label: "Metodologi Penelitian", count: 10 },
  ];

  const books = [
    // Statistika (10 books)
    {
      id: 1,
      title: "Statistika Dasar: Teori dan Aplikasi",
      authors: ["Prof. Dr. Supranto, M.A.", "Dr. Nandan Limakrisna"],
      publisher: "Erlangga",
      year: 2023,
      edition: "Edisi ke-8",
      pages: 458,
      isbn: "978-602-298-123-4",
      category: "Statistika",
      language: "Indonesia",
      location: "Rak A1.2.3",
      status: "Tersedia",
      copies: 15,
      available: 12,
      rating: 4.8,
      description:
        "Buku komprehensif yang membahas konsep dasar statistika dengan pendekatan yang mudah dipahami, dilengkapi dengan contoh kasus dan latihan soal.",
    },
    {
      id: 2,
      title: "Introduction to Mathematical Statistics",
      authors: ["Robert V. Hogg", "Joseph McKean", "Allen T. Craig"],
      publisher: "Pearson",
      year: 2022,
      edition: "8th Edition",
      pages: 694,
      isbn: "978-013-468-824-9",
      category: "Statistika",
      language: "English",
      location: "Rak B2.1.5",
      status: "Tersedia",
      copies: 8,
      available: 6,
      rating: 4.9,
      description:
        "A comprehensive introduction to mathematical statistics for students with a solid mathematical background.",
    },
    {
      id: 3,
      title: "Statistika Inferensial",
      authors: ["Dr. Husaini Usman", "Dr. Purnomo Setiady Akbar"],
      publisher: "Bumi Aksara",
      year: 2023,
      edition: "Edisi ke-4",
      pages: 395,
      isbn: "978-602-217-845-2",
      category: "Statistika",
      language: "Indonesia",
      location: "Rak A1.3.1",
      status: "Tersedia",
      copies: 14,
      available: 11,
      rating: 4.6,
      description:
        "Konsep dan aplikasi statistika inferensial untuk pengujian hipotesis, estimasi parameter, dan analisis data.",
    },
    {
      id: 4,
      title: "Teori Probabilitas dan Distribusi",
      authors: ["Prof. Dr. Anwar Fitrianto", "Dr. Kusman Sadik"],
      publisher: "IPB Press",
      year: 2023,
      edition: "Edisi ke-2",
      pages: 412,
      isbn: "978-602-440-567-3",
      category: "Statistika",
      language: "Indonesia",
      location: "Rak A2.1.4",
      status: "Tersedia",
      copies: 16,
      available: 13,
      rating: 4.7,
      description:
        "Pembahasan komprehensif tentang teori probabilitas dan berbagai distribusi statistik beserta aplikasinya.",
    },
    {
      id: 5,
      title: "Analisis Statistik Multivariat",
      authors: ["Prof. Dr. Johnson", "Dr. Dean Wichern"],
      publisher: "Pearson",
      year: 2022,
      edition: "8th Edition",
      pages: 815,
      isbn: "978-013-497-892-1",
      category: "Statistika",
      language: "English",
      location: "Rak B1.3.2",
      status: "Tersedia",
      copies: 9,
      available: 7,
      rating: 4.8,
      description:
        "Applied multivariate statistical analysis covering PCA, factor analysis, clustering, and discriminant analysis.",
    },
    {
      id: 6,
      title: "Statistika Non-Parametrik",
      authors: ["Dr. Sidney Siegel", "Dr. N. John Castellan Jr."],
      publisher: "Gramedia Pustaka Utama",
      year: 2023,
      edition: "Edisi ke-3",
      pages: 399,
      isbn: "978-602-465-123-9",
      category: "Statistika",
      language: "Indonesia",
      location: "Rak A2.3.5",
      status: "Tersedia",
      copies: 15,
      available: 12,
      rating: 4.6,
      description:
        "Metode statistik non-parametrik untuk analisis data yang tidak memenuhi asumsi distribusi normal.",
    },
    {
      id: 7,
      title: "Statistika Deskriptif",
      authors: ["Dr. Bambang Suryoatmono"],
      publisher: "Salemba Empat",
      year: 2023,
      edition: "Edisi ke-5",
      pages: 320,
      isbn: "978-602-312-456-7",
      category: "Statistika",
      language: "Indonesia",
      location: "Rak A1.1.2",
      status: "Tersedia",
      copies: 12,
      available: 10,
      rating: 4.5,
      description:
        "Panduan lengkap untuk memahami dan menerapkan statistika deskriptif dalam penelitian.",
    },
    {
      id: 8,
      title: "Applied Statistics and Probability",
      authors: ["Douglas Montgomery", "George Runger"],
      publisher: "Wiley",
      year: 2022,
      edition: "7th Edition",
      pages: 784,
      isbn: "978-111-912-345-6",
      category: "Statistika",
      language: "English",
      location: "Rak B2.2.1",
      status: "Tersedia",
      copies: 10,
      available: 8,
      rating: 4.7,
      description:
        "Comprehensive coverage of applied statistics and probability for engineering and science students.",
    },
    {
      id: 9,
      title: "Biostatistika",
      authors: ["Dr. Soekidjo Notoatmodjo"],
      publisher: "Rineka Cipta",
      year: 2023,
      edition: "Edisi ke-3",
      pages: 380,
      isbn: "978-602-318-789-2",
      category: "Statistika",
      language: "Indonesia",
      location: "Rak A3.1.4",
      status: "Dipinjam",
      copies: 8,
      available: 0,
      rating: 4.4,
      description:
        "Penerapan metode statistik dalam bidang kesehatan dan biologi dengan contoh kasus praktis.",
    },
    {
      id: 10,
      title: "Statistical Learning Theory",
      authors: ["Vladimir Vapnik"],
      publisher: "Springer",
      year: 2022,
      edition: "2nd Edition",
      pages: 648,
      isbn: "978-038-798-235-4",
      category: "Statistika",
      language: "English",
      location: "Rak B3.1.2",
      status: "Tersedia",
      copies: 6,
      available: 5,
      rating: 4.8,
      description:
        "Foundation of statistical learning theory and its applications in machine learning.",
    },
    // Matematika (10 books)
    {
      id: 11,
      title: "Kalkulus dan Aljabar Linear",
      authors: ["Dr. Ir. Bambang Murdaka, M.T.", "Dr. Sartono Putro"],
      publisher: "ITB Press",
      year: 2023,
      edition: "Edisi ke-3",
      pages: 628,
      isbn: "978-602-291-234-5",
      category: "Matematika",
      language: "Indonesia",
      location: "Rak F2.3.1",
      status: "Tersedia",
      copies: 18,
      available: 15,
      rating: 4.5,
      description:
        "Materi kalkulus dan aljabar linear yang disesuaikan untuk mahasiswa statistika dan matematika terapan.",
    },
    {
      id: 12,
      title: "Riset Operasi: Pengantar dan Metode",
      authors: ["Dr. Taha Hamdy A.", "Dr. Subagyo Pangestu"],
      publisher: "Erlangga",
      year: 2023,
      edition: "Edisi ke-10",
      pages: 654,
      isbn: "978-602-298-567-8",
      category: "Matematika",
      language: "Indonesia",
      location: "Rak F1.2.7",
      status: "Tersedia",
      copies: 11,
      available: 8,
      rating: 4.4,
      description:
        "Konsep dan metode riset operasi termasuk pemrograman linear, teori antrian, dan analisis keputusan.",
    },
    {
      id: 13,
      title: "Discrete Mathematics and Its Applications",
      authors: ["Kenneth H. Rosen"],
      publisher: "McGraw-Hill",
      year: 2023,
      edition: "8th Edition",
      pages: 912,
      isbn: "978-125-963-831-4",
      category: "Matematika",
      language: "English",
      location: "Rak F2.1.8",
      status: "Tersedia",
      copies: 10,
      available: 8,
      rating: 4.7,
      description:
        "Introduction to discrete mathematics covering logic, proofs, sets, functions, algorithms, and graph theory.",
    },
    {
      id: 14,
      title: "Analisis Real",
      authors: ["Prof. Dr. Hendra Gunawan"],
      publisher: "ITB Press",
      year: 2022,
      edition: "Edisi ke-2",
      pages: 445,
      isbn: "978-602-291-567-8",
      category: "Matematika",
      language: "Indonesia",
      location: "Rak F3.1.3",
      status: "Tersedia",
      copies: 8,
      available: 6,
      rating: 4.6,
      description:
        "Pengantar analisis real dengan pembahasan limit, kontinuitas, diferensiabilitas, dan integrasi.",
    },
    {
      id: 15,
      title: "Linear Algebra and Its Applications",
      authors: ["David Lay", "Steven Lay", "Judi McDonald"],
      publisher: "Pearson",
      year: 2023,
      edition: "6th Edition",
      pages: 576,
      isbn: "978-013-485-140-7",
      category: "Matematika",
      language: "English",
      location: "Rak F1.3.2",
      status: "Tersedia",
      copies: 12,
      available: 9,
      rating: 4.8,
      description:
        "Comprehensive introduction to linear algebra with emphasis on applications and computational techniques.",
    },
    {
      id: 16,
      title: "Matematika Diskrit",
      authors: ["Dr. Rinaldi Munir"],
      publisher: "Informatika",
      year: 2022,
      edition: "Edisi ke-5",
      pages: 512,
      isbn: "978-602-251-234-9",
      category: "Matematika",
      language: "Indonesia",
      location: "Rak F2.2.5",
      status: "Tersedia",
      copies: 15,
      available: 12,
      rating: 4.5,
      description:
        "Konsep dasar matematika diskrit untuk ilmu komputer dan informatika.",
    },
    {
      id: 17,
      title: "Numerical Analysis",
      authors: ["Richard Burden", "Douglas Faires", "Annette Burden"],
      publisher: "Cengage Learning",
      year: 2023,
      edition: "10th Edition",
      pages: 872,
      isbn: "978-130-556-790-1",
      category: "Matematika",
      language: "English",
      location: "Rak F3.2.1",
      status: "Tersedia",
      copies: 9,
      available: 7,
      rating: 4.7,
      description:
        "Comprehensive treatment of numerical methods for solving mathematical problems using computers.",
    },
    {
      id: 18,
      title: "Teori Bilangan",
      authors: ["Dr. Ahmad Faisol"],
      publisher: "Graha Ilmu",
      year: 2023,
      edition: "Edisi ke-2",
      pages: 298,
      isbn: "978-602-262-345-7",
      category: "Matematika",
      language: "Indonesia",
      location: "Rak F1.1.4",
      status: "Tersedia",
      copies: 7,
      available: 5,
      rating: 4.3,
      description:
        "Pembahasan teori bilangan mulai dari konsep dasar hingga aplikasi dalam kriptografi.",
    },
    {
      id: 19,
      title: "Persamaan Diferensial",
      authors: ["Prof. Dr. Iwan Pranoto"],
      publisher: "ITB Press",
      year: 2022,
      edition: "Edisi ke-3",
      pages: 424,
      isbn: "978-602-291-678-1",
      category: "Matematika",
      language: "Indonesia",
      location: "Rak F3.3.2",
      status: "Dipinjam",
      copies: 10,
      available: 0,
      rating: 4.6,
      description:
        "Metode penyelesaian persamaan diferensial biasa dan parsial dengan aplikasi praktis.",
    },
    {
      id: 20,
      title: "Abstract Algebra",
      authors: ["David Dummit", "Richard Foote"],
      publisher: "Wiley",
      year: 2023,
      edition: "3rd Edition",
      pages: 944,
      isbn: "978-047-143-334-7",
      category: "Matematika",
      language: "English",
      location: "Rak F4.1.1",
      status: "Tersedia",
      copies: 6,
      available: 4,
      rating: 4.8,
      description:
        "Comprehensive introduction to abstract algebra including groups, rings, and fields.",
    },
    // Ekonometrika (10 books)
    {
      id: 21,
      title: "Ekonometrika: Dasar dan Aplikasinya",
      authors: ["Dr. Nachrowi Djalal Nachrowi", "Hardius Usman"],
      publisher: "Lembaga Penerbit FE UI",
      year: 2023,
      edition: "Edisi ke-5",
      pages: 524,
      isbn: "978-979-456-789-1",
      category: "Ekonometrika",
      language: "Indonesia",
      location: "Rak C1.3.7",
      status: "Tersedia",
      copies: 12,
      available: 9,
      rating: 4.7,
      description:
        "Pembahasan lengkap tentang teknik ekonometrika dari tingkat dasar hingga lanjutan dengan aplikasi menggunakan software statistik.",
    },
    {
      id: 22,
      title: "Ekonometrika Terapan",
      authors: ["Dr. Widarjono Agus", "Dr. Nachrowi Djalal"],
      publisher: "UPP STIM YKPN",
      year: 2023,
      edition: "Edisi ke-6",
      pages: 487,
      isbn: "978-602-496-234-1",
      category: "Ekonometrika",
      language: "Indonesia",
      location: "Rak C1.2.9",
      status: "Tersedia",
      copies: 13,
      available: 10,
      rating: 4.5,
      description:
        "Penerapan model-model ekonometrika dalam penelitian ekonomi dan bisnis dengan contoh kasus nyata.",
    },
    {
      id: 23,
      title: "Time Series Analysis",
      authors: ["James D. Hamilton"],
      publisher: "Princeton University Press",
      year: 2022,
      edition: "2nd Edition",
      pages: 799,
      isbn: "978-069-104-289-3",
      category: "Ekonometrika",
      language: "English",
      location: "Rak C2.1.4",
      status: "Dipinjam",
      copies: 7,
      available: 0,
      rating: 4.9,
      description:
        "Comprehensive treatment of time series econometrics including ARIMA, VAR, and cointegration models.",
    },
    {
      id: 24,
      title: "Panel Data Econometrics",
      authors: ["Badi Baltagi"],
      publisher: "Springer",
      year: 2023,
      edition: "6th Edition",
      pages: 445,
      isbn: "978-303-015-946-2",
      category: "Ekonometrika",
      language: "English",
      location: "Rak C2.2.3",
      status: "Tersedia",
      copies: 8,
      available: 6,
      rating: 4.6,
      description:
        "Advanced panel data methods for econometric analysis with applications in microeconomics.",
    },
    {
      id: 25,
      title: "Mikroekonometrika",
      authors: ["Dr. A. Colin Cameron", "Dr. Pravin K. Trivedi"],
      publisher: "Cambridge University Press",
      year: 2022,
      edition: "2nd Edition",
      pages: 692,
      isbn: "978-052-184-805-3",
      category: "Ekonometrika",
      language: "English",
      location: "Rak C1.1.5",
      status: "Tersedia",
      copies: 9,
      available: 7,
      rating: 4.8,
      description:
        "Methods and applications of microeconometrics using cross-sectional and panel data.",
    },
    {
      id: 26,
      title: "Ekonometrika Finansial",
      authors: ["Dr. Chris Brooks"],
      publisher: "Cambridge University Press",
      year: 2023,
      edition: "4th Edition",
      pages: 740,
      isbn: "978-110-884-640-5",
      category: "Ekonometrika",
      language: "English",
      location: "Rak C3.1.2",
      status: "Tersedia",
      copies: 10,
      available: 8,
      rating: 4.7,
      description:
        "Econometric methods for financial data analysis including volatility modeling and risk management.",
    },
    {
      id: 27,
      title: "Regresi Berganda dengan STATA",
      authors: ["Dr. Imam Ghozali"],
      publisher: "Badan Penerbit Undip",
      year: 2022,
      edition: "Edisi ke-3",
      pages: 356,
      isbn: "978-602-456-890-1",
      category: "Ekonometrika",
      language: "Indonesia",
      location: "Rak C1.4.1",
      status: "Tersedia",
      copies: 11,
      available: 9,
      rating: 4.4,
      description:
        "Panduan praktis analisis regresi berganda menggunakan software STATA untuk penelitian ekonomi.",
    },
    {
      id: 28,
      title: "Cointegration Analysis",
      authors: ["Søren Johansen"],
      publisher: "Oxford University Press",
      year: 2023,
      edition: "2nd Edition",
      pages: 368,
      isbn: "978-019-884-429-7",
      category: "Ekonometrika",
      language: "English",
      location: "Rak C2.3.4",
      status: "Tersedia",
      copies: 6,
      available: 4,
      rating: 4.8,
      description:
        "Advanced methods for cointegration analysis in economic time series data.",
    },
    {
      id: 29,
      title: "Ekonometrika Spasial",
      authors: ["Dr. Luc Anselin"],
      publisher: "Springer",
      year: 2022,
      edition: "3rd Edition",
      pages: 425,
      isbn: "978-642-224-896-3",
      category: "Ekonometrika",
      language: "English",
      location: "Rak C3.2.1",
      status: "Tersedia",
      copies: 7,
      available: 5,
      rating: 4.5,
      description:
        "Spatial econometric methods for analyzing cross-sectional and panel data with spatial dependencies.",
    },
    {
      id: 30,
      title: "Bayesian Econometrics",
      authors: ["Gary Koop"],
      publisher: "Wiley",
      year: 2023,
      edition: "2nd Edition",
      pages: 312,
      isbn: "978-111-974-568-2",
      category: "Ekonometrika",
      language: "English",
      location: "Rak C3.3.3",
      status: "Tersedia",
      copies: 5,
      available: 3,
      rating: 4.6,
      description:
        "Introduction to Bayesian methods in econometrics with practical applications and computational techniques.",
    },
    // Komputasi Statistik (10 books)
    {
      id: 31,
      title: "R for Data Science",
      authors: ["Hadley Wickham", "Garrett Grolemund"],
      publisher: "O'Reilly Media",
      year: 2023,
      edition: "2nd Edition",
      pages: 520,
      isbn: "978-149-205-170-4",
      category: "Komputasi Statistik",
      language: "English",
      location: "Rak D2.2.4",
      status: "Tersedia",
      copies: 10,
      available: 7,
      rating: 4.9,
      description:
        "Learn how to use R to turn raw data into insight, knowledge, and understanding with practical examples.",
    },
    {
      id: 32,
      title: "Python for Data Analysis",
      authors: ["Wes McKinney"],
      publisher: "O'Reilly Media",
      year: 2022,
      edition: "3rd Edition",
      pages: 579,
      isbn: "978-109-810-403-0",
      category: "Komputasi Statistik",
      language: "English",
      location: "Rak D2.1.8",
      status: "Tersedia",
      copies: 12,
      available: 9,
      rating: 4.8,
      description:
        "Data manipulation and analysis with pandas, NumPy, and IPython in the Python programming ecosystem.",
    },
    {
      id: 33,
      title: "Machine Learning: A Probabilistic Perspective",
      authors: ["Kevin P. Murphy"],
      publisher: "MIT Press",
      year: 2022,
      edition: "2nd Edition",
      pages: 1124,
      isbn: "978-026-204-328-3",
      category: "Komputasi Statistik",
      language: "English",
      location: "Rak D1.2.6",
      status: "Tersedia",
      copies: 6,
      available: 4,
      rating: 4.9,
      description:
        "Comprehensive introduction to machine learning from a probabilistic perspective covering supervised and unsupervised learning.",
    },
    {
      id: 34,
      title: "Analisis Data dengan SPSS",
      authors: ["Dr. Imam Ghozali"],
      publisher: "Badan Penerbit Undip",
      year: 2023,
      edition: "Edisi ke-9",
      pages: 465,
      isbn: "978-602-456-789-4",
      category: "Komputasi Statistik",
      language: "Indonesia",
      location: "Rak D1.3.7",
      status: "Tersedia",
      copies: 20,
      available: 17,
      rating: 4.5,
      description:
        "Panduan praktis analisis data menggunakan SPSS untuk penelitian kuantitatif dan pengujian hipotesis.",
    },
    {
      id: 35,
      title: "Introduction to Algorithms",
      authors: ["Thomas H. Cormen", "Charles E. Leiserson", "Ronald L. Rivest"],
      publisher: "MIT Press",
      year: 2022,
      edition: "4th Edition",
      pages: 1312,
      isbn: "978-026-204-630-7",
      category: "Komputasi Statistik",
      language: "English",
      location: "Rak D2.3.1",
      status: "Tersedia",
      copies: 8,
      available: 6,
      rating: 4.9,
      description:
        "Comprehensive introduction to algorithms and data structures with rigorous mathematical analysis.",
    },
    {
      id: 36,
      title: "Statistical Computing with R",
      authors: ["Maria Rizzo"],
      publisher: "Chapman & Hall",
      year: 2023,
      edition: "2nd Edition",
      pages: 456,
      isbn: "978-143-988-284-1",
      category: "Komputasi Statistik",
      language: "English",
      location: "Rak D1.1.3",
      status: "Tersedia",
      copies: 9,
      available: 7,
      rating: 4.6,
      description:
        "Introduction to statistical computing using R with emphasis on simulation and computational methods.",
    },
    {
      id: 37,
      title: "Deep Learning",
      authors: ["Ian Goodfellow", "Yoshua Bengio", "Aaron Courville"],
      publisher: "MIT Press",
      year: 2022,
      edition: "1st Edition",
      pages: 800,
      isbn: "978-026-203-561-3",
      category: "Komputasi Statistik",
      language: "English",
      location: "Rak D3.1.1",
      status: "Tersedia",
      copies: 7,
      available: 5,
      rating: 4.8,
      description:
        "Comprehensive introduction to deep learning methods and applications in artificial intelligence.",
    },
    {
      id: 38,
      title: "Data Mining dengan Weka",
      authors: ["Dr. Kusrini", "Dr. Emha Taufiq Luthfi"],
      publisher: "Andi",
      year: 2023,
      edition: "Edisi ke-2",
      pages: 342,
      isbn: "978-602-481-567-8",
      category: "Komputasi Statistik",
      language: "Indonesia",
      location: "Rak D2.4.2",
      status: "Dipinjam",
      copies: 8,
      available: 0,
      rating: 4.3,
      description:
        "Panduan praktis data mining menggunakan software Weka untuk analisis pola data.",
    },
    {
      id: 39,
      title: "Computational Statistics",
      authors: ["Geof Givens", "Jennifer Hoeting"],
      publisher: "Wiley",
      year: 2023,
      edition: "2nd Edition",
      pages: 476,
      isbn: "978-047-153-331-4",
      category: "Komputasi Statistik",
      language: "English",
      location: "Rak D1.4.1",
      status: "Tersedia",
      copies: 6,
      available: 4,
      rating: 4.7,
      description:
        "Modern computational methods for statistical analysis and data science applications.",
    },
    {
      id: 40,
      title: "Big Data Analytics dengan Apache Spark",
      authors: ["Dr. Sandy Kosasih"],
      publisher: "Informatika",
      year: 2022,
      edition: "Edisi ke-1",
      pages: 298,
      isbn: "978-602-251-789-5",
      category: "Komputasi Statistik",
      language: "Indonesia",
      location: "Rak D3.2.3",
      status: "Tersedia",
      copies: 5,
      available: 3,
      rating: 4.4,
      description:
        "Panduan analisis big data menggunakan Apache Spark untuk pemrosesan data skala besar.",
    },
    // Metodologi Penelitian (10 books)
    {
      id: 41,
      title: "Metode Penelitian Kuantitatif",
      authors: ["Prof. Dr. Sugiyono"],
      publisher: "Alfabeta",
      year: 2022,
      edition: "Edisi ke-15",
      pages: 372,
      isbn: "978-602-289-456-7",
      category: "Metodologi Penelitian",
      language: "Indonesia",
      location: "Rak E1.1.8",
      status: "Dipinjam",
      copies: 20,
      available: 0,
      rating: 4.6,
      description:
        "Panduan lengkap untuk melakukan penelitian kuantitatif mulai dari perencanaan hingga laporan penelitian.",
    },
    {
      id: 42,
      title: "Sampling Techniques",
      authors: ["William G. Cochran"],
      publisher: "Wiley",
      year: 2022,
      edition: "3rd Edition",
      pages: 428,
      isbn: "978-047-116-240-7",
      category: "Metodologi Penelitian",
      language: "English",
      location: "Rak E2.1.3",
      status: "Tersedia",
      copies: 8,
      available: 5,
      rating: 4.7,
      description:
        "Comprehensive treatment of sampling theory and methodology for survey research and data collection.",
    },
    {
      id: 43,
      title: "Metodologi Penelitian Kualitatif",
      authors: ["Prof. Dr. Lexy J. Moleong"],
      publisher: "Remaja Rosdakarya",
      year: 2023,
      edition: "Edisi ke-37",
      pages: 424,
      isbn: "978-602-446-234-7",
      category: "Metodologi Penelitian",
      language: "Indonesia",
      location: "Rak E1.2.6",
      status: "Tersedia",
      copies: 18,
      available: 15,
      rating: 4.4,
      description:
        "Panduan komprehensif untuk melakukan penelitian kualitatif dengan berbagai pendekatan dan metode.",
    },
    {
      id: 44,
      title: "Research Design: Qualitative, Quantitative and Mixed Methods",
      authors: ["John Creswell", "J. David Creswell"],
      publisher: "SAGE Publications",
      year: 2023,
      edition: "6th Edition",
      pages: 304,
      isbn: "978-150-637-681-9",
      category: "Metodologi Penelitian",
      language: "English",
      location: "Rak E2.2.1",
      status: "Tersedia",
      copies: 10,
      available: 8,
      rating: 4.8,
      description:
        "Comprehensive guide to research design covering qualitative, quantitative, and mixed methods approaches.",
    },
    {
      id: 45,
      title: "Teknik Sampling dalam Penelitian Survei",
      authors: ["Dr. Masri Singarimbun", "Dr. Sofian Effendi"],
      publisher: "LP3ES",
      year: 2022,
      edition: "Edisi ke-5",
      pages: 298,
      isbn: "978-979-530-234-6",
      category: "Metodologi Penelitian",
      language: "Indonesia",
      location: "Rak E1.3.2",
      status: "Tersedia",
      copies: 12,
      available: 10,
      rating: 4.5,
      description:
        "Panduan praktis teknik sampling untuk penelitian survei dan pengumpulan data lapangan.",
    },
    {
      id: 46,
      title: "Experimental Design and Analysis",
      authors: ["Douglas Montgomery"],
      publisher: "Wiley",
      year: 2023,
      edition: "10th Edition",
      pages: 752,
      isbn: "978-111-949-148-2",
      category: "Metodologi Penelitian",
      language: "English",
      location: "Rak E3.1.1",
      status: "Tersedia",
      copies: 9,
      available: 7,
      rating: 4.7,
      description:
        "Comprehensive coverage of experimental design principles and statistical analysis methods.",
    },
    {
      id: 47,
      title: "Validitas dan Reliabilitas Instrumen Penelitian",
      authors: ["Dr. Bambang Prasetyo", "Dr. Lina Miftahul Jannah"],
      publisher: "Rineka Cipta",
      year: 2023,
      edition: "Edisi ke-2",
      pages: 245,
      isbn: "978-602-318-456-9",
      category: "Metodologi Penelitian",
      language: "Indonesia",
      location: "Rak E2.3.4",
      status: "Tersedia",
      copies: 11,
      available: 9,
      rating: 4.3,
      description:
        "Panduan pengujian validitas dan reliabilitas instrumen dalam penelitian kuantitatif.",
    },
    {
      id: 48,
      title: "Survey Research Methods",
      authors: ["Floyd Fowler"],
      publisher: "SAGE Publications",
      year: 2022,
      edition: "6th Edition",
      pages: 184,
      isbn: "978-150-635-286-8",
      category: "Metodologi Penelitian",
      language: "English",
      location: "Rak E3.2.2",
      status: "Tersedia",
      copies: 8,
      available: 6,
      rating: 4.6,
      description:
        "Practical guide to conducting survey research including questionnaire design and data collection.",
    },
    {
      id: 49,
      title: "Analisis Data Penelitian dengan NVIVO",
      authors: ["Dr. Helaluddin", "Dr. Hengki Wijaya"],
      publisher: "Sekolah Tinggi Theologia Jaffray",
      year: 2023,
      edition: "Edisi ke-1",
      pages: 198,
      isbn: "978-602-531-789-3",
      category: "Metodologi Penelitian",
      language: "Indonesia",
      location: "Rak E1.4.3",
      status: "Tersedia",
      copies: 7,
      available: 5,
      rating: 4.2,
      description:
        "Panduan analisis data kualitatif menggunakan software NVIVO untuk penelitian sosial.",
    },
    {
      id: 50,
      title: "Meta-Analysis: A Structural Equation Modeling Approach",
      authors: ["Mike Cheung"],
      publisher: "Wiley",
      year: 2023,
      edition: "1st Edition",
      pages: 408,
      isbn: "978-111-937-129-5",
      category: "Metodologi Penelitian",
      language: "English",
      location: "Rak E3.3.1",
      status: "Tersedia",
      copies: 5,
      available: 3,
      rating: 4.5,
      description:
        "Advanced methods for meta-analysis using structural equation modeling techniques.",
    },
  ];

  const filteredBooks = books.filter((book) => {
    const matchesSearch =
      book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      book.authors.some((author) =>
        author.toLowerCase().includes(searchQuery.toLowerCase()),
      );
    const matchesCategory =
      selectedCategory === "semua" ||
      book.category.toLowerCase() === selectedCategory;
    const matchesLanguage =
      selectedLanguage === "semua" ||
      book.language.toLowerCase() === selectedLanguage;

    return matchesSearch && matchesCategory && matchesLanguage;
  });

  // Pagination calculations
  const totalPages = Math.ceil(filteredBooks.length / booksPerPage);
  const startIndex = (currentPage - 1) * booksPerPage;
  const endIndex = startIndex + booksPerPage;
  const currentBooks = filteredBooks.slice(startIndex, endIndex);

  // Reset to page 1 when filters change
  const handleFilterChange = (filterType: string, value: string) => {
    setCurrentPage(1);
    if (filterType === "category") {
      setSelectedCategory(value);
    } else if (filterType === "language") {
      setSelectedLanguage(value);
    }
  };

  const handleBorrowBook = (book: any) => {
    const params = new URLSearchParams({
      id: book.id.toString(),
      title: book.title,
      author: book.authors.join(", "),
      isbn: book.isbn,
      callNumber: book.call_number,
    });
    navigate(`/borrow-book?${params.toString()}`);
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Header */}
      <div className="bg-gradient-to-br from-stis-blue-light via-white to-stis-gray-light pt-24 pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              Koleksi <span className="text-stis-blue">Cetak</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 leading-relaxed">
              Temukan ribuan buku cetak berkualitas tinggi dalam bidang
              statistika, matematika, dan ilmu terkait yang tersedia di
              perpustakaan STIS
            </p>
          </div>
        </div>
      </div>

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
                    placeholder="Cari judul buku, penulis, atau kata kunci..."
                    value={searchQuery}
                    onChange={(e) => {
                      setSearchQuery(e.target.value);
                      setCurrentPage(1);
                    }}
                    className="pl-12 py-3 text-base rounded-xl border-2 border-gray-200 focus:border-stis-blue"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Overview */}
      <section className="py-12 bg-stis-gray-light">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Kategori Koleksi
              </h2>
              <p className="text-gray-600">
                Jelajahi koleksi berdasarkan kategori ilmu
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {categories.map((category) => (
                <Card
                  key={category.id}
                  className={`cursor-pointer transition-all hover:shadow-lg ${
                    selectedCategory === category.id
                      ? "ring-2 ring-stis-blue bg-stis-blue-light"
                      : ""
                  }`}
                  onClick={() => handleFilterChange("category", category.id)}
                >
                  <CardContent className="p-4 text-center">
                    <div className="text-xl font-bold text-stis-blue mb-1">
                      {category.count.toLocaleString()}
                    </div>
                    <div className="text-xs text-gray-600">
                      {category.label}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Book List */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-bold text-gray-900">
                Hasil Pencarian ({filteredBooks.length} buku) - Halaman{" "}
                {currentPage} dari {totalPages}
              </h2>
              <Select defaultValue="terbaru">
                <SelectTrigger className="w-48">
                  <SelectValue placeholder="Urutkan berdasarkan" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="terbaru">Terbaru</SelectItem>
                  <SelectItem value="judul">Judul</SelectItem>
                  <SelectItem value="penulis">Penulis</SelectItem>
                  <SelectItem value="rating">Rating Tertinggi</SelectItem>
                  <SelectItem value="tahun">Tahun Terbit</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-6">
              {currentBooks.map((book) => (
                <Card
                  key={book.id}
                  className="border-0 shadow-lg hover:shadow-xl transition-shadow"
                >
                  <CardContent className="p-6">
                    <div className="flex flex-col lg:flex-row gap-6">
                      {/* Book Cover */}
                      <div className="w-full sm:w-32 lg:w-32 h-32 sm:h-40 lg:h-40 bg-gradient-to-br from-stis-blue-light to-stis-gray-light rounded-lg flex items-center justify-center flex-shrink-0 mx-auto sm:mx-0">
                        <BookOpen className="w-8 sm:w-12 h-8 sm:h-12 text-stis-blue/40" />
                      </div>

                      {/* Book Details */}
                      <div className="flex-1">
                        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-2">
                              <Badge variant="secondary" className="text-xs">
                                {book.category}
                              </Badge>
                              <Badge variant="outline" className="text-xs">
                                {book.language}
                              </Badge>
                              <Badge
                                variant={
                                  book.status === "Tersedia" &&
                                  !isBookBorrowed(book.id.toString())
                                    ? "default"
                                    : "destructive"
                                }
                                className="text-xs"
                              >
                                {isBookBorrowed(book.id.toString())
                                  ? "Dipinjam"
                                  : book.status}
                              </Badge>
                            </div>

                            <h3 className="text-xl font-semibold text-gray-900 mb-2 cursor-pointer">
                              {book.title}
                            </h3>

                            <div className="space-y-2 text-sm text-gray-600 mb-4">
                              <div className="flex items-center gap-2">
                                <User className="w-4 h-4" />
                                <span>{book.authors.join(", ")}</span>
                              </div>
                              <div className="flex items-center gap-2">
                                <Building className="w-4 h-4" />
                                <span>
                                  {book.publisher} • {book.year} •{" "}
                                  {book.edition}
                                </span>
                              </div>
                              <div className="flex items-center gap-2">
                                <MapPin className="w-4 h-4" />
                                <span>
                                  {book.location} • {book.pages} halaman
                                </span>
                              </div>
                            </div>

                            <p className="text-gray-600 text-sm leading-relaxed mb-4">
                              {book.description}
                            </p>

                            <div className="flex items-center gap-4 text-xs text-gray-500">
                              <div className="flex items-center gap-1">
                                <Star className="w-3 h-3 text-yellow-400 fill-current" />
                                <span>{book.rating}</span>
                              </div>
                              <span>
                                Tersedia: {book.available}/{book.copies}
                              </span>
                              <span>ISBN: {book.isbn}</span>
                            </div>
                          </div>

                          {/* Action Buttons */}
                          <div className="flex flex-row sm:flex-col gap-2 w-full sm:w-auto lg:w-32">
                            <Button
                              size="sm"
                              className="bg-blue-600 hover:bg-blue-700"
                              disabled={
                                book.status === "Dipinjam" ||
                                isBookBorrowed(book.id.toString())
                              }
                              onClick={() => setSelectedBook(book)}
                            >
                              <Eye className="w-4 h-4 mr-2" />
                              Detail
                            </Button>
                            <Button
                              size="sm"
                              variant="outline"
                              className="border-stis-blue text-stis-blue hover:bg-stis-blue hover:text-white"
                              disabled={
                                book.status === "Dipinjam" ||
                                isBookBorrowed(book.id.toString())
                              }
                              onClick={() => handleBorrowBook(book)}
                            >
                              {isBookBorrowed(book.id.toString())
                                ? "Dipinjam"
                                : "Pinjam"}
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
              <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-2 mt-12 px-4">
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
                        variant={currentPage === page ? "default" : "outline"}
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
        </div>
      </section>

      <StandardFooter />

      {/* Book Detail Dialog */}
      {selectedBook && (
        <Dialog
          open={!!selectedBook}
          onOpenChange={() => setSelectedBook(null)}
        >
          <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle className="text-xl font-bold">
                {selectedBook.title}
              </DialogTitle>
            </DialogHeader>
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="md:col-span-1">
                  <div className="aspect-[3/4] bg-gradient-to-br from-stis-blue-light to-stis-gray-light rounded-lg flex items-center justify-center">
                    <BookOpen className="w-16 h-16 text-stis-blue/40" />
                  </div>
                </div>
                <div className="md:col-span-2 space-y-4">
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">
                      Detail Buku
                    </h3>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Penulis:</span>
                        <span className="font-medium">
                          {selectedBook.authors.join(", ")}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Penerbit:</span>
                        <span className="font-medium">
                          {selectedBook.publisher}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Tahun:</span>
                        <span className="font-medium">{selectedBook.year}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">ISBN:</span>
                        <span className="font-medium">{selectedBook.isbn}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Halaman:</span>
                        <span className="font-medium">
                          {selectedBook.pages} halaman
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Lokasi:</span>
                        <span className="font-medium">
                          {selectedBook.location}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Status:</span>
                        <Badge
                          variant={
                            selectedBook.status === "Tersedia" &&
                            !isBookBorrowed(selectedBook.id.toString())
                              ? "default"
                              : "destructive"
                          }
                        >
                          {isBookBorrowed(selectedBook.id.toString())
                            ? "Dipinjam"
                            : selectedBook.status}
                        </Badge>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Rating:</span>
                        <div className="flex items-center gap-1">
                          <Star className="w-4 h-4 text-yellow-400 fill-current" />
                          <span className="font-medium">
                            {selectedBook.rating}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">
                      Deskripsi
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {selectedBook.description}
                    </p>
                  </div>

                  <div className="flex gap-3 pt-4">
                    <Button
                      className="flex-1 bg-stis-blue hover:bg-stis-blue-dark"
                      disabled={
                        selectedBook.status !== "Tersedia" ||
                        isBookBorrowed(selectedBook.id.toString())
                      }
                      onClick={() => {
                        handleBorrowBook(selectedBook);
                        setSelectedBook(null);
                      }}
                    >
                      {isBookBorrowed(selectedBook.id.toString())
                        ? "Buku Dipinjam"
                        : "Pinjam Buku"}
                    </Button>
                    <Button
                      variant="outline"
                      className="border-blue-600 text-blue-600 hover:bg-red-600 hover:text-white hover:border-red-600"
                      onClick={() => setSelectedBook(null)}
                    >
                      Tutup
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      )}

      {/* Help Popup */}
      <HelpPopup pageHelp={helpItems} />
    </div>
  );
}
