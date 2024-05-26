import SignUpForm from "../../components/SignUpForm/SignUpForm";
import { SignUpHeader } from "../../components/SignUpHeader";

const SignUp: React.FC = () => {

  return (
    <div className="w-full relative bg-white overflow-hidden flex flex-col items-start justify-start leading-[normal] tracking-[normal]">
      <main className="self-stretch bg-white flex flex-col items-center justify-start pt-12 px-4 pb-44 box-border min-h-[812px] max-w-full">
        <section className="self-stretch flex flex-col items-center justify-start gap-[32px] max-w-full text-left text-sm text-gray-600 font-text-md-regular">
          <SignUpHeader />
          <SignUpForm />
          <div className="self-stretch flex flex-row items-start justify-center py-0 px-5 gap-[4px]">
            <div className="relative leading-[20px] inline-block min-w-[109px]">
              Tem uma conta?
            </div>
            <div
              className="flex flex-row items-start justify-start cursor-pointer text-slateblue"
            >
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

export default SignUp;
