"use client"; // this is a client component
import { useTheme } from "next-themes";
import { Unitec } from "./Icons";

export const ExperienceSection = () => {
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;
  return (
    <section id="experience">
      <div
        // ref={scrollToExperience}
        className="py-10 text-black"
      >
        <p className=" text-center text-[30px] font-bold mb-4">Experience</p>
        <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded" />
        <p className=" text-left text-[20px] mb-4">Education</p>
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className={`bg-white rounded-[10px] p-4 flex gap-x-2`}>
            <img className="h-[80px]" src="/unitec.png" alt="flutter" />
            <div
              className={`flex flex-col gap-y-1 currentTheme === "dark" ? "bg-white" : "bg-black"`}
            >
              <p className={` font-bold text-base md:text-[20px]`}>
                Unitec Institute of Technology
              </p>
              <p className=" text-sm md:text-base">2015 - 2019</p>
              <p className=" text-sm md:text-base">
                Bachelor of Business (Accounting)
              </p>
              <p className=" text-sm md:text-base">Auckland, New Zealand</p>
            </div>
          </div>
        </div>
        <p className=" text-left text-[20px] my-4">Certifications</p>
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className={`bg-white rounded-[10px] p-4 flex gap-x-2`}>
            <img className="h-[80px]" src="/hacktiv8.png" alt="flutter" />
            <div
              className={`flex flex-col gap-y-1 currentTheme === "dark" ? "bg-white" : "bg-black"`}
            >
              <p className={` font-bold text-base md:text-[20px]`}>Hacktiv8</p>
              <p className=" text-sm md:text-base">2020 - 2021</p>
              <p className=" text-sm md:text-base">
                Full Stack JavaScript Immersive Program
              </p>
              <p className=" text-sm md:text-base">Jakarta, Indonesia</p>
            </div>
          </div>
        </div>
        <p className=" text-left text-[20px] my-4">Work</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className={`bg-white rounded-[10px] p-4`}>
            <div className="flex flex-col gap-y-1">
              <div className="flex justify-between">
                <div className="flex flex-col gap-y-1">
                  <p className=" font-bold text-base md:text-[20px]">
                    Metabase
                  </p>
                  <p className=" text-sm md:text-base">Full Stack Developer</p>
                  <p className=" text-sm md:text-base">Jan 2023 - present</p>
                  <p className=" text-sm md:text-base">Responsibilities:</p>
                </div>
                <div>
                  <img className="h-[80px]" src="/metabase.png" alt="flutter" />
                </div>
              </div>
              <ul className="list-disc px-4">
                <li className="">
                  Developing and maintaining scalable and efficient frontend
                  architectures that support the development of high-quality web
                  or mobile applications.
                </li>
                <li className="">
                  Collaborating with designers, developers, and stakeholders to
                  develop functional and intuitive user interfaces.
                </li>
                <li className="">
                  Writing clean and maintainable code that is scalable,
                  efficient, and adheres to established coding standards.
                </li>
                <li className="">
                  Troubleshooting and debugging code to ensure that web
                  applications work smoothly and efficiently.
                </li>
                <li className="">
                  Managing and optimizing mobile application build processes,
                  including the use of task runners, bundlers, and
                  preprocessors.
                </li>
                <li className="">
                  Integrating frontend code with backend systems, including APIs
                  and databases.
                </li>
                <li className="">
                  Developing and maintaining decentralized applications (dApps)
                  on blockchain platforms.
                </li>
              </ul>
              <hr className="my-4 border border-darkGray" />
              <p className=" text-sm md:text-base">Tech Stacks:</p>
              <ul className="list-disc px-4 grid grid-cols-2 text-[12px] md:text-[16px] text-[12px] md:text-[16px]">
                <li className="">React</li>
                <li className="">React Native</li>
                <li className="">Node JS</li>
                <li className="">Adonis JS</li>
                <li className="">PostgreSQL</li>
              </ul>
              <hr className="my-4 border border-darkGray" />
              <p className=" text-sm md:text-base">Applications:</p>
              <ul className="list-disc px-4 grid grid-cols-2 text-[12px] md:text-[16px]">
                <li className="">Hyfen.gg</li>
                <li className="">Hyfen Tools</li>
                <li className="">Hyfen Play</li>
                <li className="">Hyfen Pay</li>
                <li className="">Hyfen Admin</li>
              </ul>
            </div>
          </div>
          <div className="bg-white rounded-[10px] p-4 h-fit">
            <div className="flex flex-col gap-y-1">
              <div className="flex justify-between">
                <div className="flex flex-col gap-y-1">
                  <p className=" font-bold text-base md:text-[20px]">
                    Adira Finance
                  </p>
                  <p className=" text-sm md:text-base">Flutter Developer</p>
                  <p className=" text-sm md:text-base">Aug 2021 - Dec 2022</p>
                  <p className=" text-sm md:text-base">Responsibilities:</p>
                </div>
                <div>
                  <img className="h-[80px]" src="/adira.png" alt="flutter" />
                </div>
              </div>
              <ul className="list-disc px-4">
                <li className="">
                  Developing mobile apps and web applications for Adira&apos;s
                  internal use.
                </li>
                <li className="">
                  Developing and maintaining scalable and efficient frontend
                  architectures that support the development of high-quality
                  mobile applications.
                </li>
                <li className="">
                  Collaborating with designers, developers, and stakeholders to
                  develop functional and intuitive user interfaces.
                </li>
                <li className="">
                  Writing clean and maintainable code that is scalable,
                  efficient, and adheres to established coding standards.
                </li>
                <li className="">
                  Troubleshooting and debugging code to ensure that web or
                  mobile applications work smoothly and efficiently.
                </li>
                <li className="">
                  Integrating frontend code with backend systems, including APIs
                  and databases.
                </li>
              </ul>
              <hr className="my-4 border border-darkGray" />
              <p className=" text-sm md:text-base">Tech Stacks:</p>
              <ul className="list-disc px-4 grid grid-cols-2 text-[12px] md:text-[16px]">
                <li className="">Flutter</li>
                <li className="">Vue JS</li>
                <li className="">Java Springboot</li>
                <li className="">PostgreSQL</li>
              </ul>
              <hr className="my-4 border border-darkGray" />
              <p className=" text-sm md:text-base">Applications:</p>
              <ul className="list-disc px-4 grid grid-cols-2 text-[12px] md:text-[16px]">
                <li className="">Ad1Sales</li>
                <li className="">Adira Web Admin</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
