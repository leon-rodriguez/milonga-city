import Image from "next/image";
import bailarines from "../public/Images/bailarines.jpg";

export default function Hero() {
  return (
    <Image
      src={bailarines}
      alt="Dos personas bailando tango"
      className="w-screen h-screen absolute z-10"
    />
  );
}
