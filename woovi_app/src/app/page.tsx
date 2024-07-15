"use client";
import { useState } from "react";
import Image from "next/image";
import Logo from "../assets/Logo.png";
import { green } from "@mui/material/colors";
import Radio from "@mui/material/Radio";

export default function Home() {
  const [selectedValue, setSelectedValue] = useState("");

  const handleChange = (event: any) => {
    setSelectedValue(event.target.value);
  };

  return (
    <body>
      <main className="flex flex-col justify-center items-center">
        <Image className="p-7" src={Logo} width={180} alt="Logo da empresa" />
        <div className="mt-4">
          <h2 className="font-bold text-xl">João, como você quer pagar?</h2>
        </div>
        <div className="w-[100%] flex justify-center flex-col">
          <div
            className={`flex justify-between relative mt-10 border-2 border-gray-400 p-5 m-5 rounded-xl ${
              selectedValue === "1x" ? "border-verdeWoovi" : "border-gray-400"
            }`}
          >
            <span className="text-sm font-bold border border-3 px-3 py-1 bg-gray-300 rounded-3xl border-gray-300 absolute top-[-16px]">
              Pix
            </span>
            <div>
              <p>
                <strong>1x</strong> R$ 30.500,00
              </p>
              <span className="text-sm text-verdeWoovi font-bold">
                Ganhe 3% de Cashback
              </span>
              <div className="bg-azulWoovi rounded-lg p-2 mt-2 w-[320px]">
                <p className="text-white text-sm font-bold">
                  🤑 R$ 300,00 de volta no seu Pix na hora
                </p>
              </div>
            </div>
            <div className="absolute top-0 right-5">
              <Radio
                checked={selectedValue === "1x"}
                onChange={handleChange}
                value="1x"
                name="parcelas"
                sx={{
                  "&.Mui-checked": {
                    color: green[400],
                  },
                }}
              />
            </div>
          </div>
        </div>
        <div className="w-[100%] flex justify-center flex-col">
          <div
            className={`flex justify-between relative border-2 border-gray-400 px-5 mx-5 rounded-xl ${
              selectedValue === "2x" ? "border-verdeWoovi" : "border-gray-400"
            }`}
          >
            <span className="text-sm font-bold border border-3 px-3 py-1 bg-gray-300 rounded-3xl border-gray-300 absolute top-[-16px]">
              Pix Parcelado
            </span>
            <div className="p-5">
              <p>
                <strong>2x</strong> R$ 15.300,00
              </p>
              <span className="text-sm text-cinzaWoovi font-bold">
                Total: R$ 30.600,00
              </span>
            </div>
            <div className="py-3">
              <Radio
                checked={selectedValue === "2x"}
                onChange={handleChange}
                value="2x"
                name="parcelas"
                sx={{
                  "&.Mui-checked": {
                    color: green[400],
                  },
                }}
              />
            </div>
          </div>
          <div
            className={`flex justify-between relative border-2 border-gray-400 px-5 mx-5 rounded-xl ${
              selectedValue === "3x" ? "border-verdeWoovi" : "border-gray-400"
            }`}
          >
            <div className="p-5">
              <p>
                <strong>3x</strong> R$ 10.196,66
              </p>
              <span className="text-sm text-cinzaWoovi font-bold">
                Total: R$ 30.620,00
              </span>
            </div>
            <div className="py-3">
              <Radio
                checked={selectedValue === "3x"}
                onChange={handleChange}
                value="3x"
                name="parcelas"
                sx={{
                  "&.Mui-checked": {
                    color: green[400],
                  },
                }}
              />
            </div>
          </div>
          <div
            className={`flex justify-between relative border-2 border-gray-400 px-5 mx-5 rounded-xl ${
              selectedValue === "4x" ? "border-verdeWoovi" : "border-gray-400"
            }`}
          >
            <div className="p-5">
              <p>
                <strong>4x</strong> R$ 7.725,00
              </p>
              <span className="text-sm text-cinzaWoovi font-bold">
                Total: R$ 30.900,00
              </span>
              <div className="bg-azulWoovi rounded-lg p-2 mt-2 w-[320px]">
                <p className="text-white text-sm font-bold">
                  -3% de juros: Melhor opção de parcelamento
                </p>
              </div>
            </div>
            <div className="absolute top-4 right-5">
              <Radio
                checked={selectedValue === "4x"}
                onChange={handleChange}
                value="4x"
                name="parcelas"
                sx={{
                  "&.Mui-checked": {
                    color: green[400],
                  },
                }}
              />
            </div>
          </div>
          <div
            className={`flex justify-between relative border-2 border-gray-400 px-5 mx-5 rounded-xl ${
              selectedValue === "5x" ? "border-verdeWoovi" : "border-gray-400"
            }`}
          >
            <div className="p-5">
              <p>
                <strong>5x</strong> R$ 6.300,00
              </p>
              <span className="text-sm text-cinzaWoovi font-bold">
                Total: R$ 31.500,00
              </span>
            </div>
            <div className="py-3">
              <Radio
                checked={selectedValue === "5x"}
                onChange={handleChange}
                value="5x"
                name="parcelas"
                sx={{
                  "&.Mui-checked": {
                    color: green[400],
                  },
                }}
              />
            </div>
          </div>
          <div
            className={`flex justify-between relative border-2 border-gray-400 px-5 mx-5 rounded-xl ${
              selectedValue === "6x" ? "border-verdeWoovi" : "border-gray-400"
            }`}
          >
            <div className="p-5">
              <p>
                <strong>6x</strong> R$ 5.283,33
              </p>
              <span className="text-sm text-cinzaWoovi font-bold">
                Total: R$ 31.699,98
              </span>
            </div>
            <div className="py-3">
              <Radio
                checked={selectedValue === "6x"}
                onChange={handleChange}
                value="6x"
                name="parcelas"
                sx={{
                  "&.Mui-checked": {
                    color: green[400],
                  },
                }}
              />
            </div>
          </div>
          <div
            className={`flex justify-between relative border-2 border-gray-400 px-5 mx-5 rounded-xl ${
              selectedValue === "7x" ? "border-verdeWoovi" : "border-gray-400"
            }`}
          >
            <div className="p-5">
              <p>
                <strong>7x</strong> R$ 4.542,85
              </p>
              <span className="text-sm text-cinzaWoovi font-bold">
                Total: R$ 31.800,00
              </span>
            </div>
            <div className="py-3">
              <Radio
                checked={selectedValue === "7x"}
                onChange={handleChange}
                value="7x"
                name="parcelas"
                sx={{
                  "&.Mui-checked": {
                    color: green[400],
                  },
                }}
              />
            </div>
          </div>
        </div>
      </main>
    </body>
  );
}
