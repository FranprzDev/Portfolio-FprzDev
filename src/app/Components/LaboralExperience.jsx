import React from "react";
import ListItemExperience from "./ListItemExperience";

function LaboralExperience() {
  return (
    <section className="w-full flex justify-center mb-3">
      <div className="w-full flex max-w-3xl justify-center items-start flex-col pl-3">
        <article className="pb-4">
          <h2 className="text-4xl text-first text-start underline underline-offset-[7px] font-bold inline-block">
            Laboral Experience
          </h2>
          <p className="pt-3 text-third">
            Here you can see my laboral experience.
          </p>
        </article>
        <div className="pt-2 mt-3 lg:h-[300px] flex items-center md:pl-3">
          <ol class="border-s border-first lg:flex lg:justify-center lg:gap-6 lg:border-s-0 lg:border-t md:ml-2">
            <ListItemExperience
              date={"November 2023 - May 2024"}
              job={"Advanced Backend Tutor"}
              companyDirection={"/RollingRojo.png"}
              description={
                "I was a tutor the backend area, teaching the students the complex concepts of the backend in Node.js."
              }
            />
            <ListItemExperience
              date={"May 2024 - Present"}
              job={"Basic Web Development Tutor"}
              companyDirection={"/RollingRojo.png"}
              description={
                "I was a tutor in the initial frontend area, teaching the students concepts in the frontend such as HTML, CSS"
              }
            />
          </ol>
        </div>
      </div>
    </section>
  );
}

export default LaboralExperience;
