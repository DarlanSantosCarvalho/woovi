"use client";
import { useState } from "react";
import Logo from "../assets/Logo.png";
import Image from "next/image";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useForm, SubmitHandler } from "react-hook-form";
import Link from "next/link";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/navigation";

type Inputs = {
  cpf: string;
  password: string;
};

export default function MainPage() {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit = (data: Inputs) => {
    axios
      .post("http://localhost:8080/Login", {
        cpf: data.cpf,
        password: data.password,
      })
      .then((res) => {
        console.log("Aqui", res);
        if (res.data.Status === "200") {
          toast.success("Cadastro efetuado com sucesso!");
          // router.push("/metodoPagamento");
        } else if (res.data.Status === "400") {
          toast.warning("Senha ou CPF incorretos");
        } else {
          toast.error("Ocorreu um erro ao tentar efetuar o cadastro.");
        }
      })
      .catch((error) => {
        toast.error("Ocorreu um erro ao tentar efetuar o cadastro.");
        console.log("Aqui", error);
      });
  };

  const [showPassword, setShowPassword] = useState(false);
  const [cpf, setCpf] = useState();

  function changePasswordToText() {
    setShowPassword(!showPassword);
  }

  function handleCpfChange(value: any) {
    const notFormattedCpf = value.target.value;
    const formattedCpf = notFormattedCpf
      .replace(/\D/g, "")
      .replace(/(\d{3})(\d)/, "$1.$2")
      .replace(/(\d{3})(\d)/, "$1.$2")
      .replace(/(\d{3})(\d)/, "$1-$2")
      .replace(/(-\d{2})\d+?$/, "$1");
    setCpf(formattedCpf);
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
            <ToastContainer></ToastContainer>
            <div className="flex flex-col justify-center items-center">
              <input
                value={cpf}
                {...register("cpf", { required: true })}
                type="text"
                placeholder="CPF"
                className="p-4 py-4 mt-10 rounded-lg w-[60%] placeholder: text-center md:w-[40%] lg:w-[20%]"
                onChange={handleCpfChange}
              />
              {errors.cpf && (
                <span className="font-bold text-white">
                  Esse campo é obrigatório
                </span>
              )}
              <div className="relative w-[60%] md:w-[40%] lg:w-[25%] mt-10">
                <input
                  {...register("password", { required: true, minLength: 7 })}
                  type={showPassword ? "text" : "password"}
                  placeholder="Senha"
                  className="p-4 py-4 rounded-lg text-center w-full placeholder:text-center"
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

              <button
                className="py-4 rounded-xl mt-10 text-2xl font-bold w-[40%] placeholder: text-center md:w-[40%] lg:w-[10%] bg-white hover:bg-orange-400 hover:text-white hover:duration-300"
                type="submit"
                value="Login"
              >
                Login
              </button>
              <h2 className="text-xl font-bold text-white mt-10">
                Não tem cadastro?{" "}
                <span className="underline cursor-pointer">
                  <Link href={"/cadastro"}>Cadastre-se agora</Link>
                </span>
              </h2>
            </div>
          </div>
        </main>
        <html className="bg-laranja"></html>
      </form>
    </body>
  );
}
