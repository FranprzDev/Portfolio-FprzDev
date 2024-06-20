import React from "react";
import Image from "next/image";

function ListItemExperience({ date, job, companyDirection, description }) {
  return (
    <li>
      <div className="flex-start flex items-center pt-2 md:block md:pt-0">
        <div className="-ms-[5px] me-3 h-[9px] w-[9px] rounded-full bg-second underline-5 lg:-mt-[5px] lg:me-0 lg:ms-0"></div>
      </div>
      <div className="ms-4 mt-2 md:ms-0 md:pl-3">
        <h4 className="mb-1.5 text-xl font-semibold text-first">
          {job ? job : "Developer"}
        </h4>
        <div className="flex justify-start gap-3">
          <p className="mt-2 text-xs text-fourth inline">
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

        <p className="mb-3 text-neutral-500 dark:text-neutral-300 pl-3">
          {description ? description : "I'm the good developer"}
        </p>
      </div>
    </li>
  );
}

export default ListItemExperience;
