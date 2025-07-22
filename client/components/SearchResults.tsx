import { useState, useEffect, useRef } from "react";
import {
  Search,
  X,
  ExternalLink,
  BookOpen,
  FileText,
  Info,
  Users,
  Settings,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { searchContent, SearchResult } from "@/lib/searchData";

interface SearchResultsProps {
  query: string;
  isOpen: boolean;
  onClose: () => void;
}

const getCategoryIcon = (category: string) => {
  switch (category) {
    case "Koleksi":
      return BookOpen;
    case "Layanan":
      return FileText;
    case "Informasi":
      return Info;
    case "Tentang Kami":
      return Users;
    case "Akun":
      return Settings;
    default:
      return Search;
  }
};

const getCategoryColor = (category: string) => {
  switch (category) {
    case "Koleksi":
      return "bg-blue-100 text-blue-800";
    case "Layanan":
      return "bg-green-100 text-green-800";
    case "Informasi":
      return "bg-purple-100 text-purple-800";
    case "Tentang Kami":
      return "bg-orange-100 text-orange-800";
    case "Akun":
      return "bg-gray-100 text-gray-800";
    default:
      return "bg-gray-100 text-gray-800";
  }
};

export default function SearchResults({
  query,
  isOpen,
  onClose,
}: SearchResultsProps) {
  const [results, setResults] = useState<SearchResult[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!query.trim()) {
      setResults([]);
      setSelectedIndex(-1);
      return;
    }

    setIsLoading(true);
    // Simulate search delay for better UX
    const searchTimeout = setTimeout(() => {
      const searchResults = searchContent(query);
      setResults(searchResults);
      setSelectedIndex(-1);
      setIsLoading(false);
    }, 300);

    return () => clearTimeout(searchTimeout);
  }, [query]);

  // Handle keyboard navigation
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      switch (e.key) {
        case "ArrowDown":
          e.preventDefault();
          setSelectedIndex((prev) =>
            prev < results.length - 1 ? prev + 1 : prev,
          );
          break;
        case "ArrowUp":
          e.preventDefault();
          setSelectedIndex((prev) => (prev > 0 ? prev - 1 : -1));
          break;
        case "Enter":
          e.preventDefault();
          if (selectedIndex >= 0 && selectedIndex < results.length) {
            handleResultClick(results[selectedIndex].url);
          }
          break;
        case "Escape":
          onClose();
          break;
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, results, selectedIndex, onClose]);

  if (!isOpen) return null;

  const handleResultClick = (url: string) => {
    window.location.href = url;
    onClose();
  };

  return (
    <div
      className="fixed inset-0 bg-black/50 z-50 flex items-start justify-center pt-4 sm:pt-20"
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div
        ref={modalRef}
        className="bg-white rounded-lg shadow-xl w-full max-w-4xl mx-2 sm:mx-4 max-h-[95vh] sm:max-h-[80vh] overflow-hidden"
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 sm:p-6 border-b">
          <div className="flex items-center space-x-2 sm:space-x-3 min-w-0 flex-1">
            <Search className="w-5 h-5 sm:w-6 sm:h-6 text-stis-blue flex-shrink-0" />
            <h2 className="text-lg sm:text-xl font-semibold text-gray-900 truncate">
              Hasil Pencarian
            </h2>
            {query && (
              <Badge variant="secondary" className="ml-1 sm:ml-2 text-xs sm:text-sm">
                "{query.length > 15 ? query.substring(0, 15) + '...' : query}"
              </Badge>
            )}
          </div>
          <Button variant="ghost" size="sm" onClick={onClose} className="flex-shrink-0">
            <X className="w-4 h-4" />
          </Button>
        </div>

        {/* Content */}
        <div className="p-4 sm:p-6 overflow-y-auto max-h-[70vh] sm:max-h-[60vh]">
          {isLoading ? (
            <div className="flex items-center justify-center py-12">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-stis-blue"></div>
              <span className="ml-3 text-gray-600">Mencari...</span>
            </div>
          ) : !query.trim() ? (
            <div className="text-center py-12">
              <Search className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <p className="text-gray-500 text-lg">
                Masukkan kata kunci untuk mencari
              </p>
              <p className="text-gray-400 text-sm mt-2">
                Cari halaman, layanan, koleksi, informasi, dan konten lainnya
              </p>
            </div>
          ) : results.length === 0 ? (
            <div className="text-center py-12">
              <Search className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <p className="text-gray-500 text-lg">
                Tidak ada hasil yang ditemukan
              </p>
              <p className="text-gray-400 text-sm mt-2">
                Coba gunakan kata kunci yang berbeda atau lebih umum
              </p>
            </div>
          ) : (
            <div className="space-y-4">
              <div className="flex items-center justify-between mb-6">
                <p className="text-gray-600">
                  Ditemukan {results.length} hasil untuk "{query}"
                </p>
              </div>

              {results.map((result, index) => {
                const CategoryIcon = getCategoryIcon(result.category);
                const isSelected = index === selectedIndex;
                return (
                  <Card
                    key={result.id}
                    className={`cursor-pointer hover:shadow-lg transition-all duration-200 hover:-translate-y-1 ${
                      isSelected ? "ring-2 ring-stis-blue shadow-lg" : ""
                    }`}
                    onClick={() => handleResultClick(result.url)}
                    onMouseEnter={() => setSelectedIndex(index)}
                  >
                    <CardContent className="p-4 sm:p-6">
                      <div className="flex items-start space-x-3 sm:space-x-4">
                        <div className="flex-shrink-0">
                          <div className="w-10 h-10 sm:w-12 sm:h-12 bg-stis-blue/10 rounded-lg flex items-center justify-center">
                            <CategoryIcon className="w-5 h-5 sm:w-6 sm:h-6 text-stis-blue" />
                          </div>
                        </div>
                        <div className="flex-grow min-w-0">
                          <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-3 mb-2">
                            <h3 className="text-base sm:text-lg font-semibold text-gray-900 truncate mb-1 sm:mb-0">
                              {result.title}
                            </h3>
                            <Badge
                              className={`text-xs ${getCategoryColor(result.category)} self-start sm:self-center flex-shrink-0`}
                            >
                              {result.category}
                            </Badge>
                          </div>
                          <p className="text-gray-600 text-sm leading-relaxed mb-3 line-clamp-2">
                            {result.description}
                          </p>
                          <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 space-y-2 sm:space-y-0 text-xs text-gray-500">
                            <span className="flex items-center truncate">
                              <ExternalLink className="w-3 h-3 mr-1 flex-shrink-0" />
                              <span className="truncate">{result.url}</span>
                            </span>
                            {result.tags && result.tags.length > 0 && (
                              <div className="flex items-center flex-wrap gap-1">
                                <span className="whitespace-nowrap">Tags:</span>
                                <div className="flex flex-wrap gap-1">
                                  {result.tags.slice(0, 2).map((tag, index) => (
                                    <span
                                      key={index}
                                      className="bg-gray-100 px-2 py-1 rounded text-xs whitespace-nowrap"
                                    >
                                      {tag}
                                    </span>
                                  ))}
                                  {result.tags.length > 2 && (
                                    <span className="text-gray-400 whitespace-nowrap">
                                      +{result.tags.length - 2}
                                    </span>
                                  )}
                                </div>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          )}
        </div>

        {/* Footer */}
        {results.length > 0 && (
          <div className="border-t p-3 sm:p-4 bg-gray-50">
            <p className="text-center text-xs sm:text-sm text-gray-500">
              <span className="hidden sm:inline">Gunakan ↑↓ untuk navigasi, Enter untuk membuka, Esc untuk menutup.</span>
              <span className="sm:hidden">Tap hasil untuk membuka</span>
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
