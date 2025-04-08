import { FaStar } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";
import { MdOutlineShoppingCart } from "react-icons/md";
import { GoHeart } from "react-icons/go";

export default function ProductCard({
  img,
  name,
  price,
  type,
  stars,
  discountPrice,
}) {
  return (
    <div className="border-stroke h-fit rounded-2xl border">
      <div className="relative">
        <div className="h-[236px] overflow-hidden">
          <img src={img} className="h-full w-full bg-cover" alt={name} />
        </div>
        <button className="border-stroke absolute top-2 right-2 rounded-2xl border bg-white p-2.5">
          <GoHeart className="h-[22px] w-[22px]" />
        </button>
      </div>
      <div className="space-y-3 p-4">
        <div className="space-y-2">
          <p className="text-subTitle text-sm">{type}</p>
          <h2 className="text-main-900 text-lg font-[500]">{name}</h2>
        </div>
        <div className="flex gap-x-[1px]">
          {Array.from({ length: stars }).map(() => (
            <FaStar className="h-4 w-4 text-[#FACC15]" />
          ))}
          {Array.from({ length: 5 - stars }).map(() => (
            <FaRegStar className="h-4 w-4 text-[#FACC15]" />
          ))}
        </div>
        <div className="flex items-center justify-between">
          <div className="flex gap-x-2 items-center" >
            {discountPrice ? (
              <>
                <p className="text-main text-xl font-semibold">
                  ${discountPrice}
                </p>
                <p className="text-subTitle text-sm  line-through">
                  ${price}
                </p>
              </>
            ) : (
              <p className="text-main text-xl font-semibold">${price}</p>
            )}
          </div>
          <button className="bg-main flex items-center gap-x-2.5 rounded-2xl px-4 py-2 text-sm font-bold text-white">
            <MdOutlineShoppingCart className="h-[24px] w-[24px]" />
            Add
          </button>
        </div>
      </div>
    </div>
  );
}
