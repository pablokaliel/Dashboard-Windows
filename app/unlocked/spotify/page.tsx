"use client";

import { SideSpotify } from "@/app/components/SideSpotify";
import { BottomSpotify } from "@/app/components/BottomSpotify";
import { MainSpotify } from "@/app/components/MainSpotify";
import { useMusic } from "@/app/context/Context";

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
        <video
          autoPlay
          muted
          loop
          className="w-full pointer-events-none h-full object-cover absolute inset-0"
        >
          <source src="/background.mp4" type="video/mp4" />
          Seu navegador não suporta vídeos em HTML5.
        </video>
        <div className="flex overflow-scroll h-full flex-1">
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
