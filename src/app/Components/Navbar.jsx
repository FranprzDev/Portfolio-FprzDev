"use client";
import { useState } from "react";
import { FaBars, FaLanguage, FaTimes } from "react-icons/fa";
import { RiCloseLargeLine } from "react-icons/ri";
import { IoIosContact } from "react-icons/io";
import { BsPersonCircle } from "react-icons/bs";
import { GoProjectSymlink } from "react-icons/go";
import { useTranslation } from "react-i18next";
import i18n from "../Language/lang";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [language, setLanguage] = useState("en");
  const { t } = useTranslation();

  const handleChangeLang = (lang) => () => {
    lang ? setLanguage(lang) : setLanguage("en");
  };

  return (
    <nav
      className={`${
        isOpen ? "w-screen" : "max-w-3xl"
      } navbar-blur sticky py-3 flex items-center justify-around w-full navbar-background z-50`}
    >
      <div className="flex justify-center items-center space-x-10">
        <section className="flex gap-5 items-center hover:text-fourth">
          <h3 className="text-3xl hover:text-third">{"<"}</h3>
          <h1 className="text-4xl text-first hover:text-fourth">FprzDev</h1>
          <h3 className="text-3xl hover:text-third">{"/>"}</h3>
        </section>
      </div>

      <div className="">
        <button className="block lg:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>

        <ul
          className={`backgroundDesplegable flex-col items-start space-x-0 space-y-4 pt-5  ${
            isOpen
              ? "absolute left-0 right-0 bottom-0 top-0 slide-in-tr"
              : "hidden"
          } absolute top-0 h-screen min-h-screen lg:hidden
          `}
        >
          {isOpen && (
            <li className="flex justify-end pr-4 pt-4 pb-3">
              <button
                className="text-first pr-5 md:text-2xl"
                onClick={() => setIsOpen(false)}
              >
                <RiCloseLargeLine size="1.5em" />
              </button>
            </li>
          )}
          <li>
            <a
              href="#education"
              className="md:text-2xl text-xl text-first hover:text-third underline-animation flex justify-center items-center gap-3"
              onClick={() => setIsOpen(false)}
            >
              {t("about")} <BsPersonCircle />
            </a>
          </li>
          <li>
            <a
              href="#projects"
              className="md:text-2xl text-xl text-first hover:text-third underline-animation flex justify-center items-center gap-3"
              onClick={() => setIsOpen(false)}
            >
              {t("Projects")} <GoProjectSymlink />
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="md:text-2xl text-xl text-first hover:text-third underline-animation flex justify-center items-center gap-3"
              onClick={() => setIsOpen(false)}
            >
              {t("Contact")} <IoIosContact />
            </a>
          </li>
          {/* <li className="underline-animation text-center hover:text-third">
            <button>
              <a
                href="#"
                className="text-xl flex text-center justify-center items-center flex-row gap-3 text-first hover:text-third "
                onClick={() => setIsOpen(false)}
              >
                EN <FaLanguage />
              </a>
            </button>
          </li> */}
        </ul>

        <ul
          className={`hidden lg:flex lg:flex-row lg:items-center lg:space-x-8`}
        >
          <li>
            <a
              href="#education"
              className="text-md text-first hover:text-third underline-animation flex justify-center items-center gap-3"
            >
              {t("about")}
            </a>
          </li>
          <li>
            <a
              href="#projects"
              className="text-md text-first hover:text-third underline-animation flex justify-center items-center gap-3"
            >
              {t("projects")}
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="text-md text-first hover:text-third underline-animation flex justify-center items-center gap-3"
            >
              {t("contact")}
            </a>
          </li>
          {language === "en" ? (
            <li className="underline-animation text-center hover:text-third">
              <button
                onClick={() => {
                  i18n.changeLanguage("es");
                  setLanguage("es");
                }}
              >
                <a className="text-sm flex text-center justify-center items-center flex-row gap-3 text-first hover:text-third ">
                  {language.toUpperCase()} <FaLanguage />
                </a>
              </button>
            </li>
          ) : language === "es" ? (
            <li className="underline-animation text-center hover:text-third">
              <button
                onClick={() => {
                  i18n.changeLanguage("en");
                  setLanguage("en");
                }}
              >
                <a className="text-sm flex text-center justify-center items-center flex-row gap-3 text-first hover:text-third ">
                  {language.toUpperCase()} <FaLanguage />
                </a>
              </button>
            </li>
          ) : null}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
