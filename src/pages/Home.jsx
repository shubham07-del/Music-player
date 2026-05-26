import React from "react";
import MusicPlayer from "../components/MusicPlayer";
import { songs } from "../songs";
const Home = ({ currentSong, setCurrentSong, isPlaying, setIsPlaying, audioRef }) => {
  return (
    <div className="background relative w-full md:w-[calc(100%-10rem)] min-h-screen bg-black text-white md:ml-40 flex flex-col md:flex-row md:h-screen md:overflow-auto overflow-x-hidden">
      <div className="absolute top-0 w-full h-full bg-black opacity-[0.6]"></div>
      {/* Left div */}
      <div className="w-full md:w-[50%] md:h-full flex gap-8 flex-col items-center p-10 overflow-y-auto">
        <h1 className="text-2xl font-medium text-gray-400">Now Playing</h1>

        <MusicPlayer
          currentSong={currentSong}
          setCurrentSong={setCurrentSong}
          songs={songs}
          isPlaying={isPlaying}
          setIsPlaying={setIsPlaying}
          audioRef={audioRef}
        />
      </div>

      {/* Right div */}
      <div className="bigcard z-50 w-full md:w-[50%] md:p-10 items-center h-full flex gap-4 flex-col overflow-auto">
        {songs.map(function (song) {
          return (
            <div
              key={song.id}
              onClick={() => setCurrentSong(song)}
              className="card shrink-0 w-[84%] h-20 border text-white flex p-2 cursor-pointer rounded-2xl overflow-auto hover:scale-[1.1] hover:bg-gray-900"
            >
              <div className="w-16 h-16 bg-black rounded-full object-fill overflow-hidden">
                <img className="w-full h-full" src={song.image} alt="" />
              </div>
              <div className="ml-4">
                <h1 className="text-2xl">{song.title}</h1>
                <h3 className="text-gray-400">{song.artist}</h3>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
