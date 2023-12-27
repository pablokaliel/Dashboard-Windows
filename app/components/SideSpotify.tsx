import Image from "next/image";

import homeIcon from "./../../public/icons/spotify/home.svg";
import libraryIcon from "./../../public/icons/spotify/library.svg";
import searchIcon from "./../../public/icons/spotify/search.svg";
import Link from "next/link";

export function SideSpotify() {
  return (
    <aside className="w-72 h-screen bg-zinc-950 p-6 max-md:hidden">
      <div className="flex items-center gap-2">
        <Link className="" href={"/unlocked"}><div className=" w-3 h-3 bg-red-500 rounded-full" /></Link>
        <div className=" w-3 h-3 bg-yellow-500 rounded-full" />
        <div className=" w-3 h-3 bg-green-500 rounded-full" />
      </div>
      <nav className="space-y-5 mt-10">
        <a
          href=""
          className="flex items-center gap-3 text-sm font-semibold text-zinc-200"
        >
          <Image height={20} width={20} src={homeIcon} alt="icon" />
          home
        </a>
        <a
          href=""
          className="flex items-center gap-3 text-sm font-semibold text-zinc-200"
        >
          <Image height={20} width={20} src={searchIcon} alt="icon" />
          search
        </a>
        <a
          href=""
          className="flex items-center gap-3 text-sm font-semibold text-zinc-200"
        >
          <Image height={20} width={20} src={libraryIcon} alt="icon" />
          Your Library
        </a>
      </nav>

      <nav className="border-t mt-8 border-t-zinc-700 flex flex-col gap-3">
        <a
          href=""
          className="text-zinc-400 hover:text-zinc-100 transition-colors mt-8"
        >
          PlayList #1
        </a>
        <a
          href=""
          className="text-zinc-400 hover:text-zinc-100 transition-colors"
        >
          PlayList #2
        </a>
        <a
          href=""
          className="text-zinc-400 hover:text-zinc-100 transition-colors"
        >
          PlayList #3
        </a>
        <a
          href=""
          className="text-zinc-400 hover:text-zinc-100 transition-colors"
        >
          PlayList #4
        </a>
        <a
          href=""
          className="text-zinc-400 hover:text-zinc-100 transition-colors"
        >
          PlayList #5
        </a>
        <a
          href=""
          className="text-zinc-400 hover:text-zinc-100 transition-colors"
        >
          PlayList #6
        </a>
        <a
          href=""
          className="text-zinc-400 hover:text-zinc-100 transition-colors"
        >
          PlayList #7
        </a>
        <a
          href=""
          className="text-zinc-400 hover:text-zinc-100 transition-colors"
        >
          PlayList #8
        </a>
        <a
          href=""
          className="text-zinc-400 hover:text-zinc-100 transition-colors"
        >
          PlayList #9
        </a>
        <a
          href=""
          className="text-zinc-400 hover:text-zinc-100 transition-colors"
        >
          PlayList #10
        </a>
      </nav>
    </aside>
  );
}
