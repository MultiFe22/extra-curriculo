import { useCallback } from "react";

export const DropdownHeaderNavigation: React.FC = () => {
  const onButtonContainer1Click = useCallback(() => {
    // Please sync "Sobre" to the project
  }, []);

  return (
    <header className="self-stretch bg-white box-border flex flex-row items-start justify-start top-[0] z-[99] sticky max-w-full text-left text-base text-gray-600 font-text-md-regular border-b-[1px] border-solid border-gray-100">
      <div className="flex-1 flex flex-row items-start justify-start py-[18px] px-20 box-border max-w-full mq800:pl-10 mq800:pr-10 mq800:box-border">
        <div className="flex-1 flex flex-row items-start justify-between py-0 px-8 box-border max-w-full gap-[20px]">
          <div className="w-[379px] flex flex-col items-start justify-start pt-1.5 px-0 pb-0 box-border max-w-full">
            <div className="self-stretch flex flex-row items-start justify-start gap-[40px] mq450:gap-[20px]">
              <div className="w-[142px] flex flex-row items-start justify-start">
                <div className="flex-1 flex flex-row items-start justify-start gap-[10px]">
                  <div className="shadow-[0px_1px_3px_rgba(16,_24,_40,_0.1),_0px_1px_2px_rgba(16,_24,_40,_0.06)] flex flex-row items-start justify-start">
                    <img
                      className="h-8 w-8 relative rounded-lg overflow-hidden shrink-0"
                      loading="lazy"
                      alt=""
                      src="/content.svg"
                    />
                  </div>
                  <img
                    className="self-stretch w-[100px] relative max-h-full hidden min-h-[32px]"
                    alt=""
                    src="/logotype.svg"
                  />
                  <div className="h-8 flex-1 flex flex-col items-center justify-center">
                    <img
                      className="self-stretch h-[25.7px] relative max-w-full overflow-hidden shrink-0"
                      loading="lazy"
                      alt=""
                      src="/vector.svg"
                    />
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-start justify-start pt-1 px-0 pb-0">
                <div className="flex flex-row items-center justify-start gap-[32px]">
                  <div className="flex flex-row items-start justify-start">
                    <div className="flex flex-row items-center justify-center">
                      <b className="relative leading-[24px] inline-block min-w-[119px]">
                        Oportunidades
                      </b>
                    </div>
                  </div>
                  <div
                    className="flex flex-row items-start justify-start cursor-pointer"
                    onClick={onButtonContainer1Click}
                  >
                    <div className="flex flex-row items-center justify-center">
                      <div className="relative leading-[24px] font-semibold inline-block min-w-[46px]">
                        Sobre
                      </div>
                    </div>
                  </div>
                  <div className="h-8 hidden flex-row items-start justify-start">
                    <div className="h-6 flex flex-row items-center justify-center">
                      <div className="self-stretch relative leading-[24px] font-semibold whitespace-nowrap">
                        Minhas Oportunidades
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch hidden flex-row items-start justify-start">
                    <div className="self-stretch flex flex-row items-center justify-center">
                      <div className="self-stretch relative leading-[24px] font-semibold">
                        Pricing
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-row items-center justify-start gap-[12px]">
            <div className="rounded-lg flex flex-row items-start justify-start">
              <div className="rounded-lg overflow-hidden flex flex-row items-center justify-center py-2.5 px-[18px]">
                <div className="relative leading-[24px] font-semibold inline-block min-w-[48px]">
                  Entrar
                </div>
              </div>
            </div>
            <div className="rounded-lg hidden flex-row items-start justify-start text-gray-700">
              <div className="rounded-lg bg-white shadow-[0px_1px_2px_rgba(16,_24,_40,_0.05)] overflow-hidden flex flex-row items-center justify-center py-2.5 px-[17px] whitespace-nowrap border-[1px] border-solid border-gray-300">
                <div className="relative leading-[24px] font-semibold">
                  Book demo
                </div>
              </div>
            </div>
            <div className="rounded-lg flex flex-row items-start justify-start text-white">
              <div className="rounded-lg bg-brand-600 shadow-[0px_1px_2px_rgba(16,_24,_40,_0.05)] overflow-hidden flex flex-row items-center justify-center py-2.5 px-[17px] whitespace-nowrap border-[1px] border-solid border-brand-600">
                <div className="relative leading-[24px] font-semibold inline-block min-w-[86px]">
                  Criar conta
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
