export default function WhyChooseUsSection() {
  return (
    <section className="py-16 md:py-20 ">
      <div className="px-6 md:px-12 lg:px-20 max-w-7xl mx-auto">
        {/* Heading - Centered at top */}
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 text-center mb-12">
          Warum benötigen Sie unsere Dienstleistungen?
        </h2>

        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          {/* Left - YouTube Video */}
          <div className="w-full lg:w-1/2">
            <div
              className="relative w-full"
              style={{ paddingBottom: "56.25%" }}
            >
              <iframe
                className="absolute top-0 left-0 w-full h-full rounded-lg shadow-lg"
                src="https://www.youtube.com/embed/fogCWhR0bLE?si=qkBDjhmL6QSbHcTj"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            </div>
          </div>

          {/* Right - Grid of cards */}
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-end ">
            <div className="flex flex-col gap-4 w-full max-w-md">
              {/* Row 1 */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-[#52C8C4] hover:bg-[#45B5B1] transition-colors rounded-2xl px-6 py-5 text-center shadow-md">
                  <span className="text-gray-900 font-bold text-base md:text-lg">
                    Schnell
                  </span>
                </div>
                <div className="bg-[#009CA5] hover:bg-[#008A92] transition-colors rounded-2xl px-6 py-5 text-center shadow-md">
                  <span className="text-gray-900 font-bold text-base md:text-lg">
                    Erhalten
                  </span>
                </div>
              </div>

              {/* Row 2 - Offset to the left */}
              <div className="grid grid-cols-2 gap-4 lg:-ml-8 lg:mr-6">
                <div className="bg-[#009CA5] hover:bg-[#008A92] transition-colors rounded-2xl px-6 py-5 text-center shadow-md">
                  <span className="text-gray-900 font-bold text-base md:text-lg">
                    Unterstütze
                  </span>
                </div>
                <div className="bg-[#52C8C4] hover:bg-[#45B5B1] transition-colors rounded-2xl px-6 py-5 text-center shadow-md">
                  <span className="text-gray-900 font-bold text-base md:text-lg">
                    Überwachen
                  </span>
                </div>
              </div>

              {/* Row 3 */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-[#52C8C4] hover:bg-[#45B5B1] transition-colors rounded-2xl px-6 py-5 text-center shadow-md">
                  <span className="text-gray-900 font-bold text-base md:text-lg">
                    Verbessern
                  </span>
                </div>
                <div className="bg-[#009CA5] hover:bg-[#008A92] transition-colors rounded-2xl px-6 py-5 text-center shadow-md">
                  <span className="text-gray-900 font-bold text-base md:text-lg">
                    Schützen
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
