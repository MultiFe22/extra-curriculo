import FiltersLines from "../../assets/FiltersLines";
import SearchIcon from "../../assets/SearchIcon";
import XIcon from "../../assets/XIcon";

export const FiltersBar: React.FC = () => {
  return (
    <div className="self-stretch flex flex-row items-start justify-start py-0 px-4 box-border max-w-full text-center text-sm text-slateblue font-text-md-regular">
      <div className="flex-1 flex flex-col items-start justify-start gap-[12px] max-w-full">
        <div className="self-stretch flex flex-row items-start justify-start max-w-full">
          <div className="flex-1 flex flex-col items-start justify-start max-w-full">
            <div className="self-stretch flex flex-col items-start justify-start">
              <div className="self-stretch rounded-lg bg-white shadow-[0px_1px_2px_rgba(16,_24,_40,_0.05)] flex flex-row items-center justify-start py-2 px-[13px] border-[1px] border-solid border-gray-300">
                <div className="flex-1 flex flex-row items-center justify-start py-0 pr-[235px] pl-0 gap-[8px]">
                  <SearchIcon className="h-5 w-5 relative overflow-hidden shrink-0"/>
                  <input
                    className="w-[calc(100%_-_255px)] [border:none] [outline:none] font-text-md-regular text-base bg-[transparent] h-6 flex-1 relative leading-[24px] text-gray-500 text-left inline-block min-w-[31px] p-0"
                    placeholder="Buscar"
                    type="text"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <button className="cursor-pointer [border:none] p-0 bg-[transparent] self-stretch rounded-lg flex flex-row items-start justify-start max-w-full">
          <div className="flex-1 rounded-lg bg-white shadow-[0px_1px_2px_rgba(16,_24,_40,_0.05)] box-border overflow-hidden flex flex-row items-start justify-center py-2 px-5 gap-[8px] whitespace-nowrap max-w-full border-[1px] border-solid border-gray-300">
            <FiltersLines className="h-5 w-5 relative overflow-hidden shrink-0 min-h-[20px]" />
            <div className="relative text-sm leading-[20px] font-semibold font-text-md-regular text-gray-700 text-left inline-block min-w-[83px]">
              Editar filtros
            </div>
          </div>
        </button>
        <div className="self-stretch flex flex-row items-start justify-start py-0 pr-[140px] pl-0 gap-[12px]">
          <button className="cursor-pointer [border:none] p-0 bg-[transparent] flex flex-row items-start justify-start mix-blend-multiply">
            <div className="rounded-2xl bg-brand-50 flex flex-row items-center justify-center py-0.5 pr-2 pl-2.5 gap-[4px] whitespace-nowrap">
              <div className="relative text-sm leading-[20px] font-medium font-text-md-regular text-slateblue text-center inline-block min-w-[50px]">
                All time
              </div>
              <XIcon className="h-3 w-3 relative overflow-hidden shrink-0"/>
            </div>
          </button>
          <div className="flex flex-row items-start justify-start mix-blend-multiply">
            <div className="rounded-2xl bg-brand-50 flex flex-row items-center justify-center py-0.5 pr-2 pl-2.5 gap-[4px] whitespace-nowrap">
              <div className="relative leading-[20px] font-medium inline-block min-w-[73px]">
                US, AU, +4
              </div>
              <XIcon className="h-3 w-3 relative overflow-hidden shrink-0"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};