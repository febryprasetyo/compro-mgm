const JsonLd = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "PT. Multi Gas Medika",
    "image": "https://medigas.co.id/logo.png",
    "description": "World Class Oxygen Provider Indonesia. Penyedia sistem oksigen medis PSA terpercaya.",
    "url": "https://medigas.co.id",
    "telephone": "+62214602345",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Jl. Rawa Terate II No.6",
      "addressLocality": "Jakarta Timur",
      "addressRegion": "DKI Jakarta",
      "postalCode": "13920",
      "addressCountry": "ID"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": -6.20812,
      "longitude": 106.91437
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday"
      ],
      "opens": "08:00",
      "closes": "17:00"
    },
    "sameAs": [
      "https://www.facebook.com/medigas",
      "https://www.instagram.com/medigas"
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
};

export default JsonLd;
