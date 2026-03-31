import {
  ArrowRight,
  CheckCircle2,
  AlertCircle,
  TrendingUp,
  Cpu,
  MessageSquare,
} from "lucide-react";
import { useState } from "react";
import SEO from "../components/SEO";
import { useTranslation } from "react-i18next";
import type { CoreCard, FaqItems, ServicesValueAddsCards } from "../types";

const Services = () => {
  // Utility class untuk Frost Glassmorphism
  const glassCard =
    "bg-white/60 backdrop-blur-xl border border-white/80 rounded-3xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all duration-300";

  // Efek hover khusus untuk 3 Kartu Layanan
  const serviceCardHover =
    "hover:-translate-y-3 hover:shadow-[0_20px_40px_rgb(37,99,235,0.1)] hover:border-blue-200 hover:bg-white/80 relative overflow-hidden group";

  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const { t } = useTranslation();
  const problemCards = t("services.problems.cards", {
    returnObjects: true,
  }) as string[];
  const services = t("services.core.cards", {
    returnObjects: true,
  }) as CoreCard[];
  const valueAddCards = t("services.valueAdds.cards", {
    returnObjects: true,
  }) as ServicesValueAddsCards[];
  const faqs = t("services.faqs.items", { returnObjects: true }) as FaqItems[];

  const problemCardsColorIcon = [
    "text-red-500",
    "text-orange-500",
    "text-amber-500",
  ];
  const popularCore = [false, true, false];
  const iconValueAddsCard = [
    {
      icon: TrendingUp,
      color: "text-blue-400",
    },
    {
      icon: Cpu,
      color: "text-cyan-400",
    },
    {
      icon: MessageSquare,
      color: "text-purple-400",
    },
  ];

  return (
    <div className="animate-fade-in flex flex-col gap-24 pb-20">
      <SEO
        title="Layanan Web Development"
        description="Saya, Muhammad Ridho, menawarkan layanan pembuatan Landing Page konversi tinggi, Web Profile, dan Custom Web Application menggunakan teknologi modern."
      />
      {/* 1. Hero Section */}
      <section className="mx-auto max-w-3xl pt-10 text-center">
        <h1 className="mb-6 text-4xl leading-tight font-extrabold tracking-tight text-slate-900 md:text-5xl">
          {t("services.hero.title1")} <br />
          <span className="bg-linear-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
            {t("services.hero.titleHighlight")}
          </span>
        </h1>
        <p className="text-lg leading-relaxed text-slate-600 md:text-xl">
          {t("services.hero.desc")}
        </p>
      </section>

      {/* 2. Problem & Agitation */}
      <section className="rounded-[3rem] border border-slate-200/60 bg-slate-50/50 p-8 md:p-12">
        <div className="mb-10 text-center">
          <h2 className="mb-4 text-2xl font-bold text-slate-900 md:text-3xl">
            {t("services.problems.title")}
          </h2>
        </div>
        <div className="mb-8 grid grid-cols-1 gap-6 md:grid-cols-3">
          {problemCards.map((problemCards, i) => (
            <div
              key={i}
              className="flex items-start gap-4 rounded-2xl border border-red-100 bg-white p-6 shadow-sm"
            >
              <AlertCircle
                className={`mt-1 shrink-0 ${problemCardsColorIcon[i]}`}
                size={24}
              />
              <p className="leading-relaxed font-medium text-slate-700">
                {problemCards}
              </p>
            </div>
          ))}
        </div>
        <p className="text-center text-lg font-medium text-slate-600">
          {t("services.problems.closing1")}{" "}
          <span className="font-bold text-blue-600">
            {t("services.problems.closingHighlight")}
          </span>
          . Berikut
          {t("services.problems.closing2")}
        </p>
      </section>

      {/* 3. Core Services (3 Cards with Glassmorphism & Hover) */}
      <section>
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold text-slate-900 md:text-4xl">
            {t("services.core.title")}
          </h2>
          <p className="text-lg text-slate-600">{t("services.core.desc")}</p>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {services.map((service, idx) => (
            <div
              key={idx}
              className={`${glassCard} ${serviceCardHover} flex h-full flex-col ${popularCore[idx] ? "ring-2 shadow-blue-500/10 ring-blue-500/50" : ""}`}
            >
              {/* Highlight Badge */}
              {popularCore[idx] && (
                <div className="absolute top-0 right-0 z-10 rounded-bl-xl bg-gradient-to-r from-blue-500 to-cyan-500 px-4 py-1.5 text-xs font-bold text-white">
                  {t("services.core.badge")}
                </div>
              )}

              {/* Card Header */}
              <div className="mb-6">
                <h3 className="mb-2 text-2xl font-bold text-slate-900">
                  {service.title}
                </h3>
                <div className="mb-3 text-xl font-black text-blue-600">
                  {service.price}
                </div>
                <p className="min-h-15 text-sm leading-relaxed text-slate-600">
                  {service.desc}
                </p>
              </div>

              {/* Checklist */}
              <div className="grow">
                <ul className="mb-8 space-y-3">
                  {service.features.map((feature, fIdx) => (
                    <li key={fIdx} className="flex items-start gap-3">
                      <CheckCircle2
                        size={18}
                        className="mt-0.5 shrink-0 text-emerald-500"
                      />
                      <span className="text-sm text-slate-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA Button */}
              <a
                href="https://wa.me/6285183303954"
                target="_blank"
                rel="noreferrer"
                className={`flex w-full items-center justify-center gap-2 rounded-xl py-4 text-center font-bold transition-all ${
                  popularCore[idx]
                    ? "bg-blue-600 text-white shadow-lg hover:bg-blue-700 hover:shadow-blue-600/30"
                    : "bg-slate-100 text-slate-800 hover:bg-slate-200"
                }`}
              >
                {service.cta} <ArrowRight size={18} />
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Value Adds */}
      <section className="relative overflow-hidden rounded-3xl rounded-[3xl] bg-slate-900 p-8 shadow-2xl md:p-12">
        <div className="absolute top-0 right-0 h-96 w-96 rounded-full bg-blue-500/10 blur-[100px]"></div>
        <h2 className="relative z-10 mb-10 text-center text-3xl font-bold text-white">
          {t("services.valueAdds.title")}
        </h2>

        <div className="relative z-10 grid grid-cols-1 gap-8 md:grid-cols-3">
          {valueAddCards.map((card, i) => {
            const IconComponent = iconValueAddsCard[i].icon;
            const iconColor = iconValueAddsCard[i].color;
            return (
              <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-colors hover:bg-white/10">
                <IconComponent className={`mb-4 ${iconColor}`} size={32} />
                <h3 className="mb-3 text-xl font-bold text-white">
                  {card.title}
                </h3>
                <p className="text-sm leading-relaxed text-slate-400">
                  {card.desc}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* 5. FAQ Section */}
      <section className="mx-auto w-full max-w-3xl">
        <div className="mb-10 text-center">
          <h2 className="mb-4 text-3xl font-bold text-slate-900">
            {t("services.faqs.title")}
          </h2>
        </div>
        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className="overflow-hidden rounded-2xl border border-slate-200 bg-white transition-all duration-300"
            >
              <button
                onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                className="flex w-full items-center justify-between px-6 py-5 text-left font-bold text-slate-800 hover:bg-slate-50"
              >
                {faq.q}
                <span
                  className={`transform transition-transform ${openFaq === idx ? "rotate-180 text-blue-600" : "text-slate-400"}`}
                >
                  ▼
                </span>
              </button>
              <div
                className={`px-6 leading-relaxed text-slate-600 transition-all duration-300 ease-in-out ${
                  openFaq === idx
                    ? "max-h-40 pb-5 opacity-100"
                    : "max-h-0 overflow-hidden py-0 opacity-0"
                }`}
              >
                {faq.a}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 6. Bottom CTA */}
      <section className="rounded-3xl border border-blue-100 bg-blue-50 p-12 text-center md:p-16">
        <h2 className="mb-4 text-3xl font-extrabold text-slate-900 md:text-4xl">
          {t("services.cta.title")}
        </h2>
        <p className="mx-auto mb-10 max-w-2xl text-lg text-slate-600">
          {t("services.cta.desc1")}{" "}
          <span className="font-bold text-blue-600">
            {t("services.cta.descHighlight")}
          </span>
        </p>
        <div className="flex flex-col justify-center gap-4 sm:flex-row">
          <a
            href="https://wa.me/6285183303954"
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-center gap-2 rounded-full bg-blue-600 px-8 py-4 font-bold text-white shadow-lg transition-all hover:bg-blue-700 hover:shadow-blue-600/30"
          >
            {t("services.cta.btnWA")}
          </a>
          <a
            href="mailto:muhammadridhoarrosyid@gmail.com"
            className="flex items-center justify-center gap-2 rounded-full border border-slate-200 bg-white px-8 py-4 font-bold text-slate-700 transition-all hover:bg-slate-50"
          >
            {t("services.cta.btnEmail")}
          </a>
        </div>
      </section>
    </div>
  );
};

export default Services;
