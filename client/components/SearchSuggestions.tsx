import { useState, useEffect } from "react";
import { Search, Clock, TrendingUp } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface SearchSuggestionsProps {
  query: string;
  isVisible: boolean;
  onSuggestionClick: (suggestion: string) => void;
  onClose: () => void;
}

const popularSearches = [
  "koleksi buku",
  "peminjaman",
  "jam operasional",
  "repository",
  "e-journal",
  "surat bebas perpustakaan",
  "peraturan",
  "kontak",
  "fasilitas",
  "login",
];

const searchSuggestions = [
  "Cara meminjam buku",
  "Download formulir",
  "Jam buka perpustakaan",
  "Koleksi digital",
  "Perpanjangan buku",
  "Wifi perpustakaan",
  "Lokasi perpustakaan",
  "Upload tugas akhir",
  "Bantuan sistem",
  "FAQ perpustakaan",
];

export default function SearchSuggestions({
  query,
  isVisible,
  onSuggestionClick,
  onClose,
}: SearchSuggestionsProps) {
  const [recentSearches, setRecentSearches] = useState<string[]>([]);

  useEffect(() => {
    // Load recent searches from localStorage
    const saved = localStorage.getItem("recent-searches");
    if (saved) {
      try {
        setRecentSearches(JSON.parse(saved));
      } catch {
        setRecentSearches([]);
      }
    }
  }, []);

  const saveRecentSearch = (searchTerm: string) => {
    if (!searchTerm.trim()) return;

    const updated = [
      searchTerm,
      ...recentSearches.filter((term) => term !== searchTerm),
    ].slice(0, 5);

    setRecentSearches(updated);
    localStorage.setItem("recent-searches", JSON.stringify(updated));
  };

  const handleSuggestionClick = (suggestion: string) => {
    saveRecentSearch(suggestion);
    onSuggestionClick(suggestion);
    onClose();
  };

  const filteredSuggestions = searchSuggestions
    .filter((suggestion) =>
      suggestion.toLowerCase().includes(query.toLowerCase()),
    )
    .slice(0, 5);

  if (!isVisible) return null;

  return (
    <div className="absolute top-full left-0 right-0 mt-2 z-50">
      <Card className="shadow-lg border-2">
        <CardContent className="p-0">
          {query.trim() === "" ? (
            // Show popular and recent searches when no query
            <div className="py-2">
              {recentSearches.length > 0 && (
                <div className="px-4 py-2">
                  <div className="flex items-center space-x-2 mb-2">
                    <Clock className="w-4 h-4 text-gray-400" />
                    <span className="text-sm font-medium text-gray-600">
                      Pencarian Terbaru
                    </span>
                  </div>
                  {recentSearches.map((search, index) => (
                    <button
                      key={index}
                      onClick={() => handleSuggestionClick(search)}
                      className="block w-full text-left px-2 py-1 text-sm text-gray-700 hover:bg-gray-100 rounded"
                    >
                      {search}
                    </button>
                  ))}
                </div>
              )}

              <div className="px-4 py-2 border-t">
                <div className="flex items-center space-x-2 mb-2">
                  <TrendingUp className="w-4 h-4 text-gray-400" />
                  <span className="text-sm font-medium text-gray-600">
                    Pencarian Populer
                  </span>
                </div>
                {popularSearches.slice(0, 5).map((search, index) => (
                  <button
                    key={index}
                    onClick={() => handleSuggestionClick(search)}
                    className="block w-full text-left px-2 py-1 text-sm text-gray-700 hover:bg-gray-100 rounded"
                  >
                    {search}
                  </button>
                ))}
              </div>
            </div>
          ) : (
            // Show filtered suggestions when there's a query
            <div className="py-2">
              {filteredSuggestions.length > 0 && (
                <div className="px-4 py-2">
                  <div className="flex items-center space-x-2 mb-2">
                    <Search className="w-4 h-4 text-gray-400" />
                    <span className="text-sm font-medium text-gray-600">
                      Saran Pencarian
                    </span>
                  </div>
                  {filteredSuggestions.map((suggestion, index) => (
                    <button
                      key={index}
                      onClick={() => handleSuggestionClick(suggestion)}
                      className="block w-full text-left px-2 py-1 text-sm text-gray-700 hover:bg-gray-100 rounded"
                    >
                      <span className="font-medium">
                        {suggestion.substring(0, query.length)}
                      </span>
                      {suggestion.substring(query.length)}
                    </button>
                  ))}
                </div>
              )}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
