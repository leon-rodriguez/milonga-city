import { RxDoubleArrowDown, RxDoubleArrowUp } from 'react-icons/rx';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';

const BookingPayed = ({ data, date, hour }) => {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div
      className={`w-full shadow-lg flex justify-center items-start bg-gray-100 ${
        showDetails ? ' h-[750px]' : ' h-[700px]'
      }`}
    >
      <div
        className="w-[580px] max-[550px]:w-full rounded-lg bg-card text-card-foreground mx-auto text-center"
        data-v0-t="card"
      >
        <div className="flex flex-col space-y-1.5 p-6">
          <h3 className="font-semibold tracking-tight text-2xl">
            Contact Successful
          </h3>
        </div>
        <div className=" pt-10 flex flex-col items-center space-y-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-16 h-16 text-green-500"
          >
            <polyline points="20 6 9 17 4 12"></polyline>
          </svg>
          <p className="text-xl text-gray-700">Your reserve has been sent.</p>
          <p className="max-w-[425px] text-md text-gray-600">
            Thank you for your reserve, in a few days an email will be sent with
            the confirmation.
          </p>
        </div>
        <div
          className={` transition-all duration-300 ease-in ${
            showDetails ? ' visible' : ' hidden'
          }  cursor-default mt-8`}
        >
          <h1 className="text-2xl font-bold">Details:</h1>
          <div className=" gap-3 grid">
            <div className="text-left pl-[75px]">
              <span className="text-2xl mr-4">Price: </span>
              <span className="text-xl text-gray-500">$</span>
              <span className="text-xl text-gray-500">{data.price}</span>
            </div>
            <div className="text-left pl-[75px]">
              <span className="text-2xl mr-4">Date: </span>
              <span className="text-xl text-gray-500">{date}</span>
            </div>
            <div className="text-left pl-[75px]">
              <span className="text-2xl mr-4">Hour: </span>
              <span className="text-xl text-gray-500">{hour}</span>
            </div>
          </div>
        </div>
        <div className="w-full flex items-center justify-center mt-12">
          <Link href="/">
            <button className="w-[200px] h-12 rounded-3xl flex justify-center items-center border-2 border-black text-black text-xl font-bold cursor-pointer transition-all duration-100 ease-in bg-transparent hover:bg-[#fff]/80 ">
              Return to Home
            </button>
          </Link>
        </div>
        <div className="w-full flex items-center justify-center mt-6">
          <button
            className="w-[200px] h-12 rounded-3xl flex justify-center items-center text-white text-xl cursor-pointer transition-all duration-100 ease-in bg-[#000] hover:bg-[#000]/80 "
            onClick={() => {
              setShowDetails(!showDetails);
            }}
          >
            View details
            {showDetails ? (
              <RxDoubleArrowUp className="text-white ml-2" />
            ) : (
              <RxDoubleArrowDown className="text-white ml-2" />
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookingPayed;
