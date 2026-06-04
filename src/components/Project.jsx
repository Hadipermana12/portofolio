import topUpImg from '../assets/top-up.png';
import kalibrasiImg from '../assets/kalibrasi.png';
import diesShopImg from '../assets/dies-shop.png';
import ecomerce from '../assets/e-comerse.png'
import wiintruction from '../assets/wi.png';
import dashbordKmma from '../assets/dashbord-kmma.png';
import mobileKmma from '../assets/mobile-kmma.jpeg';
import topUpAppss from '../assets/top-up_apps.png';

export const dummyProjects = [
    {
    id: 1, // Sesuaikan ID ini dengan urutan project di portofolio Anda
    Img: topUpImg, // Pastikan variabel gambar di-import di bagian atas file
    Title: "Khadoetz Store - Platform Top Up & Joki MLBB",
    Description: "Platform modern untuk layanan top-up game legal resmi dan joki MLBB premium dengan estetika visual futuristik (Cyberpunk Dark Mode). Proyek ini dibangun menggunakan arsitektur clean & modular yang memisahkan modul transaksi kompleks untuk menjamin performa render yang super cepat. Dilengkapi dengan sticky checkout bar melayang di mobile yang responsif, validasi formulir real-time, penyesuaian rasio banner adaptif, serta transisi frosted-glass blur navbar yang dioptimalkan bebas dari bug Stacking Context.",
    Link: "https://khadoetz-store.vercel.app/",
    Github: "https://github.com/Hadipermana12/top-up_web",
    detailLink: "/project/1",
    TechStack: ["React", "Vite", "Tailwind CSS", "Framer Motion", "React Router"],
    Features: [
      "Modular Clean Architecture (Pemisahan Form Transaksi & Joki)",
      "Desain Futuristik Cyberpunk dengan Efek Frosted Glass Mulus",
      "Tata Letak Grid 3 Kolom Mobile yang Rata & Seimbang (Flex-Centering)",
      "Sticky Mobile Checkout Bar dengan Pulsating Neon Warning",
      "Rasio Carousel Banner yang Fully Responsive di Semua Perangkat",
      "Staggered Entrance Animation menggunakan Framer Motion"
    ]
  },

 {
    id: 2,
    Img: dashbordKmma,
    subImage: mobileKmma,
    Title: "KMMA One - Sistem Informasi Koperasi Terpadu",
    Description: "Platform portal terpadu untuk Koperasi Menara Terus Makmur (KMMA) di PT. Menara Terus Makmur. Sistem ini dirancang untuk mengelola empat ruang lingkup (scope) utama: Simpanan, Peminjaman, operasional Toko Koperasi (Point of Sales), dan penyewaan kendaraan (Rental Mobil). Dilengkapi dengan Dashboard Admin Web modern dan aplikasi Mobile untuk kemudahan akses pengguna.\n\n(Catatan: Proyek ini dibuat selama masa magang saya di PT. Menara Terus Makmur. Oleh karena itu, source code (Github) bersifat Private, dan tautan Live Demo hanya dapat diakses secara khusus melalui jaringan WiFi internal perusahaan.)",
    Link: "Khusus WiFi PT. Menara Terus Makmur",
    Github: "Private",
    detailLink: "/project/2",
    TechStack: ["React", "Vite", "Tailwind CSS", "Node.js", "Express", "MySQL", "Flutter", "Dart"],
    Features: [
      "Manajemen Simpan & Pinjam (Plafon, Bunga, Cicilan)",
      "Sistem Reservasi & Manajemen Jadwal Rental Mobil",
      "Modul Kasir (Point of Sales) untuk Toko Koperasi",
      "Portal Dashboard Admin KMMA Terpusat",
      "Sistem Autentikasi & Otorisasi Bertingkat"
    ]
  },
    {
    id: 3, // Sesuaikan dengan urutan id Anda
    Img: diesShopImg, // Sesuaikan dengan nama variabel gambar yang Anda import
    Title: "Dies Shop - Stock Control System",
    Description: "Sistem manajemen inventaris dan pemantauan produksi terpadu yang dibangun menggunakan React dan Node.js. Platform ini dirancang khusus untuk mengelola ketersediaan dies material secara real-time di lantai pabrik. Dilengkapi dengan fitur pemantauan status stok otomatis, pelacakan Work in Progress (WIP), manajemen Purchase Request (PR), serta dashboard analitik interaktif.\n\n(Catatan: Proyek ini dibuat selama masa magang saya di PT. Menara Terus Makmur. Oleh karena itu, source code (Github) bersifat Private, dan tautan Live Demo hanya dapat diakses secara khusus melalui jaringan WiFi internal perusahaan.)",
    Link: "Khusus WiFi PT. Menara Terus Makmur", // Ganti dengan link deploy (jika ada)
    Github: "Private", // Ganti dengan link repo github Anda (jika ada)
    detailLink: "/project/3", // Sesuaikan dengan id
    TechStack: ["React", "Tailwind", "Node.js", "Express", "MySQL"],
    Features: [
      "Real-time Dashboard & Analitik Stok",
      "Pemantauan Work In Progress (WIP)",
      "Sistem Peringatan Dini Kritis & Kosong",
      "Manajemen Transaksi & Purchase Request",
      "Role-based Access Control"
    ]
  },
  {
    id: 4,
    Img: kalibrasiImg,
    Title: "E-Kalibrasi",
    Description: "Sistem informasi berbasis web yang dirancang secara khusus untuk mengelola, menjadwalkan, memantau, dan mendokumentasikan proses kalibrasi seluruh aset Alat Ukur serta Jigs & Gauge di lantai produksi. Platform ini dilengkapi dengan sistem pengingat otomatis (Auto-Reminder), dashboard pemantauan real-time berdesain minimalis modern, dan fitur persetujuan tanpa kertas (Paperless Approval) yang terintegrasi langsung dengan Tanda Tangan Digital pada Sertifikat PDF.\n\n(Catatan: Proyek ini dikembangkan selama masa magang saya di PT. Menara Terus Makmur. Oleh karena itu, source code (Github) bersifat Private, dan aplikasi hanya dapat diakses secara khusus melalui jaringan WiFi internal perusahaan.)",
    Link: "Khusus WiFi PT. Menara Terus Makmur",
    Github: "Private",
    detailLink: "/project/4",
    TechStack: ["React", "Tailwind", "Node.js", "Express", "MySQL", "Recharts"],
    Features: [
      "Dashboard Monitoring Real-time",
      "Sistem Auto-Reminder & Penjadwalan",
      "Manajemen Master Data Alat Ukur & Jigs",
      "Paperless Approval dengan Tanda Tangan Digital",
      "Pembuatan Otomatis Sertifikat PDF"
    ]
  },
  {
id: 5, // Sesuaikan ID ini dengan urutan project di portofolio Anda
Img: ecomerce, // Import gambar di bagian atas file portofolio Anda
Title: "Tadika Sport — E-Commerce Jersey & Admin Dashboard",
Description: "Platform e‑commerce untuk penjualan jersey olahraga dengan antarmuka responsif dan arsitektur modular. Menyediakan katalog produk dinamis, halaman detail produk dengan varian, keranjang belanja persistensi, proses checkout mobile‑first, serta dashboard admin untuk mengelola invoice dan riwayat pesanan. Dibangun untuk performa render cepat, kemudahan pemeliharaan, dan pengalaman pengguna yang halus.",
Link: "",
Github: "https://github.com/Hadipermana12/tadika-sport",
detailLink: "/project/5",
TechStack: ["React", "Vite", "Tailwind CSS", "Node.js", "Express", "SQL", "Framer Motion"],
Features: [
"Grid produk dinamis & katalog responsif",
"Halaman detail produk dengan varian & add-to-cart",
"Keranjang persistensi & alur checkout mobile‑first",
"Dashboard Admin: Invoice dan Order History",
"Arsitektur modular (frontend/backend terpisah)",
"Skrip schema & seed SQL untuk setup lokal",
"Entrance & UI animation menggunakan Framer Motion"
]
},
  {
    id: 6,
    Img: wiintruction,
    Title: "WI-intruction",
    Description: "Sistem manajemen Quality Control terintegrasi dengan fitur Barcode Scanning untuk efisiensi lantai produksi pabrik. Operator cukup melakukan pemindaian (scan) kode produk fisik untuk secara otomatis memuat dokumen instruksi kerja (PDF) yang sesuai. Dari layar yang sama, operator dapat mencatat hasil inspeksi (OK/NG) secara cepat, sementara sistem melakukan pencatatan riwayat secara real-time berdasarkan sesi aktif dan shift kerja.\n\n(Catatan: Proyek ini dibuat selama masa magang saya di PT. Menara Terus Makmur. Oleh karena itu, source code (Github) bersifat Private, dan tautan Live Demo hanya dapat diakses secara khusus melalui jaringan WiFi internal perusahaan.)",
    Link: "Khusus WiFi PT. Menara Terus Makmur",
    Github: "Private",
    detailLink: "/project/6",
    TechStack: ["React", "Vite", "Tailwind CSS", "Node.js", "PostgreSQL"],
    Features: [
      "Automated Barcode/QR Scanning untuk identifikasi produk",
      "Digital Document Viewer (PDF) Real-time",
      "Sistem Pencatatan Inspeksi Cepat (Log OK/NG)",
      "Dashboard Analytics & Riwayat Berbasis Sesi/Shift",
      "Manajemen Hak Akses Pengguna (Role-Based Access)"
    ]
  },
    {
    id: 7, // Sesuaikan ID ini dengan urutan project di portofolio Anda
    Img: topUpAppss, // Pastikan variabel gambar di-import di bagian atas file
    Title: "Hadi Store - Fullstack Top Up & Payment Platform",
    Description: "Aplikasi layanan top-up game digital, pulsa, dan kuota yang terintegrasi secara seamless dengan ekosistem Midtrans Payment Gateway. Dibangun menggunakan arsitektur Fullstack modern (React.js di sisi frontend & Laravel di backend) melalui RESTful API. Platform ini mampu men-generate Invoice ID unik, memproses transaksi secara aman melalui Midtrans Snap Token, dan otomatis memperbarui status pembayaran (UNPAID ke PAID) secara real-time berdasarkan callback payment server.",
    Link: "https://#", // Ganti dengan link live production jika sudah di-deploy
    Github: "https://github.com/Hadipermana12/Aplikasi_TopUp", // Link disesuaikan dengan repo aktif
    detailLink: "/project/7",
    TechStack: ["React", "Vite", "Tailwind CSS", "Laravel 10", "MySQL", "Midtrans API"],
    Features: [
      "Integrasi Payment Gateway Midtrans Snap (QRIS, E-Wallet, VA, dll)",
      "Fullstack RESTful API Architecture (Pemisahan Client & Server)",
      "Automated Payment Status Validation & Database Synchronisation",
      "Dynamic Database Seeding untuk Ratusan SKU Produk (Game & Pulsa)",
      "Desain UI/UX Modern & Fully Responsive menggunakan Tailwind CSS",
      "Sistem Relasi Database Kompleks untuk Riwayat Transaksi & User"
    ]
  },

  
];
