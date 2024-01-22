import Image from "next/image";

import arrowright from "./../../public/icons/spotify/arrow-right.svg";
import arrowleft from "./../../public/icons/spotify/arrow-left.svg";
import arrowdown from "./../../public/icons/spotify/arrow-down.svg";

import RectangleOne from "./../../public/icons/spotify/RectangleOne.png";
import { useMusic } from "../context/Context";

export function MainSpotify() {
  const { musicNames, playMusic } = useMusic();

  const otherMusicNames = musicNames.filter((name) => !name.includes("7MZ"));
  const sevenMZMusicNames = musicNames.filter((name) => name.includes("7MZ"));

  return (
    <main className="flex-1 overflow-y-auto p-6 h-screen bg-black/90 ">
      <div className="w-full flex justify-between ">
        <div className="flex gap-6 ">
          <button className="p-1.5 hover:bg-black/20 rounded-full bg-black/40 flex items-center justify-center">
            <Image src={arrowleft} alt="icon avançar" />
          </button>
          <button className="p-1.5 hover:bg-black/20 rounded-full bg-black/40 flex items-center justify-center">
            <Image src={arrowright} alt="icon voltar" />
          </button>
        </div>

        <div className="bg-black/40 w-36 h-10 rounded-full flex items-center gap-3 px-1">
          <Image
            src="https://github.com/pablokaliel.png"
            alt="foto perfil do usuário"
            width={40}
            height={40}
            className="rounded-full"
          />
          <h3 className="font-bold">Pablo</h3>
          <button>
            <Image src={arrowdown} alt="arrowdown" />
          </button>
        </div>
      </div>
      <h1 className="font-bold text-3xl mt-12">Musicas do momento</h1>

      <div className="grid grid-cols-3 gap-4 mt-4 max-md:grid-cols-2">
        {otherMusicNames.map((musicName, index) => (
          <div
            key={index}
            onClick={() => playMusic(index)}
            className="bg-white/10 hover:bg-white/20 transition-all group rounded flex items-center gap-4"
          >
            <Image src={RectangleOne} alt="image playlist" />
            <strong
              style={{
                display: "-webkit-box",
                WebkitBoxOrient: "vertical",
                overflow: "hidden",
                textOverflow: "ellipsis",
                whiteSpace: "normal",
                WebkitLineClamp: 3,
                width: "300px",
              }}
            >
              {musicName}
            </strong>
            <button className="w-12 h-12 bg-green-500 group-hover:visible rounded-full flex items-center justify-center ml-auto mr-7 invisible">
              <Image src={arrowright} alt="arrowright" />
            </button>
          </div>
        ))}
        <h1 className="font-bold text-3xl mt-4">7MinutoZ</h1>
      </div>
      <div className="grid grid-cols-3 gap-4 overflow-x-scroll mt-4">
        {sevenMZMusicNames.map((musicName, index) => (
          <div
            key={index}
            onClick={() => playMusic(musicNames.indexOf(musicName))}
            className="bg-white/10 relative hover:bg-white/20 transition-all group rounded flex p-2 items-center gap-4"
          >
            <Image src={RectangleOne} alt="image playlist" />
            <strong
              style={{
                display: "-webkit-box",
                WebkitBoxOrient: "vertical",
                overflow: "hidden",
                textOverflow: "ellipsis",
                whiteSpace: "normal",
                WebkitLineClamp: 2,
                width: "300px",
              }}
            >
              {musicName}
            </strong>

            <button className="w-12 h-12 bg-green-500 group-hover:visible rounded-full absolute flex items-center justify-center right-0 invisible">
              <Image src={arrowright} alt="arrowright" />
            </button>
          </div>
        ))}
      </div>
    </main>
  );
}
