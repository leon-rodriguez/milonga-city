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
    <div className="w-full h-screen overflow-hidden relative">
      <div className="absolute z-20 bottom-1/4 right-1/4 text-white text-7xl text-right max-[1280px]:text-6xl max-[720px]:text-4xl">
        <p className="underline decoration-3 text-amber-300">LEARN</p>
        <p className="mt-1">
          WITH THE <span className="">BEST</span>
        </p>
        <p>
          <span className="text-amber-300 underline decoration-3">TANGO</span>{' '}
          TEACHERS
        </p>
      </div>
      {/* <Parallax speed={10} style={{
        backgroundImage: `${bailarines}`
      }}> */}
      {/* <Image
        src={bailarines}
        alt="Dos personas bailando tango"
        className="w-full h-full object-cover animate-[zoomOut_18s_linear_forwards]"
      /> */}
      <video
        muted
        loop
        autoPlay
        className="w-full h-full object-cover absolute top-0 left-0"
      >
        <source src="/Images/background.mp4" type="video/mp4"></source>
      </video>
      {/* </Parallax> */}
    </div>
  );
}
