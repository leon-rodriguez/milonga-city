import { useState } from 'react';
import Carrousel from './Carrousel';

const GalleryExperience = ({ data }) => {
  const [imageClicked, setImageClicked] = useState(null);

  const handleClick = (index) => {
    setImageClicked(index);
  };

  return (
    <div>
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
        {data &&
          data.images.map((element, index) => {
            if (index > 2) {
              return;
            }
            //TODO arreglar como se ven las imagenes en mobile
            return (
              <div
                className={`${
                  index === 0 ? 'col-span-2' : ''
                } cursor-pointer overflow-hidden ${
                  index <= 1
                    ? 'max-[720px]:col-span-2'
                    : 'max-[720px]:col-span-1'
                } `}
                key={index}
                onClick={() => {
                  handleClick(index);
                }}
              >
                <img
                  src={element}
                  alt="Dos personas bailando tango"
                  className="w-full h-full object-cover ease-out duration-300 hover:scale-110"
                />
              </div>
            );
          })}
        <div className="absolute w-28 h-12 cursor-pointer bg-slate-50 text-black grid place-items-center rounded-xl left-2 top-4">
          Ver galeria
        </div>
      </div>
      {imageClicked != null ? (
        <Carrousel
          images={data.images}
          firstIndex={imageClicked}
          handleClose={handleClick}
        />
      ) : (
        ''
      )}
    </div>
  );
};

export default GalleryExperience;
