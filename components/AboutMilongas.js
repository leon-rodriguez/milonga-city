import Image from 'next/image';
import bailarines from '../public/Images/bailarines.jpg';
import { useInView } from 'react-intersection-observer';
import { useEffect, useState } from 'react';
import { useIntersectionObserver } from '@uidotdev/usehooks';
import {
  AboutMilongaBlockImgLeft,
  AboutMilongaBlockImgRight,
} from './AboutMilongaBlock';
// import { scrollContext } from './Layout';
// import { useContext, useEffect, useState } from 'react';

const AboutMilongas = () => {
  const [firstImageInView, setFirstImageInView] = useState(false);
  const MILONGA_FEATURES = [
    {
      title: 'What is Tango? What are its origins?',
      // text: 'What is Tango? What are its origins? When and where was it born, and why? Let us embark on a journey through time, back to the year 1880. Buenos Aires, at that time, was a city of low-rise buildings, with streets paved in cobblestones. Horse-drawn carts were a common sight, and kerosene lanterns lit up the night. This is the world in which Tango was born. Immigration played a pivotal role in shaping the social, political, and cultural landscape of Argentina, significantly influencing the birth of Tango. The population of Argentina swelled as a diverse mix of Galicians, Basques, Andalusians, Turks, French, Syrians, and predominantly Italians flocked to the port of La Boca. This influx transformed Buenos Aires into a melting pot of cultures and a hub of pleasure and sensuality.',
      text: 'Discover the Origins of Tango, a captivating dance born in the vibrant city of Buenos Aires in 1880. The city, with its low-rise buildings, cobblestone streets, and night lit by kerosene lanterns, provided the perfect backdrop for the emergence of this passionate dance',
      src: '/Images/moreAboutMilongas/video1.mp4',
      refElement: 0,
    },
    {
      title: 'What does milonga mean?',
      // text: ' The term “milonga” indeed carries multiple meanings within the context of Tango. It refers to the event where Tango is danced, the rhythmic musical style that is typically faster than Tango, and the venue where people gather to dance. The individuals who frequent these events and passionately engage in the dance are known as “Milonguero” for men and “Milonguera” for women. These terms encapsulate the rich culture and tradition of Tango, reflecting its multifaceted nature and the deep connection of its practitioners to the dance. The abundance of milongas in Buenos Aires led Argentinians to coin the term “milonguear,” which means touring milongas. Attending a milonga can profoundly transform one’s understanding and appreciation of Tango. Interestingly, the same venue can host different milongas, each with its own name and atmosphere, depending on the organizer and the day of the week. Each milonga offers a unique experience, varying in formality, the average age of attendees, the skill level of the dancers, and how welcoming it is to newcomers.',
      text: 'Explore the multifaceted world of Tango and Milonga. In the vibrant Tango culture, ‘Milonga’ carries multiple meanings. It’s not just an event where the passionate Tango dance unfolds, but also a rhythmic musical style that’s typically faster than Tango. Moreover, ‘Milonga’ is the very venue where enthusiasts gather to dance. Frequent attendees, deeply engaged in the dance, are known as ‘Milonguero’ for men and ‘Milonguera’ for women',
      src: '/Images/moreAboutMilongas/image.bmp',
      refElement: 0,
    },
    {
      title: 'The Milonga and its codes',
      // text: 'Interestingly, the same venue can host different milongas, each with its own name and atmosphere, depending on the organizer and the day of the week. Each milonga offers a unique experience, varying in formality, the average age of attendees, the skill level of the dancers, and how welcoming it is to newcomers. In the world of milongas, etiquette plays a crucial role. One such invitation method is the “cabeceo.” Predominantly used in traditional milongas, the cabeceo is a non-verbal invitation to dance. The man makes focused and precise eye contact with the woman and gives a clear nod. If the woman reciprocates the nod, it signifies her acceptance of the invitation. If she’s not interested, she will simply look away or ignore the nod. This subtle yet effective communication is an integral part of milonga etiquette. It ensures a respectful and enjoyable experience for all attendees.',
      text: 'Dive into the World of Tango and Milonga, where a single venue transforms to host different ‘milongas’, each offering a unique atmosphere and experience. Depending on the organizer and the day, each milonga varies in formality, attendee age, dancer skill level, and its welcoming nature to newcomers. A key part of milonga etiquette is the ‘cabeceo’, a non-verbal invitation to dance used predominantly in traditional milongas.',
      src: '/Images/moreAboutMilongas/video2.mp4',
      refElement: 0,
    },
  ];

  return (
    <div className="min-h-[2000px] w-full grid grid-rows-[1fr_18fr] overflow-x-hidden">
      <div className="w-full p-6">
        <div id="milonga" className="w-full text-center text-5xl">
          MORE ABOUT TANGO & MILONGAS
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
