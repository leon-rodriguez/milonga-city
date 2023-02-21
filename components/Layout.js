import { Navbar, NavbarMobile } from "./Navbar";
import { useMediaQuery } from "react-responsive";
import { Roboto } from "@next/font/google";
import {useState, useEffect} from 'react';

const roboto = Roboto({
  weight: ["400", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
});

export default function Layout({ children }) {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 720px)" });
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  useEffect(() =>{
    setShowMobileMenu(isTabletOrMobile);
  },[isTabletOrMobile] )
  return (
    <main className={roboto.className}>
      {showMobileMenu ? <NavbarMobile /> : <Navbar />}
      <main>{children}</main>
      {/* <Footer /> */}
    </main>
  );
}
