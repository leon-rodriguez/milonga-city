import Image from "next/image";
import bailarines from "../public/Images/bailarines.jpg";

const HeroExperiences = () => {
  return (
    <section>
      <div className="w-full h-[400px] relative text-white">
        <div className=" text-7xl absolute bottom-1/4 left-40">Services</div>
        <Image
          src={bailarines}
          alt="Dos personas bailando tango"
          className="w-full h-full object-cover"
        />
      </div>
    </section>
  );
};

export default HeroExperiences;
