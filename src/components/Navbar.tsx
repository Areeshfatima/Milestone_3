import Link from "next/link";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ModeToggle } from "./Theme-btn";

const Navbar = () => {
  return (
    <nav className="bg-gray-100 dark:bg-gray-800 sticky top-0 border-b border-gray-300 dark:border-gray-700 p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-gray-900 dark:text-gray-100 text-3xl font-bold">
          <Link href="/">Areesha's Blog</Link>
        </div>

        {/* Navbar items */}
        <div className="hidden md:flex space-x-4 items-center">
          <Link
            href="/"
            className="text-gray-900 dark:text-gray-100 hover:text-gray-600 dark:hover:text-gray-400"
          >
            Home
          </Link>
          <Link
            href="/about"
            className="text-gray-900 dark:text-gray-100 hover:text-gray-600 dark:hover:text-gray-400"
          >
            About
          </Link>
          <Link
            href="/blogs"
            className="text-gray-900 dark:text-gray-100 hover:text-gray-600 dark:hover:text-gray-400"
          >
            Blog
          </Link>
          <Link
            href="/contact"
            className="text-gray-900 dark:text-gray-100 hover:text-gray-600 dark:hover:text-gray-400"
          >
            Contact
          </Link>
          <ModeToggle />
        </div>

        {/* Mobile menu toggle */}
        <div className="md:hidden flex items-center">
          <Sheet>
            <SheetTrigger>
              <div
                className="text-gray-900 dark:text-gray-100"
                aria-label="Open Menu"
              >
                <svg
                  className="w-6 h-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </div>
            </SheetTrigger>
            <ModeToggle />
            <SheetContent className="bg-gray-100 dark:bg-gray-800">
              <SheetHeader>
                <SheetTitle className="text-gray-900 dark:text-gray-100 text-2xl">
                  Areesha's Blog
                </SheetTitle>
                <SheetDescription>
                  <div className="flex flex-col gap-4">
                    <Link
                      href="/"
                      className="text-gray-900 dark:text-gray-100 hover:text-gray-600 dark:hover:text-gray-400"
                    >
                      Home
                    </Link>
                    <Link
                      href="/about"
                      className="text-gray-900 dark:text-gray-100 hover:text-gray-600 dark:hover:text-gray-400"
                    >
                      About
                    </Link>
                    <Link
                      href="/blogs"
                      className="text-gray-900 dark:text-gray-100 hover:text-gray-600 dark:hover:text-gray-400"
                    >
                      Blog
                    </Link>
                    <Link
                      href="/contact"
                      className="text-gray-900 dark:text-gray-100 hover:text-gray-600 dark:hover:text-gray-400"
                    >
                      Contact
                    </Link>
                  </div>
                </SheetDescription>
              </SheetHeader>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
