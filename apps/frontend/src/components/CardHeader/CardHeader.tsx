export const CardHeader: React.FC = () => {
  return (
    <div className="self-stretch bg-white flex flex-col items-start justify-center max-w-full text-left text-lg text-gray-900 font-text-md-regular">
      <div className="self-stretch flex flex-row flex-wrap items-center justify-start pt-5 px-4 pb-[19px] box-border gap-[16px] max-w-full">
        <div className="flex-1 flex flex-col items-start justify-start gap-[4px] max-w-full mq800:min-w-full">
          <div className="self-stretch flex flex-row items-center justify-start py-0 pr-[695px] pl-0 gap-[8px] mq800:pr-[173px] mq800:box-border mq1125:flex-wrap mq1125:pr-[347px] mq1125:box-border">
            <h3 className="m-0 relative text-inherit leading-[28px] font-medium font-inherit inline-block min-w-[129px]">
              Oportunidades
            </h3>
            <div className="flex flex-row items-start justify-start mix-blend-multiply text-center text-xs text-brand-700">
              <div className="rounded-2xl bg-brand-50 flex flex-row items-center justify-center py-0.5 px-2 whitespace-nowrap">
                <div className="w-[97px] relative leading-[18px] font-medium inline-block min-w-[97px]">
                  240 cadastradas
                </div>
              </div>
            </div>
          </div>
          <div className="self-stretch relative text-sm leading-[20px] text-gray-600">
            <span>{`Filtre por modalidade, categoria, situação e outras `}</span>
            <i>tags</i>
            <span>.</span>
          </div>
        </div>
        <button className="cursor-pointer [border:none] p-0 bg-[transparent] flex flex-row items-center justify-start gap-[12px]">
          <div className="rounded-lg hidden flex-row items-start justify-start">
            <div className="rounded-lg bg-white shadow-[0px_1px_2px_rgba(16,_24,_40,_0.05)] overflow-hidden flex flex-row items-center justify-center py-2.5 px-[15px] gap-[8px] border-[1px] border-solid border-gray-300">
              <input
                className="m-0 h-5 w-5 relative overflow-hidden shrink-0"
                type="checkbox"
              />
              <div className="relative text-sm leading-[20px] font-semibold font-text-md-regular text-gray-700 text-left">
                Import
              </div>
            </div>
          </div>
          <div className="rounded-lg flex flex-row items-start justify-start">
            <div className="rounded-lg bg-brand-50 shadow-[0px_1px_2px_rgba(16,_24,_40,_0.05)] overflow-hidden flex flex-row items-center justify-center py-2.5 px-[15px] gap-[8px] whitespace-nowrap border-[1px] border-solid border-brand-50">
              <img
                className="h-5 w-5 relative overflow-hidden shrink-0 min-h-[20px]"
                alt=""
                src="/plussquare-1.svg"
              />
              <div className="relative text-sm leading-[20px] font-semibold font-text-md-regular text-brand-700 text-left">
                Cadastrar oportunidade
              </div>
            </div>
          </div>
        </button>
      </div>
    </div>
  );
};