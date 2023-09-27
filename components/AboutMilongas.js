import Image from 'next/image';
import bailarines from '../public/Images/bailarines.jpg';
import { useInView } from 'react-intersection-observer';
import { useEffect, useState } from 'react';
// import { scrollContext } from './Layout';
// import { useContext, useEffect, useState } from 'react';

const AboutMilongas = () => {
  // const scrollY = useContext(scrollContext);
  // const [showFirstAnimation, setShowFirstAnimation] = useState(false);
  // const maxYScroll = 1130;

  // useEffect(() => {
  //   if (showFirstAnimation === false && scrollY > maxYScroll) {
  //     setShowFirstAnimation(true);
  //   }
  // }, [scrollY]);
  const [firstImageInView, setFirstImageInView] = useState(false);

  const { ref, inView, entry } = useInView({
    threshold: 0,
  });

  useEffect(() => {
    if (!firstImageInView && inView) {
      setFirstImageInView(true);
    }
  }, [inView]);

  // const { ref2, inView2, entry2 } = useInView({
  //   threshold: 0,
  // });

  // const { ref3, inView3, entry3 } = useInView({
  //   threshold: 0,
  // });

  return (
    <div className="min-h-[2000px] w-full grid grid-rows-[1fr_18fr]">
      <div className="w-full p-6">
        <div id="milonga" className="w-full text-center text-5xl">
          MORE ABOUT TANGO & MILONGAS
        </div>
      </div>
      <div className=" w-full grid grid-rows-[1fr_1fr_1fr]">
        <div className="grid grid-cols-2 w-full max-[800px]:grid-cols-1 ">
          <div
            className={`flex justify-end items-center max-[800px]:justify-center transition-all duration-300 ease-out`}
          >
            <img
              className={`${
                firstImageInView ? 'about_left_appear' : ''
              } object-cover h-[350px] w-3/4 mr-10 border-4 border-[#01bdba] max-[800px]:mr-0 max-[800px]:w-10/12 opacity-0 `}
              src="/Images/bailarines.jpg"
              alt="bailarines de tango"
              ref={ref}
            />
          </div>
          <div
            className={`flex justify-start items-center max-[800px]:justify-center max-[800px]:items-start`}
          >
            <div
              className={`${
                firstImageInView ? 'about_right_appear' : ''
              } w-3/4 ml-10 opacity-0 max-[800px]:ml-0 max-[400px]:text-sm`}
            >
              What is Tango? What are its origins? When and where was it born,
              and why? Let us embark on a journey through time, back to the year
              1880. Buenos Aires, at that time, was a city of low-rise
              buildings, with streets paved in cobblestones. Horse-drawn carts
              were a common sight, and kerosene lanterns lit up the night. This
              is the world in which Tango was born. Immigration played a pivotal
              role in shaping the social, political, and cultural landscape of
              Argentina, significantly influencing the birth of Tango. The
              population of Argentina swelled as a diverse mix of Galicians,
              Basques, Andalusians, Turks, French, Syrians, and predominantly
              Italians flocked to the port of La Boca. This influx transformed
              Buenos Aires into a melting pot of cultures and a hub of pleasure
              and sensuality.
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 w-full bg-[#f0f0f0] max-[800px]:grid-cols-1">
          <div className="flex justify-end items-center max-[800px]:justify-center max-[800px]:items-start max-[800px]:order-1">
            <div
              className={`w-3/4 mr-10 max-[800px]:mr-0 max-[400px]:text-sm opacity-1`}
            >
              The term “milonga” indeed carries multiple meanings within the
              context of Tango. It refers to the event where Tango is danced,
              the rhythmic musical style that is typically faster than Tango,
              and the venue where people gather to dance. The individuals who
              frequent these events and passionately engage in the dance are
              known as “Milonguero” for men and “Milonguera” for women. These
              terms encapsulate the rich culture and tradition of Tango,
              reflecting its multifaceted nature and the deep connection of its
              practitioners to the dance. The abundance of milongas in Buenos
              Aires led Argentinians to coin the term “milonguear,” which means
              touring milongas. Attending a milonga can profoundly transform
              one’s understanding and appreciation of Tango. Interestingly, the
              same venue can host different milongas, each with its own name and
              atmosphere, depending on the organizer and the day of the week.
              Each milonga offers a unique experience, varying in formality, the
              average age of attendees, the skill level of the dancers, and how
              welcoming it is to newcomers.
            </div>
          </div>
          <div className=" flex justify-start items-center max-[800px]:justify-center max-[800px]:-order-1">
            <img
              className={` object-cover h-[350px] w-3/4 ml-10 border-4 border-[#01bdba] max-[800px]:ml-0 max-[800px]:w-10/12`}
              src="/Images/bailarines.jpg"
              alt="bailarines de tango"
            />
          </div>
        </div>
        <div className="grid grid-cols-2 w-full max-[800px]:grid-cols-1  ">
          <div className=" flex justify-end items-center max-[800px]:justify-center ">
            <Image
              className=" object-cover h-[350px] w-3/4 mr-10 border-4 border-[#01bdba] max-[800px]:mr-0 max-[800px]:w-10/12"
              src={bailarines}
              alt="bailarines de tango"
            />
          </div>
          <div className="flex justify-start items-center max-[800px]:justify-center max-[800px]:items-start">
            <div className="w-3/4 ml-10 max-[800px]:ml-0 max-[400px]:text-sm">
              Interestingly, the same venue can host different milongas, each
              with its own name and atmosphere, depending on the organizer and
              the day of the week. Each milonga offers a unique experience,
              varying in formality, the average age of attendees, the skill
              level of the dancers, and how welcoming it is to newcomers. In the
              world of milongas, etiquette plays a crucial role. One such
              invitation method is the “cabeceo.” Predominantly used in
              traditional milongas, the cabeceo is a non-verbal invitation to
              dance. The man makes focused and precise eye contact with the
              woman and gives a clear nod. If the woman reciprocates the nod, it
              signifies her acceptance of the invitation. If she’s not
              interested, she will simply look away or ignore the nod. This
              subtle yet effective communication is an integral part of milonga
              etiquette. It ensures a respectful and enjoyable experience for
              all attendees.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMilongas;
