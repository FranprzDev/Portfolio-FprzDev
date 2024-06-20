"use client";
import { useSearchParams } from "next/navigation";
import Image from "next/image";
import { FaBackspace, FaGithub, FaPlay } from "react-icons/fa";
import { ProjectsArray } from "../Constants/Projects";
import Footer from "../Components/Footer";
import { Suspense } from "react";
import Link from "next/link";
import { Fade } from "react-awesome-reveal";

function ProjectDetail() {
  const searchParams = useSearchParams();

  const search = searchParams.get("type");

  const ProjectDetail = ProjectsArray.find(
    (project) => project.nameEN === search
  );

  return (
    <section className="w-full flex flex-col justify-center max-w-3xl mx-auto py-4 relative gap-3">
      <article className="pt-2">
        <div className="flex justify-around items-center gap-4 md:justify-between md:pl-2 md:pr-2">
          <h2 className="text-4xl text-first text-start underline underline-offset-[7px] font-bold inline-block ">
            {ProjectDetail?.nameEN ? ProjectDetail?.nameEN : "Projects"}
          </h2>
          <Link className="text-third hover:text-first text-3xl" href="/">
            <FaBackspace />
          </Link>
        </div>
        <p className="pt-4 text-third text-balance text-center md:text-start md:pl-2 md:text-pretty lg:text-balance">
          {ProjectDetail?.descriptionEN
            ? ProjectDetail?.descriptionEN
            : "Here you can see the details of the projects, but you put an incorrect URL."}
        </p>
      </article>

      {ProjectDetail?.projectsEN?.map((project, index) => (
        <Fade cascade damping={0.2} triggerOnce key={index}>
          <div className="bg-cards-projects-details mx-3" key={index}>
            <h3 className="relative text-lg sm:text-xl text-start text-first font-bold mt-2 pl-1 text-balance md:text-3xl lg:text-4xl md:text-balance">
              {project?.name ? project?.name : "Project"}
            </h3>
            <p className="relative text-sm text-start font-italic text-third mt-1 text-balance pl-2 md:text-lg lg:text-xl">
              {project?.description ? project?.description : "Description"}
            </p>

            <div className="w-full flex justify-center py-2">
              <Image
                src={
                  project?.image
                    ? project?.image
                    : "/Projects/University/AyED.png"
                }
                width={300}
                height={300}
                className="rounded-lg object-fit slit-in-vertical active:flip-horizontal-bottom"
                alt={`Picture of ${project?.name ? project?.name : "Project"}`}
                key={`image-${index}`}
                // onLoad={(e) => console.log(e.target.naturalWidth)}
              />
            </div>

            <div className="w-full flex justify-end gap-3 pr-3 py-3">
              {project?.demo ? (
                <a
                  className="text-third hover:text-first text-3xl md:text-5xl lg:text-7xl"
                  href={project?.demo}
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaPlay />
                </a>
              ) : null}
              {project?.github ? (
                <a
                  className="text-third hover:text-first text-3xl md:text-5xl lg:text-7xl"
                  href={project?.github}
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaGithub />
                </a>
              ) : null}
            </div>
          </div>
        </Fade>
      ))}
      <Footer />
    </section>
  );
}

export function ProjectAllDetails() {
  return (
    <Suspense fallback={<div>test</div>}>
      <ProjectDetail />
    </Suspense>
  );
}

export default ProjectAllDetails;
