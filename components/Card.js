import Image from 'next/image';
import Link from 'next/link';
import bailarines from '../public/Images/bailarines.jpg';
import { FaFacebookF, FaTwitter } from 'react-icons/fa';

const Card = ({ data }) => {
  const { title, body, imgsrc, type, price, currency, cta, id } = data;
  return (
    <Link
      href={{
        pathname: '/Experience/[id]',
        query: { id },
      }}
    >
      <div className="w-[400px] h-[600px] p-2 mb-8 grid grid-rows-[5fr_2fr_5fr_auto] bg-[#fff] ease-out duration-500 hover:shadow-xl hover:shadow-gray-300 max-[420px]:w-[300px]">
        <div className="overflow-hidden">
          <img
            src={imgsrc}
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
              {currency} {price}
            </div>
            <div className="flex justify-end text-sm">
              <span>
                <FaFacebookF />
              </span>
              <span className="mx-2">
                <FaTwitter />
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
