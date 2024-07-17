"use client";
import { useState } from "react";
import Logo from "../assets/Logo.png";
import Image from "next/image";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { useRouter } from "next/router";

export default function mainPage() {
  const router = useRouter();

  const [showPassword, setShowPassword] = useState(false);

  function changePasswordToText() {
    setShowPassword(!showPassword);
  }

  return (
    <body>
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
              type="text"
              placeholder="Email ou nome de usuário"
              className="p-4 py-4 mt-10 rounded-lg w-[60%] placeholder: text-center md:w-[40%] lg:w-[18%]"
            />
            <div className="relative w-[60%] md:w-[40%] lg:w-[18%] mt-10">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Senha"
                className="p-4 py-4 rounded-lg w-full placeholder:text-center"
              />
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
              onClick={() => router.push("/metodoPagamento")}
              className="py-4 rounded-xl mt-10 text-2xl font-bold w-[40%] placeholder: text-center md:w-[40%] lg:w-[10%] bg-white hover:bg-orange-400 hover:text-white hover:duration-300"
            >
              Login
            </button>
          </div>{" "}
        </div>
      </main>
      <html className="bg-laranja"></html>
    </body>
  );
}
