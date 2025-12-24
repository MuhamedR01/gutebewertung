import React from "react";

export default function WhatsAppButton() {
  // phone number for WhatsApp (digits only): +49 170 6146704 -> 491706146704
  const waNumber = "491706146704";
  const href = `https://wa.me/${waNumber}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      title="Chat or call on WhatsApp"
      className="fixed bottom-6 right-6 md:bottom-8 md:right-8 z-50 w-14 h-14 md:w-16 md:h-16 bg-[#25D366] rounded-full shadow-lg flex items-center justify-center hover:scale-105 transition-transform"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        className="w-7 h-7 text-white"
        fill="none"
      >
        <path
          d="M21 11.5a9.5 9.5 0 1 0-2.6 6.1L21 23l5.4-2.4A9.5 9.5 0 0 0 21 11.5z"
          fill="none"
        />
        <path
          d="M16.58 14.2c-.3-.15-1.76-.86-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.95 1.17-.17.2-.34.22-.63.07-.3-.15-1.27-.47-2.42-1.48-.9-.8-1.51-1.78-1.69-2.08-.17-.3-.02-.46.13-.61.13-.13.3-.34.45-.51.15-.17.2-.28.3-.47.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.48-.5-.66-.51-.17-.01-.37-.01-.57-.01-.2 0-.52.07-.8.37-.27.3-1.05 1.03-1.05 2.52 0 1.48 1.07 2.92 1.22 3.12.15.2 2.1 3.3 5.09 4.62 2.99 1.32 3.01.88 3.56.83.55-.05 1.76-.72 2.01-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35z"
          fill="white"
        />
      </svg>
    </a>
  );
}
