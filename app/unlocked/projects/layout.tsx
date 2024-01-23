"use client";
import { Minus, Rectangle, X } from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";
import notepad from "../../../public/icons/tasks/Icon 2.svg";
import Image from "next/image";

import word from "../../../public/icons/tasks/Icon 11.svg";

import gmail from "../../../public/icons/tasks/gmail.svg";
import github from "../../../public/icons/tasks/github.svg";
import lixeira from "../../../public/icons/tasks/Icon.png";
import folder from "../../../public/icons/tasks/Icon.svg";
import spotify from "../../../public/icons/tasks/Icon 5.svg";

import steam from "../../../public/icons/tasks/steam.svg";
import chrome from "../../../public/icons/tasks/chrome.svg";
import discord from "../../../public/icons/tasks/discord.svg";

import { useState } from "react";
import HeaderProjects from "@/app/components/HeaderProjects";
import AsideProjects from "@/app/components/AsideProjects";

export default function Layout({ children }: { children: React.ReactNode }) {
  const [expanded, setExpanded] = useState(false);

  const handleExpand = () => {
    setExpanded(!expanded);
  };

  const divClass = expanded
    ? "w-full z-40 h-full relative overflow-hidden "
    : "z-40 min-h-[450px] relative  max-w-[750px] max-h-[500px] w-[750px] h-[500px]";

  return (
    <div className="w-full h-screen flex flex-col items-center justify-center">
      <video
        autoPlay
        muted
        loop
        className="w-full pointer-events-none h-full object-cover absolute z-0 inset-0"
      >
        <source src="/background.mp4" type="video/mp4" />
        Seu navegador não suporta vídeos em HTML5.
      </video>
      <div className="flex absolute z-0 w-full h-full justify-between">
        <div className=" z-0 grid grid-cols-2 gap-2 h-fit">
          <Link
            href={"/unlocked/aboutMe"}
            className="px-2 pt-5 w-auto flex flex-col items-center justify-center hover:bg-white/30 duration-200"
          >
            <div>
              <Image src={notepad} alt="notePad" width={30} height={30} />
            </div>
            <span className="text-sm mt-2">NotePad</span>
          </Link>

          <Link href={"/unlocked/projects"} className="px-2 pt-5 w-auto flex flex-col items-center justify-center hover:bg-white/30 duration-200">
              <div>
                <Image src={folder} alt="folder" width={30} height={30} />
              </div>
              <span className="text-sm mt-2">Meus projetos</span>
            </Link>

          <Link
            href={"/unlocked/spotify"}
            className="px-2 pt-5 w-auto flex flex-col items-center justify-center hover:bg-white/30 duration-200"
          >
            <div>
              <Image src={spotify} alt="spotify" width={30} height={30} />
            </div>
            <span className="text-sm mt-2">Spotify</span>
          </Link>

          <a target="_blank" href="https://github.com/pablokaliel" className="px-2 pt-5 w-auto flex flex-col items-center justify-center hover:bg-white/30 duration-200">
            <div>
              <Image src={github} alt="github" width={30} height={30} />
            </div>
            <span className="text-sm mt-2">GitHub</span>
          </a>

          <Link href={"/unlocked/aboutMe/pc"} className="px-2 pt-5 w-auto flex flex-col items-center justify-center hover:bg-white/30 duration-200">
              <div>
                <Image src={word} alt="github" width={30} height={30} />
              </div>
              <span className="text-sm mt-2">Meu PC</span>
            </Link>
        </div>

        <div className=" z-0 h-full flex flex-col ">
        <button className="px-5 pt-5 w-auto flex flex-col items-center justify-center hover:bg-white/30 ">
            <div>
              <Image src={lixeira} alt="lixeira" width={30} height={30} />
            </div>
            <span className="text-sm mt-2">Lixeira</span>
          </button>

          <a target="_blank" href="https://store.steampowered.com" className="px-5 pt-5 w-auto flex flex-col items-center justify-center hover:bg-white/30 mt-2">
            <div>
              <Image src={steam} alt="steam" width={30} height={30} />
            </div>
            <span className="text-sm mt-2">Steam</span>
          </a>

          <a target="_blank" href="https://discord.com" className="px-5 pt-5 w-auto flex flex-col items-center justify-center hover:bg-white/30 mt-2">
            <div>
              <Image src={discord} alt="discord" width={30} height={30} />
            </div>
            <span className="text-sm mt-2">Discord</span>
          </a>

          <a target="_blank" href="https://pablo-me.vercel.app" className="px-5 pt-5 w-auto flex flex-col items-center justify-center hover:bg-white/30 mt-2">
            <div>
              <Image src={chrome} alt="chrome" width={30} height={30} />
            </div>
            <span className="text-sm mt-2">Chrome</span>
          </a>
          <a target="_blank" href="#" className="px-5 pt-5 w-auto flex flex-col items-center justify-center hover:bg-white/30 mt-2">
            <div>
              <Image src={gmail} alt="chrome" width={30} height={30} />
            </div>
            <span className="text-sm mt-2">Gmail</span>
          </a>
        </div>
      </div>

      <div className={divClass}>
        <div className="flex top-0 bg-[#272727] w-full justify-between items-center gap-2"
        >
          <div className="px-3 items-center flex gap-2">
            <Image src={folder} alt="folder" height={20} width={20} />
            <span>Meus Projetos</span>
          </div>
          <div className="flex gap-4">
            <Link
              className="cursor-pointer hover:bg-[white]/20 w-full h-full p-2"
              href={"/unlocked"}
            >
              <Minus size={18} />
            </Link>
            <button
              className="cursor-pointer hover:bg-[white]/20 w-full h-full p-2"
              onClick={handleExpand}
            >
              <Rectangle size={18} />
            </button>
            <Link
              className="cursor-pointer hover:bg-red-500 w-full h-full p-2"
              href={"/unlocked"}
            >
              <X size={18} />
            </Link>
          </div>
        </div>
        <div className="flex h-full">
      <aside className="w-1/4 "><AsideProjects/></aside>
      <main className="flex-1 flex flex-col">
        <header className=""><HeaderProjects/></header>
        <div className="flex-1 overflow-y-scroll bg-[#272727]">{children}</div>
      </main>
    </div>
      </div>
    </div>
  );
}
