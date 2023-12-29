import Image from "next/image";

import arrowright from "./../../public/icons/spotify/arrow-right.svg";
import arrowleft from "./../../public/icons/spotify/arrow-left.svg";
import arrowdown from "./../../public/icons/spotify/arrow-down.svg";

import music from "./../../public/icons/spotify/RectangleOne.png";
import RectangleTwo from "./../../public/icons/spotify/RectangleTwo.png";

const data = [
  {
    id: 1,
    title: "Daily Mix 1",
    description: "Wallorws, COIN, girl in red and more",
    image: RectangleTwo,
  },
  {
    id: 2,
    title: "Daily Mix 4",
    description: "Brad Enbata, Morningtime and more...",
    image: RectangleTwo,
  },
  {
    id: 3,
    title: "Daily Mix 5",
    description: "DMX, Mobb Deep, Raekwon and more",
    image: RectangleTwo,
  },
  {
    id: 4,
    title: "discover Weekly",
    description: "Your weekly mixtape of fresh music, enjoy and more",
    image: RectangleTwo,
  },
  {
    id: 5,
    title: "Release Radar",
    description: "Catch all the latest music from artists you",
    image: RectangleTwo,
  },
  {
    id: 6,
    title: "Top Hits #13",
    description: "mixtape, COIN,DMX, Morningtime red and more",
    image: RectangleTwo,
  },
];
const dataTwo = [
  {
    id: 7,
    title: "Wallows Radio",
    image: music,
  },
  {
    id: 8,
    title: "Daily Mix 6",
    image: music,
  },
  {
    id: 9,
    title: "Top Brasil",
    image: music,
  },
  {
    id: 10,
    title: "Daily Mix 3 ",
    image: music,
  },
  {
    id: 11,
    title: "Daily Mix 2 ",
    image: music,
  },
  {
    id: 12,
    title: "Today's Top Hits",
    image: music,
  },
];

export function MainSpotify() {
  const numberList = data.length;
  return (
    <main className="flex-1 p-6 h-screen bg-black/90 relative">
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
            alt=""
            width={40}
            height={40}
            className="rounded-full"
          />
          <h3 className="font-bold">Pablo</h3>
          <button>
            <Image src={arrowdown} alt="" />
          </button>
        </div>
      </div>
      <h1 className="font-bold text-3xl mt-12">Good afternoon</h1>
      <div className="grid  grid-cols-3 gap-4 mt-4 max-md:grid-cols-2">
        {dataTwo.slice(0, numberList).map(({ id, image, title }) => {
          return (
            <a
              key={id}
              href=""
              className="bg-white/10 hover:bg-white/20 transition-all group rounded flex items-center gap-4 hover:scale-105"
            >
              <Image src={image} alt="image playlist" />
              <strong>{title}</strong>
              <button className="w-12 h-12 bg-green-500 group-hover:visible rounded-full flex items-center justify-center ml-auto mr-7 invisible">
                <Image src={arrowright} alt="play" />
              </button>
            </a>
          );
        })}

        <h1 className="font-bold text-3xl mt-4">Made For Schell Fernandes</h1>
      </div>
      <div className="grid grid-cols-6 gap-4 max-md:flex max-md:overflow-x-scroll md:max-md:w-full mt-4">
        {data.slice(0, numberList).map(({ id, image, title, description }) => {
          return (
            <a
              key={id}
              href=""
              className="bg-white/5 p-2  rounded hover:bg-white/10 relative shrink-0 flex flex-col group gap-2 max-md:flex max-md:items-center hover:scale-105 transition"
            >
              <button className="w-12 h-12 bg-green-500 absolute group-hover:visible rounded-full flex items-center justify-center right-3 top-36 invisible">
                <Image src={arrowright} alt="play" />
              </button>
              <Image src={image} alt="album" />
              <strong>{title}</strong>
              <h4 className="text-sm text-zinc-500 max-w-[200px]">
                {description}
              </h4>
            </a>
          );
        })}
      </div>
    </main>
  );
}
