import { Link } from "react-router";
import { Mail } from "lucide-react";
import { FaFacebook, FaInstagram, FaXTwitter } from "react-icons/fa6";
import logoImage from "../assets/logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-linear-to-r from-[#2E7D32] to-[#1B5E20] py-10 px-10 mx-4 rounded-xl text-white">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">

        {/* Brand */}
        <div className="flex flex-col items-center md:items-start">
          <div className="flex flex-col items-center md:items-start gap-2">
            <img
              className="h-14 w-14 rounded-full object-cover"
              src={logoImage}
              alt="TasteTrail Logo"
            />
            <h3 className="text-lg font-bold">TasteTrail</h3>
            <p className="text-sm text-green-100">
              Personalized recipes & smart meal planning
            </p>
          </div>

          <ul className="space-y-2 mt-4">
            <li><Link to="/" className="hover:text-[#FF9800]">Home</Link></li>
            <li><Link to="/recipes" className="hover:text-[#FF9800]">Recipes</Link></li>
            <li><Link to="/meal-planner" className="hover:text-[#FF9800]">Meal Planner</Link></li>
          </ul>
        </div>

        {/* Explore */}
        <div className="flex flex-col items-center md:items-start">
          <h3 className="text-lg font-bold mb-4">Explore</h3>
          <ul className="space-y-2">
            <li><Link to="/dashboard" className="hover:text-[#FF9800]">Dashboard</Link></li>
            <li><Link to="/categories" className="hover:text-[#FF9800]">Categories</Link></li>
            <li><Link to="/cuisines" className="hover:text-[#FF9800]">Cuisines</Link></li>
            <li><Link to="/my-cookbook" className="hover:text-[#FF9800]">My Cookbook</Link></li>
            <li><Link to="/login" className="hover:text-[#FF9800]">Login</Link></li>
          </ul>
        </div>

        {/* Contact */}
        <div className="flex flex-col items-center md:items-start">
          <h3 className="text-lg font-bold mb-4">Connect With Us</h3>

          <div className="flex gap-4 mb-3">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#FF9800]">
              <FaFacebook size={24} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#FF9800]">
              <FaXTwitter size={24} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#FF9800]">
              <FaInstagram size={24} />
            </a>
          </div>

          <a
            href="mailto:support@tastetrail.com"
            className="flex items-center hover:text-[#FF9800]"
          >
            <Mail size={18} className="mr-2" /> support@tastetrail.com
          </a>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-green-300/30 mt-8 pt-4 text-center text-sm">
        <p>© {currentYear} TasteTrail. All Rights Reserved.</p>
        <p className="mt-2">
          <Link to="/privacy-policy" className="hover:text-[#FF9800] mr-3">
            Privacy Policy
          </Link>
          <Link to="/terms-of-service" className="hover:text-[#FF9800]">
            Terms of Service
          </Link>
        </p>
      </div>
    </footer>
  );
};

export default Footer;