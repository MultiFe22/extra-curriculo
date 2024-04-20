import { ProjectCard } from "../ProjectCard";


export const OpportunitiesContainerMobile: React.FC = () => {
  return (
    <main className="self-stretch overflow-hidden flex mq375:flex-col mq768:flex-row mq768:flex-wrap items-start justify-start mq768:max-w-full py-0 mq375:px-4 mq768:px-8 mq375:gap-[40px] mq768:gap-[40px_20px]">
      <ProjectCard image="/image@2x.png" />
      <ProjectCard image="/image-1@2x.png" />
      <ProjectCard image="/image-2@2x.png" />
      <ProjectCard image="/image-3@2x.png" />
      <ProjectCard image="/image-4@2x.png" />
      <ProjectCard image="/image-5@2x.png" />
      <ProjectCard image="/image-6@2x.png" />
      <ProjectCard image="/image-7@2x.png" />
    <div className="flex-1 rounded-lg flex flex-col items-center justify-start gap-[24px] min-w-[323px] max-w-full text-left text-sm text-slateblue font-text-md-regular">
      <img
        className="self-stretch h-60 relative rounded-lg max-w-full overflow-hidden shrink-0 object-cover"
        loading="lazy"
        alt=""
        src="/image1@2x.png"
      />
      <div className="self-stretch flex flex-col items-start justify-start gap-[24px]">
        <div className="self-stretch flex flex-col items-start justify-start gap-[12px]">
          <div className="self-stretch h-5 relative leading-[20px] font-semibold hidden">
            Design
          </div>
          <div className="self-stretch flex flex-col items-start justify-start gap-[12px] text-5xl text-gray-900">
            <div className="self-stretch flex flex-row items-start justify-start gap-[16px] mq450:flex-wrap">
              <h1 className="m-0 flex-1 relative text-inherit leading-[32px] font-semibold font-inherit [display:-webkit-inline-box] overflow-hidden text-ellipsis [-webkit-line-clamp:2] [-webkit-box-orient:vertical] min-w-[195px] mq450:text-lgi mq450:leading-[26px]">
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
          <div className="self-stretch flex flex-row flex-wrap items-start justify-start py-0 pr-[78px] pl-0 box-border gap-[10px] min-h-[54px] text-center text-xs text-gray-700 mq650:pr-[39px] mq650:box-border">
            <button className="cursor-pointer [border:none] p-0 bg-[transparent] flex flex-row items-start justify-start mix-blend-multiply">
              <div className="rounded-2xl bg-blue-light-50 flex flex-row items-center justify-center py-0.5 pr-2 pl-1.5 gap-[4px]">
                <img
                  className="h-3 w-3 relative overflow-hidden shrink-0"
                  alt=""
                  src="/building07.svg"
                />
                <div className="relative text-xs leading-[18px] font-medium font-text-md-regular text-blue-light-700 text-center inline-block min-w-[60px]">
                  Presencial
                </div>
              </div>
            </button>
            <button className="cursor-pointer [border:none] p-0 bg-[transparent] flex flex-row items-start justify-start mix-blend-multiply">
              <div className="rounded-2xl bg-pink-50 flex flex-row items-center justify-center py-0.5 pr-2 pl-1.5 gap-[4px]">
                <img
                  className="h-3 w-3 relative overflow-hidden shrink-0"
                  alt=""
                  src="/atom01.svg"
                />
                <div className="relative text-xs leading-[18px] font-medium font-text-md-regular text-pink-700 text-center inline-block min-w-[53px]">
                  Extensão
                </div>
              </div>
            </button>
            <button className="cursor-pointer [border:none] p-0 bg-[transparent] flex flex-row items-start justify-start mix-blend-multiply">
              <div className="rounded-2xl bg-orange-50 flex flex-row items-center justify-center py-0.5 pr-2 pl-1.5 gap-[4px]">
                <img
                  className="h-3 w-3 relative overflow-hidden shrink-0"
                  alt=""
                  src="/alertcircle.svg"
                />
                <div className="relative text-xs leading-[18px] font-medium font-text-md-regular text-orange-700 text-center inline-block min-w-[39px]">
                  Inativo
                </div>
              </div>
            </button>
            <button className="cursor-pointer [border:none] p-0 bg-[transparent] flex flex-row items-start justify-start mix-blend-multiply">
              <div className="rounded-2xl bg-purple-50 flex flex-row items-center justify-center py-0.5 pr-2 pl-1.5 gap-[4px]">
                <img
                  className="h-3 w-3 relative overflow-hidden shrink-0"
                  alt=""
                  src="/globe04.svg"
                />
                <div className="relative text-xs leading-[18px] font-medium font-text-md-regular text-purple-700 text-center inline-block min-w-[57px]">
                  Geografia
                </div>
              </div>
            </button>
            <button className="cursor-pointer [border:none] p-0 bg-[transparent] flex flex-row items-start justify-start mix-blend-multiply">
              <div className="rounded-2xl bg-blue-gray-50 flex flex-row items-center justify-center py-0.5 pr-2 pl-1.5 gap-[4px]">
                <img
                  className="h-3 w-3 relative overflow-hidden shrink-0"
                  alt=""
                  src="/telescope.svg"
                />
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
      
    <div className="flex-1 rounded-lg flex flex-col items-center justify-start gap-[24px] min-w-[323px] max-w-full text-left text-sm text-slateblue font-text-md-regular">
      <img
        className="self-stretch h-60 relative rounded-lg max-w-full overflow-hidden shrink-0 object-cover"
        loading="lazy"
        alt=""
        src="/image1@2x.png"
      />
      <div className="self-stretch flex flex-col items-start justify-start gap-[24px]">
        <div className="self-stretch flex flex-col items-start justify-start gap-[12px]">
          <div className="self-stretch h-5 relative leading-[20px] font-semibold hidden">
            Design
          </div>
          <div className="self-stretch flex flex-col items-start justify-start gap-[12px] text-5xl text-gray-900">
            <div className="self-stretch flex flex-row items-start justify-start gap-[16px] mq450:flex-wrap">
              <h1 className="m-0 flex-1 relative text-inherit leading-[32px] font-semibold font-inherit [display:-webkit-inline-box] overflow-hidden text-ellipsis [-webkit-line-clamp:2] [-webkit-box-orient:vertical] min-w-[195px] mq450:text-lgi mq450:leading-[26px]">
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
          <div className="self-stretch flex flex-row flex-wrap items-start justify-start py-0 pr-[78px] pl-0 box-border gap-[10px] min-h-[54px] text-center text-xs text-gray-700 mq650:pr-[39px] mq650:box-border">
            <button className="cursor-pointer [border:none] p-0 bg-[transparent] flex flex-row items-start justify-start mix-blend-multiply">
              <div className="rounded-2xl bg-blue-light-50 flex flex-row items-center justify-center py-0.5 pr-2 pl-1.5 gap-[4px]">
                <img
                  className="h-3 w-3 relative overflow-hidden shrink-0"
                  alt=""
                  src="/building07.svg"
                />
                <div className="relative text-xs leading-[18px] font-medium font-text-md-regular text-blue-light-700 text-center inline-block min-w-[60px]">
                  Presencial
                </div>
              </div>
            </button>
            <button className="cursor-pointer [border:none] p-0 bg-[transparent] flex flex-row items-start justify-start mix-blend-multiply">
              <div className="rounded-2xl bg-pink-50 flex flex-row items-center justify-center py-0.5 pr-2 pl-1.5 gap-[4px]">
                <img
                  className="h-3 w-3 relative overflow-hidden shrink-0"
                  alt=""
                  src="/atom01.svg"
                />
                <div className="relative text-xs leading-[18px] font-medium font-text-md-regular text-pink-700 text-center inline-block min-w-[53px]">
                  Extensão
                </div>
              </div>
            </button>
            <button className="cursor-pointer [border:none] p-0 bg-[transparent] flex flex-row items-start justify-start mix-blend-multiply">
              <div className="rounded-2xl bg-orange-50 flex flex-row items-center justify-center py-0.5 pr-2 pl-1.5 gap-[4px]">
                <img
                  className="h-3 w-3 relative overflow-hidden shrink-0"
                  alt=""
                  src="/alertcircle.svg"
                />
                <div className="relative text-xs leading-[18px] font-medium font-text-md-regular text-orange-700 text-center inline-block min-w-[39px]">
                  Inativo
                </div>
              </div>
            </button>
            <button className="cursor-pointer [border:none] p-0 bg-[transparent] flex flex-row items-start justify-start mix-blend-multiply">
              <div className="rounded-2xl bg-purple-50 flex flex-row items-center justify-center py-0.5 pr-2 pl-1.5 gap-[4px]">
                <img
                  className="h-3 w-3 relative overflow-hidden shrink-0"
                  alt=""
                  src="/globe04.svg"
                />
                <div className="relative text-xs leading-[18px] font-medium font-text-md-regular text-purple-700 text-center inline-block min-w-[57px]">
                  Geografia
                </div>
              </div>
            </button>
            <button className="cursor-pointer [border:none] p-0 bg-[transparent] flex flex-row items-start justify-start mix-blend-multiply">
              <div className="rounded-2xl bg-blue-gray-50 flex flex-row items-center justify-center py-0.5 pr-2 pl-1.5 gap-[4px]">
                <img
                  className="h-3 w-3 relative overflow-hidden shrink-0"
                  alt=""
                  src="/telescope.svg"
                />
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
    <div className="flex-1 rounded-lg flex flex-col items-center justify-start gap-[24px] min-w-[323px] max-w-full text-left text-sm text-slateblue font-text-md-regular">
      <img
        className="self-stretch h-60 relative rounded-lg max-w-full overflow-hidden shrink-0 object-cover"
        loading="lazy"
        alt=""
        src="/image1@2x.png"
      />
      <div className="self-stretch flex flex-col items-start justify-start gap-[24px]">
        <div className="self-stretch flex flex-col items-start justify-start gap-[12px]">
          <div className="self-stretch h-5 relative leading-[20px] font-semibold hidden">
            Design
          </div>
          <div className="self-stretch flex flex-col items-start justify-start gap-[12px] text-5xl text-gray-900">
            <div className="self-stretch flex flex-row items-start justify-start gap-[16px] mq450:flex-wrap">
              <h1 className="m-0 flex-1 relative text-inherit leading-[32px] font-semibold font-inherit [display:-webkit-inline-box] overflow-hidden text-ellipsis [-webkit-line-clamp:2] [-webkit-box-orient:vertical] min-w-[195px] mq450:text-lgi mq450:leading-[26px]">
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
          <div className="self-stretch flex flex-row flex-wrap items-start justify-start py-0 pr-[78px] pl-0 box-border gap-[10px] min-h-[54px] text-center text-xs text-gray-700 mq650:pr-[39px] mq650:box-border">
            <button className="cursor-pointer [border:none] p-0 bg-[transparent] flex flex-row items-start justify-start mix-blend-multiply">
              <div className="rounded-2xl bg-blue-light-50 flex flex-row items-center justify-center py-0.5 pr-2 pl-1.5 gap-[4px]">
                <img
                  className="h-3 w-3 relative overflow-hidden shrink-0"
                  alt=""
                  src="/building07.svg"
                />
                <div className="relative text-xs leading-[18px] font-medium font-text-md-regular text-blue-light-700 text-center inline-block min-w-[60px]">
                  Presencial
                </div>
              </div>
            </button>
            <button className="cursor-pointer [border:none] p-0 bg-[transparent] flex flex-row items-start justify-start mix-blend-multiply">
              <div className="rounded-2xl bg-pink-50 flex flex-row items-center justify-center py-0.5 pr-2 pl-1.5 gap-[4px]">
                <img
                  className="h-3 w-3 relative overflow-hidden shrink-0"
                  alt=""
                  src="/atom01.svg"
                />
                <div className="relative text-xs leading-[18px] font-medium font-text-md-regular text-pink-700 text-center inline-block min-w-[53px]">
                  Extensão
                </div>
              </div>
            </button>
            <button className="cursor-pointer [border:none] p-0 bg-[transparent] flex flex-row items-start justify-start mix-blend-multiply">
              <div className="rounded-2xl bg-orange-50 flex flex-row items-center justify-center py-0.5 pr-2 pl-1.5 gap-[4px]">
                <img
                  className="h-3 w-3 relative overflow-hidden shrink-0"
                  alt=""
                  src="/alertcircle.svg"
                />
                <div className="relative text-xs leading-[18px] font-medium font-text-md-regular text-orange-700 text-center inline-block min-w-[39px]">
                  Inativo
                </div>
              </div>
            </button>
            <button className="cursor-pointer [border:none] p-0 bg-[transparent] flex flex-row items-start justify-start mix-blend-multiply">
              <div className="rounded-2xl bg-purple-50 flex flex-row items-center justify-center py-0.5 pr-2 pl-1.5 gap-[4px]">
                <img
                  className="h-3 w-3 relative overflow-hidden shrink-0"
                  alt=""
                  src="/globe04.svg"
                />
                <div className="relative text-xs leading-[18px] font-medium font-text-md-regular text-purple-700 text-center inline-block min-w-[57px]">
                  Geografia
                </div>
              </div>
            </button>
            <button className="cursor-pointer [border:none] p-0 bg-[transparent] flex flex-row items-start justify-start mix-blend-multiply">
              <div className="rounded-2xl bg-blue-gray-50 flex flex-row items-center justify-center py-0.5 pr-2 pl-1.5 gap-[4px]">
                <img
                  className="h-3 w-3 relative overflow-hidden shrink-0"
                  alt=""
                  src="/telescope.svg"
                />
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
    <div className="flex-1 rounded-lg flex flex-col items-center justify-start gap-[24px] min-w-[323px] max-w-full text-left text-sm text-slateblue font-text-md-regular">
      <img
        className="self-stretch h-60 relative rounded-lg max-w-full overflow-hidden shrink-0 object-cover"
        loading="lazy"
        alt=""
        src="/image1@2x.png"
      />
      <div className="self-stretch flex flex-col items-start justify-start gap-[24px]">
        <div className="self-stretch flex flex-col items-start justify-start gap-[12px]">
          <div className="self-stretch h-5 relative leading-[20px] font-semibold hidden">
            Design
          </div>
          <div className="self-stretch flex flex-col items-start justify-start gap-[12px] text-5xl text-gray-900">
            <div className="self-stretch flex flex-row items-start justify-start gap-[16px] mq450:flex-wrap">
              <h1 className="m-0 flex-1 relative text-inherit leading-[32px] font-semibold font-inherit [display:-webkit-inline-box] overflow-hidden text-ellipsis [-webkit-line-clamp:2] [-webkit-box-orient:vertical] min-w-[195px] mq450:text-lgi mq450:leading-[26px]">
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
          <div className="self-stretch flex flex-row flex-wrap items-start justify-start py-0 pr-[78px] pl-0 box-border gap-[10px] min-h-[54px] text-center text-xs text-gray-700 mq650:pr-[39px] mq650:box-border">
            <button className="cursor-pointer [border:none] p-0 bg-[transparent] flex flex-row items-start justify-start mix-blend-multiply">
              <div className="rounded-2xl bg-blue-light-50 flex flex-row items-center justify-center py-0.5 pr-2 pl-1.5 gap-[4px]">
                <img
                  className="h-3 w-3 relative overflow-hidden shrink-0"
                  alt=""
                  src="/building07.svg"
                />
                <div className="relative text-xs leading-[18px] font-medium font-text-md-regular text-blue-light-700 text-center inline-block min-w-[60px]">
                  Presencial
                </div>
              </div>
            </button>
            <button className="cursor-pointer [border:none] p-0 bg-[transparent] flex flex-row items-start justify-start mix-blend-multiply">
              <div className="rounded-2xl bg-pink-50 flex flex-row items-center justify-center py-0.5 pr-2 pl-1.5 gap-[4px]">
                <img
                  className="h-3 w-3 relative overflow-hidden shrink-0"
                  alt=""
                  src="/atom01.svg"
                />
                <div className="relative text-xs leading-[18px] font-medium font-text-md-regular text-pink-700 text-center inline-block min-w-[53px]">
                  Extensão
                </div>
              </div>
            </button>
            <button className="cursor-pointer [border:none] p-0 bg-[transparent] flex flex-row items-start justify-start mix-blend-multiply">
              <div className="rounded-2xl bg-orange-50 flex flex-row items-center justify-center py-0.5 pr-2 pl-1.5 gap-[4px]">
                <img
                  className="h-3 w-3 relative overflow-hidden shrink-0"
                  alt=""
                  src="/alertcircle.svg"
                />
                <div className="relative text-xs leading-[18px] font-medium font-text-md-regular text-orange-700 text-center inline-block min-w-[39px]">
                  Inativo
                </div>
              </div>
            </button>
            <button className="cursor-pointer [border:none] p-0 bg-[transparent] flex flex-row items-start justify-start mix-blend-multiply">
              <div className="rounded-2xl bg-purple-50 flex flex-row items-center justify-center py-0.5 pr-2 pl-1.5 gap-[4px]">
                <img
                  className="h-3 w-3 relative overflow-hidden shrink-0"
                  alt=""
                  src="/globe04.svg"
                />
                <div className="relative text-xs leading-[18px] font-medium font-text-md-regular text-purple-700 text-center inline-block min-w-[57px]">
                  Geografia
                </div>
              </div>
            </button>
            <button className="cursor-pointer [border:none] p-0 bg-[transparent] flex flex-row items-start justify-start mix-blend-multiply">
              <div className="rounded-2xl bg-blue-gray-50 flex flex-row items-center justify-center py-0.5 pr-2 pl-1.5 gap-[4px]">
                <img
                  className="h-3 w-3 relative overflow-hidden shrink-0"
                  alt=""
                  src="/telescope.svg"
                />
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
    <div className="flex-1 rounded-lg flex flex-col items-center justify-start gap-[24px] min-w-[323px] max-w-full text-left text-sm text-slateblue font-text-md-regular">
      <img
        className="self-stretch h-60 relative rounded-lg max-w-full overflow-hidden shrink-0 object-cover"
        loading="lazy"
        alt=""
        src="/image1@2x.png"
      />
      <div className="self-stretch flex flex-col items-start justify-start gap-[24px]">
        <div className="self-stretch flex flex-col items-start justify-start gap-[12px]">
          <div className="self-stretch h-5 relative leading-[20px] font-semibold hidden">
            Design
          </div>
          <div className="self-stretch flex flex-col items-start justify-start gap-[12px] text-5xl text-gray-900">
            <div className="self-stretch flex flex-row items-start justify-start gap-[16px] mq450:flex-wrap">
              <h1 className="m-0 flex-1 relative text-inherit leading-[32px] font-semibold font-inherit [display:-webkit-inline-box] overflow-hidden text-ellipsis [-webkit-line-clamp:2] [-webkit-box-orient:vertical] min-w-[195px] mq450:text-lgi mq450:leading-[26px]">
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
          <div className="self-stretch flex flex-row flex-wrap items-start justify-start py-0 pr-[78px] pl-0 box-border gap-[10px] min-h-[54px] text-center text-xs text-gray-700 mq650:pr-[39px] mq650:box-border">
            <button className="cursor-pointer [border:none] p-0 bg-[transparent] flex flex-row items-start justify-start mix-blend-multiply">
              <div className="rounded-2xl bg-blue-light-50 flex flex-row items-center justify-center py-0.5 pr-2 pl-1.5 gap-[4px]">
                <img
                  className="h-3 w-3 relative overflow-hidden shrink-0"
                  alt=""
                  src="/building07.svg"
                />
                <div className="relative text-xs leading-[18px] font-medium font-text-md-regular text-blue-light-700 text-center inline-block min-w-[60px]">
                  Presencial
                </div>
              </div>
            </button>
            <button className="cursor-pointer [border:none] p-0 bg-[transparent] flex flex-row items-start justify-start mix-blend-multiply">
              <div className="rounded-2xl bg-pink-50 flex flex-row items-center justify-center py-0.5 pr-2 pl-1.5 gap-[4px]">
                <img
                  className="h-3 w-3 relative overflow-hidden shrink-0"
                  alt=""
                  src="/atom01.svg"
                />
                <div className="relative text-xs leading-[18px] font-medium font-text-md-regular text-pink-700 text-center inline-block min-w-[53px]">
                  Extensão
                </div>
              </div>
            </button>
            <button className="cursor-pointer [border:none] p-0 bg-[transparent] flex flex-row items-start justify-start mix-blend-multiply">
              <div className="rounded-2xl bg-orange-50 flex flex-row items-center justify-center py-0.5 pr-2 pl-1.5 gap-[4px]">
                <img
                  className="h-3 w-3 relative overflow-hidden shrink-0"
                  alt=""
                  src="/alertcircle.svg"
                />
                <div className="relative text-xs leading-[18px] font-medium font-text-md-regular text-orange-700 text-center inline-block min-w-[39px]">
                  Inativo
                </div>
              </div>
            </button>
            <button className="cursor-pointer [border:none] p-0 bg-[transparent] flex flex-row items-start justify-start mix-blend-multiply">
              <div className="rounded-2xl bg-purple-50 flex flex-row items-center justify-center py-0.5 pr-2 pl-1.5 gap-[4px]">
                <img
                  className="h-3 w-3 relative overflow-hidden shrink-0"
                  alt=""
                  src="/globe04.svg"
                />
                <div className="relative text-xs leading-[18px] font-medium font-text-md-regular text-purple-700 text-center inline-block min-w-[57px]">
                  Geografia
                </div>
              </div>
            </button>
            <button className="cursor-pointer [border:none] p-0 bg-[transparent] flex flex-row items-start justify-start mix-blend-multiply">
              <div className="rounded-2xl bg-blue-gray-50 flex flex-row items-center justify-center py-0.5 pr-2 pl-1.5 gap-[4px]">
                <img
                  className="h-3 w-3 relative overflow-hidden shrink-0"
                  alt=""
                  src="/telescope.svg"
                />
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
    <div className="flex-1 rounded-lg flex flex-col items-center justify-start gap-[24px] min-w-[323px] max-w-full text-left text-sm text-slateblue font-text-md-regular">
      <img
        className="self-stretch h-60 relative rounded-lg max-w-full overflow-hidden shrink-0 object-cover"
        loading="lazy"
        alt=""
        src="/image1@2x.png"
      />
      <div className="self-stretch flex flex-col items-start justify-start gap-[24px]">
        <div className="self-stretch flex flex-col items-start justify-start gap-[12px]">
          <div className="self-stretch h-5 relative leading-[20px] font-semibold hidden">
            Design
          </div>
          <div className="self-stretch flex flex-col items-start justify-start gap-[12px] text-5xl text-gray-900">
            <div className="self-stretch flex flex-row items-start justify-start gap-[16px] mq450:flex-wrap">
              <h1 className="m-0 flex-1 relative text-inherit leading-[32px] font-semibold font-inherit [display:-webkit-inline-box] overflow-hidden text-ellipsis [-webkit-line-clamp:2] [-webkit-box-orient:vertical] min-w-[195px] mq450:text-lgi mq450:leading-[26px]">
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
          <div className="self-stretch flex flex-row flex-wrap items-start justify-start py-0 pr-[78px] pl-0 box-border gap-[10px] min-h-[54px] text-center text-xs text-gray-700 mq650:pr-[39px] mq650:box-border">
            <button className="cursor-pointer [border:none] p-0 bg-[transparent] flex flex-row items-start justify-start mix-blend-multiply">
              <div className="rounded-2xl bg-blue-light-50 flex flex-row items-center justify-center py-0.5 pr-2 pl-1.5 gap-[4px]">
                <img
                  className="h-3 w-3 relative overflow-hidden shrink-0"
                  alt=""
                  src="/building07.svg"
                />
                <div className="relative text-xs leading-[18px] font-medium font-text-md-regular text-blue-light-700 text-center inline-block min-w-[60px]">
                  Presencial
                </div>
              </div>
            </button>
            <button className="cursor-pointer [border:none] p-0 bg-[transparent] flex flex-row items-start justify-start mix-blend-multiply">
              <div className="rounded-2xl bg-pink-50 flex flex-row items-center justify-center py-0.5 pr-2 pl-1.5 gap-[4px]">
                <img
                  className="h-3 w-3 relative overflow-hidden shrink-0"
                  alt=""
                  src="/atom01.svg"
                />
                <div className="relative text-xs leading-[18px] font-medium font-text-md-regular text-pink-700 text-center inline-block min-w-[53px]">
                  Extensão
                </div>
              </div>
            </button>
            <button className="cursor-pointer [border:none] p-0 bg-[transparent] flex flex-row items-start justify-start mix-blend-multiply">
              <div className="rounded-2xl bg-orange-50 flex flex-row items-center justify-center py-0.5 pr-2 pl-1.5 gap-[4px]">
                <img
                  className="h-3 w-3 relative overflow-hidden shrink-0"
                  alt=""
                  src="/alertcircle.svg"
                />
                <div className="relative text-xs leading-[18px] font-medium font-text-md-regular text-orange-700 text-center inline-block min-w-[39px]">
                  Inativo
                </div>
              </div>
            </button>
            <button className="cursor-pointer [border:none] p-0 bg-[transparent] flex flex-row items-start justify-start mix-blend-multiply">
              <div className="rounded-2xl bg-purple-50 flex flex-row items-center justify-center py-0.5 pr-2 pl-1.5 gap-[4px]">
                <img
                  className="h-3 w-3 relative overflow-hidden shrink-0"
                  alt=""
                  src="/globe04.svg"
                />
                <div className="relative text-xs leading-[18px] font-medium font-text-md-regular text-purple-700 text-center inline-block min-w-[57px]">
                  Geografia
                </div>
              </div>
            </button>
            <button className="cursor-pointer [border:none] p-0 bg-[transparent] flex flex-row items-start justify-start mix-blend-multiply">
              <div className="rounded-2xl bg-blue-gray-50 flex flex-row items-center justify-center py-0.5 pr-2 pl-1.5 gap-[4px]">
                <img
                  className="h-3 w-3 relative overflow-hidden shrink-0"
                  alt=""
                  src="/telescope.svg"
                />
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
    </main>
  );
};