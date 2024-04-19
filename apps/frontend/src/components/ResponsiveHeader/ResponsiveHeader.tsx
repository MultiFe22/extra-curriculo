import { FunctionComponent } from "react";
import NavMenuButton from "../../assets/NavMenuButton";
import Logotype from "../../assets/Logotype";
import Logomark from "../../assets/Logomark";

export const ResponsiveHeader: FunctionComponent = () => {
  return (
    <div className="self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-10 box-border max-w-full">
      <div className="flex-1 bg-white flex flex-row items-start justify-start max-w-full">
        <div className="flex-1 box-border flex flex-row items-start justify-start max-w-full border-b-[1px] border-solid border-gray-100">
          <header className="flex-1 flex flex-row items-start justify-start py-4 px-0 box-border max-w-full">
            <div className="flex-1 flex flex-row items-start justify-between py-0 pr-3 pl-4 box-border max-w-full gap-[20px]">
              <div className="w-[142px] flex flex-col items-start justify-start pt-1 px-0 pb-0 box-border">
                <div className="self-stretch flex flex-row items-start justify-start">
                  <div className="flex-1 flex flex-row items-start justify-start gap-[10px]">
                    <div className="flex flex-row items-start justify-start">
                      <Logomark className="h-8 w-8 relative rounded-lg overflow-hidden shrink-0"/>
                    </div>
                    <div className="h-8 flex-1 flex flex-col items-center justify-center">
                      <Logotype className="h-8 flex-1 flex flex-col items-center justify-center"/>
                    </div>
                  </div>
                </div>
              </div>
              <div className="rounded-lg overflow-hidden flex flex-row items-center justify-center p-2">
                <NavMenuButton className="h-6 w-6 relative overflow-hidden shrink-0"/>
              </div>
            </div>
          </header>
        </div>
      </div>
    </div>
  );
};