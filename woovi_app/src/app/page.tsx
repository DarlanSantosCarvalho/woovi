"use client";
import { useState } from "react";
import Logo from "../assets/Logo.png";
import Image from "next/image";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";

export default function mainPage() {
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
        <div className="flex flex-col justify-center items-center relative">
          <input
            type="text"
            placeholder="Email ou nome de usuário"
            className="py-4 mt-10 rounded-lg w-[18%] placeholder: text-center"
          />
          <input
            type="password"
            placeholder="Senha"
            className="py-4 mt-10 rounded-lg w-[18%] placeholder: text-center"
          />
          <FaEye size={30} className="absolute bottom-[118px] right-[800px]" />

          <button className="w-[10%] py-4 rounded-xl mt-10 text-2xl font-bold bg-white hover:bg-orange-400 hover:text-white hover:duration-300">
            Login
          </button>
        </div>
      </main>
      <html className="bg-amarelo"></html>
    </body>
  );
}
