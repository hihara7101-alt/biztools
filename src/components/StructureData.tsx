type Props = {
  name: string;
  description: string;
  url: string;
};

export default function StructuredData({
  name,
  description,
  url,
}: Props) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebApplication",

    name,

    description,

    applicationCategory: "BusinessApplication",

    operatingSystem: "Any",

    browserRequirements: "Requires JavaScript",

    url,

    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },

    publisher: {
      "@type": "Organization",
      name: "BizTools",
      url: "https://biztools.site",
    },
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