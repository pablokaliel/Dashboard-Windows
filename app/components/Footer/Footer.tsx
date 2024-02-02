"use client";
import Image from "next/image";

import wifi from "../../../public/icons/WiFi.svg";
import speaker from "../../../public/icons/Speaker.svg";
import battery from "../../../public/icons/Battery.svg";
import overflow from "../../../public/icons/Overflow.svg";
import microsoft from "../../../public/icons/Microsoft edge.svg";
import windows from "../../../public/icons/Windows.svg";
import search from "../../../public/icons/Search.svg";
import explorer from "../../../public/icons/file Explorer.svg";
import config from "../../../public/icons/tasks/Icon 18.svg";
import steam from "../../../public/icons/tasks/steam.svg";
import chrome from "../../../public/icons/tasks/chrome.svg";
import pencil from "../../../public/icons/tasks/Icon 17.svg";
import paint from "../../../public/icons/tasks/Icon 3.svg";
import calculator from "../../../public/icons/tasks/Icon 4.svg";
import settings from "../../../public/icons/tasks/Icon 6.svg";
import mail from "../../../public/icons/tasks/Icon 7.svg";
import photos from "../../../public/icons/tasks/Icon 8.svg";
import xbox from "../../../public/icons/tasks/Icon 9.svg";
import pdf from "../../../public/icons/tasks/Icon 10.svg";
import word from "../../../public/icons/tasks/Icon 11.svg";
import excel from "../../../public/icons/tasks/Icon 12.svg";
import store from "../../../public/icons/tasks/Icon 13.svg";
import calendary from "../../../public/icons/tasks/Icon 14.svg";
import camera from "../../../public/icons/tasks/Icon 15.svg";
import acessibility from "../../../public/icons/tasks/acessibility.png";
import suun from "../../../public/icons/Group 2.svg";
import notepad from "../../../public/icons/tasks/Icon 2.svg";
import spotify from "../../../public/icons/tasks/Icon 5.svg";
import folder from "../../../public/icons/tasks/Icon.svg";
import discord from "../../../public/icons/tasks/discord.svg";

import { AirplaneInFlight, ArrowClockwise, BatteryPlus, BellRinging, Bluetooth, CaretLeft, CaretRight, CaretUp, CloudSun, Moon, PersonArmsSpread, WifiHigh } from "@phosphor-icons/react";

import { format } from "date-fns";
import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";

import MusicPlayer from "./ReactPlayer";
import WindowsComponent from "./WindowsComponent";
import { useMusic } from "../../context/Context";
import { CustomButton } from "../Buttons/ButtonCustom";
import WatchListComp from "../TemperatureModal/watchlist";
import PhotosComp from "../TemperatureModal/photos";
import TrafficComp from "../TemperatureModal/Traffic";
import OutlookCalendarComp from "../TemperatureModal/OutlookCalendar";
import ToDoComp from "../TemperatureModal/Todo";
import NotificationsModalComp from "./NotificationsModal";
import Calendar from "react-calendar";

interface WeatherProps {
  base: string;
  cod: number;
  main: {
    temp: number;
    pressure: number;
    humidity: number;
  };
  weather: {
    description: string;
  }[];
}

type ValuePiece = Date | null;
type Value = ValuePiece | [ValuePiece, ValuePiece];

