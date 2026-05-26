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





import React from 'react'
import { BiError } from "react-icons/bi";

const Search = () => {
  return (
    <div className='w-full md:w-[calc(100%-10rem)] min-h-screen bg-black text-white md:ml-40 flex items-center justify-center md:h-screen md:overflow-auto overflow-x-hidden'>
          <div className='flex items-center flex-col'>
            <BiError className='w-30 h-30' />
          <h1 className='text-3xl font-medium'>😅 I am working on it</h1>
          </div>
        </div>
  )
}

export default Search