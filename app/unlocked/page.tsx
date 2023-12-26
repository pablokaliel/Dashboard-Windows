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
import { useEffect, useRef, useState } from "react";

import github from "../../public/icons/tasks/github.svg";
import lixeira from "../../public/icons/tasks/Icon.png";
import folder from "../../public/icons/tasks/Icon.svg";
import notepad from "../../public/icons/tasks/Icon 2.svg";
import paint from "../../public/icons/tasks/Icon 3.svg";
import calculator from "../../public/icons/tasks/Icon 4.svg";
import spotify from "../../public/icons/tasks/Icon 5.svg";
import settings from "../../public/icons/tasks/Icon 6.svg";
import mail from "../../public/icons/tasks/Icon 7.svg";
import photos from "../../public/icons/tasks/Icon 8.svg";
import xbox from "../../public/icons/tasks/Icon 9.svg";
import pdf from "../../public/icons/tasks/Icon 10.svg";
import word from "../../public/icons/tasks/Icon 11.svg";
import excel from "../../public/icons/tasks/Icon 12.svg";
import store from "../../public/icons/tasks/Icon 13.svg";
import calendary from "../../public/icons/tasks/Icon 14.svg";
import camera from "../../public/icons/tasks/Icon 15.svg";
import config from "../../public/icons/tasks/Icon 18.svg";
import pencil from "../../public/icons/tasks/Icon 17.svg";
import steam from "../../public/icons/tasks/steam.svg";
import chrome from "../../public/icons/tasks/chrome.svg";
import acessibility from "../../public/icons/tasks/acessibility.png";
import discord from "../../public/icons/tasks/discord.svg";

import { format } from "date-fns";
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

type ModalContent = {
  [key: string]: JSX.Element | undefined;
};

type Button = {
  src: string;
  alt: string;
  name: string;
};

const buttonsModal = {
  windows: [
    { src: folder, alt: "folder", name: "Folder" },
    { src: notepad, alt: "bloco de notas", name: "Notepad" },
    { src: paint, alt: "paint", name: "Paint" },
    { src: calculator, alt: "calculadora", name: "Calculator" },
    { src: spotify, alt: "spotify", name: "Spotify" },
    { src: settings, alt: "configuracao", name: "Settings" },
    { src: mail, alt: "email", name: "Mail" },
    { src: photos, alt: "fotos", name: "Photo" },
    { src: xbox, alt: "xbox", name: "Xbox" },
    { src: pdf, alt: "pdf", name: "PDF" },
    { src: word, alt: "word", name: "Word" },
    { src: excel, alt: "excel", name: "Excel" },
    { src: store, alt: "store", name: "Microsoft Store" },
    { src: calendary, alt: "calendario", name: "Calendar" },
    { src: camera, alt: "camera", name: "Camera" },
  ],
  search: [
    { src: folder, alt: "folder", name: "Folder" },
    { src: notepad, alt: "bloco de notas", name: "Notepad" },
    { src: paint, alt: "paint", name: "Paint" },
    { src: calculator, alt: "calculadora", name: "Calculator" },
    { src: spotify, alt: "spotify", name: "Spotify" },
    { src: settings, alt: "configuracao", name: "Settings" },
    { src: mail, alt: "email", name: "Mail" },
    { src: photos, alt: "fotos", name: "Photo" },
    { src: xbox, alt: "xbox", name: "Xbox" },
    { src: pdf, alt: "pdf", name: "logo_ideias" },
    { src: pdf, alt: "pdf", name: "PDF" },
    { src: word, alt: "word", name: "Word" },
    { src: excel, alt: "excel", name: "Excel" },
    { src: excel, alt: "excel", name: "planilha_mensal" },
    { src: store, alt: "store", name: "Microsoft Store" },
    { src: calendary, alt: "calendario", name: "Calendar" },
    { src: discord, alt: "camera", name: "Discord" },
    { src: chrome, alt: "camera", name: "Chrome" },
    { src: steam, alt: "camera", name: "Steam" },
    { src: camera, alt: "camera", name: "Camera" },
    { src: acessibility, alt: "camera", name: "Acessibilidade" },
  ],
};

