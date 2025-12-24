"use client";

import Image from "next/image";
import Link from "next/link";

export default function Header() {
  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <header className="flex items-center justify-between flex-wrap px-4 py-4 md:px-12 lg:px-20 max-w-7xl mx-auto">
      <Link href="/" className="flex items-center">
        <Image
          src="/logo.png"
          alt="gutbewertung Logo"
          width={200}
          height={50}
          priority
          className="h-8 sm:h-10 md:h-12 w-auto"
        />
      </Link>
      <nav className="hidden md:block">
        <p className="text-gray-700 text-sm lg:text-base">
          Alle negativen Bewertungen von Google entfernen
        </p>
      </nav>
      <div className="flex items-center gap-2 sm:gap-3">
        <Link
          href="/website"
          className="inline-flex items-center text-[#1BA9B8] border border-[#1BA9B8] px-2 py-1.5 sm:px-3 sm:py-2 rounded-md hover:bg-[#1BA9B8] hover:text-white transition-colors text-sm font-medium"
        >
          Webstudio
        </Link>

        <button
          onClick={scrollToContact}
          className="bg-[#1BA9B8] text-white px-3 py-1.5 sm:px-4 sm:py-2 rounded-md hover:bg-[#158A96] transition-colors text-sm sm:text-base font-medium"
        >
          Kontakt
        </button>
      </div>
    </header>
  );
}
