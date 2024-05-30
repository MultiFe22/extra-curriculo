import InputField from "./InputField";

const SignUpForm: React.FC = () => {
  return (
    <form className="m-0 self-stretch rounded-xl flex flex-col items-center justify-start gap-[24px] max-w-full">
      <div className="self-stretch flex flex-col items-start justify-start gap-[20px] mq1920:max-w-full:">
        <InputField
          label="Nome*"
          contentPlaceholder="Preencha seu nome completo"
        />
        <InputField label="Email*" contentPlaceholder="Preencha seu email" />
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
      </button>
    </form>
  );
};

export default SignUpForm;
