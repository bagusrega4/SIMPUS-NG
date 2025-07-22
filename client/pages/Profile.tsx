import { useState, useRef } from "react";
import {
  User,
  Mail,
  Phone,
  MapPin,
  Calendar,
  BookOpen,
  Award,
  Edit2,
  Save,
  X,
  Camera,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Navigation from "@/components/Navigation";
import HelpPopup from "@/components/HelpPopup";
import StandardFooter from "@/components/StandardFooter";
import { useAuth } from "@/contexts/AuthContext";

export default function Profile() {
  const { user, isAuthenticated, updateProfilePhoto } = useAuth();
  const [isEditing, setIsEditing] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  // Generate profile data based on logged in user
  const getInitialProfileData = () => {
    const email = user?.email || "";

    if (email === "erna@stis.ac.id") {
      return {
        name: "Erna Nurmawati",
        email: email,
        phone: "+62 821-9876-5432",
        nip: "-",
        program: "Dosen",
        jabatan: "Dosen Tetap",
        department: "Komputasi Statistik",
        address: "Jakarta Selatan, DKI Jakarta",
        joinDate: "Januari 2018",
        nim: undefined,
        angkatan: undefined,
      };
    } else if (email === "222212455@stis.ac.id") {
      return {
        name: "Agape Bagus Rega Anggara",
        email: email,
        phone: "+62 812-3456-7890",
        nim: "222212455",
        program: "D-IV Statistika",
        angkatan: "2022",
        address: "Jakarta Timur, DKI Jakarta",
        joinDate: "September 2022",
        nip: undefined,
        jabatan: undefined,
        department: undefined,
      };
    } else {
      // Default profile data for other users
      return {
        name: user?.name || email.split("@")[0],
        email: email,
        phone: "+62 800-0000-0000",
        nim: "000000000",
        program: "D-IV Statistika",
        angkatan: "2024",
        address: "Jakarta, DKI Jakarta",
        joinDate: "September 2024",
        nip: undefined,
        jabatan: undefined,
        department: undefined,
      };
    }
  };

  const [profileData, setProfileData] = useState(getInitialProfileData());

  // Redirect if not authenticated
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-white">
        <Navigation />
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-stis-blue-light via-white to-stis-gray-light pt-16">
          <div className="text-center max-w-md mx-auto px-4">
            <div className="w-24 h-24 bg-stis-blue/10 rounded-full flex items-center justify-center mx-auto mb-8">
              <User className="w-12 h-12 text-stis-blue" />
            </div>
            <h1 className="text-2xl font-bold text-gray-900 mb-4">
              Login Diperlukan
            </h1>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Silakan login terlebih dahulu untuk mengakses profil Anda.
            </p>
            <a href="/login">
              <Button className="bg-stis-blue hover:bg-stis-blue-dark text-white px-6 py-3 rounded-lg">
                Login Sekarang
              </Button>
            </a>
          </div>
        </div>
      </div>
    );
  }

  const helpItems = [
    {
      question: "Bagaimana cara mengubah foto profil?",
      answer:
        "Klik tombol kamera di foto profil Anda, lalu pilih foto baru dari perangkat Anda.",
    },
    {
      question: "Bisakah mengubah email profil?",
      answer:
        "Email tidak dapat diubah karena terkait dengan akun Google STIS Anda. Hubungi admin jika ada masalah.",
    },
    {
      question: "Bagaimana cara mengaktifkan notifikasi?",
      answer:
        "Pergi ke tab 'Pengaturan' dan atur preferensi notifikasi sesuai kebutuhan Anda.",
    },
  ];

  // Generate reading stats based on user type
  const getReadingStats = () => {
    const email = user?.email || "";

    if (email === "erna@stis.ac.id") {
      return [
        {
          label: "Total Buku Dibaca",
          value: "156",
          icon: BookOpen,
          color: "text-stis-blue",
        },
        {
          label: "Buku Dipinjam",
          value: "2",
          icon: Calendar,
          color: "text-orange-500",
        },
        {
          label: "Pencapaian",
          value: "18",
          icon: Award,
          color: "text-yellow-500",
        },
        {
          label: "Reading Streak",
          value: "42 hari",
          icon: BookOpen,
          color: "text-green-500",
        },
      ];
    } else {
      return [
        {
          label: "Total Buku Dibaca",
          value: "89",
          icon: BookOpen,
          color: "text-stis-blue",
        },
        {
          label: "Buku Dipinjam",
          value: "3",
          icon: Calendar,
          color: "text-orange-500",
        },
        {
          label: "Pencapaian",
          value: "12",
          icon: Award,
          color: "text-yellow-500",
        },
        {
          label: "Reading Streak",
          value: "15 hari",
          icon: BookOpen,
          color: "text-green-500",
        },
      ];
    }
  };

  const readingStats = getReadingStats();

  // Generate achievements based on user type
  const getRecentAchievements = () => {
    const email = user?.email || "";

    if (email === "erna@stis.ac.id") {
      return [
        {
          name: "Scholar Master",
          description: "Membaca 150+ buku ilmiah",
          date: "1 hari yang lalu",
          icon: "🎓",
        },
        {
          name: "Research Guru",
          description: "Mengakses 25 jurnal dalam sebulan",
          date: "3 hari yang lalu",
          icon: "🔬",
        },
        {
          name: "Knowledge Seeker",
          description: "Konsisten membaca 40+ hari",
          date: "1 minggu yang lalu",
          icon: "🧠",
        },
      ];
    } else {
      return [
        {
          name: "Bookworm",
          description: "Membaca 50 buku",
          date: "2 hari yang lalu",
          icon: "🐛",
        },
        {
          name: "Speed Reader",
          description: "Membaca 10 buku dalam sebulan",
          date: "1 minggu yang lalu",
          icon: "⚡",
        },
        {
          name: "Consistent Reader",
          description: "Membaca 15 hari berturut-turut",
          date: "2 minggu yang lalu",
          icon: "🔥",
        },
      ];
    }
  };

  const recentAchievements = getRecentAchievements();

  const handleSave = () => {
    // In real app, send to API
    setIsEditing(false);
    console.log("Profile updated:", profileData);
  };

  const handleCancel = () => {
    setIsEditing(false);
    // Reset form data if needed
  };

  const handleInputChange = (field: string, value: string) => {
    setProfileData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handlePhotoUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      // Validate file type
      if (!file.type.startsWith("image/")) {
        alert("Harap pilih file gambar yang valid (JPG, PNG, etc.)");
        return;
      }

      // Validate file size (max 5MB)
      if (file.size > 5 * 1024 * 1024) {
        alert("Ukuran file terlalu besar. Maksimal 5MB.");
        return;
      }

      // Create object URL for preview and save to context
      const reader = new FileReader();
      reader.onload = (e) => {
        const photoUrl = e.target?.result as string;
        updateProfilePhoto(photoUrl);
      };
      reader.readAsDataURL(file);

      console.log("Photo uploaded and saved:", file.name);
    }
  };

  const handlePhotoClick = () => {
    fileInputRef.current?.click();
  };

  const handleRemovePhoto = () => {
    updateProfilePhoto("");
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Header */}
      <div className="bg-gradient-to-br from-stis-blue-light via-white to-stis-gray-light pt-24 pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              <span className="text-stis-blue">Profil</span> Saya
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 leading-relaxed">
              Kelola informasi pribadi, preferensi, dan lihat statistik
              aktivitas perpustakaan Anda
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <Tabs defaultValue="profile" className="w-full">
              <TabsList className="grid w-full grid-cols-2 max-w-md mx-auto mb-12">
                <TabsTrigger value="profile">Profil</TabsTrigger>
                <TabsTrigger value="statistics">Statistik</TabsTrigger>
              </TabsList>

              {/* Profile Tab */}
              <TabsContent value="profile">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  {/* Profile Card */}
                  <div className="lg:col-span-1">
                    <Card className="border-0 shadow-lg">
                      <CardContent className="p-6 text-center">
                        <div className="relative inline-block mb-6">
                          <div className="w-32 h-32 bg-gradient-to-br from-stis-blue to-stis-cyan rounded-full flex items-center justify-center mx-auto relative overflow-hidden">
                            {user?.profilePhoto ? (
                              <img
                                src={user.profilePhoto}
                                alt="Profile"
                                className="w-full h-full object-cover"
                              />
                            ) : (
                              <User className="w-16 h-16 text-white" />
                            )}
                            <button
                              onClick={handlePhotoClick}
                              className="absolute bottom-2 right-2 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow"
                              title="Upload Foto"
                            >
                              <Camera className="w-4 h-4 text-gray-600" />
                            </button>
                            {user?.profilePhoto && (
                              <button
                                onClick={handleRemovePhoto}
                                className="absolute bottom-2 left-2 w-8 h-8 bg-red-500 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow"
                                title="Hapus Foto"
                              >
                                <X className="w-4 h-4 text-white" />
                              </button>
                            )}
                          </div>
                          <input
                            ref={fileInputRef}
                            type="file"
                            accept="image/*"
                            onChange={handlePhotoUpload}
                            className="hidden"
                          />
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">
                          {profileData.name}
                        </h3>
                        <Badge className="mb-4">{profileData.program}</Badge>
                        <p className="text-gray-600 text-sm mb-4">
                          {profileData.nip && profileData.nip !== "-" ? (
                            <>NIP: {profileData.nip} • {profileData.jabatan || "Dosen"}</>
                          ) : profileData.nip === "-" ? (
                            <>NIP: - • {profileData.jabatan || "Dosen"}</>
                          ) : profileData.nim ? (
                            <>NIM: {profileData.nim} • Angkatan {profileData.angkatan}</>
                          ) : (
                            "Mahasiswa/Dosen"
                          )}
                        </p>
                        <Button
                          onClick={() => setIsEditing(!isEditing)}
                          variant="outline"
                          className="w-full border-stis-blue text-stis-blue hover:bg-stis-blue hover:text-white"
                        >
                          <Edit2 className="w-4 h-4 mr-2" />
                          {isEditing ? "Batal Edit" : "Edit Profil"}
                        </Button>
                      </CardContent>
                    </Card>
                  </div>

                  {/* Profile Details */}
                  <div className="lg:col-span-2">
                    <Card className="border-0 shadow-lg">
                      <CardHeader>
                        <CardTitle className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                          <span>Informasi Pribadi</span>
                          {isEditing && (
                            <div className="flex gap-2 w-full sm:w-auto">
                              <Button
                                onClick={handleSave}
                                size="sm"
                                className="bg-stis-blue hover:bg-stis-blue-dark flex-1 sm:flex-none text-xs sm:text-sm"
                              >
                                <Save className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                                Simpan
                              </Button>
                              <Button
                                onClick={handleCancel}
                                variant="outline"
                                size="sm"
                                className="flex-1 sm:flex-none text-xs sm:text-sm"
                              >
                                <X className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                                Batal
                              </Button>
                            </div>
                          )}
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div>
                            <Label htmlFor="name" className="text-gray-700">
                              Nama Lengkap
                            </Label>
                            {isEditing ? (
                              <Input
                                id="name"
                                value={profileData.name}
                                onChange={(e) =>
                                  handleInputChange("name", e.target.value)
                                }
                                className="mt-1"
                              />
                            ) : (
                              <div className="flex items-center mt-2">
                                <User className="w-4 h-4 text-gray-400 mr-2" />
                                <span>{profileData.name}</span>
                              </div>
                            )}
                          </div>

                          <div>
                            <Label htmlFor="email" className="text-gray-700">
                              Email
                            </Label>
                            <div className="flex items-center mt-2">
                              <Mail className="w-4 h-4 text-gray-400 mr-2" />
                              <span className="text-gray-600">
                                {profileData.email}
                              </span>
                              <Badge variant="outline" className="ml-2 text-xs">
                                Tidak dapat diubah
                              </Badge>
                            </div>
                          </div>

                          <div>
                            <Label htmlFor="phone" className="text-gray-700">
                              Nomor Telepon
                            </Label>
                            {isEditing ? (
                              <Input
                                id="phone"
                                value={profileData.phone}
                                onChange={(e) =>
                                  handleInputChange("phone", e.target.value)
                                }
                                className="mt-1"
                              />
                            ) : (
                              <div className="flex items-center mt-2">
                                <Phone className="w-4 h-4 text-gray-400 mr-2" />
                                <span>{profileData.phone}</span>
                              </div>
                            )}
                          </div>

                          <div>
                            <Label htmlFor="address" className="text-gray-700">
                              Alamat
                            </Label>
                            {isEditing ? (
                              <Input
                                id="address"
                                value={profileData.address}
                                onChange={(e) =>
                                  handleInputChange("address", e.target.value)
                                }
                                className="mt-1"
                              />
                            ) : (
                              <div className="flex items-center mt-2">
                                <MapPin className="w-4 h-4 text-gray-400 mr-2" />
                                <span>{profileData.address}</span>
                              </div>
                            )}
                          </div>

                          {profileData.nip ? (
                            <div>
                              <Label className="text-gray-700">NIP</Label>
                              <div className="flex items-center mt-2">
                                <span className="text-gray-600">
                                  {profileData.nip}
                                </span>
                              </div>
                            </div>
                          ) : (
                            <div>
                              <Label className="text-gray-700">NIM</Label>
                              <div className="flex items-center mt-2">
                                <span className="text-gray-600">
                                  {profileData.nim}
                                </span>
                              </div>
                            </div>
                          )}

                          {profileData.jabatan && (
                            <div>
                              <Label className="text-gray-700">Jabatan</Label>
                              <div className="flex items-center mt-2">
                                <span className="text-gray-600">
                                  {profileData.jabatan}
                                </span>
                              </div>
                            </div>
                          )}

                          {profileData.department && (
                            <div>
                              <Label className="text-gray-700">Departemen</Label>
                              <div className="flex items-center mt-2">
                                <span className="text-gray-600">
                                  {profileData.department}
                                </span>
                              </div>
                            </div>
                          )}

                          <div>
                            <Label className="text-gray-700">
                              Tanggal Bergabung
                            </Label>
                            <div className="flex items-center mt-2">
                              <Calendar className="w-4 h-4 text-gray-400 mr-2" />
                              <span>{profileData.joinDate}</span>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </TabsContent>

              {/* Statistics Tab */}
              <TabsContent value="statistics">
                <div className="space-y-8">
                  {/* Stats Cards */}
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {readingStats.map((stat, index) => {
                      const IconComponent = stat.icon;
                      return (
                        <Card key={index} className="border-0 shadow-lg">
                          <CardContent className="p-6 text-center">
                            <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                              <IconComponent
                                className={`w-6 h-6 ${stat.color}`}
                              />
                            </div>
                            <div
                              className={`text-2xl font-bold mb-1 ${stat.color}`}
                            >
                              {stat.value}
                            </div>
                            <div className="text-sm text-gray-600">
                              {stat.label}
                            </div>
                          </CardContent>
                        </Card>
                      );
                    })}
                  </div>

                  {/* Recent Achievements */}
                  <Card className="border-0 shadow-lg">
                    <CardHeader>
                      <CardTitle>Pencapaian Terbaru</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {recentAchievements.map((achievement, index) => (
                          <div
                            key={index}
                            className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg"
                          >
                            <div className="text-2xl">{achievement.icon}</div>
                            <div className="flex-1">
                              <h4 className="font-semibold text-gray-900">
                                {achievement.name}
                              </h4>
                              <p className="text-sm text-gray-600">
                                {achievement.description}
                              </p>
                              <p className="text-xs text-gray-500 mt-1">
                                {achievement.date}
                              </p>
                            </div>
                            <Badge className="bg-yellow-100 text-yellow-700">
                              Baru
                            </Badge>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>

      <StandardFooter />

      {/* Help Popup */}
      <HelpPopup pageHelp={helpItems} />
    </div>
  );
}
