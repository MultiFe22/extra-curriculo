import NavMenuButton from "../../assets/NavMenuButton";
import Logotype from "../../assets/Logotype";
import Logomark from "../../assets/Logomark";
import { useNavigate } from "react-router-dom";

export const ResponsiveHeader: React.FC = () => {
  const navigate = useNavigate();

  const handleNavigation = () => {
    navigate("/");
  };

  return (
    <div className="self-stretch bg-gray-50 flex flex-row items-start justify-start mq768:pt-0 mq768:px-0 box-border max-w-full top-[0] z-[30] sticky mq1920:text-left mq1920:text-base mq1920:text-gray-600 mq1920:font-text-md-regular mq1920:border-b-1 mq1920:border-solid mq1920:border-gray-10">
      <div className="flex-1 bg-white mq825:pl-10 mq825:pr-10 mq825:box-border flex flex-row items-start justify-start mq1920:py-[18px] mq1920:px-20 max-w-full mq768:border-b-[1px] mq768:border-solid mq768:border-gray-100">
        <header className="flex-1 flex flex-row items-start mq768:justify-start mq1920:justify-between mq768:py-4 mq768:px-0 mq1920:py-0 mq1920:px-8 mq1920:gap-[20px] box-border max-w-full">
          <div className="mq768:flex-1 mq1920:w-[379px] flex mq1920:flex-col mq768:flex-row items-start mq768:justify-between mq1920:justify-start mq1920:pt-1.5 mq1920:px-0 mq1920:pb-0 mq768:py-0 mq375:pr-3 mq375:pl-4 mq768:pr-7 mq768:pl-8 box-border max-w-full mq768:gap-[20px]">
            <div className="mq768:w-[142px] flex mq768:flex-col mq1920:flex-row items-start justify-start mq1920:gap-[40px] mq768:pt-1 mq768:px-0 mq768:pb-0 mq768:box-border">
              <div className="mq768:self-stretch mq1920:w-[142px] flex flex-row items-start justify-start">
                <div
                  onClick={handleNavigation}
                  className="cursor-pointer	flex-1 flex flex-row items-start justify-start gap-[10px]"
                >
                  <div className="flex flex-row items-start justify-start">
                    <Logomark className="h-8 w-8 relative rounded-lg overflow-hidden shrink-0" />
                  </div>
                  <div className="h-8 flex-1 flex flex-col items-center justify-center">
                    <Logotype className="h-[25.7px] self-stretch max-w-full relative overflow-hidden shrink-0" />
                  </div>
                </div>
              </div>
              <div className="mq768:hidden flex flex-col items-start justify-start pt-1 px-0 pb-0">
                <div className="flex flex-row items-center justify-start gap-[32px]">
                  <div className="flex flex-row items-start justify-start">
                    <div className="flex flex-row items-center justify-center">
                      <b
                        onClick={handleNavigation}
                        className="cursor-pointer relative leading-[24px] inline-block min-w-[119px]"
                      >
                        Oportunidades
                      </b>
                    </div>
                  </div>
                  <div
                    className="flex flex-row items-start justify-start cursor-pointer"
                    onClick={() => {}}
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
                </div>
              </div>
            </div>

            <div className="mq1920:hidden rounded-lg overflow-hidden flex flex-row items-center justify-center p-2">
              <NavMenuButton className="h-6 w-6 relative overflow-hidden shrink-0" />
            </div>
          </div>
          <div className="mq768:hidden flex flex-row items-center justify-start gap-[12px]">
            <div className="rounded-lg flex flex-row items-start justify-start">
              <div className="rounded-lg overflow-hidden flex flex-row items-center justify-center py-2.5 px-[18px]">
                <div className="relative leading-[24px] font-semibold inline-block min-w-[48px]">
                  Entrar
                </div>
              </div>
            </div>
            <div className="rounded-lg flex flex-row items-start justify-start text-white">
              <div className="rounded-lg bg-brand-600 shadow-[0px_1px_2px_rgba(16,_24,_40,_0.05)] overflow-hidden flex flex-row items-center justify-center py-2 px-[17px] whitespace-nowrap border-[1px] border-solid border-brand-600">
                <div className="relative leading-[24px] font-semibold inline-block min-w-[86px]">
                  Criar conta
                </div>
              </div>
            </div>
          </div>
        </header>
      </div>
    </div>
  );
};
