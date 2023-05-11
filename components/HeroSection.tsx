"use client"; // this is a client component
import React from "react";
import Image from "next/image";
import { Link } from "react-scroll/modules";
import { HiArrowDown, HiMail } from "react-icons/hi";
import {
  BsLinkedin,
  BsArrowRight,
  BsFillCloudArrowDownFill,
  BsWhatsapp,
  BsGithub,
} from "react-icons/bs";
import { useTheme } from "next-themes";

const HeroSection = () => {
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;
  return (
    <section id="home">
      <div className="flex flex-col text-black text-center items-center justify-center animate-fadeIn animation-delay-2 my-10 py-16 sm:py-32 md:py-48 md:flex-row md:space-x-4 md:text-left">
        <div className="md:mt-2 md:w-1/2 flex items-end justify-end mr-12">
          <Image
            src="/stanly.png"
            alt=""
            width={325}
            height={325}
            className="rounded-full shadow-2xl"
          />
        </div>
        <div className="md:mt-2 md:w-3/5">
          <h1 className="text-4xl font-bold mt-6 md:mt-0 md:text-7xl">
            Hi, I&#39;m Stanly!
          </h1>
          <p className="text-lg mt-4 mb-6 md:text-2xl">
            I&#39;m a{" "}
            <span className="font-semibold text-teal-600">
              Software Engineer{" "}
            </span>
            based in Jakarta, Indonesia.
          </p>
          <div className="flex items-center gap-x-3 justify-center md:justify-start">
            <Link
              to="projects"
              className="text-neutral-100 cursor-pointer font-semibold px-6 py-3 bg-teal-600 rounded shadow hover:bg-teal-700"
              activeClass="active"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
            >
              Projects
            </Link>
            <a
              href="/Stanly-Sukmajaya.pdf"
              target="_blank"
              rel="noreferrer"
              className="text-neutral-100 flex items-center gap-x-2 cursor-pointer font-semibold px-6 py-3 bg-teal-600 rounded shadow hover:bg-teal-700"
            >
              <span>Download CV</span>
              <BsFillCloudArrowDownFill />
            </a>
          </div>
          <div className="flex gap-x-3 mt-5 justify-center md:justify-start">
            <a
              href={`mailto:stanlyskwok@gmail.com`}
              target="_blank"
              rel="noreferrer"
              className="p-3 bg-darkGray rounded-[10px] inline-block text-[20px] cursor-pointer"
            >
              <HiMail />
            </a>
            <a
              href="https://www.linkedin.com/in/stanly-kwok/"
              target="_blank"
              rel="noreferrer"
              className="p-3 bg-darkGray rounded-[10px] inline-block text-[20px] cursor-pointer"
            >
              <BsLinkedin />
            </a>
            <a
              href="https://wa.me/6281357202812"
              target="_blank"
              rel="noreferrer"
              className="p-3 bg-darkGray rounded-[10px] inline-block text-[20px] cursor-pointer"
            >
              <BsWhatsapp />
            </a>
            <a
              href="https://github.com/stanlys96"
              target="_blank"
              rel="noreferrer"
              className="p-3 bg-darkGray rounded-[10px] inline-block text-[20px] cursor-pointer"
            >
              <BsGithub />
            </a>
          </div>
          <div className="flex flex-row items-center text-center mt-10 justify-center md:justify-start">
            <Link
              to="about"
              activeClass="active"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
            >
              <HiArrowDown
                size={35}
                className="animate-bounce cursor-pointer"
              />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
