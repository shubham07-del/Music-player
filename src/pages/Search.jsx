// import React, { useState, useMemo } from 'react'
// import { IoSearch } from "react-icons/io5";
// import { songs } from '../songs';

// const Search = () => {
//   const [searchQuery, setSearchQuery] = useState('');

//   const searchResults = useMemo(() => {
//     if (!searchQuery.trim()) return songs;

//     return songs.filter(song =>
//       song.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
//       song.artist.toLowerCase().includes(searchQuery.toLowerCase())
//     );
//   }, [searchQuery]);

//   return (
//     <div className='w-full md:w-[calc(100%-10rem)] min-h-screen bg-black text-white md:ml-40 p-6 md:p-10 overflow-x-hidden'>
//       {/* Header */}
//       <div className='mb-8'>
//         <h1 className='text-4xl font-bold mb-6'>Search Songs</h1>

//         {/* Search Input */}
//         <div className='relative max-w-2xl'>
//           <div className='absolute left-4 top-1/2 transform -translate-y-1/2'>
//             <IoSearch className='w-6 h-6 text-gray-400' />
//           </div>
//           <input
//             type='text'
//             placeholder='Search by song title or artist...'
//             value={searchQuery}
//             onChange={(e) => setSearchQuery(e.target.value)}
//             className='w-full pl-14 pr-6 py-3 rounded-lg bg-gray-900 text-white placeholder-gray-500 border border-gray-700 focus:border-green-500 focus:outline-none transition-colors duration-300'
//           />
//         </div>
//       </div>

//       {/* Results Count */}
//       <div className='mb-6'>
//         <p className='text-gray-400 text-lg'>
//           {searchResults.length === 0
//             ? 'No songs found'
//             : `Found ${searchResults.length} ${searchResults.length === 1 ? 'song' : 'songs'}`
//           }
//         </p>
//       </div>

//       {/* Search Results Grid */}
//       <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
//         {searchResults.length > 0 ? (
//           searchResults.map((song) => (
//             <div
//               key={song.id}
//               className='group bg-gray-900 rounded-xl overflow-hidden hover:bg-gray-800 transition-all duration-300 transform hover:scale-105 cursor-pointer shadow-lg hover:shadow-green-500/20'
//             >
//               {/* Song Image */}
//               <div className='relative overflow-hidden h-48 md:h-56'>
//                 <img
//                   src={song.image}
//                   alt={song.title}
//                   className='w-full h-full object-cover group-hover:scale-110 transition-transform duration-300'
//                 />
//                 <div className='absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-300'></div>
//               </div>

//               {/* Song Info */}
//               <div className='p-4'>
//                 <h3 className='text-lg font-semibold text-white truncate mb-1 group-hover:text-green-400 transition-colors duration-300'>
//                   {song.title}
//                 </h3>
//                 <p className='text-sm text-gray-400 truncate'>
//                   {song.artist}
//                 </p>
//               </div>
//             </div>
//           ))
//         ) : (
//           <div className='col-span-1 md:col-span-2 lg:col-span-3 py-12 text-center'>
//             <div className='text-6xl mb-4 opacity-50'>🎵</div>
//             <p className='text-2xl text-gray-400 mb-2'>No songs match your search</p>
//             <p className='text-gray-500'>Try searching with different keywords</p>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Search;

import React, { useState } from "react";
import { BiError } from "react-icons/bi";
import { IoSearch } from "react-icons/io5";

const Search = () => {
  const [searchTitle, setSearchTitle] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();

    setSearchTitle("");
  };

  return (
    <div className="search-page relative w-full px-4 md:w-[calc(100%-10rem)] min-h-screen bg-black text-white md:ml-40  md:h-screen md:overflow-auto overflow-x-hidden">
      <div className="mt-16 md:mt-5">
        <h1 className="text-2xl md:text-4xl">Search songs..</h1>
        <form
          onSubmit={submitHandler}
          className="mt-2 py-2 w-full h-14 flex md:items-center justify-start md:mt-5"
        >
          <input
            value={searchTitle}
            onChange={(e) => setSearchTitle(e.target.value)}
            type="text"
            placeholder="Enter song name"
            className="search-input text-xl border px-3 py-2 rounded-full w-[85%] md:w-[45%] mr-2"
          />
          <button className="w-[15%] text-2xl border rounded-full flex h-full items-center justify-center md:w-18 md:h-11">
            <IoSearch />
          </button>
        </form>
      </div>

      {/* Search cards */}

      <div className="w-full px-2 py-4 h-fit overflow-y-auto flex md:flex-wrap gap-3 flex-col md:flex-row">
        <div className="search-card w-full md:w-100 px-2 flex gap-4 items-center h-22 py-1 border opacity-[0.85] rounded-xl">
          <div className="w-20 h-20 object-fill overflow-hidden rounded-full">
            <img
              className="w-full h-full opacity-[1]"
              src="https://images.unsplash.com/photo-1517230878791-4d28214057c2?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
            />
          </div>
          <div>
            <h1 className="text-2xl font-medium">Song</h1>
            <h3 className="text-gray-300">Artist name</h3>
          </div>
        </div>

        <div className="w-full h-40 bg-black border rounded-xl text-center flex items-center justify-center">
            <h1 className="text-4xl font-medium">Not completed yet</h1>
        </div>
      </div>
    </div>
  );
};

export default Search;
