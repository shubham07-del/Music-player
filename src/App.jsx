import React, { useState, useRef } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Search from "./pages/Search";
import Playlist from "./pages/Playlist";
import Liked from "./pages/Liked";
import Sidebar from "./components/Sidebar";
import { songs } from "./songs";

const App = () => {
  const [currentSong, setCurrentSong] = useState(songs[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [toggle, setToggle] = useState(false);
  const audioRef = useRef(new Audio());

  return (
    <>
      <Sidebar toggle={toggle} setToggle={setToggle} />
      {/* Overlay: visible on mobile when sidebar is open, closes sidebar on click */}
      {toggle && (
        <div
          onClick={() => setToggle(false)}
          className="fixed inset-0 bg-black/50 z-30 md:hidden"
        />
      )}
      <Routes>
        <Route
          path="/"
          element={
            <Home
              currentSong={currentSong}
              setCurrentSong={setCurrentSong}
              isPlaying={isPlaying}
              setIsPlaying={setIsPlaying}
              audioRef={audioRef}
            />
          }
        />
        <Route path="/search" element={<Search />} />
        <Route path="/playlist" element={<Playlist />} />
        <Route path="/liked" element={<Liked />} />
      </Routes>
    </>
  );
};

export default App;
