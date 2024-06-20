import React from "react";
import Image from "next/image";
import { GoLinkExternal } from "react-icons/go";

function Education() {
  return (
    <section className="w-full flex justify-center" id="education">
      <section className="relative flex flex-col justify-center overflow-hidden">
        <div className="w-full max-w-3xl py-2">
          <div className="pl-3">
            <h2 className="text-4xl text-first underline underline-offset-[7px] font-bold inline-block">
              Education
            </h2>
            <p className="pt-3 text-third">
            {`I${"'"}m `} a <span className="font-bold">self-taught</span> person, I learn
              from the internet, courses, but I also have studies in the
              university.
            </p>
          </div>
          <div className="flex flex-col justify-center divide-y divide-slate-200 [&>*]:py-4">
            <div className="w-full max-w-3xl mx-auto">
              <div className="pr-3 space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-300 before:to-transparent">
                <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full border border-slate-300 bg-first text-fifth text-4xl shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                    <a
                      href="https://www.frt.utn.edu.ar"
                      className="education-logo-animation"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <Image
                        src="/UTN.png"
                        alt="Universidad Tecnologica Nacional - Logo"
                        width={40}
                        height={40}
                      />
                    </a>
                  </div>
                  <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] education-even p-4 rounded border border-[#300e96] shadow">
                    <div className="flex flex-col items-start justify-between mb-1">
                      <div className="font-bold text-first flex w-full justify-between items-center">
                        Systems Engineering
                        <a
                          href="https://www.frt.utn.edu.ar"
                          className="hover:text-third transition-colors duration-300 ease-in-out"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <GoLinkExternal />
                        </a>
                      </div>
                      <time className="text-xs font-medium text-third italic">
                        March 2022 - Present
                      </time>
                    </div>
                    <div className="text-third pl-3">
                      I start study in <span className="font-bold">U</span>
                      niversidad <span className="font-bold">
                        T
                      </span>ecnologica <span className="font-bold">N</span>
                      acional, my first career in the university, here I learn
                      about the{" "}
                      <span className="font-bold">software development</span>,
                      databases, and more.
                    </div>
                  </div>
                </div>

                <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full border border-slate-300 bg-first text-fifth text-4xl shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                    <a
                      href="https://web.rollingcodeschool.com"
                      className="education-logo-animation"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <Image
                        src="/Rolling.png"
                        alt="Universidad Tecnologica Nacional - Logo"
                        width={40}
                        height={40}
                      />
                    </a>
                  </div>
                  <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] education-odd p-4 rounded border border-[#300e96] shadow">
                    <div className="flex items-start flex-col justify-between mb-1">
                      <div className="font-bold text-first flex w-full justify-between items-center">
                        React Advanced
                        <a
                          href="https://web.rollingcodeschool.com/especializacion-frontend-con-react/"
                          className="hover:text-third transition-colors duration-300 ease-in-out"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <GoLinkExternal />
                        </a>
                      </div>
                      <time className="text-xs font-medium text-third italic">
                        December 2022 - Sept 2023
                      </time>
                    </div>
                    <div className="text-third pl-3">
                      I start study in{" "}
                      <span className="font-bold">RollingCode School</span>{" "}
                      where I learn{" "}
                      <span className="italic">
                        states, props, hooks, customhooks, context, redux
                      </span>{" "}
                      and more. <br />
                    </div>
                  </div>
                </div>

                <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full text-4xl bg-first shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                    <a
                      href="https://web.rollingcodeschool.com"
                      className="education-logo-animation"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <Image
                        src="/Rolling.png"
                        alt="Universidad Tecnologica Nacional - Logo"
                        width={40}
                        height={40}
                      />
                    </a>
                  </div>
                  <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] education-odd p-4 rounded border border-[#300e96] shadow">
                    <div className="flex items-start flex-col justify-between mb-1">
                      <div className="font-bold text-first flex w-full justify-between items-center">
                        FullStack Development
                        <a
                          href="https://web.rollingcodeschool.com/carrera-full-stack/"
                          className="hover:text-third transition-colors duration-300 ease-in-out"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <GoLinkExternal />
                        </a>
                      </div>
                      <time className="text-xs font-medium text-third italic">
                        December 2022 - Sept 2023
                      </time>
                    </div>
                    <div className="text-third pl-3">
                      I start study in{" "}
                      <span className="font-bold">RollingCode School</span>{" "}
                      where I learn{" "}
                      <span className="italic">
                        <span className="font-bold">MERN Stack</span> (MongoDB,
                        Expess, React, Node.js)
                      </span>{" "}
                      and more. <br />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}

export default Education;
