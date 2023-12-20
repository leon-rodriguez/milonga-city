import { createKysely } from '@vercel/postgres-kysely';

export default async function handler(req, res) {
  // new message

  if (req.method === 'PUT') {
    const params = req.body;

    try {
      const db = createKysely();
      const response = await db
        .insertInto('messages')
        .values({
          message: params.message,
          name: params.name,
          mail: params.mail,
          phone: params.phone,
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
    const messages = await db.selectFrom('messages').selectAll().execute();
    res.status(200).json({ data: messages });
  } catch (error) {
    console.log(error);
  }
}
//Id