const RecommendedModal = {
  windows: [
    { src: notepad, title: "NotePad", subtitle: "2h atrás" },
    { src: spotify, title: "Spotify", subtitle: "17m atrás" },
    { src: folder, title: "Meus projetos", subtitle: "Ontem às 13h15" },
    { src: discord, title: "Discord", subtitle: "Ontem às 16h20" },
    { src: suun, title: "Clima", subtitle: "5h atrás" },
    { src: mail, title: "Email", subtitle: "12h atrás" },
  ],
};

export default function Page() {
  const [showSeconds, setShowSeconds] = useState(false);
  const [, setTimeFormat] = useState("HH:mm");
  const [time, setTime] = useState("");
  const [date, setDate] = useState("");
  const [weather, setWeather] = useState<any>(null);
  const [, setLocationAccess] = useState(false);

  const musicas = [
    "/choraviola.mp3",
    "/myloveall.mp3",
    // Adicione mais músicas conforme necessário
  ];

  const [isPlaying, setIsPlaying] = useState(false);
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const nextSong = () => {
    const newIndex = currentSongIndex + 1;
    if (newIndex >= musicas.length) {
      setCurrentSongIndex(0); // Go back to the first song when reaching the end
    } else {
      setCurrentSongIndex(newIndex);
    }
  };
  
  const prevSong = () => {
    const newIndex = currentSongIndex - 1;
    if (newIndex < 0) {
      setCurrentSongIndex(musicas.length - 1); // Go to the last song when going back from the first
    } else {
      setCurrentSongIndex(newIndex);
    }
  };

  useEffect(() => {
    audioRef.current.src = musicas[currentSongIndex];
    if (isPlaying) {
      audioRef.current.play().catch((error) => {
        console.error('Error starting playback:', error);
      });
    }
  }, [currentSongIndex]);

  const audioRef = useRef(new Audio(musicas[currentSongIndex]));

  const playPause = () => {
    const audio = audioRef.current;
    if (isPlaying) {
      audio.pause();
    } else {
      audio.play().catch((error) => {
        console.error('Erro ao iniciar a reprodução:', error);
      });
    }
    setIsPlaying(!isPlaying);
  };

  useEffect(() => {
    const audio = audioRef.current;
  
    const handleSongEnd = () => {
      nextSong(); // Simply move to the next song when the current one ends
    };
  
    audio.addEventListener('ended', handleSongEnd);
  
    return () => {
      audio.removeEventListener('ended', handleSongEnd);
    };
  }, [currentSongIndex, musicas]);
  
  
 

  const [searchText, setSearchText] = useState<string>("");
  const [filteredButtons, setFilteredButtons] = useState<Button[]>([]);
  const modalContents: ModalContent = {
    windows: (
      <div className="flex flex-col gap-4">
        <div className="flex justify-between">
          <h2 className="text-[17px] font-bold">Pinned</h2>
          <button className="bg-white/10 text-sm px-2 rounded">All Apps</button>
        </div>
        <div className="grid flex-1 grid-cols-6 ">
          {filteredButtons.length > 0 ? (
            filteredButtons.map((button: Button, index: number) => (
              <button
                key={index}
                className="flex flex-col w-auto mb-4 items-center justify-center hover:bg-black/20 "
              >
                <Image
                  src={button.src}
                  alt={button.alt}
                  height={30}
                  width={30}
                />
                <p className="text-sm mt-2 font-normal">{button.name}</p>
              </button>
            ))
          ) : (
            <p className="text-center text-red-500">Não encontrado</p>
          )}
        </div>
        <div className="flex justify-between">
          <h2 className="text-[17px] font-bold">Recommended</h2>
          <button className="bg-white/10 text-sm px-2 rounded">More</button>
        </div>
        <div className="grid grid-cols-2 gap-4">
          {RecommendedModal.windows.map((item, index) => (
            <button
              key={index}
              className="flex pr-10 items-center justify-start gap-4"
            >
              <Image src={item.src} alt={item.title} width={30} height={30} />
              <div className="flex flex-col items-start justify-center">
                <p className="text-sm">{item.title}</p>
                <p className="text-xs text-gray-400">{item.subtitle}</p>
              </div>
            </button>
          ))}
        </div>
      </div>
    ),
    explorer: (
      <div>
        <h2>Conteúdo específico para Explorer</h2>
        <p>Aqui está o conteúdo para o Explorer...</p>
      </div>
    ),
    search: (
      <div className="flex flex-col gap-4">
        <div className="flex justify-between">
          <h2 className="text-[17px] font-bold">Pinned</h2>
        </div>
        <span className="text-sm font-thin">results</span>
        <div className=" flex flex-col gap-3 max-h-[370px] overflow-scroll ">
          <div className="flex flex-col gap-3 max-h-[370px] overflow-scroll">
            {filteredButtons.length > 0 ? (
              <div>
                {filteredButtons.map((button: Button, index: number) => (
                  <div key={index}>
                    {index === 0 ||
                    filteredButtons[index - 1].name.charAt(0) !==
                      button.name.charAt(0) ? (
                      <h2 className="text-[17px] py-5 px-2 font-bold">
                        {button.name.charAt(0)}
                      </h2>
                    ) : null}
                    <button className="flex p-2 items-center gap-6 justify-start hover:bg-black/20">
                      <Image
                        src={button.src}
                        alt={button.alt}
                        height={30}
                        width={30}
                      />
                      <p className="text-sm mt-2 font-normal">{button.name}</p>
                    </button>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-center text-red-500">Não encontrado</p>
            )}
          </div>
        </div>
      </div>
    ),
    desktopmaginer: (
      <div>
        <h2>Conteúdo específico para Desktop Magner</h2>
        <p>Aqui está o conteúdo para o Desktop Magner...</p>
      </div>
    ),
    chat: (
      <div>
        <h2>Conteúdo específico para Chat</h2>
        <p>Aqui está o conteúdo para o Chat...</p>
      </div>
    ),
    microsoft: (
      <div>
        <h2>Conteúdo específico para Microsoft</h2>
        <p>Aqui está o conteúdo para o Microsoft...</p>
      </div>
    ),
  };
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setSearchText(e.target.value);

    const filtered = buttonsModal.search.filter((button) =>
      button.name.toLowerCase().includes(e.target.value.toLowerCase())
    );

    setFilteredButtons(filtered);
  };

  const [modalContent, setModalContent] = useState<string>("");
  useEffect(() => {
    const category = modalContent === "search" ? "search" : "windows";
    const filtered = buttonsModal[category].filter((button) =>
      button.name.toLowerCase().includes(searchText.toLowerCase())
    );

    if (modalContent === "search") {
      const sortedFilteredButtons = filtered.sort((a, b) =>
        a.name.localeCompare(b.name)
      );
      setFilteredButtons(sortedFilteredButtons);
    } else {
      setFilteredButtons(filtered);
    }
  }, [searchText, modalContent]);

  const [showModal, setShowModal] = useState(false);

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

  const [showSpeakerModal, setShowSpeakerModal] = useState(false);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current
        .play()
        .then(() => {
          // A reprodução começou com sucesso
        })
        .catch((error) => {
          console.error("Erro ao iniciar a reprodução:", error);
        });
    }
  }, []);

  // Função para alternar a exibição do modal do alto-falante
  const toggleSpeakerModal = () => {
    setShowSpeakerModal((prevShowSpeakerModal) => !prevShowSpeakerModal);
  };

  const [volume, setVolume] = useState(50);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume / 100;
    }
  }, [volume]);

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
      <div className="flex flex-col w-full h-screen ">
        <div className="flex h-full justify-between">
          <div className=" grid grid-cols-2 gap-2 h-fit">
            <button className="px-2 pt-5 w-auto flex flex-col items-center justify-center hover:bg-white/30 duration-200">
              <div>
                <Image src={notepad} alt="clima" width={30} height={30} />
              </div>
              <span className="text-sm mt-2">NotePad</span>
            </button>

            <button className="px-2 pt-5 w-auto flex flex-col items-center justify-center hover:bg-white/30 duration-200">
              <div>
                <Image src={folder} alt="clima" width={30} height={30} />
              </div>
              <span className="text-sm mt-2">Meus projetos</span>
            </button>

            <button
              onClick={() => {
                if (audioRef.current) {
                  audioRef.current
                    .play()
                    .then(() => {
                      // Reprodução iniciada com sucesso
                    })
                    .catch((error) => {
                      console.error("Erro ao iniciar a reprodução:", error);
                    });
                }
              }}
              className="px-2 pt-5 w-auto flex flex-col items-center justify-center hover:bg-white/30 duration-200"
            >
              <div>
                <Image src={spotify} alt="clima" width={30} height={30} />
              </div>
              <span className="text-sm mt-2">Spotify</span>
            </button>

            <button className="px-2 pt-5 w-auto flex flex-col items-center justify-center hover:bg-white/30 duration-200">
              <div>
                <Image src={github} alt="clima" width={30} height={30} />
              </div>
              <span className="text-sm mt-2">GitHub</span>
            </button>
          </div>

          <div className=" h-full flex flex-col ">
            <button className="px-5 pt-5 w-auto flex flex-col items-center justify-center hover:bg-white/30 ">
              <div>
                <Image src={lixeira} alt="clima" width={30} height={30} />
              </div>
              <span className="text-sm mt-2">Lixeira</span>
            </button>

            <button className="px-5 pt-5 w-auto flex flex-col items-center justify-center hover:bg-white/30 mt-2">
              <div>
                <Image src={steam} alt="clima" width={30} height={30} />
              </div>
              <span className="text-sm mt-2">Steam</span>
            </button>

            <button className="px-5 pt-5 w-auto flex flex-col items-center justify-center hover:bg-white/30 mt-2">
              <div>
                <Image src={discord} alt="clima" width={30} height={30} />
              </div>
              <span className="text-sm mt-2">Discord</span>
            </button>

            <button className="px-5 pt-5 w-auto flex flex-col items-center justify-center hover:bg-white/30 mt-2">
              <div>
                <Image src={chrome} alt="clima" width={30} height={30} />
              </div>
              <span className="text-sm mt-2">Chrome</span>
            </button>
          </div>
          <audio
            ref={audioRef}
            loop
            controls
            autoPlay={true}
            preload="auto"
            style={{ position: "absolute", left: "-9999px", opacity: 0 }}
          >
            <source src="/choraviola.mp3" type="audio/mpeg" />
            Seu navegador não suporta o elemento de áudio.
          </audio>
        </div>

        <footer className="flex justify-between bg-[#444444]/30 backdrop-blur-xl items-center h-[60px] w-full">
          <div className="ml-4 items-center h-[50px] flex gap-3">
            <Image src={suun} alt="clima" />
            <div>
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
              <Image height={24} width={24} src={windows} alt="clima" />
            </button>

            <button onClick={() => toggleModalWithContent("search")}>
              <Image height={24} width={24} src={search} alt="clima" />
            </button>

            <button onClick={() => toggleModalWithContent("desktopmaginer")}>
              <Image height={24} width={24} src={maniger} alt="clima" />
            </button>

            <button onClick={() => toggleModalWithContent("chat")}>
              <Image height={24} width={24} src={chat} alt="clima" />
            </button>

            <button onClick={() => toggleModalWithContent("explorer")}>
              <Image height={24} width={24} src={explorer} alt="clima" />
            </button>

            <button onClick={() => toggleModalWithContent("microsoft")}>
              <Image height={24} width={24} src={microsoft} alt="clima" />
            </button>
          </div>

          <div className="w-[180px] mr-6 gap-2 flex">
            <div className="flex gap-1">
              <Image src={overflow} alt="clima" />
              <Image src={wifi} alt="clima" />
              <button onClick={toggleSpeakerModal}>
                <Image src={speaker} alt="clima" />
              </button>

              <Image src={battery} alt="clima" />
            </div>
            <div onClick={toggleSeconds} className="text-end text-xs">
              <p className="cursor-pointer">{time}</p>
              <p>{date}</p>
            </div>
          </div>
        </footer>
      </div>

      <div
        onClick={toggleModal}
        className={`fixed ${
          showModal ? "translate-y-0" : "translate-y-full"
        } transition-transform duration-300 inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none`}
      >
        <div className="relative mx-auto w-full h-full flex items-center justify-center">
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-[#212121]/60 border-white border-[1.4px] border-opacity-20 flex flex-col gap-10 backdrop-blur-xl w-[700px] rounded shadow-lg"
          >
            <div className="flex justify-between items-center px-10 pr-10 pt-10">
              <div className="h-[45px]  w-full bg-[#1e1e1e]/70">
                <input
                  className="w-full px-[55px] h-full bg-transparent"
                  placeholder="type here to search"
                  onChange={handleSearch}
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
                <p className="text-sm font-normal">Pablo</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        onClick={toggleSpeakerModal}
        className={`fixed ${
          showSpeakerModal ? "translate-y-0" : "translate-y-full"
        } transition-transform duration-300 inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none`}
      >
        <div className="relative mx-auto w-full h-full flex items-end justify-end px-5 pb-[70px]">
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-[#212121]/60 border-white border-[1.4px] border-opacity-20 flex flex-col gap-10 backdrop-blur-xl w-[400px] rounded shadow-lg"
          >
            <div className="px-5 gap-4 w-full py-8 grid grid-cols-3">
              <div className=" text-center">
                <div className="bg-[#60CDFF] mb-2 border rounded-md border-opacity-20 border-white flex items-center justify-center w-[110] h-[60px] ">
                  <WifiHigh size={21} weight="light" color="black" />
                </div>
                <span className=" text-sm">Wi-Fi</span>
              </div>
              <div className=" text-center">
                <div className="bg-[#60CDFF] mb-2 border rounded-md border-opacity-20 border-white flex items-center justify-center w-[110] h-[60px] ">
                  <Bluetooth size={21} weight="light" color="black" />
                </div>
                <span className=" text-sm">Bluetooth</span>
              </div>
              <div className=" text-center">
                <div className="border bg-[#FFFFFF0F] rounded-md border-opacity-20 border-white flex items-center justify-center w-[110] h-[60px] mb-2">
                  <AirplaneInFlight size={21} weight="light" />
                </div>
                <span className=" text-sm">AirPlane Mode</span>
              </div>
              <div className=" text-center">
                <div className="border bg-[#FFFFFF0F] rounded-md border-opacity-20 border-white flex items-center justify-center w-[110] h-[60px] mb-2">
                  <BatteryPlus size={32} weight="light" />
                </div>
                <span className=" text-sm">Battery Saver</span>
              </div>
              <div className=" text-center">
                <div className="border bg-[#FFFFFF0F] rounded-md border-opacity-20 border-white flex items-center justify-center w-[110] h-[60px] mb-2">
                  <Moon size={21} weight="light" />
                </div>
                <span className=" text-sm">Focus Assist</span>
              </div>
              <div className=" text-center">
                <div className="border bg-[#FFFFFF0F] rounded-md border-opacity-20 mb-2 border-white flex items-center justify-center w-[120px] h-[60px] ">
                  <PersonArmsSpread size={21} weight="light" />
                </div>
                <span className=" text-sm">Acessibility</span>
              </div>
            </div>
            <div className="px-5">
              <div className="flex gap-5">
                <Image src={speaker} alt="" height={21} width={21} />
                <input
                  className="w-full"
                  type="range"
                  min="0"
                  max="100"
                  value={volume}
                  onChange={(e) => setVolume(Number(e.target.value))}
                />
              </div>
              <div className="flex mt-10 justify-between items-center">
                <button onClick={prevSong}><CaretLeft size={21} weight="fill" /></button>
                <button onClick={playPause}>
                  {isPlaying ? (
                    <Pause size={21} weight="fill" />
                  ) : (
                    <PlayPause size={21} weight="fill" />
                  )}
                </button>
                <button onClick={nextSong}><CaretRight size={21} weight="fill" /></button>
              </div>
            </div>

            <div className="h-16 border-t-[1.4px] items-center flex justify-between border-white border-opacity-20 px-5 bg-black/10">
              <div className="flex gap-1 items-center ">
                <Image src={battery} alt="" width={21} height={21} />
                <p className="text-sm font-normal">92%</p>
              </div>
              <div className="flex gap-2">
                <Image src={pencil} alt="" width={18} height={18} />
                <Image src={config} alt="" width={18} height={18} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
