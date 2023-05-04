CREATE TABLE experiences (
    id serial PRIMARY KEY,
    title VARCHAR (255) NOT NULL,
    extId VARCHAR (255),
    imgSrc VARCHAR (255),
    type VARCHAR (255),
    body TEXT,
    cta VARCHAR (255),
    price NUMERIC,
    currency VARCHAR (3)
)

INSERT INTO experiences (
    title,
    extId,
    imgSrc,
    type,
    body,
    cta,
    price,
    currency
) VALUES (
    'Private Bodegón Dinner and Tango Club´s tour',
    '393257',
    '../public/Images/bailarines.jpg',
    'Services, Tour',
    'Each porteño Bodegón is a space of living history, and Milongas are an amazing event where Tango culture lives. Join us to discover both, tipical gastronomy and Tango music and dance',
    'Explore',
    120,
    'USD'
),
(
    'Learn Tango Dancing With Professional Dancers',
    '297778',
    '../public/Images/bailarines.jpg',
    'Online Experiences',
    'Learn basic steps to develop your own style of dance..',
    'Explore',
    50,
    'USD' 
),
(
    'Dinner and Milonga Visit Excursion',
    '296413',
    '../public/Images/bailarines.jpg',
    'Dinner and Show, Services',
    'Enjoy an amazing Dinner at Puerto Madero, one of the most exclusive Neighbourhoods in Buenos Aires with a wonderful river view, and discover the real Tango dance in a Milonga porteña.',
    'Explore',
    170,
    'USD'
),
(
    'Total Experience of Tango',
    '296419',
    'https://milonga-city.com.ar/wp/wp-content/uploads/2022/07/Optimizada-Web-550x358.jpg',
    'TClasses, Dinner and Show, Experiences, Tourour',
    'This experience will allow all Tango lovers to enjoy a Tango dance Lesson, a Dinner Show and, then, a visit to a traditional Milonga.',
    'Explore',
    170,
    'USD'
)