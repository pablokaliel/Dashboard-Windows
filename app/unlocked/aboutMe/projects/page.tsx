"use client";

import { Bodoni_Moda } from "next/font/google";

const openSans = Bodoni_Moda({ subsets: ["latin"], weight: ["400"] });

export default function Page() {
  return (
    <main className="flex px-2 flex-col h-full bg-[#3a3a3a]">
      <div className={openSans.className}>
        <p className="outline-none" contentEditable>
          essa é a pagina sobre meus projetos
          <br />
          ...
        </p>
      </div>
    </main>
  );
}
