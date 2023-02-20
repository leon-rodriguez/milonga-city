import Link from 'next/link';
import Image from 'next/image';
import logo from '../assets/logo-milonga-city.svg';
import { FaShoppingCart } from 'react-icons/fa';
import { MdAccountCircle, MdOutlineMenu } from 'react-icons/md';
// import { GiHamburgerMenu } from "react-icons/gr";

export function Navbar() {
  return (
    <nav className=" text-white font-bold text-xl uppercase p-9 absolute w-full z-30 ">
      <div className="flex w-full justify-between">
        <Image
          src={logo}
          alt="logo"
          className="w-28 h-auto object-cover max-lg:w-20"
        />
        <ul className="flex justify-center space-x-7">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/experiences">Experiences</Link>
          </li>
          <li>
            <Link href="/feedback">Give us your feedback</Link>
          </li>
        </ul>
        <div className="flex w-24 justify-evenly">
          <FaShoppingCart className="text-2xl" />
          <MdAccountCircle className="text-2xl" />
        </div>
      </div>
      <div className="bg-gradient-to-b from-black h-40 opacity-50 top-0 left-0 w-full  absolute -z-10"></div>
    </nav>
  );
}

export function NavbarMobile() {
  const menu = document.querySelector('.menu');
  let change = false;
  const openMenu = () => {
    if (change == false) {
      menu.classList.add('translate-y-[334px]');
      change = true;
    } else {
      menu.classList.remove('translate-y-[334px]');
      change = false;
    }
  };
  return (
    <nav className=" text-white font-bold absolute w-full z-20">
      <div className="bg-black/75 h-[334px] w-full absolute z-10 flex justify-center items-end transition duration-300 ease-out menu -top-[334px]">
        <ul className="h-[222px] text-2xl pb-8 flex flex-col justify-evenly">
          <li className="text-center">HOME</li>
          <li className="text-center">EXPERIENCES</li>
          <li className="text-center">GIVE US YOUR FEEDBACK</li>
        </ul>
      </div>
      <div className=" w-full flex justify-between">
        <Image
          src={logo}
          height={180}
          width={180}
          alt="logo"
          className="w-28 h-auto object-cover relative z-50"
        />
        <MdOutlineMenu
          className="text-8xl text-white relative z-50"
          onClick={openMenu}
        />
        {/* <GiHamburgerMenu /> */}
      </div>
      <div className="bg-gradient-to-b from-black h-40 opacity-50 top-0 left-0 w-full absolute -z-10"></div>
    </nav>
  );
}
