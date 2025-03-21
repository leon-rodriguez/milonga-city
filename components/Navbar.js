import Link from "next/link";
import Image from "next/image";
import logo from "../assets/logo_png.png";

import { MdOutlineMenu } from "react-icons/md";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { useRef, useState, useContext, useEffect } from "react";
import { scrollContext } from "./Layout";
import { usePathname } from "next/navigation";
import { useTranslation } from "react-i18next";

export function Navbar() {
  const [bookingIsActive, setBookingIsActive] = useState(false);
  const scrollY = useContext(scrollContext);
  const maxYScroll = 190;
  const pathname = usePathname();
  const [actualUrl, setActualUrl] = useState(pathname);
  // const handleBookingModal = () => {
  //   setBookingIsActive(!bookingIsActive);
  // };
  const [showLangOptions, setShowLangOptions] = useState(false);
  const [selectedLang, setSelectedLang] = useState(0);

  const FLAGS_LANG = [
    {
      flagImg: "Images/flags/united-kingdom.png",
      language: "En",
    },
    {
      flagImg: "Images/flags/argentina.png",
      language: "Es",
    },
    {
      flagImg: "Images/flags/germany.png",
      language: "De",
    },
  ];
  const langPicker = useRef(null);

  useEffect(() => {
    setActualUrl(pathname);
  }, [pathname]);

  const { t, i18n } = useTranslation();

  useEffect(() => {
    document.addEventListener("click", handleOutsideClick, true);
    return () => {
      document.removeEventListener("click", handleOutsideClick, true);
    };
  }, []);

  const handleOutsideClick = (e) => {
    if (!langPicker.current.contains(e.target) && !showLangOptions) {
      setShowLangOptions(false);
    } else {
    }
  };

  return (
    <div className="fixed z-[500] w-full">
      <div className="h-8 bg-blue-600 flex justify-end space-x-3 pr-4 pt-1 text-white w-full">
        <div>Milonga Travel</div>
        <div>1137303056</div>
        <div>+59 1137303056</div>
        <div>pablo.rodriguez@milonga-city.com.ar</div>
      </div>
      <nav
        className={`${
          true ? "p-4" : "p-9"
        } font-bold text-black text-xl w-full z-[500] fixed transition-all duration-500 ease-out`}
      >
        <div className="flex w-full justify-between relative z-40">
          <Link href="/">
            <Image
              src={logo}
              alt="logo"
              className={`${
                true ? "w-20" : "w-28"
              } h-auto object-cover  transition-all duration-500 ease-out`}
            />
          </Link>
          <ul className="flex justify-center h-[60px]">
            <li>
              <Link
                href="/"
                className="transition-all ease duration-300 hover:text-[#01bdba]"
              >
                {t("navHome")}
              </Link>
            </li>
            <li className="flex justify-start  px-4 mx-4">
              {actualUrl === "/" ? (
                <a
                  href="#milonga"
                  className="transition-all ease duration-300 hover:text-[#01bdba]"
                >
                  {t("navMilongas")}
                </a>
              ) : (
                <Link
                  href="/#milonga"
                  className="transition-all ease duration-300 hover:text-[#01bdba]"
                >
                  {t("navMilongas")}
                </Link>
              )}
            </li>
            <li>
              <Link
                href="/contact"
                className="transition-all ease duration-300 hover:text-[#01bdba]"
              >
                {t("navContact")}
              </Link>
            </li>
          </ul>
          <div className="w-32 h-7 justify-evenly grid grid-cols-[1fr_3fr_3fr] ">
            <div
              className="flex justify-end items-center cursor-pointer"
              onClick={() => {
                setShowLangOptions(!showLangOptions);
              }}
            >
              {showLangOptions ? <IoIosArrowUp /> : <IoIosArrowDown />}
            </div>
            <div
              className=" h-7 flex justify-center cursor-pointer"
              onClick={() => {
                setShowLangOptions(!showLangOptions);
              }}
            >
              <img
                src={FLAGS_LANG[selectedLang].flagImg}
                className="h-full object-cover"
              />
            </div>
            <div
              className="h-7 flex items-center cursor-pointer"
              onClick={() => {
                setShowLangOptions(!showLangOptions);
              }}
            >
              {FLAGS_LANG[selectedLang].language}
            </div>
            <div
              className={`absolute top-10  w-28 min-h-7 bg-white shadow-2xl rounded-lg transition-all duration-300 ease-out overflow-hidden ${
                !showLangOptions ? "opacity-0 scale-0" : "opacity-1 scale-1"
              }`}
              ref={langPicker}
            >
              {FLAGS_LANG &&
                FLAGS_LANG.map((item, index) => {
                  return (
                    <div
                      className="h-14 grid py-2 grid-cols-2 cursor-pointer hover:bg-[#f5f5f5]"
                      key={index}
                      onClick={() => {
                        i18n.changeLanguage(item.language.toLowerCase());
                        setSelectedLang(index);
                        setShowLangOptions(false);
                      }}
                    >
                      <div className="flex justify-center items-center">
                        <img className="h-8 object-cover" src={item.flagImg} />
                      </div>
                      <div className="text-black flex items-center text-lg">
                        {item.language}
                      </div>
                    </div>
                  );
                })}
            </div>
            {/* <div className="relative"> */}
            {/* <FaShoppingCart
              className="text-2xl cursor-pointer"
              onClick={handleBookingModal}
            />
            <ModalBookings isActive={bookingIsActive} /> */}

            {/* </div> */}
            {/* <MdAccountCircle className="text-2xl cursor-pointer" /> */}
          </div>
        </div>
        <div
          className={`${
            true
              ? "bg-white h-20"
              : "bg-gradient-to-b from-black opacity-50 h-40"
          } top-0 left-0 w-full  absolute z-30 transition-all duration-500 ease-out`}
        ></div>
      </nav>
    </div>
  );
}

export function NavbarMobile() {
  const [bookingIsActive, setBookingIsActive] = useState(false);
  const pathname = usePathname();
  const [actualUrl, setActualUrl] = useState(pathname);
  const { t } = useTranslation();

  const handleBookingModal = () => {
    setBookingIsActive(!bookingIsActive);
  };
  let change = false;
  const menu = useRef(null);
  const openMenu = () => {
    if (change == false) {
      menu.current.classList.add("translate-y-[334px]");
      change = true;
    } else {
      menu.current.classList.remove("translate-y-[334px]");
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
            <li
              className="text-center transition-all ease duration-300 hover:text-[#01bdba]"
              onClick={openMenu}
            >
              {t("navHome")}
            </li>
          </Link>
          <li className="text-center" onClick={openMenu}>
            {actualUrl === "/" ? (
              <a
                href="#milonga"
                className="transition-all ease duration-300 hover:text-[#01bdba]"
              >
                {t("navMilongas")}
              </a>
            ) : (
              <Link
                href="/#milonga"
                className="transition-all ease duration-300 hover:text-[#01bdba]"
              >
                {t("navMilongas")}
              </Link>
            )}
          </li>
          <Link href="/contact">
            <li
              className="text-center transition-all ease duration-300 hover:text-[#01bdba]"
              onClick={openMenu}
            >
              {t("navContact")}
            </li>
          </Link>
        </ul>
      </div>
      <div className=" w-full flex justify-between">
        <Link href="/">
          <Image
            src={logo}
            alt="logo"
            className="w-24 h-auto object-cover relative z-50 mt-2 ml-2 "
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
