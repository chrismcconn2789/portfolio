import React from "react";
import Link from "next/link";
import { AiOutlineMail } from "react-icons/ai";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

const Main = () => {
  return (
    <div id="home" className="w-full h-screen text-center">
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
        <div>
          <h1 className="py-4 text-gray-700">
            Hi, I&apos;m <span className="text-[#648DE5]">Chris</span>
          </h1>
          <h1 className="py-0 text-gray-700">A Front-End Web Developer</h1>
          <p className="py-4 text-gray-600 max-w-[70%] m-auto">
            I&apos;m a front-end web developer specialising in building
            exceptional digital experiences. Currently, I&apos;m focused on
            building responsive front-end web applications whilst learning
            back-end technologies
          </p>
          <div className="flex items-center justify-between max-w-[330px] m-auto py-4">
            <Link href="https://www.linkedin.com/in/cmcconnell89/">
              <div className="p-6 duration-500 ease-in rounded-full shadow-lg cursor-pointer shadow-gray-500 selection:hover:scale-105">
                <FaLinkedinIn size={25} className="text-[#648DE5]" />
              </div>
            </Link>
            <Link href="https://github.com/chrismcconn2789/">
              <div className="p-6 duration-500 ease-in rounded-full shadow-lg cursor-pointer shadow-gray-500 hover:scale-105">
                <FaGithub size={25} className="text-[#648DE5]" />
              </div>
            </Link>
            <Link href="mailto:chrismc2789@gmail.com?subject=Get%20In%20Touch">
              <div className="p-6 duration-500 ease-in rounded-full shadow-lg cursor-pointer shadow-gray-500 hover:scale-105">
                <AiOutlineMail size={25} className="text-[#648DE5]" />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
