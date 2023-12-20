import Link from 'next/link';
import Image from 'next/image';
import logo from '../assets/logo-milonga-city.svg';
import { MdOutlineMenu } from 'react-icons/md';
import { useRef, useState, useContext, useEffect } from 'react';
import { scrollContext } from './Layout';
import { usePathname } from 'next/navigation';

export function Navbar() {
  const [bookingIsActive, setBookingIsActive] = useState(false);
  const scrollY = useContext(scrollContext);
  const maxYScroll = 190;
  const pathname = usePathname();
  const [actualUrl, setActualUrl] = useState(pathname);
  const handleBookingModal = () => {
    setBookingIsActive(!bookingIsActive);
  };

  useEffect(() => {
    setActualUrl(pathname);
  }, [pathname]);

  return (
    <nav
      className={`${
        scrollY > maxYScroll ? 'p-4' : 'p-9'
      } font-bold text-white text-xl w-full z-[500] fixed transition-all duration-500 ease-out`}
    >
      <div className="flex w-full justify-between relative z-40">
        <Link href="/">
          <Image
            src={logo}
            alt="logo"
            className={`${
              scrollY > maxYScroll ? 'w-14' : 'w-28'
            } h-auto object-cover  transition-all duration-500 ease-out`}
          />
        </Link>
        <ul className="flex justify-center h-[60px]">
          <li>
            <Link
              href="/"
              className="transition-all ease duration-300 hover:text-[#01bdba]"
            >
              HOME
            </Link>
          </li>
          <li className="flex justify-start  px-4 mx-4">
            {actualUrl === '/' ? (
              <a
                href="#milonga"
                className="transition-all ease duration-300 hover:text-[#01bdba]"
              >
                MORE ABOUT MILONGAS
              </a>
            ) : (
              <Link
                href="/#milonga"
                className="transition-all ease duration-300 hover:text-[#01bdba]"
              >
                MORE ABOUT MILONGAS
              </Link>
            )}
          </li>
          <li>
            <Link
              href="/contact"
              className="transition-all ease duration-300 hover:text-[#01bdba]"
            >
              CONTACT US
            </Link>
          </li>
        </ul>
        <div className="flex w-24 justify-evenly ">
          <div className="relative">
            {/* <FaShoppingCart
              className="text-2xl cursor-pointer"
              onClick={handleBookingModal}
            />
            <ModalBookings isActive={bookingIsActive} /> */}
          </div>
          {/* <MdAccountCircle className="text-2xl cursor-pointer" /> */}
        </div>
      </div>
      <div
        className={`${
          scrollY > maxYScroll
            ? 'bg-black h-20'
            : 'bg-gradient-to-b from-black opacity-50 h-40'
        } top-0 left-0 w-full  absolute z-30 transition-all duration-500 ease-out`}
      ></div>
    </nav>
  );
}

export function NavbarMobile() {
  const [bookingIsActive, setBookingIsActive] = useState(false);
  const pathname = usePathname();
  const [actualUrl, setActualUrl] = useState(pathname);

  const handleBookingModal = () => {
    setBookingIsActive(!bookingIsActive);
  };
  let change = false;
  const menu = useRef(null);
  const openMenu = () => {
    if (change == false) {
      menu.current.classList.add('translate-y-[334px]');
      change = true;
    } else {
      menu.current.classList.remove('translate-y-[334px]');
      change = false;
    }
  };

  useEffect(() => {
    setActualUrl(pathname);
  }, [pathname]);

  return (
    <nav className=" text-white font-bold w-full z-[500] fixed">
      <div
        className="bg-black/75 h-[334px] w-full absolute z-10 flex justify-center items-end transition duration-300 ease-out -top-[334px]"
        ref={menu}
      >
        <ul className="h-[222px] text-2xl pb-8 flex flex-col justify-evenly">
          <Link href="/">
            <li className="text-center" onClick={openMenu}>
              HOME
            </li>
          </Link>
          <li className="text-center" onClick={openMenu}>
            {actualUrl === '/' ? (
              <a
                href="#milonga"
                className="transition-all ease duration-300 hover:text-[#01bdba]"
              >
                MORE ABOUT MILONGAS
              </a>
            ) : (
              <Link
                href="/#milonga"
                className="transition-all ease duration-300 hover:text-[#01bdba]"
              >
                MORE ABOUT MILONGAS
              </Link>
            )}
          </li>
          <Link href="/contact">
            <li className="text-center" onClick={openMenu}>
              CONTACT US
            </li>
          </Link>
        </ul>
      </div>
      <div className=" w-full flex justify-between">
        <Link href="/">
          <Image
            src={logo}
            alt="logo"
            className="w-24 h-auto object-cover relative z-50 mt-2 ml-2"
          />
        </Link>
        <div className="w-[200px] grid grid-cols-3">
          <div className="relative flex justify-center ">
            {/* <FaShoppingCart
              className="text-3xl mt-5 cursor-pointer"
              onClick={handleBookingModal}
            />
            <ModalBookings isActive={bookingIsActive} /> */}
          </div>
          <div className="flex justify-center mt-5">
            {/* <MdAccountCircle className="text-3xl cursor-pointer" /> */}
          </div>

          <MdOutlineMenu
            className="text-6xl text-white relative z-50 mt-2 mr-2"
            onClick={openMenu}
          />
        </div>
      </div>
      <div className="bg-gradient-to-b from-black h-40 opacity-50 top-0 left-0 w-full absolute -z-10"></div>
    </nav>
  );
}
