"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import suun from "../public/icons/Group 2.svg";
import wifi from "../public/icons/WiFi.svg";
import battery from "../public/icons/Battery.svg";
import speaker from "../public/icons/Speaker.svg";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
import axios from "axios";

export default function Home() {
  const [showPasswordPrompt, setShowPasswordPrompt] = useState(false);
  const [password, setPassword] = useState("");
  const [showSeconds, setShowSeconds] = useState(false);
  const [timeFormat, setTimeFormat] = useState("HH:mm");
  const [time, setTime] = useState("");
  const [date, setDate] = useState("");
  const [weather, setWeather] = useState<any>(null);
  const [locationAccess, setLocationAccess] = useState(false);
  const [isPasswordValid, setIsPasswordValid] = useState(false);

  useEffect(() => {
    function handleKeyPress(event: KeyboardEvent) {
      if (event.key === "Enter" || event.key === " ") {
        setShowPasswordPrompt(true);
      } else if (event.key === "Escape") {
        setShowPasswordPrompt(false);
      }
    }
    window.addEventListener("keydown", handleKeyPress);

    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, []);

  useEffect(() => {
    const clockInterval = setInterval(() => {
      const currentDate = new Date();
      setTime(format(currentDate, showSeconds ? "HH:mm:ss" : "HH:mm"));
      setDate(format(currentDate, "EEEE, d MMMM", { locale: ptBR }));
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

  const getWeather = async (lat: number, lon: number) => {
    const apiKey = '0ec51c3697240d124db14a663d03e135';
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
  

  const handlePasswordInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const enteredPassword = e.target.value;
    setPassword(enteredPassword);

    if (enteredPassword.length > 6) {
      setIsPasswordValid(true);
    } else {
      setIsPasswordValid(false);
    }
  };

  const handlePasswordKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && isPasswordValid) {
      setShowPasswordPrompt(false);
      // Redirecionar o usuário para /unlocked
      window.location.href = "/unlocked";
    }
  };

  return (
    <main className="min-h-screen w-full">
      {!showPasswordPrompt ? (
        <div className="flex flex-col w-full h-screen items-center justify-between">
          <div className="mt-44 h-full flex flex-col items-center">
            <div
              onClick={toggleSeconds}
              className="text-8xl bold cursor-pointer"
            >
              {format(new Date(), timeFormat)}
            </div>
            <span className="text-xl">{date}</span>
          </div>
          {locationAccess ? (
            <div className="mb-24 flex gap-3 p-2 rounded-md bg-black/70">
              <Image src={suun} alt="sol" />
              {weather && weather.main ? (
                 <span>{weather.main.temp.toFixed(1)}° Celsius</span>
              ) : (
                <span>Carregando...</span>
              )}
            </div>
          ) : (
            <span>Confirme o acesso para poder ver a temperatura</span>
          )}
          <div className="flex justify-end mr-4 gap-4 w-full">
            <div className="hover:scale-125 transition-all">
              <Image src={wifi} alt="" />
            </div>
            <div className="hover:scale-125 transition-all">
              <Image src={speaker} alt="" />
            </div>
            <div className="hover:scale-125 transition-all">
              <Image src={battery} alt="" />
            </div>
          </div>
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center h-screen">
          <div className="mt-48 gap-4 flex flex-col h-full items-center ">
            <Image
              className="rounded-full border"
              src="https://github.com/pablokaliel.png"
              alt="s"
              width={150}
              height={150}
            />
            <h1>Usuário</h1>
            <div className="flex flex-col items-center">
              <input
                className="bg-[#1E1E1E]/70 rounded h-8 w-full focus:border border-blue-400"
                type="password"
                value={password}
                onChange={handlePasswordInput}
                onKeyDown={handlePasswordKeyDown}
              />
              <span className="text-xs mt-4">
                digite algo maior que 6 caracteres
              </span>
            </div>
          </div>
          <div className="flex mb-0 justify-end mr-4 gap-4 w-full">
            <div className="hover:scale-125 transition-all">
              <Image src={wifi} alt="" />
            </div>
            <div className="hover:scale-125 transition-all">
              <Image src={speaker} alt="" />
            </div>
            <div className="hover:scale-125 transition-all">
              <Image src={battery} alt="" />
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
