import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";

interface BorrowedBook {
  id: string;
  title: string;
  author: string;
  borrowedDate: string;
  userId: string;
}

interface BorrowedBooksContextType {
  borrowedBooks: BorrowedBook[];
  addBorrowedBook: (book: BorrowedBook) => void;
  isBookBorrowed: (bookId: string) => boolean;
  getBorrowedBooksByUser: (userId: string) => BorrowedBook[];
}

const BorrowedBooksContext = createContext<
  BorrowedBooksContextType | undefined
>(undefined);

export const useBorrowedBooks = () => {
  const context = useContext(BorrowedBooksContext);
  if (context === undefined) {
    throw new Error(
      "useBorrowedBooks must be used within a BorrowedBooksProvider",
    );
  }
  return context;
};

interface BorrowedBooksProviderProps {
  children: ReactNode;
}

export const BorrowedBooksProvider: React.FC<BorrowedBooksProviderProps> = ({
  children,
}) => {
  const [borrowedBooks, setBorrowedBooks] = useState<BorrowedBook[]>([]);

  // Load borrowed books from localStorage on component mount
  useEffect(() => {
    const savedBorrowedBooks = localStorage.getItem("borrowedBooks");
    if (savedBorrowedBooks) {
      try {
        const parsedBooks = JSON.parse(savedBorrowedBooks);
        setBorrowedBooks(parsedBooks);
      } catch (error) {
        // Invalid stored data, clear it
        localStorage.removeItem("borrowedBooks");
      }
    }
  }, []);

  const addBorrowedBook = (book: BorrowedBook) => {
    const updatedBooks = [...borrowedBooks, book];
    setBorrowedBooks(updatedBooks);
    localStorage.setItem("borrowedBooks", JSON.stringify(updatedBooks));
  };

  const isBookBorrowed = (bookId: string): boolean => {
    return borrowedBooks.some((book) => book.id === bookId);
  };

  const getBorrowedBooksByUser = (userId: string): BorrowedBook[] => {
    return borrowedBooks.filter((book) => book.userId === userId);
  };

  const value: BorrowedBooksContextType = {
    borrowedBooks,
    addBorrowedBook,
    isBookBorrowed,
    getBorrowedBooksByUser,
  };

  return (
    <BorrowedBooksContext.Provider value={value}>
      {children}
    </BorrowedBooksContext.Provider>
  );
};
