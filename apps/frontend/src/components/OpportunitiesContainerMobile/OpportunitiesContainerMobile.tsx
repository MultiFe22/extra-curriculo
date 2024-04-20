import { ProjectCard } from "../ProjectCard";


export const OpportunitiesContainerMobile: React.FC = () => {
  return (
    <main className="self-stretch overflow-hidden flex mq375:flex-col mq768:flex-row mq768:flex-wrap items-start justify-start mq768:max-w-full py-0 mq375:px-4 mq768:px-8 mq375:gap-[40px] mq768:gap-[40px_20px]">
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