import { useState, useRef, useEffect } from 'react';
import { BsFillPersonFill } from 'react-icons/bs';
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';

const PersonChooser = (props) => {
  const [adults, setAdults] = useState(null);
  useEffect(() => {
    setAdults(props.min);
    props.onPersonChange(props.min);
  }, [props.min]);

  useEffect(() => {
    document.addEventListener('click', handleOutsideClick, true);
    return () => {
      document.removeEventListener('click', handleOutsideClick, true);
    };
  }, []);

  const handleOutsideClick = (e) => {
    if (
      !outline.current.contains(e.target) &&
      !adultSelecter.current.contains(e.target) &&
      change.current
    ) {
      openSelecter();
    } else {
    }
  };

  const addAdult = () => {
    if (adults < props.max) {
      setAdults(adults + 1);
      props.onPersonChange(adults + 1);
    }
  };

  const substractAdult = () => {
    if (adults > props.min) {
      setAdults(adults - 1);
      props.onPersonChange(adults - 1);
    }
  };

  let change = useRef(false);
  const adultSelecter = useRef(null);
  const outline = useRef(null);

  const openSelecter = () => {
    if (change.current == false) {
      adultSelecter.current.classList.remove('opacity-0', 'scale-0');
      adultSelecter.current.classList.add('opacity-100', 'scale-100');
      outline.current.classList.add('border-[#1976d2]', 'border-2');
      outline.current.classList.remove(
        'border-[#c4c4c4]',
        'hover:border-[#000]'
      );
      change.current = true;
    } else {
      adultSelecter.current.classList.add('opacity-0', 'scale-0');
      adultSelecter.current.classList.remove('opacity-100', 'scale-100');
      outline.current.classList.remove('border-[#1976d2]', 'border-2');
      outline.current.classList.add('border-[#c4c4c4]', 'hover:border-[#000]');
      change.current = false;
    }
  };

  return (
    <div className="w-[259px] h-[56px]  border  relative rounded-md bg-white z-10">
      <div
        className="cursor-pointer w-full h-[56px] flex items-center justify-between  hover:border-[#000] border pl-[14px] pr-[10px] rounded-md"
        onClick={openSelecter}
        ref={outline}
      >
        <div>{adults} Adults</div>
        <div className="text-xl">
          <BsFillPersonFill />
        </div>
      </div>
      <div
        className="h-20 w-[259px] absolute top-14 right-0 bg-white shadow-2xl grid grid-cols-[1fr_3fr] opacity-0 scale-0 transition-all duration-200 ease-out"
        ref={adultSelecter}
      >
        <div className="flex justify-center items-center text-xl ml-4">
          Adults
        </div>
        <div className="flex items-center justify-end">
          <div
            className="text-3xl cursor-pointer border-2 border-black rounded-full"
            onClick={addAdult}
          >
            <AiOutlinePlus className="rounded-full hover:bg-black hover:border-white hover:text-white ease-out duration-200" />
          </div>
          <div className="mx-4 text-2xl select-none">{adults}</div>
          <div
            className="text-3xl cursor-pointer border-2 border-black rounded-full mr-2"
            onClick={substractAdult}
          >
            <AiOutlineMinus className="rounded-full hover:bg-black hover:border-white hover:text-white ease-out duration-200" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonChooser;
