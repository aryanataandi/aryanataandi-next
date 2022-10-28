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
              applications. Mostly work on back-end while learning front-end
              technologies.
            </p>
          </div>
        </div>
      </section>
      <section className="my-36">
        <h2 className="leading-none mb-8">
          About Me<span className="text-purple-500">.</span>
        </h2>
        <div className="text-secondary">
          <p className="text-xl mb-8">
            Hi, My name is Aryanata Andipradana. You can call me Ryan. I love
            creating digital products such as web application, design,
            animation, video and more.
          </p>
          <p className="text-xl mb-8">
            I work as a Software Engineer in a company that focused on web
            application development. I build various web applications and
            provide the best experience in solving real business problems. I
            handle both back-end and front-end stack in my current company. My
            main focus these days is building web app using good written code
            and learning modern front-end technologies.
          </p>
          <p className="text-xl mb-8">
            Besides of coding, I have interest in new tech stuff, gaming,
            designing, photography, videography, meme, and exploring amazing
            places.
          </p>
        </div>
      </section>
      <section>
        <div className="pt-16">
          <h2 className="leading-none mb-8">
            My Work<span className="text-purple-500">.</span>
          </h2>
          <Projects/>
          <div className="text-center my-56">
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
