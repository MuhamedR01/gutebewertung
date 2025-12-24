"use client";

import Image from "next/image";

export default function WebsiteHero() {
  const scrollToContact = (e?: React.MouseEvent) => {
    if (e) e.preventDefault();
    const contact = document.getElementById("contact");
    if (contact) {
      contact.scrollIntoView({ behavior: "smooth", block: "start" });
    } else {
      // if not on the same page, navigate to the website page with anchor
      window.location.href = "/website#contact";
    }
  };

  return (
    <section className="py-12 md:py-16">
      <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-between px-6 md:px-12 lg:px-20 gap-12 max-w-7xl mx-auto">
        {/* Left - Text */}
        <div className="flex-1 space-y-4 lg:space-y-6 text-center lg:text-left max-w-xl mx-auto lg:mx-0">
          <p className="text-sm text-[#1BA9B8] font-semibold uppercase tracking-wider">
            Webdesign & Entwicklung
          </p>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-snug">
            Ideen in
            <span className="block text-transparent bg-clip-text bg-linear-to-r from-[#0fb5b8] to-[#0b98a0]">
              Websites verwandeln
            </span>
          </h1>

          <p className="text-base md:text-lg text-gray-700 max-w-lg mx-auto lg:mx-0 leading-relaxed">
            Als Full‑Service‑Webagentur verwandeln wir komplexe Ideen in
            intuitive, leistungsstarke Websites, die Besucher begeistern und
            Conversions steigern.
          </p>

          <div className="flex items-center gap-4 justify-center lg:justify-start">
            <button
              onClick={scrollToContact}
              className="bg-[#1BA9B8] text-white px-6 py-3 rounded-md hover:bg-[#158A96] transition-colors text-lg font-medium shadow-md"
            >
              Kontakt
            </button>
          </div>
        </div>

        {/* Right - Illustration */}
        <div className="flex-1 w-full max-w-xl mx-auto">
          <div className="w-full rounded-xl overflow-hidden">
            <Image
              src="/websitehero.png"
              alt="Website Illustration"
              width={1200}
              height={700}
              className="w-full h-auto object-cover block"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
