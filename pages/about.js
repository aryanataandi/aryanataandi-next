import Head from "next/head";

export default function Archive() {
  return (
    <section className="mt-48">
      <Head>
        <title>About Me | Aryanata Andipradana</title>
      </Head>
      <h2 className="leading-none mb-8">
        About Me<span className="text-purple-500">.</span>
      </h2>
      <div className="text-secondary">
        <p className="text-xl mb-8">
          My name is Aryanata Andipradana, but you can call me Ryan.
        </p>
        <p className="text-xl mb-8">
          I have extensive experience in developing web applications using PHP,
          and I'm currently expanding my skills in front-end web development.
        </p>
        <p className="text-xl mb-8">
          Aside from coding, I enjoy designing and developing digital products
          like creating animations and videos. I have a keen interest in new
          technologies, as well as in gaming, photography, videography, and
          memes.
        </p>
      </div>
    </section>
  );
}
