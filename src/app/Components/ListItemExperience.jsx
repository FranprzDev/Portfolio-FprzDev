import React from "react";
import Image from "next/image";

function ListItemExperience({ date, job, companyDirection, description }) {
  return (
    <li>
      <div class="flex-start flex items-center pt-2 md:block md:pt-0">
        <div class="-ms-[5px] me-3 h-[9px] w-[9px] rounded-full bg-second underline-5 md:-mt-[5px] md:me-0 md:ms-0"></div>
      </div>
      <div class="ms-4 mt-2 pb-5 md:ms-0">
        <h4 class="mb-1.5 text-xl font-semibold text-first">
          {job ? job : "Developer"}
        </h4>
        <div className="flex justify-start gap-3">
          <p class="mt-2 text-xs text-fourth inline">
            {date ? date : "May - Present"}
          </p>
          <a
            href="https://www.frt.utn.edu.ar"
            className="education-logo-animation"
            target="_blank"
            rel="noreferrer"
          >
            <Image
              src={companyDirection ? companyDirection : "/Rollingrojo.png"}
              alt="Universidad Tecnologica Nacional - Logo"
              width={40}
              height={40}
              className=""
            />
          </a>
        </div>

        <p class="mb-3 text-neutral-500 dark:text-neutral-300 pl-3">
          {description ? description : "I'm the good developer"}
        </p>
      </div>
    </li>
  );
}

export default ListItemExperience;
