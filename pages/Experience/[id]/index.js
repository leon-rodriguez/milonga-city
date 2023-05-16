import Head from 'next/head';
import Footer from '../../../components/Footer';
import HeroExperience from '../../../components/HeroExperience';
import WhatsappButton from '../../../components/WhatsappButton';
import ContainerExperience from '../../../components/ContainerExperience';
import { useRouter } from 'next/router';
import { useState, useEffect, useRef } from 'react';

const Experience = () => {
  const router = useRouter();
  const id = router.query.id;
  console.log('id ', id);
  const [data, setData] = useState(null);
  useEffect(() => {
    fetch(`http://localhost:3000/api/experiences`)
      .then((results) => {
        return results.json();
      })
      .then((results) => {
        // console.log(results.data);
        // setData(results.data);
        const devolverCard = results.data.find((item) => {
          if (item.id == id) {
            console.log(`el item que se encontro es: ${item.title}`);
            return item;
          }
        });
        console.log(devolverCard, 'la pija esta devovler card');
        setData(devolverCard);
        console.log('data es ', data);
      });
  }, []);
  // const element = experiencesList.find((item) => {
  //   return item.id == id;
  // });
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
      <section className="w-full flex justify-center bg-[#f0f0f0]">
        <ContainerExperience />
        {/* {!data && 'cargando :('}
        {data && (
          <iframe
            src={`https://fareharbor.com/embeds/book/milonga-city/items/${data.extid}/?full-items=yes&flow=546049`}
            width="100%"
            height="1600px"
            className="mt-10"
          ></iframe>
        )} */}
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

export default Experience;
