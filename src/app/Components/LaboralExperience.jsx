import ListItemExperience from "./ListItemExperience";
import { useTranslation } from "react-i18next";
import { laboralExpeience } from "../Constants/LaboralExperience";

function LaboralExperience() {
  const { t } = useTranslation();

  return (
    <section className="w-full flex justify-center mb-3">
      <div className="w-full flex max-w-3xl justify-center items-start flex-col pl-3">
        <article className="pb-2 lg:pb-0">
          <h2 className="text-4xl text-first text-start underline underline-offset-[7px] font-bold inline-block">
            { t("laboralexp") }
          </h2>
          <p className="pt-3 text-third">
            { t("textexperience") }
          </p>
        </article>
        <div className="pt-2 mt-3 md:pt-0 md:mt-0 flex items-center md:pl-3 lg:mt-3">
          <ol className="border-s border-first lg:flex lg:justify-center lg:gap-6 lg:border-s-0 lg:border-t md:ml-2">
            {
              laboralExpeience ? 
              laboralExpeience.map(
                (work, index) => {
                  return (
                    <ListItemExperience
                      date={work.date}
                      job={work.job}
                      description={work.description}
                      companyDirection={work.companyDirection}
                      key={index}
                    />
                  )
                }
              ) : null
            }
          </ol>
        </div>
      </div>
    </section>
  );
}

export default LaboralExperience;
