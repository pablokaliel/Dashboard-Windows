"use client";

import { Bodoni_Moda } from "next/font/google";

const openSans = Bodoni_Moda({ subsets: ["latin"], weight: ["400"] });

export default function Page() {
  return (
    <main className="flex px-2 flex-col overflow-scroll h-full bg-[#3a3a3a] relative">
      <div className={openSans.className}>
        <p className="outline-none" contentEditable>
          👨‍💻 Olá, seja bem-vindo(a)!👋🏻
          <br />
          <br />
          Neste bloco de notas você encontrará um pequeno resumo sobre minha
          pessoa no mundo da tecnologia.
          <br />
          <br />
          Me chamo Pablo Kaliel, e aos meus 22 anos, mergulhei no mundo da
          Análise e Desenvolvimento de Sistemas na Claretiano - Batatais.
          <br />
          <br />
          Ao longo da minha jornada acadêmica, tive a oportunidade de explorar
          diversas tecnologias, como HTML, CSS, JavaScript, e também dei passos
          significativos no âmbito mobile, utilizando o Ionic Framework, C##,
          além de ter adquirido conhecimento em Back-end, explorando o Firebase
          e MySql.
          <br />
          <br />
          Embora minha experiência prática ainda esteja em desenvolvimento,
          tenho me dedicado arduamente ao estudo contínuo. Atualmente, estou
          imerso no universo do ReactJS, HTML, CSS e Tailwind, aplicando esse
          conhecimento na criação de páginas e landing pages. Também tenho
          utilizado o Firebase e o LocalStorage para desenvolver o Back-end de
          algumas aplicações, ampliando assim minha compreensão prática.
          <br />
          <br />
          Embora não possa reivindicar uma vasta experiência, minha determinação
          em adquirir habilidades sólidas em ReactJS e outras tecnologias é
          inabalável. Estou comprometido em aprender e crescer constantemente,
          acreditando firmemente que o esforço e a dedicação são os pilares para
          alcançar a excelência.
        </p>
      </div>
    </main>
  );
}
