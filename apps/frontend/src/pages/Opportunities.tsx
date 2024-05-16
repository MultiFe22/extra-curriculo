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
  <div className="fixed inset-0 bg-black bg-opacity-50 z-40"></div>
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

export interface Category {
  id: string;
  name: string;
}

export interface Tag {
  id: string;
  name: string;
}

export type Tags = Tag[];

export type Categories = Category[];

export type Projects = Project[];

async function fetchProjects(): Promise<Projects> {
  const response = await fetch("http://127.0.0.1:8000/projects");
  if (!response.ok) {
    throw new Error("Failed to fetch projects");
  }
  return response.json();
}

async function fetchCategories(): Promise<Categories> {
  const response = await fetch("http://127.0.0.1:8000/categories");
  if (!response.ok) {
    throw new Error("Failed to fetch categories");
  }

  return response.json();
}

async function fetchTags(): Promise<Tags> {
  const response = await fetch("http://127.0.0.1:8000/tags");
  if (!response.ok) {
    throw new Error("Failed to fetch tags");
  }
  return response.json();
}

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth", // Optional: defines the transition animation
  });
}

const Opportunities: React.FC = () => {
  const modalities = ["Presencial", "Híbrido", "Remoto"];
  const [page, setPage] = useState<number>(0);
  const [maxPage, setMaxPage] = useState<number>(1);
  const [filteredProjects, setFilteredProjects] = useState<Projects>([]);
  const [search, setSearch] = useState<string>("");
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const itemsPerPage = 12;

  // Ensure that the query key and fetch function are passed as part of an options object
  const {
    data: projects,
    error: errorProjects,
    isLoading: isProjectsLoading,
  } = useQuery<Projects, Error>({
    queryKey: ["projects"],
    queryFn: fetchProjects,
  });

  const {
    data: categories,
    error: errorCategories,
    isLoading: isCategoriesLoading,
  } = useQuery<Categories, Error>({
    queryKey: ["categories"],
    queryFn: fetchCategories,
  });

  const {
    data: tags,
    error: errorTags,
    isLoading: isTagsLoading,
  } = useQuery<Tags, Error>({
    queryKey: ["tags"],
    queryFn: fetchTags,
  });

  const [selectedModalities, setSelectedModalities] = useState<
    Record<string, boolean>
  >(modalities.reduce((acc, modality) => ({ ...acc, [modality]: false }), {}));

  const [selectedCategories, setSelectedCategories] = useState<
    Record<string, boolean>
  >({});

  const [selectedTags, setSelectedTags] = useState<Record<string, boolean>>({});

  useEffect(() => {
    if (categories) {
      const options = categories.map((category) => category.name);
      setSelectedCategories(
        options.reduce((acc, option) => ({ ...acc, [option]: false }), {}),
      );
    }
  }, [categories]);

  useEffect(() => {
    if (tags) {
      const options = tags.map((tag) => tag.name);
      setSelectedTags(
        options.reduce((acc, option) => ({ ...acc, [option]: false }), {}),
      );
    }
  }, [tags]);

  useEffect(() => {
    console.log(selectedCategories);
  }, [selectedCategories]);

  useEffect(() => {
    console.log(selectedModalities);
  }, [selectedModalities]);

  useEffect(() => {
    console.log(selectedTags);
  }, [selectedTags]);

  const handlePageChange = (pageNumber: number) => {
    if (pageNumber < 0 || pageNumber >= maxPage) {
      return;
    }
    setPage(pageNumber);
  };

  const handleModalOpenClose = (action: boolean) => {
    setIsModalOpen(action);
    document.body.style.overflow = action ? "hidden" : "auto";
  };

  useEffect(() => {
    console.log(projects);
  }, [projects]);

  useEffect(() => {
    if (projects) {
      if (search === "") {
        setMaxPage(Math.ceil(projects.length / itemsPerPage));
        setFilteredProjects([...projects]);
      } else {
        const filtered = projects.filter((project) =>
          project.name.toLowerCase().includes(search.toLowerCase()),
        );
        setFilteredProjects(filtered);
        setMaxPage(Math.ceil(filtered.length / itemsPerPage));
      }
    }
    setPage(0);
  }, [projects, search]);

  useEffect(() => {
    console.log(page);
    scrollToTop();
  }, [page]);

  useEffect(() => {
    console.log(categories);
    console.log(isCategoriesLoading);
    console.log(isTagsLoading);
  }, [categories, isCategoriesLoading, isTagsLoading]);

  const isLoading = isCategoriesLoading || isTagsLoading;

  if (
    errorProjects instanceof Error ||
    errorCategories instanceof Error ||
    errorTags instanceof Error
  )
    return <div>Error</div>;

  return (
    <div className="w-full relative bg-gray-50 flex flex-col items-start justify-start mq1425:gap-[48px] mq768:gap-[24px] mq1920:gap-[96px] leading-[normal] tracking-[normal] text-left text-xs text-gray-900 font-text-md-regular">
      <ResponsiveHeader />
      <ResponsiveWrapper
        minWidth="769px"
        tailwindClasses="self-stretch flex flex-row items-start justify-center py-0 px-5 box-border max-w-full"
      >
        <ResponsiveWrapper
          minWidth="769px"
          tailwindClasses="w-[1696px] flex flex-col items-start justify-start gap-[32.5px] max-w-full mq950:gap-[16px]"
        >
          {!isLoading && (
            <FiltersBar
              handleOpenClose={handleModalOpenClose}
              searchChange={setSearch}
            />
          )}
          {isProjectsLoading ? (
            <div> Loading projects...</div>
          ) : (
            <OpportunitiesContainerMobile
              projects={filteredProjects || []}
              itemsPerPage={itemsPerPage}
              currentPage={page}
            />
          )}
          {isProjectsLoading ? null : (
            <Pagination
              currentPage={page}
              totalPages={maxPage}
              onPageChange={handlePageChange}
            />
          )}
        </ResponsiveWrapper>
      </ResponsiveWrapper>
      <Footer />
      {isModalOpen ? <Backdrop /> : null}
      {isModalOpen && (
        <div className="fixed overflow-auto mq1920:inset-x-48 mq1920:inset-y-36 mq768:top-7 mq768:left-0 mq768:right-0 mq768:bottom-0 z-50 animate-slideUp">
          <FilterModal
            handleOpenClose={handleModalOpenClose}
            categories={categories || []}
            modalities={["Presencial", "Híbrido", "Remoto"]}
            tags={tags || []}
            selectedCategories={selectedCategories}
            selectedModalities={selectedModalities}
            selectedTags={selectedTags}
            setSelectedCategories={setSelectedCategories}
            setSelectedModalities={setSelectedModalities}
            setSelectedTags={setSelectedTags}
          />
        </div>
      )}
    </div>
  );
};

export default Opportunities;
