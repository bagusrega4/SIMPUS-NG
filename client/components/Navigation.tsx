import { useState, useRef, useEffect } from "react";
import { BookOpen, Menu, X, ChevronDown, User, LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";

interface DropdownItem {
  label: string;
  href: string;
  description?: string;
}

interface NavItem {
  label: string;
  href?: string;
  dropdown?: DropdownItem[];
}

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const profileRef = useRef<HTMLDivElement>(null);
  const location = useLocation();
  const navigate = useNavigate();
  const { isAuthenticated, logout, user } = useAuth();

  const isActiveRoute = (href?: string, dropdown?: DropdownItem[]) => {
    if (href) {
      return location.pathname === href;
    }
    if (dropdown) {
      return dropdown.some((item) => location.pathname === item.href);
    }
    return false;
  };

  const navItems: NavItem[] = [
    {
      label: "Beranda",
      href: "/",
    },

    {
      label: "Koleksi",
      dropdown: [
        {
          label: "Koleksi Cetak",
          href: "/collection/books",
          description: "Buku fisik dan publikasi cetak",
        },
        {
          label: "Koleksi Digital",
          href: "/collection/digital",
          description: "E-book, e-journal, dan repository",
        },
        {
          label: "Repository Polstat STIS",
          href: "/collection/repository",
          description: "Karya ilmiah mahasiswa dan dosen",
        },
        ...(isAuthenticated
          ? [
              {
                label: "Riwayat Pinjaman",
                href: "/collection/borrowing-history",
                description: "Histori peminjaman buku Anda",
              },
              {
                label: "Riwayat Baca",
                href: "/collection/reading-history",
                description: "Riwayat aktivitas membaca Anda",
              },
            ]
          : []),
      ],
    },
    {
      label: "Layanan",
      dropdown: [
        {
          label: "Sirkulasi",
          href: "/services/circulation",
          description: "Proses peminjaman buku perpustakaan",
        },
        {
          label: "Bebas Perpustakaan",
          href: "/services/clearance",
          description: "Surat keterangan bebas perpustakaan",
        },
      ],
    },
    {
      label: "Informasi",
      dropdown: [
        {
          label: "Peraturan",
          href: "/info/rules",
          description: "Tata tertib dan peraturan perpustakaan",
        },
        {
          label: "Denah",
          href: "/info/map",
          description: "Denah ruangan dan fasilitas perpustakaan",
        },
        {
          label: "FAQ",
          href: "/info/faq",
          description: "Pertanyaan yang sering diajukan",
        },
        {
          label: "Berita & Pengumuman",
          href: "/info/news",
          description: "Berita terbaru dan pengumuman",
        },
        {
          label: "Kontak",
          href: "/info/contact",
          description: "Informasi kontak perpustakaan",
        },
      ],
    },
    {
      label: "Tentang Kami",
      dropdown: [
        {
          label: "Profil Perpustakaan",
          href: "/about/profile",
          description: "Sejarah dan visi misi perpustakaan",
        },
        {
          label: "Struktur Organisasi",
          href: "/about/structure",
          description: "Susunan organisasi dan staff",
        },
        {
          label: "Visi & Misi",
          href: "/about/vision",
          description: "Visi, misi, dan tujuan perpustakaan",
        },
        {
          label: "Fasilitas",
          href: "/about/facilities",
          description: "Fasilitas dan layanan perpustakaan",
        },
      ],
    },
  ];

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setActiveDropdown(null);
      }
      if (
        profileRef.current &&
        !profileRef.current.contains(event.target as Node)
      ) {
        setIsProfileOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleDropdownToggle = (label: string) => {
    setActiveDropdown(activeDropdown === label ? null : label);
  };

  const handleAuthAction = () => {
    if (isAuthenticated) {
      logout();
      navigate("/");
    } else {
      navigate("/login");
    }
  };

  const handleProfileClick = () => {
    setIsProfileOpen(!isProfileOpen);
  };

  const handleProfileNavigation = (path: string) => {
    navigate(path);
    setIsProfileOpen(false);
  };

  const handleLogout = () => {
    logout();
    navigate("/");
    setIsProfileOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="/" className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-stis-blue rounded-lg flex items-center justify-center">
              <BookOpen className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-stis-blue">SIMPus</h1>
              <p className="text-xs text-gray-600">Polstat STIS Library</p>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav
            className="hidden lg:flex items-center space-x-2"
            ref={dropdownRef}
          >
            {navItems.map((item) => (
              <div key={item.label} className="relative">
                {item.dropdown ? (
                  <button
                    onClick={() => handleDropdownToggle(item.label)}
                    className={`flex items-center space-x-1 px-4 py-2 transition-colors font-medium rounded-lg hover:bg-gray-50 ${
                      isActiveRoute(undefined, item.dropdown)
                        ? "text-stis-blue bg-emerald-50"
                        : "text-gray-700 hover:text-stis-blue"
                    }`}
                  >
                    <span>{item.label}</span>
                    <ChevronDown
                      className={`w-4 h-4 transition-transform ${
                        activeDropdown === item.label ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                ) : (
                  <a
                    href={item.href}
                    className={`px-4 py-2 transition-colors font-medium rounded-lg hover:bg-gray-50 ${
                      isActiveRoute(item.href)
                        ? "text-stis-blue bg-emerald-50"
                        : "text-gray-700 hover:text-stis-blue"
                    }`}
                  >
                    {item.label}
                  </a>
                )}

                {/* Dropdown Menu */}
                {item.dropdown && activeDropdown === item.label && (
                  <div className="absolute top-full left-0 mt-2 w-80 bg-white rounded-xl shadow-lg border border-gray-200 py-2 z-50">
                    {item.dropdown.map((dropdownItem) => (
                      <a
                        key={dropdownItem.label}
                        href={dropdownItem.href}
                        className="block px-4 py-3 hover:bg-gray-50 transition-colors"
                      >
                        <div className="font-medium text-gray-900 mb-1">
                          {dropdownItem.label}
                        </div>
                        {dropdownItem.description && (
                          <div className="text-sm text-gray-600">
                            {dropdownItem.description}
                          </div>
                        )}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Profile/Login Button & Mobile Menu */}
          <div className="flex items-center space-x-4">
            {isAuthenticated ? (
              <div className="hidden sm:block relative" ref={profileRef}>
                <button
                  onClick={handleProfileClick}
                  className="flex items-center space-x-2 p-2 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  <div className="w-8 h-8 bg-gradient-to-br from-stis-blue to-stis-cyan rounded-full flex items-center justify-center overflow-hidden">
                    {user?.profilePhoto ? (
                      <img
                        src={user.profilePhoto}
                        alt="Profile"
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <User className="w-4 h-4 text-white" />
                    )}
                  </div>
                  <ChevronDown className="w-4 h-4 text-gray-600" />
                </button>

                {/* Profile Dropdown */}
                {isProfileOpen && (
                  <div className="absolute right-0 top-full mt-2 w-48 bg-white rounded-xl shadow-lg border border-gray-200 py-2 z-50">
                    <button
                      onClick={() => handleProfileNavigation("/profile")}
                      className="w-full px-4 py-3 text-left hover:bg-gray-50 transition-colors flex items-center"
                    >
                      <User className="w-4 h-4 mr-2 text-gray-600" />
                      <span className="text-gray-700">Profile</span>
                    </button>
                    <hr className="my-1" />
                    <button
                      onClick={handleLogout}
                      className="w-full px-4 py-3 text-left hover:bg-gray-50 transition-colors flex items-center"
                    >
                      <LogOut className="w-4 h-4 mr-2 text-red-600" />
                      <span className="text-red-600">Keluar</span>
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <Button
                onClick={handleAuthAction}
                className="hidden sm:flex bg-stis-blue hover:bg-stis-blue-dark"
              >
                Masuk
              </Button>
            )}

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 rounded-lg hover:bg-gray-100"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-gray-200">
            <nav className="space-y-2">
              {navItems.map((item) => (
                <div key={item.label}>
                  {item.dropdown ? (
                    <div>
                      <button
                        onClick={() => handleDropdownToggle(item.label)}
                        className="w-full flex items-center justify-between px-4 py-3 text-gray-700 hover:text-stis-blue transition-colors font-medium rounded-lg hover:bg-gray-50"
                      >
                        <span>{item.label}</span>
                        <ChevronDown
                          className={`w-4 h-4 transition-transform ${
                            activeDropdown === item.label ? "rotate-180" : ""
                          }`}
                        />
                      </button>
                      {activeDropdown === item.label && (
                        <div className="pl-4 mt-2 space-y-2">
                          {item.dropdown.map((dropdownItem) => (
                            <a
                              key={dropdownItem.label}
                              href={dropdownItem.href}
                              className="block px-4 py-2 text-sm text-gray-600 hover:text-stis-blue transition-colors rounded-lg hover:bg-gray-50"
                              onClick={() => setIsMenuOpen(false)}
                            >
                              {dropdownItem.label}
                            </a>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <a
                      href={item.href}
                      className="block px-4 py-3 text-gray-700 hover:text-stis-blue transition-colors font-medium rounded-lg hover:bg-gray-50"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.label}
                    </a>
                  )}
                </div>
              ))}
              <div className="px-4 pt-4">
                {isAuthenticated ? (
                  <div className="space-y-2">
                    <Button
                      onClick={() => {
                        handleProfileNavigation("/profile");
                        setIsMenuOpen(false);
                      }}
                      variant="outline"
                      className="w-full border-stis-blue text-stis-blue hover:bg-stis-blue hover:text-white"
                    >
                      <div className="w-4 h-4 mr-2 rounded-full overflow-hidden flex items-center justify-center bg-gradient-to-br from-stis-blue to-stis-cyan">
                        {user?.profilePhoto ? (
                          <img
                            src={user.profilePhoto}
                            alt="Profile"
                            className="w-full h-full object-cover"
                          />
                        ) : (
                          <User className="w-3 h-3 text-white" />
                        )}
                      </div>
                      Profile
                    </Button>
                    <Button
                      onClick={() => {
                        handleLogout();
                        setIsMenuOpen(false);
                      }}
                      className="w-full bg-red-600 hover:bg-red-700"
                    >
                      <LogOut className="w-4 h-4 mr-2" />
                      Keluar
                    </Button>
                  </div>
                ) : (
                  <Button
                    onClick={handleAuthAction}
                    className="w-full bg-stis-blue hover:bg-stis-blue-dark"
                  >
                    Masuk
                  </Button>
                )}
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
