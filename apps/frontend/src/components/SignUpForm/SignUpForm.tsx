import { useLocation, useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import InputField from "./InputField";
import { useEffect, useState } from "react";

interface LoginCredentials {
  email: string;
  password: string;
}

interface SignUpForm {
  username: string;
  email: string;
  password: string;

}

const login = async (credentials: LoginCredentials): Promise<number> => {
  const response = await fetch("http://localhost:8000/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
    body: JSON.stringify(credentials),
  });

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.message || "Failed to login");
  }

  return response.status;
};

const signup = async (credentials: SignUpForm): Promise<number> => {
  const response = await fetch("http://localhost:8000/signup", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
    body: JSON.stringify(credentials),
  });

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.message || "Failed to sign up");
  }

  return response.status;
}

const useLogin = () => {
  return useMutation<number, Error, LoginCredentials>({
    mutationFn: login,
    onSuccess: (data: number) => {
      // Handle successful login
      console.log("Login successful:", data);
    },
    onError: (error: Error) => {
      // Handle login error
      console.error("Login error:", error);
    },
  });
};

const useSignUp = () => {
  return useMutation<number, Error, SignUpForm>({
    mutationFn: signup,
    onSuccess: (data: number) => {
      // Handle successful sign up
      console.log("Sign up successful:", data);
    },
    onError: (error: Error) => {
      // Handle sign up error
      console.error("Sign up error:", error);
    },
  });
}

const SignUpForm: React.FC = () => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const location = useLocation();
  const loginMutation = useLogin();
  const signUpMutation = useSignUp();
  
  const navigate = useNavigate();
  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  useEffect(() => {
    if (loginMutation.isSuccess) {
      setName("");
      setEmail("");
      setPassword("");
      navigate("/");
    }
    if (signUpMutation.isSuccess) {
      setName("");
      setEmail("");
      setPassword("");
      navigate("/");
    }
  }, [loginMutation.isSuccess, signUpMutation.isSuccess ,navigate]);

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };


  const isLogin = location.pathname === "/login";

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isLogin) {
      loginMutation.mutate({ email, password });
    }
    else {
      signUpMutation.mutate({ username: name, email, password });
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="m-0 self-stretch rounded-xl flex flex-col items-center justify-start gap-[24px] max-w-full"
    >
      <div className="self-stretch flex flex-col items-start justify-start gap-[20px] mq1920:max-w-full">
        {!isLogin && (
          <InputField
            label="Nome*"
            contentPlaceholder="Preencha seu nome completo"
            value={name}
            setValue={handleNameChange}
          />
        )}
        <InputField
          label={isLogin ? "Email" : "Email*"}
          contentPlaceholder="Preencha seu email"
          value={email}
          setValue={handleEmailChange}
        />
        <InputField
          label={isLogin ? "Senha" : "Senha*"}
          contentPlaceholder="Crie uma senha"
          hintText={isLogin ? undefined : "Deve ter pelo menos 8 caracteres."}
          isPassword={true}
          value={password}
          setValue={handlePasswordChange}
        />
      </div>
      <button
        type="submit"
        className="cursor-pointer [border:none] p-0 bg-[transparent] self-stretch flex flex-col items-start justify-start gap-[16px] max-w-full"
      >
        <div className="self-stretch rounded-lg flex flex-row items-start justify-start max-w-full">
          <div className="flex-1 shadow-[0px_1px_2px_rgba(16,_24,_40,_0.05)] rounded-lg bg-brand-600 box-border overflow-hidden flex flex-row items-center justify-center py-2 px-5 whitespace-nowrap max-w-full border-[1px] border-solid border-brand-600">
            <b className="relative text-base leading-[24px] font-semibold font-text-md-regular text-white text-left inline-block">
              {isLogin ? "Entrar" : "Criar conta"}
            </b>
          </div>
        </div>
      </button>
    </form>
  );
};

export default SignUpForm;
