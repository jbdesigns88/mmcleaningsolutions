import React from "react";
import logoPng from "/images/logov1.png";
import whiteLogoPng from "/images/logo_white.png";

type LogoProps = {
  useWhite?: boolean;      // use white version (e.g., footer/dark bg)
};

const TextLogo = () => {
  return (
    <>
      <a href="#" className="logo" aria-label="M&M Sanitation Home">
        <span>M&amp;M</span>
        <span>SANITATION SOLUTIONS</span>
      </a>
    </>
  );
};

const ImageLogo: React.FC = () => {
  // Default: color logo, but swap to white on mobile (<=700px)
  return (
    <>
      <a href="#" className="logo" aria-label="M&M Sanitation Home">
        <picture>
          <source media="(max-width:700px)" srcSet={whiteLogoPng} />
          <img
            src={logoPng}
            alt="M&M Sanitation Solutions"
            className="logo-img"
            loading="lazy"
            decoding="async"
          />
        </picture>
      </a>
    </>
  );
};

const WhiteLogo: React.FC = () => {
  return (
    <>
      <a href="#" className="logo" aria-label="M&M Sanitation Home">
        <img
          src={whiteLogoPng}
          alt="M&M Sanitation Solutions"
          className="logo-img"
          loading="lazy"
          decoding="async"
        />
      </a>
    </>
  );
};

const Logo: React.FC<LogoProps> = ({ useWhite = false }) => {
  return useWhite ? <WhiteLogo /> : <ImageLogo />;
};

export default Logo;
