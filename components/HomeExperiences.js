import Card from './Card';
import { homeList } from '../pages/api/home';
import { useState, useEffect } from 'react';
import LoaderSpinner from './LoaderSpinner';
import { useParallax } from 'react-scroll-parallax';
import { useTranslation } from 'react-i18next';

const HomeExperiences = () => {
  const [data, setData] = useState(null);
  const { t } = useTranslation();

  useEffect(() => {
    fetch(`/api/experiences`)
      .then((results) => {
        return results.json();
      })
      .then((results) => {
        setData(results.data);
      });
  }, []);

  return (
    <article className=" p-6 max-[420px]:px-0 bg-[#f0f0f0] min-h-[750px]">
      <h1 className="text-center font-bold text-4xl mb-2">
        {t('homeExperiencesTitle')}
      </h1>
      <h3 className="text-center text-lg mb-8">{t('homeExperiencesDesc')}</h3>
      <div className="flex justify-evenly flex-wrap">
        {!data && <LoaderSpinner size={80} />}
        {data && data.length === 0 && 'Experiences aren`t available'}
        {data &&
          data.length > 0 &&
          data.map((item) => <Card key={item.id} data={item} />)}
      </div>
    </article>
  );
};

export async function getServerSideProps() {
  //   try {
  //     // Fetch data from external API
  //     const res = await fetch(`http://localhost:3000/api/experiences`);
  //     const data = await res.json();

  //     // Pass data to the page via props
  //     return { props: { data } };
  //   } catch (error) {
  //     throw new Error(error);
  //   }
  return homeList;
}

export default HomeExperiences;
