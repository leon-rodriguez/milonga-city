import { createKysely } from '@vercel/postgres-kysely';
import { sql } from 'kysely';

export default async function handler(req, res) {
  const params = req.query;
  try {
    const db = createKysely();
    const experiences = await db
      .selectFrom('bookings')
      .selectAll()
      .where(sql`DATE(date)`, '=', params.date)
      .where('experiences_id', '=', params.experience)
      .execute();
    res.status(200).json({ data: experiences });
  } catch (error) {
    console.log(error);
  }
}
