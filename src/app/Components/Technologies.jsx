import React from "react";
import { TechStack } from "../Constants/techStack";
import Carousel from "./CardInHand";

function Technologies() {
  return (
    <section className="w-full flex justify-center mb-3">
      <div className="w-full flex max-w-3xl justify-center items-start flex-col pl-3">
        <article className="pb-4">
          <h2 className="text-4xl text-first text-start underline underline-offset-[7px] font-bold inline-block">
            Technologies
          </h2>
          <p className="pt-3 text-third pl-2">
            Here you can see the tech stack that I have worked with, and others
            that I am currently learning.
          </p>
        </article>
        <article className="grid grid-cols-3 grid-row w-full grid-">
          <div>1</div>
          <div>2</div>
          <div>3</div>
        </article>
      </div>
    </section>
  );
}

export default Technologies;
