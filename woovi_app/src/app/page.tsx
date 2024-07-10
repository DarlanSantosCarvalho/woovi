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
    </body>
  );
}
