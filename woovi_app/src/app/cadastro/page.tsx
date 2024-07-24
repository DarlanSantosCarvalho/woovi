"use client";
import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import Image from "next/image";
import Logo from "../../assets/Logo.png";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import axios from "axios";

type Inputs = {
  username: string;
  email: string;
  birthday: string;
  phone: string;
  cpf: string;
  address: string;
  cep: string;
  password: string;
  rg: string;
};

export default function Cadastro() {
  const [showPassword, setShowPassword] = useState(false);
  const [cpf, setCpf] = useState();
  const [rg, setRg] = useState();
  const [cep, setCep] = useState();

  function changePasswordToText() {
    setShowPassword(!showPassword);
  }

  function handleCpfChange(event: any) {
    const notFormattedCpf = event.target.value;
    const formattedCpf = notFormattedCpf
      .replace(/\D/g, "")
      .replace(/(\d{3})(\d)/, "$1.$2")
      .replace(/(\d{3})(\d)/, "$1.$2")
      .replace(/(\d{3})(\d)/, "$1-$2")
      .replace(/(-\d{2})\d+?$/, "$1");
    setCpf(formattedCpf);
  }

  function handleRgChange(event: any) {
    const notFormattedRg = event.target.value;
    const formattedRg = notFormattedRg
      .replace(/\D/g, "")
      .replace(/(\d{2})(\d)/, "$1.$2")
      .replace(/(\d{3})(\d)/, "$1.$2")
      .replace(/(\d{3})(\d)/, "$1-$2")
      .replace(/(-\d{2})\d+?$/, "$1");
    setRg(formattedRg);
  }

  function handleCepChange(event: any) {
    const notFormattedCep = event.target.value;
    const formattedCep = notFormattedCep
      .replace(/\D/g, "")
      .replace(/(\d{5})(\d)/, "$1-$2")
      .replace(/(-\d{3})\d+?$/, "$1");

    setCep(formattedCep);
  }

  function qualquer() {
    axios({
      method: "get",
      url: "https://api.brasilaberto.com/v1/zipcode/41098030",
      responseType: "stream",
    }).then(function (response) {
      const responseData = response.data;
      console.log(responseData);
    });
  }

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  return (
    <body>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h1 onClick={qualquer}>CLIQUE AQUI</h1>
        <main className="flex flex-col justify-between">
          <Image
            className="mx-auto mt-10"
            width={120}
            height={120}
            src={Logo}
            alt="Logo da empresa"
          />
          <h1 className="text-3xl text-center mt-14 font-bold text-white">
            Faça o seu cadastro e seja bem-vindo ao banco mais ensolarado do
            país!
          </h1>
          <div>
            <div className="flex flex-col justify-center items-center">
              <input
                {...(register("username"),
                {
                  required: true,
                })}
                type="text"
                placeholder="Nome de usuário"
                className="p-4 py-4 mt-10 rounded-lg w-[60%] placeholder: text-center md:w-[40%] lg:w-[18%]"
              />
              {errors.username && (
                <span className="font-bold text-white">
                  Esse campo é obrigatório
                </span>
              )}
              <input
                {...(register("email"),
                {
                  required: true,
                })}
                type="email"
                placeholder="Email"
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
                {...(register("birthday"),
                {
                  required: true,
                })}
                type="date"
                placeholder="Data de nascimento"
                className="p-4 py-4 mt-10 rounded-lg w-[60%] placeholder: text-center md:w-[40%] lg:w-[18%]"
              />
              {errors.username && (
                <span className="font-bold text-white">
                  Esse campo é obrigatório
                </span>
              )}
              <input
                value={cpf}
                onChange={handleCpfChange}
                {...(register("cpf"),
                {
                  required: true,
                  maxLength: 14,
                })}
                type="text"
                placeholder="CPF"
                className="p-4 py-4 mt-10 rounded-lg w-[60%] placeholder: text-center md:w-[40%] lg:w-[18%]"
              />
              {errors.username && (
                <span className="font-bold text-white">
                  Esse campo é obrigatório
                </span>
              )}
              <input
                value={rg}
                onChange={handleRgChange}
                {...(register("rg"),
                {
                  required: true,
                })}
                type="text"
                placeholder="RG"
                className="p-4 py-4 mt-10 rounded-lg w-[60%] placeholder: text-center md:w-[40%] lg:w-[18%]"
              />
              {errors.username && (
                <span className="font-bold text-white">
                  Esse campo é obrigatório
                </span>
              )}
              <input
                value={cep}
                onChange={handleCepChange}
                {...(register("cep"),
                {
                  required: true,
                })}
                type="text"
                placeholder="CEP"
                className="p-4 py-4 mt-10 rounded-lg w-[60%] placeholder: text-center md:w-[40%] lg:w-[18%]"
              />
              {errors.username && (
                <span className="font-bold text-white">
                  Esse campo é obrigatório
                </span>
              )}
              <input
                {...(register("address"),
                {
                  required: true,
                })}
                type="text"
                placeholder="Endereço"
                className="p-4 py-4 mt-10 rounded-lg w-[60%] placeholder: text-center md:w-[40%] lg:w-[18%]"
              />
              {errors.username && (
                <span className="font-bold text-white">
                  Esse campo é obrigatório
                </span>
              )}
              <input
                className="py-4 rounded-xl mt-10 mb-14 text-2xl font-bold w-[40%] placeholder: text-center md:w-[40%] lg:w-[10%] bg-white hover:bg-orange-400 hover:text-white hover:duration-300"
                type="submit"
                value="Cadastrar"
              />
            </div>
          </div>
        </main>
        <html className="bg-laranja"></html>
      </form>
    </body>
  );
}
