import { getImageListItemBarUtilityClass } from '@mui/material';
import { createKysely } from '@vercel/postgres-kysely';

export default async function handler(req, res) {
  // new booking

  // Permitir solicitudes desde cualquier origen
  res.setHeader('Access-Control-Allow-Origin', '*');

  // Permitir los métodos HTTP que quieres permitir
  res.setHeader('Access-Control-Allow-Methods', 'GET, PUT');

  // Permitir los encabezados que quieres permitir
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  // Indicar que la solicitud puede incluir encabezados que no se envían al servidor
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'PUT') {
    const params = req.body;
    const newDate = `${params.date} ${params.time}`;
    // res.status(200).json({ data: params });

    try {
      const db = createKysely();
      //checkea si el usuario existe en base al mail
      const users = await db
        .selectFrom('users')
        .where('mail', '=', params.mail)
        .selectAll()
        .execute();
      let user_id = users[0]?.id ?? null;

      //si el usuario no existe crea uno nuevo y obtiene el id
      if (!user_id) {
        const result = await db
          .insertInto('users')
          .values({
            username: params.name,
            password: 'contrasñea string',
            mail: params.mail,
            country: params.country,
            phone: params.phone,
            hotel: params.hotel,
            authenticated: false,
          })
          .returning(['id'])
          .executeTakeFirstOrThrow();
        user_id = result.id;
      }

      //crea el booking
      const response = await db
        .insertInto('bookings')
        .values({
          experiences_id: params.experiences_id,
          users_id: user_id,
          date: newDate,
          price: params.price,
          persons: params.persons,
          confirmed: false,
          name: params.name,
          mail: params.mail,
          country: params.country,
          phone: params.phone,
          hotel: params.hotel,
          observations: params.observations,
        })
        .returning(['url_hash'])
        .executeTakeFirstOrThrow();
      res.status(200).json({ data: response });
    } catch (error) {
      console.log(error);
      res.status(400).json({ error: error });
    }
    return;
  }

  // get all booking
  try {
    const db = createKysely();
    const bookings = await db.selectFrom('bookings').selectAll().execute();
    res.status(200).json({ data: bookings });
  } catch (error) {
    console.log(error);
  }
}
