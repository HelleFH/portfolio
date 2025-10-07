import Images from "../../assets/images";
import "@fortawesome/fontawesome-free/css/all.min.css";
import SocialLinks from "../SocialLinks/SocialLinks";

const Footer = () => {
  return (
    <footer className="font-roboto mt-6 flex w-full flex-col items-center justify-between border-t border-gray-300 bg-[rgba(var(--white-color))] p-6 md:flex-row">
      
      {/* Contact Section */}
      <div className="flex flex-1 flex-col items-center justify-center gap-2 text-center md:text-left">
        <p>Contact me at:</p>
        <a
          href="mailto:hellefruergaardh@gmail.com"
          className="hover:text-[rgba(var(--darkgreen))]-600 text-lg font-medium text-[rgba(var(--dark-color))] transition-colors"
        >
          hellefruergaardh@gmail.com
        </a>
        <p>1434 Copenhagen, Denmark</p>

        <SocialLinks />
      </div>

      {/* Logo Section */}
      <div className="mt-6 flex flex-1 flex-col items-center text-center md:mt-0">
        <img
          src={Images.FooterLogo}
          alt="Company Logo"
          className="max-w-xs"
        />
        <p className="mt-2 text-sm  text-[rgba(var(--black-color))]">
          &copy; 2025 <strong className="font-cupcakes">Helle Fruergaard</strong>. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
