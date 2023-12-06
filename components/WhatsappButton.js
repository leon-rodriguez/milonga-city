// import { IoLogoWhatsapp } from 'react-icons/io';
import logo from '../assets/logo-whatsapp.svg';
import Image from 'next/image';

const WhatsappButton = ({ hola }) => {
  return (
    <div className="select-none">
      <a href="https://web.whatsapp.com/">
        {/* <logo className="w-16 h-16 fixed bottom-5 left-5"></logo> */}
        <Image
          src={logo}
          alt="whatsapp button"
          className="w-16 h-16 fixed bottom-14 left-5 z-40"
        />
      </a>
    </div>
  );
};

export default WhatsappButton;
