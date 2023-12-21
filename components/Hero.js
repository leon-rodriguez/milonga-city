import { observe } from 'react-intersection-observer';
import { useParallax } from 'react-scroll-parallax';

export default function Hero() {
  const parallax = useParallax({
    speed: -50,
  });
  return (
    <div className="w-full h-screen overflow-hidden relative">
      <div className="absolute top-0 left-0 z-20 w-screen h-screen bg-[#00000066]"></div>
      <div className="absolute z-20 bottom-1/4 right-1/4 text-white text-7xl text-right max-[1280px]:text-6xl max-[720px]:text-4xl">
        <p className="underline decoration-3 text-amber-300">LEARN</p>
        <p className="underline decoration-3 text-amber-300">DISCOVER</p>
        <p className="underline decoration-3 text-amber-300">JOIN</p>
        <p className="underline decoration-3 text-amber-300">BE PART OF</p>
        <p>tango</p>
      </div>
      <video
        muted
        loop
        autoPlay
        className="w-full h-full object-cover absolute top-0 left-0"
        ref={parallax.ref}
      >
        <source src="/Images/background.mp4" type="video/mp4"></source>
      </video>
    </div>
  );
}
