import remarkGfm from "remark-gfm";
import Avatar from "../../assets/Avatar";
import Mail01 from "../../assets/Mail01";

import ReactMarkdown from "react-markdown";

export const ProjectContent: React.FC = () => {
  const markdownContent =
    "### Como se inscrever\n" +
    "Pharetra morbi libero id aliquam elit massa integer tellus. Quis felis aliquam ullamcorper porttitor. Pulvinar ullamcorper sit dictumst ut eget a, elementum eu. Maecenas est morbi mattis id in ac pellentesque ac.\n\n" +
    "---\n\n" +
    "### Papéis\n" +
    "Sagittis et eu at elementum, quis in. Proin praesent volutpat egestas sociis sit lorem nunc nunc sit. Eget diam curabitur mi ac. Auctor rutrum lacus malesuada massa ornare et. Vulputate consectetur ac ultrices at diam dui eget fringilla tincidunt.\n\n" +
    "1. Lectus id duis vitae porttitor enim [gravida morbi](#).\n" +
    "2. Eu turpis [posuere semper feugiat](#) volutpat elit, ultrices suspendisse. Auctor vel in vitae placerat.\n" +
    "3. Suspendisse maecenas ac [donec scelerisque](#) diam sed est duis purus.\n\n" +
    "---\n\n" +
    "### Requisitos\n" +
    "Pharetra morbi libero id aliquam elit massa integer tellus.\n\n" +
    "---\n\n" +
    "### Atribuições\n" +
    "Pharetra morbi libero id aliquam elit massa integer tellus.\n";

  return (
    <section className="self-stretch bg-white flex flex-col items-center justify-start pt-0 px-0 pb-16 box-border max-w-full text-left text-xl text-gray-900 font-text-md-regular">
      <div className="self-stretch flex flex-col items-start justify-start py-0 px-4 box-border max-w-full">
        <div className="self-stretch flex flex-col items-start justify-start max-w-full">
          <div className="self-stretch flex flex-col items-start justify-start gap-[48px] max-w-full">
            <div className="self-stretch flex flex-col items-start justify-start gap-[32px] text-lg text-gray-600">
              <div className="self-stretch relative leading-[28px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                ullamcorper mattis lorem non. Ultrices praesent amet ipsum justo
                massa. Eu dolor aliquet risus gravida nunc at feugiat consequat
                purus. Non massa enim vitae duis mattis. Vel in ultricies vel
                fringilla.
              </div>
              <div className="h-px w-full bg-[#EAECF0] flex flex-col items-start justify-start relative max-w-full shrink-0" />
            </div>
            <ReactMarkdown
              children={markdownContent}
              remarkPlugins={[remarkGfm]}
              className="text-lg text-gray-600"
            />

            <div className="self-stretch flex flex-col items-start justify-start gap-[12px] text-sm text-gray-600">
              <img
                className="self-stretch relative max-w-full overflow-hidden max-h-full object-cover"
                alt=""
                src="https://source.unsplash.com/a8JHGzB7h4A"
              />
            </div>
            <div className="self-stretch flex flex-col items-start justify-start gap-[32px] text-base text-brand-600">
              <div className="self-stretch flex flex-col items-start justify-start gap-[24px]">
                <div className="self-stretch relative leading-[24px] font-semibold">
                  Coordenação
                </div>
                <div className="self-stretch flex flex-col items-start justify-start gap-[24px] text-gray-900">
                  <div className="flex flex-row items-center justify-start py-0 pr-5 pl-0 gap-[12px]">
                    <Avatar className="h-12 w-12 relative rounded-181xl min-h-[48px]" />
                    <div className="flex flex-col items-start justify-start">
                      <div className="relative leading-[24px] font-semibold">
                        Verônica Pinheiro Viana
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
                  R. Antônio Barros de Castro, 119 - Cidade Universitária, Rio
                  de Janeiro - RJ, 21941-853
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
                      contato@email.com
                    </div>
                  </div>
                </div>
              </footer>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
