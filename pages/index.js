import Head from "next/head";
import Hero from "../components/Hero";
import HomeExperiences from "../components/HomeExperiences";
import Footer from "../components/Footer";
import WhatsappButton from "../components/WhatsappButton";
import AboutMilongas from "../components/AboutMilongas";
import { useEffect } from "react";

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
      </section>
      <section>
        <HomeExperiences />
        {/* <iframe src="./fareharbor.html" width="100%" height="500px"></iframe> */}
      </section>
      <section>
        <AboutMilongas />
      </section>
      <section>
        <Footer />
        <WhatsappButton />
      </section>
    </>
  );
}
