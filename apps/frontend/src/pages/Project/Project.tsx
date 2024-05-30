import { Footer } from "../../components/Footer";
import { ProjectContent } from "../../components/ProjectContent.tsx";
import { ProjectHeader } from "../../components/ProjectHeader";
import { ResponsiveHeader } from "../../components/ResponsiveHeader";
import { ResponsiveWrapper } from "../../components/ResponsiveWrapper/ResponsiveWrapper.tsx";
import { ProjectDTO } from "../Opportunities/Opportunities.tsx";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";

async function fetchProject(id: string): Promise<ProjectDTO> {
  const response = await fetch("http://127.0.0.1:8000/projects/" + id);
  if (!response.ok) {
    throw new Error("Failed to fetch projects");
  }
  return response.json();
}

export const Project: React.FC = () => {
  const { id } = useParams();
  const {
    data: project,
    error: errorProject,
    isLoading: isProjectsLoading,
  } = useQuery<ProjectDTO, Error>({
    queryKey: ["project", id ?? ""],
    queryFn: () => fetchProject(id ?? ""),
  });

  if (!id) {
    return <div>Invalid project id</div>;
  }

  if (isProjectsLoading) {
    return <div>Loading...</div>;
  }

  if (errorProject) {
    return <div>Error: {errorProject.message}</div>;
  }

  return (
    <div className="w-full relative bg-white flex flex-col mq1920:gap-[113px] items-start justify-start leading-[normal] tracking-[normal]">
      <ResponsiveWrapper
        isMinimum={true}
        minWidth="769px"
        tailwindClasses="self-stretch flex flex-col items-start justify-start max-w-full"
      >
        <ResponsiveHeader />
        {project && <ProjectHeader project={project} />}
        {project && <ProjectContent project={project} />}
      </ResponsiveWrapper>
      <Footer />
    </div>
  );
};

export default Project;
