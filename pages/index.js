import Head from "next/head";
import Hero from "../components/Hero";
import HomeExperiences from "../components/HomeExperiences";
import Footer from "../components/Footer";
import WhatsappButton from "../components/WhatsappButton";
import AboutMilongas from "../components/AboutMilongas";
import BannerInternational from "../components/BannerInternational";

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
        <BannerInternational
          title="Viaje Internacional"
          src="/Images/home/banner.jpg"
          description="Las mejores tarifas de aereos, hoteles, traslados, circuitos excursionesy mucho mas!"
        />
      </section>
      <section>
        <BannerInternational
          title="Viaje Internacional"
          src="/Images/home/banner.jpg"
        />
      </section>
      <section>
        <BannerInternational
          title="Viaje Internacional"
          src="/Images/home/banner.jpg"
        />
      </section>
      <section>
        <Footer />
        <WhatsappButton />
      </section>
    </>
  );
}
