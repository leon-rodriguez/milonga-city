import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-black text-white font-bold text-xl uppercase p-9">
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
    </nav>
  );
}
