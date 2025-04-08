import CTA from "src/sections/HomePage/CTA";
import ContentPage from "src/components/ui/ContentPage";
import ContactForm from "src/sections/Contact/ContactForm";

import contact from "src/assets/contact.webp";

import useUpdatePageTitle from "src/hooks/useUpdatePageTitle";

export default function Contact() {

  useUpdatePageTitle("Contact");
  return (
    <ContentPage img={contact} title="Contact Us">
      <ContactForm />
      <CTA />
    </ContentPage>
  );
}
