import Search from "src/components/Blogs/Bar/Search";
import Categories from "src/components/Blogs/Bar/Categories";
import RecentPosts from "src/components/Blogs/Bar/RecentPosts";
import Tags from "src/components/Blogs/Bar/Tags";

export default function BlogsBar({ onSearch }) {
  return (
    <div className="w-full space-y-5 pt-[40px] sm:pt-[60px] md:w-[400px] sm:space-y-6 md:pt-0">
      <Search onSearch={onSearch} />
      <Categories />
      <RecentPosts />
      <Tags />
    </div>
  );
}
