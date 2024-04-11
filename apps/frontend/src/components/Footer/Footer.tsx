export const Footer: React.FC = () => {
  return (
    <footer className="self-stretch bg-gray-25 flex flex-col items-start justify-start pt-16 px-20 pb-12 box-border gap-[64px] max-w-full text-left text-base text-gray-600 font-text-md-regular mq800:gap-[32px] mq800:pl-10 mq800:pr-10 mq800:box-border mq450:gap-[16px]">
      <div className="self-stretch flex flex-row items-start justify-start py-0 px-8 box-border max-w-full mq800:gap-[24px]">
        <div className="flex-1 flex flex-col items-start justify-start gap-[32px] max-w-full mq800:gap-[16px]">
          <div className="self-stretch flex flex-row items-start justify-center py-0 px-5">
            <div className="w-[142px] flex flex-row items-start justify-start">
              <div className="flex-1 flex flex-row items-start justify-start gap-[10px]">
                <div className="shadow-[0px_1px_3px_rgba(16,_24,_40,_0.1),_0px_1px_2px_rgba(16,_24,_40,_0.06)] flex flex-row items-start justify-start">
                  <img
                    className="h-8 w-8 relative rounded-lg overflow-hidden shrink-0"
                    alt=""
                    src="/content-1.svg"
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
                    alt=""
                    src="/vector-1.svg"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-row items-start justify-between py-0 px-[332.5px] gap-[20px] mq800:pl-[83px] mq800:pr-[83px] mq800:box-border mq450:pl-5 mq450:pr-5 mq450:box-border mq1350:flex-wrap mq1350:pl-[166px] mq1350:pr-[166px] mq1350:box-border">
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
                  <div className="relative leading-[24px] font-semibold inline-block min-w-[63px]">
                    Contato
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-row items-center justify-start">
              <div className="flex flex-row items-start justify-start">
                <div className="flex flex-row items-center justify-center">
                  <div className="relative leading-[24px] font-semibold inline-block min-w-[62px]">
                    Careers
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-row items-center justify-start">
              <div className="flex flex-row items-start justify-start">
                <div className="flex flex-row items-center justify-center">
                  <div className="relative leading-[24px] font-semibold inline-block min-w-[36px]">
                    Help
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
      <div className="self-stretch flex flex-col items-start justify-start py-0 px-8 box-border gap-[32px] max-w-full text-gray-500 mq800:gap-[16px]">
        <div className="self-stretch h-px relative bg-gray-200" />
        <div className="self-stretch flex flex-row flex-wrap items-start justify-start gap-[32px] max-w-full mq800:gap-[16px]">
          <div className="flex-1 relative leading-[24px] inline-block min-w-[233px] max-w-full">
            © 2024 Untitled UI. All rights reserved.
          </div>
          <div className="w-[196px] flex flex-row items-start justify-start gap-[16px]">
            <div className="relative leading-[24px] inline-block min-w-[47px]">
              Terms
            </div>
            <div className="flex-1 relative leading-[24px] inline-block min-w-[56px]">
              Privacy
            </div>
            <div className="flex-1 relative leading-[24px] inline-block min-w-[61px]">
              Cookies
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}