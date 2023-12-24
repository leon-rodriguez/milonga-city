import Head from 'next/head';
import Hero from '../components/Hero';
import Footer from '../components/Footer';
import WhatsappButton from '../components/WhatsappButton';
import ContactForm from '../components/ContactForm';
import HeroExperience from '../components/HeroExperience';

export default function Contact() {
  return (
    <>
      <Head>
        <title>Milonga city</title>
        <meta name="description" content="Milonga city" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section>
        <HeroExperience id={1} />
      </section>
      <section className="min-h-[200px]">
        <ContactForm />
      </section>
      <section>
        <Footer />
        <WhatsappButton />
      </section>
    </>
  );
}
