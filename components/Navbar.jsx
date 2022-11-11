import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

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
  const [open, setOpen] = useState(false);

  const hotdogClick = () => {
    let hotdog = document.getElementById("hotdog");
    let navmenu = document.getElementById("navbar-menu");
    let body = document.querySelector("body");

    hotdog.classList.toggle("hotdog-active");
    // hotdog.classList.toggle("pr-[34px]");
    navmenu.classList.toggle("hidden");
    navmenu.classList.toggle("grid");
    body.classList.toggle("overflow-y-hidden");
    // body.classList.toggle("pr-[16px]");
    setOpen(!open);
  };

  useEffect(() => {
    /* window.addEventListener('scroll', controlNavbar);

    return () => {
      window.removeEventListener('scroll', controlNavbar);
    }; */
  }, []);

  return (
    <nav className="fixed w-full z-20 top-0 left-0 px-2 sm:px-4 py-4 md:py-2.5">
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
          className="inline-flex items-center h-[35px] w-[35px] p-2 ml-3 text-sm text-gray-500 justify-around flex-col md:hidden z-[99]"
          aria-controls="navbar-menu"
          aria-expanded="false"
        >
          <span className="bg-white" />
          <span className="bg-white" />
        </button>
        <div
          className="hidden md:block md:static md:bg-transparent h-screen md:h-full w-full md:w-auto top-full place-items-center"
          id="navbar-menu"
        >
          <ul className="flex flex-col md:py-4 pb-32 rounded-lg md:flex-row md:space-x-8 mx-auto items-center align-middle md:mt-0 text-xl md:text-sm font-bold md:font-medium md:border-0">
            {list.map((x, i) => {
              return (
                <li key={i} className="my-4 md:my-0">
                  <Link href={x.url} className="block py-2 pr-4 pl-3 md:p-0">
                    <a className="text-secondary hover:text-white">{x.name}</a>
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
