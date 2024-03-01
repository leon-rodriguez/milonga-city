import Image from 'next/image';
import bailarines from '../public/Images/bailarines.jpg';
import { useInView } from 'react-intersection-observer';
import { useEffect, useState } from 'react';
import { useIntersectionObserver } from '@uidotdev/usehooks';
import {
  AboutMilongaBlockImgLeft,
  AboutMilongaBlockImgRight,
} from './AboutMilongaBlock';
import { useTranslation } from 'react-i18next';

const AboutMilongas = () => {
  const [firstImageInView, setFirstImageInView] = useState(false);
  const { t } = useTranslation();
  const MILONGA_FEATURES = [
    {
      title: t('aboutMilongasFirstTitle'),
      // text: 'What is Tango? What are its origins? When and where was it born, and why? Let us embark on a journey through time, back to the year 1880. Buenos Aires, at that time, was a city of low-rise buildings, with streets paved in cobblestones. Horse-drawn carts were a common sight, and kerosene lanterns lit up the night. This is the world in which Tango was born. Immigration played a pivotal role in shaping the social, political, and cultural landscape of Argentina, significantly influencing the birth of Tango. The population of Argentina swelled as a diverse mix of Galicians, Basques, Andalusians, Turks, French, Syrians, and predominantly Italians flocked to the port of La Boca. This influx transformed Buenos Aires into a melting pot of cultures and a hub of pleasure and sensuality.',
      text: t('aboutMilongasFirstBody'),
      src: '/Images/moreAboutMilongas/video1.mp4',
      refElement: 0,
    },
    {
      title: t('aboutMilongasSecondTitle'),
      // text: ' The term “milonga” indeed carries multiple meanings within the context of Tango. It refers to the event where Tango is danced, the rhythmic musical style that is typically faster than Tango, and the venue where people gather to dance. The individuals who frequent these events and passionately engage in the dance are known as “Milonguero” for men and “Milonguera” for women. These terms encapsulate the rich culture and tradition of Tango, reflecting its multifaceted nature and the deep connection of its practitioners to the dance. The abundance of milongas in Buenos Aires led Argentinians to coin the term “milonguear,” which means touring milongas. Attending a milonga can profoundly transform one’s understanding and appreciation of Tango. Interestingly, the same venue can host different milongas, each with its own name and atmosphere, depending on the organizer and the day of the week. Each milonga offers a unique experience, varying in formality, the average age of attendees, the skill level of the dancers, and how welcoming it is to newcomers.',
      text: t('aboutMilongasSecondBody'),
      src: '/Images/moreAboutMilongas/image.bmp',
      refElement: 0,
    },
    {
      title: t('aboutMilongasThirdTitle'),
      text: t('aboutMilongasThirdBody'),
      src: '/Images/moreAboutMilongas/video2.mp4',
      refElement: 0,
    },
  ];

  return (
    <div className="min-h-[2000px] w-full grid grid-rows-[1fr_18fr] overflow-x-hidden">
      <div className="w-full p-6">
        <div id="milonga" className="w-full text-center text-5xl">
          {t('aboutMilongasTitle')}
        </div>
      </div>
      <div className=" w-full grid grid-rows-[1fr_1fr_1fr]">
        {MILONGA_FEATURES &&
          MILONGA_FEATURES.map((item, index) => {
            return index % 2 === 0 ? (
              <AboutMilongaBlockImgLeft
                key={index}
                text={item.text}
                src={item.src}
                title={item.title}
              />
            ) : (
              <AboutMilongaBlockImgRight
                key={index}
                text={item.text}
                src={item.src}
                title={item.title}
              />
            );
          })}
      </div>
    </div>
  );
};

export default AboutMilongas;
