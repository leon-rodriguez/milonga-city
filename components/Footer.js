import logo from "../assets/logo-milonga-city.svg";
import Image from "next/image";

const Footer = () => {
  return (
    <div className="w-full">
      <div className=" bg-[#0088cc] h-96 grid grid-cols-4">
        <div className=" grid grid-rows-[128px_auto] pl-14">
          <div className="flex justify-start items-center text-3xl font-bold text-white">
            About us
          </div>
          <div className="flex justify-start">
            <div className="w-56 text-white font-bold leading-7">
              We have more than 15 years of trajectory in tango shows and
              services, combining in our work, commitment, confidence and
              passion for what we do.
            </div>
          </div>
        </div>
        <div className="grid grid-rows-[128px_auto] pl-14">
          <div className="flex justify-start items-center text-3xl font-bold text-white">
            Activities
          </div>
          <div className="flex justify-start">
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
        <div className="grid grid-rows-[128px_auto] pl-14">
          <div className="flex justify-start items-center text-3xl font-bold text-white">
            Follow Us
          </div>
          <div className="flex justify-start pb-10">
            <div className="text-white text-xl font-bold">
              <span>@</span>
              <span className="mx-6">+</span>
              <span>Ç</span>
            </div>
          </div>
        </div>
        <div className="grid grid-rows-[128px_auto] pl-14">
          <div className="flex justify-start items-center text-3xl font-bold text-white">
            Contact
          </div>
          <div className="flex justify-start mt-1 leading-8 text-white font-bold">
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
      </div>
      <div className="h-20 bg-[#01bdba] ">
        <div className="text-white h-20 w-2/4  flex items-center justify-end">
          <Image
            src={logo}
            height={180}
            width={180}
            alt="logo"
            className="w-14 h-auto object-cover"
          />
          <div className="ml-10">
            Copyright 2019 - All Rights Reserved. | Developed by León Rodriguez
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
