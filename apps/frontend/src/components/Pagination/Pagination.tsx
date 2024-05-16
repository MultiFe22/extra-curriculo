import ArrowLeft from "../../assets/ArrowLeft";
import ArrowRight from "../../assets/ArrowRight";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {
  const siblingCount = 1;
  const totalPageNumbers = siblingCount + 5;

  const range = (start: number, end: number) => {
    const length = end - start + 1;
    return Array.from({ length }, (_, idx) => idx + start);
  };

  const paginationRange = () => {
    // const totalBlocks = totalPageNumbers - 2; // Total blocks when ellipses are present

    if (totalPages > totalPageNumbers) {
      const startPages = range(0, Math.min(1, totalPages - 1));
      const endPages = range(Math.max(totalPages - 2, 2), totalPages - 1);

      const hasLeftSpill = currentPage > 2;
      const hasRightSpill = currentPage < totalPages - 3;

      const middleRangeStart = Math.max(2, currentPage - siblingCount);
      const middleRangeEnd = Math.min(
        currentPage + siblingCount,
        totalPages - 2,
      );

      let currentPageRange: (number | string)[];

      if (hasLeftSpill && !hasRightSpill) {
        currentPageRange = [
          ...startPages,
          "...",
          ...range(middleRangeStart, totalPages - 1),
        ];
      } else if (!hasLeftSpill && hasRightSpill) {
        currentPageRange = [...range(0, middleRangeEnd), "...", ...endPages];
      } else if (hasLeftSpill && hasRightSpill) {
        currentPageRange = [
          ...startPages,
          "...",
          ...range(middleRangeStart, middleRangeEnd),
          "...",
          ...endPages,
        ];
      } else {
        currentPageRange = range(0, totalPages - 1);
      }

      return currentPageRange;
    }

    return range(0, totalPages - 1);
  };

  const handleClick = (page: number | string) => {
    if (page !== "..." && typeof page === "number") {
      onPageChange(page);
    }
  };

  return (
    <div className="self-stretch mq1920:overflow-x-auto flex flex-row items-start mq768:justify-start mq1920:justify-between mq1920:pt-5 mq1920:pb-0 mq768:pt-0 px-0 mq768:pb-10 mq1920:gap-[20px] mq1920:shrink-0 mq768:box-border mq768:max-w-full mq768:text-left mq1920:text-center mq1920:border-t-[1px] mq1920:border-solid text-sm mq768:text-gray-700 mq1920:text-gray-500 font-text-md-regular mq1920:border-gray-200">
      <div className="mq768:flex-1 flex flex-col items-start justify-start mq768:py-0 mq768:px-4 mq1920:px-0 mq1920:pt-0.5 mq768:box-border mq768:max-w-full">
        <div className="mq1920:hidden self-stretch flex flex-row items-center justify-between pt-2.5 px-4 pb-3 gap-[20px] border-t-[1px] border-solid border-gray-200">
          <button
            className="rounded-lg flex flex-row items-start justify-start"
            disabled={currentPage === 0}
            onClick={() => onPageChange(currentPage - 1)}
          >
            <div className="w-9 rounded-lg bg-white shadow-[0px_1px_2px_rgba(16,_24,_40,_0.05)] box-border overflow-hidden shrink-0 flex flex-row items-center justify-center py-1.5 px-[7px] border-[1px] border-solid border-gray-200">
              <ArrowLeft className="h-5 w-5 relative overflow-hidden shrink-0" />
            </div>
          </button>
          <div className="relative leading-[20px] inline-block min-w-[96px]">
            <span>{`Página `}</span>
            <span className="font-medium">{currentPage + 1}</span>
            <span>{` de `}</span>
            <span className="font-medium">{totalPages}</span>
          </div>
          <button
            className="rounded-lg flex flex-row items-start justify-start"
            disabled={currentPage === totalPages - 1}
            onClick={() => onPageChange(currentPage + 1)}
          >
            <div className="w-9 rounded-lg bg-white shadow-[0px_1px_2px_rgba(16,_24,_40,_0.05)] box-border overflow-hidden shrink-0 flex flex-row items-center justify-center py-1.5 px-[7px] border-[1px] border-solid border-gray-300">
              <ArrowRight className="h-5 w-5 relative overflow-hidden shrink-0" />
            </div>
          </button>
        </div>
        <button
          className="mq768:hidden cursor-pointer [border:none] p-0 bg-[transparent] rounded-lg flex flex-row items-start justify-start"
          disabled={currentPage === 0}
          onClick={() => onPageChange(currentPage - 1)}
        >
          <div className="shadow-[0px_1px_2px_rgba(16,_24,_40,_0.05)] rounded-lg bg-white overflow-hidden flex flex-row items-start justify-start py-1.5 px-[13px] gap-[8px] border-[1px] border-solid border-gray-200">
            <ArrowLeft className="h-5 w-5 relative overflow-hidden shrink-0 min-h-[20px]" />
            <div className="relative text-sm leading-[20px] font-semibold font-text-md-regular text-gray-700 text-left inline-block min-w-[56px]">
              Anterior
            </div>
          </div>
        </button>
      </div>
      <div className="mq768:hidden flex flex-row items-start justify-start gap-2">
        {paginationRange().map((page, index) => (
          <div
            key={index}
            className={`rounded-lg ${currentPage === page ? "bg-brand-50" : ""} overflow-hidden flex flex-row items-start justify-start cursor-pointer`}
            onClick={() => handleClick(page)}
          >
            <div className="py-2.5 px-3.5">
              <div className="font-medium">
                {typeof page === "number" ? page + 1 : page}
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="mq768:hidden flex flex-col items-start justify-start pt-0.5 px-0 pb-0">
        <button
          className="cursor-pointer [border:none] p-0 bg-[transparent] rounded-lg flex flex-row items-start justify-start"
          disabled={currentPage === totalPages - 1}
          onClick={() => onPageChange(currentPage + 1)}
        >
          <div className="shadow-[0px_1px_2px_rgba(16,_24,_40,_0.05)] rounded-lg bg-white overflow-hidden flex flex-row items-start justify-start py-1.5 px-[13px] gap-[8px] border-[1px] border-solid border-gray-300">
            <div className="relative text-sm leading-[20px] font-semibold font-text-md-regular text-gray-700 text-left inline-block min-w-[56px]">
              Próximo
            </div>
            <ArrowRight className="h-5 w-5 relative overflow-hidden shrink-0 min-h-[20px]" />
          </div>
        </button>
      </div>
    </div>
  );
};
