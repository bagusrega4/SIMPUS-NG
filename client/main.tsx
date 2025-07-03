import "./global.css";

import { Toaster } from "@/components/ui/toaster";
import { createRoot } from "react-dom/client";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Profile from "./pages/about/Profile";
import Structure from "./pages/about/Structure";
import Vision from "./pages/about/Vision";
import Facilities from "./pages/about/Facilities";
import Books from "./pages/collection/Books";
import Digital from "./pages/collection/Digital";
import Repository from "./pages/collection/Repository";
import BorrowingHistory from "./pages/collection/BorrowingHistory";
import ReadingHistory from "./pages/collection/ReadingHistory";
import Circulation from "./pages/services/Circulation";
import Clearance from "./pages/services/Clearance";
import Rules from "./pages/info/Rules";
import Map from "./pages/info/Map";
import FAQ from "./pages/info/FAQ";
import News from "./pages/info/News";
import Contact from "./pages/info/Contact";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about/profile" element={<Profile />} />
          <Route path="/about/structure" element={<Structure />} />
          <Route path="/about/vision" element={<Vision />} />
          <Route path="/about/facilities" element={<Facilities />} />
          <Route path="/collection/books" element={<Books />} />
          <Route path="/collection/digital" element={<Digital />} />
          <Route path="/collection/repository" element={<Repository />} />
          <Route
            path="/collection/borrowing-history"
            element={<BorrowingHistory />}
          />
          <Route
            path="/collection/reading-history"
            element={<ReadingHistory />}
          />
          <Route path="/services/circulation" element={<Circulation />} />
          <Route path="/services/clearance" element={<Clearance />} />
          <Route path="/info/rules" element={<Rules />} />
          <Route path="/info/map" element={<Map />} />
          <Route path="/info/faq" element={<FAQ />} />
          <Route path="/info/news" element={<News />} />
          <Route path="/info/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

createRoot(document.getElementById("root")!).render(<App />);
