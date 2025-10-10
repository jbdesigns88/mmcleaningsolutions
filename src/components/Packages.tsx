import React from "react";

type Service = {
  title: string;
  description: string;
  image?: string;
};

const Services: Record<string, Service> = {
  deep_cleaning: {
    title: "First Degree $99",
    description: `
        •Vacuum/Map
        •Wipe down all hard surfaces 
        •clean all mirrors/dusting
        •Bathrooms/Kitchen 
        •Living area
        •Dining area`,
    image: "./images/animated/first-degree.svg",
  },
  commercial_cleaning: {
    title: "Second Degree $125",
    description: `
        •Vacuums/map
        •wipe down all hard surfaces 
        •clean all mirrors/dusting
        •bathrooms/Kitchen 
        •Living area 
        •Dining area 
        •1 Bedroom
        `,
    image: "./images/animated/second-degree.svg",
  },
  third_degree: {
    title: "Third Degree $125",
    description: `
        •Vacuum/Map
        •Wipe down all hard surfaces 
        •Clean all mirrors/Dusting
        •Bathrooms/Kitchen 
        •Living area
        •Dining area 
        •2 Bedrooms
        `,
    image: "./images/animated/third-degree.svg",
  },
  fourth_degree: {
    title: "Fourth Degree $200",
    description: `
        •Wipedown all hard surfaces 
        •Clean all mirrors/Dusting
        •Bathrooms/Kitchen 
        •Living area 
        •Dining area 
        •3-4 Bedrooms
        `,
    image: "./images/animated/fourth-degree.svg",
  },
  fifth_degree: {
    title: "Add On's",
    description: `
        •Carpet cleaning $99/$125/$150/$200 
        •Leather sofa conditioner $75 
        •Sofa/Matteress steaming $100 
        •Stove & Oven restoration $30 
        •Wash & Fold $75 
        •Closet Organization $50/$75/$100 
        •Dog Poop Removal $75
        `,
    image: "./images/animated/add-ons.svg",
  },
};

const splitTitle = (title: string) => {
  // "First Degree $99" -> { name: "First Degree", price: 99 }
  const m = title.match(/^(.*?)(?:\s*\$([\d.,]+))?$/);
  return {
    name: (m?.[1] ?? title).trim(),
    price: m?.[2] ? Number(m[2].replace(/,/g, "")) : null,
  };
};

const parseLineWithPrices = (line: string) => {
  // Grab all $ amounts (supports $50, $75, $100, $99.99, and slash-separated lists)
  const prices = (line.match(/\$\d+(?:\.\d+)?/g) || []);
  // Remove prices (and extra slashes/spaces) to get the clean label
  const label = line
    .replace(/\$\d+(?:\.\d+)?/g, "")
    .replace(/[\/]+/g, " ")
    .replace(/\s+/g, " ")
    .trim();
  return { label, prices };
};

const renderDescription = (text: string) => {
  const items = text
    .split(/\n+/)
    .map((s) => s.replace(/^[\s•\-]+/, "").trim())
    .filter(Boolean);

  if (!items.length) return null;

  return (
    <ul className="feature-list">
      {items.map((raw, i) => {
        const { label, prices } = parseLineWithPrices(raw);
        return (
          <li key={i}>
            <span className="line-label">{label}</span>
            {prices.length > 0 && (
              <span className="price-chips">
                {prices.map((p, idx) => (
                  <span className="price-chip" key={idx}>{p}</span>
                ))}
              </span>
            )}
          </li>
        );
      })}
    </ul>
  );
};

const Packages: React.FC = () => {
  return (
    <section className="site-content-section">
      <div className="container text-center">
        <h2 className="section-title">Our Services</h2>
        <p className="section-description">
          We offer a wide range of cleaning services tailored to your needs.
          Whether it's residential or commercial, we've got you covered
        </p>

        <div className="services-grid">
          {Object.entries(Services).map(([key, service]) => {
            const { name, price } = splitTitle(service.title);

            return (
              <div key={key} className="service-card">
                {service.image && (
                  <img
                    src={service.image}
                    alt={service.title}
                    className="service-image"
                  />
                )}

                <h3 className="service-title">
                  <span className="service-name">{name}</span>
                  {price !== null && (
                    <span className="price-badge">${price}</span>
                  )}
                </h3>

                {renderDescription(service.description)}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Packages;
