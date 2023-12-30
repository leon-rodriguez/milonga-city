import { EmailTemplate } from '../../../components/EmailTemplate';
import { EmailClientTemplate } from '../../../components/EmailClientTemplate';
import { EmailContactTemplate } from '../../../components/EmailContactTemplate';
import { Resend } from 'resend';

const resend = new Resend('re_4eo4oooG_FiPMvxJZzyWpQuVmKHBGSRAi');
export default async function handler(req, res) {
  //   const {
  //     reserveType,
  //     name,
  //     mail,
  //     date,
  //     hour,
  //     phone,
  //     hotel,
  //     price,
  //     persons,
  //     nationality,
  //     observations,
  //     emailType,
  //     message,
  //   } = req.body;

  //   if (emailType === 'reserve') {
  //     try {
  //       const data = await resend.emails.send({
  //         from: 'milonga.city<info@milonga.city>',
  //         to: ['info@milonga.city'],
  //         subject: `Reserva de ${reserveType}`,
  //         react: EmailTemplate({
  //           reserveType,
  //           name,
  //           mail,
  //           date,
  //           hour,
  //           phone,
  //           hotel,
  //           price,
  //           persons,
  //           nationality,
  //           observations,
  //           message,
  //         }),
  //       });

  //       res.status(200).json({
  //         data: data,
  //       });
  //     } catch (error) {
  //       console.error(error);
  //       res.status(500).json({ error: 'Internal Server Error' });
  //     }
  //   }

  //   if (emailType === 'reserve') {
  //     try {
  //       const data = await resend.emails.send({
  //         from: 'milonga.city<info@milonga.city>',
  //         to: [mail],
  //         subject: `Reserva de ${reserveType}`,
  //         react: EmailClientTemplate({
  //           reserveType,
  //           name,
  //           date,
  //           hour,
  //           price,
  //         }),
  //       });

  //       res.status(200).json({
  //         data: data,
  //       });
  //     } catch (error) {
  //       console.error(error);
  //       res.status(500).json({ error: 'Internal Server Error' });
  //     }
  //   }

  //   if (emailType === 'contact') {
  //     try {
  //       const data = await resend.emails.send({
  //         from: 'milonga.city<info@milonga.city>',
  //         to: ['info@milonga.city'],
  //         subject: `Consulta`,
  //         react: EmailContactTemplate({
  //           name,
  //           mail,
  //           phone,
  //           message,
  //         }),
  //       });

  //       res.status(200).json({
  //         data: data,
  //       });
  //     } catch (error) {
  //       console.error(error);
  //       res.status(500).json({ error: 'Internal Server Error' });
  //     }
  //   }
  // }

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
    emailType,
    message,
  } = req.body;

  try {
    if (emailType === 'reserve') {
      const dataToMilongaCity = await resend.emails.send({
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
          message,
        }),
      });

      const dataToClient = await resend.emails.send({
        from: 'milonga.city<info@milonga.city>',
        to: [mail],
        subject: `Reserva de ${reserveType}`,
        react: EmailClientTemplate({
          reserveType,
          name,
          date,
          hour,
          price,
        }),
      });

      res.status(200).json({
        dataToMilongaCity,
        dataToClient,
      });
    } else if (emailType === 'contact') {
      const data = await resend.emails.send({
        from: 'milonga.city<info@milonga.city>',
        to: ['info@milonga.city'],
        subject: `Consulta`,
        react: EmailContactTemplate({
          name,
          mail,
          phone,
          message,
        }),
      });

      res.status(200).json({
        data,
      });
    } else {
      res.status(400).json({ error: 'Invalid emailType' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}
