import image1 from "src/assets/aboutus/1.webp";
import image2 from "src/assets/aboutus/2.webp";

const ImageSection = () => {
  return (
    <div className="relative w-full md:w-1/2">
      <div className=" h-[415px] sm:h-[476px] w-[80%] overflow-hidden rounded-[50px] md:w-2/3 md:rounded-[74px]">
        <img className="h-full w-full object-cover" src={image1} alt="" />
      </div>
      <div className="relative z-20 -mt-16 ml-auto h-[159px] sm:h-[242px] w-[85%] overflow-hidden rounded-2xl md:-mt-44 md:w-2/3">
        <img
          className="h-full w-full overflow-hidden rounded-[50px] object-cover md:rounded-[74px]"
          src={image2}
          alt=""
        />
      </div>
    </div>
  );
};

export default ImageSection;
