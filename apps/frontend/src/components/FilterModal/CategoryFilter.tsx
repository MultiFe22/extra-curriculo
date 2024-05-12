import Atom01 from "../../assets/Atom01"
import Building07 from "../../assets/Building07"
import Globe04 from "../../assets/Globe04"
import Trophy from "../../assets/Trophy"

export const CategoryFilter: React.FC = () => {
  return (
    <section className="self-stretch flex flex-row items-start justify-end py-0 px-6 box-border max-w-full text-left text-xl text-gray-900 font-text-md-regular">
      <div className="flex-1 flex flex-col items-start justify-start gap-[20px] max-w-full">
        <div className="self-stretch flex flex-col items-start justify-start gap-[8px]">
          <h3 className="m-0 self-stretch relative text-inherit leading-[30px] font-semibold font-inherit">
            Categoria
          </h3>
        </div>
        <div className="self-stretch flex flex-row flex-wrap items-start justify-start py-0 pr-[27px] pl-0 box-border gap-[16px] min-h-[152px]">
          <button className="cursor-pointer [border:none] p-0 bg-[transparent] rounded-lg flex flex-row items-start justify-start">
            <div className="shadow-[0px_1px_2px_rgba(16,_24,_40,_0.05)] rounded-lg bg-white overflow-hidden flex flex-row items-center justify-center py-2 px-[15px] gap-[8px] whitespace-nowrap border-[1px] border-solid border-gray-300">
              <Trophy className="h-5 w-5 relative overflow-hidden shrink-0 min-h-[20px] stroke-[#344054]"/>
              <div className="relative text-sm leading-[20px] font-semibold font-text-md-regular text-gray-700 text-left">
                Equipe de competição
              </div>
            </div>
          </button>
          <button className="cursor-pointer [border:none] p-0 bg-[transparent] rounded-lg flex flex-row items-start justify-start">
            <div className="shadow-[0px_1px_2px_rgba(16,_24,_40,_0.05)] rounded-lg bg-white overflow-hidden flex flex-row items-center justify-center py-2 px-[15px] gap-[8px] whitespace-nowrap border-[1px] border-solid border-gray-300">
              <Atom01 className="h-5 w-5 relative overflow-hidden shrink-0 min-h-[20px] stroke-[#344054]"/>
              <div className="relative text-sm leading-[20px] font-semibold font-text-md-regular text-gray-700 text-left inline-block min-w-[127px]">
                Iniciação científica
              </div>
            </div>
          </button>
          <button className="cursor-pointer [border:none] p-0 bg-[transparent] rounded-lg flex flex-row items-start justify-start">
            <div className="shadow-[0px_1px_2px_rgba(16,_24,_40,_0.05)] rounded-lg bg-white overflow-hidden flex flex-row items-center justify-center py-2 px-[15px] gap-[8px] whitespace-nowrap border-[1px] border-solid border-gray-300">
              <Building07 className="h-5 w-5 relative overflow-hidden shrink-0 min-h-[20px] stroke-[#344054]"/>
              <div className="relative text-sm leading-[20px] font-semibold font-text-md-regular text-gray-700 text-left inline-block min-w-[101px]">
                Empresa júnior
              </div>
            </div>
          </button>
          <button className="cursor-pointer [border:none] p-0 bg-[transparent] rounded-lg flex flex-row items-start justify-start">
            <div className="shadow-[0px_1px_2px_rgba(16,_24,_40,_0.05)] rounded-lg bg-white overflow-hidden flex flex-row items-center justify-center py-2 px-[15px] gap-[8px] border-[1px] border-solid border-gray-300">
              <Globe04 className="h-5 w-5 relative overflow-hidden shrink-0 min-h-[20px] stroke-[#344054]"/>
              <div className="relative text-sm leading-[20px] font-semibold font-text-md-regular text-gray-700 text-left inline-block min-w-[63px]">
                Extensão
              </div>
            </div>
          </button>
        </div>
      </div>
    </section>
  );
};
