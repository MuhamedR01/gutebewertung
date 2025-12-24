
import Image from "next/image";

export default function ReviewsSection() {
  return (
    <section className="py-16 md:py-20">
      <div className="flex flex-col lg:flex-row items-stretch px-6 md:px-12 lg:px-20 gap-8 lg:gap-12 max-w-7xl mx-auto">
        {/* Left - Image */}
        <div className="w-full lg:w-[55%] flex items-center">
          <Image
            src="/hero2.png"
            alt="Google Bewertungen Illustration"
            width={1200}
            height={800}
            className="w-full h-auto"
            priority
          />
        </div>

        {/* Right - Content */}
        <div className="w-full lg:w-[45%] flex flex-col justify-between py-4">
          <div className="space-y-4">
            {/* Small heading */}
            <p className="text-[#1BA9B8] font-medium text-xs md:text-sm">
              So kann man negative Google Bewertungen löschen
            </p>

            {/* Main heading */}
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight">
              Google Bewertungen löschen lassen - So geht's
            </h2>

            {/* Description */}
            <div className="text-gray-600 text-sm md:text-base leading-relaxed">
              <p>
                Hier erfahren Sie, wie man schlechte Google Bewertungen löschen und Google Rezensionen entfernen kann. Bewahren Sie Ruhe nach einer negativen Bewertung und rufen Sie uns an. Mit der richtigen Hilfe kann man geschäftsschädigende Bewertungen Google schnell wieder loswerden. Wir zeigen Ihnen, wie das geht und was Sie tun müssen.
              </p>
            </div>
          </div>

          {/* Checkmark list */}
          <div className="space-y-3 mt-6">
            <div className="flex items-start gap-3">
              <div className="flex-shrink-0 w-5 h-5 rounded-full bg-[#1BA9B8] flex items-center justify-center mt-0.5">
                <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <p className="text-gray-900 font-medium text-sm md:text-base">
                Gute Bewertungen stärken das Kundenvertrauen.
              </p>
            </div>

            <div className="flex items-start gap-3">
              <div className="flex-shrink-0 w-5 h-5 rounded-full bg-[#1BA9B8] flex items-center justify-center mt-0.5">
                <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <p className="text-gray-900 font-medium text-sm md:text-base">
                Sie erhöhen die Sichtbarkeit in Suchergebnissen.
              </p>
            </div>

            <div className="flex items-start gap-3">
              <div className="flex-shrink-0 w-5 h-5 rounded-full bg-[#1BA9B8] flex items-center justify-center mt-0.5">
                <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <p className="text-gray-900 font-medium text-sm md:text-base">
                Sie signalisieren hohe Kundenzufriedenheit.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
