import { TbHexagonLetterCFilled } from "react-icons/tb";
import {
  DiBootstrap,
  DiCss3,
  DiProlog,
  DiPython,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiMysql,
  DiJava,
  DiJavascript,
  DiHtml5,
  DiNetbeans,
  DiLinux,
  DiHaskell,
  DiGithub,
  DiGitPullRequest,
  DiGitMerge,
  DiGitCompare,
  DiGitBranch,
  DiGit,
  DiDocker,
  DiDatabase,
  DiPostgresql,
  DiAtlassian,
  DiTrello,
  DiJira,
} from "react-icons/di";
import { FaFigma } from "react-icons/fa6";
import { Link } from 'next-view-transitions'

import { ProjectsArray } from "../Constants/Projects";
import { Fade } from "react-awesome-reveal";
import { useTranslation } from "react-i18next";

function Projects() {
  const { t } = useTranslation();

  return (
    <section className="w-full flex justify-center" id="projects">
      <div className="w-full flex max-w-3xl justify-center items-start flex-col ">
        <article className="pl-3 inline pb-2">
          <h2 className="text-4xl text-first text-start underline underline-offset-[7px] font-bold inline-block">
            {t("projects")}
          </h2>
          <p className="pt-3 text-third">My projects group by purpose.</p>
        </article>

        <section className="w-full flex flex-col justify-cente align-items-center gap-2 max-w-3xl sm:gap-5 mt-3">
          <Fade cascade triggerOnce damping={0.1}>
            {ProjectsArray.map((item, index) => (
              <article
                className={`mx-3 ${
                  index % 2 == 0 ? "bg-project-first" : "bg-project-end"
                }`}
                key={index}
              >
                <h3 className="relative text-pretty text-lg sm:text-xl text-start text-first font-bold mt-2 pl-2 md:text-3xl lg:text-4xl md:text-balance">
                  {item?.nameEN ? item?.nameEN : "Project"}
                </h3>
                <p className="relative text-sm text-start text-pretty font-italic text-third mt-1 pl-2 md:text-lg lg:text-xl">
                  {item?.descriptionEN ? item?.descriptionEN : "Description"}
                </p>

                <div className="w-full px-3 py-3 flex justify-around">
                  {item.nameEN === "University" ? (
                    <>
                      <TbHexagonLetterCFilled className="text-2xl lg:text-3xl xl:text-4xl text-third hover:text-first" />

                      <DiProlog className="text-2xl text-third hover:text-first lg:text-3xl xl:text-4xl" />

                      <DiJava className="text-2xl text-third hover:text-first lg:text-3xl xl:text-4xl" />

                      <DiMysql className="text-2xl text-third hover:text-first lg:text-3xl xl:text-4xl" />

                      <DiNetbeans className="text-2xl text-third hover:text-first lg:text-3xl xl:text-4xl" />

                      <DiLinux className="text-2xl text-third hover:text-first lg:text-3xl xl:text-4xl" />

                      <DiHaskell className="text-2xl text-third hover:text-first lg:text-3xl xl:text-4xl" />

                      <FaFigma className="text-2xl text-third hover:text-first lg:text-3xl xl:text-4xl" />
                    </>
                  ) : item.nameEN === "Courses" ? (
                    <>
                      <DiHtml5 className="text-2xl text-third hover:text-first lg:text-3xl xl:text-4xl" />
                      <DiCss3 className="text-2xl text-third hover:text-first lg:text-3xl xl:text-4xl" />
                      <DiBootstrap className="text-2xl text-third hover:text-first lg:text-3xl xl:text-4xl" />
                      <DiTrello className="text-2xl text-third hover:text-first lg:text-3xl xl:text-4xl" />
                      <DiJavascript className="text-2xl text-third hover:text-first lg:text-3xl xl:text-4xl" />
                      <DiReact className="text-2xl text-third hover:text-first lg:text-3xl xl:text-4xl" />
                      <DiNodejs className="text-2xl text-third hover:text-first lg:text-3xl xl:text-4xl" />
                      <DiMongodb className="text-2xl text-third hover:text-first lg:text-3xl xl:text-4xl" />
                      <DiGit className="text-2xl text-third hover:text-first lg:text-3xl xl:text-4xl" />
                      <DiGitCompare className="text-2xl text-third hover:text-first lg:text-3xl xl:text-4xl" />
                    </>
                  ) : (
                    <>
                      <DiPython className="text-2xl text-third hover:text-first lg:text-3xl xl:text-4xl" />
                      <DiMysql className="text-2xl text-third hover:text-first lg:text-3xl xl:text-4xl" />
                      <DiPostgresql className="text-2xl text-third hover:text-first lg:text-3xl xl:text-4xl" />
                      <DiGitPullRequest className="text-2xl text-third hover:text-first lg:text-3xl xl:text-4xl" />
                      <DiDocker className="text-2xl text-third hover:text-first lg:text-3xl xl:text-4xl" />
                      <DiJira className="text-2xl text-third hover:text-first lg:text-3xl xl:text-4xl" />
                      <DiGitBranch className="text-2xl text-third hover:text-first lg:text-3xl xl:text-4xl" />
                    </>
                  )}
                </div>

                <div className="w-full flex justify-end pr-4">
                  <Link
                    className="bg-project-button text-second hover:text-first font-italic rounded-50 p-2 my-2"
                    href={`/Project?type=${item.nameEN}`}
                  >
                    Go to projects
                  </Link>
                </div>
              </article>
            ))}
          </Fade>
        </section>
      </div>
    </section>
  );
}

export default Projects;
