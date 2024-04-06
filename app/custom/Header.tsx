import Link from 'next/link';
import React from 'react'
import collo from '@/public/collo1.jpg'
import Image from 'next/image';

function Header() {
  return (
    <div className="navbar">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm gap-3 dropdown-content mt-3 z-[1] p-2 shadow  rounded-box w-52"
          >
            <Link href="/">Hi</Link>
            <Link href="">About</Link>
            <Link href="">Hire Me</Link>
          </ul>
        </div>
        <a className="btn btn-outline text-xl">Colins Chege</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-6 gap-4 text-lg border rounded-full min-w-1/2">
          <Link href="" className="border px-3  py-1 rounded-full">
            Hi
          </Link>
          <Link href="" className="border px-3  py-1 rounded-full">
            About
          </Link>
          <Link href="" className="border px-3 py-1 rounded-full">
            Hire Me
          </Link>
        </ul>
      </div>
      <div className="navbar-end">
        {/* <a className="btn">Button</a> */}
        <div className="avatar online">
          <div className="w-12 rounded-full">
            <Image src={ collo} alt='' />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header