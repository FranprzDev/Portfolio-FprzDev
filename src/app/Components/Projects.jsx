function Projects() {
  return (
    <section className="w-full flex justify-center" id="projects">
      <div className="w-full flex max-w-3xl justify-center items-start flex-col ">
        <article className="pl-3 inline pb-5">
          <h2 className="text-4xl text-first text-start underline underline-offset-[7px] font-bold inline-block">
            Projects
          </h2>
          <p className="pt-3 text-third">My projects group by purpose.</p>
        </article>

        <article className="flex flex-col justify-center gap-3 px-2 w-full md:h-[400px] lg:h-[300px] lg:flex lg:flex-row lg:justify-center">
        <div className="relative col-span-12 xl:w-[400px] lg:col-span-4 bg-project-end h-[200px] md:h-[300px] inline-block">
            <div className="absolute inset-0 bg-project-first backdrop-blur-lg"></div>
            <h3 className="relative text-3xl text-center text-first font-bold mt-2 pl-1">
              University
            </h3>
            <p className="relative text-sm text-start font-italic text-third mt-1 text-pretty pl-2">
              Projects that I did during my university studies.
            </p>
            <a 
            href="/Project?type=University"
            className="absolute bg-project-button text-second hover:text-first right-5 bottom-5 z-2 font-italic rounded-50 p-1">
              Go to projects
            </a>
          </div>
          <div className="relative col-span-12 xl:w-[400px] lg:col-span-4 bg-project-end h-[200px] md:h-[300px] inline-block">
            <div className="absolute inset-0 bg-project-middle backdrop-blur-lg"></div>
            <h3 className="relative text-3xl text-center text-first font-bold mt-2 pl-1">
              Courses
            </h3>
            <p className="relative text-sm text-start font-italic text-third mt-1 text-pretty pl-2">
              Projects that I did with online courses.
            </p>
            <a 
            href="/Project?type=Courses"
            className="absolute bg-project-button text-second hover:text-first right-5 bottom-5 z-2 font-italic rounded-50 p-1">
              Go to projects
            </a>
          </div>
          <div className="relative col-span-12 xl:w-[400px] lg:col-span-4 bg-project-end h-[200px] md:h-[300px] inline-block">
            <div className="absolute inset-0 bg-project-end backdrop-blur-lg"></div>
            <h3 className="relative text-3xl text-center text-first font-bold mt-2 pl-1">
              Self-Taught
            </h3>
            <p className="relative text-sm text-start font-italic text-third mt-1 text-pretty pl-2">
              Projects that I did with self-taught learning.
            </p>
            <a 
            href="/Project?type=SelfTaught"
            className="absolute bg-project-button text-second hover:text-first right-5 bottom-5 z-2 font-italic rounded-50 p-1">
              Go to projects
            </a>
          </div>
        </article>
      </div>
    </section>
  );
}

export default Projects;
