import BlogsBarElement from "src/components/ui/BlogsBarElement";

import img1 from "src/assets/blogsPage/1webp.webp";
import img2 from "src/assets/blogsPage/2webp.webp";
import img3 from "src/assets/blogsPage/3webp.webp";
import img4 from "src/assets/blogsPage/4webp.webp";
import img5 from "src/assets/blogsPage/5webp.webp";

const recentPosts = [
  {
    img: img1,
    title: "Planning your online business goals with a.....",
    data: "10 April 2025",
  },
  {
    img: img2,
    title: "Planning your online business goals with a.....",
    data: "10 April 2025",
  },
  {
    img: img3,
    title: "Planning your online business goals with a.....",
    data: "10 April 2025",
  },
  {
    img: img4,
    title: "Planning your online business goals with a.....",
    data: "10 April 2025",
  },
  {
    img: img5,
    title: "Planning your online business goals with a.....",
    data: "10 April 2025",
  },
];

const Post = ({ img, title, data }) => {
  return (
    <div className="flex items-center gap-x-2">
      <div className="h-full w-[130px] overflow-hidden rounded-xl">
        <img className="h-full w-full object-cover" src={img} alt="" />
      </div>
      <div className="space-y-1">
        <h3 className="text-main-900 text-lg font-bold">{title}</h3>
        <p className="text-subTitle text-sm">{data}</p>
      </div>
    </div>
  );
};

export default function RecentPosts() {
  return (
    <BlogsBarElement title="Recent Posts">
      <div className="space-y-4">
        {recentPosts.map((post, index) => (
          <Post key={index} {...post} />
        ))}
      </div>
    </BlogsBarElement>
  );
}
