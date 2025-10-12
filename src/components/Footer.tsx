import React from "react";
import Images from "../assets/images.tsx";
import SocialLinks from "./SocialLinks.tsx";

const Footer: React.FC = () => {
  return (
    <footer className="font-roboto mt-6 flex w-full flex-col items-center justify-between border-t border-gray-300 bg-[rgba(var(--white-color))] p-6 md:flex-row md:gap-6">
      {/* Contact Section */}
      <div className="flex flex-1 flex-col items-center justify-center gap-2 text-center ">
        <p>Contact me at:</p>
        <a
          href="mailto:hellefruergaardh@gmail.com"
          className="text-lg font-medium text-[rgba(var(--dark-color))] transition-colors duration-200 hover:text-[rgba(var(--darkgreen))]"
        >
          hellefruergaardh@gmail.com
        </a>
        <p>1434 Copenhagen, Denmark</p>

<SocialLinks color="text-[rgba(var(--darkgreen))]" hoverColor="hover:text-[rgba(var(--cyan))]" />
      </div>

      {/* Logo Section */}
      <div className="mt-6 flex flex-1 flex-col items-center text-center md:mt-0">
        <img
          src={Images.FooterLogo}
          alt="Company Logo"
          className="max-w-[200px] object-contain"
        />
        <p className="mt-2 text-sm text-[rgba(var(--black-color))]">
          &copy; 2025{" "}
          <strong className="font-cupcakes text-base font-semibold">
            Helle Fruergaard
          </strong>
          . All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
