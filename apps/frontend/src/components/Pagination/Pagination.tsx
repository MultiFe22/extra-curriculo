export const Pagination: React.FC = () => {
  return (
    <div className="self-stretch bg-white overflow-x-auto flex flex-row items-start justify-between pt-3 px-4 pb-4 gap-[20px] text-center text-sm text-gray-500 font-text-md-regular">
      <div className="flex flex-col items-start justify-start pt-0.5 px-0 pb-0">
        <button className="cursor-pointer [border:none] p-0 bg-[transparent] rounded-lg flex flex-row items-start justify-start">
          <div className="rounded-lg bg-white shadow-[0px_1px_2px_rgba(16,_24,_40,_0.05)] overflow-hidden flex flex-row items-start justify-start py-2 px-[13px] gap-[8px] border-[1px] border-solid border-gray-200">
            <img
              className="h-5 w-5 relative overflow-hidden shrink-0 min-h-[20px]"
              alt=""
              src="/arrowleft.svg"
            />
            <div className="relative text-sm leading-[20px] font-semibold font-text-md-regular text-gray-300 text-left inline-block min-w-[56px]">
              Anterior
            </div>
          </div>
        </button>
      </div>
      <div className="flex flex-row items-start justify-start gap-[2px]">
        <div className="rounded-lg bg-brand-50 overflow-hidden flex flex-row items-start justify-start text-brand-600">
          <div className="rounded-lg flex flex-row items-start justify-start py-2.5 px-[16.5px]">
            <div className="w-[7px] relative leading-[20px] font-medium inline-block min-w-[7px]">
              1
            </div>
          </div>
        </div>
        <div className="rounded-lg overflow-hidden flex flex-row items-start justify-start">
          <div className="rounded-lg flex flex-row items-start justify-start py-2.5 px-[15.5px]">
            <div className="w-[9px] relative leading-[20px] font-medium inline-block min-w-[9px]">
              2
            </div>
          </div>
        </div>
        <div className="rounded-lg overflow-hidden flex flex-row items-start justify-start">
          <div className="rounded-lg flex flex-row items-start justify-start py-2.5 px-[15px]">
            <div className="w-2.5 relative leading-[20px] font-medium inline-block min-w-[10px]">
              3
            </div>
          </div>
        </div>
        <div className="rounded-lg overflow-hidden flex flex-row items-start justify-start">
          <div className="rounded-lg flex flex-row items-start justify-start py-2.5 px-3.5">
            <div className="w-3 relative leading-[20px] font-medium inline-block min-w-[12px]">
              ...
            </div>
          </div>
        </div>
        <div className="rounded-lg overflow-hidden flex flex-row items-start justify-start">
          <div className="rounded-lg flex flex-row items-start justify-start py-2.5 px-[15.5px]">
            <div className="w-[9px] relative leading-[20px] font-medium inline-block min-w-[9px]">
              8
            </div>
          </div>
        </div>
        <div className="rounded-lg overflow-hidden flex flex-row items-start justify-start">
          <div className="rounded-lg flex flex-row items-start justify-start py-2.5 px-[15.5px]">
            <div className="w-[9px] relative leading-[20px] font-medium inline-block min-w-[9px]">
              9
            </div>
          </div>
        </div>
        <div className="rounded-lg overflow-hidden flex flex-row items-start justify-start">
          <div className="rounded-lg flex flex-row items-start justify-start py-2.5 px-3">
            <div className="w-4 relative leading-[20px] font-medium inline-block min-w-[16px]">
              10
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-start justify-start pt-0.5 px-0 pb-0">
        <button className="cursor-pointer [border:none] p-0 bg-[transparent] rounded-lg flex flex-row items-start justify-start">
          <div className="rounded-lg bg-white shadow-[0px_1px_2px_rgba(16,_24,_40,_0.05)] overflow-hidden flex flex-row items-start justify-start py-2 px-[13px] gap-[8px] border-[1px] border-solid border-gray-300">
            <div className="relative text-sm leading-[20px] font-semibold font-text-md-regular text-gray-700 text-left inline-block min-w-[56px]">
              Próximo
            </div>
            <img
              className="h-5 w-5 relative overflow-hidden shrink-0 min-h-[20px]"
              alt=""
              src="/arrowright.svg"
            />
          </div>
        </button>
      </div>
    </div>
  );
};