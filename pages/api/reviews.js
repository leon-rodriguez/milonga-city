import { createKysely } from '@vercel/postgres-kysely';

export default async function handler(req, res) {
  const params = req.query;

  try {
    const db = createKysely();
    const reviews = await db
      .selectFrom('reviews')
      .leftJoin('bookings', 'reviews.bookings_id', 'bookings.id')
      .selectAll()
      .where('experiences_id', '=', params.experiences_id)
      .execute();
    res.status(200).json({ data: reviews });
  } catch (error) {
    console.log(error);
  }
}
