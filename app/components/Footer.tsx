import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="pt-12 md:pt-16 pb-6">
      <div className="px-6 md:px-12 lg:px-20 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Left - Logo + description */}
          <div>
            <div className="flex items-center gap-3">
              <Image
                src="/logo.png"
                alt="Gutbewertung"
                width={160}
                height={36}
                className="object-contain"
              />
            </div>
            <p className="text-sm text-gray-700 mt-3 max-w-sm">
              Professionelle Entfernung rechtswidriger Online-Bewertungen. Keine
              Vorkasse, Zahlung nur bei Erfolg.
            </p>
          </div>

          {/* Middle - Services */}
          <div>
            <h4 className="font-medium mb-3">Services</h4>
            <ul className="text-sm text-gray-700 space-y-2">
              <li>
                <Link href="/" className="hover:underline">
                  Google Bewertungen
                </Link>
              </li>
              <li>
                <Link href="/website" className="hover:underline">
                  Web Studio
                </Link>
              </li>
            </ul>
          </div>

          {/* Right - Legal */}
          <div>
            <h4 className="font-medium mb-3">Rechtliches</h4>
            <ul className="text-sm text-gray-700 space-y-2">
              <li>
                <Link href="/impressum" className="hover:underline">
                  Impressum
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar removed — will be added as a full-width separate component */}
    </footer>
  );
}
