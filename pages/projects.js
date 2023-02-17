import Head from "next/head";
import ExternalLink from "../components/icons/ExternalLink";
import Github from "../components/icons/Github";

const data = [
  {
    year: 2022,
    title: "Personal Website",
    made: "Personal Project",
    tech: ["Next.JS", "Tailwind CSS"],
    link: [
      {
        type: "github",
        link: "https://github.com/aryanataandi/aryanataandi-next",
      },
    ],
  },
  {
    year: 2022,
    title: "Komodo OS Website",
    made: "Personal Project",
    tech: ["React", "Sass", "Bootstrap"],
    link: [
      {
        type: "external",
        link: "https://komodo-os.my.id",
      },
      {
        type: "github",
        link: "https://github.com/Komodo-OS-Devices/Komodo-OS-Devices.github.io/tree/react",
      },
    ],
  },
  {
    year: 2022,
    title: "Personal Website V1",
    made: "Personal Project",
    tech: ["React", "Sass", "Bootstrap"],
    link: [
      {
        type: "github",
        link: "https://github.com/aryanataandi/aryanataandi-react",
      },
    ],
  },
  {
    year: 2022,
    title: "Health Center Management System",
    made: "Mitra Solusi",
    tech: ["PHP", "CodeIgniter", "Firebird", "Rest API"],
    link: [
      {
        type: "external",
        link: "http://simpus.salatiga.go.id/simpus/online",
      },
    ],
  },
  {
    year: 2021,
    title: "Research Paper (Bachelor Thesis)",
    made: "Satya Wacana Christian University",
    tech: ["PHP", "CodeIgniter", "MySQL", "Scrum Methodology"],
    link: [
      {
        type: "external",
        link: "https://jurnal.itg.ac.id/index.php/algoritma/article/view/869",
      },
    ],
  },
  {
    year: 2021,
    title: "Inventory Management System",
    made: "Personal Project",
    tech: ["PHP", "JavaScript", "CodeIgniter", "MySQL"],
    link: [
      {
        type: "external",
        link: "https://drive.google.com/drive/folders/1C6mf46NZtH5WfGqhd5z2FkWBhB-wPgbv?usp=share_link",
      },
    ],
  },
  {
    year: 2021,
    title: "Web Based Wedding Invitation",
    made: "Personal Project",
    tech: ["HTML", "CSS", "JavaScript"],
    link: [
      {
        type: "external",
        link: "https://aryanataandi.github.io/html-wedding-invitation",
      },
      {
        type: "github",
        link: "https://github.com/aryanataandi/html-wedding-invitation",
      },
    ],
  },
  {
    year: 2021,
    title: "Mitra Online Shop",
    made: "UPTD SPNF SKB Salatiga",
    tech: ["PHP", "HTML", "CSS", "CodeIgniter", "MySQL"],
    link: [
      {
        type: "external",
        link: "https://belanja.skb.salatiga.go.id",
      },
      {
        type: "github",
        link: "https://github.com/aryanataandi/skb-olshop",
      },
    ],
  },
];

export default function Projects() {
  return (
    <div className="mt-48">
      <Head>
        <title>Project Archive | Aryanata Andipradana</title>
      </Head>
      <div>
        <h2 className="leading-none mb-4">Project Archive</h2>
        <p className="text-body text-purple-500">
          List of all things I've built
        </p>
      </div>
      <div className="mt-16 mb-48">
        <table className="w-full text-sm text-left text-secondary">
          <thead className="text-secondary uppercase">
            <tr>
              <th scope="col" className="py-3 pr-4">
                Year
              </th>
              <th scope="col" className="py-3">
                Title
              </th>
              <th scope="col" className="py-3 hidden md:table-cell">
                Made at
              </th>
              <th scope="col" className="py-3 hidden md:table-cell">
                Tech
              </th>
              <th scope="col" className="py-3">
                Link
              </th>
            </tr>
          </thead>
          <tbody>
            {data.map((x, i) => {
              return (
                <tr key={i}>
                  <td className="py-4 pr-4 text-purple-500">{x.year}</td>
                  <th
                    scope="row"
                    className="py-4 pr-4 font-medium text-white whitespace-nowrap"
                  >
                    {x.title}
                  </th>
                  <td className="py-4 pr-4 hidden md:table-cell">{x.made}</td>
                  <td className="py-4 pr-4 hidden md:table-cell">
                    {x.tech.join(" · ")}
                  </td>
                  <td className="py-4 flex">
                    {x.link.map((x, index) => {
                      return (
                        <a
                          className="icon mr-1"
                          href={x.link}
                          target="_blank"
                          rel="noreferrer"
                          key={index}
                        >
                          {x.type === "external" ? (
                            <ExternalLink />
                          ) : x.type === "github" ? (
                            <Github />
                          ) : (
                            "-"
                          )}
                        </a>
                      );
                    })}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <small className="text-white text-opacity-20">* and many projects that i can't mention</small>
      </div>
    </div>
  );
}
