import Link from "next/link";
import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa";

const Main = () => {
  return (
    <div id="home" className="w-full h-screen text-center">
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
        <div>
          <p className="uppercase text-sm tracking-widest text-gray-600">
            LET&#39;S BUILD SOMETHING TOGETHER
          </p>
          <h1 className="py-4 text-gray-700">
            Hi, I&#39;m <span className="text-[#5651e5]"> Pandit</span>
          </h1>
          <h1 className="py-2 text-gray-700">A Front-End Web Developer</h1>
          <p className="py-4 text-gray-600 sm:max-w-[70%] m-auto">
            I’m focused on building responsive front-end web applications
            integrating back-end technologies, Also I am Web 3 enthusiastic!
          </p>
          <div className="flex items-center justify-between max-w-[330px] m-auto py-4">
            <a
              href="https://www.linkedin.com/in/pandit-dhamdhere-139858221/"
              target="_blank"
              rel="noreferrer"
            >
              <div className="rounded-full shadow-lg shadow-blue-400 bg-blue-500 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                <FaLinkedinIn />
              </div>
            </a>
            <a
              href="https://github.com/panditdhamdhere"
              target="_blank"
              rel="noreferrer"
            >
              <div className="rounded-full shadow-lg shadow-gray-400 bg-gray-500 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                <FaGithub />
              </div>
            </a>
            <Link href="/#contact">
              <div className="rounded-full shadow-lg shadow-green-400 bg-green-500 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                <AiOutlineMail />
              </div>
            </Link>
            <Link href="https://twitter.com/panditdhamdhere">
              <div className="rounded-full shadow-lg shadow-sky-400 bg-sky-500 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                <FaTwitter />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
