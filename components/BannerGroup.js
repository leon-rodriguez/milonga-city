import Link from "next/link";

const BannerGroup = ({ title, data }) => {
  return (
    <div className="w-full px-20 mb-20 max-[1000px]:px-4 max-[650px]:px-0">
      <h1 className="text-center font-bold text-2xl mb-8">{title}</h1>
      <div
        className={`w-full grid grid-cols-${data.length} h-[400px] gap-4 max-[650px]:h-auto max-[650px]:grid-cols-1 max-[650px]:grid-rows-${data.length}`}
      >
        {data.map((item, index) => (
          <Link
            href={item.href}
            className="overflow-hidden relative flex justify-center items-center group max-[650px]:h-[366px]"
            key={index}
          >
            {/* <div
            className="overflow-hidden relative flex justify-center items-center group max-[650px]:h-[366px]"
            key={index}
          > */}
            <img
              src={item.src}
              className="h-full w-full object-cover rounded-lg ease-out duration-700 group-hover:scale-110 max-[650px]:rounded-none"
              key={index}
            />
            <div className="bg-[#0000002e] absolute inset-0 group-hover:bg-[#0000004c] cursor-pointer ease-out duration-100"></div>

            <div className="absolute z-10 font-bold text-white text-4xl">
              {item.title}
            </div>
            <button className="w-40 h-12 z-10 absolute bottom-[100px] border border-white text-white rounded-sm transition-all duration-300 ease-in-out hover:bg-gray-200 hover:text-black max-[650px]:bottom-[80px]">
              Ver mas
            </button>
            {/* </div> */}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default BannerGroup;
