import { Footer } from "../../components/Footer";
import { ProjectContent } from "../../components/ProjectContent.tsx";
import { ProjectHeader } from "../../components/ProjectHeader";
import { ResponsiveHeader } from "../../components/ResponsiveHeader";
import { ResponsiveWrapper } from "../../components/ResponsiveWrapper/ResponsiveWrapper.tsx";

export const Project: React.FC = () => {
  return (
    <div className="w-full relative bg-white flex flex-col mq1920:gap-[113px] items-start justify-start leading-[normal] tracking-[normal]">
      <ResponsiveWrapper isMinimum={true} minWidth="769px" tailwindClasses="self-stretch flex flex-col items-start justify-start max-w-full">
        <ResponsiveHeader />
        <ProjectHeader />
        <ProjectContent />
      </ResponsiveWrapper>
      <Footer />
    </div>
  );
};

export default Project;
