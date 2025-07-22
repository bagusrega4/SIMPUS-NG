import { useState } from "react";
import { Menu, X } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function TestNavigation() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const handleClick = (path: string) => {
    console.log("Test navigation clicked:", path);
    navigate(path);
    setIsOpen(false);
  };

  return (
    <div className="bg-red-500 text-white p-4 fixed top-0 right-0 z-50">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-white text-red-500 p-2 rounded"
      >
        {isOpen ? <X /> : <Menu />}
      </button>

      {isOpen && (
        <div className="absolute top-full right-0 bg-white text-black border rounded mt-2 p-4 min-w-[200px]">
          <div>Test Menu:</div>
          <button
            onClick={() => handleClick("/")}
            className="block w-full text-left p-2 border-b hover:bg-gray-100"
          >
            Home
          </button>
          <button
            onClick={() => handleClick("/collection/books")}
            className="block w-full text-left p-2 border-b hover:bg-gray-100"
          >
            Books
          </button>
          <button
            onClick={() => handleClick("/info/contact")}
            className="block w-full text-left p-2 hover:bg-gray-100"
          >
            Contact
          </button>
        </div>
      )}
    </div>
  );
}
