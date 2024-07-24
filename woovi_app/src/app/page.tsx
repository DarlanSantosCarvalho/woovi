"use client";
import { useState } from "react";
import Logo from "../assets/Logo.png";
import Image from "next/image";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useRouter } from "next/navigation";
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  username: string;
  password: string;
};

export default function MainPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);

  function changePasswordToText() {
    setShowPassword(!showPassword);
  }

  function logIn() {
    router.push("/metodoPagamento");
  }

  return (
    <body>
      <form onSubmit={handleSubmit(onSubmit)}>
        <main className="flex flex-col justify-between">
          <Image
            className="mx-auto mt-10"
            width={120}
            height={120}
            src={Logo}
            alt="Logo da empresa"
          />
          <h1 className="text-3xl text-center mt-14 font-bold text-white">
            Seja bem-vindo ao Sunshine Bank
          </h1>
          <div>
            <div className="flex flex-col justify-center items-center">
              <input
                {...(register("username"),
                {
                  required: true,
                  minLength: 7,
                  maxLength: 40,
                })}
                type="text"
                placeholder="Email de acesso"
                className="p-4 py-4 mt-10 rounded-lg w-[60%] placeholder: text-center md:w-[40%] lg:w-[18%]"
              />
              {errors.username && (
                <span className="font-bold text-white">
                  Esse campo é obrigatório
                </span>
              )}
              <div className="relative w-[60%] md:w-[40%] lg:w-[18%] mt-10">
                <input
                  {...(register("password"),
                  {
                    required: true,
                    minLength: 7,
                  })}
                  type={showPassword ? "text" : "password"}
                  placeholder="Senha"
                  className="p-4 py-4 rounded-lg w-full placeholder:text-center"
                />
                {errors.password && (
                  <span className="font-bold text-white">
                    Esse campo é obrigatório
                  </span>
                )}
                {showPassword ? (
                  <FaEyeSlash
                    onClick={changePasswordToText}
                    size={30}
                    className="cursor-pointer text-black absolute right-3 top-1/2 transform -translate-y-1/2"
                  />
                ) : (
                  <FaEye
                    onClick={changePasswordToText}
                    size={30}
                    className="cursor-pointer text-black absolute right-3 top-1/2 transform -translate-y-1/2"
                  />
                )}
              </div>

              <input
                className="py-4 rounded-xl mt-10 text-2xl font-bold w-[40%] placeholder: text-center md:w-[40%] lg:w-[10%] bg-white hover:bg-orange-400 hover:text-white hover:duration-300"
                type="submit"
                value="Login"
              />
            </div>
          </div>
        </main>
        <html className="bg-laranja"></html>
      </form>
    </body>
  );
}
