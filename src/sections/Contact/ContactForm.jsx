import Form from "src/components/Contact/Form";
import Content from "src/components/Contact/Content";

export default function ContactForm() {
  return (
    <div className="container">
      <div className="py-[40px] gap-x-6 flex md:flex-row flex-col gap-y-[50px] md:py-[80px]">
        <Content />
        <Form />
      </div>
    </div>
  );
}
