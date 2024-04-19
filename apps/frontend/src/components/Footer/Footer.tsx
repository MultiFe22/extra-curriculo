import { FooterMain } from "../FooterMain";


export const Footer: React.FC = () => {
  return (
    <div className="self-stretch bg-white flex flex-col items-start justify-start py-12 px-0 gap-[48px] text-left text-base text-gray-600 font-text-md-regular">
      <FooterMain />
      <div className="self-stretch flex flex-col items-start justify-start py-0 px-4 gap-[32px] text-left text-base text-gray-500 font-text-md-regular">
      <div className="self-stretch h-px relative bg-gray-200" />
      <div className="self-stretch flex flex-col items-start justify-start gap-[16px]">
        <div className="flex flex-row items-start justify-start py-0 pr-5 pl-0 gap-[16px]">
          <div className="relative leading-[24px] inline-block min-w-[57px]">
            Termos
          </div>
          <div className="relative leading-[24px] inline-block min-w-[89px]">
            Privacidade
          </div>
          <div className="relative leading-[24px] inline-block min-w-[61px]">
            Cookies
          </div>
        </div>
        <footer className="self-stretch relative text-base leading-[24px] font-text-md-regular text-gray-500 text-left">
          © 2024 extra_curriculo. Todos os direitos reservados.
        </footer>
      </div>
    </div>
    </div>
  );
};