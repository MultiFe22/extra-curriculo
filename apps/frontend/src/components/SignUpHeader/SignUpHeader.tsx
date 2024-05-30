import { useNavigate } from "react-router-dom";
import Logomark from "../../assets/Logomark";

export const SignUpHeader: React.FC = () => {
    const navigate = useNavigate();

    const handleNavigation = () => {
        navigate("/");
    };
    return (
    <div className="self-stretch flex flex-col items-start justify-start gap-[24px] text-left mq768:text-5xltext-gray-900 font-text-md-regular">
      <div onClick={handleNavigation} className="flex flex-row items-start justify-start py-0 pl-0">
        <Logomark className="h-12 w-12 relative rounded-xl  overflow-hidden shrink-0" />
      </div>

      <div className="self-stretch flex flex-col items-start justify-start gap-[8px]">
        <h2 className="m-0 self-stretch relative text-inherit leading-[32px] font-semibold font-inherit">
          Criar sua conta
        </h2>
        <p className="m-0 self-stretch relative text-base leading-[24px] text-gray-600">
          Sugestões baseadas no seu perfil, favoritos, cadastro de oportunidades
          e muito mais.
        </p>
      </div>
    </div>
  );
};
