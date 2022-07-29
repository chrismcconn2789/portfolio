import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from "react-icons/ai";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 90) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };
    window.addEventListener("scroll", handleShadow);
  }, []);

  return (
    <div
      style={{ backgroundColor: "#ecf0f3" }}
      className={
        shadow
          ? "fixed w-full h-20 shadow-xl z-[100]"
          : "fixed w-full h-20 z-[100]"
      }
    >
      <div className="flex items-center justify-between w-full h-full px-2 2xl:px-16">
        <Link href="/">
          <div className="flex flex-row mt-0">
            <div className="">
              <Image
                src="https://raw.githubusercontent.com/chrismcconn2789/portfolio/main/public/assets/profile.png"
                alt="profile"
                width="60"
                height="60"
              />
            </div>
            <h1 className="mx-2 mt-3 text-2xl tracking-wide text-gray-700 align-middle cursor-pointer lg:text-4xl lg:pt-0 lg:mt-2">
              <span className="text-[#648DE5]">Chris McConnell</span>
            </h1>
          </div>
        </Link>
        <div>
          <ul style={{ color: "#1f2937" }} className="hidden md:flex">
            <Link href="/">
              <li className="ml-10 text-sm uppercase hover:border-b">Home</li>
            </Link>
            <Link href="/#about">
              <li className="ml-10 text-sm uppercase hover:border-b">About</li>
            </Link>
            <Link href="/#skills">
              <li className="ml-10 text-sm uppercase hover:border-b">Skills</li>
            </Link>
            <Link href="/#projects">
              <li className="ml-10 text-sm uppercase hover:border-b">
                Projects
              </li>
            </Link>
            <Link href="/#contact">
              <li className="ml-10 text-sm uppercase hover:border-b">
                Contact
              </li>
            </Link>
          </ul>
          <div onClick={handleNav} className="md:hidden">
            <AiOutlineMenu size={25} />
          </div>
        </div>
      </div>

      <div
        className={
          nav ? "md:hidden fixed top-0 left-0 w-full h-screen bg-black/70" : ""
        }
      >
        <div
          className={
            nav
              ? "fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500"
              : "fixed left-[-100%] top-0 p-10 ease-in duration-500"
          }
        >
          <div className="flex items-center justify-between w-full">
            <div className="-ml-3 -mr-5">
              <Image
                src="https://raw.githubusercontent.com/chrismcconn2789/portfolio/main/public/assets/profile.png"
                alt="profile"
                width="50"
                height="50"
              />
            </div>
            <h1 className="-mt-2 text-2xl tracking-wide text-gray-700 lg:text-4xl">
              <span className="text-[#648DE5]">Chris McConnell</span>
            </h1>
            <div
              onClick={handleNav}
              className="p-3 rounded-full shadow-lg cursor-pointer shadow-gray-400"
            >
              <AiOutlineClose size={25} />
            </div>
          </div>
          <div className="my-4 border-b border-gray-300">
            <p className="w-[85%] md:w-[90%] py-4">Front-End Developer</p>
          </div>
          <div className="flex flex-col py-4">
            <ul className="uppercase">
              <Link href="/">
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  Home
                </li>
              </Link>
              <Link href="/#about">
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  About
                </li>
              </Link>
              <Link href="/#skills">
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  Skills
                </li>
              </Link>
              <Link href="/#projects">
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  Projects
                </li>
              </Link>
              <Link href="/#contact">
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  Contact
                </li>
              </Link>
            </ul>
            <div className="pt-40">
              <p className="uppercase tracking-widest text-[#648DE5] mb-5">
                Connect With Me
              </p>
              <div className="flex items-center justify-center my-4 w-full sm:w-[80%]">
                <Link href="https://www.linkedin.com/in/cmcconnell89/">
                  <div className="p-4 mx-5 duration-500 ease-in rounded-full shadow-lg cursor-pointer shadow-gray-400 hover:scale-105">
                    <FaLinkedinIn />
                  </div>
                </Link>
                <Link href="https://github.com/chrismcconn2789/">
                  <div className="p-4 mx-5 duration-500 ease-in rounded-full shadow-lg cursor-pointer shadow-gray-400 hover:scale-105">
                    <FaGithub />
                  </div>
                </Link>
                <Link href="mailto:chrismc2789@gmail.com?subject=Get%20In%20Touch">
                  <div className="p-4 mx-5 duration-500 ease-in rounded-full shadow-lg cursor-pointer shadow-gray-400 hover:scale-105">
                    <AiOutlineMail />
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
