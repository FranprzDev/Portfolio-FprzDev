"use client";
import Image from "next/image";
import { RxLinkedinLogo, RxInstagramLogo, RxGithubLogo } from "react-icons/rx";

function Hero() {
  return (
    <section className="py-3 grid md:h-5/6 grid-cols-12 gap-4 items-center justify-center w-full z-0">
      <div className="col-span-12 flex flex-col-reverse sm:flex-row justify-center items-center relative">
        <div className="col-span-4 mx-5 justify-center items-center">
          <Image
            src="/FranciscoPerez.png"
            className="rounded-full img-fp"
            alt="A image about me"
            width={350}
            height={350}
          />
        </div>
        <div className="col-span-8 mx-5 active:text-first">
          <h2 className="text-second text-5xl my-2 inline-block underline-animation hover:tracking-out-contract font-bold">
            Francisco Perez
          </h2>
          <h2 className="text-second text-2xl">Software Engineer</h2>
          <p className="text-fourth">
            First be a good person, then be a good professional, <br/>
            <span className="font-bold">I&#39;m both.</span>
          </p>

          <div className="flex flex-row mt-3 gap-3">
            <a
              href="https://www.linkedin.com/in/francisco-perezdev/"
              target="_blank"
              className="bg-social-buttons text-third font-bold py-3 px-5 rounded-lg flex justify-center items-center hover:text-fourth"
            >
              <RxLinkedinLogo />
            </a>
            <a
              href="https://github.com/FranprzDev"
              target="_blank"
              className="bg-social-buttons text-third font-bold py-3 px-5 rounded-lg flex justify-center items-center hover:text-fourth"
            >
              <RxGithubLogo />
            </a>
            <a
              href="https://www.instagram.com/franprz23/?hl=es-la"
              target="_blank"
              className="bg-social-buttons text-third font-bold py-3 px-5 rounded-lg flex justify-center items-center hover:text-fourth"
            >
              <RxInstagramLogo />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
