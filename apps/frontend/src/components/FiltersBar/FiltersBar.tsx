import { useEffect, useState } from "react";
import FiltersLines from "../../assets/FiltersLines";
import PlusSquare from "../../assets/PlusSquare";
import SearchIcon from "../../assets/SearchIcon";
// import XIcon from "../../assets/XIcon";

export const FiltersBar: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(searchTerm);
  }

  return (
    <div className="self-stretch mq1920:h-[68px] mq1920:rounded-xl flex mq1920:flex-col mq768:flex-row items-start justify-start mq1920:py-3 mq1920:px-0 mq768:py-0 mq375:px-4 mq768:px-8 box-border max-w-full mq1920:gap-[12px] mq768:text-center mq768:text-sm text-slateblue font-text-md-regular">
      <div className="mq1920:self-stretch mq768:flex-1 flex mq1920:flex-row mq768:flex-col items-start mq1920:justify-between mq768:justify-start mq768:gap-[12px] mq1920:gap-[20px] max-w-full">
        <div className="mq1920:w-[515px] mq768:flex-1 flex mq1920:flex-row mq1920:items-start mq768:flex-col mq1920:justify-start gap-[12px] mq768:self-stretch max-w-full mq1920:flex-wrap">

          <div className="mq768:self-stretch mq1920:flex-1 flex flex-row items-start justify-start max-w-full">
            <div className="flex-1 flex flex-col items-start justify-start max-w-full">
              <div className="self-stretch flex flex-col items-start justify-start">
                <div className="self-stretch rounded-lg bg-white shadow-[0px_1px_2px_rgba(16,_24,_40,_0.05)] flex flex-row items-center justify-start py-2 px-[13px] border-[1px] border-solid border-gray-300">
                  <form onSubmit={handleSubmit} className="mq768:flex-grow mq1920:flex-1 flex flex-row items-center justify-start mq1920:box-border py-0 pl-0 gap-[8px] mq1920:max-w-full">
                    <button
                        type="submit"
                        className="flex items-center justify-center h-5 w-5 bg-transparent border-none outline-none cursor-pointer p-0"
                        style={{ margin: '0', padding: '0', border: 'none' }} // Adjusted styling
                        aria-label="Submit search"
                    >
                        <SearchIcon className="h-5 w-5 relative overflow-hidden shrink-0" />
                    </button>                      
                    <input
                        className="mq768:w-[calc(100%_-_255px)] mq1920:w-[calc(100%_-_312px)] [border:none] [outline:none] font-text-md-regular text-base bg-[transparent] h-6 flex-1 relative leading-[24px] text-gray-500 text-left inline-block min-w-[31px] p-0"
                        placeholder="Buscar"
                        type="text"
                        value={searchTerm}
                        onChange={handleInputChange}
                      />
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div className="mq768:flex-1 flex mq768:flex-col mq768:self-stretch mq768:max-w-full mq1920:flex-col mq1920:items-start mq1920:justify-start mq1920:pt-0.5 mq1920:px-0 mq1920:pb-0">
            <button className="cursor-pointer [border:none] p-0 bg-[transparent] mq768:self-stretch rounded-lg flex flex-row items-start justify-start mq768:max-w-full">
              <div className="mq768:flex-1 rounded-lg bg-white shadow-[0px_1px_2px_rgba(16,_24,_40,_0.05)] mq768:box-border overflow-hidden flex flex-row items-start justify-center py-2 mq768:px-5 mq1920:px-[15px] gap-[8px] mq768:whitespace-nowrap mq768:max-w-full border-[1px] border-solid border-gray-300">
                <FiltersLines className="h-5 w-5 relative overflow-hidden shrink-0 min-h-[20px]" />
                <div className="relative text-sm leading-[20px] font-semibold font-text-md-regular text-gray-700 text-left inline-block mq768:min-w-[83px] mq1920:min-w-[43px]">
                  Filtros {/* deal with that using useEffect later*/}
                </div>
              </div>
            </button>
          </div>

        </div>
      
        <button className="cursor-pointer mq768:self-stretch rounded-lg flex flex-row items-start justify-start text-slateblue">
          <div className="mq768:flex-1 shadow-[0px_1px_2px_rgba(16,_24,_40,_0.05)] rounded-lg bg-brand-50 overflow-hidden flex flex-row items-center justify-center mq768:py-2.5 mq768:px-4 mq1920:py-2 mq1920:px-[15px] mq1920:whitespace-nowrap gap-[8px] border-[1px] border-solid border-brand-50">
            <PlusSquare className="w-5 relative h-5 overflow-hidden shrink-0 mq1920: min-h-[20px]"/>
            <div className="relative leading-[20px] mq1920:text-sm font-semibold mq1920:font-text-md-regular mq1920:text-left">
              Cadastrar oportunidade
            </div>
          </div>
        </button>
        <div className="mq1920:hidden h-[1px] bg-gray-200 w-full"></div>

      </div>
      <div className="mq768:hidden self-stretch h-px relative bg-gray-200 shrink-0" />

    </div>
  );
};