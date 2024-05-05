import { useQuery } from "@tanstack/react-query";
import { FiltersBar } from "../components/FiltersBar";
import { Footer } from "../components/Footer";
import { OpportunitiesContainerMobile } from "../components/OpportunitiesContainerMobile";
import { Pagination } from "../components/Pagination";
import { ResponsiveHeader } from "../components/ResponsiveHeader";
import { ResponsiveWrapper } from "../components/ResponsiveWrapper";
import { useEffect, useState } from "react";

export interface Project {
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

export type Projects = Project[];

async function fetchProjects(): Promise<Projects> {
  const response = await fetch('http://127.0.0.1:8000/projects');
  if (!response.ok) {
    throw new Error('Failed to fetch projects');
  }
  return response.json();
}


const Opportunities: React.FC = () => {
  const [page, setPage] = useState<number>(0);
  const [maxPage, setMaxPage] = useState<number>(1);
  const itemsPerPage = 12;

  // Ensure that the query key and fetch function are passed as part of an options object
  const { data: projects, error, isLoading } = useQuery<Projects, Error>({
    queryKey: ['projects'],
    queryFn: fetchProjects,
  });


  const handlePageChange = (pageNumber: number) => {
    if (pageNumber < 0 || pageNumber >= maxPage) {
      return;
    }
    setPage(pageNumber);
  };


  useEffect(() => {
    if (projects) {
      setMaxPage(Math.ceil(projects.length / itemsPerPage));
    }
    console.log(projects);
  }
  , [projects]);

  useEffect(() => {
    console.log(page);
  }
  , [page]);

  if (error instanceof Error) return <div>Error: {error.message}</div>;

  return (
    <div className="w-full relative bg-gray-50 flex flex-col items-start justify-start mq1425:gap-[48px] mq768:gap-[24px] mq1920:gap-[96px] leading-[normal] tracking-[normal] text-left text-xs text-gray-900 font-text-md-regular">
      <ResponsiveHeader/>
      <ResponsiveWrapper minWidth="769px" tailwindClasses="self-stretch flex flex-row items-start justify-center py-0 px-5 box-border max-w-full">
        <ResponsiveWrapper minWidth="769px" tailwindClasses="w-[1696px] flex flex-col items-start justify-start gap-[32.5px] max-w-full mq950:gap-[16px]">
          <FiltersBar/>
          {isLoading ?  <div> Loading projects...</div>: <OpportunitiesContainerMobile projects={projects || []} itemsPerPage={itemsPerPage} currentPage={page} />}
          {isLoading ? null : <Pagination currentePage={page} totalPages={maxPage} onPageChange={handlePageChange} />}
        </ResponsiveWrapper>
      </ResponsiveWrapper>

      <Footer />
    </div>

  );
};

export default Opportunities;
