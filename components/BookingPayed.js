import { RxDoubleArrowDown } from 'react-icons/rx';
import Link from 'next/link';
import { useState } from 'react';

const BookingPayed = () => {
  const [showDetails, setShowDetails] = useState(null);
  return (
    <div class="w-full h-[700px] shadow-lg flex justify-center items-start bg-gray-100">
      <div
        class="rounded-lg bg-card text-card-foreground max-w-xl mx-auto text-center"
        data-v0-t="card"
      >
        <div class="flex flex-col space-y-1.5 p-6">
          <h3 class="font-semibold tracking-tight text-2xl">
            Payment Successful
          </h3>
        </div>
        <div class="p-6 flex flex-col items-center space-y-4">
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
          <p class="text-md text-gray-600">
            Thank you for your purchase. A receipt has been sent to your email.
            Please check your inbox.
          </p>
        </div>
        <div
          className={`${
            showDetails ? ' hidden' : 'bg-[#0088cc48] cursor-default'
          }`}
        >
          <h1>details</h1>
        </div>
        <div class="w-full flex items-center justify-center mt-4">
          <Link href="/">
            <button class="w-[200px] h-12 rounded-3xl flex justify-center items-center border-2 border-black text-black text-xl font-bold cursor-pointer transition-all duration-100 ease-in bg-transparent hover:bg-[#fff]/80 ">
              Return to Home
            </button>
          </Link>
        </div>
        <div class="w-full flex items-center justify-center mt-6">
          <button class="w-[200px] h-12 rounded-3xl flex justify-center items-center text-white text-xl cursor-pointer transition-all duration-100 ease-in bg-[#000] hover:bg-[#000]/80 ">
            View details
            <RxDoubleArrowDown className="text-white ml-2" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookingPayed;
