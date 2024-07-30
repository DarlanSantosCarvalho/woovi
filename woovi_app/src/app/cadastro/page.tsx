"use client";
import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import Image from "next/image";
import Logo from "../../assets/Logo.png";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import axios from "axios";
import { TbMapPin, TbMapPinCheck } from "react-icons/tb";
import moment from "moment";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
  const [isAddressValid, setIsAddressValid] = useState(false);
  const [address, setAddress] = useState("");

  function goodRequest() {
    toast.success("Sucesso!", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  }

  function badRequest() {
    toast.error("Erro: Corrija os dados inseridos", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  }

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

  function handleRgChange(value: any) {
    const notFormattedRg = value.target.value;
    const formattedRg = notFormattedRg
      .replace(/\D/g, "")
      .replace(/(\d{2})(\d)/, "$1.$2")
      .replace(/(\d{3})(\d)/, "$1.$2")
      .replace(/(\d{3})(\d)/, "$1-$2")
      .replace(/(-\d{2})\d+?$/, "$1");
    setRg(formattedRg);
  }

  function handleCepChange(value: any) {
    const notFormattedCep = value.target.value;
    const formattedCep = notFormattedCep
      .replace(/\D/g, "")
      .replace(/(\d{5})(\d)/, "$1-$2")
      .replace(/(-\d{3})\d+?$/, "$1");

    setCep(formattedCep);
  }

  function ageFromDateOfBirthday(value: any) {
    const dateOfBirth = value.target.value;
    const currentDay = moment();
    const birthDay = moment(dateOfBirth);

    const age = currentDay.diff(birthDay, "years");

    console.log("Aqui", age);

    if (age >= 18) {
      window.alert("Você tem mais de 18 anos");
    } else {
      window.alert("Você não tem mais de 18 anos");
    }
  }

  function getAddressByCep() {
    axios({
      method: "get",
      url: `https://api.brasilaberto.com/v1/zipcode/${cep}`,
      responseType: "text",
    }).then(function (response) {
      let resultado = JSON.parse(response.data);
      console.log("Aqui", resultado);
      if (resultado.result.street.length > 0) {
        setAddress(
          `${resultado.result.street}, ${resultado.result.city} - ${resultado.result.state} `
        );
        setIsAddressValid(true);
      } else {
        setAddress("");
        setIsAddressValid(false);
      }
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
                className="p-4 py-4 mt-10 rounded-lg w-[60%] placeholder: text-center md:w-[40%] lg:w-[30%]"
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
                className="p-4 py-4 mt-10 rounded-lg w-[60%] placeholder: text-center md:w-[40%] lg:w-[30%]"
              />
              {errors.username && (
                <span className="font-bold text-white">
                  Esse campo é obrigatório
                </span>
              )}

              <div className="relative w-[60%] placeholder: text-center md:w-[40%] lg:w-[30%] mt-10">
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
                onChange={ageFromDateOfBirthday}
                {...(register("birthday"),
                {
                  required: true,
                })}
                type="date"
                placeholder="Data de nascimento"
                className="p-4 py-4 mt-10 rounded-lg w-[60%] placeholder: text-center md:w-[40%] lg:w-[30%]"
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
                className="p-4 py-4 mt-10 rounded-lg w-[60%] placeholder: text-center md:w-[40%] lg:w-[30%]"
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
                className="p-4 py-4 mt-10 rounded-lg w-[60%] placeholder: text-center md:w-[40%] lg:w-[30%]"
              />
              {errors.username && (
                <span className="font-bold text-white">
                  Esse campo é obrigatório
                </span>
              )}
              <div className="w-[100%] h-24 flex justify-center">
                <input
                  value={cep}
                  onChange={handleCepChange}
                  {...(register("cep"),
                  {
                    required: true,
                  })}
                  type="text"
                  placeholder="CEP"
                  className="p-4 py-4 mt-10 ml-14 rounded-lg w-[60%] placeholder: text-center md:w-[40%] lg:w-[30%]"
                />
                {errors.username && (
                  <span className="font-bold text-white">
                    Esse campo é obrigatório
                  </span>
                )}
                <div
                  onClick={getAddressByCep}
                  className="py-3 cursor-pointer rounded-xl ml-3 mt-10 text-2xl font-bold w-[5%] placeholder: text-center md:w-[5%] lg:w-[3%] bg-white hover:bg-orange-400 hover:text-white hover:duration-300"
                >
                  {isAddressValid ? (
                    <TbMapPinCheck className="m-auto" size={30} />
                  ) : (
                    <TbMapPin className="m-auto" size={30} />
                  )}
                </div>
              </div>
              <input
                value={address}
                {...(register("address"),
                {
                  required: true,
                })}
                type="text"
                placeholder="Endereço"
                className="p-4 py-4 mt-10 cursor-none rounded-lg w-[60%] placeholder: text-center md:w-[40%] lg:w-[30%]"
              />
              {errors.username && (
                <span className="font-bold text-white">
                  Esse campo é obrigatório
                </span>
              )}
              <input
                className="py-4 rounded-xl mt-10 mb-14 text-2xl font-bold w-[40%] placeholder: text-center md:w-[40%] lg:w-[15%] bg-white hover:bg-orange-400 hover:text-white hover:duration-300"
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
