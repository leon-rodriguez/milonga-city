import { createKysely } from '@vercel/postgres-kysely';

export default async function handler(req, res) {
  try {
    const { id } = req.query;
    const db = createKysely();
    const users = await db
      .selectFrom('users')
      .selectAll()
      .where('id', '=', id)
      .execute();
    res.status(200).json({ data: users[0] });
  } catch (error) {
    console.log(error);
  }
}
