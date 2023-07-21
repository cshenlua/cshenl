import Head from "next/head";
import Image from "next/image";
import About from "../components/About";
import Navbar from "../components/Navbar";
import Main from "../components/Main";
import Skills from "../components/Skills";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Shen | Full-Stack Web Developer</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <Main />
      <About />
      <Skills />
    </div>
  );
}
