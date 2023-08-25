//TODO crear endpoint q devuelva la lista de reservas de los dias
//TODO recibir como query param experience id
//TODO traer la lista de dias y disponibilidad baja media alta depende de cuantos bookings hay

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
      .execute();
    res.status(200).json({ data: experiences });
  } catch (error) {
    console.log(error);
  }
}
