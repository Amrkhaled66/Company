import CTA from "src/sections/HomePage/CTA";
import ContentPage from "src/components/ui/ContentPage";
import ContactForm from "src/sections/Contact/ContactForm";
export default function Contact() {
  return (
      <ContentPage title="Contact Us">
      <ContactForm />
      <CTA />
    </ContentPage>
  );
}
