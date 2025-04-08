import ContentPage from "src/components/ui/ContentPage";

import IntroSection from "src/sections/AboutUs/IntroSection";
import Team from "src/sections/HomePage/Team";
import ContactForm from "src/sections/Contact/ContactForm";
import CTA from "src/sections/HomePage/CTA";
import Features from "src/sections/AboutUs/Features";
import Banner from "src/sections/AboutUs/Banner";

import about from "src/assets/about.webp";

export default function AboutUs() {
  return (
    <ContentPage img={about} title="AboutUs">
      <IntroSection />
      <Features />
      <Banner />
      <Team />
      <ContactForm formColor="bg-white" bgColor="bg-second" />
      <CTA />
    </ContentPage>
  );
}
