import Link from "next/link";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
      <div className="container mx-auto p-6">
        <h1 className="text-3xl font-bold text-center text-gray-800 dark:text-gray-200 mb-8">
          Contact Us
        </h1>

        {/* Contact Form */}
        <form className="max-w-xl mx-auto bg-white p-8 rounded-lg shadow-lg dark:bg-gray-800 dark:shadow-gray-700">
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-gray-700 dark:text-gray-200 text-sm font-semibold mb-2"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-900 dark:text-gray-100 dark:border-gray-700"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-gray-700 dark:text-gray-200 text-sm font-semibold mb-2"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-900 dark:text-gray-100 dark:border-gray-700"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="message"
              className="block text-gray-700 dark:text-gray-200 text-sm font-semibold mb-2"
            >
              Message
            </label>
            <textarea
              id="message"
              rows={6}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-900 dark:text-gray-100 dark:border-gray-700"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full p-3 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Send Message
          </button>
        </form>

        {/* Social Media Links */}
        <div className="flex justify-center gap-6 mt-8">
          <Link target="_blank" href="https://facebook.com">
            <span className="text-2xl text-gray-800 hover:text-blue-600 dark:text-gray-200 dark:hover:text-blue-400">
              <FaFacebook />
            </span>
          </Link>
          <Link target="_blank" href="https://twitter.com">
            <span className="text-2xl text-gray-800 hover:text-blue-400 dark:text-gray-200 dark:hover:text-blue-400">
              <FaTwitter />
            </span>
          </Link>
          <Link target="_blank" href="https://instagram.com">
            <span className="text-2xl text-gray-800 hover:text-pink-600 dark:text-gray-200 dark:hover:text-pink-400">
              <FaInstagram />
            </span>
          </Link>
          <Link target="_blank" href="https://linkedin.com">
            <span className="text-2xl text-gray-800 hover:text-blue-700 dark:text-gray-200 dark:hover:text-blue-500">
              <FaLinkedin />
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Contact;
