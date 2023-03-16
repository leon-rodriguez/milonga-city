import Head from 'next/head';
import Footer from '../../../components/Footer';
import HeroExperience from '../../../components/HeroExperience';
import WhatsappButton from '../../../components/WhatsappButton';
import { useRouter } from 'next/router';
import { experiencesList } from '../../api/experiences.js';

const Experience = () => {
  const router = useRouter();
  const id = router.query.id;
  const element = experiencesList.find((item) => {
    return item.id == id;
  });
  console.log(element);
  return (
    <>
      <Head>
        <title>Milonga city</title>
        <meta name="description" content="Milonga city" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section>
        <HeroExperience />
      </section>
      {/* <section className="text-3xl">
        <Experience />
      </section> */}
      <section className="w-full flex justify-end">
        <iframe
          src={`https://fareharbor.com/embeds/book/milonga-city/items/${element.extId}/?full-items=yes&flow=546049`}
          width="100%"
          height="1600px"
          className="mt-10"
        ></iframe>
      </section>
      <section>
        <WhatsappButton />
        <Footer />
      </section>
    </>
  );
};

// export async function getServerSideProps() {
//   return experiencesList;
// }

export default experience;
