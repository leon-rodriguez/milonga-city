import Image from 'next/image';
import bailarines from '../public/Images/bailarines.jpg';
import minecraft from '../public/Images/minecraft.png';
import { useRef } from 'react';
import {
  HiArrowSmLeft,
  HiArrowSmRight,
  IoIosArrowBack,
  IoIosArrowForward,
} from 'react-icons/io';

const Carrusel = () => {
  //   const [imagenes, setImagenes] = useState([]);
  //   setImagenes([bailarines, minecraft, bailarines, minecraft]);
  const imagenes = useRef([
    bailarines,
    minecraft,
    bailarines,
    minecraft,
    bailarines,
    minecraft,
  ]);
  const currentImage = useRef(0);

  const changeImage = (click) => {
    // if (click == 'left') {
    //   currentImage.current -= 1;
    // } else if (click == 'right') {
    //   currentImage.current += 1;
    // }
    // console.log(imagenes.current[currentImage.current]);
    // console.log('id: ' + currentImage.current);
    console.log(click);
    currentImage.current += 1;
  };

  return (
    <div className="h-[500px] w-full relative flex items-center">
      <div
        className="w-16 h-16 bg-slate-200 bg-opacity-75 rounded-full absolute left-2 grid place-items-center cursor-pointer"
        onClick={() => {
          changeImage('left');
        }}
      >
        <IoIosArrowBack className="text-6xl" />
      </div>
      <Image
        src={imagenes.current[currentImage.current]}
        alt="tango persons"
        className="w-full h-[500px] object-cover"
      />
      <div className="w-16 h-16 bg-slate-200 bg-opacity-75 rounded-full absolute right-2">
        <IoIosArrowForward
          className="text-6xl"
          onClick={() => {
            changeImage('right');
          }}
        />
      </div>
    </div>
  );
};

export default Carrusel;
