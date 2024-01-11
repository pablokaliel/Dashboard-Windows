"use client";

import { Bodoni_Moda } from "next/font/google";

const openSans = Bodoni_Moda({ subsets: ["latin"], weight: ["400"] });

export default function Page() {
  return (
    <main className="flex px-2 flex-col overflow-y-auto h-full bg-[#3a3a3a]">
      <div className={openSans.className}>
        <p className="outline-none" contentEditable>
          👨‍💻 Olá, seja bem-vindo(a)!👋🏻
          <br />
          <br />
          Neste Bloco de notas está listado as configurações do meu PC tanto
          perifericos como peças:
          <br />
          <br />
          <span>##Config:</span>
          <br />
          <span>- Processador: AMD Ryzen 5 5600X 3.7GHz </span>
          <br />
          <span>
            - Placa Mãe: Gigabyte A520M DS3H, Chipset A520, AMD AM4, mATX, DDR4
          </span>
          <br />
          <span>
            - Fonte: SuperFrame, 600W, 80 Plus Bronze, PFC Ativo, Cabos Flat,
            SF-B600FL
          </span>
          <br />
          <span>- Memória DDR4 Geil Orion, 16GB (2x8GB) 3600MHz, Red</span>
          <br />
          <span>
            - Gabinete Gamer Aerocool, Cylon RGB, Mid Tower, Acrílico, Black
          </span>
          <br />
          <span>- SSD: KingSpec 512GB</span>
          <br />
          <span>- HD: 300GB</span>
          <br />
          <br />
          ##Periferico:
          <br />
          <span>- Fone De Ouvido Headset Gamer Evolut Têmis Power</span>
          <br />
          <span>- Mouse Gamer Knup KP-MU008 Usb</span>
          <br />
          <span>- Teclado Mecanico</span>
          <br />
        </p>
      </div>
    </main>
  );
}
