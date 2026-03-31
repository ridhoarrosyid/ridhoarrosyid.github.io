import { Globe, Menu, X } from "lucide-react";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const { t, i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language.startsWith("id") ? "en" : "id";
    i18n.changeLanguage(newLang);
  };

  //useEffect(() => setIsOpen(false), [location.pathname]);

  const links = [
    { name: t("navbar.home"), path: "/" },
    { name: t("navbar.services"), path: "/services" },
    { name: t("navbar.portfolio"), path: "/portfolio" },
  ];

  return (
    <nav className="fixed top-0 z-40 w-full px-4 py-3">
      <div className="glass-panel mx-auto flex max-w-5xl items-center justify-between rounded-2xl px-6 py-3">
        <Link
          to="/"
          className="text-primary-dark flex items-center justify-start gap-2 text-xl font-bold"
        >
          <img
            src="/logo.webp"
            alt="Logo Muhammad Ridho Ar-Rosyid"
            className="h-8"
          />
          Ridho
        </Link>

        {/* Desktop Menu */}
        <div className="hidden gap-8 md:flex">
          {links.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`hover:text-primary font-medium transition-colors ${location.pathname === link.path ? "text-primary" : "text-slate-600"}`}
            >
              {link.name}
            </Link>
          ))}
          {/* Tombol Ubah Bahasa */}
          <button
            onClick={toggleLanguage}
            className="flex cursor-pointer items-center gap-2 rounded-full border border-slate-200 bg-slate-100 px-3 py-1.5 text-sm font-semibold text-slate-700 transition-colors hover:bg-slate-200"
          >
            <Globe size={16} />
            {i18n.language.startsWith("id") ? "ID" : "EN"}
          </button>
        </div>

        {/* Mobile Toggle */}
        <div className="flex gap-2 md:hidden">
          <button
            onClick={toggleLanguage}
            className="flex w-fit cursor-pointer items-center gap-2 rounded-full border border-slate-200 bg-slate-100 px-3 py-1.5 text-sm font-semibold text-slate-700 transition-colors hover:bg-slate-200"
          >
            <Globe size={16} />
            {i18n.language.startsWith("id") ? "ID" : "EN"}
          </button>
          <button className="text-slate-700" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="glass-panel absolute top-20 right-4 left-4 flex flex-col gap-4 rounded-2xl p-4 md:hidden">
          {links.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`rounded-lg p-2 font-medium hover:bg-white/50 ${location.pathname === link.path ? "text-primary" : "text-slate-700"}`}
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
