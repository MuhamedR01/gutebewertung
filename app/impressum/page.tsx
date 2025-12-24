
export default function ImpressumPage() {
  return (
    <div className="min-h-screen py-16 md:py-20 ">
      <div className="px-6 md:px-12 lg:px-20 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
          Impressum
        </h1>
        
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">
          Angaben gemäß § 5 TMG:
        </h2>
        
        <div className="space-y-8 text-gray-700">
          {/* Contact Information */}
          <div>
            <p className="text-lg mb-4">info@gutbewertung.com</p>
            <p className="text-sm leading-relaxed">
              Adresse: Charlottenstraße 14<br />
              70182<br />
              Stuttgart, Deutschland<br />
              Telefon: +4971125253282<br />
              E-Mail: info@gutbewertung.com
            </p>
          </div>

          {/* Handelsregistereintrag */}
          <div>
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Handelsregistereintrag
            </h3>
            <div className="text-sm leading-relaxed space-y-4">
              <p>
                Rechtsform: Limited Liability Company (L.L.C.)<br />
                Sitz: Stuttgart, Deutschland<br />
                Registergericht: Amtsgericht Ulm
              </p>
              
              <p>
                Stammkapital: 50.000 EUR<br />
                Gegenstand des Unternehmens: Bereitstellung von Bewertungs- und Kundenfeedback-Dienstleistungen für Unternehmen, insbesondere digitale Bewertungsplattformen zur Steigerung der Online-Reputation. Beratung im Bereich Kundenmanagement und Online-Marketingstrategien.
              </p>
              
              <p>
                Gründungsdatum: 5. Mai 2020<br />
                Eintragungsdatum im Handelsregister: 10. Mai 2020
              </p>
              
              <p>
                Bemerkungen: Die Gesellschaft wurde durch den Gesellschaftsvertrag vom 1. April 2020 gegründet.
              </p>
            </div>
          </div>

          {/* Verantwortlich für den Inhalt */}
          <div>
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV:
            </h3>
            <p className="text-sm leading-relaxed">
              Adresse: Charlottenstraße 14<br />
              70182 Stuttgart, Deutschland
            </p>
          </div>

          {/* Haftungsausschluss (Disclaimer) */}
          <div>
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Haftungsausschluss (Disclaimer):
            </h3>
            
            {/* Haftung für Inhalte */}
            <div className="mb-6">
              <h4 className="text-xl font-bold text-gray-900 mb-3">
                Haftung für Inhalte
              </h4>
              <div className="text-sm leading-relaxed space-y-3">
                <p>
                  Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
                </p>
                <p>
                  Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.
                </p>
              </div>
            </div>

            {/* Haftung für Links */}
            <div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">
                Haftung für Links
              </h4>
              <div className="text-sm leading-relaxed space-y-3">
                <p>
                  Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar.
                </p>
                <p>
                  Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen.
                </p>
              </div>
            </div>
          </div>

          {/* Urheberrecht */}
          <div>
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Urheberrecht
            </h3>
            <div className="text-sm leading-relaxed space-y-3">
              <p>
                Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
              </p>
              <p>
                Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet. Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
