import Link from 'next/link';
import { useEffect, useState, useRef } from 'react';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';
import { useIntersectionObserver } from '@uidotdev/usehooks';

const Card = ({ data }) => {
  const { title, body, imgsrc, type, pricefor2, currency, cta, id, images } =
    data;

  const [mouseHoverCard, setMouseHoverCard] = useState(false);
  const [img, setImg] = useState(imgsrc);
  const [animationShowed, setAnimationShowed] = useState(false);
  const interval = useRef(null);

  const [ref, entry] = useIntersectionObserver({
    threshold: 0,
    root: null,
    rootMargin: '0px',
  });
  useEffect(() => {
    if (entry?.isIntersecting === true) {
      setAnimationShowed(true);
    }
  }, [entry?.isIntersecting]);

  const handleMouseEnter = () => {
    setMouseHoverCard(true);
  };

  const handleMouseLeave = () => {
    setMouseHoverCard(false);
  };

  useEffect(() => {
    if (images) {
      let index = 0;
      if (mouseHoverCard) {
        interval.current = setInterval(() => {
          setImg(images[index]);
          index++;
          if (index >= images.length - 1) {
            index = 0;
          }
        }, 1100);
      }
      if (!mouseHoverCard) {
        setImg(imgsrc);
        return clearInterval(interval.current);
      }
    }
  }, [mouseHoverCard]);

  return (
    <Link
      href={{
        pathname: '/Experience/[id]',
        query: { id },
      }}
    >
      <div
        className={`w-[400px] h-[600px] p-2 mb-8 grid grid-rows-[5fr_2fr_5fr_auto] bg-[#fff] ease-out duration-500 hover:shadow-xl hover:shadow-gray-300 max-[420px]:w-full ${
          animationShowed ? 'opacity-100' : 'opacity-0'
        }`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        ref={ref}
      >
        <div className="overflow-hidden">
          <img
            src={img}
            alt="Dos personas bailando tango"
            className="cursor-pointer w-full h-full mb-4 ease-out duration-300 hover:scale-125"
          />
        </div>
        <div>
          <h2 className="text-2xl text-[#4b4b4b] cursor-pointer ">{title}</h2>
          <p className="text-sm text-[#7b8794] ">{type}</p>
        </div>
        <div className="border-b border-gray-400 pt-2 grid grid-rows-[3fr_1fr]">
          <div className="text-sm text-[##1f2933] leading-7">{body}</div>
          <div className="flex items-start">
            <button className="bg-[#0195e0] w-36 h-7 text-white text-center leading-7 text-xl rounded-md cursor-pointer ease-out duration-300 hover:bg-[#01bdba]">
              {cta}
            </button>
          </div>
        </div>
        <div className="grid grid-rows-{2} ">
          <div className="text-sm">From</div>
          <div className="grid grid-cols-[1fr_2fr]">
            <div className="text-xl font-bold">
              {currency} {pricefor2}
            </div>
            <div className="flex justify-end text-sm">
              <span>
                <FaFacebookF />
              </span>
              <span className="mx-2">
                <FaInstagram />
              </span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Card;

//[208px_52px_230px_auto]
