import { useEffect } from "react";
import { ProjectCard } from "../ProjectCard";
import { useQuery } from '@tanstack/react-query';

interface Project {
  id: string;
  name: string;
  description: string;
  modality: string;
  professor: string;
  email: string;
  website: string;
  facebook: string;
  instagram: string;
  linkedin: string;
  twitter: string;
  address: string;
  banner: string;
  picture: string;
  category_id: string;
  is_recruiting: boolean;
}

type Projects = Project[];

async function fetchProjects(): Promise<Projects> {
  const response = await fetch('http://127.0.0.1:8000/projects');
  if (!response.ok) {
    throw new Error('Failed to fetch projects');
  }
  return response.json();
}


export const OpportunitiesContainerMobile: React.FC = () => {
  // Ensure that the query key and fetch function are passed as part of an options object
  const { data: projects, error, isLoading } = useQuery<Projects, Error>({
    queryKey: ['projects'],
    queryFn: fetchProjects,
  });

  useEffect(() => {
    console.log(projects);
  }
  , [projects]);

  if (isLoading) return <div>Loading projects...</div>;
  if (error instanceof Error) return <div>Error: {error.message}</div>;
  return (
    <main className="self-stretch mq768:overflow-hidden flex mq375:flex-col mq768:flex-row mq768:flex-wrap mq1920:flex-row mq1920:flex-wrap items-start justify-start mq1920:gap-[48px_22.7px] mq1920:min-h-[836px] mq1920:max-w-full mq1920:shrink-0 mq768:max-w-full mq768:py-0 mq375:px-4 mq768:px-8 mq375:gap-[40px] mq768:gap-[40px_20px] mq1920:text-left mq1920:text-sm mq1920:text-slateblue mq1920:font-text-md-regular">
      {projects?.map((project) => (
        <ProjectCard key={project.id} image="https://source.unsplash.com/a8JHGzB7h4A" name={project.name} />
      ))}
    </main>
  );
};