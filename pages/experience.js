import Head from 'next/head';
import Footer from '../components/Footer';
import Experience from '../components/Experience';
import HeroExperience from '../components/HeroExperience';
import WhatsappButton from '../components/WhatsappButton';

const experience = () => {
  return (
    <>
      <Head>
        <title>Milonga city</title>
        <meta name="description" content="Milonga city" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HeroExperience />
      <section className="text-3xl">
        <Experience />
      </section>
      <section>
        <WhatsappButton />
        <Footer />
      </section>
    </>
  );
};

export default experience;
