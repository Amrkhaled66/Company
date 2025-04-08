import ContentPage from "src/components/ui/ContentPage";
import BlogCards from "src/sections/Blogs/BlogsCards";
import BlogsBar from "src/sections/Blogs/Bar/index";

import BlogsImg from "src/assets/blogs.webp";
import BlogsData from "src/sections/Blogs/Blogs";

import { useState } from "react";

import CTA from "src/sections/HomePage/CTA";

export default function Blogs() {
  const [search, setSearch] = useState("");
  const filteredBlogs = BlogsData.filter((blog) =>
    blog.title.toLowerCase().includes(search.toLowerCase()),
  );

  const onSearch = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const searchValue = formData.get("search");

    setSearch(searchValue || "");
  };

  return (
    <ContentPage img={BlogsImg} title="Blogs">
      <div className="container">
        <div className="py-section-padding-mobile md:py-section-padding space-y-[50px] sm:py-[60px]">
          <div className="flex flex-col gap-x-6 md:flex-row">
            <BlogCards filteredBlogs={filteredBlogs} />
            <BlogsBar onSearch={onSearch} />
          </div>
        </div>
      </div>
      <CTA />
    </ContentPage>
  );
}
