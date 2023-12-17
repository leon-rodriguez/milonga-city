import Head from 'next/head';
import Footer from '../../../components/Footer';
import HeroExperience from '../../../components/HeroExperience';
import WhatsappButton from '../../../components/WhatsappButton';
import Booking from '../../../components/Booking';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';

const Experience = () => {
  const router = useRouter();
  const id = router.query.id;
  // id is the hash that will be received
  const [data, setData] = useState(null);
  useEffect(() => {
    if (!id) {
      return;
    }
    fetch(`http://localhost:3000/api/bookings`)
      .then((results) => {
        return results.json();
      })
      .then((results) => {
        const returnBooking = results.data.find((item) => {
          if (item.url_hash == id) {
            return item;
          }
        });
        setData(returnBooking);
      });
  }, [id]);
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
      <section className="w-full flex justify-center bg-[#f0f0f0]">
        <Booking data={data} />
      </section>
      <section>
        <WhatsappButton />
        <Footer />
      </section>
    </>
  );
};

export default Experience;
