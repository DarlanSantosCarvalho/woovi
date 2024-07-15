"use client";
import Link from "next/link";

export default function mainPage() {
  return (
    <body>
      <h1>Login aqui</h1>
      <Link href="/PaymentMethod/">
        <button>Ir para pagamento</button>
      </Link>
    </body>
  );
}
