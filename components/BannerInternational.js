const BannerInternational = () => {
  return (
    <div className="bg-gray-100 w-full h-72 px-6">
      <h1 className="text-center font-bold text-4xl pt-2">
        Viaja Internacional
      </h1>
      <div className="mt-4 relative flex justify-center items-center cursor-pointer overflow-hidden group">
        <img
          src="/Images/home/banner.jpg"
          className="w-full object-cover h-72 ease-out duration-700 group-hover:scale-110"
        />
        <div className="bg-[#0000002e] absolute inset-0 group-hover:bg-[#0000004c] ease-out duration-100"></div>
        <div className="font-bold text-4xl text-white absolute z-20">
          Viajes Internacionales
        </div>
      </div>
    </div>
  );
};

export default BannerInternational;
