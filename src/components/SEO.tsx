import { Helmet } from "react-helmet-async";

interface SEOProps {
  title: string;
  description: string;
  type?: string;
  url?: string;
}

const SEO = ({
  title,
  description,
  type = "website",
  url = "https://ridhoarrosyid.com",
}: SEOProps) => {
  // Menggunakan nama Anda sebagai identitas utama situs
  const siteName =
    "Muhammad Ridho Ar-Rosyid | Fullstack Web Developer Di Lampung";

  return (
    <>
      <Helmet>
        <title>{`${title} | ${siteName}`}</title>
        <meta name="description" content={description} />

        {/* Keyword difokuskan pada nama, keahlian teknis, dan nilai jual (business value) */}
        <meta
          name="keywords"
          content="Muhammad Ridho Ar-Rosyid, Ridho Arrosyid, web developer di Lampung, Fullstack Web Developer Indonesia, React JS Developer, Next JS, MERN Stack, Laravel Developer, Tailwind CSS, jasa pembuatan website, website bisnis konstruksi, jasa web kontraktor, company profile B2B, Rirolab, wajah digital untuk bisnis profesional"
        />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content={type} />
        <meta property="og:url" content={url} />
        <meta property="og:title" content={`${title} | ${siteName}`} />
        <meta property="og:description" content={description} />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`${title} | ${siteName}`} />
        <meta name="twitter:description" content={description} />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            name: "Muhammad Ridho Ar-Rosyid",
            url: url,
            jobTitle: "Fullstack Web Developer",
            sameAs: [
              "https://linkedin.com/in/muhammad-ridho-ar-rosyid/",
              "https://github.com/ridhoarrosyid/",
              "https://www.instagram.com/ridhooarrosyid/",
            ],
          })}
        </script>
      </Helmet>
    </>
  );
};

export default SEO;
