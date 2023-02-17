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
              I am a web programmer with over 2 years of work experience. I
              specialize in creating, developing, maintaining websites and web
              applications.
            </p>
          </div>
          <a href="/resume.pdf" target="_blank" className="btn mr-2">
            My Resume
          </a>
          <Link href="/about">
            <a className="btn-secondary">About Me</a>
          </Link>
        </div>
      </section>
      <section>
        <div className="pt-16">
          <h2 className="leading-none md:mb-8">
            My Work<span className="text-purple-500">.</span>
          </h2>
          <Projects />
          <div className="text-center mb-56 mt-14 md:mt-32">
            <h2 className="mb-7">Other things i've built</h2>
            <Link href="/projects">
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
