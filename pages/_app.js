import "../styles/globals.css";
import Head from "next/head";
import Layout from "../components/Layout";
import { motion } from "framer-motion";
import { useRouter } from "next/router";

function MyApp({ Component, pageProps }) {
  const router = useRouter();

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
      <motion.div
        className="my-container min-h-screen"
        key={router.route}
        initial="pageInitial"
        animate="pageAnimate"
        variants={{
          pageInitial: {
            opacity: 0,
          },
          pageAnimate: {
            opacity: 1,
          },
        }}
      >
        <Component {...pageProps} />
      </motion.div>
    </Layout>
  );
}

export default MyApp;
