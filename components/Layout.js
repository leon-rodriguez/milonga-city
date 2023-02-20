import { Navbar, NavbarMobile } from "./Navbar";
import { useMediaQuery } from "react-responsive";
import { Roboto } from "@next/font/google";

const roboto = Roboto({
  weight: ["400", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
});

export default function Layout({ children }) {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 720px)" });
  return (
    <main className={roboto.className}>
      {isTabletOrMobile ? <NavbarMobile /> : <Navbar />}
      <main>{children}</main>
      {/* <Footer /> */}
    </main>
  );
}
