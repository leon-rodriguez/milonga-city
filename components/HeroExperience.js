import Image from 'next/image';

const HeroExperience = ({ id }) => {
  return (
    <section className="w-full">
      <div className=" w-full h-[200px] relative text-white">
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
