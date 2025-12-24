"use client";

import Image from "next/image";

export default function WebsiteWhyChoose() {
  return (
    <section className="py-16 md:py-20">
      <div className="px-6 md:px-12 lg:px-20 max-w-7xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-semibold text-[#0b98a0] text-center mb-10">
          Warum uns wählen
        </h2>

        <div className="flex flex-col lg:flex-row items-center gap-8">
          {/* Left - Image */}
          <div className="flex-1">
            <div className="rounded-xl overflow-hidden shadow-md">
              <Image
                src="/whychoose.png"
                alt="Warum uns wählen"
                width={900}
                height={600}
                className="w-full h-auto object-cover block"
                priority
              />
            </div>
          </div>

          {/* Right - Bulleted list */}
          <div className="flex-1">
            <ul className="space-y-6">
              <li className="flex items-start gap-3">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#1BA9B8] flex items-center justify-center">
                  <svg
                    className="w-3 h-3"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M20 6L9 17l-5-5"
                      stroke="white"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <p className="text-gray-800 font-medium">
                  Wir halten Deadlines ein und sorgen für klare Kommunikation.
                </p>
              </li>

              <li className="flex items-start gap-3">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#1BA9B8] flex items-center justify-center">
                  <svg
                    className="w-3 h-3"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M20 6L9 17l-5-5"
                      stroke="white"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <p className="text-gray-800 font-medium">
                  Jede Website wird individuell für Ihr Unternehmen entwickelt.
                </p>
              </li>

              <li className="flex items-start gap-3">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#1BA9B8] flex items-center justify-center">
                  <svg
                    className="w-3 h-3"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M20 6L9 17l-5-5"
                      stroke="white"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <p className="text-gray-800 font-medium">
                  Schnell, responsiv und für alle Geräte optimiert.
                </p>
              </li>

              <li className="flex items-start gap-3">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#1BA9B8] flex items-center justify-center">
                  <svg
                    className="w-3 h-3"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M20 6L9 17l-5-5"
                      stroke="white"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <p className="text-gray-800 font-medium">
                  Sauberes UI/UX mit Fokus auf Ihre Zielgruppe.
                </p>
              </li>

              <li className="flex items-start gap-3">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#1BA9B8] flex items-center justify-center">
                  <svg
                    className="w-3 h-3"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M20 6L9 17l-5-5"
                      stroke="white"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <p className="text-gray-800 font-medium">
                  Wir begleiten Sie auch nach dem Launch bei Updates und
                  Wartung.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
