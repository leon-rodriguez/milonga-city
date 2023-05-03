import { sql } from '@vercel/postgres-kysely';

const experiencesList = [
  {
    extId: '296430',
    imgSrc: '../public/Images/bailarines.jpg',
    title: 'Milonga Visit Excursion',
    type: 'Tour',
    body: 'If you start going deep into the City of Buenos Aires you will find Tango and Milonga as they were decades ago; Tango dance and music are alive in this city’s nightlife, waiting for you to discover them.',
    cta: 'Explore',
    price: 90,
    currency: 'USD',
  },
  {
    extId: '296419',
    imgSrc: '../public/Images/bailarines.jpg',
    title: 'Roundtrip Airport Private Transfer in Buenos Aires',
    type: 'Services',
    body: 'Forget the long lines and confusion associated with finding transportation to or from the Airports in Buenos Aires. Pre-book your car and meet your Driver at the Airport/Hotel!.',
    cta: 'Explore',
    price: 20,
    currency: 'USD',
  },
  {
    extId: '393257',
    imgSrc: '../public/Images/bailarines.jpg',
    title: 'Private Bodegón Dinner and Tango Club´s tour',
    type: 'Services, Tour',
    body: 'Each porteño Bodegón is a space of living history, and Milongas are an amazing event where Tango culture lives. Join us to discover both, tipical gastronomy and Tango music and dance',
    cta: 'Explore',
    price: 120,
    currency: 'USD',
  },
  {
    extId: '297778',
    imgSrc: '../public/Images/bailarines.jpg',
    title: 'Learn Tango Dancing With Professional Dancers',
    type: 'Online Experiences',
    body: 'Learn basic steps to develop your own style of dance..',
    cta: 'Explore',
    price: 50,
    currency: 'USD',
  },
  {
    extId: '296413',
    imgSrc: '../public/Images/bailarines.jpg',
    title: 'Dinner and Milonga Visit Excursion',
    type: 'Dinner and Show, Services',
    body: 'Enjoy an amazing Dinner at Puerto Madero, one of the most exclusive Neighbourhoods in Buenos Aires with a wonderful river view, and discover the real Tango dance in a Milonga porteña.',
    cta: 'Explore',
    price: 170,
    currency: 'USD',
  },
  {
    extId: '296419',
    imgSrc:
      'https://milonga-city.com.ar/wp/wp-content/uploads/2022/07/Optimizada-Web-550x358.jpg',
    title: 'Total Experience of Tango',
    type: 'TClasses, Dinner and Show, Experiences, Tourour',
    body: 'This experience will allow all Tango lovers to enjoy a Tango dance Lesson, a Dinner Show and, then, a visit to a traditional Milonga.',
    cta: 'Explore',
    price: 170,
    currency: 'USD',
  },
];

export async function up(db) {
  await db.schema
    .createTable('experiences')
    .addColumn('id', 'serial', (col) => col.primaryKey())
    .addColumn('extId', 'varchar', (col) => col.notNull())
    .addColumn('imgSrc', 'varchar')
    .addColumn('type', 'varchar(20)', (col) => col.notNull())
    .addColumn('body', 'varchar')
    .addColumn('cta', 'varchar')
    .addColumn('price', 'numeric')
    .addColumn('currency', 'varchar(3)', (col) => col.notNull())
    .addColumn('created_at', 'timestamp', (col) =>
      col.defaultTo(sql`now()`).notNull()
    )
    .execute();

  await db.insertInto('experiences').values(experiencesList).execute();
}

export async function down(db) {
  await db.schema.dropTable('pet').execute();
}
