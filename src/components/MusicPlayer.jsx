import { IoPlaySkipBackSharp } from "react-icons/io5";
import { FaPlayCircle } from "react-icons/fa";
import { IoPlaySkipForward } from "react-icons/io5";
import { FaRegPauseCircle } from "react-icons/fa";

import React, { useRef, useEffect, useState } from "react";

const MusicPlayer = ({ currentSong, setCurrentSong, songs, isPlaying, setIsPlaying, audioRef }) => {
  const [progress, setProgress] = useState(0);
  const isInitialMount = useRef(true);
  const prevSongId = useRef(null);


//  next and previous action
const handleNext = () => {
  const currentIndex = songs.findIndex(
    (song) => song.id === currentSong.id
  );

  const nextIndex =
    (currentIndex + 1) % songs.length;

  setCurrentSong(songs[nextIndex]);
};

const handlePrevious = () => {
  const currentIndex = songs.findIndex(
    (song) => song.id === currentSong.id
  );

  const prevIndex =
    currentIndex === 0
      ? songs.length - 1
      : currentIndex - 1;

  setCurrentSong(songs[prevIndex]);
};




  useEffect(() => {
    if (currentSong) {
      // Only update the audio source if the song actually changed
      if (prevSongId.current !== currentSong.id) {
        audioRef.current.src = currentSong.audio;
        prevSongId.current = currentSong.id;
        
        // Don't auto-play on initial mount, only play when user clicks a song
        if (!isInitialMount.current) {
          audioRef.current.play();
        }
      }
      isInitialMount.current = false;
    }
  }, [currentSong, audioRef]);

  useEffect(() => {
    const audio = audioRef.current;

    const updateProgress = () => {
      const currentProgress = (audio.currentTime / audio.duration) * 100;
      setProgress(currentProgress || 0);
    };

    const handlePlay = () => {
      setIsPlaying(true);
    };

    const handlePause = () => {
      setIsPlaying(false);
    };

    audio.addEventListener("timeupdate", updateProgress);
    audio.addEventListener("play", handlePlay);
    audio.addEventListener("pause", handlePause);

    // Sync the UI state with the actual audio playback state when component mounts/comes back
    if (!audio.paused) {
      setIsPlaying(true);
    } else {
      setIsPlaying(false);
    }

    return () => {
      audio.removeEventListener("timeupdate", updateProgress);
      audio.removeEventListener("play", handlePlay);
      audio.removeEventListener("pause", handlePause);
      // Do NOT pause the audio on unmount - let it continue in background
    };
  }, [setIsPlaying]);

  // Effect to ensure audio keeps playing when component comes back into focus
  useEffect(() => {
    const audio = audioRef.current;
    
    // When MusicPlayer component mounts (comes back), check if audio should be playing
    const checkAndResume = () => {
      if (audio.src && prevSongId.current === currentSong.id) {
        // Same song is loaded, ensure it's playing
        if (audio.paused) {
          audio.play().catch(err => console.log("Resume failed:", err));
        }
      }
    };

    checkAndResume();

    return () => {
      // Do nothing on unmount to keep audio playing in background
    };
  }, [currentSong.id]);
  
  const handlePlayPause = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }

    setIsPlaying(!isPlaying);
  };
  
  return (
    <div className="w-full z-30 md:w-[50%] md:h-full flex gap-8 flex-col items-center p-10 overflow-y-auto overflow-x-hidden">
      {/* Song image */}
      <div className="song w-80 h-80 md:h-100 md:w-65 overflow-hidden rounded-3xl object-fill relative">
        <img className="w-full h-full" src={currentSong.image} alt="" />
        <div className="overlay hidden absolute top-0 w-full h-full  opacity-[0.4]"></div>
      </div>

      {/* Song Title */}
      <div className="text-center flex flex-col gap-3">
        <h1 className="text-4xl">{currentSong.title}</h1>
        <h3 className="text-xl text-gray-600">{currentSong.artist}</h3>
      </div>

      {/* Functions */}
      <div className="w-full flex flex-col items-center gap-4">
        <input
          type="range"
          min="0"
          max="100"
          value={progress}
          onChange={(e) => {
            const audio = audioRef.current;

            const newTime = (e.target.value / 100) * audio.duration;

            audio.currentTime = newTime;
            setProgress(e.target.value);
          }}
          className="w-[90%] md:w-[70%] box-border"
        />
        <div className="flex items-center gap-8 justify-center mt-2">
          <IoPlaySkipBackSharp onClick={handlePrevious} className="w-10 h-10 hover:text-gray-400 cursor-pointer" />
          {isPlaying ? (
            <FaRegPauseCircle
              onClick={handlePlayPause}
              className="w-10 h-10 hover:text-gray-400 cursor-pointer"
            />
          ) : (
            <FaPlayCircle
              onClick={handlePlayPause}
              className="w-10 h-10 hover:text-gray-400 cursor-pointer"
            />
          )}{" "}
          <IoPlaySkipForward onClick={handleNext} className="w-10 h-10  hover:text-gray-400 cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

export default MusicPlayer;
