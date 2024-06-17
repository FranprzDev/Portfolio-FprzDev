function Projects() {
  return (
    <section className="w-full flex justify-center">
      <div className="w-full flex max-w-3xl justify-center items-start flex-col py-3">
        <article className="pl-3 inline">
          <h2 className="text-4xl text-first text-start underline underline-offset-[7px] font-bold inline-block">
            Projects
          </h2>
          <p className="pt-3 text-third pl-2">My projects group by purpose.</p>
        </article>

        <section className="lg:h-[300px] flex flex-col lg:flex-row items-center justify-center gap-5 w-full pt-3 mt-3">
          <div className="min-h-[200px] min-w-[500px] pt:2 lg:w-1/3 lg:h-[300px] flex justify-center">

            <div className="bg-project-first rounded-lg p-5 relative">
              <h3 className="text-white text-lg font-bold mb-2">University</h3>
              <p className="text-white text-sm italic">
                Projects related to my university studies.
              </p>
              <button
                className="bg-black text-first py-2 px-4 rounded-lg mt-4 absolute bottom-2 right-2
              "
              >
                Go to University Projects
              </button>
            </div>
          </div>

          <div className="min-h-[200px] min-w-[500px] pt:2 lg:w-1/3 lg:h-[300px] flex justify-center">
            <div className="bg-project-middle rounded-lg p-5 relative">
              <h3 className="text-white text-lg font-bold mb-2">Courses</h3>
              <p className="text-white text-sm italic">
                Projects related to my online courses & bootcamps.
              </p>
              <button
                className="bg-black text-first py-2 px-4 rounded-lg mt-4 absolute bottom-2 right-2
              "
              >
                Go to Course Projects
              </button>
            </div>
          </div>

          <div className="min-h-[200px] min-w-[500px] pt:2 lg:w-1/3 lg:h-[300px] flex justify-center">
            <div className="bg-project-end rounded-lg p-5 relative">
              <h3 className="text-white text-lg font-bold mb-2">Self-Taught</h3>
              <p className="text-white text-sm italic">
                Projects related to my self-taught studies.
              </p>
              <button
                className="bg-black text-first py-2 px-4 rounded-lg mt-4 absolute bottom-2 right-2
              "
              >
                Go to Self-Taught Projects
              </button>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
}

export default Projects;
