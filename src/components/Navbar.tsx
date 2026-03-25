import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const location = useLocation();
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "Portfolio", path: "/portfolio" },
  ];

  return (
    <nav className="glass-nav fixed z-50 w-full">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link
            to="/"
            className="text-primary-600 text-xl font-bold tracking-tight"
          >
            Ridho.Dev
          </Link>
          <div className="flex space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`${
                  location.pathname === link.path
                    ? "text-primary-600 font-semibold"
                    : "text-slate-600"
                } hover:text-primary-500 transition-colors duration-200`}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
