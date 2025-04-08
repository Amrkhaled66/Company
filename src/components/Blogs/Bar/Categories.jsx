import { FaPlus } from "react-icons/fa6";
import BlogsBarElement from "src/components/ui/BlogsBarElement";

const CategoriesData = [
  {
    category: "Uncategorized",
    num: 0,
  },
  {
    category: "Cyber Security",
    num: 0,
  },
  {
    category: "Consulting",
    num: 0,
  },
  {
    category: "Business",
    num: 0,
  },
  {
    category: "Marketing",
    num: 0,
  },
  {
    category: "Flutter Apps",
    num: 0,
  },
];

const Category = ({ category, num, index }) => {
  return (
    <div
      className={`text-main-900 flex gap-x-2 pb-2 ${!(index === CategoriesData.length - 1) && "border-stroke border-b"} `}
    >
      <button>
        <FaPlus />
      </button>

      <p>
        {category}({num})
      </p>
    </div>
  );
};

export default function Categories() {
  return (
    // <div className="bg-second w-[400px] space-y-4 rounded-2xl p-4">
    //   {CategoriesData.map((item, index) => (
    //     <Category
    //       key={index}
    //       category={item.category}
    //       index={index}
    //       num={item.num}
    //     />
    //   ))}
    // </div>
    <BlogsBarElement title="Categories">
      <div className="space-y-4">
        {CategoriesData.map((item, index) => (
          <Category
            key={index}
            category={item.category}
            index={index}
            num={item.num}
          />
        ))}
      </div>
    </BlogsBarElement>
  );
}
