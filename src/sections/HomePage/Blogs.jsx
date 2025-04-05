import Section from "src/components/ui/Section";

import BlogCards from "src/components/HomePage/Blogs/BlogCards";
import CTAButton from "src/components/ui/CTAButton";
export default function Blogs() {
  return (
    <Section
     
      title="Recent blog & articles about technology"
    >
      <BlogCards />
      <CTAButton>View All Posts</CTAButton>
    </Section>
  );
}
