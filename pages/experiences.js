import Head from "next/head";
import HeroExperiences from "../components/HeroExperiences";
import ContainerExperiences from "../components/ContainerExperiences";
import Footer from "../components/Footer";
import WhatsappButton from "../components/WhatsappButton";
import HomeExperiences from "../components/HomeExperiences";

export default function Home() {
  return (
    <>
      <Head>
        <title>Milonga city</title>
        <meta name="description" content="Milonga city" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className="pt-20 ">
        <HomeExperiences />
      </section>
      <section>
        <WhatsappButton />
        <Footer />
      </section>
    </>
  );
}
