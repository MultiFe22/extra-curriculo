import { FiltersBar } from "../components/FiltersBar";
import { Footer } from "../components/Footer";
import { OpportunitiesContainerMobile } from "../components/OpportunitiesContainerMobile";
import { Pagination } from "../components/Pagination";
import { ResponsiveHeader } from "../components/ResponsiveHeader";
import { ResponsiveWrapper } from "../components/ResponsiveWrapper";


const Opportunities: React.FC = () => {
  return (
    <div className="w-full relative bg-gray-50 overflow-hidden flex flex-col items-start justify-start mq1425:gap-[48px] mq768:gap-[24px] mq1920:gap-[96px] leading-[normal] tracking-[normal] text-left text-xs text-gray-900 font-text-md-regular">
      <ResponsiveHeader/>
      <ResponsiveWrapper minWidth="769px" tailwindClasses="self-stretch flex flex-row items-start justify-center py-0 px-5 box-border max-w-full">
        <ResponsiveWrapper minWidth="769px" tailwindClasses="w-[1696px] flex flex-col items-start justify-start gap-[32.5px] max-w-full mq950:gap-[16px]">
          <FiltersBar/>
          <OpportunitiesContainerMobile />
          <Pagination />
        </ResponsiveWrapper>
      </ResponsiveWrapper>

      <Footer />
    </div>

  );
};

export default Opportunities;
