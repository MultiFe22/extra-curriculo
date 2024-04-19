import ArrowLeft from "../../assets/ArrowLeft";
import ArrowRight from "../../assets/ArrowRight";

export const Pagination: React.FC = () => {
  return (
    <div className="self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-10 box-border max-w-full text-left text-sm text-gray-700 font-text-md-regular">
      <div className="flex-1 flex flex-col items-start justify-start py-0 px-4 box-border max-w-full">
        <div className="self-stretch flex flex-row items-center justify-between pt-2.5 px-4 pb-3 gap-[20px] border-t-[1px] border-solid border-gray-200">
          <div className="rounded-lg flex flex-row items-start justify-start">
            <div className="w-9 rounded-lg bg-white shadow-[0px_1px_2px_rgba(16,_24,_40,_0.05)] box-border overflow-hidden shrink-0 flex flex-row items-center justify-center py-1.5 px-[7px] border-[1px] border-solid border-gray-200">
              <ArrowLeft className="h-5 w-5 relative overflow-hidden shrink-0"/>
            </div>
          </div>
          <div className="relative leading-[20px] inline-block min-w-[96px]">
            <span>{`Página `}</span>
            <span className="font-medium">1</span>
            <span>{` de `}</span>
            <span className="font-medium">10</span>
          </div>
          <div className="rounded-lg flex flex-row items-start justify-start">
            <div className="w-9 rounded-lg bg-white shadow-[0px_1px_2px_rgba(16,_24,_40,_0.05)] box-border overflow-hidden shrink-0 flex flex-row items-center justify-center py-1.5 px-[7px] border-[1px] border-solid border-gray-300">
              <ArrowRight className="h-5 w-5 relative overflow-hidden shrink-0"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};