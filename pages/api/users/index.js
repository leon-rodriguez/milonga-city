import { createKysely } from '@vercel/postgres-kysely';

export default async function handler(req, res) {
  if (req.method === 'PUT') {
    const params = req.body;
    try {
      const db = createKysely();
      const response = await db
        .insertInto('users')
        .values({
          username: params.username,
          password: params.password,
          mail: params.mail,
          country: params.country,
          phone: params.phone,
          hotel: params.hotel,
          authenticated: params.authenticated,
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
    const users = await db.selectFrom('users').selectAll().execute();
    res.status(200).json({ data: users });
  } catch (error) {
    console.log(error);
  }
}
//Id
