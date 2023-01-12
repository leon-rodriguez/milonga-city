import Navbar from "./Navbar";
import Hero from "./Hero";

import { Roboto } from "@next/font/google";

const roboto = Roboto({
  weight: ["400", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
});

export default function Layout({ children }) {
  return (
    <main className={roboto.className}>
      <Navbar />
      <Hero />
      <main>{children}</main>
      {/* <Footer /> */}
    </main>
  );
}
