export const FiltersBar: React.FC = () => {
  return (
    <div className="self-stretch bg-white flex flex-row items-start justify-start max-w-full text-left text-sm text-gray-700 font-text-md-regular">
      <div className="flex-1 rounded-xl flex flex-row items-start justify-between py-3 px-4 box-border max-w-full gap-[20px] mq1125:flex-wrap">
        <div className="rounded-lg shadow-[0px_1px_2px_rgba(16,_24,_40,_0.05)] overflow-x-auto flex flex-row items-start justify-start border-[1px] border-solid border-gray-300">
          <button className="cursor-pointer [border:none] py-2.5 px-[15px] bg-gray-50 w-[97px] box-border shrink-0 flex flex-row items-start justify-start whitespace-nowrap border-r-[1px] border-solid border-gray-300 hover:bg-gainsboro-200">
            <div className="relative text-sm leading-[20px] font-medium font-text-md-regular text-gray-800 text-left inline-block min-w-[65px]">
              Ver todos
            </div>
          </button>
          <button className="cursor-pointer [border:none] py-2.5 px-[15px] bg-white w-[75px] box-border shrink-0 flex flex-row items-start justify-start border-r-[1px] border-solid border-gray-300 hover:bg-gainsboro-100">
            <div className="relative text-sm leading-[20px] font-semibold font-text-md-regular text-gray-700 text-left inline-block min-w-[43px]">
              Ativos
            </div>
          </button>
          <div className="self-stretch bg-white hidden flex-row items-center justify-center py-2.5 px-[15px] border-r-[1px] border-solid border-gray-300">
            <div className="self-stretch relative leading-[20px] font-semibold">
              Text
            </div>
          </div>
          <div className="self-stretch bg-white hidden flex-row items-center justify-center py-2.5 px-[15px] border-r-[1px] border-solid border-gray-300">
            <div className="self-stretch relative leading-[20px] font-semibold">
              Text
            </div>
          </div>
          <div className="self-stretch bg-white hidden flex-row items-center justify-center py-2.5 px-[15px] border-r-[1px] border-solid border-gray-300">
            <div className="self-stretch relative leading-[20px] font-semibold">
              Text
            </div>
          </div>
          <div className="self-stretch bg-white hidden flex-row items-center justify-center py-2.5 px-[15px] border-r-[1px] border-solid border-gray-300">
            <div className="self-stretch relative leading-[20px] font-semibold">
              Text
            </div>
          </div>
          <div className="self-stretch bg-white hidden flex-row items-center justify-center py-2.5 px-[15px] border-r-[1px] border-solid border-gray-300">
            <div className="self-stretch relative leading-[20px] font-semibold">
              Text
            </div>
          </div>
          <div className="self-stretch bg-white hidden flex-row items-center justify-center py-2.5 px-[15px] border-r-[1px] border-solid border-gray-300">
            <div className="self-stretch relative leading-[20px] font-semibold">
              Text
            </div>
          </div>
          <button className="cursor-pointer [border:none] py-2.5 px-[15px] bg-white w-[86px] box-border shrink-0 flex flex-row items-start justify-start border-r-[1px] border-solid border-gray-300 hover:bg-gainsboro-100">
            <div className="relative text-sm leading-[20px] font-semibold font-text-md-regular text-gray-700 text-left inline-block min-w-[54px]">
              Inativos
            </div>
          </button>
        </div>
        <div className="w-[515px] flex flex-row items-start justify-start gap-[12px] max-w-full mq800:flex-wrap">
          <div className="flex-1 flex flex-row items-start justify-start max-w-full">
            <div className="flex-1 flex flex-col items-start justify-start max-w-full">
              <div className="self-stretch flex flex-col items-start justify-start max-w-full">
                <div className="self-stretch rounded-lg bg-white shadow-[0px_1px_2px_rgba(16,_24,_40,_0.05)] box-border flex flex-row items-center justify-start py-2.5 px-[13px] max-w-full border-[1px] border-solid border-gray-300">
                  <div className="flex-1 flex flex-row items-center justify-start py-0 pr-[292px] pl-0 box-border gap-[8px] max-w-full mq450:pr-5 mq450:box-border">
                    <img
                      className="h-5 w-5 relative overflow-hidden shrink-0"
                      alt=""
                      src="/search.svg"
                    />
                    <input
                      className="w-[calc(100%_-_312px)] [border:none] [outline:none] font-text-md-regular text-base bg-[transparent] h-6 flex-1 relative leading-[24px] text-gray-500 text-left inline-block min-w-[31px] p-0"
                      placeholder="Buscar"
                      type="text"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-start justify-start pt-0.5 px-0 pb-0">
            <button className="cursor-pointer [border:none] p-0 bg-[transparent] rounded-lg flex flex-row items-start justify-start">
              <div className="rounded-lg bg-white shadow-[0px_1px_2px_rgba(16,_24,_40,_0.05)] overflow-hidden flex flex-row items-start justify-start py-2.5 px-[15px] gap-[8px] border-[1px] border-solid border-gray-300">
                <img
                  className="h-5 w-5 relative overflow-hidden shrink-0 min-h-[20px]"
                  alt=""
                  src="/filters-lines.svg"
                />
                <div className="relative text-sm leading-[20px] font-semibold font-text-md-regular text-gray-700 text-left inline-block min-w-[43px]">
                  Filtros
                </div>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};