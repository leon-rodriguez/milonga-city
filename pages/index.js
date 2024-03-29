import Head from 'next/head';
import Hero from '../components/Hero';
import HomeExperiences from '../components/HomeExperiences';
import Footer from '../components/Footer';
import WhatsappButton from '../components/WhatsappButton';
import AboutMilongas from '../components/AboutMilongas';

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
