import { createKysely } from '@vercel/postgres-kysely';
//TODO hacer cosito de reviews y users

export default async function handler(req, res) {
  // new booking

  if (req.method === 'PUT') {
    const params = req.body;
    // res.status(200).json({ data: params });

    try {
      const db = createKysely();
      const response = await db
        .insertInto('reviews')
        .values({
          username: params.username,
          body: params.body,
          publisheddate: params.publisheddate,
          rating: params.rating,
          bookings_id: params.bookings_id,
        })
        .executeTakeFirst();
      res.status(200).json({ data: response });
    } catch (error) {
      console.log('error');
    }
    return;
  }

  try {
    const db = createKysely();
    const reviews = await db.selectFrom('reviews').selectAll().execute();
    res.status(200).json({ data: reviews });
  } catch (error) {
    console.log(error);
  }
}
//Id
