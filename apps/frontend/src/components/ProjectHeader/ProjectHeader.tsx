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
import { ProjectDTO } from "../../pages/Opportunities/Opportunities";
import { ResponsiveWrapper } from "../ResponsiveWrapper";

interface ProjectHeaderProps {
  project: ProjectDTO;
}

interface TagButtonProps {
  name: string;
  txtColor: string;
  bgColor: string;
  Icon?: React.ReactNode;
}

const TagButton: React.FC<TagButtonProps> = ({
  name,
  txtColor,
  bgColor,
  Icon,
}) => {
  const minW = name.length * 6;

  return (
    <button className="cursor-pointer [border:none] p-0 bg-[transparent] flex flex-row items-start justify-start mix-blend-multiply">
      <div
        style={{ backgroundColor: bgColor }}
        className={`rounded-2xl flex flex-row items-center justify-center py-0.5 pr-2 pl-2.5 gap-[4px]`}
      >
        {Icon}
        <div
          style={{ color: txtColor }}
          className={`relative text-sm leading-[20px] font-medium font-text-md-regular text-center inline-block min-w-[${minW}px]`}
        >
          {name}
        </div>
      </div>
    </button>
  );
};

const tagBgColors = [
  "#f0f9ff",
  "#fdf2fa",
  "#fff6ed",
  "#f8f9fc",
  "#f4f3ff",
  "#f9fafb",
  "#f7fee7",
  "#fef2f2",
  "#fefce8",
  "#ecfeff",
];
const tagTxtColor = [
  "#026aa2",
  "#c11574",
  "#c4320a",
  "#363e72",
  "#5925dc",
  "#344154",
  "#4ade80",
  "#b91c1c",
  "#b45309",
  "#0ea5e9",
];

export const ProjectHeader: React.FC<ProjectHeaderProps> = ({ project }) => {
  const updatedAtDate = new Date(parseInt(project.updated_at));
  const day = updatedAtDate.getDate();
  const month = updatedAtDate.toLocaleString("pt-BR", { month: "long" });
  const year = updatedAtDate.getFullYear();

  return (
    <section className="self-stretch flex flex-col mq768:items-start mq1920:items-center justify-start mq768:pt-0 mq768:px-0 mq1920:py-24 mq1920:px-28 mq768:pb-16 box-border mq768:gap-[64px] max-w-full text-left text-base text-brand-600 font-text-md-regular">
      <img
        className="self-stretch relative max-w-full overflow-hidden max-h-full object-cover mq1920:hidden"
        alt=""
        src="https://source.unsplash.com/a8JHGzB7h4A"
      />
      <div className="self-stretch flex flex-row mq1920:flex-wrap mq768:items-start mq1920:items-center justify-start py-0 mq768:px-4 m1920:px-8 mq1920:gap-[32px] box-border max-w-full text-sm">
        <div className="flex-1 flex flex-col items-start justify-start mq768:gap-[32px] mq1920:gap-[48px] max-w-full mq1920:box-border mq1920:py-5 mq1920:px-0">
          <div className="self-stretch flex flex-col items-start justify-start mq1920:gap-[24px] mq768:gap-[16px] mq1920:max-w-full">
            <ResponsiveWrapper
              isMinimum={false}
              tailwindClasses="self-stretch flex flex-col items-start justify-start gap-[16px]"
            >
              <div className="self-stretch flex flex-row mq768:flex-wrap items-center justify-start gap-[10px]">
                <button className="cursor-pointer [border:none] p-0 bg-[transparent] flex flex-row items-start justify-start mix-blend-multiply">
                  <div className="rounded-2xl bg-success-50 flex flex-row items-center justify-center mq768:py-0.5 mq768:pr-2.5 mq768:pl-2 mq1920:py-1 mq1920:pr-3 mq1920:pl-2.5 gap-[6px]">
                    <Dot className="h-2 w-2 relative overflow-hidden shrink-0 fill-[#12B76A]" />
                    <div className="relative text-sm leading-[20px] font-medium font-text-md-regular text-success-700 text-center inline-block min-w-[78px]">
                      {project.is_recruiting ? "Recrutando" : "Não recrutando"}
                    </div>
                  </div>
                </button>
                <div className="flex-1 relative mq768:leading-[20px] mq1920:leading-[24px] font-semibold inline-block min-w-[145px] mq1920:max-w-full">
                  Atualizado em {day} de {month} de {year}
                </div>
              </div>
              <h1 className="mq1920:hidden m-0 self-stretch relative text-17xl tracking-[-0.02em] leading-[44px] font-semibold font-inherit text-gray-900">
                {project.name}
              </h1>
            </ResponsiveWrapper>
            <div className="mq768:hidden self-stretch flex flex-col items-start justify-start gap-[16px] text-center text-xs text-slateblue">
              <h1 className="m-0 self-stretch relative text-29xl tracking-[-0.02em] leading-[60px] font-semibold font-inherit text-gray-900 text-left">
                {project.name}
              </h1>
            </div>
          </div>
          <ResponsiveWrapper
            isMinimum={true}
            minWidth="769px"
            tailwindClasses="self-stretch flex flex-col items-start justify-start gap-[32px] max-w-full text-center text-xs text-gray-700 mq450:gap-[16px]"
          >
            <div className="self-stretch flex flex-row flex-wrap items-start justify-start py-0 mq768:pr-[23px] mq1920:pr-7 pl-0 box-border gap-[10px] mq768:min-h-[160px] mq1920:min-h-[58px] text-center text-xs text-gray-700">
              <TagButton
                bgColor={tagBgColors[1]}
                txtColor={tagTxtColor[1]}
                name={project.modality}
                Icon={
                  <Building07 className="h-3 w-3 relative overflow-hidden shrink-0 stroke-[#EE46BC]" />
                }
              />
              <TagButton
                bgColor={tagBgColors[0]}
                txtColor={tagTxtColor[0]}
                name={project.category_name}
                Icon={
                  <Atom01 className="h-3 w-3 relative overflow-hidden shrink-0 stroke-[#0BA5EC]" />
                }
              />
              {project.tags.map((tag, index) => (
                <TagButton
                  key={index}
                  name={tag}
                  txtColor={tagTxtColor[index % tagTxtColor.length]}
                  bgColor={tagBgColors[index % tagTxtColor.length]}
                />
              ))}
            </div>
            <div className="h-px w-full bg-[#EAECF0] flex flex-row items-start justify-start relative max-w-full shrink-0" />
            <ResponsiveWrapper
              isMinimum={true}
              minWidth="769px"
              tailwindClasses="self-stretch flex flex-row items-center justify-between max-w-full gap-[20px]"
            >
              <div className="self-stretch flex flex-row items-start justify-left py-0 pr-[43px] pl-0 gap-[12px]">
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
            </ResponsiveWrapper>
          </ResponsiveWrapper>
        </div>
        <img
          className="mq768:hidden h-[512px] flex-1 relative max-w-full overflow-hidden object-cover min-w-[541px] min-h-[512px] mq950:min-w-full"
          alt=""
          src="https://source.unsplash.com/a8JHGzB7h4A"
        />
      </div>
    </section>
  );
};
