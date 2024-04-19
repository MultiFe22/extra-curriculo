import { ProjectCard } from "../ProjectCard";


export const OpportunitiesContainerMobile: React.FC = () => {
  return (
    <main className="self-stretch overflow-hidden flex flex-col items-start justify-start py-0 px-4 gap-[40px]">
      <ProjectCard image="/image@2x.png" />
      <ProjectCard image="/image-1@2x.png" />
      <ProjectCard image="/image-2@2x.png" />
      <ProjectCard image="/image-3@2x.png" />
      <ProjectCard image="/image-4@2x.png" />
      <ProjectCard image="/image-5@2x.png" />
      <ProjectCard image="/image-6@2x.png" />
      <ProjectCard image="/image-7@2x.png" />
    </main>
  );
};