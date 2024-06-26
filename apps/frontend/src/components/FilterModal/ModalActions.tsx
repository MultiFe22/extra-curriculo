interface ModalActionsProps {
  clearAllFilters: () => void;
  handleOpenClose: (action: boolean, apply: boolean) => void;
}

export const ModalActions: React.FC<ModalActionsProps> = ({
  clearAllFilters,
  handleOpenClose,
}) => {
  const handleRemoveFilters = () => {
    clearAllFilters(); // this is triggering the filters and it only closes the modal through the useEffect
  };

  const handleApplyFilters = () => {
    handleOpenClose(false, true);
  };

  return (
    <section className="sticky bottom-[0] self-stretch bg-white flex flex-col items-center justify-start pt-0 px-6 pb-6 box-border gap-[24px] max-w-full z-[99]">
      <div className="h-px w-[calc(100%+3rem)] bg-[#EAECF0] flex flex-row items-start justify-start relative max-w-screen shrink-0" />
      <div className="self-stretch flex flex-col items-start justify-start gap-[12px] max-w-full">
        <div className="buttons-container self-stretch flex flex-col items-start justify-start gap-[12px] max-w-full mq1920:flex-row mq1920:justify-between">
          <button
            onClick={handleApplyFilters}
            className="cursor-pointer [border:none] p-0 bg-[transparent] self-stretch rounded-lg flex flex-row items-start justify-start max-w-full mq1920:order-2"
          >
            <div className="flex-1 shadow-[0px_1px_2px_rgba(16,_24,_40,_0.05)] rounded-lg bg-brand-600 box-border overflow-hidden flex flex-row items-center justify-center py-2 px-5 whitespace-nowrap max-w-full border-[1px] border-solid border-brand-600">
              <div className="relative text-base leading-[24px] font-semibold font-text-md-regular text-white text-left inline-block min-w-[104px]">
                Aplicar filtros
              </div>
            </div>
          </button>
          <button
            onClick={handleRemoveFilters}
            className="cursor-pointer [border:none] p-0 bg-[transparent] self-stretch rounded-lg flex flex-row items-start justify-start max-w-full mq1920:order-1 "
          >
            <div className="flex-1 shadow-[0px_1px_2px_rgba(16,_24,_40,_0.05)] rounded-lg bg-white box-border overflow-hidden flex flex-row items-center justify-center py-2 px-5 whitespace-nowrap max-w-full border-[1px] border-solid border-gray-300">
              <div className="relative text-base leading-[24px] font-semibold font-text-md-regular text-gray-700 text-left inline-block min-w-[118px]">
                Remover filtros
              </div>
            </div>
          </button>
        </div>
      </div>
    </section>
  );
};
