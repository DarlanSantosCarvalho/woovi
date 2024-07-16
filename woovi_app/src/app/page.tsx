"use client";
import * as React from "react";
import Logo from "../assets/Logo.png";
import Image from "next/image";

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
        <div className="flex flex-col justify-center m-auto">
          <input
            type="text"
            placeholder="Nome de usuário"
            className="p-3 mt-10 rounded-lg"
          />
          <input
            type="password"
            placeholder="Senha"
            className="p-3 mt-10 rounded-lg"
          />
        </div>
      </main>
      <html className="bg-amarelo"></html>
    </body>
  );
}
