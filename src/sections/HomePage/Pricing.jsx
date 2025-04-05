import Section from "src/components/ui/Section";
import PricingCards from "src/components/HomePage/Pricing/PricingCards";
export default function Pricing() {
  return (
    <Section title="Pricing Plan" className="md:pb-[120px]" bgColor="bg-second">
      <PricingCards />
    </Section>
  );
}
