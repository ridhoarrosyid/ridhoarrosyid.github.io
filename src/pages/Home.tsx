import { Link } from "react-router-dom";
import { ArrowRight, Target, Code2, CheckCircle2 } from "lucide-react";
import SEO from "../components/SEO";
import { projects as projectData } from "../data/projects";
import { getImageUrl } from "../lib/helper";

const Home = () => {
  // Utility class untuk Frost/Light Glassmorphism yang konsisten dengan App.tsx
  const glassCard =
    "bg-white/60 backdrop-blur-xl border border-white/80 rounded-3xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)]";

  const workflowSteps = [
    {
      step: "01",
      title: "Briefing & Eksplorasi",
      desc: "Diskusi mendalam mengenai visi, tantangan bisnis, dan perumusan kebutuhan teknis." /* [cite: 36] */,
    },
    {
      step: "02",
      title: "Dealing & Proposal",
      desc: "Penyepakatan ruang lingkup kerja, estimasi waktu penyelesaian, dan rincian biaya secara transparan." /* [cite: 37] */,
    },
    {
      step: "03",
      title: "Down Payment (DP)",
      desc: "Pembayaran termin awal sebagai komitmen resmi untuk memulai tahap eksekusi proyek." /* [cite: 38] */,
    },
    {
      step: "04",
      title: "Pengerjaan (Development)",
      desc: "Proses desain UI/UX hingga penulisan kode sistem. Saya akan memberikan laporan progres secara berkala." /* [cite: 39] */,
    },
    {
      step: "05",
      title: "Review & Revisi",
      desc: "Peninjauan hasil kerja bersama dan proses penyesuaian (revisi) untuk memastikan hasil akhir benar-benar presisi." /* [cite: 40] */,
    },
    {
      step: "06",
      title: "Pelunasan",
      desc: "Pembayaran tahap akhir setelah seluruh tahapan revisi diselesaikan dan disetujui." /* [cite: 41] */,
    },
    {
      step: "07",
      title: "Serah Terima (Handover)",
      desc: "Peluncuran sistem ke publik. Saya menyerahkan seluruh aset digital, akses server, dan kode sumber sepenuhnya kepada Anda." /* [cite: 42, 43] */,
    },
  ];

  const projects = projectData.filter((e, i) => i <= 2);

  return (
    <div className="animate-fade-in flex flex-col gap-32 pb-20">
      <SEO
        title="Beranda"
        description="Portfolio personal Muhammad Ridho Ar-Rosyid, Fullstack Web Developer spesialis React & Laravel yang membangun solusi digital berbasis strategi bisnis untuk audiens modern."
      />
      {/* 1. Hero Section */}
      <section className="relative flex flex-col items-center pt-10 text-center">
        <div className="pointer-events-none absolute top-1/2 left-1/2 -z-10 h-150 w-150 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-400/20 blur-[100px]"></div>
        <h1 className="mb-6 text-4xl leading-[1.15] font-extrabold tracking-tight text-slate-900 md:text-6xl">
          Membangun Solusi Digital yang <br className="hidden md:block" />
          <span className="bg-linear-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
            Berdampak Nyata
          </span>{" "}
          bagi Bisnis Anda.
        </h1>
        {/* [cite: 3] */}

        <p className="mb-4 max-w-3xl text-lg leading-relaxed text-slate-600 md:text-xl">
          Halo, saya Muhammad Ridho Ar-Rosyid. Sebagai Fullstack Web Developer
          dengan latar belakang Bisnis Digital, saya merancang dan mengembangkan
          website yang tidak sekadar estetik, tetapi juga dioptimalkan untuk
          performa dan pertumbuhan bisnis.
        </p>
        {/*  */}

        <p className="mb-10 text-xl font-semibold text-blue-600">
          Saya hadir untuk membangun wajah digital untuk bisnis profesional.
        </p>
        {/*  */}

        <div className="flex w-full flex-col gap-4 sm:w-auto sm:flex-row">
          <Link
            to="/portfolio"
            className="flex items-center justify-center gap-2 rounded-full bg-blue-600 px-8 py-4 font-medium text-white shadow-lg transition-all hover:bg-blue-700 hover:shadow-blue-600/30"
          >
            Lihat Karya Saya <ArrowRight size={18} />
          </Link>
          {/* [cite: 6] */}
          <a
            href="https://wa.me/6285183303954"
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-slate-200 bg-white/80 px-8 py-4 font-medium text-slate-700 shadow-sm backdrop-blur-md transition-all hover:bg-white"
          >
            Konsultasi Proyek
          </a>
          {/* [cite: 7] */}
        </div>
      </section>

      {/* 2. Quick Stats */}
      <section className="grid grid-cols-1 gap-6 md:grid-cols-3">
        <div className={glassCard + " text-center"}>
          <h3 className="mb-2 text-4xl font-black text-slate-900">2+ Tahun</h3>
          <p className="font-medium text-slate-600">
            Eksplorasi & Pengembangan Web
          </p>
        </div>
        {/* [cite: 10] */}
        <div className={glassCard + " text-center"}>
          <h3 className="mb-2 text-4xl font-black text-slate-900">8+ Proyek</h3>
          <p className="font-medium text-slate-600">
            Digital Berhasil Diselesaikan
          </p>
        </div>
        {/* [cite: 11] */}
        <div className={glassCard + " text-center"}>
          <h3 className="mb-2 text-4xl font-black text-slate-900">
            100% Fokus
          </h3>
          <p className="font-medium text-slate-600">
            pada Nilai & Konversi Bisnis
          </p>
        </div>
        {/* [cite: 12] */}
      </section>

      {/* 3. Value Proposition */}
      <section className="scroll-mt-28">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold text-slate-900 md:text-4xl">
            Harmoni Antara Teknologi dan Bisnis.
          </h2>
          {/*  */}
          <p className="mx-auto max-w-2xl text-lg text-slate-600">
            Pendekatan saya berbeda dari pengembang web pada umumnya. Saya tidak
            hanya menulis baris kode; saya memulai dari analisis kebutuhan pasar
            dan tujuan akhir Anda.
          </p>
          {/* [cite: 15, 16] */}
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <div className={glassCard}>
            <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-100 text-blue-600">
              <Target size={28} />
            </div>
            <h3 className="mb-3 text-2xl font-bold text-slate-900">
              Desain Berbasis Konversi
            </h3>
            <p className="leading-relaxed text-slate-600">
              Membangun antarmuka (UI/UX) yang intuitif, memandu pengunjung
              situs untuk melakukan aksi yang menguntungkan bisnis Anda.
            </p>
            {/* [cite: 17] */}
          </div>
          <div className={glassCard}>
            <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-100 text-cyan-600">
              <Code2 size={28} />
            </div>
            <h3 className="mb-3 text-2xl font-bold text-slate-900">
              Arsitektur Skalabel
            </h3>
            <p className="leading-relaxed text-slate-600">
              Menulis struktur kode yang bersih dan aman, memastikan website
              atau aplikasi Anda siap menampung lonjakan pengguna di masa depan.
            </p>
            {/* [cite: 18] */}
          </div>
        </div>
      </section>

      {/* 4. About Me Teaser & 5. Tech Stack */}
      <section className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
        <div>
          <h2 className="mb-6 text-3xl font-bold text-slate-900">
            Di Balik Baris Kode.
          </h2>
          {/* [cite: 20] */}
          <div className="space-y-4 text-lg leading-relaxed text-slate-600">
            <p>
              Pengalaman saya, termasuk saat berpartisipasi sebagai Google
              Student Ambassador, telah membentuk cara pandang saya dalam
              melihat ekosistem teknologi.
            </p>
            {/* [cite: 21] */}
            <p>
              Sebagai mahasiswa Bisnis Digital, saat ini fokus riset saya
              mendalami pengaruh web experience terhadap niat beli online di
              kalangan Gen-Z. Wawasan akademis ini saya terapkan secara langsung
              pada setiap proyek klien untuk memastikan antarmuka yang dibangun
              secara psikologis tepat sasaran bagi pengguna modern.
            </p>
            {/* [cite: 22, 23] */}
          </div>
        </div>

        <div className="relative overflow-hidden rounded-3xl bg-slate-900 p-8 shadow-2xl">
          <div className="absolute top-0 right-0 h-64 w-64 rounded-full bg-blue-500/20 blur-[80px]"></div>
          <h3 className="mb-8 text-xl font-bold text-white">
            Ekosistem Teknologi yang Saya Gunakan.
          </h3>
          {/* [cite: 25] */}
          <div className="relative z-10 flex flex-wrap gap-3">
            {[
              "React",
              "TypeScript",
              "Next.js",
              "Tailwind CSS",
              "Express",
              "Laravel",
              "WordPress",
              "Figma",
            ].map((tech) => (
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
          Solusi yang Saya Tawarkan.
        </h2>
        {/* [cite: 29] */}
        <div className="mb-10 grid grid-cols-1 gap-8 text-left md:grid-cols-2">
          <div className={glassCard}>
            <h3 className="mb-4 text-2xl font-bold text-slate-900">
              Landing Page & Company Profile
            </h3>
            <p className="leading-relaxed text-slate-600">
              Membangun kesan pertama yang meyakinkan, responsif di berbagai
              perangkat, dan dirancang khusus dengan taktik copywriting untuk
              meningkatkan rasio konversi.
            </p>
            {/* [cite: 30] */}
          </div>
          <div className={glassCard}>
            <h3 className="mb-4 text-2xl font-bold text-slate-900">
              Custom Web Application
            </h3>
            <p className="leading-relaxed text-slate-600">
              Pengembangan sistem fungsional end-to-end yang disesuaikan dengan
              alur operasional internal bisnis Anda, dari perancangan database
              hingga antarmuka pengguna.
            </p>
            {/* [cite: 31] */}
          </div>
        </div>
        <Link
          to="/services"
          className="group inline-flex items-center text-lg font-bold text-blue-600 hover:text-blue-700"
        >
          Jelajahi Detail Layanan
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
            Alur Kerja Profesional & Transparan.
          </h2>
          {/* [cite: 34] */}
          <p className="max-w-2xl text-lg text-slate-600">
            Proses sistematis yang saya terapkan untuk memastikan setiap proyek
            berjalan tepat waktu, sesuai anggaran, dan memenuhi ekspektasi Anda.
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
              Karya & Eksplorasi Digital.
            </h2>
            {/* [cite: 45] */}
            <p className="text-slate-600">
              Beberapa proyek terpilih dan studi kasus yang telah saya
              kembangkan.
            </p>
            {/* [cite: 46] */}
          </div>
          <Link
            to="/portfolio"
            className="group inline-flex shrink-0 items-center font-bold text-blue-600 hover:text-blue-700"
          >
            Lihat Seluruh Portfolio
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
            const techs = project.tech.filter((e, i) => i < 5);
            return (
              <Link to={project.demoLink || "#"}>
                <div
                  key={project.id}
                  className="group overflow-hidden rounded-3xl border border-slate-200 bg-white transition-all hover:border-blue-300 hover:shadow-xl"
                >
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
                    <div className="mb-4 flex flex-wrap gap-2">
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
                    {/* [cite: 47] */}
                    <h3 className="mb-2 line-clamp-2 text-xl font-bold text-slate-900 transition-colors group-hover:text-blue-600">
                      {project.title}
                    </h3>
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
            Siap Mendigitalisasi Ide Anda?
          </h2>
          {/* [cite: 50] */}
          <p className="mb-10 text-xl leading-relaxed text-slate-300">
            Mari diskusikan visi Anda. Bersama, kita wujudkan produk digital
            yang tidak sekadar terlihat profesional, tetapi juga bekerja secara
            optimal untuk memajukan bisnis Anda.
          </p>
          {/* [cite: 51] */}
          <a
            href="https://wa.me/6285183303954"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-white px-10 py-5 text-lg font-bold text-slate-900 shadow-xl transition-all hover:-translate-y-1 hover:bg-blue-50 hover:shadow-white/20"
          >
            Hubungi Saya Sekarang{" "}
            <CheckCircle2 size={20} className="text-blue-600" />
          </a>
          {/* [cite: 52] */}
        </div>
      </section>
    </div>
  );
};

export default Home;
