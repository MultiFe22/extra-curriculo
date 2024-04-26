import { ProjectCard } from "../ProjectCard";


export const OpportunitiesContainerMobile: React.FC = () => {
  return (
    <main className="self-stretch mq768:overflow-hidden flex mq375:flex-col mq768:flex-row mq768:flex-wrap mq1920:flex-row mq1920:flex-wrap items-start justify-start mq1920:gap-[48px_22.7px] mq1920:min-h-[836px] mq1920:max-w-full mq1920:shrink-0 mq768:max-w-full mq768:py-0 mq375:px-4 mq768:px-8 mq375:gap-[40px] mq768:gap-[40px_20px] mq1920:text-left mq1920:text-sm mq1920:text-slateblue mq1920:font-text-md-regular">
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