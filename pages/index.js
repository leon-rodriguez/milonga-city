import Head from "next/head";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import WhatsappButton from "../components/WhatsappButton";
import BannerWide from "../components/BannerWide";
import BannerGroup from "../components/BannerGroup";

export default function Home() {
  const SRCS = [
    "/Images/home/Brasil/Brasil1.jpg",
    "/Images/home/Brasil/Brasil2.jpg",
    "/Images/home/Brasil/Brasil4.jpg",
  ];

  const SRCS2 = [
    "/Images/home/Turquia/turquia1.jpg",
    "/Images/home/Turquia/turquia2.jpg",
    // "/Images/home/banner.jpg",
  ];

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
        <BannerWide
          title="Viaje Internacional"
          src="/Images/home/banner.jpg"
          description="Las mejores tarifas de aereos, hoteles, traslados, circuitos excursionesy mucho mas!"
        />
      </section>
      <section>
        <BannerGroup title="Enamorate de los encantos de Brasil" srcs={SRCS} />
      </section>
      <section>
        <BannerWide
          title="Viaje Internacional"
          src="/Images/home/bannerDisney.jpg"
        />
      </section>
      <section>
        <BannerGroup title="Viaje Internacional" srcs={SRCS2} />
      </section>
      <section>
        <Footer />
        <WhatsappButton />
      </section>
    </>
  );
}
