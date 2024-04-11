export type ProjectCardType = {
  image?: string;
};

export const ProjectCard: React.FC<ProjectCardType> = ({ image }) => {
  return (
    <div className="w-96 rounded-lg bg-white shadow-[0px_12px_16px_-4px_rgba(16,_24,_40,_0.08),_0px_4px_6px_-2px_rgba(16,_24,_40,_0.03)] flex flex-col items-start justify-start pt-6 px-6 pb-8 box-border gap-[32px] max-w-full text-left text-sm text-brand-700 font-text-md-regular mq450:gap-[16px] mq450:pt-5 mq450:pb-[21px] mq450:box-border">
      <img
        className="self-stretch h-60 relative max-w-full overflow-hidden shrink-0 object-cover"
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
            <div className="self-stretch flex flex-row items-start justify-start gap-[16px] mq450:flex-wrap">
              <h1 className="m-0 flex-1 relative text-inherit leading-[32px] font-semibold font-inherit [display:-webkit-inline-box] overflow-hidden text-ellipsis [-webkit-line-clamp:2] [-webkit-box-orient:vertical] min-w-[192px] mq450:text-lgi mq450:leading-[26px]">
                Observatório de Atenção Permanente ao Uso de Agrotóxicos –
                Portal de Informações Interligadas sobre Agrotóxicos e seus
                Efeitos sobre a Saúde e Meio Ambiente
              </h1>
              <div className="flex flex-col items-start justify-start pt-1 px-0 pb-0">
                <img
                  className="w-6 h-6 relative overflow-hidden shrink-0"
                  loading="lazy"
                  alt=""
                  src="/arrowupright.svg"
                />
              </div>
            </div>
            <div className="self-stretch h-12 relative text-base leading-[24px] text-gray-600 hidden">
              Collaboration can make our teams stronger, and our individual
              designs better.
            </div>
          </div>
          <div className="self-stretch flex flex-row flex-wrap items-start justify-start py-0 pr-[74px] pl-0 box-border gap-[10px] min-h-[54px] text-center text-xs text-gray-700 mq800:pr-[37px] mq800:box-border">
            <button className="cursor-pointer [border:none] p-0 bg-[transparent] w-[90px] flex flex-row items-start justify-start mix-blend-multiply">
              <div className="flex-1 rounded-2xl bg-blue-light-50 flex flex-row items-center justify-center py-0.5 pr-2 pl-1.5 gap-[4px]">
                <img
                  className="h-3 w-3 relative overflow-hidden shrink-0"
                  alt=""
                  src="/building07.svg"
                />
                <div className="flex-1 relative text-xs leading-[18px] font-medium font-text-md-regular text-blue-light-700 text-center inline-block min-w-[60px]">
                  Presencial
                </div>
              </div>
            </button>
            <button className="cursor-pointer [border:none] p-0 bg-[transparent] w-[83px] flex flex-row items-start justify-start mix-blend-multiply">
              <div className="flex-1 rounded-2xl bg-pink-50 flex flex-row items-center justify-center py-0.5 pr-2 pl-1.5 gap-[4px]">
                <img
                  className="h-3 w-3 relative overflow-hidden shrink-0"
                  alt=""
                  src="/atom01.svg"
                />
                <div className="flex-1 relative text-xs leading-[18px] font-medium font-text-md-regular text-pink-700 text-center inline-block min-w-[53px]">
                  Extensão
                </div>
              </div>
            </button>
            <button className="cursor-pointer [border:none] p-0 bg-[transparent] w-[69px] flex flex-row items-start justify-start mix-blend-multiply">
              <div className="flex-1 rounded-2xl bg-orange-50 flex flex-row items-center justify-center py-0.5 pr-2 pl-1.5 gap-[4px]">
                <img
                  className="h-3 w-3 relative overflow-hidden shrink-0"
                  alt=""
                  src="/alertcircle.svg"
                />
                <div className="flex-1 relative text-xs leading-[18px] font-medium font-text-md-regular text-orange-700 text-center inline-block min-w-[39px]">
                  Inativo
                </div>
              </div>
            </button>
            <button className="cursor-pointer [border:none] p-0 bg-[transparent] w-[87px] flex flex-row items-start justify-start mix-blend-multiply">
              <div className="flex-1 rounded-2xl bg-purple-50 flex flex-row items-center justify-center py-0.5 pr-2 pl-1.5 gap-[4px]">
                <img
                  className="h-3 w-3 relative overflow-hidden shrink-0"
                  alt=""
                  src="/globe04.svg"
                />
                <div className="flex-1 relative text-xs leading-[18px] font-medium font-text-md-regular text-purple-700 text-center inline-block min-w-[57px]">
                  Geografia
                </div>
              </div>
            </button>
            <button className="cursor-pointer [border:none] p-0 bg-[transparent] w-24 flex flex-row items-start justify-start mix-blend-multiply">
              <div className="flex-1 rounded-2xl bg-blue-gray-50 flex flex-row items-center justify-center py-0.5 pr-2 pl-1.5 gap-[4px]">
                <img
                  className="h-3 w-3 relative overflow-hidden shrink-0"
                  alt=""
                  src="/telescope.svg"
                />
                <div className="flex-1 relative text-xs leading-[18px] font-medium font-text-md-regular text-blue-gray-700 text-center inline-block min-w-[66px]">
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
        <div className="w-[134px] hidden flex-row items-center justify-start gap-[12px] text-gray-900">
          <img
            className="h-10 w-10 rounded-181xl object-cover"
            alt=""
            src="/avatar@2x.png"
          />
          <div className="flex-1 flex flex-col items-start justify-start">
            <div className="relative leading-[20px] font-semibold">
              Natali Craig
            </div>
            <div className="self-stretch h-5 relative leading-[20px] text-gray-600 inline-block">
              14 Jan 2022
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};