import { createKysely } from '@vercel/postgres-kysely';

export default async function handler(req, res) {
  try {
    const db = createKysely();
    const users = await db.selectFrom('users').selectAll().execute();
    res.status(200).json({ data: users });
  } catch (error) {
    console.log(error);
  }
}
