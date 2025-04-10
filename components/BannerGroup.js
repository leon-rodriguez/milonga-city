const BannerGroup = ({ title, srcs }) => {
  return (
    <div className="w-full px-20 mb-20">
      <h1 className="text-center font-bold text-2xl mb-8">{title}</h1>
      <div className={`w-full grid grid-cols-${srcs.length} h-[400px] gap-4`}>
        {srcs.map((src, index) => (
          <div
            className="overflow-hidden relative flex justify-center items-center group"
            key={index}
          >
            <img
              src={src}
              className="h-full w-full object-cover rounded-lg ease-out duration-700 group-hover:scale-110"
              key={index}
            />
            <div className="bg-[#0000002e] absolute inset-0 group-hover:bg-[#0000004c] cursor-pointer ease-out duration-100"></div>

            <div className="absolute z-10 font-bold text-white text-4xl">
              hola
            </div>
            <button className="w-40 h-12 z-10 absolute bottom-[100px] border border-white text-white rounded-sm transition-all duration-300 ease-in-out hover:bg-gray-200 hover:text-black">
              asdas
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BannerGroup;
