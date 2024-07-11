"use client";
import * as React from "react";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import Image from "next/image";
import Logo from "../assets/Logo.png";

export default function Home() {
  const [view, setView] = React.useState("list");

  const handleChange = (nextView: any) => {
    setView(nextView);
  };
  return (
    <body>
      <main className="flex flex-col justify-center items-center">
        <Image className="p-7" src={Logo} width={180} alt="Logo da empresa" />
        <div className="mt-4">
          <h2 className="font-bold text-xl">João, como você quer pagar?</h2>
        </div>
      </main>
      <ToggleButtonGroup
        orientation="vertical"
        value={view}
        exclusive
        className="flex justify-center p-8 gap-5 w-[100%]"
      >
        <ToggleButton className="relative" value="pix" aria-label="list">
          <span className="text-sm font-bold border border-6 px-2 py-1 bg-gray-300 rounded-2xl border-gray-300 absolute top-[-18px] left-5">
            Pix
          </span>
          <div className="flex justify-between">
            <p className="pr-[220px]">1x R$ 30.500,00</p>
            <input type="radio" onClick={handleChange} />
          </div>
        </ToggleButton>
      </ToggleButtonGroup>
      <ToggleButtonGroup
        orientation="vertical"
        value={view}
        exclusive
        onChange={handleChange}
        className="flex justify-center p-8 gap-5 w-[100%]"
      >
        <ToggleButton value="pix2x" aria-label="module">
          2x R$ 15.300,00
        </ToggleButton>
        <ToggleButton value="pix3x" aria-label="quilt">
          3x R$ 10.196,66
        </ToggleButton>
        <ToggleButton value="pix4x" aria-label="list">
          4x R$ 7.725,00
        </ToggleButton>
        <ToggleButton value="pix5x" aria-label="module">
          5x R$ 6.300,00
        </ToggleButton>
        <ToggleButton value="pix6x" aria-label="quilt">
          6x R$ 5.283,33
        </ToggleButton>
        <ToggleButton value="pix7x" aria-label="quilt">
          7x R$ 4.542,85
        </ToggleButton>
      </ToggleButtonGroup>
    </body>
  );
}
