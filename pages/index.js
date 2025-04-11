import Head from "next/head";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import WhatsappButton from "../components/WhatsappButton";
import BannerWide from "../components/BannerWide";
import BannerGroup from "../components/BannerGroup";

export default function Home() {
  const ARG_DATA = [
    {
      src: "/Images/home/Argentina/BuenosAires.jpg",
      title: "Buenos Aires",
      href: "/experiences",
    },
    {
      src: "/Images/home/Argentina/PeritoMoreno.jpg",
      title: "Perito Moreno",
      href: "/contact",
    },
    {
      src: "/Images/home/Argentina/Salta.jpg",
      title: "Salta",
      href: "/contact",
    },
  ];

  const REDOM_DATA = [
    {
      src: "/Images/home/Dominicana/Dominicana1.jpg",
      title: "Dominicana",
      href: "https://milongacity.paquetedinamico.com/es/257/republica-dominicana/moreideas?agency=444864",
    },
    {
      src: "/Images/home/Dominicana/Dominicana2.jpg",
      title: "Dominicana",
      href: "https://milongacity.paquetedinamico.com/es/257/republica-dominicana/moreideas?agency=444864",
    },
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
          src="/Images/home/Inter/Inter.jpg"
          description="Las mejores tarifas de aereos, hoteles, traslados, circuitos excursionesy mucho mas!"
          href="https://milongacity.paquetedinamico.com/"
        />
      </section>
      <section>
        <BannerGroup
          title="Enamorate de los encantos de Argentina"
          data={ARG_DATA}
        />
      </section>
      <section>
        <BannerWide
          title="Disney + Universal"
          description="Salidas grupales con aéreos de cupo y viajes a medida"
          src="/Images/home/Disney/Disney.jpg"
          href="https://milongacity.paquetedinamico.com/es/24/estados-unidos/moreideas"
        />
      </section>
      <section>
        <BannerGroup title="Viaje Internacional" data={REDOM_DATA} />
      </section>
      <section>
        <BannerWide
          title="Viaje a Brasil"
          src="/Images/home/Brasil/Brasil.jpg"
          href="https://milongacity.paquetedinamico.com/es/16/brasil/moreideas"
        />
      </section>
      <section>
        <Footer />
        <WhatsappButton />
      </section>
    </>
  );
}
