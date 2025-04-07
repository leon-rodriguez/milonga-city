const BannerInternational = ({ title, description, src, cta }) => {
  return (
    <div className="bg-gray-100 w-full px-20">
      <div className="mt-4 relative flex justify-center items-start cursor-pointer rounded-lg overflow-hidden group">
        <img
          src={src}
          className="w-full object-cover h-[400px] rounded-lg ease-out duration-700 group-hover:scale-110"
        />
        <div className="bg-[#0000002e] absolute inset-0 group-hover:bg-[#0000004c] ease-out duration-100"></div>
        <div className="font-bold text-4xl text-white absolute z-20 mt-24">
          {title}
        </div>
        <div className="w-[600px] text-2xl text-white absolute z-20 mt-40 text-center">
          {description}
        </div>
        <button className="w-40 h-12 z-20 absolute bottom-[80px] border border-white text-white rounded-sm transition-all duration-300 ease-in-out hover:bg-gray-200 hover:text-black">
          a
        </button>
      </div>
    </div>
  );
};

export default BannerInternational;
