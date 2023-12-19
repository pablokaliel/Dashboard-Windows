"use client";

import Image from "next/image";
import microsoft from "../../public/icons/Microsoft edge.svg";
import windows from "../../public/icons/Windows.svg";
import search from "../../public/icons/Search.svg";
import explorer from "../../public/icons/file Explorer.svg";
import chat from "../../public/icons/Chat.svg";
import maniger from "../../public/icons/Desktop maniger.svg";
import suun from "../../public/icons/Group 2.svg";
import wifi from "../../public/icons/WiFi.svg";
import speaker from "../../public/icons/Speaker.svg";
import battery from "../../public/icons/battery.svg";
import overflow from "../../public/icons/Overflow.svg";
import { useEffect, useState } from "react";

import { format } from "date-fns";
import axios from "axios";

export default function Page() {
  const [showSeconds, setShowSeconds] = useState(false);
  const [timeFormat, setTimeFormat] = useState("HH:mm");
  const [time, setTime] = useState("");
  const [date, setDate] = useState("");
  const [weather, setWeather] = useState<any>(null);
  const [locationAccess, setLocationAccess] = useState(false);

  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal((prevShowModal) => !prevShowModal);
  };

  useEffect(() => {
    const clockInterval = setInterval(() => {
      const currentDate = new Date();
      setTime(format(currentDate, showSeconds ? "HH:mm:ss" : "HH:mm"));
      setDate(format(currentDate, "dd/MM/yyyy"));
    }, 1000);

    return () => clearInterval(clockInterval);
  }, [showSeconds]);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setLocationAccess(true);
        getWeather(position.coords.latitude, position.coords.longitude);
      },
      (error) => {
        console.error("Error getting location:", error);
        setLocationAccess(false);
      }
    );
  }, []);

  const toggleSeconds = () => {
    setShowSeconds(!showSeconds);
    setTimeFormat(showSeconds ? "HH:mm" : "HH:mm:ss");
  };

  useEffect(() => {
    const handleEscKey = (event: KeyboardEvent) => {
      if (event.keyCode === 27 && showModal) {
        toggleModal();
      }
    };

    document.addEventListener("keydown", handleEscKey, false);

    return () => {
      document.removeEventListener("keydown", handleEscKey, false);
    };
  }, [showModal]);

  const getWeather = async (lat: number, lon: number) => {
    const apiKey = "0ec51c3697240d124db14a663d03e135";
    try {
      let res = await axios.get(
        "https://api.openweathermap.org/data/2.5/weather",
        {
          params: {
            lat: lat,
            lon: lon,
            appid: apiKey,
            lang: "pt",
            units: "metric",
          },
        }
      );
      setWeather(res.data);
    } catch (error) {
      console.error("Error fetching weather data: ", error);
    }
  };

  return (
    <main className="min-h-screen w-full">
      <div className="flex flex-col w-full h-screen items-center justify-between">
        <div className="mt-44 h-full flex flex-col items-center">
          <div className="text-8xl bold">hora</div>
          <span className="text-xl">data</span>
        </div>

        <footer className="flex justify-between bg-[#444444]/30 backdrop-blur-xl items-center h-[60px] w-full">
          <div className="ml-4 items-center h-[50px]  flex gap-3">
            <Image src={suun} alt="clima" />
            <div className="">
              {weather && weather.main && (
                <>
                  <p className="text-xs font-bold">
                    {weather.main.temp.toFixed(1)}°C
                  </p>
                  <p className="text-sm">{weather.weather[0].description}</p>
                </>
              )}
            </div>
          </div>
          <div className="flex flex-1 items-center justify-center gap-7">
            <button onClick={toggleModal}>
              <Image src={windows} alt="clima" />
            </button>
            <Image src={search} alt="clima" />
            <Image src={maniger} alt="clima" />
            <Image src={chat} alt="clima" />
            <Image src={explorer} alt="clima" />
            <Image src={microsoft} alt="clima" />
          </div>
          <div className=" w-[180px] mr-6 gap-2 flex ">
            <div className="flex gap-1">
              <Image src={overflow} alt="clima" />
              <Image src={wifi} alt="clima" />
              <Image src={speaker} alt="clima" />
              <Image src={battery} alt="clima" />
            </div>
            <div onClick={toggleSeconds} className="text-end text-xs">
              <p className="cursor-pointer">{time}</p>
              <p>{date}</p>
            </div>
          </div>
        </footer>
      </div>
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none">
          <div className="relative mx-auto  w-full h-full flex items-center justify-center">
            <div className="bg-[#212121]/60 backdrop-blur-xl h-[680px] w-[700px] rounded shadow-lg">
              <div className="flex justify-between items-center pl-10 pr-1- pt-10">
                <h3 className="text-lg font-semibold">Meu Modal</h3>
              </div>
              <div className="px-10  bg-black/10">
                <p>Conteúdo do modal aqui...</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
