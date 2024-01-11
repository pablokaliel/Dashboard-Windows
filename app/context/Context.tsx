"use client";

import React, { createContext, useContext, useEffect, useState } from "react";

interface MusicContextProps {
  handleNext: () => void;
  handlePrevious: () => void;
  handleVolumeChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  togglePlayPause: () => void;
  volume: number;
  currentMusicIndex: number;
  isPlaying: boolean;
  musicas: string[];
  setIsPlaying: React.Dispatch<React.SetStateAction<boolean>>;
  musicNames: string[];
  playMusic: (index: number) => void;
}

const MusicContext = createContext<MusicContextProps | undefined>(undefined);

export const useMusic = () => {
  const context = useContext(MusicContext);
  if (!context) {
    throw new Error("useMusic must be used within a MusicProvider");
  }
  return context;
};

export function MusicProvider({ children }: { children: React.ReactNode }) {
  const [currentMusicIndex, setCurrentMusicIndex] = useState(0);
  const [volume, setVolume] = useState(0.5);
  const [isPlaying, setIsPlaying] = useState(true);
  const [musicNames] = useState([
    "Clocks Instrumental-João Torres",
    "My Love All-Mitski",
    "Chora Viola-Jorge e Matheus",
    "Clocks-ColdPlay",
    "Outra Vida-João Torres",
    "Paradise-João Torres",
    "The Scientist-João Torres",
    "Those Eyes-João Torres",
    "Leão-João Torres",
    "Until I Found You-Stephen Sanchez",
    "Shameless-Camila Cabello ",
    "Say Yes To Heaven-Lana Del Rey",
    "Rap do Chopper-7MZ",
    "Rap do Luffy-7MZ",
    "Rap do Law-7MZ",
    "Rap do Crocodile-7MZ",
    "Rap do Usopp-7MZ",
    "Rap do Kratos e Atreus-7MZ",
  ]);

  const musicas = [
    "/Clocks-instrumental.mp3",
    "/myloveall.mp3",
    "/choraviola.mp3",
    "/Clocks.mp3",
    "/OutraVida.mp3",
    "/Paradise.mp3",
    "/TheScientist.mp3",
    "/ThoseEyes.mp3",
    "/leao.mp3",
    "/FoundYou.mp3",
    "/shameless.mp3",
    "/YesToHeaven.mp3",
    "/RapChopper.mp3",
    "/RapLuffy.mp3",
    "/RapLaw.mp3",
    "/RapCrocodile.mp3",
    "/RapUsopp.mp3",
    "/RapKratos.mp3",
  ];
  const playMusic = (index: number) => {
    setCurrentMusicIndex(index);
    setIsPlaying(true);
  };

  const handleNext = () => {
    setCurrentMusicIndex((prevIndex) => (prevIndex + 1) % musicas.length);
  };

  const handlePrevious = () => {
    setCurrentMusicIndex((prevIndex) =>
      prevIndex === 0 ? musicas.length - 1 : prevIndex - 1
    );
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setVolume(parseFloat(e.target.value));
  };

  const togglePlayPause = () => {
    setIsPlaying((prevIsPlaying) => !prevIsPlaying);
  };

  useEffect(() => {
    setIsPlaying(true);
  }, []);

  const contextValue: MusicContextProps = {
    handleNext,
    handlePrevious,
    handleVolumeChange,
    togglePlayPause,
    volume,
    isPlaying,
    musicas,
    currentMusicIndex,
    setIsPlaying,
    musicNames,
    playMusic,
  };

  return (
    <MusicContext.Provider value={contextValue}>
      {children}
    </MusicContext.Provider>
  );
}
