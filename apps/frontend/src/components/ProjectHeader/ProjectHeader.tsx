import Atom01 from "../../assets/Atom01";
import Building07 from "../../assets/Building07";
import CopyIcon from "../../assets/CopyIcon";
import Dot from "../../assets/Dot";
import FacebookIcon from "../../assets/FacebookIcon";
import Globe02 from "../../assets/Globe02";
import Heart from "../../assets/Heart";
import InstagramIcon from "../../assets/InstagramIcon";
import LinkedInIcon from "../../assets/LinkedInIcon";
import TwitterIcon from "../../assets/TwitterIcon";

export const ProjectHeader: React.FC = () => {
  return (
    <section className="self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-16 box-border gap-[64px] max-w-full text-left text-base text-brand-600 font-text-md-regular">
      <img
        className="self-stretch relative max-w-full overflow-hidden max-h-full object-cover"
        alt=""
        src="https://source.unsplash.com/a8JHGzB7h4A"
      />
      <div className="self-stretch flex flex-row items-start justify-start py-0 px-4 box-border max-w-full text-sm">
        <div className="flex-1 flex flex-col items-start justify-start gap-[32px] max-w-full">
          <div className="self-stretch flex flex-col items-start justify-start gap-[16px]">
            <div className="self-stretch flex flex-col items-start justify-start gap-[16px]">
              <div className="self-stretch flex flex-row flex-wrap items-center justify-start gap-[10px]">
                <button className="cursor-pointer [border:none] p-0 bg-[transparent] flex flex-row items-start justify-start mix-blend-multiply">
                  <div className="rounded-2xl bg-success-50 flex flex-row items-center justify-center py-0.5 pr-2.5 pl-2 gap-[6px]">
                    <Dot className="h-2 w-2 relative overflow-hidden shrink-0 fill-[#12B76A]" />
                    <div className="relative text-sm leading-[20px] font-medium font-text-md-regular text-success-700 text-center inline-block min-w-[78px]">
                      Recrutando
                    </div>
                  </div>
                </button>
                <div className="flex-1 relative leading-[20px] font-semibold inline-block min-w-[145px]">
                  Atualizado em 20 Jan 2022
                </div>
              </div>
              <h1 className="m-0 self-stretch relative text-17xl tracking-[-0.02em] leading-[44px] font-semibold font-inherit text-gray-900">
                Alunos Contadores de Histórias
              </h1>
            </div>
          </div>
          <div className="self-stretch flex flex-row flex-wrap items-start justify-start py-0 pr-[23px] pl-0 box-border gap-[10px] min-h-[160px] text-center text-xs text-gray-700">
            <button className="cursor-pointer [border:none] p-0 bg-[transparent] flex flex-row items-start justify-start mix-blend-multiply">
              <div className="rounded-2xl bg-blue-light-50 flex flex-row items-center justify-center py-0.5 pr-2 pl-2.5 gap-[4px]">
                <Building07 className="h-3 w-3 relative overflow-hidden shrink-0 stroke-blue-light-500" />
                <div className="relative text-sm leading-[20px] font-medium font-text-md-regular text-blue-light-700 text-center inline-block min-w-[70px]">
                  Presencial
                </div>
              </div>
            </button>
            <button className="cursor-pointer [border:none] p-0 bg-[transparent] flex flex-row items-start justify-start mix-blend-multiply">
              <div className="rounded-2xl bg-pink-50 flex flex-row items-center justify-center py-0.5 pr-2 pl-2.5 gap-[4px]">
                <Atom01 className="h-3 w-3 relative overflow-hidden shrink-0 stroke-pink-500" />
                <div className="relative text-sm leading-[20px] font-medium font-text-md-regular text-pink-700 text-center inline-block min-w-[62px]">
                  Extensão
                </div>
              </div>
            </button>
            <button className="cursor-pointer [border:none] p-0 bg-[transparent] flex flex-row items-start justify-start mix-blend-multiply">
              <div className="rounded-2xl bg-purple-50 flex flex-row items-center justify-center py-0.5 pr-2 pl-2.5 gap-[4px]">
                <div className="relative text-sm leading-[20px] font-medium font-text-md-regular text-purple-700 text-center inline-block min-w-[66px]">
                  Geografia
                </div>
              </div>
            </button>
            <button className="cursor-pointer [border:none] p-0 bg-[transparent] flex flex-row items-start justify-start mix-blend-multiply">
              <div className="rounded-2xl bg-blue-gray-50 flex flex-row items-center justify-center py-0.5 pr-2 pl-2.5 gap-[4px]">
                <div className="relative text-sm leading-[20px] font-medium font-text-md-regular text-blue-gray-700 text-center inline-block min-w-[77px]">
                  Astronomia
                </div>
              </div>
            </button>
            <button className="cursor-pointer [border:none] p-0 bg-[transparent] flex flex-row items-start justify-start mix-blend-multiply">
              <div className="rounded-2xl bg-blue-gray-50 flex flex-row items-center justify-center py-0.5 pr-2 pl-2.5 gap-[4px]">
                <div className="relative text-sm leading-[20px] font-medium font-text-md-regular text-blue-gray-700 text-center inline-block min-w-[77px]">
                  Astronomia
                </div>
              </div>
            </button>
            <button className="cursor-pointer [border:none] p-0 bg-[transparent] flex flex-row items-start justify-start mix-blend-multiply">
              <div className="rounded-2xl bg-blue-gray-50 flex flex-row items-center justify-center py-0.5 pr-2 pl-2.5 gap-[4px]">
                <div className="relative text-sm leading-[20px] font-medium font-text-md-regular text-blue-gray-700 text-center inline-block min-w-[77px]">
                  Astronomia
                </div>
              </div>
            </button>
            <button className="cursor-pointer [border:none] p-0 bg-[transparent] flex flex-row items-start justify-start mix-blend-multiply">
              <div className="rounded-2xl bg-blue-gray-50 flex flex-row items-center justify-center py-0.5 pr-2 pl-2.5 gap-[4px]">
                <div className="relative text-sm leading-[20px] font-medium font-text-md-regular text-blue-gray-700 text-center inline-block min-w-[77px]">
                  Astronomia
                </div>
              </div>
            </button>
            <button className="cursor-pointer [border:none] p-0 bg-[transparent] flex flex-row items-start justify-start mix-blend-multiply">
              <div className="rounded-2xl bg-blue-gray-50 flex flex-row items-center justify-center py-0.5 pr-2 pl-2.5 gap-[4px]">
                <div className="relative text-sm leading-[20px] font-medium font-text-md-regular text-blue-gray-700 text-center inline-block min-w-[77px]">
                  Astronomia
                </div>
              </div>
            </button>
            <button className="cursor-pointer [border:none] p-0 bg-[transparent] flex flex-row items-start justify-start mix-blend-multiply">
              <div className="rounded-2xl bg-blue-gray-50 flex flex-row items-center justify-center py-0.5 pr-2 pl-2.5 gap-[4px]">
                <div className="relative text-sm leading-[20px] font-medium font-text-md-regular text-blue-gray-700 text-center inline-block min-w-[77px]">
                  Astronomia
                </div>
              </div>
            </button>
            <button className="cursor-pointer [border:none] p-0 bg-[transparent] flex flex-row items-start justify-start mix-blend-multiply">
              <div className="rounded-2xl bg-blue-gray-50 flex flex-row items-center justify-center py-0.5 pr-2 pl-2.5 gap-[4px]">
                <div className="relative text-sm leading-[20px] font-medium font-text-md-regular text-blue-gray-700 text-center inline-block min-w-[77px]">
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
          <div className="h-px w-full bg-[#EAECF0] flex flex-row items-start justify-start relative max-w-full shrink-0" />
          <div className="self-stretch flex flex-row items-start justify-center py-0 pr-[43px] pl-0 gap-[12px]">
            <div className="rounded-lg flex flex-row items-start justify-start">
              <div className="w-10 shadow-[0px_1px_2px_rgba(16,_24,_40,_0.05)] rounded-lg bg-white box-border overflow-hidden shrink-0 flex flex-row items-center justify-center py-2 px-[9px] border-[1px] border-solid border-gray-300">
                <CopyIcon className="h-5 w-5 relative overflow-hidden shrink-0 stroke-[#344054]" />
              </div>
            </div>
            <div className="rounded-lg flex flex-row items-start justify-start">
              <div className="w-10 shadow-[0px_1px_2px_rgba(16,_24,_40,_0.05)] rounded-lg bg-white box-border overflow-hidden shrink-0 flex flex-row items-center justify-center py-2 px-[9px] border-[1px] border-solid border-gray-300">
                <Globe02 className="h-5 w-5 relative overflow-hidden shrink-0 stroke-[#98A2B3]" />
              </div>
            </div>
            <div className="rounded-lg flex flex-row items-start justify-start">
              <div className="w-10 shadow-[0px_1px_2px_rgba(16,_24,_40,_0.05)] rounded-lg bg-white box-border overflow-hidden shrink-0 flex flex-row items-center justify-center py-2 px-[9px] border-[1px] border-solid border-gray-300">
                <TwitterIcon className="h-5 w-5 relative overflow-hidden shrink-0 fill-[#98A2B3]" />
              </div>
            </div>
            <div className="rounded-lg flex flex-row items-start justify-start">
              <div className="w-10 shadow-[0px_1px_2px_rgba(16,_24,_40,_0.05)] rounded-lg bg-white box-border overflow-hidden shrink-0 flex flex-row items-center justify-center py-2 px-[9px] border-[1px] border-solid border-gray-300">
                <InstagramIcon className="h-5 w-5 relative overflow-hidden shrink-0 fill-[#98A2B3]" />
              </div>
            </div>
            <div className="rounded-lg flex flex-row items-start justify-start">
              <div className="w-10 shadow-[0px_1px_2px_rgba(16,_24,_40,_0.05)] rounded-lg bg-white box-border overflow-hidden shrink-0 flex flex-row items-center justify-center py-2 px-[9px] border-[1px] border-solid border-gray-300">
                <FacebookIcon className="h-5 w-5 relative overflow-hidden shrink-0 fill-[#98A2B3]" />
              </div>
            </div>
            <div className="rounded-lg flex flex-row items-start justify-start">
              <div className="w-10 shadow-[0px_1px_2px_rgba(16,_24,_40,_0.05)] rounded-lg bg-white box-border overflow-hidden shrink-0 flex flex-row items-center justify-center py-2 px-[9px] border-[1px] border-solid border-gray-300">
                <LinkedInIcon className="h-5 w-5 relative overflow-hidden shrink-0 fill-[#98A2B3]" />
              </div>
            </div>
          </div>
          <button className="cursor-pointer [border:none] py-0 pr-5 pl-0 bg-[transparent] flex flex-row items-start justify-start">
            <div className="rounded-lg flex flex-row items-start justify-start">
              <div className="shadow-[0px_1px_2px_rgba(16,_24,_40,_0.05)] rounded-lg bg-brand-50 overflow-hidden flex flex-row items-center justify-center py-2 px-[15px] gap-[8px] border-[1px] border-solid border-brand-50">
                <Heart className="h-5 w-5 relative overflow-hidden shrink-0 stroke-[#6941C6]" />
                <div className="relative text-sm leading-[20px] font-semibold font-text-md-regular text-slateblue text-left inline-block min-w-[43px]">
                  Salvar
                </div>
              </div>
            </div>
          </button>
        </div>
      </div>
    </section>
  );
};
