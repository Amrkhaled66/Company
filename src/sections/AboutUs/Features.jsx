import Content from "src/components/AboutUs/Features/Content";
import image3 from "src/assets/aboutus/3.webp";
export default function Features() {
  return (
    <div className="bg-second md:!py-section-padding !py-section-padding-mobile container">
      <div className="bg-main relative flex flex-col-reverse gap-y-[28px] overflow-hidden rounded-2xl md:flex-row md:rounded-[35px]">
        <Content />
        <div>
          <div className={`clip top-0 right-0 md:absolute md:w-[486px]`}>
            <img src={image3} className="w-full" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
