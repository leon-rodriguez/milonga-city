import { Navbar, NavbarMobile } from './Navbar';
import { useMediaQuery } from 'react-responsive';
import { Roboto } from '@next/font/google';
import { useState, useEffect, createContext } from 'react';
import { useScroll } from '../hooks/useScroll';
import { ParallaxProvider } from 'react-scroll-parallax';

const roboto = Roboto({
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
});

export const scrollContext = createContext();

export default function Layout({ children }) {
  const { scrollY } = useScroll();
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 780px)' });
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  useEffect(() => {
    setShowMobileMenu(isTabletOrMobile);
  }, [isTabletOrMobile]);
  return (
    <ParallaxProvider>
      <scrollContext.Provider value={scrollY}>
        <main className={roboto.className}>
          {showMobileMenu ? <NavbarMobile /> : <Navbar />}
          <main>{children}</main>
        </main>
      </scrollContext.Provider>
    </ParallaxProvider>
  );
}
