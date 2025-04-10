import ProjectCard from "src/components/ui/ProjectCard";

export default function ProjectsCards({ Cards }) {
  return (
    <div className="grid w-full grid-cols-1 gap-y-5 sm:grid-cols-2 sm:gap-x-5 lg:grid-cols-3 lg:gap-x-6">
      {Cards.map((card, index) => (
        <ProjectCard key={index} {...card} />
      ))}
    </div>
  );
}
