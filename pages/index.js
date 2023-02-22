import Head from "next/head";
import Hero from "../components/Hero";
import HomeExperiences from "../components/HomeExperiences";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Head>
        <title>Milonga city</title>
        <meta name="description" content="Milonga city" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className="text-3xl">
        <Hero />
        <HomeExperiences />
      </section>
      <section>
        <Footer />
      </section>
    </>
  );
}

//TODO hacer pagina de card
//TODO hacer responsive d esa pagina
//TODO 
