"use client";

import Image from "next/image";
import { FormEvent, useState } from "react";

export default function ContactSection() {
  const [status, setStatus] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus(null);

    const formEl = e.currentTarget as HTMLFormElement;
    const form = new FormData(formEl);
    const payload = {
      access_key: "ead38d8c-a9ef-4469-b85f-5ee4e83e2501", // replace with your key
      name: form.get("name"),
      email: form.get("email"),
      phone: form.get("phone"),
      message: form.get("message"),
    };

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(payload),
      });

      const json = await res.json();
      if (json.success) {
        setStatus("success");
        formEl.reset();
      } else {
        setStatus("error");
        console.error(json);
      }
    } catch (err) {
      setStatus("error");
      console.error(err);
    } finally {
      setIsSubmitting(false);
    }
  }
  return (
    <section id="contact" className="py-16 md:py-20">
      <div className="px-6 md:px-12 lg:px-20 max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
          {/* Left - Contact Information (header only) */}
          <div className="flex-1">
            <div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                Kontaktieren Sie uns für Unterstützung
              </h2>
              <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                Bitte füllen Sie das Formular aus und teilen Sie uns mit, wie
                wir Ihnen
                <br />
                helfen können. Ob Sie mehr Informationen zu unseren
                <br />
                Dienstleistungen benötigen, Unterstützung bei einem Anliegen
                <br />
                suchen oder Fragen haben wir sind für Sie da. Ein Mitglied
                <br />
                unseres
                <br />
                Teams wird sich schnellstmöglich bei Ihnen melden.
              </p>
            </div>
          </div>

          {/* Right - Contact Form */}
          <div className="flex-1">
            <div className=" rounded-2xl p-8">
              <h3 className="text-lg font-bold text-gray-900 mb-6">
                Bitte füllen Sie das Formular aus
              </h3>

              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Name and Email Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <input
                      name="name"
                      type="text"
                      placeholder="Name"
                      className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#1BA9B8] focus:border-transparent text-sm"
                    />
                  </div>
                  <div>
                    <input
                      name="email"
                      type="email"
                      placeholder="E-Mail-Adresse"
                      className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#1BA9B8] focus:border-transparent text-sm"
                    />
                  </div>
                </div>

                {/* Phone Number */}
                <div>
                  <input
                    name="phone"
                    type="tel"
                    placeholder="Telefonnummer"
                    className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#1BA9B8] focus:border-transparent text-sm"
                  />
                </div>

                {/* Message */}
                <div>
                  <textarea
                    name="message"
                    placeholder="Nachricht schreiben"
                    rows={6}
                    className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#1BA9B8] focus:border-transparent resize-none text-sm"
                  ></textarea>
                </div>

                {/* Submit Button */}
                <div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="bg-[#1BA9B8] hover:bg-[#158A96] text-white font-semibold px-8 py-3 rounded-lg transition-colors duration-200 shadow-md text-sm disabled:opacity-60"
                  >
                    {isSubmitting ? "Senden..." : "Nachricht senden"}
                  </button>
                </div>
                {status === "success" && (
                  <p className="text-green-600 text-sm">
                    Nachricht erfolgreich gesendet.
                  </p>
                )}
                {status === "error" && (
                  <p className="text-red-600 text-sm">
                    Fehler beim Senden. Bitte versuchen Sie es später.
                  </p>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
