import paypal from '@paypal/checkout-server-sdk';
import { NextResponse } from 'next/server';

const clientID =
  'AWuFeOkGkeBEBmTEHkNTtU49s7Gr5G_jm1i9a_eIfty-PsCQPx4egG3VBmUMsY7aJXm9nfcWrMN1CSVP';
const clientSecret =
  'EJaliiK0WPI54R-NUPNPeiZe9_RD-nb8FNMRjGCGRA-YTMfzUNf4PRkgXSBjRSaxJGTZrafE8WVVZK1I';

const enviroment = new paypal.core.SandboxEnvironment(clientID, clientSecret);

const client = new paypal.core.PayPalHttpClient(enviroment);

// export default async function Post() {
//   console.log('hola api');
//   const request = new paypal.orders.OrdersCreateRequest();

//   request.requestBody({
// intent: 'CAPTURE',
// purchase_units: [
//   {
//     amount: {
//       currency_code: 'USD',
//       value: '100.00',
//       breakdown: {
//         item_total: {
//           currency_code: 'USD',
//           value: '100.00',
//         },
//       },
//     },
//     items: [
//       {
//         name: 'Milonga tour',
//         description: 'un tour de milonga',
//         quantity: '1',
//         unit_amount: {
//           currency_code: 'USD',
//           value: '100.00',
//         },
//       },
//     ],
//   },
// ],
//   });

//   const response = await client.execute(request);
//   console.log(response);

//   //   return NextResponse.json({
//   //     id: response.result.id,
//   //   });
//   res.status(200).send({
//     id: response.result.id,
//   });
// }
export default async function handler(req, res) {
  // let { price, name } = req.body;
  // price = price.toString();

  // console.log(price);
  try {
    const request = new paypal.orders.OrdersCreateRequest();

    request.requestBody({
      intent: 'CAPTURE',
      purchase_units: [
        {
          amount: {
            currency_code: 'USD',
            value: '100.00',
            breakdown: {
              item_total: {
                currency_code: 'USD',
                value: '100.00',
              },
            },
          },
          items: [
            {
              name: 'milonga',
              description: 'ola',
              quantity: '1',
              unit_amount: {
                currency_code: 'USD',
                value: '100.00',
              },
            },
          ],
        },
      ],
    });

    const response = await client.execute(request);

    res.status(200).json({
      id: response.result.id,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}
