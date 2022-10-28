import React from "react";
import Link from "next/link";
import Projects from "./Projects";

function App() {
  return (
    <>
      <section className="min-h-screen flex">
        <div className="m-auto text-center">
          <div className="mb-8">
            <p className="text-secondary text-body mb-4">Hello, i'm ..</p>
            <h1 className="leading-none">
              <span className="text-purple-500">Aryanata Andipradana</span>
              <br />
              <span>I write code for the web</span>
            </h1>
            <br />
            <p className="text-secondary text-body">
              I am a Software Engineer, specializing in building web based
              applications. Working on both back-end & front-end technologies.
            </p>
          </div>
          <Link href="/resume">
            <a className="btn mr-2">Resume</a>
          </Link>
          <Link href="/about">
            <a className="btn border-0 hover:bg-opacity-20 hover:text-white">
              About Me
            </a>
          </Link>
        </div>
      </section>
      <section>
        <div className="pt-16">
          <h2 className="leading-none mb-8">
            My Work<span className="text-purple-500">.</span>
          </h2>
          <Projects />
          <div className="text-center mb-56 mt-14 md:mt-32">
            <h2 className="mb-7">Other things i've built</h2>
            <Link href="/archive">
              <a className="btn">Project Archive</a>
            </Link>
          </div>
          <div>
            <div className="">
              <div className="text-end"></div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
