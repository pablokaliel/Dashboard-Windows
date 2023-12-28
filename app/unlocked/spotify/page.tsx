"use client";


import { SideSpotify } from "@/app/components/SideSpotify";
import { BottomSpotify } from "@/app/components/BottomSpotify";
import { MainSpotify } from "@/app/components/MainSpotify";

export default function Page() {

  return (
    <main className="min-h-screen w-full">
      <div className="flex flex-col w-full h-screen ">
        <div className="flex overflow-scroll h-full flex-1">
          <SideSpotify />
          <MainSpotify />
        </div>
        <BottomSpotify />
      </div>
    </main>
  );
}
