"use client";
import { useState } from "react";
import { FaBars, FaLanguage, FaTimes } from "react-icons/fa";
import { RiCloseLargeLine } from "react-icons/ri";
import { IoIosHome, IoIosContact } from "react-icons/io";
import { BsPersonCircle } from "react-icons/bs";
import { GoProjectSymlink } from "react-icons/go";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar-blur sticky py-3 flex items-center justify-around w-full max-w-3xl navbar-background z-50 ">
      <div className="flex justify-center items-center space-x-10">
        <section className="flex gap-5 items-center hover:text-fourth">
          <h3 className="text-3xl hover:text-third">{"<"}</h3>
          <h1 className="text-4xl text-first hover:text-fourth">FprzDev</h1>
          <h3 className="text-3xl hover:text-third">{"/>"}</h3>
        </section>
      </div>

      <div className="">
        <button className="block xl:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>

        <ul
          className={`backgroundDesplegable flex-col items-start space-x-0 space-y-4 pt-5 min-h-screen ${
            isOpen ? "absolute left-0 right-0 bottom-0 top-0" : "hidden"
          } absolute top-0 w-full h-full transition-all duration-500 ease-in-out xl:hidden
          `}
        >
          {isOpen && (
            <li className="flex justify-end pr-4 pt-4 pb-3">
              <button
                className="text-first pr-5"
                onClick={() => setIsOpen(false)}
              >
                <RiCloseLargeLine size="2em" />
              </button>
            </li>
          )}
          <li>
            <a
              href="#"
              className="text-4xl text-first hover:text-third underline-animation flex justify-center items-center gap-3"
            >
              Home <IoIosHome />
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-3xl text-first hover:text-third underline-animation flex justify-center items-center gap-3"
            >
              About <BsPersonCircle />
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-3xl text-first hover:text-third underline-animation flex justify-center items-center gap-3"
            >
              Projects <GoProjectSymlink />
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-3xl text-first hover:text-third underline-animation flex justify-center items-center gap-3"
            >
              Contact <IoIosContact />
            </a>
          </li>
          <li className="underline-animation text-center hover:text-third">
            <button>
              <a
                href="#"
                className="text-3xl flex text-center justify-center items-center flex-row gap-3 text-first hover:text-third "
              >
                EN <FaLanguage />
              </a>
            </button>
          </li>
        </ul>

        <ul
          className={`hidden xl:flex xl:flex-row xl:items-center xl:space-x-8`}
        >
          <li>
            <a
              href="#"
              className="text-sm text-first hover:text-third underline-animation flex justify-center items-center gap-3"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-sm text-first hover:text-third underline-animation flex justify-center items-center gap-3"
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-sm text-first hover:text-third underline-animation flex justify-center items-center gap-3"
            >
              Contact
            </a>
          </li>
          <li className="underline-animation text-center hover:text-third">
            <button>
              <a
                href="#"
                className="text-sm flex text-center justify-center items-center flex-row gap-3 text-first hover:text-third "
              >
                EN <FaLanguage />
              </a>
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;