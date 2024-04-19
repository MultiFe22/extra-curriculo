import AlertCircle from "../../assets/AlertCircle";
import ArrowUpRight from "../../assets/ArrowUpRight";
import Atom01 from "../../assets/Atom01";
import Building07 from "../../assets/Building07";
import Globe04 from "../../assets/Globe04";
import Telescope from "../../assets/Telescope";

export type ProjectCardType = {
  image?: string;
};

export const ProjectCard: React.FC<ProjectCardType> = ({ image }) => {
  return (
    <section className="self-stretch rounded-lg flex flex-col items-center justify-start gap-[24px] min-w-[280px] text-left text-sm text-slateblue font-text-md-regular">
      <img
        className="self-stretch relative rounded-lg max-w-full overflow-hidden max-h-full object-cover"
        loading="lazy"
        alt=""
        src={image}
      />
      <div className="self-stretch flex flex-col items-start justify-start gap-[24px]">
        <div className="self-stretch flex flex-col items-start justify-start gap-[12px]">
          <div className="self-stretch h-5 relative leading-[20px] font-semibold hidden">
            Design
          </div>
          <div className="self-stretch flex flex-col items-start justify-start gap-[12px] text-5xl text-gray-900">
            <div className="self-stretch flex flex-row flex-wrap items-start justify-start gap-[16px]">
              <h1 className="m-0 flex-1 relative text-inherit leading-[32px] font-semibold font-inherit [display:-webkit-inline-box] overflow-hidden text-ellipsis [-webkit-line-clamp:2] [-webkit-box-orient:vertical] min-w-[197px]">
                Observatório de Atenção Permanente ao Uso de Agrotóxicos –
                Portal de Informações Interligadas sobre Agrotóxicos e seus
                Efeitos sobre a Saúde e Meio Ambiente
              </h1>
              <div className="flex flex-col items-start justify-start pt-1 px-0 pb-0">
                <ArrowUpRight className="w-6 h-6 relative overflow-hidden shrink-0" />
              </div>
            </div>
            <div className="self-stretch h-12 relative text-base leading-[24px] text-gray-600 hidden">
              Collaboration can make our teams stronger, and our individual
              designs better.
            </div>
          </div>
          <div className="self-stretch flex flex-row flex-wrap items-start justify-start py-0 pr-[81px] pl-0 box-border gap-[10px] min-h-[54px] text-center text-xs text-gray-700">
            <button className="cursor-pointer [border:none] p-0 bg-[transparent] flex flex-row items-start justify-start mix-blend-multiply">
              <div className="rounded-2xl bg-blue-light-50 flex flex-row items-center justify-center py-0.5 pr-2 pl-1.5 gap-[4px]">
                <Building07 className="h-3 w-3 relative overflow-hidden shrink-0" />
                <div className="relative text-xs leading-[18px] font-medium font-text-md-regular text-blue-light-700 text-center inline-block min-w-[60px]">
                  Presencial
                </div>
              </div>
            </button>
            <button className="cursor-pointer [border:none] p-0 bg-[transparent] flex flex-row items-start justify-start mix-blend-multiply">
              <div className="rounded-2xl bg-pink-50 flex flex-row items-center justify-center py-0.5 pr-2 pl-1.5 gap-[4px]">
                <Atom01 className="h-3 w-3 relative overflow-hidden shrink-0" />
                <div className="relative text-xs leading-[18px] font-medium font-text-md-regular text-pink-700 text-center inline-block min-w-[53px]">
                  Extensão
                </div>
              </div>
            </button>
            <button className="cursor-pointer [border:none] p-0 bg-[transparent] flex flex-row items-start justify-start mix-blend-multiply">
              <div className="rounded-2xl bg-orange-50 flex flex-row items-center justify-center py-0.5 pr-2 pl-1.5 gap-[4px]">
                <AlertCircle className="h-3 w-3 relative overflow-hidden shrink-0" />
                <div className="relative text-xs leading-[18px] font-medium font-text-md-regular text-orange-700 text-center inline-block min-w-[39px]">
                  Inativo
                </div>
              </div>
            </button>
            <button className="cursor-pointer [border:none] p-0 bg-[transparent] flex flex-row items-start justify-start mix-blend-multiply">
              <div className="rounded-2xl bg-purple-50 flex flex-row items-center justify-center py-0.5 pr-2 pl-1.5 gap-[4px]">
                <Globe04 className="h-3 w-3 relative overflow-hidden shrink-0" />
                <div className="relative text-xs leading-[18px] font-medium font-text-md-regular text-purple-700 text-center inline-block min-w-[57px]">
                  Geografia
                </div>
              </div>
            </button>
            <button className="cursor-pointer [border:none] p-0 bg-[transparent] flex flex-row items-start justify-start mix-blend-multiply">
              <div className="rounded-2xl bg-blue-gray-50 flex flex-row items-center justify-center py-0.5 pr-2 pl-1.5 gap-[4px]">
                <Telescope className="h-3 w-3 relative overflow-hidden shrink-0" />
                <div className="relative text-xs leading-[18px] font-medium font-text-md-regular text-blue-gray-700 text-center inline-block min-w-[66px]">
                  Astronomia
                </div>
              </div>
            </button>
            <div className="hidden flex-row items-start justify-start mix-blend-multiply">
              <div className="rounded-2xl bg-gray-100 flex flex-row items-center justify-center py-0.5 px-2">
                <div className="relative leading-[18px] font-medium">Label</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};