import { PayPalScriptProvider, PayPalButtons } from '@paypal/react-paypal-js';

const Payment = () => {
  return (
    <div className="h-[1800px] w-full flex justify-center">
      <div className="w-[500px] h-full shadow-2xl">
        <div className="w-full h-[150px] flex flex-col justify-end items-center">
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
        <div className=" w-full h-[200px] px-20 pt-8 space-y-8">
          <div className="flex justify-between">
            <span className="font-semibold text-xl">Price: </span>
            <span className="font-medium text-xl">100$</span>
          </div>
          <div className="flex justify-between">
            <span className="font-semibold text-xl">Persons: </span>
            <span className="font-medium text-xl">3</span>
          </div>
          <div className="flex justify-between">
            <span className="font-semibold text-xl">Date: </span>
            <span className="font-medium text-xl">20/08/2023</span>
          </div>
        </div>
        <div className="w-[300px] mt-12 mx-auto ">
          <PayPalScriptProvider>
            <PayPalButtons
              style={{}}
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
