import logo from '../assets/logo-milonga-city.svg';
import Image from 'next/image';
import { FaFacebookF, FaTwitter, FaTripadvisor } from 'react-icons/fa';
import { FaWhatsapp } from 'react-icons/fa';
import { IoMailOutline } from 'react-icons/io5';
import { MdOutlinePlace } from 'react-icons/md';
import { RiInstagramFill } from 'react-icons/ri';

const Footer = () => {
  return (
    <div className="w-full">
      <div className=" min-[1300px]:px-[100px] bg-[#0088cc] h-96 grid grid-cols-4 max-lg:grid-cols-2 max-lg:grid-rows-2 max-lg:min-h-[750px] max-sm:grid-cols-1 max-sm:grid-rows-[2fr_2fr_1fr_2fr] max-sm:min-h-[1000px]">
        <div className="grid grid-rows-[128px_auto]  max-sm:pl-0 max-sm:grid-rows-[80px_auto]">
          <div className="flex justify-center items-center text-3xl font-bold text-white max-sm:justify-center">
            About us
          </div>
          <div className="flex justify-center max-sm:justify-center">
            <div className="w-56 text-white font-bold leading-7">
              We are dedicated to curating exceptional travel experiences that
              blend the excitement of discovering new landscapes with the allure
              of the tango rhythm.
            </div>
          </div>
        </div>
        <div className="grid grid-rows-[128px_auto]  max-sm:pl-0 max-sm:grid-rows-[80px_auto]">
          <div className="flex justify-center items-center text-3xl font-bold text-white max-sm:justify-center">
            Activities
          </div>
          <div className="flex justify-center max-sm:justify-center">
            <ul className="list-disc text-white font-bold list-inside leading-8">
              <li>
                <a>Milongas Visit Excursion</a>
              </li>
              <li>
                <a>Tango classes</a>
              </li>
              <li>
                <a>Tango lesson + Wine Tasting</a>
              </li>
              <li>
                <a>Group Tango Class + Afternoon Snack</a>
              </li>
              <li>
                <a>Dinner and Tango Show</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="grid grid-rows-[128px_auto] max-sm:pl-0 max-sm:grid-rows-[80px_auto]">
          <div className="flex justify-center items-center text-3xl font-bold text-white max-sm:justify-center">
            Follow Us
          </div>
          <div className="flex justify-center pb-10 max-sm:justify-center">
            <div className="text-white w-40 text-xl font-bold flex justify-center space-x-7">
              <a
                href="https://www.facebook.com/people/Milonga-City/100063789690031/"
                className="cursor-default"
              >
                <FaFacebookF className=" transition-all duration-300 hover:text-[#01bdba] cursor-pointer" />
              </a>
              <a
                href="https://www.instagram.com/milongacity/"
                className=" cursor-default"
              >
                <RiInstagramFill className="cursor-pointer transition-all duration-300 hover:text-[#01bdba]" />
              </a>
              <a
                href="https://www.tripadvisor.com.ar/Attraction_Review-g312741-d5796317-Reviews-Milonga_City-Buenos_Aires_Capital_Federal_District.html"
                className="  cursor-default"
              >
                <FaTripadvisor className="cursor-pointer transition-all duration-300 hover:text-[#01bdba]" />
              </a>
            </div>
          </div>
        </div>
        <div className="grid grid-rows-[128px_auto] max-sm:pl-0 max-sm:grid-rows-[80px_auto]">
          <div className="flex justify-center items-center text-3xl font-bold text-white max-sm:justify-center">
            Contact
          </div>
          <div className="flex justify-center mt-1 leading-8 text-white font-bold max-sm:justify-center">
            <ul className="space-y-4">
              <li className="flex items-center">
                <FaWhatsapp className=" text-xl mr-4" />
                <a
                  className=" transition-all duration-300 hover:text-[#01bdba]"
                  href="https://wa.me/+5491137303056"
                >
                  +54 911 37303056
                </a>
              </li>
              <li className="flex items-center">
                <IoMailOutline className=" text-xl mr-4" />
                <a
                  className=" transition-all duration-300 hover:text-[#01bdba]"
                  href="mailto:info@milonga.city"
                >
                  info@milonga.city
                </a>
              </li>
              <li className="flex items-center">
                <MdOutlinePlace className=" text-xl mr-4" />
                <span className=" cursor-default">
                  Buenos Aires – Argentina
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="h-20 bg-[#01bdba] max-sm:h-24 max-[420px]:h-36 w-full">
        <div className="text-white h-20 w-full pl-14 pr-6 flex items-center justify-between max-[420px]:grid max-[420px]:grid-rows-2 max-[420px]:h-36 max-[420px]:p-0">
          <div className="flex flex-wrap  max-[420px]:justify-center">
            <div>Copyright 2023 - All Rights Reserved.</div>
            <div>Developed by León Rodriguez</div>
          </div>
          <Image
            src={logo}
            height={180}
            width={180}
            alt="logo"
            className="w-14 h-auto object-cover max-[420px]:mx-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default Footer;
