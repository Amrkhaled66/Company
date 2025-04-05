import ReviewsSlider from "src/components/HomePage/Reviews/ReviewsSlider";
import Section from "src/components/ui/Section";

export default function Reviews() {
  return (
    <Section
      bgColor="bg-second"
      title="Don’t take our word, see what our customers say"
    >
      <ReviewsSlider />
    </Section>
  );
}
