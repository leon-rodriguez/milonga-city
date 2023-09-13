import { createKysely } from '@vercel/postgres-kysely';

export default async function handler(req, res) {
  try {
    const { id } = req.query;
    const db = createKysely();
    const reviews = await db
      .selectFrom('reviews')
      .selectAll()
      .where('id', '=', id)
      .execute();
    res.status(200).json({ data: reviews[0] });
  } catch (error) {
    console.log(error);
  }
}
