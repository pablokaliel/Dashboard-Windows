import { useState } from "react";
import { useMusic } from "../context/Context";
import Image from "next/image";

import img2 from "./../../public/icons/spotify/heart.svg";
import img1 from "./../../public/icons/spotify/nohearth.png";
import speaker from "../../public/icons/Speaker.svg";
import prox from "./../../public/icons/spotify/prox.svg";
import back from "./../../public/icons/spotify/back.svg";
import randoom from "./../../public/icons/spotify/randoom.svg";
import infinity from "./../../public/icons/spotify/infinity.svg";
import mic from "./../../public/icons/spotify/mic.png";
import maxmize from "./../../public/icons/spotify/maxmize.png";
import pc from "./../../public/icons/spotify/pc.png";
import queue from "./../../public/icons/spotify/queue.png";
import RectangleThree from "./../../public/icons/spotify/RectangleThree.png";

import { Pause, Play } from "@phosphor-icons/react";

interface BottomSpotifyProps {
  handleNext: () => void;
  handlePrevious: () => void;
  handleVolumeChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  togglePlayPause: () => void;
  volume: number;
  isPlaying: boolean;

  musicNames: string[];
  musicas: string[];
  setIsPlaying: React.Dispatch<React.SetStateAction<boolean>>;
}

export function BottomSpotify({
  handleNext,
  handlePrevious,
  handleVolumeChange,
  togglePlayPause,
  isPlaying,
}: BottomSpotifyProps) {
  const [imagem, setImagem] = useState(img1);

  function ToggleImage() {
    imagem === img1 ? setImagem(img2) : setImagem(img1);
  }
  const { musicNames, currentMusicIndex } = useMusic();

  return (
    <footer className="bg-zinc-800 z-10 border-zinc-700 px-6 pt-3 pb-20 flex items-center justify-between">
      <div className="flex items-center gap-3">
        <Image src={RectangleThree} alt="play now" />
        <div className="flex flex-col">
          <p>{musicNames[currentMusicIndex]}</p>
        </div>
        <button onClick={() => ToggleImage()}>
          <Image src={imagem} alt="favorite" />
        </button>
      </div>
      <div className="flex items-center flex-col">
        <div className="flex items-center gap-3">
          <button>
            <Image src={infinity} alt="" />
          </button>
          <button onCanPlay={handlePrevious}>
            <Image src={prox} alt="" />
          </button>
          <button
            onClick={togglePlayPause}
            className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center right-3 top-36"
          >
            {isPlaying ? <Pause /> : <Play />}{" "}
          </button>
          <button onClick={handleNext}>
            <Image src={back} alt="" />
          </button>
          <button>
            <Image src={randoom} alt="" />
          </button>
        </div>
        <div className="flex items-center gap-2">minutos da musica</div>
      </div>
      <div className="flex gap-2 max-md:hidden">
        <button>
          <Image height={24} width={24} src={mic} alt="" />
        </button>
        <button>
          <Image height={24} width={24} src={queue} alt="" />
        </button>
        <button>
          <Image height={24} width={24} src={pc} alt="" />
        </button>
        <div className="flex gap-5">
          <Image src={speaker} alt="speaker" height={21} width={21} />
          <input
            className="w-full"
            type="range"
            min={0}
            max={1}
            step={0.1}
            onChange={handleVolumeChange}
          />
        </div>
        <button>
          <Image height={24} width={24} src={maxmize} alt="" />
        </button>
      </div>
    </footer>
  );
}
