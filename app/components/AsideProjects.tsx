"use client";
import { CaretDown, CaretUp, GearSix, MagnifyingGlass, PushPin } from "@phosphor-icons/react/dist/ssr";

import fav1 from "../../public/icons/explorer/Special Folders.svg";
import fav2 from "../../public/icons/explorer/Special Folders 2.svg";
import fav3 from "../../public/icons/explorer/Special Folders 3.svg";
import fav4 from "../../public/icons/explorer/Special Folders 4.svg";
import fav5 from "../../public/icons/explorer/Special Folders 5.svg";
import fav6 from "../../public/icons/explorer/Special Folders 6.svg";
import fav7 from "../../public/icons/explorer/Special Folders 7.svg";

import fav8 from "../../public/icons/explorer/Folder.svg";
import { useState } from "react";
import Image from "next/image";

function AsideProjects() {
  const [expanded, setExpanded] = useState(false);
  const [expandedMyPC, setExpandedMyPC] = useState(false);

  const toggleOptions = () => {
    setExpanded(!expanded);
  };
  const toggleOptionsPC = () => {
    setExpandedMyPC(!expandedMyPC);
  };

  return (
    <div className="w-full text-sm relative h-full bg-[#272727]">
      <div className="p-1 flex flex-col gap-2">
        <label
          htmlFor="search"
          className="bg-[#3d3d3d] p-1 outline-none flex gap-2 items-center"
        >
          <input
            id="search"
            className="w-full outline-none h-full bg-transparent"
            placeholder="search..."
          />
          <MagnifyingGlass />
        </label>

        <div className="p-1 w-full">
          <button
            className="w-full flex items-center justify-between"
            onClick={toggleOptions}
          >
            <div className="flex gap-2">
              <Image src={fav1} alt="" width={22} height={22} />
              <span>Favorites</span>
            </div>
            {expanded ? <CaretDown /> : <CaretUp />}
          </button>
          {expanded && (
            <div className="flex gap-1 flex-col mb-3">
              <button className="w-full hover:bg-white/30 pl-4 flex items-center justify-between">
                <div className="flex gap-2">
                  <Image src={fav8} alt="" width={22} height={22} />
                  <span className="text-sm text-gray-300">Dashboard</span>
                </div>
                <PushPin />
              </button>
              <button className="w-full hover:bg-white/30 pl-4 flex items-center justify-between">
                <div className="flex gap-2">
                  <Image src={fav8} alt="" width={22} height={22} />
                  <span className="text-sm text-gray-300">#BoraCodar</span>
                </div>
                <PushPin />
              </button>
              <button className="w-full hover:bg-white/30 pl-4 flex items-center justify-between">
                <div className="flex gap-2">
                  <Image src={fav8} alt="" width={22} height={22} />
                  <span className="text-sm text-gray-300">Landing</span>
                </div>
                <PushPin />
              </button>
            </div>
          )}
        </div>

        <div className="p-1 w-full">
          <button
            className="w-full flex items-center justify-between"
            onClick={toggleOptionsPC}
          >
            <div className="flex gap-2">
              <Image src={fav2} alt="" width={22} height={22} />
              <span>Meu PC</span>
            </div>
            {expandedMyPC ? <CaretDown /> : <CaretUp />}
          </button>
          {expandedMyPC && (
            <div className="flex gap-1 flex-col mb-3">
              <button className="w-full hover:bg-white/30 pl-4 flex items-center justify-between">
                <div className="flex gap-2">
                  <Image src={fav7} alt="" width={22} height={22} />
                  <span className="text-sm text-gray-400">Desktop</span>
                </div>
                <PushPin />
              </button>
              <button className="w-full hover:bg-white/30 pl-4 flex items-center justify-between">
                <div className="flex gap-2">
                  <Image src={fav8} alt="" width={22} height={22} />
                  <span className="text-sm text-gray-400">Documentos</span>
                </div>
                <PushPin />
              </button>
              <button className="w-full hover:bg-white/30 pl-4 flex items-center justify-between">
                <div className="flex gap-2">
                  <Image src={fav3} alt="" width={22} height={22} />
                  <span className="text-sm text-gray-400">Downloads</span>
                </div>
                <PushPin />
              </button>
              <button className="w-full hover:bg-white/30 pl-4 flex items-center justify-between">
                <div className="flex gap-2">
                  <Image src={fav4} alt="" width={22} height={22} />
                  <span className="text-sm text-gray-400">Fotos</span>
                </div>
                <PushPin />
              </button>
              <button className="w-full hover:bg-white/30 pl-4 flex items-center justify-between">
                <div className="flex gap-2">
                  <Image src={fav5} alt="" width={22} height={22} />
                  <span className="text-sm text-gray-400">Videos</span>
                </div>
                <PushPin />
              </button>

              <button className="w-full hover:bg-white/30 pl-4 flex items-center justify-between">
                <div className="flex gap-2">
                  <Image src={fav6} alt="" width={22} height={22} />
                  <span className="text-sm text-gray-400">Musicas</span>
                </div>
                <PushPin />
              </button>
            </div>
          )}
        </div>

        <button className="w-full hover:bg-white/30 pl-4 flex items-center justify-between">
          <div className="flex gap-2">
            <Image src={fav8} alt="" width={22} height={22} />
            <span className="text-sm text-gray-400">Cloud Drivers</span>
          </div>
          <PushPin />
        </button>
      </div>
      <div className="p-1 absolute flex items-center gap-2 bottom-0 "> <GearSix/>Settings</div>
    </div>
  );
}

export default AsideProjects;
