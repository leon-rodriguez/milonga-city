'use client';
import { PayPalScriptProvider, PayPalButtons } from '@paypal/react-paypal-js';

const Payment = ({ data, date }) => {
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
            <span className="font-semibold text-xl">{data.price}$</span>
          </div>
          <div className="flex justify-between">
            <span className=" text-xl text-gray-500">Persons: </span>
            <span className="font-semibold text-xl">{data.persons}</span>
          </div>
          <div className="flex justify-between">
            <span className=" text-xl text-gray-500">Date: </span>
            <span className="font-semibold text-xl">{date}</span>
          </div>
        </div>
        <div className="w-[300px] mt-4 mx-auto ">
          <PayPalScriptProvider
            options={{
              clientId:
                'AWuFeOkGkeBEBmTEHkNTtU49s7Gr5G_jm1i9a_eIfty-PsCQPx4egG3VBmUMsY7aJXm9nfcWrMN1CSVP',
            }}
          >
            <PayPalButtons
              style={{
                color: 'gold',
              }}
              createOrder={async () => {
                const res = await fetch(
                  'http://localhost:3000/api/checkout/route',
                  {
                    method: 'POST',
                  }
                );
                // const res = await fetch(
                //   'http://localhost:3000/api/checkout/route',
                //   {
                //     method: 'POST',
                //     headers: {
                //       'Content-Type': 'application/json',
                //     },
                //     body: JSON.stringify({
                //       price: data.price,
                //       name: 'Milonga tour',
                //     }),
                //   }
                // );

                if (!res.ok) {
                  console.log('errorcinho');
                  throw new Error('Error creating order');
                }

                const order = await res.json();
                return order.id;
              }}
              onApprove={(data) => {
                console.log('se aprobo la compra ' + data);
              }}
              onCancel={(data) => {
                console.log('se aborto la operacion ' + data);
              }}
              onError={(data) => {
                console.log('error');
              }}
            />
          </PayPalScriptProvider>
        </div>
      </div>
    </div>
  );
};

export default Payment;

// const res = await fetch(
//   'http://localhost:3000/api/checkout/route',
//   {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify({
//       price: data.price,
//       name: 'Milonga tour',
//     }),
//   }
// );
