import { getImageListItemBarUtilityClass } from '@mui/material';
import { createKysely } from '@vercel/postgres-kysely';

export default async function handler(req, res) {
  // new booking

  if (req.method === 'PUT') {
    const params = req.body;
    const newDate = `${params.date} ${params.time}`;
    // res.status(200).json({ data: params });

    try {
      const db = createKysely();
      //TODO checkear si el usuario existe en base al mail

      const users = await db
        .selectFrom('users')
        .where('mail', '=', params.mail)
        .selectAll()
        .execute();
      let user_id = users[0]?.id ?? null;

      if (!users_id) {
        //TODO si no existe crearlo
        //TODO obtener el id de usuario ya sea del nuevo creado o del q ya existe
        const result = await db
          .insertInto('users')
          .values({
            username: params.username,
            password: params.password,
            mail: 'eafoi@gmail.com',
            country: 'arew',
            phone: '124332432',
            hotel: 'continetnal',
            authenticated: false,
          })
          .returning(['id'])
          .executeTakeFirstOrThrow();
        user_id = result.id;
      }

      const response = await db
        .insertInto('bookings')
        .values({
          experiences_id: params.experiences_id,
          users_id: user_id,
          date: newDate,
          price: params.price,
          persons: params.persons,
        })
        .executeTakeFirst();
      res.status(200).json({ data: response });
    } catch (error) {
      console.log(error);
      res.status(400).json({ data: error });
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
