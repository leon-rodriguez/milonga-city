import Head from "next/head";
import Hero from "../components/Hero";

export default function Home() {
  return (
    <>
      <Head>
        <title>Milonga city</title>
        <meta name="description" content="Milonga city" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className="text-3xl font-bold underline">
        <Hero />
        <article className="h-96 p-6">Contenidos del home</article>
      </section>
    </>
  );
}

//TODO: create hero component
//TODO: set background img
//TODO: set top gradient z indez and absolute
