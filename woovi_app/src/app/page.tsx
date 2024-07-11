import * as React from "react";
import Stack from "@mui/material/Stack";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import Image from "next/image";
import Logo from "../assets/Logo.png";

export default function Home() {
  const control = {
    exclusive: true,
  };

  return (
    <body>
      <main className="flex flex-col justify-center items-center">
        <Image className="p-7" src={Logo} width={180} alt="Logo da empresa" />
        <div className="mt-4">
          <h2 className="font-bold text-xl">João, como você quer pagar?</h2>
        </div>
      </main>
      <Stack spacing={2} alignItems="center">
        <ToggleButtonGroup
          size="small"
          {...control}
          aria-label="Small sizes"
        ></ToggleButtonGroup>
        <ToggleButtonGroup
          {...control}
          aria-label="Medium sizes"
        ></ToggleButtonGroup>
        <ToggleButtonGroup
          size="large"
          {...control}
          aria-label="Large sizes"
        ></ToggleButtonGroup>
      </Stack>
    </body>
  );
}
