import { Navbar, NavbarMobile } from './Navbar';
import { useMediaQuery } from 'react-responsive';
import { Roboto } from '@next/font/google';
import { useState, useEffect, createContext } from 'react';
import { useScroll } from '../hooks/useScroll';
import { ParallaxProvider } from 'react-scroll-parallax';
import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import es from '../i18n/Spanish/es.json';
import en from '../i18n/English/en.json';
import de from '../i18n/German/de.json';

const roboto = Roboto({
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
});

export const scrollContext = createContext();

i18next.use(initReactI18next).init({
  lng: 'en',
  interpolation: {
    escapeValue: 'false',
  },
  resources: {
    en: {
      translation: en,
    },
    es: {
      translation: es,
    },
    de: {
      translation: de,
    },
  },
});

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
