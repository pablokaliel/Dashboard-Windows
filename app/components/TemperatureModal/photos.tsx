import { Cloud } from "@phosphor-icons/react";
import Image from "next/image";

function PhotosComp() {
    return ( 
        <div className="w-[317px] overflow-hidden mb-3 bg-[#333] h-[326px]">
        <div className="flex gap-2 items-center py-2 px-3">
          <Cloud size={24} color="#64cdff" weight="fill" />{" "}
          <span>Photos</span>
        </div>
        <div className="px-5 flex mb-3 flex-col">
          <span className="text-base">On this day</span>
          <span className="text-xs text-zinc-500">
            Oct 5 • 33 items
          </span>
        </div>
        <a
          href="https://boracodar20.vercel.app"
          target="_blank"
          className="grid grid-cols-2"
        >
          <div className="col-span-1 row-span-3">
            <Image
              src="https://source.unsplash.com/random/?sky"
              alt=""
              width={160}
              height={210}
            />
          </div>
          <div className=" h-full col-span-1">
            <Image
              src="https://source.unsplash.com/random/?florest"
              alt=""
              width={160}
              height={105}
            />
          </div>
          <div className=" h-full col-span-1">
            <Image
              src="https://source.unsplash.com/random/?universe"
              alt=""
              width={160}
              height={105}
            />
          </div>
        </a>
      </div>
     );
}

export default PhotosComp;