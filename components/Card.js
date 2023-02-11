import Image from "next/image";
import bailarines from "../public/Images/bailarines.jpg";

const Card = ({ data }) => {
  const { title, body, src, type, price, currency, cta } = data;
  return (
    <div className="border-2 border-indigo-600 w-96 h-[560px] p-2 grid grid-rows-[208px_52px_230px_auto] ">
      <div>
        <Image
          src={bailarines}
          alt="Dos personas bailando tango"
          className="w-full h-52 object-cover mb-4"
        />
      </div>
      <div>
        <h2 className="text-2xl text-[#4b4b4b]">{title}</h2>
        <p className="text-sm text-[#7b8794]">{type}</p>
      </div>
      <div className="border-b border-gray-400 pt-2 grid grid-rows-[3fr_1fr]">
        <div className="text-sm text-[##1f2933] leading-7">{body}</div>
        <div className="flex items-start">
          <button className="bg-[#0195e0] w-36 h-7 text-white text-center leading-7 text-xl rounded-md ">
            {cta}
          </button>
        </div>
      </div>
      <div className="grid grid-rows-{2} ">
        <div className="text-sm">From</div>
        <div className="grid grid-cols-[1fr_3fr]">
          <div className="text-xl">
            {currency} {price}
          </div>
          <div className="flex justify-end text-sm">
            <span>+</span>
            <span className="mx-2">@</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
