import { Footer } from "../../components/Footer";
import { ProjectContent } from "../../components/ProjectContent.tsx";
import { ProjectHeader } from "../../components/ProjectHeader";
import { ResponsiveHeader } from "../../components/ResponsiveHeader";

export const Project: React.FC = () => {
  return (
    <div className="w-full relative bg-white flex flex-col items-start justify-start leading-[normal] tracking-[normal]">
      <ResponsiveHeader />
      <ProjectHeader />
      <ProjectContent />
      <Footer />
    </div>
  );
};

export default Project;
