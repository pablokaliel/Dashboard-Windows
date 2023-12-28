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

import Link from "next/link";

export default function Page() {
  return (
    <main className="min-h-screen w-full">
      <video
        autoPlay
        muted
        loop
        className="w-full pointer-events-none h-full object-cover absolute inset-0"
      >
        <source src="/background.mp4" type="video/mp4" />
        Seu navegador não suporta vídeos em HTML5.
      </video>
      <div className="flex  flex-col w-full h-screen ">
        <div className="flex h-full justify-between">
          <div className=" z-20 grid grid-cols-2 gap-2 h-fit">
            <button className="px-2 pt-5 w-auto flex flex-col items-center justify-center hover:bg-white/30 duration-200">
              <div>
                <Image src={notepad} alt="notePad" width={30} height={30} />
              </div>
              <span className="text-sm mt-2">NotePad</span>
            </button>

            <button className="px-2 pt-5 w-auto flex flex-col items-center justify-center hover:bg-white/30 duration-200">
              <div>
                <Image src={folder} alt="folder" width={30} height={30} />
              </div>
              <span className="text-sm mt-2">Meus projetos</span>
            </button>

            <Link
              href={"/unlocked/spotify"}
              className="px-2 pt-5 w-auto flex flex-col items-center justify-center hover:bg-white/30 duration-200"
            >
              <div>
                <Image src={spotify} alt="spotify" width={30} height={30} />
              </div>
              <span className="text-sm mt-2">Spotify</span>
            </Link>

            <button className="px-2 pt-5 w-auto flex flex-col items-center justify-center hover:bg-white/30 duration-200">
              <div>
                <Image src={github} alt="github" width={30} height={30} />
              </div>
              <span className="text-sm mt-2">GitHub</span>
            </button>
          </div>

          <div className=" z-20 h-full flex flex-col ">
            <button className="px-5 pt-5 w-auto flex flex-col items-center justify-center hover:bg-white/30 ">
              <div>
                <Image src={lixeira} alt="lixeira" width={30} height={30} />
              </div>
              <span className="text-sm mt-2">Lixeira</span>
            </button>

            <button className="px-5 pt-5 w-auto flex flex-col items-center justify-center hover:bg-white/30 mt-2">
              <div>
                <Image src={steam} alt="steam" width={30} height={30} />
              </div>
              <span className="text-sm mt-2">Steam</span>
            </button>

            <button className="px-5 pt-5 w-auto flex flex-col items-center justify-center hover:bg-white/30 mt-2">
              <div>
                <Image src={discord} alt="discord" width={30} height={30} />
              </div>
              <span className="text-sm mt-2">Discord</span>
            </button>

            <button className="px-5 pt-5 w-auto flex flex-col items-center justify-center hover:bg-white/30 mt-2">
              <div>
                <Image src={chrome} alt="chrome" width={30} height={30} />
              </div>
              <span className="text-sm mt-2">Chrome</span>
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
