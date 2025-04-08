import BlogsBarElement from "src/components/ui/BlogsBarElement";

const TagsData = [
  { title: "HTML5" },
  {
    title: "Technology",
  },
  {
    title: "Business",
  },
  {
    title: "IT Solution",
  },
  {
    title: "Software",
  },
];

const Tag = ({ title }) => {
  return (
    <div className="text-main-900 hover:bg-main cursor-pointer rounded-lg bg-white px-3 py-2 hover:text-white">
      {title}
    </div>
  );
};

export default function Tags() {
  return (
    <BlogsBarElement title="Tags">
      <div className="flex flex-wrap gap-2">
        {TagsData.map((tag, index) => (
          <Tag key={index} {...tag} />
        ))}
      </div>
    </BlogsBarElement>
  );
}
