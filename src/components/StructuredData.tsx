export default function StructuredData() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",

    name: "BizTools",

    url: "https://biztools.com",

    logo: "https://biztools.com/logo.png",

    description:
      "Free business calculators for entrepreneurs, freelancers and small businesses.",

    sameAs: [],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(jsonLd),
      }}
    />
  );
}