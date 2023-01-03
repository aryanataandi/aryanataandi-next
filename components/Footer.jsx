import React from "react";
import Twitter from "./icons/Twitter";
import Instagram from "./icons/Instagram";
import Github from "./icons/Github";

let socialMedia = [
  {
    app: "Twitter",
    url: "https://twitter.com/aryanata_andi/",
    comp: <Twitter />,
  },
  {
    app: "Instagram",
    url: "https://instagram.com/aryanata_andi/",
    comp: <Instagram />,
  },
  {
    app: "Github",
    url: "https://github.com/aryanataandi/",
    comp: <Github />,
  },
];

function App() {
  return (
    <footer className="my-12 my-container">
      <div className="row">
        <div className="col">
          <ul className="text-primary flex justify-center md:justify-start mb-0">
            {socialMedia.map((x, i) => {
              return (
                <li key={i} className="mx-3 md:mx-0 md:mr-6">
                  <a
                    className="icon"
                    href={x.url}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {x.comp}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <div className="my-4 grid grid-cols-1 md:grid-cols-2">
        <div className="text-center md:text-left">
          <p className="text-secondary m-0">
            Designed & Built with ♥ by Aryanata Andipradana
          </p>
        </div>
        <div className="text-center md:text-right">
          <a
            href="https://github.com/aryanataandi/aryanataandi.github.io"
            className="text-secondary hover:text-white"
          >
            About this website &rarr;
          </a>
        </div>
      </div>
    </footer>
  );
}

export default App;
