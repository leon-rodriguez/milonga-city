import { useState, useEffect, useRef } from 'react';
import { BsArrowLeftCircle, BsArrowRightCircle } from 'react-icons/bs';

const Carrousel = ({ images, firstIndex, handleClose }) => {
  const flag = useRef(false);
  document.documentElement.style.overflow = 'hidden';
  document.documentElement.scrollTop = 0; // Para navegadores modernos
  document.body.scrollTop = 0; // Para navegadores antiguos

  const [index, setIndex] = useState(firstIndex);

  useEffect(() => {
    return () => {
      if (flag.current) {
        document.documentElement.style.overflow = 'visible';
      }
      flag.current = true;
    };
  }, []);

  const handleRightClick = () => {
    if (index + 1 === images.length) {
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
  };

  const handleLefttClick = () => {
    if (index === 0) {
      setIndex(images.length - 1);
    } else {
      setIndex(index - 1);
    }
  };
  return (
    <div className="w-full h-screen absolute top-0 left-0 bg-[#000000ff] grid grid-rows-[60px_auto] z-[600] text-white">
      <div className="">
        <button
          className="w-[100px] h-10 border-2 bg-[#ffffff00] border-[#ffffff99] rounded-2xl flex justify-center items-center mt-4 ml-4 transition-all ease-in duration-100 hover:border-[#ffffffff] hover:bg-[#ffffff33]"
          onClick={() => {
            document.documentElement.style.overflow = 'visible';
            handleClose(null);
          }}
        >
          Close
        </button>
        <div className="flex justify-center items-end text-2xl">
          {index + 1}/{images.length}
        </div>
      </div>
      <div className="flex justify-center items-start p-8 relative w-screen h-screen">
        <div className="flex justify-center items-center w-full h-full">
          <BsArrowLeftCircle
            className="text-5xl absolute rounded-full left-10 cursor-pointer transition-all duration-100 hover:bg-white hover:text-black"
            onClick={handleLefttClick}
          />
          <img
            src={images[index]}
            className="w-[70%] max-[800px]:w-[100%] h-[70%] select-none object-cover"
          />
          <BsArrowRightCircle
            className="text-5xl absolute rounded-full right-10 cursor-pointer transition-all duration-100 hover:bg-white hover:text-black"
            onClick={handleRightClick}
          />
        </div>
      </div>
    </div>
  );
};

export default Carrousel;
