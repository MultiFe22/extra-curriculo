import { FooterLower } from "../FooterLower";
import { FooterMain } from "../FooterMain";

export const Footer: React.FC = () => {
  return (
    <div className="self-stretch mq768:bg-white mq1920:bg-gray-25 flex flex-col items-start justify-start mq1920:pt-16 mq768:py-12 mq768:px-0 mq1920:px-20 mq1920:pb-12 mq768:gap-[48px] mq1425:box-border mq1425:gap-[32px] mq1425:pl-10 mq1425:pr-10 mq768:text-left mq768:text-base mq768:text-gray-600 mq768:font-text-md-regular">
      <FooterMain />
      <FooterLower />
    </div>
  );
};
