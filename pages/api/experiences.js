import { createKysely } from '@vercel/postgres-kysely';

export default async function handler(req, res) {
  try {
    const db = createKysely();
    const experiences = await db
      .selectFrom('experiences')
      .selectAll()
      .where('active', '=', 'true')
      .execute();
    res.status(200).json({ data: experiences });
  } catch (error) {
    console.log(error);
  }
}
