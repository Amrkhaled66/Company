import promo1 from "src/assets/promo1.webp";
import promo2 from "src/assets/promo2.webp";
import promo3 from "src/assets/promo3.webp";
import promo4 from "src/assets/promo4.webp";

const Image = ({ img, className }) => {
  return (
    <div
      className={`h-[180px] w-[165px] overflow-hidden rounded-[55px] sm:h-[254px] sm:w-[330px] md:h-[254px] md:w-[276px] md:rounded-[74px] ${className}`}
    >
      <img src={img} alt="promo" className="h-full w-full object-cover" />
    </div>
  );
};

export default function Images() {
  return (
    <div className="grid grid-cols-2 gap-3 sm:gap-5 md:gap-6">
      <Image img={promo4} className="!rounded-ee-none" />
      <Image img={promo2} className="!rounded-es-none" />
      <Image img={promo3} className="!rounded-se-none" />
      <Image img={promo1} className="!rounded-ss-none" />
    </div>
  );
}
