import "../styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import Image from "next/image";
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Bonfire</title>
        <meta
          name="description"
          content="Stream anime from the the comfort of your bonfire."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
      {/* <footer className="footer">
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className="logo">
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer> */}
    </>
  );
}

export default MyApp;
