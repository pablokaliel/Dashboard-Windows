'use client'
import { ArrowClockwise, ArrowLeft, ArrowRight, ArrowUp, ArrowsDownUp, GridFour, Share } from "@phosphor-icons/react/dist/ssr";

function HeaderProjects() {

    return ( 
        <div className="flex justify-between text-sm h-full w-full bg-[#272727]">

        <div className="flex p-1 gap-2">
            <div className="hover:bg-white/30 p-2" ><ArrowLeft/></div>
            <div className="hover:bg-white/30 p-2" ><ArrowRight/></div>
            <div className="hover:bg-white/30 p-2" ><ArrowClockwise/></div>
            <div className="hover:bg-white/30 p-2" ><ArrowUp/></div>
        </div>
        <div className="flex p-1 gap-2">
            <div className="hover:bg-white/30 p-2" ><GridFour/></div>
            <div className="hover:bg-white/30 p-2" ><ArrowsDownUp/></div>
            <div className="hover:bg-white/30 p-2" ><Share/></div>
        </div>
        </div>
     );
}

export default HeaderProjects;
