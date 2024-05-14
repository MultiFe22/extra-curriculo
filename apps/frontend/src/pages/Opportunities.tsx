import { useQuery } from "@tanstack/react-query";
import { FiltersBar } from "../components/FiltersBar";
import { Footer } from "../components/Footer";
import { OpportunitiesContainerMobile } from "../components/OpportunitiesContainerMobile";
import { Pagination } from "../components/Pagination";
import { ResponsiveHeader } from "../components/ResponsiveHeader";
import { ResponsiveWrapper } from "../components/ResponsiveWrapper";
import { useEffect, useState } from "react";
import { FilterModal } from "../components/FilterModal";

const Backdrop: React.FC = () => (
  <div className="fixed inset-0 bg-black bg-opacity-50 z-40" ></div>
);
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
  tags: string[];
  category_name: string;
}

export type Projects = Project[];

async function fetchProjects(): Promise<Projects> {
  const response = await fetch('http://127.0.0.1:8000/projects');
  if (!response.ok) {
    throw new Error('Failed to fetch projects');
  }
  return response.json();
}

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth' // Optional: defines the transition animation
  });
}

const Opportunities: React.FC = () => {
  const [page, setPage] = useState<number>(0);
  const [maxPage, setMaxPage] = useState<number>(1);
  const [filteredProjects, setFilteredProjects] = useState<Projects>([]);
  const [search, setSearch] = useState<string>('');
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
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

  const handleModalOpenClose = (action: boolean) => {
    setIsModalOpen(action);
  }

  useEffect(() => {
    console.log(projects);
  }
  , [projects]);

  useEffect(() => {
    if (projects) {
      if (search === '') {
        setMaxPage(Math.ceil(projects.length / itemsPerPage));
        setFilteredProjects([...projects]);
      } else {
        const filtered = projects.filter((project) => project.name.toLowerCase().includes(search.toLowerCase()));
        setFilteredProjects(filtered);
        setMaxPage(Math.ceil(filtered.length / itemsPerPage));
      }
    }
    setPage(0);
  }
  , [projects, search]);

  useEffect(() => {
    console.log(page);
    scrollToTop();
  }
  , [page]);

  if (error instanceof Error) return <div>Error: {error.message}</div>;
  document.body.style.overflow = 'hidden';

  return (
    <div className="w-full relative bg-gray-50 flex flex-col items-start justify-start mq1425:gap-[48px] mq768:gap-[24px] mq1920:gap-[96px] leading-[normal] tracking-[normal] text-left text-xs text-gray-900 font-text-md-regular">
      <ResponsiveHeader/>
      <ResponsiveWrapper minWidth="769px" tailwindClasses="self-stretch flex flex-row items-start justify-center py-0 px-5 box-border max-w-full">
        <ResponsiveWrapper minWidth="769px" tailwindClasses="w-[1696px] flex flex-col items-start justify-start gap-[32.5px] max-w-full mq950:gap-[16px]">
          <FiltersBar handleOpenClose={handleModalOpenClose} searchChange={setSearch}/>
          {isLoading ?  <div> Loading projects...</div>: <OpportunitiesContainerMobile projects={filteredProjects || []} itemsPerPage={itemsPerPage} currentPage={page} />}
          {isLoading ? null : <Pagination currentPage={page} totalPages={maxPage} onPageChange={handlePageChange} />}
        </ResponsiveWrapper>
      </ResponsiveWrapper>
      <Footer />
      {isModalOpen ? <Backdrop /> : null}
      {isModalOpen && (
        <div className="fixed overflow-auto mq1920:inset-x-48 mq1920:inset-y-36 mq768:top-7 mq768:left-0 mq768:right-0 mq768:bottom-0 z-50 animate-slideUp">
          <FilterModal handleOpenClose={handleModalOpenClose} />
        </div>
      )}


    </div>

  );
};

export default Opportunities;
