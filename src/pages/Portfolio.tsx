import { useState, useEffect } from "react";
import { ArrowRight, Globe } from "lucide-react";
import type { Project } from "../types";
import SEO from "../components/SEO";
import { createPortal } from "react-dom";
import Modal from "../components/Modal";
import { projects } from "../data/projects";
import { getImageUrl } from "../lib/helper";

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState("all");
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
    { display: "Semua Karya", code: "all" },
    { display: "Web Application", code: "web-aplication" },
    { display: "Landing Page", code: "landing-page" },
    { display: "Web Profile", code: "web-profile" },
  ];

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((p) => p.category.code === activeFilter);

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
        {filters.map((filter, i) => (
          <button
            key={i}
            onClick={() => setActiveFilter(filter.code)}
            className={`rounded-full px-6 py-2.5 text-sm font-semibold transition-all duration-300 ${
              activeFilter === filter.code
                ? "bg-blue-600 text-white shadow-lg shadow-blue-600/30"
                : "border border-slate-200 bg-white/60 text-slate-600 backdrop-blur-md hover:bg-white hover:text-blue-600"
            }`}
          >
            {filter.display}
          </button>
        ))}
      </section>

      {/* 3. Grid Portfolio */}
      <section className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            onClick={() => setSelectedProject(project)}
            className={`${glassCard} ${hoverCard} flex h-full flex-col`}
          >
            {/* Visual / Thumbnail Project */}
            <div className="relative mb-6 flex h-48 items-center justify-center overflow-hidden rounded-2xl bg-slate-100">
              {project.image ? (
                // Tampil jika ada gambar
                <img
                  src={getImageUrl(project.image)}
                  alt={`Tangkapan layar proyek ${project.title}`}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              ) : (
                // Tampil jika gambar kosong (Placeholder)
                <>
                  <div className="absolute inset-0 bg-linear-to-br from-slate-200 to-slate-100 transition-transform duration-500 group-hover:scale-105"></div>
                  <div className="relative z-10 flex h-16 w-16 items-center justify-center rounded-2xl bg-white shadow-sm transition-transform duration-300 group-hover:scale-110">
                    <Globe />
                  </div>
                </>
              )}
            </div>

            <div className="mb-4">
              <span className="mb-2 block text-xs font-bold tracking-wider text-blue-600 uppercase">
                {project.category.display}
              </span>
              <h3 className="text-xl leading-snug font-bold text-slate-900 transition-colors group-hover:text-blue-600">
                {project.title}
              </h3>
            </div>

            <div className="mt-auto flex flex-wrap gap-2 pt-4">
              {project.tech.map((e) => (
                <span
                  key={e}
                  className="rounded-lg bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600"
                >
                  {e}
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
          <Modal
            selectedProject={selectedProject}
            setSelectedProject={setSelectedProject}
          />,
          document.body,
        )}
    </div>
  );
};

export default Portfolio;
