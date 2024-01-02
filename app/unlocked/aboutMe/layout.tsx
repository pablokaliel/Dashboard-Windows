import { Minus, Rectangle, X } from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";
import notepad from "../../../public/icons/tasks/Icon 2.svg";
import Image from "next/image";
import LeftMe from "@/app/components/HeaderMe";
import RightMe from "@/app/components/RightMe";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-full h-screen grid place-content-center">
     <video
        autoPlay
        muted
        loop
        className="w-full pointer-events-none h-full object-cover absolute -z-10 inset-0"
      >
        <source src="/background.mp4" type="video/mp4" />
        Seu navegador não suporta vídeos em HTML5.
      </video>
    <div className="z-30 w-[464px] h-[295px] bg-red-400">

      <div className="flex bg-[#272727] w-full justify-between items-center gap-2">
        <div className="px-3 py-2 flex gap-2">
          <Image src={notepad} alt="" height={20} width={20}/>
         <div className="flex gap-4">
          <a>a</a>
          <a>a</a>
          <a>a</a>
          <a>a</a>
         </div>
        </div>
        <div className="flex gap-4">

        <Link className="cursor-pointer hover:bg-[#000]/10 w-full h-full p-2" href={"/unlocked"}><Minus size={18} /></Link>
        <Link className="cursor-pointer hover:bg-[#000]/10 w-full h-full p-2" href={"/unlocked"}> <Rectangle size={18} /></Link>
        <Link className="cursor-pointer hover:bg-[#000]/10 w-full h-full p-2" href={"/unlocked"}><X size={18} /></Link>
        </div>

      </div>
      <div>
        <div className=" z-30 w-full bg-[#272727] ">
          <div ><LeftMe/></div>
        </div>
        <div className="flex-grow flex-1 h-full">{children}</div>
        <div className="  bg-[#3a3a3a] "><RightMe/></div>
      </div> 
    </div>
    </div>
  );
}
