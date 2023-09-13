import Image from 'next/image';
import bailarines from '../public/Images/bailarines.jpg';
import { useState, useEffect } from 'react';
import LoaderSpinner from './LoaderSpinner';

const GalleryExperience = ({ id }) => {
  const [data, setData] = useState();

  useEffect(() => {
    if (!id) return;
    fetch(`http://localhost:3000/api/experiences/${id}`)
      .then((results) => {
        return results.json();
      })
      .then((results) => {
        setData(results.data);
        console.log('from experiences data', results.data.video);
      });
  }, [id]);

  return (
    <div className="w-full h-[450px] grid grid-cols-5 grid-rows-2 gap-2 relative">
      <div className=" col-span-3 row-span-2 max-[720px]:col-span-5 max-[720px]:row-span-1">
        {!data ? (
          <div className=" bg-gray-100 h-full"></div>
        ) : (
          <video muted loop autoPlay className=" h-full w-full object-cover">
            <source src={data.video} type="video/mp4"></source>
          </video>
        )}
      </div>
      <div className="col-span-2 cursor-pointer overflow-hidden max-[720px]:col-span-2">
        <Image
          src={bailarines}
          alt="Dos personas bailando tango"
          className="w-full h-full object-cover ease-out duration-300 hover:scale-110"
        />
      </div>
      <div className="cursor-pointer overflow-hidden max-[720px]:col-span-2">
        <Image
          src={bailarines}
          alt="Dos personas bailando tango"
          className="w-full h-full object-cover ease-out duration-300 hover:scale-110"
        />
      </div>
      <div className="cursor-pointer overflow-hidden max-[720px]:col-span-1">
        <Image
          src={bailarines}
          alt="Dos personas bailando tango"
          className="w-full h-full object-cover ease-out duration-300 hover:scale-110"
        />
      </div>
      <div className="absolute w-28 h-12 cursor-pointer bg-slate-50 text-black grid place-items-center rounded-xl left-2 top-4">
        Ver galeria
      </div>
    </div>
  );
};

export default GalleryExperience;
