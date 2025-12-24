import WebsiteHero from "../components/WebsiteHero";
import WebsiteWhyChoose from "../components/WebsiteWhyChoose";
import WebsiteServices from "../components/WebsiteServices";
import WebsiteTeam from "../components/WebsiteTeam";
import ContactSection from "../components/ContactSection";

export default function WebsitePage() {
  return (
    <main>
      <WebsiteHero />
      <WebsiteWhyChoose />
      <WebsiteServices />
      <WebsiteTeam />
      <ContactSection />
    </main>
  );
}
