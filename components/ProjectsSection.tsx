"use client"; // this is a client component
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import SlideUp from "./SlideUp";
import { BsGithub, BsArrowUpRightSquare } from "react-icons/bs";
import { portfolioArray } from "@/utils/data";
import { PortfolioBox } from "./PortfolioBox";

const projects = [
  {
    name: "Thankful Thoughts",
    description:
      "ThankfulThoughts is a web app that generates an appreciative sentence of something or someone you are thankful for.",
    image: "/thankfulthoughts.png",
    github: "https://github.com/hqasmei/thankful-thoughts",
    link: "https://thankfulthoughts.io/",
  },
  {
    name: "PlatoIO",
    description: "PlatoIO is a to do list app that built using the PERN stack.",
    image: "/platoio.png",
    github: "https://github.com/hqasmei/platoio",
    link: "https://platoio.com/register",
  },
  {
    name: "Kator Family Photos",
    description:
      "Kator Family Photos is a photos and video digitization service in the LA area.",
    image: "/familyphotos.png",
    github: "https://github.com/hqasmei/katorfamilyphotos",
    link: "https://katorfamilyphotos.com/",
  },
];

const ProjectsSection = () => {
  const [category, setCategory] = useState("All");

  const filterPortfolio = (data: any) => {
    if (category === "All") {
      return data;
    }
    return data.categories.find((element: any) => element.name === category);
  };

  const filteredData = portfolioArray.filter(filterPortfolio);
  return (
    <section id="projects">
      <h1 className="my-10 text-center font-bold text-4xl">
        Projects
        <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded" />
      </h1>

      <div
      // ref={scrollToPortfolio}
      >
        <div className="flex flex-wrap justify-center items-center gap-5 mb-5">
          <a
            onClick={() => setCategory("All")}
            className={`px-5 py-3 border ${
              category === "All" ? "border-darkBlue bg-darkBlue text-white" : ""
            } rounded-[10px] cursor-pointer transition-all duration-300 hover:bg-darkBlue hover:text-white`}
          >
            <p>All</p>
          </a>
          <a
            onClick={() => setCategory("Website")}
            className={`px-5 py-3 border ${
              category === "Website"
                ? "border-darkBlue bg-darkBlue text-white"
                : ""
            } rounded-[10px] cursor-pointer transition-all duration-300 hover:bg-darkBlue hover:text-white`}
          >
            <p>Website</p>
          </a>
          <a
            onClick={() => setCategory("Mobile")}
            className={`px-5 py-3 border ${
              category === "Mobile"
                ? "border-darkBlue bg-darkBlue text-white"
                : ""
            } rounded-[10px] cursor-pointer transition-all duration-300 hover:bg-darkBlue hover:text-white`}
          >
            <p>Mobile&nbsp;Apps</p>
          </a>
          <a
            onClick={() => setCategory("Web3")}
            className={`px-5 py-3 border ${
              category === "Web3"
                ? "border-darkBlue bg-darkBlue text-white"
                : ""
            } rounded-[10px] cursor-pointer transition-all duration-300 hover:bg-darkBlue hover:text-white`}
          >
            <p>Web3</p>
          </a>
        </div>
        <p className=" mb-5">Total: {filteredData.length} projects</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {filteredData.map((portfolioData: any, idx: any) => (
            <div key={idx}>
              <SlideUp offset="-300px 0px -300px 0px">
                <PortfolioBox
                  id={portfolioData.id}
                  img_url={portfolioData.img_url}
                  name={portfolioData.name}
                  categories={portfolioData.categories}
                  description={portfolioData.description}
                  stacks={portfolioData.stacks}
                  status={portfolioData.status}
                />
              </SlideUp>
            </div>
          ))}
        </div>
      </div>

      {/* <div className="flex flex-col space-y-28">
        {projects.map((project, idx) => {
          return (
            <div key={idx}>
              <SlideUp offset="-300px 0px -300px 0px">
                <div className="flex flex-col  animate-slideUpCubiBezier animation-delay-2 md:flex-row md:space-x-12">
                  <div className=" md:w-1/2">
                    <Link href={project.link}>
                      <Image
                        src={project.image}
                        alt=""
                        width={1000}
                        height={1000}
                        className="rounded-xl shadow-xl hover:opacity-70"
                      />
                    </Link>
                  </div>
                  <div className="mt-8 md:w-1/2">
                    <h1 className="text-4xl font-bold mb-6">{project.name}</h1>
                    <p className="text-xl leading-7 mb-4 text-neutral-600 dark:text-neutral-400">
                      {project.description}
                    </p>
                    <div className="flex flex-row align-bottom space-x-4">
                      <Link href={project.github} target="_blank">
                        <BsGithub
                          size={30}
                          className="hover:-translate-y-1 transition-transform cursor-pointer"
                        />
                      </Link>
                      <Link href={project.link} target="_blank">
                        <BsArrowUpRightSquare
                          size={30}
                          className="hover:-translate-y-1 transition-transform cursor-pointer"
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              </SlideUp>
            </div>
          )
        })}
        
      </div> */}
    </section>
  );
};

export default ProjectsSection;
