import Logomark from "../../assets/Logomark";
import Logotype from "../../assets/Logotype";

export const FooterMain: React.FC = () => {
    return (
        <div className="self-stretch flex flex-col items-start justify-start py-0 px-4 gap-[32px] text-left text-base text-gray-600 font-text-md-regular">
          <div className="self-stretch flex flex-row items-start justify-start">
            <div className="w-[162px] flex flex-row items-start justify-start py-0 pr-5 pl-0 box-border">
              <div className="flex-1 flex flex-row items-start justify-start gap-[10px]">
                <div className="shadow-[0px_1px_3px_rgba(16,_24,_40,_0.1),_0px_1px_2px_rgba(16,_24,_40,_0.06)] flex flex-row items-start justify-start">
                  <Logomark className="h-8 w-8 relative rounded-lg overflow-hidden shrink-0"/>
                </div>
                <div className="h-8 flex-1 flex flex-col items-center justify-center">
                  <Logotype className="self-stretch h-[25.7px] relative max-w-full overflow-hidden shrink-0"/>
                </div>
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-row items-start justify-start gap-[32px]">
            <div className="flex-1 flex flex-col items-start justify-start py-0 pr-[38.5px] pl-0 box-border gap-[12px] min-w-[101px]">
              <div className="flex flex-row items-center justify-start">
                <div className="flex flex-row items-start justify-start">
                  <div className="flex flex-row items-center justify-center">
                    <div className="relative leading-[24px] font-semibold inline-block min-w-[117px]">
                      Oportunidades
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-row items-center justify-start">
                <div className="flex flex-row items-start justify-start">
                  <div className="flex flex-row items-center justify-center">
                    <div className="relative leading-[24px] font-semibold inline-block min-w-[46px]">
                      Sobre
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-row items-center justify-start">
                <div className="flex flex-row items-start justify-start">
                  <div className="flex flex-row items-center justify-center">
                    <div className="relative leading-[24px] font-semibold inline-block min-w-[67px]">
                      Créditos
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    );
};
