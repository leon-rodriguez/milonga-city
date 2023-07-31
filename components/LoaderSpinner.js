const LoaderSpinner = ({ size }) => {
  return (
    <div
      className={`mt-8 ml-8 w-[100px] h-[100px] rounded-full border-4 border-[rgba(0, 0, 0, .1)] border-l-[#0088cc] animate-[spin_1s_linear_infinite]`}
    ></div>
  );
};

export default LoaderSpinner;