function FooterComponent() {
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

  const buttons = [
    { id: "wifi", label: "Wi-Fi", icon: WifiHigh },
    { id: "bluetooth", label: "Bluetooth", icon: Bluetooth },
    { id: "airplane", label: "Airplane Mode", icon: AirplaneInFlight },
    { id: "battery", label: "Battery Saver", icon: BatteryPlus },
    { id: "focus", label: "Focus Assist", icon: Moon },
    { id: "acessibility", label: "Acessibility", icon: PersonArmsSpread },
  ];

  const [showSeconds, setShowSeconds] = useState(false);
  const [, setTimeFormat] = useState("HH:mm");
  const [time, setTime] = useState("");
  const [date, setDate] = useState("");
  const [weather, setWeather] = useState<WeatherProps>();
  const [locationAccess, setLocationAccess] = useState(false);

  const {
    handleNext,
    handlePrevious,
    handleVolumeChange,
    togglePlayPause,
    volume,
    isPlaying,
    currentMusicIndex,
    musicas,
    musicNames,
    setIsPlaying,
  } = useMusic();

  const initialRecommendedWindows = [
    { src: notepad, title: "NotePad", subtitle: "2h atrás" },
    { src: spotify, title: "Spotify", subtitle: "17m atrás" },
    { src: folder, title: "Meus projetos", subtitle: "Ontem às 13h15" },
    { src: discord, title: "Discord", subtitle: "Ontem às 16h20" },
    { src: suun, title: "Clima", subtitle: "5h atrás" },
    { src: mail, title: "Email", subtitle: "12h atrás" },
  ];

  const [recommendedWindows] = useState(initialRecommendedWindows);

  const [searchText, setSearchText] = useState<string>("");
  const [filteredButtons, setFilteredButtons] = useState<Button[]>([]);

  const modalContents: ModalContent = {
    windows: (
      <WindowsComponent
        filteredButtons={filteredButtons}
        recommendedWindows={recommendedWindows}
      />
    ),
    search: (
      <div className="flex flex-col gap-4">
        <div className="flex justify-between">
          <h2 className="text-[17px] font-bold">Pinned</h2>
        </div>
        <span className="text-sm font-thin">results</span>
        <div className=" flex flex-col gap-3 max-h-[370px] overflow-y-auto ">
          <div className="flex flex-col gap-3 max-h-[370px] overflow-y-auto">
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

  const toggleSpeakerModal = () => {
    setShowSpeakerModal((prevShowSpeakerModal) => !prevShowSpeakerModal);
  };

  const [showClimaModal, setShowClimaModal] = useState(false);

  const toggleClimaModal = () => {
    setShowClimaModal((prevShowClimaModal) => !prevShowClimaModal);
  };

  const [showCalendarModal, setShowCalendarModal] = useState(false);

  const toggleCalendarModal = () => {
    setShowCalendarModal((prevShowCalendarModal) => !prevShowCalendarModal);
  };

  const [showNotificationModal, setShowNotificationModal] = useState(false);

  const toggleNotificationModal = () => {
    setShowNotificationModal(
      (prevShowNotificationModal) => !prevShowNotificationModal
    );
  };

  const [cityName, setCityName] = useState("");

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

  const getWeather = async (lat: number, lon: number) => {
    const apiKey = "0ec51c3697240d124db14a663d03e135";
    try {
      let res = await axios.get(
        "https://api.openweathermap.org/data/2.5/weather",
        {
          params: {
            lat: lat.toString(),
            lon: lon.toString(),
            appid: apiKey,
            lang: "pt",
            units: "metric",
          },
        }
      );
      const city = res.data.name;
      setCityName(city);
      setWeather(res.data);
    } catch (error) {
      console.error("Error fetching weather data: ", error);
    }
  };

  const [activeButtons, setActiveButtons] = useState<string[]>([
    "wifi",
    "battery",
  ]);

  const handleButtonClick = (buttonId: string) => {
    const newActiveButtons = activeButtons.includes(buttonId)
      ? activeButtons.filter((id) => id !== buttonId)
      : [...activeButtons, buttonId];
    setActiveButtons(newActiveButtons);
  };

  const isButtonActive = (buttonId: string) => activeButtons.includes(buttonId);

  const [gretting, setGreeting] = useState("");

  useEffect(() => {
    const checkHours = () => {
      const now = new Date();
      const hours = now.getHours();
      if (hours >= 6 && hours < 12) {
        setGreeting("Bom dia!");
      } else if (hours >= 12 && hours < 18) {
        setGreeting("Boa tarde!");
      } else {
        setGreeting("Boa noite!");
      }
    };
    checkHours();
  }, []);

  const [loading, setLoading] = useState(false);
  const [value, onChange] = useState<Value>(new Date());

  const toggleUpdate = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  };

  useEffect(() => {}, [loading]);

  return (
    <div className="fixed z-20 bottom-0 w-full">
      <footer className="flex bg-[#444444]/30 backdrop-blur-xl items-center h-[60px] w-full">
        <div
          onClick={toggleClimaModal}
          className="ml-4 cursor-pointer w-1/4 items-center h-[50px] flex gap-3"
        >
          <div>
            <Image src={suun} alt="clima" />
          </div>
          <div>
            {weather && weather.main && (
              <>
                <p className="text-xs font-bold">
                  {weather.main.temp.toFixed(1)}°C
                </p>
                <p className="text-sm">{weather.weather[0]?.description}</p>
              </>
            )}
          </div>
        </div>

        <div className="flex flex-1 items-center justify-center gap-7">
          <button onClick={() => toggleModalWithContent("windows")}>
            <Image height={24} width={24} src={windows} alt="windows" />
          </button>

          <button onClick={() => toggleModalWithContent("search")}>
            <Image height={24} width={24} src={search} alt="search" />
          </button>

          <a href="https://store.steampowered.com" target="_blank">
            <Image height={30} width={30} src={steam} alt="steam" />
          </a>

          <a target="_blank" href="https://discord.com">
            <Image src={discord} alt="discord" width={30} height={30} />
          </a>

          <Link href={"unlocked/projects"}>
            <Image height={24} width={24} src={explorer} alt="explorer" />
          </Link>

          <a target="_blank" href="https://pablo-me.vercel.app">
            <Image height={24} width={24} src={microsoft} alt="microsoft" />
          </a>
        </div>

        <div className="justify-end items-center w-1/4 mr-4 gap-2 flex">
          <div className="flex gap-1">
            <Image src={overflow} alt="overflow" />
            <Image src={wifi} alt="wifi" />
            <button onClick={toggleSpeakerModal}>
              <Image src={speaker} alt="speaker" />
            </button>
            <Image src={battery} alt="battery" className="block md:hidden"/>
          </div>

          <div onClick={toggleCalendarModal} className="text-end cursor-pointer text-xs" >
            <p className="cursor-pointer">{time}</p>
            <p>{date}</p>
          </div>

          <button className="p-2" onClick={toggleNotificationModal}>
            <BellRinging weight="fill" className="text-[#60cdff]" />
          </button>
        </div>
      </footer>

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
              <div className="h-[45px] w-full bg-[#1e1e1e]/70">
                <input
                  className="w-full px-[55px] h-full bg-transparent"
                  placeholder="type here to search"
                  onChange={handleSearch}
                />
              </div>
            </div>

            <div className="px-10">
              <div>{modalContents[modalContent]}</div>
            </div>

            <div className="h-16 border-t-[1.4px] flex-col flex justify-center border-white border-opacity-20 px-[70px] bg-black/10">
              <div className="flex gap-3 items-center ">
                <Image
                  src="https://github.com/pablokaliel.png"
                  className="rounded-full"
                  alt="foto de perfil do usuário"
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
        onClick={toggleCalendarModal}
        className={`fixed ${
          showCalendarModal ? "translate-y-0" : "translate-y-full"
        } transition-transform duration-300 inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none`}
      >
        <div className="relative mx-auto w-full h-full flex items-end justify-end px-5 pb-[70px]">
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-[#212121]/60 border-white border-[1.4px] border-opacity-20 flex flex-col gap-10 backdrop-blur-xl w-[400px] rounded shadow-lg"
          >
            <Calendar
              onChange={onChange}
              value={value}
              className="text-black min-w-full bg-[#212121]"
            />
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
              {buttons.map(({ id, label, icon }) => (
                <div className="text-center" key={id}>
                  <CustomButton
                    onClick={() => handleButtonClick(id)}
                    isActive={isButtonActive(id)}
                    icon={icon}
                    label={label}
                  />
                </div>
              ))}
            </div>

            <div className="px-5">
              <div className="flex gap-5">
                <Image src={speaker} alt="speaker" height={21} width={21} />
                <input
                  className="w-full"
                  type="range"
                  min={0}
                  max={1}
                  step={0.1}
                  onChange={handleVolumeChange}
                />
              </div>

              <div className="flex mt-10 gap-5 justify-between items-center">
                <button onClick={handlePrevious}>
                  <CaretLeft size={25} />
                </button>

                <MusicPlayer
                  handleNext={handleNext}
                  handlePrevious={handlePrevious}
                  handleVolumeChange={handleVolumeChange}
                  volume={volume}
                  currentMusicIndex={currentMusicIndex}
                  musicas={musicas}
                  isPlaying={isPlaying}
                  setIsPlaying={setIsPlaying}
                  togglePlayPause={togglePlayPause}
                />
                <button onClick={handleNext}>
                  <CaretRight size={25} />
                </button>
              </div>

              <div className="text-center mt-2">
                <p className="text-sm truncate w-full">
                  {musicNames[currentMusicIndex]}
                </p>
              </div>
            </div>

            <div className="h-16 border-t-[1.4px] items-center flex justify-between border-white border-opacity-20 px-5 bg-black/10">
              <div className="flex gap-1 items-center ">
                <Image src={battery} alt="battery" width={21} height={21} />
                <p className="text-sm font-normal">92%</p>
              </div>

              <div className="flex gap-2">
                <Image src={pencil} alt="pencil" width={18} height={18} />
                <Image src={config} alt="config" width={18} height={18} />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        onClick={toggleClimaModal}
        className={`fixed ${
          showClimaModal ? "translate-y-0" : "translate-y-full"
        } transition-transform duration-300 inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none`}
      >
        <div className="relative mx-auto w-full h-full flex items-end justify-start px-5 pb-[70px]">
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-[#212121]/60 border-white border-[1.4px] border-opacity-20 flex flex-col gap-10 backdrop-blur-xl rounded shadow-lg"
          >
            <div className="px-10 flex flex-col gap-8">
              <div className=" pt-6 gap-3 flex flex-col">
                <div className="flex items-center justify-between">
                  <div className="flex flex-col">
                    <span
                      className={`text-xl cursor-pointer ${ loading ? "text-xs" : "" }`} >
                        {loading ? "aguarde..." : date}
                    </span>
                    <span>{gretting}</span>
                  </div>

                  <div className="flex gap-3 items-center">
                    <button onClick={toggleUpdate}>
                      <ArrowClockwise />
                    </button>
                    <span
                      onClick={toggleSeconds}
                      className={`text-xl cursor-pointer ${  loading ? "text-xs" : "" }`} >
                      {loading ? "aguarde..." : time}
                    </span>
                    <Image
                      src="https://github.com/pablokaliel.png"
                      className="rounded-full"
                      alt="foto de perfil do usuário"
                      width={40}
                      height={40}
                    />
                  </div>
                </div>

                <label className=" bg-[#1e1e1e] py-2">
                  <input
                    className="bg-transparent outline-none w-full h-full "
                    placeholder="Search the web"
                  />
                </label>
              </div>

              <div className="max-h-[550px] w-full overflow-y-scroll">
                <div className="columns-2 gap-3 ">
                  <div className="w-[317px] mb-3 bg-gradient-to-b from-[#2D2C2C] from-0.8% to-[#413D2B] to-96.4% h-[211px]">
                    <div className="flex gap-2 items-center py-2 px-3">
                      <CloudSun size={24} color="#64cdff" weight="fill" />
                      <span>Weather</span>
                    </div>

                    <div className="px-6 gap-2 text-center">
                      <div>
                        {locationAccess && (
                          <div>
                            <p>{cityName}</p>
                          </div>
                        )}
                        {!locationAccess && (
                          <p>Não foi possível obter a localização.</p>
                        )}
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Image
                            src={suun}
                            alt="clima"
                            width={40}
                            height={40}
                          />
                          {weather && weather.main && (
                            <p
                              className={`text-3xl ${loading ? "text-sm" : ""}`}
                            >
                              {loading  ? "aguarde..."  : `${weather.main.temp.toFixed(1)}°C`}
                            </p>
                          )}
                        </div>

                        <div className="text-end ">
                          {weather && weather.main && (
                            <>
                              <p
                                className={`text-base ${ loading ? "text-base" : "" }`}
                              >
                                {loading ? "aguarde..." : `${weather.weather[0].description}`}
                              </p>

                              <p className="text-base font-normal flex gap-3">
                                <span>
                                  {loading  ? "aguarde..."  : `${weather.main.pressure}hPa`}
                                </span>
                                {loading ? "aguarde..." : `${weather.main.humidity.toFixed(1)}%`}
                              </p>
                            </>
                          )}
                        </div>
                      </div>
                    </div>

                    <div className="mt-8 text-center">
                      <a  className="text-purple-300"  href="https://www.climatempo.com.br/previsao-do-tempo" >
                        See full forecast
                      </a>
                    </div>
                  </div>
                  <WatchListComp />
                  <PhotosComp />
                  <TrafficComp />
                  <OutlookCalendarComp />
                  <ToDoComp />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        onClick={toggleNotificationModal}
        className={`fixed ${
          showNotificationModal ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none`}
      >
        <div className="relative mx-auto w-full h-full flex items-end justify-end px-5 pb-[70px]">
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-[#2c2c2c] border-white border-[1.4px] border-opacity-20 flex flex-col backdrop-blur-xl w-[400px] rounded shadow-lg"
          >
            <NotificationsModalComp />
            <div className="px-4 flex items-center justify-between py-4">
              <div className="flex items-center gap-2">
                <span>{date}</span>
                <CaretUp />
              </div>
              <span>{time}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FooterComponent;
