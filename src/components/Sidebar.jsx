import React from 'react'
import { Link } from "react-router-dom";
import { MdHome } from "react-icons/md";
import { IoSearch } from "react-icons/io5";
import { IoIosListBox } from "react-icons/io";
import { FcLike } from "react-icons/fc";
import { MdOutlineMenu } from "react-icons/md";

const Sidebar = ({ toggle, setToggle }) => {

  const linkClass =
    'flex items-center gap-4 relative px-3 py-2 rounded transition-all duration-300';

  return (
    <>
      {/* Hamburger (Mobile only) */}
      <MdOutlineMenu
        onClick={() => setToggle(!toggle)}
        className='md:hidden w-7 h-7 fixed top-4 left-2 z-50 cursor-pointer text-white'
      />
      <style>{`
  .nav-link {
    position: relative;
    overflow: hidden;
  }

  .nav-link::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;

    background: linear-gradient(
      90deg,
      rgba(34, 197, 94, 0) 0%,
      rgba(34, 197, 94, 0.4) 100%
    );

    transition: left 0.4s ease;
    z-index: 0;
    pointer-events: none;
  }

  .nav-link:hover::before {
    left: 0;
  }

  .nav-link > * {
    position: relative;
    z-index: 1;
  }
`}</style>

      {/* Sidebar */}
      <div
        className={`
          bg-black text-white
          fixed top-0 left-0 z-40
          h-screen w-50 p-4 pt-16
          flex flex-col gap-4
          transition-transform duration-300

          ${toggle ? "translate-x-0" : "-translate-x-full"}

          md:translate-x-0
          md:w-40
          md:border-r
          md:border-gray-600
        `}
      >
        <Link className={`${linkClass} nav-link`} to={'/'} onClick={() => setToggle(false)}>
  <MdHome className='w-6 h-6' />
  Home
</Link>

<Link className={`${linkClass} nav-link`} to={'/search'} onClick={() => setToggle(false)}>
  <IoSearch className='w-6 h-6' />
  Search
</Link>

<Link className={`${linkClass} nav-link`} to={'/playlist'} onClick={() => setToggle(false)}>
  <IoIosListBox className='w-6 h-6' />
  Playlist
</Link>

<Link className={`${linkClass} nav-link`} to={'/liked'} onClick={() => setToggle(false)}>
  <FcLike className='w-6 h-6' />
  Liked
</Link>
      </div>
    </>
  )
}

export default Sidebar;