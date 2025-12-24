"use client";

import Image from "next/image";

export default function WebsiteServices() {
  const services = [
    {
      key: "dev",
      text: "Von responsiven Layouts bis zu flexiblen Web‑Apps sorgt unsere Entwicklung für Performance und Zuverlässigkeit.",
    },
    {
      key: "design",
      text: "Wir erstellen moderne, benutzerfreundliche Websites, die Ihre Marke widerspiegeln und Ihr Publikum ansprechen.",
    },
    {
      key: "groth",
      text: "Wir bauen nicht nur Websites – wir helfen Ihrer Marke online zu wachsen mit fortlaufender Betreuung und Strategie.",
    },
    {
      key: "creative",
      text: "Unser Team kombiniert Kreativität und Technik, um Websites zu erstellen, die aus der Masse herausstechen.",
    },
  ];

  return (
    <section className="py-16 md:py-20">
      <div className="px-6 md:px-12 lg:px-20 max-w-7xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-semibold text-[#0b98a0] mb-8">
          Services
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-12 gap-x-8 items-center">
          {services.map((s) => (
            <div key={s.key} className="flex items-center gap-6 px-4 lg:px-8">
              <div className="w-20 h-20 flex items-center justify-center">
                <Image
                  src={`/${s.key}.svg`}
                  alt={s.key}
                  width={80}
                  height={80}
                  className="w-12 h-12 md:w-14 md:h-14"
                  priority
                />
              </div>

              <div className="flex-1">
                <p className="text-gray-800 max-w-xl mx-auto md:mx-0 text-left leading-snug">
                  {s.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
