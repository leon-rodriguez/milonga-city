import Image from 'next/image';
import bailarines from '../public/Images/bailarines.jpg';

const AboutMilongas = () => {
  return (
    <div className="min-h-[2000px] w-full grid grid-rows-[1fr_18fr]">
      <div className="w-full p-6 border border-b-[#0088cc]">
        <div id="milonga" className="w-full text-center text-5xl">
          MORE ABOUT MILONGAS
        </div>
      </div>
      <div className=" w-full grid grid-rows-[1fr_1fr_1fr]">
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
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 w-full bg-[#f0f0f0] max-[800px]:grid-cols-1">
          <div className="flex justify-end items-center max-[800px]:justify-center max-[800px]:items-start max-[800px]:order-1">
            <div className="w-3/4 mr-10 max-[800px]:mr-0 max-[400px]:text-sm">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </div>
          </div>
          <div className=" flex justify-start items-center max-[800px]:justify-center max-[800px]:-order-1">
            <Image
              className=" object-cover h-[350px] w-3/4 ml-10 border-4 border-[#01bdba] max-[800px]:ml-0 max-[800px]:w-10/12"
              src={bailarines}
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
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </div>
          </div>
        </div>
        {/* <div className="grid grid-cols-2 w-full border border-lime-400 max-[800px]:grid-cols-1  ">
          <div className=" grid place-items-center  border border-l-orange-700 max-[800px]:h-[400px]">
            <Image
              className=" object-cover p-8 h-[300px] w-[550px] max-[800px]:h-[400px]"
              src={bailarines}
              alt="bailarines de tango"
            />
          </div>
          <div className="grid place-items-center p-24 max-[1024px]:p-8 max-[800px]:place-items-start">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </div>
        </div>
        <div className="grid grid-cols-2 w-full border border-lime-400 max-[800px]:grid-cols-1  ">
          <div className=" grid place-items-center  border border-l-orange-700 max-[800px]:h-[400px]">
            <Image
              className=" object-cover p-8 h-[300px] w-[550px] max-[800px]:h-[400px]"
              src={bailarines}
              alt="bailarines de tango"
            />
          </div>
          <div className="grid place-items-center p-24 max-[1024px]:p-8 max-[800px]:place-items-start">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default AboutMilongas;
