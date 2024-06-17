"use client";
import Image from "next/image";

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
          {/* <h2 className="text-second text-5xl my-2"> */}
          <h2 className="text-second text-5xl my-2 inline-block underline-animation hover:tracking-out-contract font-bold">
            Francisco Perez
            {/* </h2> */}
          </h2>
          <h2 className="text-second text-2xl ">Software Engineer</h2>
          <p className="text-fourth pl-5">
            First be a good person, then be a good professional, <br />
            <span className="font-bold">I'm both.</span>
          </p>
        </div>
      </div>
    </section>
  );
}

export default Hero;
