import {
  HashRouter as Router,
  Routes,
  Route,
  Link,
  useLocation,
} from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Portfolio from "./pages/Portfolio";

import { HelmetProvider } from "react-helmet-async";
import Footer from "./components/Footer";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  // useEffect(() => setIsOpen(false), [location.pathname]);

  const links = [
    { name: "Beranda", path: "/" },
    { name: "Layanan", path: "/services" },
    { name: "Karya", path: "/portfolio" },
  ];

  return (
    <nav className="fixed top-0 z-40 w-full px-4 py-3">
      <div className="glass-panel mx-auto flex max-w-5xl items-center justify-between rounded-2xl px-6 py-3">
        <Link to="/" className="text-primary-dark text-xl font-bold">
          Ridho.
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
        </div>

        {/* Mobile Toggle */}
        <button
          className="text-slate-700 md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="glass-panel absolute top-20 right-4 left-4 flex flex-col gap-4 rounded-2xl p-4 md:hidden">
          {links.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className="rounded-lg p-2 font-medium text-slate-700 hover:bg-white/50"
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default function App() {
  return (
    <HelmetProvider>
      <Router>
        <Navbar />
        <main className="mx-auto min-h-screen max-w-5xl px-6 pt-28">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/portfolio" element={<Portfolio />} />
          </Routes>
        </main>
        <Footer />
      </Router>
    </HelmetProvider>
  );
}
