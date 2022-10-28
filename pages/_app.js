import "../styles/globals.css";
import Head from "next/head";
import Layout from "../components/Layout";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Head>
        <title>Aryanata Andipradana</title>
        <meta
          name="description"
          content="Welcome to Aryanata Andi's Official Website"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="my-container min-h-screen">
        <Component {...pageProps} />
      </div>
    </Layout>
  );
}

export default MyApp;
