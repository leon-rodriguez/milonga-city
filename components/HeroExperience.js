import Image from 'next/image';
import bailarines from '../public/Images/bailarines.jpg';

const HeroExperience = () => {
  return (
    <section className="w-full">
      <div className=" w-full h-[200px] relative text-white">
        <div className=" z-10 font-bold text-7xl absolute bottom-[40px] right-[160px] max-[720px]:right-[80px] max-[720px]:bottom-2 max-[720px]:text-6xl max-[530px]:text-4xl max-[530px]:right-[80px]"></div>
        <div>
          <Image
            src={bailarines}
            alt="Dos personas bailando tango"
            className=" h-[200px] object-cover w-full"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroExperience;
