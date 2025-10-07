import Images from "../../assets/images";
import "@fortawesome/fontawesome-free/css/all.min.css";
import SocialLinks from "../SocialLinks/SocialLinks";

const Footer = () => {
  return (
    <footer className="flex flex-col md:flex-row justify-between items-center bg-[rgba(var(--white-color))] border-t border-gray-300 p-6 w-full mt-6 font-roboto">
      
      {/* Contact Section */}
      <div className="flex justify-center items-center flex-col gap-2 flex-1 text-center md:text-left">
        <p>Contact me at:</p>
        <a
          href="mailto:hellefruergaardh@gmail.com"
          className="text-[rgba(var(--dark-color))] hover:text-[rgba(var(--darkgreen))]-600 transition-colors text-lg font-medium"
        >
          hellefruergaardh@gmail.com
        </a>
        <p>1434 Copenhagen, Denmark</p>

        <SocialLinks />
      </div>

      {/* Logo Section */}
      <div className="flex flex-col items-center flex-1 text-center mt-6 md:mt-0">
        <img
          src={Images.FooterLogo}
          alt="Company Logo"
          className="max-w-xs"
        />
        <p className="text-sm text-[rgba(var(--black-color))]  mt-2">
          &copy; 2025 <strong className="font-cupcakes">Helle Fruergaard</strong>. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
