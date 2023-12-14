import { PayPalScriptProvider, PayPalButtons } from '@paypal/react-paypal-js';

const Payment = () => {
  return (
    <div className="h-[55 0px] w-full flex justify-center">
      <div className="w-[500px] h-full shadow-2xl bg-white">
        <div className="w-full h-[100px] flex flex-col justify-end items-center">
          <div>
            <h1 className="text-2xl font-semibold leading-none tracking-tight">
              Payment Information
            </h1>
          </div>
          <div className="mt-4">
            <h2 className="text-md text-muted-foreground">
              Proceed to checkout
            </h2>
          </div>
        </div>
        <div className=" w-full h-[200px] px-24 pt-4 space-y-8">
          <div className="flex justify-between">
            <span className=" text-xl text-gray-500">Price: </span>
            <span className="font-semibold text-xl">100$</span>
          </div>
          <div className="flex justify-between">
            <span className=" text-xl text-gray-500">Persons: </span>
            <span className="font-semibold text-xl">3</span>
          </div>
          <div className="flex justify-between">
            <span className=" text-xl text-gray-500">Date: </span>
            <span className="font-semibold text-xl">20/08/2023</span>
          </div>
        </div>
        <div className="w-[300px] mt-4 mx-auto ">
          <PayPalScriptProvider>
            <PayPalButtons
              style={{
                color: 'gold',
              }}
              onClick={(data) => {
                console.log('fdjnkjndsa' + data);
              }}
            />
          </PayPalScriptProvider>
        </div>
      </div>
    </div>
  );
};

export default Payment;
