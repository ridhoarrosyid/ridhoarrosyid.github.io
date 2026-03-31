import { HashRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Services from "./pages/Services";
import Portfolio from "./pages/Portfolio";

import { HelmetProvider } from "react-helmet-async";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

export default function App() {
  return (
    <HelmetProvider>
      <Router>
        <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden">
          <Navbar />
          <main className="mx-auto min-h-screen max-w-5xl px-6 pt-28">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/services" element={<Services />} />
              <Route path="/portfolio" element={<Portfolio />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </HelmetProvider>
  );
}
