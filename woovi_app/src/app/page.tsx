"use client";
import Link from "next/link";
import * as React from "react";

export default function mainPage() {
  return (
    <body>
      <main className="flex flex-col justify-between">
        <h1 className="text-3xl text-center font-bold text-white">
          Seja bem-vindo ao Sunshine Bank
        </h1>
        <div>
          <input
            type="text"
            placeholder="Nome de usuário"
            className="p-3 rounded-lg"
          />
          <input
            type="password"
            placeholder="Senha"
            className="p-3 rounded-lg"
          />
        </div>
      </main>
      <html className="bg-amarelo"></html>
    </body>
  );
}
