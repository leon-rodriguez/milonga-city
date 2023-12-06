import { useEffect, useState } from 'react';

const AboutMilongaBlockImgLeft = ({ index, text, src, refValue, entry }) => {
  const [animationShowed, setAnimationShowed] = useState(false);

  useEffect(() => {
    if (entry?.isIntersecting === true) {
      setAnimationShowed(true);
    }
  }, [entry?.isIntersecting]);

  return (
    <div
      className="grid grid-cols-2 w-full max-[800px]:grid-cols-1 "
      key={index}
    >
      <div
        className={`flex justify-end items-center max-[800px]:justify-center transition-all duration-300 ease-out`}
      >
        <img
          className={`${
            animationShowed ? 'about_left_appear' : ''
          } object-cover h-[350px] w-3/4 mr-10 border-4 border-[#01bdba] max-[800px]:mr-0 max-[800px]:w-10/12 opacity-0 `}
          src={src}
          alt="bailarines de tango"
          ref={refValue}
        />
      </div>
      <div
        className={`flex justify-start items-center max-[800px]:justify-center max-[800px]:items-start`}
      >
        <div
          className={`${
            animationShowed ? 'about_right_appear' : ''
          } w-3/4 ml-10 opacity-0 max-[800px]:ml-0 max-[400px]:text-sm`}
        >
          {text}
        </div>
      </div>
    </div>
  );
};

const AboutMilongaBlockImgRight = ({ text, src, refValue, entry }) => {
  const [animationShowed, setAnimationShowed] = useState(false);

  useEffect(() => {
    if (entry?.isIntersecting === true) {
      setAnimationShowed(true);
    }
  }, [entry?.isIntersecting]);

  return (
    <div className="grid grid-cols-2 w-full bg-[#f0f0f0] max-[800px]:grid-cols-1">
      <div className="flex justify-end items-center max-[800px]:justify-center max-[800px]:items-start max-[800px]:order-1">
        <div
          className={`${
            animationShowed ? 'about_left_appear' : ''
          } w-3/4 mr-10 max-[800px]:mr-0 max-[400px]:text-sm opacity-1`}
        >
          {text}
        </div>
      </div>
      <div className=" flex justify-start items-center max-[800px]:justify-center max-[800px]:-order-1">
        <img
          className={`${
            animationShowed ? 'about_right_appear' : ''
          } object-cover h-[350px] w-3/4 ml-10 border-4 border-[#01bdba] max-[800px]:ml-0 max-[800px]:w-10/12`}
          src={src}
          alt="bailarines de tango"
          ref={refValue}
        />
      </div>
    </div>
  );
};

export { AboutMilongaBlockImgLeft, AboutMilongaBlockImgRight };
