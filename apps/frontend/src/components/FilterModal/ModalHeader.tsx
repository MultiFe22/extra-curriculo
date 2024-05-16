import XIcon from "../../assets/XIcon";

interface ModalHeaderProps {
  handleOpenClose: (action: boolean, apply: boolean) => void;
}

export const ModalHeader: React.FC<ModalHeaderProps> = ({
  handleOpenClose,
}) => {
  return (
    <header className="sticky top-[0] -mt-6 pt-6 self-stretch bg-white flex flex-col items-start justify-start py-0 pr-0 pl-6 box-border gap-[24px] max-w-full text-center text-5xl text-gray-900 font-text-md-regular z-[99]">
      <div className="w-full flex flex-row items-start justify-between py-0 pr-5 pl-0 box-border gap-[20px]">
        <button
          onClick={() => handleOpenClose(false, false)}
          className="cursor-pointer rounded-lg bg-white flex flex-row items-start justify-start"
        >
          <div className="rounded-lg overflow-hidden flex flex-row items-center justify-center p-2">
            <XIcon className="h-5 w-5 relative overflow-hidden shrink-0" />
          </div>
        </button>
        <div className="flex flex-col items-start justify-start pt-0.5 px-0 pb-0">
          <h2 className="m-0 relative text-inherit leading-[32px] font-semibold font-inherit inline-block min-w-[73px]">
            Filtros
          </h2>
        </div>
        <div style={{ width: 40 }}></div>{" "}
        {/* Placeholder for keeping the header balanced */}
      </div>
      <div className="h-px bg-[#EAECF0] w-[calc(100%+1.5rem)] -ml-6 flex flex-row items-start justify-start relative max-w-screen shrink-0" />
    </header>
  );
};
