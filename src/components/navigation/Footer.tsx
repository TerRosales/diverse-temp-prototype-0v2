import React from "react";
import Link from "next/link";

type Props = {};

const Footer = (props: Props) => {
  return (
    <footer className="bg-gray-900 text-gray-200 py-8 px-4">
      <div className="container mx-auto flex flex-col sm:flex-row pl-4">
        <div className="text-2xl font-bold mt-6 mb-10">
          <Link href="/">Logo</Link>
        </div>
        {/* Social Media Links */}
        <section className="container mx-auto flex flex-col sm:flex-row justify-end gap-6 md:gap-10">
          <div className="mb-6 md:mb-0">
            <h3 className="text-lg font-semibold mb-2">Follow Us</h3>
            <ul className="space-y-2">
              <li>
                <Link href="https://facebook.com">LinkedIn </Link>
              </li>
              <li>
                <Link href="https://facebook.com">Facebook </Link>
              </li>
              <li>
                <Link href="https://x.com">X </Link>
              </li>
              <li>
                <Link href="https://instagram.com">Instagram </Link>
              </li>
            </ul>
          </div>

          {/* Filler Links Set 1 */}
          <div className="mb-6 md:mb-0">
            <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#">About Us </Link>
              </li>
              <li>
                <Link href="#">Employers </Link>
              </li>
              <li>
                <Link href="#">Services </Link>
              </li>
            </ul>
          </div>

          {/* Filler Links Set 2 */}
          <div className="mb-6 md:mb-0">
            <h3 className="text-lg font-semibold mb-2">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#">Blog </Link>
              </li>
              <li>
                <Link href="#">Support</Link>
              </li>
              <li>
                <Link href="#">FAQ </Link>
              </li>
            </ul>
          </div>
        </section>
      </div>

      {/* Footer Bottom */}
      <div className="mt-8 border-t border-gray-700 pt-4 text-center">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Your Company Name. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
