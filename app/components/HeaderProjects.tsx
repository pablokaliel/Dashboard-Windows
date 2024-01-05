'use client'
import { ArrowClockwise, ArrowLeft, ArrowRight, ArrowUp } from "@phosphor-icons/react/dist/ssr";
import { useRouter } from 'next/router';

function HeaderProjects() {

    return ( 
        <div className="p-1 flex gap-2 text-sm h-full w-full bg-[#272727]">
            <div className="hover:bg-white/30 p-2" ><ArrowLeft/></div>
            <div className="hover:bg-white/30 p-2" ><ArrowRight/></div>
            <div className="hover:bg-white/30 p-2" ><ArrowUp/></div>
            <div className="hover:bg-white/30 p-2" ><ArrowClockwise/></div>
        </div>
     );
}

export default HeaderProjects;
