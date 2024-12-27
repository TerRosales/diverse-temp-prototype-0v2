"use client";
// components/Navbar.tsx
import { useState, useEffect } from "react";
import Link from "next/link";
import { FaBars } from "react-icons/fa";
import "@/styles/elementStyles/styles.css";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);

  useEffect(() => {
    setIsScrolled(window.scrollY > 10); // Check initial scroll position

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-10 transition-all duration-300 h-[10vh] ${
        isScrolled ? "bg-transparent text-pink-400" : "bg-white shadow-md"
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center h-16 text-lg">
        {/* Logo */}
        <div className="text-2xl font-bold mt-6">
          <Link href="/">Logo</Link>
        </div>

        {/* Desktop Links */}
        <div className="hidden mt-[4%] md:flex space-x-6 items-center">
          <Link href="/" className="hover:text-gray-700">
            Home
          </Link>

          {/* About */}
          <Link
            href="/company/statements"
            className="hover:text-gray-700"
            onClick={() => setIsOpen(false)}
          >
            About
          </Link>

          {/* More of Us Dropdown */}
          <div className="relative group">
            <button className="hover:text-gray-700">More of Us</button>
            <div className="absolute left-0 w-40 bg-white shadow-lg rounded-md opacity-0 group-hover:opacity-100 transition-opacity">
              <Link
                href="/company/partners"
                className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
              >
                Partners
              </Link>
              <Link
                href="/company/testimonials"
                className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
              >
                Testimonials
              </Link>
            </div>
          </div>

          {/* Apply Button */}
          <Link href="/apply" className="custom-btn btn-main">
            Apply
          </Link>
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden mt-[10%]">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-700 focus:outline-none"
          >
            <FaBars
              size={24}
              className={`${isScrolled ? "text-pink-400" : "text-gray-700"}`}
            />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white justify-end text-right pr-4 pt-4">
          <Link
            href="/"
            className="block py-2 px-4 text-gray-700 hover:bg-gray-100"
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>
          <Link
            href="/company/statements"
            className="block py-2 px-4 text-gray-700 hover:bg-gray-100"
            onClick={() => setIsOpen(false)}
          >
            About
          </Link>

          {/* About Dropdown in Mobile Alternative
          <div className="relative">
            <button
              onClick={() => setAboutOpen(!aboutOpen)}
              className="block w-full text-right py-2 px-4 text-gray-700 hover:bg-gray-100"
            >
              About
            </button>
            {aboutOpen && (
              <div className="mr-4">
                <Link
                  href="/company/statements?tab=missions"
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100 text-right"
                  onClick={() => setIsOpen(false)} // Close menu on click
                >
                  Our Mission
                </Link>
                <Link
                  href="/company/statements?tab=goals"
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100 text-right"
                  onClick={() => setIsOpen(false)} // Close menu on click
                >
                  Our Goals
                </Link>
              </div>
            )}
          </div> */}

          {/* More of Us Dropdown in Mobile */}
          <div className="relative">
            <button
              onClick={() => setMoreOpen(!moreOpen)}
              className="block w-full text-right py-2 px-4 text-gray-700 hover:bg-gray-100"
            >
              More of Us
            </button>
            {moreOpen && (
              <div className="mr-4">
                <Link
                  href="/company/partners"
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100 text-right"
                  onClick={() => setIsOpen(false)} // Close menu on click
                >
                  Partners
                </Link>
                <Link
                  href="/company/testimonials"
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100 text-right"
                  onClick={() => setIsOpen(false)} // Close menu on click
                >
                  Testimonials
                </Link>
              </div>
            )}
          </div>

          {/* Apply Button for Mobile */}
          <Link
            href="/apply"
            className="custom-btn btn-main m-4 text-center"
            onClick={() => setIsOpen(false)}
          >
            Apply
          </Link>
        </div>
      )}
    </nav>
  );
}
