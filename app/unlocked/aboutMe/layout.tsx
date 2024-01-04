"use client";
import { Minus, Rectangle, X } from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";
import notepad from "../../../public/icons/tasks/Icon 2.svg";
import Image from "next/image";
import LeftMe from "@/app/components/HeaderMe";
import RightMe from "@/app/components/RightMe";

import github from "../../../public/icons/tasks/github.svg";
import lixeira from "../../../public/icons/tasks/Icon.png";
import folder from "../../../public/icons/tasks/Icon.svg";
import spotify from "../../../public/icons/tasks/Icon 5.svg";

import steam from "../../../public/icons/tasks/steam.svg";
import chrome from "../../../public/icons/tasks/chrome.svg";
import discord from "../../../public/icons/tasks/discord.svg";
import NavLinks from "@/app/components/NavLinks";
import { useEffect, useRef, useState } from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  const [expanded, setExpanded] = useState(false);
  const [dragging, setDragging] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });


  const barRef = useRef<HTMLDivElement>(null);
  const draggableDivRef = useRef<HTMLDivElement>(null);

  const handleExpand = () => {
    setExpanded(!expanded);
  };

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === barRef.current) {
      setDragging(true);
      const offsetX = e.clientX - position.x;
      const offsetY = e.clientY - position.y;
      setPosition({ x: offsetX, y: offsetY });
    }
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (dragging && draggableDivRef.current) {
      const newX = e.clientX - position.x;
      const newY = e.clientY - position.y;
      draggableDivRef.current.style.transform = `translate(${newX}px, ${newY}px)`;
      setPosition({ x: newX, y: newY });
    }
  };

  const handleMouseUp = () => {
    setDragging(false);
  };

  useEffect(() => {
    if (dragging) {
      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("mouseup", handleMouseUp);
    } else {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    }
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, [dragging]);

  const divClass = expanded
    ? "w-full z-40 h-full overflow-hidden left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2"
    : "z-40 min-h-[450px] max-w-[590px] max-h-[450px]";

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

        <div className=" z-0 h-full flex flex-col ">
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

      <div className={divClass} ref={draggableDivRef}>
        <div
          ref={barRef}
          onMouseDown={handleMouseDown}
          style={{ cursor: dragging ? "grabbing" : "grab" }}
          className="flex bg-[#272727] w-full justify-between items-end gap-2"
        >
          <div className="px-3 flex gap-2">
            <Image src={notepad} alt="" height={20} width={20} />
            <NavLinks />
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
        <div className="flex flex-col h-full">
          <div className=" z-30 w-full bg-[#3e3d3d] ">
            <div>
              <LeftMe />
            </div>
          </div>
          <div className="flex-grow flex-1 h-full">{children}</div>
          <div className=" bg-[#3a3a3a] ">
            <RightMe />
          </div>
        </div>
      </div>
    </div>
  );
}
