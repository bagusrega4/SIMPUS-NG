import { useState } from "react";
import { BookOpen, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-stis-blue rounded-lg flex items-center justify-center">
              <BookOpen className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-stis-blue">SIMPus</h1>
              <p className="text-xs text-gray-600">STIS Library</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className="text-gray-700 hover:text-stis-blue transition-colors font-medium"
            >
              Beranda
            </Link>
            <Link
              to="/about"
              className="text-gray-700 hover:text-stis-blue transition-colors font-medium"
            >
              Tentang Kami
            </Link>
            <Link
              to="/collection"
              className="text-gray-700 hover:text-stis-blue transition-colors font-medium"
            >
              Koleksi
            </Link>
            <Link
              to="/help"
              className="text-gray-700 hover:text-stis-blue transition-colors font-medium"
            >
              Bantuan
            </Link>
          </nav>

          {/* Login Button & Mobile Menu */}
          <div className="flex items-center space-x-4">
            <Button className="hidden sm:flex bg-stis-blue hover:bg-stis-blue-dark">
              Masuk
            </Button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-gray-100"
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
          <div className="md:hidden py-4 border-t border-gray-200">
            <nav className="flex flex-col space-y-3">
              <Link
                to="/"
                className="px-4 py-2 text-gray-700 hover:text-stis-blue transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Beranda
              </Link>
              <Link
                to="/about"
                className="px-4 py-2 text-gray-700 hover:text-stis-blue transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Tentang Kami
              </Link>
              <Link
                to="/collection"
                className="px-4 py-2 text-gray-700 hover:text-stis-blue transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Koleksi
              </Link>
              <Link
                to="/help"
                className="px-4 py-2 text-gray-700 hover:text-stis-blue transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Bantuan
              </Link>
              <div className="px-4 pt-2">
                <Button className="w-full bg-stis-blue hover:bg-stis-blue-dark">
                  Masuk
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
