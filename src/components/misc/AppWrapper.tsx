"use client"; // This makes the component a client component

import { usePathname } from "next/navigation"; // Import the hook to get the current pathname
import Navbar from "@/components/navigation/Navbar";
import Footer from "@/components/navigation/Footer";

export default function AppWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname(); // Get the current pathname

  // List of routes where you don't want the Navbar and Footer to appear
  const applicationNavigationRestrictor = ["/application"];

  const isRestricted = applicationNavigationRestrictor.includes(pathname);

  return (
    <>
      {/* Conditionally render Navbar and Footer based on the current path */}
      {!isRestricted && <Navbar />}

      {/* Animate transitions between different pages */}
      <main
        key={pathname} // key based on pathname for triggering animation on route change
        className={`${!isRestricted ? "pt-[3%]" : ""}`}
      >
        {children}
      </main>

      {!isRestricted && <Footer />}
    </>
  );
}
