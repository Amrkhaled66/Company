import ContentPage from "src/components/ui/ContentPage";
import Section from "src/components/ui/Section";

import ourservices from "src/assets/ourservices.webp";

import TopServices from "src/sections/Services/TopServices";
import BottomServices from "src/sections/Services/BottomServices";
import CTA from "src/sections/HomePage/CTA";
export default function OurServices() {
  return (
    <ContentPage title="Our Services" img={ourservices}>
      <Section title="Our working process on how to grow your business">
        <TopServices />
      </Section>
      <Section
        bgColor="bg-second"
        title="Our working process on how to grow your business"
      >
        <BottomServices />
      </Section>
      <CTA/>
    </ContentPage>
  );
}
