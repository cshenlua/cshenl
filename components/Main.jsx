import React from "react";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";
import Link from "next/link";

const Main = () => {
  return (
    <div id="main" className="w-full h-screen text-center">
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
        <div>
          <h1 className="py-4 text-gray-700">
            Hi, I'm <span className="text-[#2D919B]">Shen</span>
          </h1>
          <h1 className="py-2 text-gray-700">Ex Full-Stack Web Developer</h1>
          <p className="py-4 text-gray-600 max-w-[70%] m-auto">
            BSc in CS @ University of Minnesota with prior experience in
            Full-Stack Web Development and DataCenter Operations.
          </p>
          <div className="flex items-center justify-between max-w-[250px] m-auto py-4">
            <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-105 ease-in duration-500">
              <Link href="https://www.linkedin.com/in/chong-shen-lua-4848a1190/">
                <FaLinkedinIn size={20} />
              </Link>
            </div>
            <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-105 ease-in duration-500">
              <Link href="https://github.com/cshenlua">
                <FaGithub size={20} />
              </Link>
            </div>
            <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-105 ease-in duration-500">
              <Link href="mailto:shenlua1@gmail.com">
                <AiOutlineMail size={20} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
