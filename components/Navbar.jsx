import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useScrollPosition } from "../hooks";

let list = [
  {
    name: "Home",
    url: "/",
  },
  {
    name: "About",
    url: "/about",
  },
  {
    name: "Project",
    url: "/projects",
  },
];

function Navbar() {
  const [openMenu, setOpenMenu] = useState(false);

  const scrollPosition = useScrollPosition();

  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }

  const menuClick = () => {
    hotdogClick();
    const body = document.querySelector("body");
    body.classList.remove("overflow-y-hidden");
    setOpenMenu(false);
  };

  const hotdogClick = () => {
    const body = document.querySelector("body");
    body.classList.toggle("overflow-y-hidden");

    setOpenMenu(!openMenu);
  };

  useEffect(() => {
    const body = document.querySelector("body");
    const button = document.getElementsByClassName("menu");

    body.classList.add("md:overflow-y-auto");
    for (let i = 0; i < button.length; i++) {
      button[i].addEventListener("click", menuClick);
    }

    return () => {
      for (let i = 0; i < button.length; i++) {
        button[i].removeEventListener("click", menuClick);
      }
    };
  });

  return (
    <nav
      className={classNames(
        scrollPosition <= 70
          ? "md:py-8"
          : "md:py-2.5 shadow-sm shadow-dark",
        "fixed backdrop-blur bg-dark bg-opacity-80 w-full z-20 top-0 left-0 px-2 sm:px-4 py-4 transition-all duration-300"
      )}
    >
      <div className="my-container flex flex-wrap justify-between items-center mx-auto relative">
        <Link href="/" className="flex items-center">
          <a>
            <Image
              src="/logo.svg"
              alt="Logo"
              height={35}
              width={35}
              className="mr-3 h-6 sm:h-9"
            ></Image>
          </a>
        </Link>
        <button
          onClick={() => hotdogClick()}
          data-collapse-toggle="navbar-default"
          id="hotdog"
          type="button"
          className={classNames(
            openMenu ? "hotdog-active" : "",
            "inline-flex items-center h-[35px] w-[35px] p-2 ml-3 text-sm text-gray-500 justify-around flex-col md:hidden z-[99]"
          )}
          aria-controls="navbar-menu"
          aria-expanded="false"
        >
          <span className="bg-white" />
          <span className="bg-white" />
        </button>
        <div
          id="navbar-menu"
          className={classNames(
            openMenu ? "grid" : "hidden",
            "md:block md:static md:bg-transparent h-screen md:h-full w-full md:w-auto top-full place-items-center"
          )}
        >
          <ul className="flex flex-col md:py-3 pb-32 rounded-lg md:flex-row md:space-x-8 mx-auto items-center align-middle md:mt-0 text-xl md:text-base font-bold md:font-medium md:border-0 w-full">
            {list.map((x, i) => {
              return (
                <li key={i} className="my-4 md:my-0 w-full">
                  <Link href={x.url} className="block py-2 pr-4 pl-3 md:p-0">
                    <a className="block text-secondary hover:text-white menu rounded-md text-center">
                      {x.name}
                    </a>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
