import { observe } from "react-intersection-observer";
import { useParallax } from "react-scroll-parallax";
import { useTranslation } from "react-i18next";
import { useRef, useState, useEffect } from "react";

const IMAGES = [
  "/Images/home/home1.jpg",
  "/Images/home/home2.jpg",
  "/Images/home/home3.jpg",
  "/Images/home/home4.jpg",
];

export default function Hero() {
  const { t } = useTranslation();

  const parallax = useParallax({
    speed: -50,
  });

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % IMAGES.length);
    }, 3500);

    return () => clearInterval(interval);
  }, []);
  return (
    <div className="w-full h-screen overflow-hidden relative">
      <div className="absolute top-0 left-0 z-20 w-screen h-screen bg-[#00000022]"></div>
      <div className="h-screen w-screen flex items-center justify-center ">
        <div className="relative z-30">
          <h1 className=" text-center text-white text-6xl font-bold">
            Viaja por <span className="text-secondary">Argentina</span> y el{" "}
            <span className="text-secondary">Mundo</span>
          </h1>
          <h2 className="mt-4 text-white text-2xl font-bold text-center">
            Cotiza y reserva Vuelo, Hoteles, Circuitos, Cruceros, Paquetes y
            Excursiones en pocos minutos y al mejor precio!
          </h2>
        </div>
      </div>
      <div
        className="w-full h-full absolute top-0 left-0 -z-10"
        ref={parallax.ref}
      >
        {IMAGES.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`Imagen ${index + 1}`}
            className={`absolute w-full h-full top-0 left-0 object-cover transition-all duration-1000 ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
