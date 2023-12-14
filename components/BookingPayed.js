import { RxDoubleArrowDown } from 'react-icons/rx';
import Link from 'next/link';
import { useState } from 'react';

const BookingPayed = () => {
  const [showDetails, setShowDetails] = useState(false);
  return (
    <div
      class={`w-full shadow-lg flex justify-center items-start bg-gray-100 ${
        showDetails ? ' h-[750px]' : ' h-[700px]'
      }`}
    >
      <div
        class="w-[580px] rounded-lg bg-card text-card-foreground max-w-xl mx-auto text-center"
        data-v0-t="card"
      >
        <div class="flex flex-col space-y-1.5 p-6">
          <h3 class="font-semibold tracking-tight text-2xl">
            Payment Successful
          </h3>
        </div>
        <div class=" pt-10 flex flex-col items-center space-y-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="w-16 h-16 text-green-500"
          >
            <polyline points="20 6 9 17 4 12"></polyline>
          </svg>
          <p class="text-xl text-gray-700">
            Your payment has been processed successfully.
          </p>
          <p class="w-[425px] text-md text-gray-600">
            Thank you for your purchase. A receipt has been sent to your email.
            Please check your inbox.
          </p>
        </div>
        <div
          className={` transition-all duration-300 ease-in ${
            showDetails ? ' visible' : ' hidden'
          }  cursor-default mt-8`}
        >
          <h1 className="text-2xl">Details:</h1>
          <div className=" gap-3 grid">
            <div className="text-left pl-[75px]">
              <span className="text-2xl mr-4">Price: </span>
              <span className="text-xl">100</span>
            </div>
            <div className="text-left pl-[75px]">
              <span className="text-2xl mr-4">Date: </span>
              <span className="text-xl">20/08/2024</span>
            </div>
            <div className="text-left pl-[75px]">
              <span className="text-2xl mr-4">Hour: </span>
              <span className="text-xl">12:00</span>
            </div>
            <div className="text-left pl-[75px]">
              <span className="text-2xl mr-4">Place: </span>
              <span className="text-xl">a`poerpwq fds</span>
            </div>
          </div>
        </div>
        <div class="w-full flex items-center justify-center mt-12">
          <Link href="/">
            <button class="w-[200px] h-12 rounded-3xl flex justify-center items-center border-2 border-black text-black text-xl font-bold cursor-pointer transition-all duration-100 ease-in bg-transparent hover:bg-[#fff]/80 ">
              Return to Home
            </button>
          </Link>
        </div>
        <div class="w-full flex items-center justify-center mt-6">
          <button
            class="w-[200px] h-12 rounded-3xl flex justify-center items-center text-white text-xl cursor-pointer transition-all duration-100 ease-in bg-[#000] hover:bg-[#000]/80 "
            onClick={() => {
              setShowDetails(!showDetails);
            }}
          >
            View details
            <RxDoubleArrowDown className="text-white ml-2" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookingPayed;
