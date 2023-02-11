import Link from "next/link";
import Image from "next/image";
import logo from "../assets/logo-milonga-city.svg";
import { FaShoppingCart } from "react-icons/fa";

export default function Navbar() {
  return (
    <nav className=" text-white font-bold text-xl uppercase p-9 absolute w-full z-30">
      <div className="flex w-full justify-between">
        <Image
          src={logo}
          height={180}
          width={180}
          alt="logo"
          className="w-4  object-cover"
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
        <div>
          <FaShoppingCart />
        </div>
      </div>
      <div className="bg-gradient-to-b from-black h-40 opacity-50 top-0 left-0 w-full h-full absolute -z-10"></div>
    </nav>
  );
}
