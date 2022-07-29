import React from "react";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineMail } from "react-icons/ai";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { HiOutlineChevronDoubleUp } from "react-icons/hi";

const Contact = () => {
  return (
    <div id="contact" className="w-full lg:h-screen">
      <div className="max-w-[1240px] m-auto px-2 py-16 w-full">
        <p className="font-bold text-xl tracking-widest uppercase text-[#648DE5]">
          Contact
        </p>
        <h2 className="py-4">Get In Touch</h2>
        <div className="grid gap-8 lg:grid-cols-5">
          <div className="w-full h-full col-span-3 p-4 shadow-xl lg:col-span-2 shadow-gray-400 rounded-xl">
            <div className="h-full lg:p-4">
              <div>
                <Image
                  src="/../public/assets/contact.jpg"
                  alt="contact"
                  width="640"
                  height="427"
                  className="duration-300 ease-in rounded-xl hover:scale-105"
                />
              </div>
              <div>
                <h2 className="py-2">Chris McConnell</h2>
                <p>Front-End Developer</p>
              </div>
              <div>
                <p className="pt-8 uppercase">Connect With Me</p>
                <div className="flex items-center justify-center py-4 mt-5">
                  <Link href="https://www.linkedin.com/in/cmcconnell89/">
                    <div className="p-4 mx-5 duration-500 ease-in rounded-full shadow-lg cursor-pointer shadow-gray-500 selection:hover:scale-105">
                      <FaLinkedinIn size={20} className="text-[#648DE5]" />
                    </div>
                  </Link>
                  <Link href="https://github.com/chrismcconn2789/">
                    <div className="p-4 mx-5 duration-500 ease-in rounded-full shadow-lg cursor-pointer shadow-gray-500 hover:scale-105">
                      <FaGithub size={20} className="text-[#648DE5]" />
                    </div>
                  </Link>
                  <Link href="mailto:chrismc2789@gmail.com?subject=Get%20In%20Touch">
                    <div className="p-4 mx-5 duration-500 ease-in rounded-full shadow-lg cursor-pointer shadow-gray-500 hover:scale-105">
                      <AiOutlineMail size={20} className="text-[#648DE5]" />
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full h-auto col-span-3 shadow-xl shadow-gray-400 rounded-xl lg:p-4">
            <div className="p-4">
              <form
                id="form"
                enctype="text/plain"
                action="mailto:chrismc2789@gmail.com?subject=Get%20In%20Touch"
                method="POST"
              >
                <div className="flex flex-col py-2">
                  <label className="py-2 text-sm uppercase">Name</label>
                  <input
                    id="name"
                    name="name"
                    className="flex p-3 border-2 border-gray-300 rounded-lg"
                    type="text"
                  />
                </div>
                <div className="flex flex-col py-2">
                  <label className="py-2 text-sm uppercase">Title</label>
                  <input
                    id="title"
                    name="title"
                    className="flex p-3 border-2 border-gray-300 rounded-lg"
                    type="text"
                  />
                </div>
                <div className="flex flex-col py-2">
                  <label className="py-2 text-sm uppercase">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    className="p-3 border-2 border-gray-300 rounded-lg"
                    rows="10"
                  ></textarea>
                </div>
                <div className="flex">
                  <input
                    type="submit"
                    value="Send Message"
                    className="flex flex-col w-1/2 mx-2 p-4 mt-4 shadow-xl shadow-gray-400 rounded-xl uppercase bg-gradient-to-r from-[#648DE5] to-[#386DDE] text-white cursor-pointer hover:opacity-60"
                  />
                  <input
                    type="reset"
                    value="Reset Form"
                    className=" flex flex-col w-1/2 mx-2 p-4 mt-4 shadow-xl shadow-gray-400 rounded-xl uppercase bg-gradient-to-r from-[#e56479] to-[#de3853] text-white cursor-pointer hover:opacity-60"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="flex justify-center py-12">
          <Link href="/">
            <div className="p-4 mx-5 duration-500 ease-in rounded-full shadow-lg cursor-pointer shadow-gray-500 selection:hover:scale-105">
              <HiOutlineChevronDoubleUp className="text-[#648DE5]" size={30} />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Contact;
