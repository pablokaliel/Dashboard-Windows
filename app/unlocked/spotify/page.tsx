"use client";

import { SideSpotify } from "@/app/components/SideSpotify";
import { BottomSpotify } from "@/app/components/BottomSpotify";
import { MainSpotify } from "@/app/components/MainSpotify";
import spotify from "../../../public/icons/tasks/Icon 5.svg";
import { useMusic } from "@/app/context/Context";
import Image from "next/image";
import { Minus, Rectangle, X } from "@phosphor-icons/react";
import Link from "next/link";

export default function Page() {
  const {
    handleNext,
    handlePrevious,
    handleVolumeChange,
    togglePlayPause,
    volume,
    isPlaying,
    musicNames,
    musicas,
    setIsPlaying,
  } = useMusic();

  return (
    <main className="min-h-screen w-full">
      <div className="flex flex-col w-full h-screen ">
        <div className="flex w-full  bg-[#272727] fixed top-0  justify-between items-center gap-2">
          <div className="px-3 flex gap-2">
            <Image src={spotify} alt="" height={20} width={20} />
            <span>Spotify Music</span>
          </div>
          <div className="flex gap-4">
            <Link
              className="cursor-pointer hover:bg-[white]/10 w-full h-full p-2"
              href={"/unlocked"}
            >
              <Minus size={18} />
            </Link>
            <Link
              className="cursor-pointer hover:bg-[white]/10 w-full h-full p-2"
              href={"/unlocked"}
            >
              {" "}
              <Rectangle size={18} />
            </Link>
            <Link
              className="cursor-pointer hover:bg-red-500 w-full h-full p-2"
              href={"/unlocked"}
            >
              <X size={18} />
            </Link>
          </div>
        </div>
        <div className="flex pt-2 overflow-scroll h-full flex-1">
          <SideSpotify />
          <MainSpotify />
        </div>
        <BottomSpotify
          musicNames={musicNames}
          handleNext={handleNext}
          handlePrevious={handlePrevious}
          handleVolumeChange={handleVolumeChange}
          togglePlayPause={togglePlayPause}
          volume={volume}
          isPlaying={isPlaying}
          musicas={musicas}
          setIsPlaying={setIsPlaying}
        />
      </div>
    </main>
  );
}
