import { FiltersBar } from "../components/FiltersBar";
import { Footer } from "../components/Footer";
import { OpportunitiesContainerMobile } from "../components/OpportunitiesContainerMobile";
import { Pagination } from "../components/Pagination";
import { ResponsiveHeader } from "../components/ResponsiveHeader";


const Opportunities: React.FC = () => {
  return (
    <div className="w-full relative bg-gray-50 overflow-hidden flex flex-col items-start justify-start gap-[24px] leading-[normal] tracking-[normal] text-left text-xs text-gray-900 font-text-md-regular">
      <ResponsiveHeader/>
      <FiltersBar/>
      <OpportunitiesContainerMobile />
      <Pagination />
      <Footer />
    </div>

  );
};

export default Opportunities;
