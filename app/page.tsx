import Hero from "./components/Hero";
import ReviewsSection from "./components/ReviewsSection";
import WhyChooseUsSection from "./components/WhyChooseUsSection";
import ContactSection from "./components/ContactSection";
import ContactCards from "./components/ContactCards";

export default function Home() {
  return (
    <main>
      <Hero />
      <ReviewsSection />
      <WhyChooseUsSection />
      <ContactSection />
      <ContactCards />
    </main>
  );
}
