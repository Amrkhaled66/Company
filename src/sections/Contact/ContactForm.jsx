import Form from "src/components/Contact/Form";
import Content from "src/components/Contact/Content";

export default function ContactForm({ bgColor, formColor }) {
  return (
    <div className={`container ${bgColor} `}>
      <div className="flex flex-col gap-x-6 gap-y-[50px] py-[40px] md:flex-row md:py-[80px]">
        <Content />
        <Form bgColor={formColor} />
      </div>
    </div>
  );
}
