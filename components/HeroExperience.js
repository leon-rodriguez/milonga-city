import Image from 'next/image';
import bailarines from '../public/Images/bailarines.jpg';

const HeroExperience = () => {
  return (
    <section>
      {/* <div className="w-full h-[170px] relative text-white">
        <div className=" z-10 font-bold text-7xl absolute bottom-[20px] right-[160px] max-[720px]:right-[80px] max-[720px]:bottom-2 max-[720px]:text-6xl max-[530px]:text-4xl max-[530px]:right-[80px]">
          Experiences
        </div>
        {/* <div className="w-11/12 mx-auto">
          <Image
            src={bailarines}
            alt="Dos personas bailando tango"
            className=" h-[500px] object-cover"
          />
        </div> 
    </div> */}
    </section>
  );
};

export default HeroExperience;
