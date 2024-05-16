import Atom01 from "../../assets/Atom01";
import Building07 from "../../assets/Building07";
import Globe04 from "../../assets/Globe04";
import Telescope from "../../assets/Telescope";
import Trophy from "../../assets/Trophy";
import Laptop from "../../assets/Laptop";
import { SvgProps } from "../../assets/svgInterface";
import Percent from "../../assets/Percent";
import Building01 from "../../assets/Building01";

interface BigButtonFilterProps {
  title: string;
  options: string[];
  setSelectedOptions: (
    value: React.SetStateAction<Record<string, boolean>>,
  ) => void;
  selectedOptions: Record<string, boolean>;
}

const IconMap: { [key: string]: React.FC<SvgProps> } = {
  "Equipe de Competição": Trophy,
  "Iniciação Científica": Atom01,
  "Empresa Júnior": Building01,
  Extensão: Globe04,
  Presencial: Building07,
  Remoto: Laptop,
  Híbrido: Percent,
};

export const BigButtonFilter: React.FC<BigButtonFilterProps> = ({
  title,
  options,
  selectedOptions,
  setSelectedOptions,
}) => {
  const calculateMinWidth = (text: string) => {
    // Assuming each character roughly equals 10px
    return `${Math.round(text.length * 6.35)}px`;
  };

  return (
    <section className="self-stretch flex flex-row items-start justify-end py-0 px-6 box-border max-w-full text-left text-xl text-gray-900 font-text-md-regular">
      <div className="flex-1 flex flex-col items-start justify-start gap-[20px] max-w-full">
        <div className="self-stretch flex flex-col items-start justify-start gap-[8px]">
          <h3 className="m-0 self-stretch relative text-inherit leading-[30px] font-semibold font-inherit">
            {title}
          </h3>
        </div>
        <div className="self-stretch flex flex-row flex-wrap items-start justify-start py-0 pr-[27px] pl-0 box-border gap-[16px] ">
          {options.map((option) => {
            const Icon = IconMap[option];
            const isSelected = selectedOptions[option];
            return Icon ? (
              <button
                key={option}
                onClick={() =>
                  setSelectedOptions((prev) => ({
                    ...prev,
                    [option]: !prev[option],
                  }))
                }
                className="cursor-pointer [border:none] p-0 bg-[transparent] rounded-lg flex flex-row items-start justify-start"
              >
                <div
                  className={
                    isSelected
                      ? "shadow-[0px_1px_2px_rgba(16,_24,_40,_0.05)] rounded-lg bg-brand-600 overflow-hidden flex flex-row items-center justify-center py-2 px-[15px] gap-[8px] whitespace-nowrap border-[1px] border-solid border-brand-600"
                      : "shadow-[0px_1px_2px_rgba(16,_24,_40,_0.05)] rounded-lg bg-white overflow-hidden flex flex-row items-center justify-center py-2 px-[15px] gap-[8px] whitespace-nowrap border-[1px] border-solid hover:border-gray-400 border-gray-300"
                  }
                >
                  <Icon
                    className={
                      isSelected
                        ? "h-5 w-5 relative overflow-hidden shrink-0 min-h-[20px] stroke-white"
                        : "h-5 w-5 relative overflow-hidden shrink-0 min-h-[20px] stroke-[#344054]"
                    }
                  />
                  <div
                    className={
                      isSelected
                        ? "relative text-sm leading-[20px] font-semibold font-text-md-regular text-white text-left"
                        : "relative text-sm leading-[20px] font-semibold font-text-md-regular text-gray-700 text-left"
                    }
                    style={{ minWidth: calculateMinWidth(option) }}
                  >
                    {option}
                  </div>
                </div>
              </button>
            ) : (
              <button
                key={option}
                onClick={() =>
                  setSelectedOptions((prev) => ({
                    ...prev,
                    [option]: !prev[option],
                  }))
                }
                className="cursor-pointer [border:none] p-0 bg-[transparent] rounded-lg flex flex-row items-start justify-start"
              >
                <div
                  className={
                    isSelected
                      ? "shadow-[0px_1px_2px_rgba(16,_24,_40,_0.05)] rounded-lg bg-brand-600 overflow-hidden flex flex-row items-center justify-center py-2 px-[15px] gap-[8px] whitespace-nowrap border-[1px] border-solid border-brand-600"
                      : "shadow-[0px_1px_2px_rgba(16,_24,_40,_0.05)] rounded-lg bg-white overflow-hidden flex flex-row items-center justify-center py-2 px-[15px] gap-[8px] whitespace-nowrap border-[1px] border-solid hover:border-gray-400 border-gray-300"
                  }
                >
                  <Telescope
                    className={
                      isSelected
                        ? "h-5 w-5 relative overflow-hidden shrink-0 min-h-[20px] stroke-white"
                        : "h-5 w-5 relative overflow-hidden shrink-0 min-h-[20px] stroke-[#344054]"
                    }
                  />
                  <div
                    className={
                      isSelected
                        ? "relative text-sm leading-[20px] font-semibold font-text-md-regular text-white text-left"
                        : "relative text-sm leading-[20px] font-semibold font-text-md-regular text-gray-700 text-left"
                    }
                    style={{ minWidth: calculateMinWidth(option) }}
                  >
                    {option}
                  </div>
                </div>
              </button>
            );
          })}
        </div>
        <div className="h-px w-full bg-[#EAECF0] flex flex-row items-start justify-start relative max-w-full shrink-0" />
      </div>
    </section>
  );
};
