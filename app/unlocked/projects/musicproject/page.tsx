"use client";

import { useMusic } from "@/app/context/Context";
import Image from "next/image";

import RectangleOne from "./../../../../public/icons/spotify/RectangleOne.png";

export default function Page() {
  const { musicNames, playMusic } = useMusic();
  const otherMusicNames = musicNames.filter((name) => name);

  return (
    <main className="flex px-2 flex-col h-full bg-[#272727]">
      <div className="grid grid-cols-5 gap-4 max-md:flex max-md:overflow-x-scroll md:max-md:w-full mt-4">
        {otherMusicNames.map((musicName, index) => (
          <div
            key={index}
            onClick={() => playMusic(index)}
            className=" hover:bg-white/20 transition-all group rounded flex flex-col items-center gap-4"
          >
            <Image src={RectangleOne} alt="image playlist" />
            <div
              className="w-full"
              style={{
                maxWidth: "150px",
                overflow: "hidden",
                textOverflow: "ellipsis",
                whiteSpace: "nowrap",
              }}
            >
              <strong>{musicName}</strong>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
