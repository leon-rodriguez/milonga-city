import { useEffect, useState } from 'react';
import { useIntersectionObserver } from '@uidotdev/usehooks';

const AboutMilongaBlockImgLeft = ({ index, text, src, title }) => {
  const [animationShowed, setAnimationShowed] = useState(false);

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

  return (
    <div
      className="grid grid-cols-2 w-full max-[800px]:grid-cols-1 "
      key={index}
    >
      <div
        className={`flex justify-end items-center max-[800px]:justify-center transition-all duration-300 ease-out`}
      >
        {/* <img
          className={`${
            animationShowed ? 'about_left_appear' : ''
          } object-cover h-[350px] w-3/4 mr-10 border-4 border-[#01bdba] max-[800px]:mr-0 max-[800px]:w-10/12 opacity-0 `}
          src={src}
          alt="bailarines de tango"
          ref={ref}
        /> */}
        <video
          controls
          className={`${
            animationShowed ? 'about_left_appear' : ''
          } object-cover h-[350px] w-3/4 mr-10  max-[800px]:mr-0 max-[800px]:w-10/12 opacity-0 `}
          ref={ref}
        >
          <source src={src} type="video/mp4"></source>
        </video>
      </div>
      {/* <div
        className={`flex justify-start items-center max-[800px]:justify-center max-[800px]:items-start`}
      > */}
      <div
        className={`grid grid-rows-[2fr_3fr] max-[800px]:grid-rows-[1fr_9fr]`}
      >
        <div className="ml-10 flex justify-start items-end max-[800px]:justify-center max-[800px]:ml-0">
          <div
            className={`font-semibold tracking-tight text-2xl ${
              animationShowed ? 'about_right_appear' : ''
            }`}
          >
            {title}
          </div>
        </div>
        <div className="flex items-start pt-14 max-[800px]:justify-center max-[800px]:text-center">
          <div
            className={`${
              animationShowed ? 'about_right_appear' : ''
            } w-3/4 ml-10 opacity-0 max-[800px]:ml-0 max-[400px]:text-lg text-xl `}
          >
            {text}
          </div>
        </div>
      </div>
    </div>
  );
};

const AboutMilongaBlockImgRight = ({ text, src, title }) => {
  const [animationShowed, setAnimationShowed] = useState(false);

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

  return (
    <div className="grid grid-cols-2 w-full bg-[#f0f0f0] max-[800px]:grid-cols-1">
      {/* <div className="flex justify-end items-center max-[800px]:justify-center max-[800px]:items-start max-[800px]:order-1"> */}
      <div
        className={`grid grid-rows-[2fr_3fr] max-[750px]:grid-rows-[1fr_9fr]`}
      >
        {/* <div className="ml-10 flex justify-start items-end"> */}
        <div className="mr-10 flex justify-end items-end max-[800px]:justify-center max-[800px]:mr-0">
          <div
            className={`font-semibold tracking-tight text-2xl ${
              animationShowed ? 'about_left_appear' : ''
            }`}
          >
            {title}
          </div>
        </div>
        <div
          className={`flex justify-end text-right items-start pt-14 max-[800px]:justify-center max-[800px]:text-center`}
        >
          <div
            className={`${
              animationShowed ? 'about_left_appear' : ''
            } w-3/4 mr-10 max-[800px]:mr-0 max-[400px]:text-lg opacity-1 text-xl`}
          >
            {text}
          </div>
        </div>
        {/* </div> */}
      </div>
      <div className=" flex justify-start items-center max-[800px]:justify-center max-[800px]:-order-1">
        <img
          className={`${
            animationShowed ? 'about_right_appear' : ''
          } object-cover h-[350px] w-3/4 ml-10  max-[800px]:ml-0 max-[800px]:w-10/12`}
          src={src}
          alt="bailarines de tango"
          ref={ref}
        />
      </div>
    </div>
  );
};

export { AboutMilongaBlockImgLeft, AboutMilongaBlockImgRight };
