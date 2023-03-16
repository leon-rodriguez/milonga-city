import Image from 'next/image';
import bailarines from '../public/Images/bailarines.jpg';
import { Parallax } from 'react-scroll-parallax';

/*
  //text div styles
  position: absolute;
  z-index: 51;
  width: 100%;
  color: white;
  height: 100%;
  padding: 100px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-end;
*/

export default function Hero() {
  return (
    <div className="w-full h-screen overflow-hidden">
      <div className="absolute z-20 bottom-1/4 right-1/4 text-white text-7xl text-right max-[1280px]:text-6xl max-[720px]:text-4xl">
        <p className="underline decoration-3 ">LEARN</p>
        <p className="mt-1">WITH THE BEST</p>
        <p>TANGO TEACHERS</p>
      </div>
      {/* <Parallax speed={10} style={{
        backgroundImage: `${bailarines}`
      }}> */}
      <Image
        src={bailarines}
        alt="Dos personas bailando tango"
        className="w-full h-full object-cover animate-[zoomOut_18s_linear_forwards]"
      />
      {/* </Parallax> */}
    </div>
  );
}
