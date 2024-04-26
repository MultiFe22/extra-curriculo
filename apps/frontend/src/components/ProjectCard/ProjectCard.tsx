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
    <section className="mq1920:flex-1 mq768:flex-1 mq375:self-stretch rounded-lg flex flex-col items-center mq375:min-w-[280px] mq768:min-w-[323px] justify-start gap-[24px] mq1920:min-w-[406px] mq768:max-w-full mq1920:max-w-full text-left text-sm text-slateblue font-text-md-regular">
      <img
        className="self-stretch mq768:h-60 mq1920:h-60 mq1920:shrink-0 mq768:shrink-0 relative rounded-lg max-w-full overflow-hidden mq768:max-h-full mq1920:max-w-full object-cover"
        loading="lazy"
        alt=""
        src={image}
      />
      <div className="self-stretch flex flex-col items-start justify-start gap-[24px] mq1920:max-w-full">
        <div className="self-stretch flex flex-col items-start justify-start gap-[12px] mq1920:max-w-full">
          <div className="self-stretch flex flex-col items-start justify-start gap-[12px] mq1920:max-w-full text-5xl text-gray-900">
            {/* review the mq450 flex-wrap later */}
            <div className="self-stretch flex flex-row mq450:flex-wrap items-start justify-start gap-[16px]">
              {/* REVIEW TEXT SIZE WHEN ON MOBILE VIEW */}
              <h1 className="m-0 flex-1 relative text-inherit leading-[32px] font-semibold font-inherit [display:-webkit-inline-box] mq1920:max-w-full overflow-hidden text-ellipsis [-webkit-line-clamp:2] [-webkit-box-orient:vertical] mq768:min-w-[197px] mq1920:min-w-[238px]">
                Observatório de Atenção Permanente ao Uso de Agrotóxicos –
                Portal de Informações Interligadas sobre Agrotóxicos e seus
                Efeitos sobre a Saúde e Meio Ambiente
              </h1>
              <div className="flex flex-col items-start justify-start pt-1 px-0 pb-0">
                <ArrowUpRight className="w-6 h-6 relative overflow-hidden shrink-0" />
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-row flex-wrap items-start justify-start py-0 mq375:pr-[81px] mq768:pr-[78px] pl-0 mq650:pr-[39px] mq1920:pr-[47px] mq650:box-border gap-[10px] min-h-[54px] text-center text-xs text-gray-700">
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