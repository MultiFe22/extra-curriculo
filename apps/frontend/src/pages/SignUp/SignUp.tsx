import { useEffect, useState } from "react";
import Logomark from "../../assets/Logomark";
import Logotype from "../../assets/Logotype";
import InputField from "../../components/SignUpForm/InputField";
import SignUpForm from "../../components/SignUpForm/SignUpForm";
import { SignUpHeader } from "../../components/SignUpHeader";
import { useNavigate } from "react-router-dom";

const MobileVersion: React.FC = () => {
  return (
    <div className="w-full relative bg-white overflow-hidden flex flex-col items-start justify-start leading-[normal] tracking-[normal]">
      <main className="self-stretch bg-white flex flex-col items-center justify-start pt-12 px-4 pb-44 box-border min-h-[812px] max-w-full">
        <section className="self-stretch flex flex-col items-center justify-start gap-[32px] max-w-full text-left text-sm text-gray-600 font-text-md-regular">
          <SignUpHeader />
          <SignUpForm />
          <div className="self-stretch flex flex-row items-start justify-center py-0 px-5 gap-[4px] mq1920:text-sm mq1920:text-gray-600">
            <div className="relative leading-[20px] inline-block min-w-[109px]">
              Tem uma conta?
            </div>
            <div className="flex flex-row items-start justify-start cursor-pointer text-slateblue">
              <div className="flex flex-row items-center justify-center">
                <b className="relative leading-[20px] font-semibold inline-block min-w-[42px]">
                  Entrar
                </b>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

const DesktopVersion: React.FC = () => {
    const navigate = useNavigate();

    const handleNavigation = () => {
        navigate("/");
    };
    return (
    <div className="w-full relative bg-white overflow-hidden flex flex-row items-start justify-start leading-[normal] tracking-[normal] [row-gap:20px] text-left text-17xl text-gray-900 font-text-md-regular mq1525:flex-wrap min-h-screen">
      <div className="flex-1 flex flex-col items-start justify-start pt-8 px-0 pb-0 box-border gap-[150px] min-w-[624px] max-w-full mq1525:flex-1 mq850:gap-[37px] mq850:min-w-full mq1225:gap-[75px]">
        <div className="w-[206px] flex flex-row items-start justify-start py-0 px-8 box-border">
          <div onClick={handleNavigation} className="flex-1 flex flex-row items-start justify-start cursor-pointer">
            <div className="flex-1 flex flex-row items-start justify-start gap-[10px]">
              <div className="shadow-[0px_1px_3px_rgba(16,_24,_40,_0.1),_0px_1px_2px_rgba(16,_24,_40,_0.06)] flex flex-row items-start justify-start">
                <Logomark className="h-8 w-8 relative rounded-lg overflow-hidden shrink-0" />
              </div>
              <div className="h-8 flex-1 flex flex-col items-center justify-center">
                <Logotype className="self-stretch h-[25.7px] relative max-w-full overflow-hidden shrink-0" />
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-col items-start justify-start gap-[118px] max-w-full mq850:gap-[29px] mq1225:gap-[59px]">
          <div className="self-stretch flex flex-col items-center justify-start py-0 px-5 box-border max-w-full">
            <div className="w-[360px] flex flex-col items-center justify-start gap-[32px] max-w-full mq450:gap-[16px]">
              <div className="self-stretch flex flex-col items-start justify-start gap-[12px]">
                <h1 className="m-0 self-stretch relative text-inherit tracking-[-0.02em] leading-[44px] font-semibold font-inherit mq850:text-10xl mq850:leading-[35px] mq450:text-3xl mq450:leading-[26px]">
                  Criar sua conta
                </h1>
                <p className="m-0 self-stretch relative text-base leading-[24px] text-gray-600">
                  Sugestões baseadas no seu perfil, favoritos, cadastro de
                  oportunidades e muito mais.
                </p>
              </div>
              <form className="m-0 self-stretch rounded-xl flex flex-col items-center justify-start gap-[24px] max-w-full">
                <div className="self-stretch flex flex-col items-start justify-start gap-[20px] max-w-full">
                  <InputField
                    label="Nome*"
                    contentPlaceholder="Preencha seu nome completo"
                  />
                  <InputField
                    label="Email*"
                    contentPlaceholder="Preencha seu email"
                  />
                  <InputField
                    label="Senha*"
                    contentPlaceholder="Crie uma senha"
                    hintText="Deve ter pelo menos 8 caracteres."
                  />
                </div>
                <button className="cursor-pointer [border:none] p-0 bg-[transparent] self-stretch flex flex-col items-start justify-start gap-[16px] max-w-full">
                  <div className="self-stretch rounded-lg flex flex-row items-start justify-start max-w-full">
                    <div className="flex-1 shadow-[0px_1px_2px_rgba(16,_24,_40,_0.05)] rounded-lg bg-brand-600 box-border overflow-hidden flex flex-row items-center justify-center py-2 px-5 whitespace-nowrap max-w-full border-[1px] border-solid border-brand-600">
                      <b className="relative text-base leading-[24px] font-semibold font-text-md-regular text-white text-left inline-block min-w-[86px]">
                        Criar conta
                      </b>
                    </div>
                  </div>
                  <div className="self-stretch hidden flex-col items-center justify-center gap-[12px]">
                    <div className="self-stretch shadow-[0px_1px_2px_rgba(16,_24,_40,_0.05)] rounded-lg bg-white overflow-hidden flex flex-row items-center justify-center py-2 px-4 gap-[12px] whitespace-nowrap border-[1px] border-solid border-gray-300">
                      <img
                        className="h-6 w-6 relative overflow-hidden shrink-0"
                        alt=""
                      />
                      <div className="relative text-base leading-[24px] font-semibold font-text-md-regular text-gray-700 text-left">
                        Sign up with Google
                      </div>
                    </div>
                    <div className="self-stretch shadow-[0px_1px_2px_rgba(16,_24,_40,_0.05)] rounded-lg bg-white overflow-hidden hidden flex-row items-center justify-center py-2 px-4 gap-[12px] whitespace-nowrap border-[1px] border-solid border-gray-300">
                      <img
                        className="h-6 w-6 relative overflow-hidden shrink-0"
                        alt=""
                      />
                      <div className="relative text-base leading-[24px] font-semibold font-text-md-regular text-gray-700 text-left">
                        Sign in with Facebook
                      </div>
                    </div>
                    <div className="self-stretch shadow-[0px_1px_2px_rgba(16,_24,_40,_0.05)] rounded-lg bg-white overflow-hidden hidden flex-row items-center justify-center py-2 px-4 gap-[12px] whitespace-nowrap border-[1px] border-solid border-gray-300">
                      <img
                        className="h-6 w-6 relative overflow-hidden shrink-0"
                        alt=""
                      />
                      <div className="relative text-base leading-[24px] font-semibold font-text-md-regular text-gray-700 text-left">
                        Sign in with Apple
                      </div>
                    </div>
                    <div className="self-stretch shadow-[0px_1px_2px_rgba(16,_24,_40,_0.05)] rounded-lg bg-white overflow-hidden hidden flex-row items-center justify-center py-2 px-4 gap-[12px] whitespace-nowrap border-[1px] border-solid border-gray-300">
                      <img
                        className="h-6 w-6 relative overflow-hidden shrink-0"
                        alt=""
                      />
                      <div className="relative text-base leading-[24px] font-semibold font-text-md-regular text-gray-700 text-left">
                        Sign in with Twitter
                      </div>
                    </div>
                  </div>
                </button>
              </form>
              <div className="self-stretch flex flex-row items-start justify-center py-0 px-5 gap-[4px] text-sm text-gray-600 mq450:flex-wrap">
                <div className="relative leading-[20px] inline-block min-w-[109px]">
                  Tem uma conta?
                </div>
                <div className="flex flex-row items-start justify-start cursor-pointer text-slateblue">
                  <div className="flex flex-row items-center justify-center">
                    <b className="relative leading-[20px] font-semibold inline-block min-w-[42px]">
                      Entrar
                    </b>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex-1 flex flex-row items-end justify-start p-14 box-border relative min-w-[624px] min-h-[960px] max-w-full text-white ">
        <img
          className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full object-cover"
          loading="lazy"
          alt=""
          src="ilha-do-catalao.jpeg"
        />
        <div className="flex-1 flex flex-col items-start justify-start gap-[24px] max-w-full z-[1]">
          <h1 className="m-0 self-stretch relative text-inherit tracking-[-0.02em] leading-[44px] font-medium font-inherit mq850:text-10xl mq850:leading-[35px] mq450:text-3xl mq450:leading-[26px]">
            “Facilitamos a divulgação e busca por oportunidades
            extracurriculares na UFRJ, conectando estudantes e corpo docente.”
          </h1>
          <div className="self-stretch flex flex-col items-start justify-start gap-[12px] max-w-full text-11xl">
            <h1 className="m-0 self-stretch relative text-inherit leading-[38px] font-semibold font-inherit mq850:text-5xl mq850:leading-[30px] mq450:text-lg mq450:leading-[23px]">
              Felipe Vidal e Iago Rafael
            </h1>
            <div className="self-stretch flex flex-row items-start justify-start gap-[12px] max-w-full text-lg">
              <div className="flex-1 flex flex-col items-start justify-start gap-[2px] max-w-full">
                <div className="self-stretch relative leading-[28px] font-semibold">
                  Idealizadores e Desenvolvedores
                </div>
                <div className="self-stretch relative text-base leading-[24px] font-medium">
                  extra_curriculo
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const SignUp: React.FC = () => {
  const [isLargeScreen, setIsLargeScreen] = useState<boolean>(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia(`(min-width: ${"768px"})`);

    const handleResize = () => {
      setIsLargeScreen(mediaQuery.matches);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }); // React to changes in minWidth
  if (!isLargeScreen) {
    return <MobileVersion />;
  } else {
    return <DesktopVersion />;
  }
};

export default SignUp;
