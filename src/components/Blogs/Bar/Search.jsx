import { IoSearchOutline } from "react-icons/io5";

import BlogsBarElement from "src/components/ui/BlogsBarElement";
export default function Search({onSearch}) {
  return (
    <BlogsBarElement title="Search">
      <form onSubmit={onSearch} className="flex h-[46px] w-full items-center">
        <input
          className="placeholder:text-subTitle border-stroke h-full w-full rounded-2xl rounded-se-none rounded-ee-none border bg-white px-4 text-sm outline-none"
          placeholder="Search"
          type="text"
          name="search"
        />
        <button  type="submit" className="bg-main flex h-full items-center rounded-2xl rounded-ss-none rounded-es-none p-4 text-white">
          <IoSearchOutline className="h-[24px] w-[24px]" />
        </button>
      </form>
    </BlogsBarElement>
  );
}
