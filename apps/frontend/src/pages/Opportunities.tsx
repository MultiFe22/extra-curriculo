import {DropdownHeaderNavigation} from "../components/DropdownHeaderNavigation";
import {CardHeader} from "../components/CardHeader";
import {FiltersBar} from "../components/FiltersBar";
import {ProjectCard} from "../components/ProjectCard";
import {Pagination} from "../components/Pagination";
import {Footer} from "../components/Footer";

const Opportunities: React.FC = () => {
  return (
    <div className="w-full relative bg-gray-50 overflow-hidden flex flex-col items-start justify-start gap-[96px] leading-[normal] tracking-[normal] text-center text-41xl text-gray-900 font-text-md-regular mq800:gap-[48px] mq450:gap-[24px]">
      <DropdownHeaderNavigation />
      <img
        className="self-stretch relative max-w-full overflow-hidden max-h-full hidden"
        alt=""
        src="/background-pattern.svg"
      />
      <div className="self-stretch bg-white overflow-hidden hidden flex-col items-center justify-start pt-0 px-0 pb-24 box-border min-h-[456px] max-w-full">
        <div className="self-stretch flex flex-col items-center justify-start pt-24 px-0 pb-0 box-border max-w-full z-[0]">
          <div className="w-[1280px] flex flex-col items-center justify-start py-0 px-8 box-border max-w-full">
            <div className="self-stretch flex flex-col items-center justify-start gap-[48px] max-w-full">
              <div className="w-[1024px] flex flex-col items-center justify-start gap-[24px] max-w-full">
                <div className="self-stretch h-[72px] relative tracking-[-0.02em] leading-[72px] font-semibold inline-block mq800:text-[48px] mq800:leading-[58px] mq450:text-[36px] mq450:leading-[43px]">
                  Oportunidades
                </div>
                <div className="w-[768px] h-[60px] relative text-xl leading-[30px] text-gray-600 inline-block max-w-full mq450:text-base mq450:leading-[24px]">
                  Powerful, self-serve product and growth analytics to help you
                  convert, engage, and retain more users. Trusted by over 4,000
                  startups.
                </div>
              </div>
              <div className="flex flex-row items-start justify-start gap-[12px] max-w-full text-left text-lg text-gray-700 mq800:flex-wrap">
                <div className="rounded-lg flex flex-row items-start justify-start">
                  <div className="rounded-lg bg-white shadow-[0px_1px_2px_rgba(16,_24,_40,_0.05)] overflow-hidden flex flex-row items-center justify-center py-4 px-[27px] gap-[11px] whitespace-nowrap border-[1px] border-solid border-gray-300">
                    <img
                      className="h-6 w-6 relative overflow-hidden shrink-0"
                      alt=""
                      src="/plussquare.svg"
                    />
                    <div className="h-7 relative leading-[28px] font-semibold inline-block">
                      Cadastrar oportunidade
                    </div>
                  </div>
                </div>
                <div className="rounded-lg flex flex-row items-start justify-start text-white">
                  <div className="rounded-lg bg-brand-600 shadow-[0px_1px_2px_rgba(16,_24,_40,_0.05)] overflow-hidden flex flex-row items-center justify-center py-4 px-[27px] whitespace-nowrap border-[1px] border-solid border-brand-600">
                    <div className="relative leading-[28px] font-semibold">
                      Criar conta
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[1216px] hidden flex-col items-start justify-start gap-[24px] max-w-full text-left text-11xl">
        <div className="self-stretch flex flex-col items-start justify-start gap-[4px]">
          <div className="self-stretch h-[38px] relative leading-[38px] font-semibold inline-block mq800:text-5xl mq800:leading-[30px] mq450:text-lg mq450:leading-[23px]">
            Busque por oportunidades
          </div>
          <div className="self-stretch h-6 relative text-base leading-[24px] text-gray-600 inline-block">
            <span>{`Filtre por modalidade, categoria, situação e outras `}</span>
            <i>tags</i>
            <span>.</span>
          </div>
        </div>
        <div className="self-stretch bg-white flex flex-row items-start justify-center max-w-full">
          <div className="w-[1280px] flex flex-col items-start justify-start py-0 px-8 box-border max-w-[105%] shrink-0">
            <img
              className="self-stretch relative max-w-full overflow-hidden max-h-full"
              alt=""
              src="/divider.svg"
            />
          </div>
        </div>
      </div>
      <main className="self-stretch flex flex-row items-start justify-center py-0 px-5 box-border max-w-full">
        <section className="w-[1216px] rounded-xl bg-gray-25 shadow-[0px_1px_3px_rgba(16,_24,_40,_0.1),_0px_1px_2px_rgba(16,_24,_40,_0.06)] box-border overflow-hidden shrink-0 flex flex-col items-start justify-start max-w-full border-[1px] border-solid border-gray-200">
          <CardHeader />
          <FiltersBar />
          <div className="self-stretch flex flex-row flex-wrap items-start justify-between py-6 px-4 box-border min-h-[1470px] max-w-full gap-[14px] mq800:pt-5 mq800:pb-5 mq800:box-border">
            <ProjectCard image="/image@2x.png" />
            <ProjectCard image="/image-1@2x.png" />
            <ProjectCard image="/image-2@2x.png" />
            <ProjectCard image="/image-3@2x.png" />
            <ProjectCard image="/image-4@2x.png" />
            <ProjectCard image="/image-5@2x.png" />
            <ProjectCard image="/image-6@2x.png" />
            <ProjectCard image="/image-7@2x.png" />
            <ProjectCard image="/image-8@2x.png" />
          </div>
          <Pagination />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Opportunities;
