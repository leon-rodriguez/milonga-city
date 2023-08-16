import { createKysely } from '@vercel/postgres-kysely';

export default async function handler(req, res) {
  try {
    const { id } = req.query;
    const db = createKysely();
    const experiences = await db
      .selectFrom('experiences')
      .selectAll()
      .where('id', '=', id)
      .execute();
    res.status(200).json({ data: experiences[0] });
  } catch (error) {
    console.log(error);
  }
}
