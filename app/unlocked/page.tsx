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
import battery from "../../public/icons/Battery.svg";
import overflow from "../../public/icons/Overflow.svg";
import { useEffect, useState } from "react";

import { format } from "date-fns";
import axios from "axios";
type ModalContent = {
  [key: string]: JSX.Element | undefined;
};

const buttonsModal = {
  windows: [
    { src: windows, alt: "clima", name: "item" },
    { src: windows, alt: "clima", name: "item" },
    { src: windows, alt: "clima", name: "item" },
    { src: windows, alt: "clima", name: "item" },
    { src: windows, alt: "clima", name: "item" },
    { src: windows, alt: "clima", name: "item" },
    { src: windows, alt: "clima", name: "item" },
    { src: windows, alt: "clima", name: "item" },
    { src: windows, alt: "clima", name: "item" },
    { src: windows, alt: "clima", name: "item" },
    { src: windows, alt: "clima", name: "item" },
    { src: windows, alt: "clima", name: "item" },
    { src: windows, alt: "clima", name: "item" },
    { src: windows, alt: "clima", name: "item" },
    { src: windows, alt: "clima", name: "item" },
    { src: windows, alt: "clima", name: "item" },
    { src: windows, alt: "clima", name: "item" },
    { src: windows, alt: "clima", name: "item" },
    // Adicione mais objetos conforme necessário
  ],
  // Adicione mais plataformas ou tipos de botões conforme necessário
};

const RecommendedModal = {
  windows: [
    { src: windows, title: "Clima", subtitle: "Item 1" },
    { src: windows, title: "Clima", subtitle: "Item 2" },
    { src: windows, title: "Clima", subtitle: "Item 3" },
    { src: windows, title: "Clima", subtitle: "Item 4" },
    { src: windows, title: "Clima", subtitle: "Item 5" },
    { src: windows, title: "Clima", subtitle: "Item 6" },
    // Adicione mais objetos conforme necessário
  ],
  // Adicione mais plataformas ou tipos de botões conforme necessário
};

const modalContents: ModalContent = {
  windows: (
    <div className="flex flex-col gap-4">
      <div className="flex justify-between">
        <h2 className="text-[17px] font-bold">Pinned</h2>
        <button className="bg-white/10 text-sm px-2 rounded">All Apps</button>
      </div>
      <div className="grid flex-1 grid-cols-6 ">
        {buttonsModal.windows.map((button, index) => (
          <button
            key={index}
            className="flex flex-col mb-4 items-center justify-center"
          >
            <Image src={button.src} alt={button.alt} />
            <p className="text-sm font-normal">{button.name}</p>
          </button>
        ))}
      </div>
      <div className="flex justify-between">
        <h2 className="text-[17px] font-bold">Recommended</h2>
        <button className="bg-white/10 text-sm px-2 rounded">More</button>
      </div>
      <div className="grid grid-cols-2 gap-4">
        {/* Itens recomendados */}
        {RecommendedModal.windows.map((item, index) => (
          <div
            key={index}
            className="flex px-10 items-center justify-start gap-4"
          >
            <Image src={item.src} alt={item.title} />
            <button className="flex flex-col items-center justify-center">
              <p className="text-sm">{item.title}</p>
              <p className="text-xs text-gray-400">{item.subtitle}</p>
            </button>
          </div>
        ))}
      </div>
    </div>
  ),
  explorer: (
    <div>
      <h2>Conteúdo específico para Explorer</h2>
      <p>Aqui está o conteúdo para o Explorer...</p>
      {/* Adicione outros elementos HTML conforme necessário */}
    </div>
  ),
  search: (
    <div>
      <h2>Conteúdo específico para Search</h2>
      <p>Aqui está o conteúdo para o Search...</p>
      {/* Adicione outros elementos HTML conforme necessário */}
    </div>
  ),
  desktopmaginer: (
    <div>
      <h2>Conteúdo específico para Desktop Magner</h2>
      <p>Aqui está o conteúdo para o Desktop Magner...</p>
      {/* Adicione outros elementos HTML conforme necessário */}
    </div>
  ),
  chat: (
    <div>
      <h2>Conteúdo específico para Chat</h2>
      <p>Aqui está o conteúdo para o Chat...</p>
      {/* Adicione outros elementos HTML conforme necessário */}
    </div>
  ),
  microsoft: (
    <div>
      <h2>Conteúdo específico para Microsoft</h2>
      <p>Aqui está o conteúdo para o Microsoft...</p>
      {/* Adicione outros elementos HTML conforme necessário */}
    </div>
  ),
  // Adicione outros tipos de conteúdo conforme necessário
};

export default function Page() {
  const [showSeconds, setShowSeconds] = useState(false);
  const [, setTimeFormat] = useState("HH:mm");
  const [time, setTime] = useState("");
  const [date, setDate] = useState("");
  const [weather, setWeather] = useState<any>(null);
  const [, setLocationAccess] = useState(false);

  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState<string>("");

  const toggleModal = () => {
    setShowModal((prevShowModal) => !prevShowModal);
  };

  const toggleModalWithContent = (content: string) => {
    setModalContent(content);
    toggleModal();
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
            <button onClick={() => toggleModalWithContent("windows")}>
              <Image src={windows} alt="clima" />
            </button>
            <button onClick={() => toggleModalWithContent("search")}>
              <Image src={search} alt="clima" />
            </button>
            <button onClick={() => toggleModalWithContent("desktopmaginer")}>
              <Image src={maniger} alt="clima" />
            </button>
            <button onClick={() => toggleModalWithContent("chat")}>
              <Image src={chat} alt="clima" />
            </button>
            <button onClick={() => toggleModalWithContent("explorer")}>
              <Image src={explorer} alt="clima" />
            </button>
            <button onClick={() => toggleModalWithContent("microsoft")}>
              <Image src={microsoft} alt="clima" />
            </button>
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
          <div className="relative mx-auto w-full h-full flex items-center justify-center">
            <div className="bg-[#212121]/60 flex flex-col gap-10 backdrop-blur-xl w-[700px] rounded shadow-lg">
              <div className="flex justify-between items-center px-10 pr-10 pt-10">
                <div className="h-[45px]  w-full bg-[#1e1e1e]/70">
                  <input
                    className="w-full px-[55px] h-full bg-transparent"
                    placeholder="type here to search"
                  />
                </div>
              </div>
              <div className="px-10">
                <div className=" ">{modalContents[modalContent]}</div>
              </div>
              <div className="h-16 border-t-[1.4px] flex-col flex justify-center border-white border-opacity-20 px-[70px] bg-black/10">
                <div className="flex gap-3 items-center ">
                  <Image
                    src="https://github.com/pablokaliel.png"
                    className="rounded-full"
                    alt=""
                    width={40}
                    height={40}
                  />
                  <p className="text-sm font-normal">name</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
