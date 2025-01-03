import React from "react";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Top Section */}
        <div className="text-center">
          <h1 className="text-3xl font-bold text-yellow-500">
            Flavor Haven by <span className="text-red-500">Arisha</span>
          </h1>
          <p className="mt-4 text-lg">
            Serving love and flavor on every plate. Follow us for the latest
            updates!
          </p>
        </div>

        {/* Social Links */}
        <div className="mt-6 flex justify-center space-x-6">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-yellow-500 hover:text-red-500 text-2xl"
            aria-label="Facebook"
          >
            <FaFacebook />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-yellow-500 hover:text-red-500 text-2xl"
            aria-label="Instagram"
          >
            <FaInstagram />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-yellow-500 hover:text-red-500 text-2xl"
            aria-label="Twitter"
          >
            <FaTwitter />
          </a>
          <a
            href="https://youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-yellow-500 hover:text-red-500 text-2xl"
            aria-label="YouTube"
          >
            <FaYoutube />
          </a>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 border-t border-gray-700 pt-4 text-center">
          <p className="text-sm">
            &copy; {new Date().getFullYear()}{" "}
            <span className="text-yellow-500">Flavor Haven</span>. All Rights
            Reserved.
          </p>
          <p className="text-sm mt-2">
            Designed with ❤️ by{" "}
            <span className="text-red-500 font-semibold">Arisha</span>.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
