'use client'

import {  ChangeEvent } from 'react';
import dynamic from 'next/dynamic';

const DynamicReactPlayer = dynamic(() => import('react-player'), {
    ssr: false,
  });
  
  export interface MusicPlayerProps {
    handleNext: () => void;
    togglePlayPause: () => void;
    handlePrevious: () => void;
    handleVolumeChange: (e: ChangeEvent<HTMLInputElement>) => void;
    volume: number;
    currentMusicIndex: number;
    musicas: string[]; // Adicionando a propriedade musicas ao MusicPlayerProps
    isPlaying: boolean; // Recebendo o estado de reprodução como propriedade
    setIsPlaying: React.Dispatch<React.SetStateAction<boolean>>;
  }
  
  export default function MusicPlayer({
    handleNext,
    handlePrevious,
    handleVolumeChange,
    volume,
    currentMusicIndex,
    musicas,
    isPlaying,
    togglePlayPause,
    setIsPlaying,
  }: MusicPlayerProps) {
    const handleEnded = () => {
        // Chamando a função para passar para a próxima música ao terminar a reprodução
        handleNext();
      };
    
      const handlePlay = () => {
        setIsPlaying(true); // Garantir que está tocando quando for para a próxima música
      };

  
    return (
      <div className='hidden'>
        <DynamicReactPlayer
          url={musicas[currentMusicIndex]}
          controls
          playing={isPlaying}
          volume={volume}
          width="100%"
          height="50px"
          onEnded={handleEnded}
        onPlay={handlePlay}
        />
        <div>
          <button onClick={handlePrevious}>Anterior</button>
          <button onClick={togglePlayPause}>
            {isPlaying ? 'Pause' : 'Play'}
          </button>
          <button onClick={handleNext}>Próxima</button>
          <input
            type="range"
            min={0}
            max={1}
            step={0.1}
            value={volume}
            onChange={handleVolumeChange}
          />
        </div>
      </div>
    );
  }