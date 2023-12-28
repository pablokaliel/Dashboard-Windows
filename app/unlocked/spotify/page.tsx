"use client";

import { useEffect, useState } from "react";
import { format } from "date-fns";
import notepad from "../../../public/icons/tasks/Icon 2.svg";
import spotify from "../../../public/icons/tasks/Icon 5.svg";
import folder from "../../../public/icons/tasks/Icon.svg";
import discord from "../../../public/icons/tasks/discord.svg";
import suun from "../../../public/icons/Group 2.svg";
import mail from "../../../public/icons/tasks/Icon 7.svg";
import speaker from "../../../public/icons/Speaker.svg";
import battery from "../../../public/icons/Battery.svg";
import config from "../../../public/icons/tasks/Icon 18.svg";
import pencil from "../../../public/icons/tasks/Icon 17.svg";

import microsoft from "../../../public/icons/Microsoft edge.svg";
import windows from "../../../public/icons/Windows.svg";
import search from "../../../public/icons/Search.svg";
import explorer from "../../../public/icons/file Explorer.svg";
import chat from "../../../public/icons/Chat.svg";
import maniger from "../../../public/icons/Desktop maniger.svg";

import wifi from "../../../public/icons/WiFi.svg";
import overflow from "../../../public/icons/Overflow.svg";

import paint from "../../../public/icons/tasks/Icon 3.svg";
import calculator from "../../../public/icons/tasks/Icon 4.svg";

import settings from "../../../public/icons/tasks/Icon 6.svg";

import photos from "../../../public/icons/tasks/Icon 8.svg";
import xbox from "../../../public/icons/tasks/Icon 9.svg";
import pdf from "../../../public/icons/tasks/Icon 10.svg";
import word from "../../../public/icons/tasks/Icon 11.svg";
import excel from "../../../public/icons/tasks/Icon 12.svg";
import store from "../../../public/icons/tasks/Icon 13.svg";
import calendary from "../../../public/icons/tasks/Icon 14.svg";
import camera from "../../../public/icons/tasks/Icon 15.svg";

import steam from "../../../public/icons/tasks/steam.svg";
import chrome from "../../../public/icons/tasks/chrome.svg";
import acessibility from "../../../public/icons/tasks/acessibility.png";

type ModalContent = {
  [key: string]: JSX.Element | undefined;
};

type Button = {
  src: string;
  alt: string;
  name: string;
};

import Image from "next/image";
import WindowsComponent from "@/app/components/WindowsComponent";
import axios from "axios";
import {
  AirplaneInFlight,
  BatteryPlus,
  Bluetooth,
  CaretLeft,
  CaretRight,
  Moon,
  Pause,
  PersonArmsSpread,
  PlayPause,
  WifiHigh,
} from "@phosphor-icons/react";
import { SideSpotify } from "@/app/components/SideSpotify";
import { BottomSpotify } from "@/app/components/BottomSpotify";
import { MainSpotify } from "@/app/components/MainSpotify";
import FooterComponent from "@/app/components/Footer";

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
