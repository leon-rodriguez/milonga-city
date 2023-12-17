import { EmailTemplate } from '../../../components/EmailTemplate';
import { Resend } from 'resend';

const resend = new Resend('re_4eo4oooG_FiPMvxJZzyWpQuVmKHBGSRAi');

// export async function POST() {
//   try {
//     const data = await resend.emails.send({
//       from: 'Acme <onboarding@resend.dev>',
//       to: ['ladirecciondisponible@gmail.com'],
//       subject: `Reserva de ${params.reserveType}`,
//       react: EmailTemplate({ firstName: 'John' }),
//     });

//     return Response.json(data);
//   } catch (error) {
//     return Response.json({ error });
//   }
// }
export default async function handler(req, res) {
  const {
    reserveType,
    name,
    mail,
    date,
    hour,
    phone,
    hotel,
    price,
    persons,
    nationality,
    observations,
  } = req.body;

  try {
    const data = await resend.emails.send({
      from: 'Acme <onboarding@resend.dev>',
      to: ['leonrodriguezmotta57@gmail.com'],
      subject: `Reserva de ${reserveType}`,
      react: EmailTemplate({
        reserveType,
        name,
        mail,
        date,
        hour,
        phone,
        hotel,
        price,
        persons,
        nationality,
        observations,
      }),
    });

    res.status(200).json({
      data: data,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}
