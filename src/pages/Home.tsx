import { Link } from "react-router-dom";
import { ArrowRight, Target, Code2, CheckCircle2 } from "lucide-react";
import SEO from "../components/SEO";
import { projects as projectData } from "../data/projects";
import { getImageUrl } from "../lib/helper";
import { useTranslation } from "react-i18next";
import type { ServicesTeaserCard, Stat, ValueCars, Workflow } from "../types";

const Home = () => {
  // Utility class untuk Frost/Light Glassmorphism yang konsisten dengan App.tsx
  const glassCard =
    "bg-white/60 backdrop-blur-xl border border-white/80 rounded-3xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)]";

  const projects = projectData.slice(0, 3);
  const valueCardUI = [
    { icon: Target, color: "bg-blue-100 text-blue-600" }, // Konfigurasi untuk card indeks 0
    { icon: Code2, color: "bg-cyan-100 text-cyan-600" }, // Konfigurasi untuk card indeks 1
  ];
  const techs = [
    "React",
    "TypeScript",
    "Next.js",
    "Tailwind CSS",
    "Express",
    "Laravel",
    "WordPress",
    "Figma",
  ];

  const { t } = useTranslation();
  const stats = t("home.stats", { returnObjects: true }) as Stat[];
  const valueCards = t("home.valueProp.cards", {
    returnObjects: true,
  }) as ValueCars[];
  const servicesTeaserCards = t("home.servicesTeaser.cards", {
    returnObjects: true,
  }) as ServicesTeaserCard[];
  const workflowSteps = t("home.workflow.steps", {
    returnObjects: true,
  }) as Workflow[];

  return (
    <div className="animate-fade-in flex flex-col gap-32 pb-20">
      <SEO
        title="Beranda"
        description="Portofolio Muhammad Ridho Ar-Rosyid, Fullstack Web Developer di Lampung. Ahli dalam React, Next.js, MERN, dan Laravel. Membantu HR menemukan talenta teknologi terbaik dan menyediakan jasa pembuatan landing page serta company profile berstandar tinggi untuk bisnis B2B dan konstruksi."
      />
      {/* 1. Hero Section */}
      <section className="relative flex flex-col items-center pt-10 text-center">
        <div className="pointer-events-none absolute top-1/2 left-1/2 -z-10 h-150 w-150 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-400/20 blur-[100px]"></div>
        <h1 className="mb-6 text-4xl leading-[1.15] font-extrabold tracking-tight text-slate-900 md:text-6xl">
          {t("home.hero.title1")}{" "}
          <span className="bg-linear-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
            {t("home.hero.titleHighlight")}
          </span>{" "}
          {t("home.hero.title2")}
        </h1>
        {/* [cite: 3] */}

        <p className="mb-4 max-w-3xl text-lg leading-relaxed text-slate-600 md:text-xl">
          {t("home.hero.desc")}
        </p>
        {/*  */}

        <p className="mb-10 text-xl font-semibold text-blue-600">
          {t("home.hero.tagline")}
        </p>
        {/*  */}

        <div className="flex w-full flex-col gap-4 sm:w-auto sm:flex-row">
          <Link
            to="/portfolio"
            className="flex items-center justify-center gap-2 rounded-full bg-blue-600 px-8 py-4 font-medium text-white shadow-lg transition-all hover:bg-blue-700 hover:shadow-blue-600/30"
          >
            {t("home.hero.btnPortfolio")} <ArrowRight size={18} />
          </Link>
          {/* [cite: 6] */}
          <a
            href="https://wa.me/6285183303954"
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-slate-200 bg-white/80 px-8 py-4 font-medium text-slate-700 shadow-sm backdrop-blur-md transition-all hover:bg-white"
          >
            {t("home.hero.btnConsult")}
          </a>
          {/* [cite: 7] */}
        </div>
      </section>

      {/* 2. Quick Stats */}
      <section className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {stats.map((stat, i) => (
          <div key={i} className={glassCard + " text-center"}>
            <h3 className="mb-2 text-4xl font-black text-slate-900">
              {stat.value}
            </h3>
            <p className="font-medium text-slate-600">{stat.label}</p>
          </div>
        ))}
      </section>

      {/* 3. Value Proposition */}
      <section className="scroll-mt-28">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold text-slate-900 md:text-4xl">
            {t("home.valueProp.title")}
          </h2>
          {/*  */}
          <p className="mx-auto max-w-2xl text-lg text-slate-600">
            {t("home.valueProp.desc")}
          </p>
          {/* [cite: 15, 16] */}
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {valueCards.map((valueCard, i) => {
            const IconComponent = valueCardUI[i].icon;
            const iconColor = valueCardUI[i].color;
            return (
              <div key={i} className={glassCard}>
                <div
                  className={`mb-6 flex h-14 w-14 items-center justify-center rounded-2xl ${iconColor}`}
                >
                  <IconComponent size={28} />
                </div>

                <h3 className="mb-3 text-2xl font-bold text-slate-900">
                  {valueCard.title}
                </h3>

                <p className="leading-relaxed text-slate-600">
                  {valueCard.desc}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* 4. About Me Teaser & 5. Tech Stack */}
      <section className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
        <div>
          <h2 className="mb-6 text-3xl font-bold text-slate-900">
            {t("home.about.title")}
          </h2>
          {/* [cite: 20] */}
          <div className="space-y-4 text-lg leading-relaxed text-slate-600">
            <p>{t("home.about.p1")}</p>
            {/* [cite: 21] */}
            <p>{t("home.about.p2")}</p>
            {/* [cite: 22, 23] */}
          </div>
        </div>

        <div className="relative overflow-hidden rounded-3xl bg-slate-900 p-8 shadow-2xl">
          <div className="absolute top-0 right-0 h-64 w-64 rounded-full bg-blue-500/20 blur-[80px]"></div>
          <h3 className="mb-8 text-xl font-bold text-white">
            {t("home.about.techTitle")}
          </h3>
          {/* [cite: 25] */}
          <div className="relative z-10 flex flex-wrap gap-3">
            {techs.map((tech) => (
              <span
                key={tech}
                className="cursor-default rounded-xl border border-white/20 bg-white/10 px-5 py-2.5 text-sm font-medium text-slate-200 backdrop-blur-md transition-colors hover:bg-white/20"
              >
                {tech}
              </span>
            ))}
            {/* [cite: 27] */}
          </div>
        </div>
      </section>

      {/* 6. Services Teaser */}
      <section className="text-center">
        <h2 className="mb-12 text-3xl font-bold text-slate-900">
          {t("home.servicesTeaser.title")}
        </h2>
        {/* [cite: 29] */}
        <div className="mb-10 grid grid-cols-1 gap-8 text-left md:grid-cols-2">
          {servicesTeaserCards.map((servicesTeaserCard, i) => (
            <div key={i} className={glassCard}>
              <h3 className="mb-4 text-2xl font-bold text-slate-900">
                {servicesTeaserCard.title}
              </h3>
              <p className="leading-relaxed text-slate-600">
                {servicesTeaserCard.desc}
              </p>
              {/* [cite: 30] */}
            </div>
          ))}
        </div>
        <Link
          to="/services"
          className="group inline-flex items-center text-lg font-bold text-blue-600 hover:text-blue-700"
        >
          {t("home.servicesTeaser.link")}
          <ArrowRight
            className="ml-2 transition-transform group-hover:translate-x-1"
            size={20}
          />
        </Link>
        {/* [cite: 32] */}
      </section>

      {/* 7. Workflow */}
      <section className="relative">
        <div className="absolute top-24 bottom-10 left-6 -z-10 w-px bg-slate-200 md:left-12"></div>
        <div className="mb-16">
          <h2 className="mb-4 text-3xl font-bold text-slate-900 md:text-4xl">
            {t("home.workflow.title")}
          </h2>
          {/* [cite: 34] */}
          <p className="max-w-2xl text-lg text-slate-600">
            {t("home.workflow.desc")}
          </p>
          {/* [cite: 35] */}
        </div>
        <div className="space-y-8">
          {workflowSteps.map((item, idx) => (
            <div key={idx} className="group flex items-start gap-6 md:gap-8">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-slate-200 bg-white text-xl font-black text-blue-600 shadow-sm transition-colors group-hover:border-blue-300 group-hover:bg-blue-50 md:h-16 md:w-16">
                {item.step}
              </div>
              <div className="pt-2 md:pt-4">
                <h4 className="mb-2 text-xl font-bold text-slate-900">
                  {item.title}
                </h4>
                <p className="leading-relaxed text-slate-600">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 8. Works Teaser */}
      <section>
        <div className="mb-10 flex flex-col items-end justify-between gap-4 md:flex-row">
          <div>
            <h2 className="mb-2 text-3xl font-bold text-slate-900">
              {t("home.worksTeaser.title")}
            </h2>
            {/* [cite: 45] */}
            <p className="text-slate-600">{t("home.worksTeaser.desc")}</p>
            {/* [cite: 46] */}
          </div>
          <Link
            to="/portfolio"
            className="group inline-flex shrink-0 items-center font-bold text-blue-600 hover:text-blue-700"
          >
            {t("home.worksTeaser.link")}
            <ArrowRight
              className="ml-2 transition-transform group-hover:translate-x-1"
              size={18}
            />
          </Link>
          {/* [cite: 48] */}
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {projects.map((project) => {
            const isTechLargeThanFive = project.tech.length > 5;
            const techs = project.tech.slice(0, 5);
            return (
              <Link key={project.id} to={project.demoLink || "/portfolio"}>
                <div className="group overflow-hidden rounded-3xl border border-slate-200 bg-white transition-all hover:border-blue-300 hover:shadow-xl">
                  <div className="relative h-48 overflow-hidden bg-slate-100">
                    {/* Menggunakan tag img dengan src dari project.image */}
                    <img
                      src={getImageUrl(project.image)}
                      alt={`Tangkapan layar proyek ${project.title}`}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy" /* Membantu performa loading website */
                    />

                    {/* Opsional: Overlay gradient tipis agar gambar terlihat lebih elegan */}
                    <div className="absolute inset-0 bg-linear-to-t from-slate-900/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
                  </div>
                  <div className="p-6">
                    {/* [cite: 47] */}
                    <span className="mb-2 block text-xs font-bold tracking-wider text-blue-600 uppercase">
                      {t(`portfolio.filters.${project.category.code}`)}
                    </span>
                    <h3 className="line-clamp-2 text-xl font-bold text-slate-900 transition-colors group-hover:text-blue-600">
                      {t(`projects.${project.id}.title`)}
                    </h3>
                    <p className="mt-1 line-clamp-1 text-sm text-slate-600">
                      {t(`projects.${project.id}.shortDesc`)}
                    </p>
                    <div className="mt-6 flex flex-wrap gap-2">
                      {techs.map((e, i) => (
                        <span
                          key={i}
                          className="rounded-lg bg-blue-50 px-3 py-1 text-xs font-bold whitespace-nowrap text-blue-600"
                        >
                          {e}
                        </span>
                      ))}
                      {isTechLargeThanFive && (
                        <span className="flex items-center rounded-lg bg-slate-100 px-3 py-1 text-xs font-bold whitespace-nowrap text-slate-600">
                          +{project.tech.length - 5}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* 9. Bottom CTA */}
      <section className="relative overflow-hidden rounded-[3rem] bg-slate-900 px-6 py-24 text-center shadow-2xl">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        <div className="absolute top-1/2 left-1/2 -z-10 h-full w-full -translate-x-1/2 -translate-y-1/2 bg-blue-600/20 blur-[100px]"></div>

        <div className="relative z-10 mx-auto max-w-3xl">
          <h2 className="mb-6 text-4xl font-extrabold tracking-tight text-white md:text-5xl">
            {t("home.cta.title")}
          </h2>
          {/* [cite: 50] */}
          <p className="mb-10 text-xl leading-relaxed text-slate-300">
            {t("home.cta.desc")}
          </p>
          {/* [cite: 51] */}
          <a
            href="https://wa.me/6285183303954"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-white px-10 py-5 text-lg font-bold text-slate-900 shadow-xl transition-all hover:-translate-y-1 hover:bg-blue-50 hover:shadow-white/20"
          >
            {t("home.cta.btn")}{" "}
            <CheckCircle2 size={20} className="text-blue-600" />
          </a>
          {/* [cite: 52] */}
        </div>
      </section>
    </div>
  );
};

export default Home;
