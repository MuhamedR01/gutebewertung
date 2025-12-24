"use client";

import Image from "next/image";

export default function WebsiteTeam() {
  return (
    <section className="py-16 md:py-20">
      <div className="px-6 md:px-12 lg:px-20 max-w-7xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-semibold text-[#0b98a0] text-center mb-12">
          Team
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          {/* Card 1 */}
          <div className="flex justify-center lg:justify-start">
            <div className="relative max-w-xl w-full">
              <div className="rounded-xl overflow-hidden">
                <Image
                  src="/teamwork.png"
                  alt="Team Work"
                  width={900}
                  height={600}
                  className="w-full h-auto object-cover block rounded-xl"
                  priority
                />
              </div>

              <div className="lg:absolute left-0 lg:left-6 lg:-bottom-8 bg-white rounded-lg p-6 shadow-lg max-w-sm mt-6 lg:mt-0">
                <p className="text-gray-800 leading-snug">
                  Unser Team vereint Designer, Entwickler und Strategen, die
                  leidenschaftlich Websites erstellen, die Wirkung zeigen.
                </p>
                <a className="text-[#1BA9B8] font-medium mt-3 inline-block">
                  Teamarbeit
                </a>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative max-w-xl w-full">
              <div className="rounded-xl overflow-hidden">
                <Image
                  src="/succes.png"
                  alt="Success"
                  width={900}
                  height={600}
                  className="w-full h-auto object-cover block rounded-xl"
                  priority
                />
              </div>

              <div className="lg:absolute right-0 lg:right-6 lg:-bottom-8 bg-white rounded-lg p-6 shadow-lg max-w-sm text-left mt-6 lg:mt-0">
                <p className="text-gray-800 leading-snug">
                  Zusammenarbeit und Innovation stehen im Mittelpunkt unseres
                  Handelns. Gemeinsam liefern wir Lösungen, die Ihr Geschäft
                  online voranbringen.
                </p>
                <a className="text-[#1BA9B8] font-medium mt-3 inline-block">
                  Erfolg
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
