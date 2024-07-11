import * as React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import Image from "next/image";
import Logo from "../assets/Logo.png";

export default function Home() {
  return (
    <body>
      <main className="flex flex-col justify-center items-center">
        <Image className="p-7" src={Logo} width={180} alt="Logo da empresa" />
        <div className="mt-4">
          <h2 className="font-bold text-xl">João, como você quer pagar?</h2>
        </div>
      </main>
      <FormControl className="flex items-center">
        <RadioGroup
          className="w-[100%]"
          aria-labelledby="demo-radio-buttons-group-label"
          defaultValue="female"
          name="radio-buttons-group"
        >
          <div className="border border-6 border-gray-300 w-[90%] mx-auto my-8 rounded-xl p-4 relative">
            <span className="font-bold border border-6 px-4 py-2 bg-gray-300 rounded-[100%] border-gray-300 absolute top-[-25px]">
              Pix
            </span>
            <FormControlLabel
            className="font-bold text-black"
              value="female"
              control={<Radio />}
              label="1x R$ 30.500,00"
              labelPlacement="start"
            />
          </div>
          <div className="border border-6 border-gray-300 w-[90%] mx-auto my-5 rounded-xl p-4">
            <FormControlLabel
              value="female"
              control={<Radio />}
              label="Female"
              labelPlacement="start"
            />
          </div>
          <div className="border border-6 border-gray-300 w-[90%] mx-auto my-5 rounded-xl p-4">
            <FormControlLabel
              value="female"
              control={<Radio />}
              label="Female"
              labelPlacement="start"
            />
          </div>
          <div className="border border-6 border-gray-300 w-[90%] mx-auto my-5 rounded-xl p-4">
            <FormControlLabel
              value="female"
              control={<Radio />}
              label="Female"
              labelPlacement="start"
            />
          </div>
        </RadioGroup>
      </FormControl>
    </body>
  );
}
