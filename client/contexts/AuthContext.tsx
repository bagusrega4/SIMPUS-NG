import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";

interface User {
  email: string;
  name?: string;
  profilePhoto?: string;
  isAuthenticated: boolean;
}

interface AuthContextType {
  user: User | null;
  login: (email: string, name?: string) => void;
  logout: () => void;
  updateProfilePhoto: (photoUrl: string) => void;
  isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);

  // Check for existing session on component mount
  useEffect(() => {
    const savedUser = localStorage.getItem("authUser");
    if (savedUser) {
      try {
        const parsedUser = JSON.parse(savedUser);
        setUser(parsedUser);
      } catch (error) {
        // Invalid stored data, clear it
        localStorage.removeItem("authUser");
      }
    }
  }, []);

  const login = (email: string, name?: string) => {
    const userData: User = {
      email,
      name: name || email.split("@")[0], // Use email prefix as default name
      isAuthenticated: true,
    };
    setUser(userData);
    localStorage.setItem("authUser", JSON.stringify(userData));
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("authUser");
  };

  const updateProfilePhoto = (photoUrl: string) => {
    if (user) {
      const updatedUser = {
        ...user,
        profilePhoto: photoUrl,
      };
      setUser(updatedUser);
      localStorage.setItem("authUser", JSON.stringify(updatedUser));
    }
  };

  const isAuthenticated = user?.isAuthenticated || false;

  const value: AuthContextType = {
    user,
    login,
    logout,
    updateProfilePhoto,
    isAuthenticated,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
