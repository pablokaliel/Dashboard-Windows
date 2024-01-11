"use client";

import Image from "next/image";

import github from "../../public/icons/tasks/github.svg";
import lixeira from "../../public/icons/tasks/Icon.png";
import folder from "../../public/icons/tasks/Icon.svg";
import notepad from "../../public/icons/tasks/Icon 2.svg";
import spotify from "../../public/icons/tasks/Icon 5.svg";

import steam from "../../public/icons/tasks/steam.svg";
import chrome from "../../public/icons/tasks/chrome.svg";
import discord from "../../public/icons/tasks/discord.svg";
import word from "../../public/icons/tasks/Icon 11.svg";
import gmail from "../../public/icons/tasks/gmail.svg";

import Link from "next/link";

export default function Page() {
  return (
    <main className="max-h-screen w-full">
      <video
        autoPlay
        muted
        loop
        className="w-full pointer-events-none h-full object-cover absolute inset-0"
      >
        <source src="/background.mp4" type="video/mp4" />
        Seu navegador não suporta vídeos em HTML5.
      </video>
      <div className="flex flex-col w-full h-screen ">
        <div className="flex h-full justify-between">
          <div className=" z-20 grid grid-cols-2 gap-2 h-fit">
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

          <div className=" z-20 h-full flex flex-col ">
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
      </div>
    </main>
  );
}
