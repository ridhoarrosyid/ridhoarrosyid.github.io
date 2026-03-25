import { useState, useEffect } from "react";
import {
  ArrowRight,
  X,
  ExternalLink,
  Code2,
  Layout,
  Smartphone,
} from "lucide-react";
import type { Project } from "../types";
import SEO from "../components/SEO";
import { createPortal } from "react-dom";

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState("Semua Karya");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // Mencegah scroll pada body saat modal terbuka
  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [selectedProject]);

  const filters = [
    "Semua Karya",
    "Web Application",
    "Landing Page",
    "UI/UX Eksplorasi",
  ];

  const projects = [
    {
      id: 1,
      category: "Web Application",
      title: "Sistem Manajemen Inventaris B2B (Konsep)",
      tags: ["Laravel", "React", "Tailwind CSS"],
      icon: <Code2 className="text-blue-500" size={24} />,
      content: {
        challenge:
          "Banyak perusahaan B2B masih menggunakan pencatatan spreadsheet manual yang rentan terhadap perbedaan data (human error) dan memperlambat proses operasional gudang.",
        solution:
          "Merancang arsitektur database relasional yang tangguh dengan Laravel sebagai backend API. Untuk sisi klien (frontend), saya menggunakan React guna menciptakan dasbor interaktif di mana pengguna dapat melacak stok, membuat laporan otomatis, dan mengelola vendor dalam satu layar tanpa reload.",
        focus:
          "Tata letak glassmorphism yang bersih untuk meminimalisir kelelahan visual bagi staf yang menatap layar berjam-jam.",
      },
    },
    {
      id: 2,
      category: "Landing Page",
      title: "Optimasi Konversi Kampanye F&B (Konsep)",
      tags: ["Next.js", "Framer Motion", "Meta Pixel"],
      icon: <Layout className="text-orange-500" size={24} />,
      content: {
        challenge:
          "Kampanye iklan media sosial sebuah merek Food & Beverage menghasilkan banyak klik, namun rasio pengunjung yang benar-benar melakukan pemesanan (konversi) sangat rendah karena website yang lambat dan navigasi yang membingungkan.",
        solution:
          "Membangun landing page ultra-cepat menggunakan Next.js. Konten direstrukturisasi menggunakan formula copywriting persuasif. Saya juga mengintegrasikan Meta Pixel untuk pelacakan retargeting iklan yang lebih akurat.",
        focus:
          "Menerapkan animasi gulir (scroll-triggered animation) untuk menjaga retensi audiens, serta memosisikan tombol CTA pemesanan agar selalu mudah diakses di perangkat seluler.",
      },
    },
    {
      id: 3,
      category: "UI/UX Eksplorasi",
      title: "Redesign Alur Checkout E-Commerce Gen-Z",
      tags: ["Figma", "Prototyping", "Riset Perilaku"],
      icon: <Smartphone className="text-purple-500" size={24} />,
      content: {
        challenge:
          "Berangkat dari riset akademis saya mengenai pengaruh web experience terhadap niat beli Gen-Z, saya mengeksplorasi antarmuka checkout yang lebih modern dan mulus.",
        solution:
          "Menyederhanakan formulir berlapis menjadi sistem one-click-feel dengan opsi pembayaran dompet digital (e-wallet) yang ditonjolkan.",
        focus:
          "Desain menggunakan palet warna yang memicu kepercayaan (trust) dan elemen micro-interactions untuk memberikan umpan balik instan saat data berhasil diinput.",
      },
    },
  ];

  const filteredProjects =
    activeFilter === "Semua Karya"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  // Utility classes
  const glassCard =
    "bg-white/60 backdrop-blur-xl border border-white/80 rounded-3xl p-6 shadow-[0_8px_30px_rgb(0,0,0,0.04)]";
  const hoverCard =
    "hover:-translate-y-2 hover:shadow-[0_20px_40px_rgb(37,99,235,0.1)] hover:border-blue-200 transition-all duration-300 cursor-pointer group";

  return (
    <div className="animate-fade-in flex flex-col gap-16 pb-20">
      <SEO
        title="Portfolio & Karya Digital"
        description="Eksplorasi dan karya digital oleh Muhammad Ridho Ar-Rosyid. Menampilkan studi kasus UI/UX dan proyek pengembangan web (React, Next.js, Laravel)."
      />
      {/* 1. Hero Section */}
      <section className="mx-auto max-w-3xl pt-10 text-center">
        <h1 className="mb-6 text-4xl leading-tight font-extrabold tracking-tight text-slate-900 md:text-5xl">
          Karya, Eksplorasi, dan <br />
          <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
            Dampak Digital.
          </span>
        </h1>
        <p className="text-lg leading-relaxed text-slate-600 md:text-xl">
          Dari sekadar ide abstrak menjadi ekosistem digital yang berfungsi
          nyata. Jelajahi bagaimana saya memecahkan masalah bisnis melalui
          kombinasi riset, desain antarmuka, dan struktur kode yang solid.
        </p>
      </section>

      {/* 2. Filter Categories */}
      <section className="flex flex-wrap justify-center gap-3">
        {filters.map((filter) => (
          <button
            key={filter}
            onClick={() => setActiveFilter(filter)}
            className={`rounded-full px-6 py-2.5 text-sm font-semibold transition-all duration-300 ${
              activeFilter === filter
                ? "bg-blue-600 text-white shadow-lg shadow-blue-600/30"
                : "border border-slate-200 bg-white/60 text-slate-600 backdrop-blur-md hover:bg-white hover:text-blue-600"
            }`}
          >
            {filter}
          </button>
        ))}
      </section>

      {/* 3. Grid Portfolio */}
      <section className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            onClick={() => setSelectedProject(project)}
            className={`${glassCard} ${hoverCard} flex h-full flex-col`}
          >
            {/* Visual Placeholder for Project Thumbnail */}
            <div className="relative mb-6 flex h-48 items-center justify-center overflow-hidden rounded-2xl bg-slate-100">
              <div className="absolute inset-0 bg-linear-to-br from-slate-200 to-slate-100 transition-transform duration-500 group-hover:scale-105"></div>
              <div className="relative z-10 flex h-16 w-16 items-center justify-center rounded-2xl bg-white shadow-sm transition-transform duration-300 group-hover:scale-110">
                {project.icon}
              </div>
            </div>

            <div className="mb-4">
              <span className="mb-2 block text-xs font-bold tracking-wider text-blue-600 uppercase">
                {project.category}
              </span>
              <h3 className="text-xl leading-snug font-bold text-slate-900 transition-colors group-hover:text-blue-600">
                {project.title}
              </h3>
            </div>

            <div className="mt-auto flex flex-wrap gap-2 pt-4">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-lg bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </section>

      {/* 4. Bottom CTA */}
      <section className="relative mt-10 overflow-hidden rounded-[3rem] bg-slate-900 p-12 text-center text-white shadow-2xl md:p-16">
        <div className="absolute inset-0 rounded-full bg-blue-600/10 blur-[80px]"></div>
        <div className="relative z-10 mx-auto max-w-2xl">
          <h2 className="mb-4 text-3xl font-extrabold md:text-4xl">
            Saatnya Proyek Anda Menjadi Bagian dari Etalase Ini.
          </h2>
          <p className="mb-10 text-lg leading-relaxed text-slate-300">
            Punya tantangan bisnis yang membutuhkan solusi teknologi yang tepat?
            Mari kita ubah ide Anda menjadi kisah sukses berikutnya.
          </p>
          <a
            href="https://wa.me/6285183303954"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 font-bold text-slate-900 shadow-xl transition-all hover:-translate-y-1 hover:bg-blue-50"
          >
            Diskusikan Proyek Anda{" "}
            <ArrowRight size={20} className="text-blue-600" />
          </a>
        </div>
      </section>

      {/* 5. Modal for Project Details */}
      {selectedProject &&
        createPortal(
          <div className="fixed inset-0 right-0 left-0 z-50 flex items-center justify-center p-4 sm:p-6">
            {/* Backdrop */}
            <div
              className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm transition-opacity"
              onClick={() => setSelectedProject(null)}
            ></div>

            {/* Modal Panel */}
            <div className="animate-zoom-in relative max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-[2rem] border border-white bg-white/90 shadow-2xl backdrop-blur-2xl">
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-6 right-6 z-10 rounded-full bg-slate-100 p-2 text-slate-600 transition-colors hover:bg-red-50 hover:text-red-500"
              >
                <X size={24} />
              </button>

              <div className="p-8 md:p-12">
                <span className="mb-2 block text-sm font-bold tracking-wider text-blue-600 uppercase">
                  {selectedProject.category}
                </span>
                <h2 className="mb-6 text-3xl font-extrabold text-slate-900">
                  {selectedProject.title}
                </h2>

                <div className="mb-10 flex flex-wrap gap-2 border-b border-slate-200 pb-8">
                  {selectedProject.tags.map((tag: string) => (
                    <span
                      key={tag}
                      className="rounded-lg border border-blue-100 bg-blue-50 px-4 py-1.5 text-sm font-semibold text-blue-700"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="space-y-8">
                  <div>
                    <h3 className="mb-3 flex items-center gap-2 text-xl font-bold text-slate-900">
                      <span className="flex h-8 w-8 items-center justify-center rounded-full bg-red-100 text-sm text-red-600">
                        01
                      </span>
                      Tantangan Bisnis / Latar Belakang
                    </h3>
                    <p className="pl-10 leading-relaxed text-slate-600">
                      {selectedProject.content.challenge}
                    </p>
                  </div>

                  <div>
                    <h3 className="mb-3 flex items-center gap-2 text-xl font-bold text-slate-900">
                      <span className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-100 text-sm text-blue-600">
                        02
                      </span>
                      Solusi Teknis & Visual
                    </h3>
                    <p className="pl-10 leading-relaxed text-slate-600">
                      {selectedProject.content.solution}
                    </p>
                  </div>

                  <div>
                    <h3 className="mb-3 flex items-center gap-2 text-xl font-bold text-slate-900">
                      <span className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-100 text-sm text-emerald-600">
                        03
                      </span>
                      Fokus UI/UX
                    </h3>
                    <p className="pl-10 leading-relaxed text-slate-600">
                      {selectedProject.content.focus}
                    </p>
                  </div>
                </div>

                <div className="mt-12 border-t border-slate-200 pt-8 text-center">
                  <button
                    className="inline-flex cursor-not-allowed items-center gap-2 rounded-full bg-slate-900 px-6 py-3 font-semibold text-white opacity-50 transition-colors hover:bg-slate-800"
                    title="Tautan demo belum tersedia untuk proyek konsep"
                  >
                    Lihat Live Demo <ExternalLink size={18} />
                  </button>
                  <p className="mt-3 text-xs text-slate-400">
                    *Ini adalah proyek studi kasus/konsep.
                  </p>
                </div>
              </div>
            </div>
          </div>,
          document.body,
        )}
    </div>
  );
};

export default Portfolio;
