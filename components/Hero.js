import Image from "next/image";
import bailarines from "../public/Images/bailarines.jpg";

/*
  //text div styles
  position: absolute;
  z-index: 51;
  width: 100%;
  color: white;
  height: 100%;
  padding: 100px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-end;
*/

export default function Hero() {
  return (
    <div className="w-full h-screen">
      <div className="absolute text-white">
        <p>LEARN</p>
        <p>WITH THE BEST</p>
        <p>TANGO TEACHERS</p>
      </div>
      <Image
        src={bailarines}
        alt="Dos personas bailando tango"
        className="w-full h-full object-cover"
      />
    </div>
  );
}
