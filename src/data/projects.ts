export const projects = [
  {
    id: 1,
    title: "PO. Putri Candi Landing Page",
    category: { display: "Landing Page", code: "landing-page" },
    tech: ["Tailwind CSS", "reactjs", "vite"],
    shortDesc:
      "Wajah digital profesional yang dioptimalkan untuk memperkuat citra brand perusahaan dan meningkatkan rasio konversi pengunjung.",
    image: "putri-candi.webp",
    demoLink: "https://putricandigroup.web.id/",
    repoLink: "#",
    content: {
      challenge:
        "Tantangan utama yang dihadapi adalah tingginya rasio pentalan (bounce rate) pada kampanye iklan sebelumnya. Hal ini disebabkan oleh waktu muat (load time) halaman yang lambat serta pengalaman pengguna (UX) yang membingungkan bagi calon penumpang saat mencari informasi.",
      solution:
        "Saya merancang dan mengembangkan landing page dengan pendekatan mobile-first yang sangat teroptimasi. Melalui penggunaan Next.js untuk mempercepat waktu muat (Server-Side Rendering) dan Tailwind CSS untuk antarmuka yang bersih dan ringan, proyek ini berhasil menghadirkan pengalaman navigasi yang mulus dan persuasif.",
      focus:
        "Desain antarmuka yang clean dan mobile-first, memandu pengguna dengan mudah menuju informasi rute dan pemesanan tiket tanpa kebingungan navigasi.",
    },
  },
  {
    id: 2,
    title: "Crumbs Landing Page",
    category: { display: "Landing Page", code: "landing-page" },
    tech: ["nextjs", "tailwind"],
    shortDesc:
      "Katalog digital dan landing page interaktif untuk kedai kopi kekinian guna meningkatkan daya tarik visual di kalangan mahasiswa.",
    image: "crumbs.webp",
    demoLink: "#",
    repoLink: "#",
    content: {
      challenge:
        "Sebagai bisnis kopi baru di area kampus, Crumbs menghadapi tantangan untuk menonjol di tengah ketatnya persaingan F&B. Mereka membutuhkan wajah digital yang mampu mengkomunikasikan 'vibe' tempat nongkrong yang asik, menampilkan menu andalan, dan mengarahkan mahasiswa untuk melakukan kunjungan atau pemesanan langsung.",
      solution:
        "Saya merancang landing page yang dinamis dan responsif menggunakan nextjs dan tailwind. Fokus utamanya adalah pada estetika visual yang sesuai dengan selera Gen-Z, menampilkan galeri produk yang menggugah selera, serta penempatan tombol Call-to-Action (CTA) pemesanan yang terintegrasi langsung dengan WhatsApp pelanggan.",
      focus:
        "Penggunaan palet warna yang menarik dan elemen visual kekinian (vibe Gen-Z) dipadukan dengan tombol CTA WhatsApp yang menonjol untuk mempermudah konversi pesanan.",
    },
  },
  {
    id: 3,
    title: "Company Profile Kontraktor B2B",
    category: { display: "Web Profile", code: "web-profile" },
    tech: ["WordPress", "Elementor", "CSS", "SEO On-Page"],
    shortDesc:
      "Website korporat profesional untuk membangun kredibilitas dan menonjolkan portofolio serta layanan alat berat perusahaan konstruksi.",
    image: "company-profile.webp",
    demoLink: "https://contohcompro.rirolab.com/",
    repoLink: "#",
    content: {
      challenge:
        "Perusahaan konstruksi ini membutuhkan kehadiran digital yang solid untuk meyakinkan mitra bisnis dan calon klien B2B. Tantangan utamanya adalah merangkum dan menyajikan informasi layanan alat berat serta portofolio proyek berskala besar secara terstruktur, profesional, dan dapat menumbuhkan rasa percaya (trust).",
      solution:
        "Saya membangun website company profile yang kokoh dan elegan menggunakan ekosistem WordPress. Dengan memanfaatkan Elementor, saya merancang tata letak (layout) kustom yang responsif dan memandu fokus pengunjung pada pencapaian proyek klien. Sistem ini juga dirancang agar tim internal perusahaan dapat dengan mudah memperbarui portofolio proyek mereka ke depannya tanpa perlu menyentuh baris kode.",
      focus:
        "Navigasi yang terstruktur untuk menampilkan portofolio alat berat secara profesional, dipadukan dengan optimasi on-page untuk memastikan visibilitas di mesin pencari bagi pencari jasa konstruksi.",
    },
  },
  {
    id: 4,
    title: "Sistem Manajemen Perpustakaan",
    category: { display: "Web Application", code: "web-application" },
    tech: ["Laravel", "ReactJS", "Tailwind CSS", "MySQL"],
    shortDesc:
      "Sistem informasi digital untuk mengotomatisasi sirkulasi buku, manajemen inventaris, dan perhitungan denda secara efisien.",
    image: "cendekia.webp",
    demoLink: "#",
    repoLink: "https://github.com/ridhoarrosyid/library-management",
    content: {
      challenge:
        "Pengelolaan data perpustakaan yang masih mengandalkan pencatatan manual sering kali mengakibatkan antrean panjang, ketidakakuratan pelacakan status ketersediaan buku, serta proses rekapitulasi denda keterlambatan yang rentan terhadap kesalahan manusia (human error).",
      solution:
        "Mengembangkan platform manajemen terpadu dengan Laravel sebagai backend API yang kokoh untuk mengelola logika database kompleks, dan ReactJS untuk antarmuka klien yang dinamis. Sistem ini mendigitalisasi seluruh alur kerja perpustakaan, mulai dari pencarian katalog, proses peminjaman-pengembalian, hingga kalkulasi denda otomatis secara real-time.",
      focus:
        "Merancang dasbor admin yang bersih dan intuitif, meminimalkan langkah klik untuk transaksi harian agar pustakawan dapat bekerja lebih cepat dan terhindar dari kelelahan visual.",
    },
  },
  {
    id: 5,
    title: "Ngambis Hub",
    category: { display: "Web Application", code: "web-application" },
    tech: ["Laravel", "ReactJS", "Tailwind CSS", "MySQL"],
    shortDesc:
      "Platform kolaborasi (matchmaking) yang menjembatani inovator dengan ide brilian dan talenta yang memiliki keterampilan teknis eksekusi.",
    image: "ngambishub.webp",
    demoLink: "https://ngambishub.com",
    repoLink: "https://github.com/ridhoarrosyid/ngambis-hub",
    content: {
      challenge:
        "Banyak ide proyek atau startup potensial yang tidak tereksekusi karena inisiator kesulitan menemukan rekan tim dengan keahlian spesifik. Di sisi lain, banyak talenta berbakat (developer, desainer, dll.) yang mencari ruang proyek nyata untuk mengembangkan portofolio dan mengasah kemampuan mereka.",
      solution:
        "Membangun ekosistem kolaborasi interaktif dari nol. Menggunakan Laravel untuk menangani sistem autentikasi, manajemen profil, dan algoritma pencarian pengguna. Sementara itu, antarmuka ReactJS digunakan untuk menciptakan pengalaman eksplorasi ide proyek dan pencocokan (matchmaking) yang mulus, cepat, dan responsif.",
      focus:
        "Pengalaman pengguna (UX) yang berpusat pada kemudahan eksplorasi. Menghadirkan fitur filter pencarian yang akurat dan tata letak profil pengguna yang menonjolkan keahlian serta portofolio masing-masing individu.",
    },
  },
];
