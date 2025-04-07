import blog1 from "src/assets/blogs/blog1.webp";
import blog2 from "src/assets/blogs/blog2.webp";
import blog3 from "src/assets/blogs/blog3.webp";
import blog4 from "src/assets/blogs/blog4.webp";
import blogCenter from "src/assets/blogs/blogCenter.webp";

import BlogCard from "./BlogCard";
const Blogs = [
  {
    bg: blog1,
    title: "Planning your online business goals with a specialist",
    topic: "Technology",
    interval: "8 months ago",
    className: " rounded-ee-none ",
  },
  {
    bg: blog2,
    title: "Planning your online business goals with a specialist",
    topic: "Technology",
    interval: "8 months ago",
    className: " rounded-es-none ",
  },
  {
    bg: blog3,
    title: "Boost your startup business with our digital agency",
    topic: "Technology",
    interval: "8 months ago",
    className: " rounded-se-none ",
  },
  {
    bg: blog4,
    title: "Market insights to manage people related costs",
    topic: "Technology",
    interval: "8 months ago",
    className: " rounded-ss-none ",
  },
];

export default function BlogCards() {
  return (
    <div className="relative flex flex-wrap justify-center grid-cols-2  gap-[13px] md:gap-6">
      {Blogs.map((blog, index) => (
        <BlogCard key={index} {...blog} />
      ))}
      <div className="absolute top-1/2 right-1/2 z-20 h-[89px] w-[89px] translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-full border-[5px] border-white sm:h-[140px] sm:w-[140px] md:h-[280px] md:w-[280px] md:border-[12px]">
        <img src={blogCenter} className="h-full w-full object-cover" alt="" />
      </div>
    </div>
  );
}
