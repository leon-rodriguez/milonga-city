import logo from '../assets/logo-milonga-city.svg';
import Image from 'next/image';
import {
  FaFacebookF,
  FaTwitter,
  FaTripadvisor,
  FaInstagramSquare,
} from 'react-icons/fa';

const Footer = () => {
  return (
    <div className="w-full">
      <div className=" bg-[#0088cc] h-96 grid grid-cols-4 max-lg:grid-cols-2 max-lg:grid-rows-2 max-lg:min-h-[750px] max-sm:grid-cols-1 max-sm:grid-rows-[2fr_2fr_2fr_1fr] max-sm:min-h-[1000px]">
        <div className=" grid grid-rows-[128px_auto] pl-14 max-sm:pl-0 max-sm:grid-rows-[80px_auto]">
          <div className="flex justify-start items-center text-3xl font-bold text-white max-sm:justify-center">
            About us
          </div>
          <div className="flex justify-start max-sm:justify-center">
            <div className="w-56 text-white font-bold leading-7">
              We have more than 15 years of trajectory in tango shows and
              services, combining in our work, commitment, confidence and
              passion for what we do.
            </div>
          </div>
        </div>
        <div className="grid grid-rows-[128px_auto] pl-14 max-sm:pl-0 max-sm:grid-rows-[80px_auto]">
          <div className="flex justify-start items-center text-3xl font-bold text-white max-sm:justify-center">
            Activities
          </div>
          <div className="flex justify-start max-sm:justify-center">
            <ul className="list-disc text-white font-bold list-inside leading-8">
              <li>
                <a>Milongas Visit Excursion</a>
              </li>
              <li>
                <a>Tango classes</a>
              </li>
              <li>
                <a>Wine Tastings</a>
              </li>
              <li>
                <a>Visit KAYAK for Air tickets</a>
              </li>
              <li>
                <a>Visit MOMONDO for more activities</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="grid grid-rows-[128px_auto] pl-14 max-sm:pl-0 max-sm:grid-rows-[80px_auto]">
          <div className="flex justify-start items-center text-3xl font-bold text-white max-sm:justify-center">
            Contact
          </div>
          <div className="flex justify-start mt-1 leading-8 text-white font-bold max-sm:justify-center">
            <ul>
              <li>
                <span className="mr-4">@</span>
                <span>15 3730 3056</span>
              </li>
              <li>
                <span className="mr-4">@</span>
                <span>+54 911 37303056</span>
              </li>
              <li>
                <span className="mr-4">@</span>
                <span>info@milonga-city.com.ar</span>
              </li>
              <li>
                <span className="mr-4">@</span>
                <span>Buenos Aires – Argentina</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="grid grid-rows-[128px_auto] pl-14 max-sm:pl-0 max-sm:grid-rows-[80px_auto]">
          <div className="flex justify-start items-center text-3xl font-bold text-white max-sm:justify-center">
            Follow Us
          </div>
          <div className="flex justify-start pb-10 max-sm:justify-center">
            <div className="text-white w-40 text-xl font-bold flex justify-between">
              <FaFacebookF />
              <FaInstagramSquare />
              <FaTwitter />
              <FaTripadvisor />
            </div>
          </div>
        </div>
      </div>
      <div className="h-20 bg-[#01bdba] max-sm:h-24">
        <div className="text-white h-20 w-full pl-14 pr-6 flex items-center justify-between ">
          <div className="flex flex-wrap">
            <div>Copyright 2023 - All Rights Reserved.</div>
            <div>Developed by León Rodriguez</div>
          </div>
          <Image
            src={logo}
            height={180}
            width={180}
            alt="logo"
            className="w-14 h-auto object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Footer;
