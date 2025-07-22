import { useState } from "react";
import { HelpCircle, X, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface HelpItem {
  question: string;
  answer: string;
}

interface HelpPopupProps {
  pageHelp: HelpItem[];
}

export default function HelpPopup({ pageHelp }: HelpPopupProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Help Button */}
      <Button
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 rounded-full bg-stis-blue hover:bg-stis-blue-dark shadow-lg hover:shadow-xl transition-all duration-200"
      >
        {isOpen ? (
          <X className="w-6 h-6 text-white" />
        ) : (
          <HelpCircle className="w-6 h-6 text-white" />
        )}
      </Button>

      {/* Help Panel */}
      {isOpen && (
        <Card className="absolute bottom-16 right-0 w-80 max-h-96 overflow-y-auto shadow-xl border-0 bg-white">
          <CardHeader className="bg-stis-blue text-white rounded-t-lg">
            <CardTitle className="flex items-center gap-2 text-lg">
              <MessageCircle className="w-5 h-5" />
              Bantuan Halaman
            </CardTitle>
          </CardHeader>
          <CardContent className="p-4 space-y-4">
            {pageHelp.map((item, index) => (
              <div
                key={index}
                className="border-b border-gray-100 last:border-b-0 pb-3 last:pb-0"
              >
                <h4 className="font-semibold text-gray-900 mb-2 text-sm">
                  {item.question}
                </h4>
                <p className="text-gray-600 text-xs leading-relaxed">
                  {item.answer}
                </p>
              </div>
            ))}
            <div className="pt-2 border-t border-gray-100">
              <p className="text-xs text-gray-500 text-center">
                Butuh bantuan lebih lanjut?{" "}
                <a
                  href="/info/contact"
                  className="text-stis-blue hover:underline"
                >
                  Hubungi kami
                </a>
              </p>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
