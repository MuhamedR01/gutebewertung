import React from "react";
import Image from "next/image";

function PhoneIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-6 h-6 text-white"
    >
      <path
        d="M22 16.92v3a2 2 0 0 1-2.18 2 19.86 19.86 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.86 19.86 0 0 1 3.08 4.18 2 2 0 0 1 5 2h3a2 2 0 0 1 2 1.72c.12.9.37 1.78.75 2.6a2 2 0 0 1-.45 2.11L9.91 9.91a16 16 0 0 0 6 6l1.48-1.48a2 2 0 0 1 2.11-.45c.82.38 1.7.63 2.6.75A2 2 0 0 1 22 16.92z"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

// email icon will use public/mail.svg via next/image

function ClockIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-6 h-6 text-white"
    >
      <circle cx="12" cy="12" r="9" stroke="white" strokeWidth="2" />
      <path
        d="M12 7v6l4 2"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function HomeIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-6 h-6 text-white"
    >
      <path
        d="M3 11.5L12 4l9 7.5"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5 21V12h14v9"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function ContactCards() {
  return (
    <section className="max-w-6xl mx-auto py-12 px-4">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-semibold text-gray-800">
          Kontaktieren Sie uns!
        </h2>
        <p className="text-gray-600 mt-2">
          Wir sind für Sie da und beantworten gerne Ihre Fragen
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        <div className="bg-white/5 border border-white rounded-lg p-6 text-center">
          <div className="w-14 h-14 rounded-full bg-yellow-400 flex items-center justify-center mx-auto mb-4">
            <PhoneIcon />
          </div>
          <h3 className="text-base text-gray-800 font-medium mb-1">Telefon</h3>
          <p className="text-base text-gray-800 font-medium">
            +49 71 125253282
          </p>
        </div>

        <div className="bg-white/5 border border-white rounded-lg p-6 text-center">
          <div className="w-14 h-14 rounded-full bg-yellow-400 flex items-center justify-center mx-auto mb-4">
            <Image
              src="/mail.svg"
              alt="Email"
              width={28}
              height={28}
              className="w-6 h-6"
            />
          </div>
          <h3 className="text-base text-gray-800 font-medium mb-1">Email</h3>
          <p className="text-base text-gray-800 font-medium">
            info@gutbewertung.com
          </p>
        </div>

        <div className="bg-white/5 border border-white rounded-lg p-6 text-center">
          <div className="w-14 h-14 rounded-full bg-yellow-400 flex items-center justify-center mx-auto mb-4">
            <ClockIcon />
          </div>
          <h3 className="text-base text-gray-800 font-medium mb-1">
            Öffnungszeiten
          </h3>
          <p className="text-base text-gray-800 font-medium">
            Mo–Fr: 9:00 - 17:00 UHR
            <br />
            Sa–So: Geschlossen
          </p>
        </div>

        <div className="bg-white/5 border border-white rounded-lg p-6 text-center">
          <div className="w-14 h-14 rounded-full bg-yellow-400 flex items-center justify-center mx-auto mb-4">
            <HomeIcon />
          </div>
          <h3 className="text-base text-gray-800 font-medium mb-1">Adresse</h3>
          <p className="text-base text-gray-800 font-medium">
            Charlottenstraße 14 70182
            <br />
            Stuttgart, Deutschland
          </p>
        </div>
      </div>
    </section>
  );
}
