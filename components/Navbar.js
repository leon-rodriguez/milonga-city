import Link from "next/link";

export default function Navbar() {
  return (
    <nav className=" text-white font-bold text-xl uppercase p-9 absolute w-full z-30">
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
      <div className="bg-gradient-to-b from-black h-40 opacity-50 top-0 left-0 w-full h-full absolute -z-10"></div>
    </nav>
  );
}
