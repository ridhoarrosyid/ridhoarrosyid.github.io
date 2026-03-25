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

const Services = () => {
  // Utility class untuk Frost Glassmorphism
  const glassCard =
    "bg-white/60 backdrop-blur-xl border border-white/80 rounded-3xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all duration-300";

  // Efek hover khusus untuk 3 Kartu Layanan
  const serviceCardHover =
    "hover:-translate-y-3 hover:shadow-[0_20px_40px_rgb(37,99,235,0.1)] hover:border-blue-200 hover:bg-white/80 relative overflow-hidden group";

  const services = [
    {
      title: "Landing Page Promotion",
      price: "Mulai dari Rp 750.000",
      desc: "Halaman tunggal yang dioptimalkan secara psikologis dan visual untuk mengubah pengunjung menjadi pembeli (konversi tinggi).",
      features: [
        "Desain 1 Halaman Berbasis Konversi",
        "Responsif di Semua Perangkat (Mobile-Friendly)",
        "Integrasi Tombol WhatsApp / Formulir Kontak",
        "Pemuatan Halaman Super Cepat (Speed Optimized)",
        "Copywriting Dasar & Penataan Konten",
      ],
      cta: "Pesan Layanan Ini",
      popular: false,
    },
    {
      title: "Professional Web Profile",
      price: "Mulai dari Rp 1.500.000",
      desc: "Website multi-halaman untuk membangun kredibilitas, menampilkan portofolio perusahaan, dan menonjolkan identitas merek Anda di mesin pencari.",
      features: [
        "Hingga 5 Halaman Utama (Home, About, Services, Portfolio, Contact)",
        "Desain UI/UX Kustom & Elegan",
        "Optimasi SEO Dasar (On-Page)",
        "Integrasi Sosial Media & Google Maps",
        "Panel Admin Sederhana (WordPress / CMS)",
      ],
      cta: "Pesan Layanan Ini",
      popular: true, // Highlight card ini
    },
    {
      title: "Custom Web Application",
      price: "Custom Pricing",
      desc: "Pengembangan sistem berbasis web dari nol (end-to-end) untuk menyelesaikan alur kerja yang kompleks dan spesifik pada bisnis Anda.",
      features: [
        "Perancangan Sistem & Arsitektur Database",
        "Pengembangan Frontend (React / Next.js / Tailwind)",
        "Pengembangan Backend & API (Laravel / Express)",
        "Sistem Autentikasi & Keamanan Tingkat Lanjut",
        "Skalabilitas Infrastruktur untuk Masa Depan",
      ],
      cta: "Konsultasi Kebutuhan",
      popular: false,
    },
  ];

  const faqs = [
    {
      q: "Apakah harga sudah termasuk Domain dan Hosting?",
      a: "Untuk paket Landing Page dan Web Profile, harga dapat disesuaikan untuk memasukkan domain (.com/.id) dan cloud hosting standar selama 1 tahun. Untuk Custom Website, infrastruktur server akan didiskusikan terpisah sesuai skala aplikasi.",
    },
    {
      q: "Berapa lama waktu pengerjaannya?",
      a: "Landing page biasanya memakan waktu 3-7 hari kerja. Web Profile sekitar 2-3 minggu. Sedangkan Custom Web App sangat bergantung pada kompleksitas fitur yang diminta.",
    },
    {
      q: "Apakah saya bisa meminta revisi desain?",
      a: "Tentu. Setiap proyek mencakup 2-3 kali revisi minor pada tahap desain (sebelum coding dimulai) untuk memastikan hasil visual selaras dengan identitas bisnis Anda.",
    },
    {
      q: "Apakah ada dukungan pemeliharaan (maintenance) setelah website rilis?",
      a: "Ya, saya memberikan garansi bug-fixing gratis selama 1 bulan pertama setelah serah terima. Pemeliharaan rutin setelahnya tersedia melalui kesepakatan terpisah.",
    },
  ];

  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <div className="animate-fade-in flex flex-col gap-24 pb-20">
      <SEO
        title="Layanan Web Development"
        description="Saya, Muhammad Ridho, menawarkan layanan pembuatan Landing Page konversi tinggi, Web Profile, dan Custom Web Application menggunakan teknologi modern."
      />
      {/* 1. Hero Section */}
      <section className="mx-auto max-w-3xl pt-10 text-center">
        <h1 className="mb-6 text-4xl leading-tight font-extrabold tracking-tight text-slate-900 md:text-5xl">
          Solusi Digital Berbasis <br />
          <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
            Strategi Bisnis.
          </span>
        </h1>
        <p className="text-lg leading-relaxed text-slate-600 md:text-xl">
          Saya tidak sekadar menulis kode atau membuat desain yang cantik. Saya
          membantu Anda membangun ekosistem digital yang fungsional, meyakinkan,
          dan dirancang khusus untuk mendorong pertumbuhan bisnis Anda.
        </p>
      </section>

      {/* 2. Problem & Agitation */}
      <section className="rounded-[3rem] border border-slate-200/60 bg-slate-50/50 p-8 md:p-12">
        <div className="mb-10 text-center">
          <h2 className="mb-4 text-2xl font-bold text-slate-900 md:text-3xl">
            Apakah Bisnis Anda Menghadapi Kendala Ini?
          </h2>
        </div>
        <div className="mb-8 grid grid-cols-1 gap-6 md:grid-cols-3">
          <div className="flex items-start gap-4 rounded-2xl border border-red-100 bg-white p-6 shadow-sm">
            <AlertCircle className="mt-1 shrink-0 text-red-500" size={24} />
            <p className="leading-relaxed font-medium text-slate-700">
              Kehilangan klien potensial karena performa website yang lambat dan
              membingungkan?
            </p>
          </div>
          <div className="flex items-start gap-4 rounded-2xl border border-orange-100 bg-white p-6 shadow-sm">
            <AlertCircle className="mt-1 shrink-0 text-orange-500" size={24} />
            <p className="leading-relaxed font-medium text-slate-700">
              Tampilan bisnis di internet tidak mencerminkan kualitas produk
              atau layanan yang Anda berikan?
            </p>
          </div>
          <div className="flex items-start gap-4 rounded-2xl border border-amber-100 bg-white p-6 shadow-sm">
            <AlertCircle className="mt-1 shrink-0 text-amber-500" size={24} />
            <p className="leading-relaxed font-medium text-slate-700">
              Operasional internal masih bergantung pada proses manual yang
              memakan waktu dan rentan kesalahan?
            </p>
          </div>
        </div>
        <p className="text-center text-lg font-medium text-slate-600">
          Mari ubah tantangan tersebut menjadi{" "}
          <span className="font-bold text-blue-600">peluang</span>. Berikut
          adalah bagaimana saya bisa membantu Anda.
        </p>
      </section>

      {/* 3. Core Services (3 Cards with Glassmorphism & Hover) */}
      <section>
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold text-slate-900 md:text-4xl">
            Layanan & Investasi Digital
          </h2>
          <p className="text-lg text-slate-600">
            Pilih solusi yang paling sesuai dengan fase dan kebutuhan bisnis
            Anda saat ini.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {services.map((service, idx) => (
            <div
              key={idx}
              className={`${glassCard} ${serviceCardHover} flex h-full flex-col ${service.popular ? "ring-2 shadow-blue-500/10 ring-blue-500/50" : ""}`}
            >
              {/* Highlight Badge */}
              {service.popular && (
                <div className="absolute top-0 right-0 z-10 rounded-bl-xl bg-gradient-to-r from-blue-500 to-cyan-500 px-4 py-1.5 text-xs font-bold text-white">
                  Paling Diminati
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
                <p className="min-h-[60px] text-sm leading-relaxed text-slate-600">
                  {service.desc}
                </p>
              </div>

              {/* Checklist */}
              <div className="flex-grow">
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
                  service.popular
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
          Kenapa Berkolaborasi dengan Saya?
        </h2>

        <div className="relative z-10 grid grid-cols-1 gap-8 md:grid-cols-3">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-colors hover:bg-white/10">
            <TrendingUp className="mb-4 text-blue-400" size={32} />
            <h3 className="mb-3 text-xl font-bold text-white">
              Pendekatan Bisnis
            </h3>
            <p className="text-sm leading-relaxed text-slate-400">
              Setiap keputusan desain dan kode didasarkan pada strategi untuk
              memaksimalkan ROI (Return on Investment) Anda, bukan sekadar
              estetika.
            </p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-colors hover:bg-white/10">
            <Cpu className="mb-4 text-cyan-400" size={32} />
            <h3 className="mb-3 text-xl font-bold text-white">
              Teknologi Modern
            </h3>
            <p className="text-sm leading-relaxed text-slate-400">
              Menggunakan ekosistem framework terkini (seperti React dan
              Laravel) untuk memastikan produk digital Anda cepat, aman, dan
              relevan di masa depan.
            </p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-colors hover:bg-white/10">
            <MessageSquare className="mb-4 text-purple-400" size={32} />
            <h3 className="mb-3 text-xl font-bold text-white">
              Komunikasi Transparan
            </h3>
            <p className="text-sm leading-relaxed text-slate-400">
              Anda akan selalu mendapatkan pembaruan (update) berkala di setiap
              fase pengembangan, dari sketsa awal hingga peluncuran.
            </p>
          </div>
        </div>
      </section>

      {/* 5. FAQ Section */}
      <section className="mx-auto w-full max-w-3xl">
        <div className="mb-10 text-center">
          <h2 className="mb-4 text-3xl font-bold text-slate-900">
            Pertanyaan yang Sering Diajukan
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
      <section className="rounded-3xl rounded-[3xl] border border-blue-100 bg-blue-50 p-12 text-center md:p-16">
        <h2 className="mb-4 text-3xl font-extrabold text-slate-900 md:text-4xl">
          Mari Mulai Transformasi Digital Anda
        </h2>
        <p className="mx-auto mb-10 max-w-2xl text-lg text-slate-600">
          Punya pertanyaan lebih lanjut atau ingin memastikan layanan mana yang
          paling tepat untuk Anda? Jangan ragu untuk berdiskusi.{" "}
          <span className="font-bold text-blue-600">
            Konsultasi awal sepenuhnya gratis.
          </span>
        </p>
        <div className="flex flex-col justify-center gap-4 sm:flex-row">
          <a
            href="https://wa.me/6285183303954"
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-center gap-2 rounded-full bg-blue-600 px-8 py-4 font-bold text-white shadow-lg transition-all hover:bg-blue-700 hover:shadow-blue-600/30"
          >
            Hubungi via WhatsApp
          </a>
          <a
            href="mailto:muhammadridhoarrosyid@gmail.com"
            className="flex items-center justify-center gap-2 rounded-full border border-slate-200 bg-white px-8 py-4 font-bold text-slate-700 transition-all hover:bg-slate-50"
          >
            Kirim Email Penawaran
          </a>
        </div>
      </section>
    </div>
  );
};

export default Services;
