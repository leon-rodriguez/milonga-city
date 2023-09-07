import { createKysely } from '@vercel/postgres-kysely';
//TODO agregar campos personas precio
//TODO hacer cosito de reviews y users

export default async function handler(req, res) {
  // new booking

  if (req.method === 'PUT') {
    const params = req.body;
    const newDate = `${params.date}T${params.time}Z`;
    // res.status(200).json({ data: params });

    try {
      const db = createKysely();
      const response = await db
        .insertInto('bookings')
        .values({
          experiences_id: params.experiences_id,
          users_id: params.users_id,
          date: newDate,
        })
        .executeTakeFirst();
      res.status(200).json({ data: response });
    } catch (error) {
      console.log(error);
    }
    return;
  }

  try {
    const db = createKysely();
    const bookings = await db.selectFrom('bookings').selectAll().execute();
    res.status(200).json({ data: bookings });
  } catch (error) {
    console.log(error);
  }
}
