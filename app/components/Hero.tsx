"use client";

import Image from "next/image";

export default function Hero() {
  const scrollToContact = (e?: React.MouseEvent) => {
    if (e) e.preventDefault();
    const contact = document.getElementById("contact");
    if (contact) contact.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section className="py-12 md:py-16">
      <div className="flex flex-col lg:flex-row items-center justify-between px-6 md:px-12 lg:px-20 gap-12 lg:gap-16 max-w-7xl mx-auto">
        {/* Left Content */}
        <div className="flex-1 space-y-6 lg:space-y-8">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
            Google Bewertung löschen lassen
          </h1>
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
            Bundesweite Hilfe! Wir schützen Ihren guten Ruf!
          </p>
          <button
            onClick={scrollToContact}
            className="bg-[#1BA9B8] text-white px-8 py-3 rounded-md hover:bg-[#158A96] transition-colors text-lg font-medium"
          >
            Jetzt Kontakt aufnehmen
          </button>
        </div>

        {/* Right Image */}
        <div className="flex-1 w-full max-w-xl">
          <Image
            src="/hero.png"
            alt="Google Bewertungen Illustration"
            width={600}
            height={500}
            priority
            className="w-full h-auto"
          />
        </div>
      </div>
    </section>
  );
}
