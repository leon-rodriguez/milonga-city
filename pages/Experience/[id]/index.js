import Head from "next/head";
import Footer from "../../../components/Footer";
import HeroExperience from "../../../components/HeroExperience";
import WhatsappButton from "../../../components/WhatsappButton";
import ContainerExperience from "../../../components/ContainerExperience";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";

const Experience = () => {
  const router = useRouter();
  const id = router.query.id;
  const [data, setData] = useState(null);
  useEffect(() => {
    fetch(`/api/experiences`)
      .then((results) => {
        return results.json();
      })
      .then((results) => {
        const devolverCard = results.data.find((item) => {
          if (item.id == id) {
            return item;
          }
        });
        setData(devolverCard);
      });
  }, []);
  return (
    <>
      <Head>
        <title>Milonga city</title>
        <meta name="description" content="Milonga city" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* <section>
        <HeroExperience id={id} />
      </section> */}
      <section className="w-full flex justify-center bg-[#f0f0f0]">
        <ContainerExperience id={id} />
      </section>
      <section>
        <WhatsappButton />
        <Footer />
      </section>
    </>
  );
};

export default Experience;
