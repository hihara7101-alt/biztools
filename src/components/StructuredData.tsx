
export default function StructuredData() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",

    name: "Uttacca",

    url: "https://uttacca.com",

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
