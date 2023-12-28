import { EmailTemplate } from '../../../components/EmailTemplate';
import { Resend } from 'resend';

const resend = new Resend('re_4eo4oooG_FiPMvxJZzyWpQuVmKHBGSRAi');
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
      from: 'milonga.city<info@milonga.city>',
      to: ['info@milonga.city'],
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
