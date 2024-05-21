import remarkGfm from "remark-gfm";
import Avatar from "../../assets/Avatar";
import Mail01 from "../../assets/Mail01";

import ReactMarkdown from "react-markdown";
import { ProjectDTO } from "../../pages/Opportunities/Opportunities";

interface ProjectContentProps {
  project: ProjectDTO;
}

export const ProjectContent: React.FC<ProjectContentProps> = ({ project }) => {
  return (
    <section className="self-stretch bg-gray-50 flex flex-col items-center justify-start mq768:pt-0 mq768:px-0 mq768:pb-16 mq1920:py-24 mq1920:px-20 box-border max-w-full text-left mq768:text-xl mq1920:text-5xl text-gray-900 font-text-md-regular">
      <div className="self-stretch flex flex-col mq768:items-start mq1920:items-center justify-start py-0 mq768:px-4 mq1920:px-8 box-border max-w-full">
        <div className="self-stretch flex mq768:flex-col mq1920:flex-row items-start justify-start max-w-full mq1920:gap-[64px]">
          <div className="mq768:self-stretch mq1920:flex-1 flex flex-col items-start justify-start gap-[48px] max-w-full">
            <ReactMarkdown
              children={project.description}
              remarkPlugins={[remarkGfm]}
              className="text-lg text-gray-600"
            />

            <div className="self-stretch mq1920:h-[25vw] flex flex-col items-start justify-start gap-[12px] text-sm text-gray-600">
              <img
                className="self-stretch mq1920:flex-1 relative max-w-full overflow-hidden max-h-full object-cover"
                alt=""
                src="https://source.unsplash.com/a8JHGzB7h4A"
              />
            </div>
            <div className="mq1920:hidden self-stretch flex flex-col items-start justify-start gap-[32px] text-base text-brand-600">
              <div className="self-stretch flex flex-col items-start justify-start gap-[24px]">
                <div className="self-stretch relative leading-[24px] font-semibold">
                  Coordenação
                </div>
                <div className="self-stretch flex flex-col items-start justify-start gap-[24px] text-gray-900">
                  <div className="flex flex-row items-center justify-start py-0 pr-5 pl-0 gap-[12px]">
                    <Avatar className="h-12 w-12 relative rounded-181xl min-h-[48px]" />
                    <div className="flex flex-col items-start justify-start">
                      <div className="relative leading-[24px] font-semibold">
                        {project.professor}
                      </div>
                      <div className="relative leading-[24px] text-gray-600 inline-block min-w-[96px]">
                        Responsável
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch flex flex-row flex-wrap items-center justify-start gap-[12px]">
                    <Avatar className="h-12 w-12 relative rounded-181xl" />
                    <div className="flex-1 flex flex-col items-start justify-start min-w-[184px]">
                      <div className="self-stretch relative leading-[24px] font-semibold">
                        Instituto de Puericultura e Pediatria
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="h-px w-full bg-[#EAECF0] flex flex-col items-start justify-start relative max-w-full shrink-0" />
              <div className="self-stretch flex flex-col items-start justify-start gap-[16px] text-gray-600">
                <div className="self-stretch relative leading-[24px] font-semibold text-brand-600">
                  Endereço
                </div>
                <div className="self-stretch relative leading-[24px]">
                  {project.address}
                </div>
              </div>
              <div className="h-px w-full bg-[#EAECF0] flex flex-col items-start justify-start relative max-w-full shrink-0" />
              <footer className="self-stretch flex flex-col items-start justify-start gap-[16px] text-left text-base text-brand-600 font-text-md-regular">
                <div className="self-stretch relative leading-[24px] font-semibold">
                  Contato
                </div>
                <div className="rounded-lg flex flex-row items-start justify-start py-0 pr-5 pl-0 text-gray-700">
                  <div className="shadow-[0px_1px_2px_rgba(16,_24,_40,_0.05)] rounded-lg bg-white overflow-hidden flex flex-row items-center justify-center py-2 px-[17px] gap-[8px] border-[1px] border-solid border-gray-300">
                    <Mail01 className="h-5 w-5 relative overflow-hidden shrink-0 stroke-[#344054]" />
                    <div className="relative leading-[24px] font-semibold whitespace-nowrap">
                      {project.email}
                    </div>
                  </div>
                </div>
              </footer>
            </div>
          </div>
          <div className="mq768:hidden w-[280px] flex flex-col items-start justify-start gap-[32px] text-base text-brand-600 mq450:gap-[16px]">
            <div className="h-px w-full bg-[#EAECF0] flex flex-col items-start justify-start relative max-w-full shrink-0" />
            <div className="self-stretch flex flex-col items-start justify-start gap-[24px]">
              <div className="self-stretch relative leading-[24px] font-semibold">
                Coordenação
              </div>
              <div className="self-stretch flex flex-col items-start justify-start gap-[24px] text-gray-900">
                <div className="flex flex-row items-center justify-start gap-[12px] mq450:flex-wrap">
                  <Avatar className="h-12 w-12 relative rounded-181xl" />
                  <div className="flex flex-col items-start justify-start">
                    <div className="relative leading-[24px] font-semibold">
                      {project.professor}
                    </div>
                    <div className="relative leading-[24px] text-gray-600 inline-block min-w-[96px]">
                      Responsável
                    </div>
                  </div>
                </div>
                <div className="self-stretch flex flex-row flex-wrap items-center justify-start gap-[12px]">
                  <Avatar className="h-12 w-12 relative rounded-181xl" />
                  <div className="flex-1 flex flex-col items-start justify-start min-w-[143px]">
                    <div className="self-stretch relative leading-[24px] font-semibold">
                      Instituto de Puericultura e Pediatria
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="h-px w-full bg-[#EAECF0] flex flex-col items-start justify-start relative max-w-full shrink-0" />
            <div className="self-stretch flex flex-col items-start justify-start gap-[16px] text-gray-600">
              <div className="self-stretch relative leading-[24px] font-semibold text-brand-600">
                Endereço
              </div>
              <div className="self-stretch relative leading-[24px]">
                {project.address}
              </div>
            </div>
            <div className="h-px w-full bg-[#EAECF0] flex flex-col items-start justify-start relative max-w-full shrink-0" />
            <div className="self-stretch flex flex-col items-start justify-start gap-[16px]">
              <div className="self-stretch relative leading-[24px] font-semibold">
                Contato
              </div>
              <div className="rounded-lg flex flex-row items-start justify-start text-gray-700">
                <div className="shadow-[0px_1px_2px_rgba(16,_24,_40,_0.05)] rounded-lg bg-white overflow-hidden flex flex-row items-center justify-center py-2 px-[17px] gap-[8px] border-[1px] border-solid border-gray-300">
                  <Mail01 className="h-5 w-5 relative overflow-hidden shrink-0 stroke-[#344054]" />
                  <div className="relative leading-[24px] font-semibold whitespace-nowrap">
                    {project.email}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
