"use client";

import { Bodoni_Moda } from "next/font/google";
import Link from "next/link";

const openSans = Bodoni_Moda({ subsets: ["latin"], weight: ["400"] });

export default function Page() {
  return (
    <main className="flex px-2 flex-col h-full bg-[#3a3a3a]">
      <div className={openSans.className}>
        <p className="outline-none" contentEditable>
          👨‍💻 Olá, seja bem-vindo(a)!👋🏻
          <br />
          <br />
          ##SobreOsProjetosCriados
          <br />
          Neste bloco de notas, vou compartilhar um pouco mais sobre meus
          projetos, os quais são desenvolvidos utilizando ReactJS/NextJS. A
          escolha por estas tecnologias não é apenas uma questão de preferência,
          mas sim uma estratégia deliberada para aprofundar, aprimorar e
          continuar aprendendo sobre essa fascinante linguagem de programação.
          <br />
          <br/>
          Cada projeto é uma oportunidade de explorar novos conceitos, aplicar
          boas práticas de desenvolvimento e enfrentar desafios que contribuem
          para o meu crescimento como desenvolvedor. A constante busca por
          melhorias e o aprofundamento contínuo no universo do ReactJS/NextJS
          são fundamentais para garantir a qualidade e a inovação em cada
          aplicação que desenvolvo.
          <br />
          <br />
          Fique à vontade para explorar e conhecer mais detalhes sobre esses{" "}
          <Link
            className="text-fuchsia-500 underline cursor-pointer"
            href={"/unlocked/projects"}
          >
            projetos
          </Link>
          . Caso surjam dúvidas ou sugestões, convido você a conferir o bloco de
          notas sobre contatos, onde estarão disponíveis os links para entrar em
          contato. Estou sempre aberto para trocar ideias e experiências!
          <br />
          <br />
        </p>
      </div>
    </main>
  );
}
