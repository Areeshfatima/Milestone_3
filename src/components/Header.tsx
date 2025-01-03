import React from "react";
import Link from "next/link";
import {
  FaHamburger,
  FaSearch,
  FaUser,
  FaShoppingCart,
  FaTags,
} from "react-icons/fa";

const Header = () => {
  return (
    <header className="bg-red-600 text-white">
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        <div className="flex items-center space-x-2">
          <FaHamburger className="text-yellow-400 text-2xl" />
          <span className="text-3xl font-bold">Flavor Haven</span>
        </div>

        {/* Search Bar */}
        <div className="flex items-center bg-white rounded-full px-4 py-2 w-full max-w-md hidden sm:flex">
          <input
            type="text"
            placeholder="Search for delicious food..."
            className="flex-grow focus:outline-none text-gray-700 px-2"
          />
          <FaSearch className="text-gray-500" />
        </div>

        {/* Cart Icon */}
        <div className="flex items-center space-x-4">
          <Link
            href="/cart"
            className="flex items-center space-x-2 bg-yellow-400 text-red-600 px-4 py-2 rounded-full hover:bg-yellow-500"
          >
            <FaShoppingCart />
            <span>Cart</span>
          </Link>
        </div>
      </div>

      {/* Navbar */}
      <nav className="bg-red-700">
        <div className="container mx-auto flex flex-wrap items-center justify-between py-3 px-6">
          {/* Mobile Menu Icon */}
          <div className="sm:hidden">
            <button className="text-white">
              <FaHamburger />
            </button>
          </div>

          {/* Navbar Links */}
          <ul className="flex flex-wrap space-x-8 text-sm font-medium w-full justify-center sm:justify-start">
            <li>
              <Link
                href="/categories"
                className="flex items-center space-x-2 hover:text-yellow-400"
              >
                <FaTags />
                <span>Discover Our Categories</span>
              </Link>
            </li>
            <li>
              <Link href="/" className="hover:text-yellow-400">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-yellow-400">
                About
              </Link>
            </li>
            <li>
              <Link href="/product" className="hover:text-yellow-400">
                Products
              </Link>
            </li>
            <li>
              <Link href="/deal" className="hover:text-yellow-400">
                Today's Deal
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
