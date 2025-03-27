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
    }, 2000); // Cambia cada 2 segundos

    return () => clearInterval(interval);
  }, []);
  return (
    <div className="w-full h-screen overflow-hidden relative">
      <div className="absolute top-0 left-0 z-20 w-screen h-screen bg-[#00000022]"></div>
      <div className="h-screen w-screen flex items-center justify-end pt-[250px] pr-[500px] max-[900px]:pr-[350px] max-[751px]:pr-20 max-[450px]:pr-5">
        <div className="wrapper">
          <div className="words">
            <span>{t("heroWord1")}</span>
            <span>{t("heroWord2")}</span>
            <span>{t("heroWord3")}</span>
            <span>{t("heroWord4")}</span>
            <span>{t("heroWord5")}</span>
          </div>
          <p>TANGO</p>
        </div>
      </div>
      <div className="w-full h-full absolute top-0 left-0" ref={parallax.ref}>
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
