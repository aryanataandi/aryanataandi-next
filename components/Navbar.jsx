import React from "react";
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
    name: "Contact",
    url: "/contact",
  },
];

function Navbar() {
  return (
    <nav className="fixed w-full z-20 top-0 left-0 px-2 sm:px-4 py-4 md:py-2.5">
      <div className="my-container flex flex-wrap justify-between items-center mx-auto">
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
          data-collapse-toggle="navbar-default"
          id="navbar-toggler"
          type="button"
          className="inline-flex items-center h-[35px] p-2 ml-3 text-sm text-gray-500 justify-around flex-col md:hidden"
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          <span className="bg-white" />
          <span className="bg-white" />
        </button>
        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul className="flex flex-col py-4 mt-4 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0">
            {list.map((x, i) => {
              return (
                <li key={i}>
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
