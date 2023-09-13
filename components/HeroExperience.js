import Image from 'next/image';

const HeroExperience = ({ id }) => {
  return (
    <section className="w-full">
      <div className=" w-full h-[200px] relative text-white">
        {/* <div className=" z-10 font-bold text-7xl absolute bottom-[40px] right-[160px] max-[720px]:right-[80px] max-[720px]:bottom-2 max-[720px]:text-6xl max-[530px]:text-4xl max-[530px]:right-[80px]"></div> */}
        <div>
          <img
            src={`/Images/banner/${id}.jpg`}
            alt="Dos personas bailando tango"
            className=" h-[200px] object-cover w-full"
          />
        </div>
        <div className="absolute top-0 left-0 z-20 w-full h-[200px] bg-[#00000066]"></div>
      </div>
    </section>
  );
};

export default HeroExperience;
