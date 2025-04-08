import CTA from "src/sections/HomePage/CTA";
import ContentPage from "src/components/ui/ContentPage";
import ContactForm from "src/sections/Contact/ContactForm";

import contact from "src/assets/contact.webp";
export default function Contact() {
  return (
    <ContentPage img={contact} title="Contact Us">
      <ContactForm />
      <CTA />
    </ContentPage>
  );
}
