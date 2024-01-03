"use client";

import { Bodoni_Moda } from "next/font/google";

const openSans = Bodoni_Moda({ subsets: ["latin"], weight: ["400"] });

export default function Page() {
  return (
    <main className="flex px-2 flex-col h-full bg-[#3a3a3a]">
      <div className={openSans.className}>
        <p className="outline-none" contentEditable>
          👨‍💻 Olá, seja bem-vindo(a)!👋🏻
          <br />
          <br />
          Neste bloco de notas você encontrará locais onde você pode saber mais
          sobre mim, sobre meus projetos e meios para se comunicar comigo:
          <br />
          <br />
          ##Redes Sociais:
          <br />
          <br />
          <a target="_blank" href="https://github.com/pablokaliel">
            - GitHub: pablokaliel
          </a>
          <br />
          <a>- Discord: ShaZzaN</a>
          <br />
          <a>- Linkedin: ...</a>
          <br />
          <a>- Instagram: ...</a>
          <br />
        </p>
      </div>
    </main>
  );
}
