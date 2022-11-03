import React from "react";
import Image from "next/image";
import komodoImage from "../public/image/project-komodo.png";
import skbImage from "../public/image/project-skb.png";
import simpusImage from "../public/image/project-simpus.png";

let data = [
  {
    link: "https://belanja.skb.salatiga.go.id",
    taglink: "belanja.skb.salatiga.go.id",
    title: "Mitra Online Shop",
    img: skbImage,
    desc: `
    A Business-to-Consumer e-commerce built with PHP using CodeIgniter framework. 
    Featuring user login, shopping cart, & shipping cost API.
      `,
    tech: ["PHP", "CodeIgniter", "MySQL"],
  },
  {
    link: "https://komodo-os.my.id",
    taglink: "komodo-os.my.id",
    title: "Komodo OS Website",
    img: komodoImage,
    desc: `
    This is an official website of one of the most popular custom AOSP
    ROM, Komodo OS. It provides information & latest releases for many
    Android devices.
      `,
    tech: ["React", "Sass", "Bootstrap"],
  },
  {
    link: "http://simpus.salatiga.go.id/simpus/online",
    taglink: "simpus.salatiga.go.id/simpus",
    title: "Health Center Management System",
    img: simpusImage,
    desc: `
    A web-based application that is used to manage patient data, examinations, 
    and payments for a health care provider. This application has features such as online 
    registration and multi-level login
      `,
    tech: ["PHP", "CodeIgniter", "Firebird", "jQuery"],
  },
];

function Projects() {
  return (
    <div>
      {data.map((x, i) => {
        return (
          <div
            key={i}
            className="grid grid-cols-12 gap-4 group md:relative mb-8 md:mb-24"
          >
            <div className="col-start-1 group-even:md:col-start-7 group-even:lg:col-start-6 col-span-12 md:col-span-6 lg:col-span-7 md:w-[115%] lg:w-[100%] group-even:md:absolute group-even:md:right-0 hidden md:inline">
              <a
                href={x.link}
                target="_blank"
                className="saturate-[.15] hover:saturate-100 transition-all duration-300 hover:drop-shadow-[0_0_18px_rgba(100,100,100,0.25)]"
              >
                <Image src={x.img} alt={x.title} className="rounded-md" />
              </a>
            </div>
            <div className="col-start-1 md:col-start-7 lg:col-start-8 group-even:md:col-start-1 col-span-12 md:col-span-6 lg:col-span-5 lg:w-[115%] group-odd:md:absolute group-odd:md:right-0 mt-6 group-even:md:mb-14 z-10">
              <h2 className="text-start group-odd:md:text-end leading-none font-bold mb-4 sm:relative hover:text-purple-500 transition-all duration-300">
                <a href={x.link} target="_blank">{x.title}</a>
              </h2>
              <div className="bg-[#1a1a1c] rounded-md p-5 mb-4">
                <p className="text-md group-odd:md:text-right text-secondary">
                  {x.desc}
                </p>
              </div>
              <div className="group-odd:md:text-right">
                {x.tech.map((y, i) => {
                  return (
                    <span
                      key={i}
                      className="text-purple-500 text-md mr-8 group-odd:md:mr-0 group-odd:md:ml-8"
                    >
                      {y}
                    </span>
                  );
                })}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Projects;
