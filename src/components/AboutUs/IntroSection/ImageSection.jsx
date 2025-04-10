import image1 from "src/assets/aboutus/1.webp";
import image2 from "src/assets/aboutus/2.webp";

const ImageSection = () => {
  return (
    <div className="relative w-full lg:w-1/2">
      <div className="h-[415px] w-[80%] overflow-hidden rounded-[50px] sm:h-[476px] lg:w-2/3 lg:rounded-[74px]">
        <img className="h-full w-full object-cover" src={image1} alt="" />
      </div>
      <div className="relative z-20 -mt-16 ml-auto h-[159px] w-[85%] overflow-hidden rounded-2xl sm:h-[242px] lg:-mt-44 lg:w-2/3">
        <img
          className="h-full w-full overflow-hidden rounded-[50px] object-cover lg:rounded-[74px]"
          src={image2}
          alt=""
        />
      </div>
    </div>
  );
};

export default ImageSection;
