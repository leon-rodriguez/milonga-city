-- creamos la tabla experiences
CREATE TABLE experiences (
    id serial PRIMARY KEY,
    title VARCHAR (255) NOT NULL,
    extId VARCHAR (255),
    imgSrc VARCHAR (255),
    type VARCHAR (255),
    body TEXT,
    cta VARCHAR (255),
    price NUMERIC,
    currency VARCHAR (3),
    showInHome BOOLEAN
)

CREATE TABLE bookings (
    id serial PRIMARY KEY,
    date DATE NOT NULL,
    experiences_id INTEGER,
    CONSTRAINT fk_experiences FOREIGN KEY (experiences_id)
        REFERENCES experiences (id),
    users_id INTEGER,
    CONSTRAINT fk_users FOREIGN KEY (users_id)
        REFERENCES users (id)
);

ALTER TABLE reviews ADD COLUMN extendedDescription VARCHAR NOT NULL;
ALTER TABLE reviews ADD COLUMN extendedDetails VARCHAR NOT NULL;

CREATE TABLE users (
    id serial PRIMARY KEY,
    userName VARCHAR(100) NOT NULL,
    password text NOT NULL,
    mail TEXT NOT NULL,
    country TEXT,
);

-- agregamos registros a la tabla
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

-- agregamos una columna
ALTER TABLE experiences ADD COLUMN showInHome BOOLEAN DEFAULT false;


UPDATE experiences SET showInHome = true WHERE id = 1;  
UPDATE experiences SET showInHome = true WHERE id = 2;  
UPDATE experiences SET showInHome = true WHERE id = 4;  

ALTER TABLE experiences RENAME COLUMN showInHome TO active;

ALTER TABLE experiences ADD COLUMN extendedDescription VARCHAR NOT NULL;
ALTER TABLE experiences ADD COLUMN extendedDetails VARCHAR NOT NULL;

ALTER TABLE experiences ALTER COLUMN extendedDescription TYPE TEXT ;
ALTER TABLE experiences ALTER COLUMN extendedDetails TYPE TEXT ;


CREATE TABLE reviews (
    id serial PRIMARY KEY,
    userName VARCHAR (100) NOT NULL,
    body VARCHAR NOT NULL,
    date VARCHAR (255),
    rating NUMERIC(5),
)

INSERT INTO reviews (
    userName,
    body,
    date,
    rating
) VALUES (
    'John Doe',
    'John Doe Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur tempus risus nec tortor posuere tincidunt. Vivamus ut velit at ipsum laoreet vestibulum. Mauris malesuada
    a sem eget commodo. Duis ut elit luctus, ultrices massa ut,
    condimentum urna. Nullam id lectus vitae lacus sagittis
    hendrerit vel sed nunc.',
    '20/3/1970',
    5
),
(
    'Leon rodriguez',
    'Estuvo ipola perop me hubiera gustado conocer a fito paez me voy decepcionado',
    '20/3/2023',
    1
),
(
    'Christian Motta',
    'ランダムな単語ジェネレーターを使用して、ランダムな単語のブレインストーミングを行うことができます。これはブレインストーミングの一種で、単語をランダムに選び、解決しようとしている課題に関連した新しいアイデアを考え出します。目標は、通常の思考パターンに限定されるのではなく、心を新たな限界に押し上げることです。',
    '20/3/2023',
    4
)

INSERT INTO reviews (
    userName,
    body,
    date,
    rating,
) VALUES (
    'Christian Motta',
    'ランダムな単語ジェネレーターを使用して、ランダムな単語のブレインストーミングを行うことができます。これはブレインストーミングの一種で、単語をランダムに選び、解決しようとしている課題に関連した新しいアイデアを考え出します。目標は、通常の思考パターンに限定されるのではなく、心を新たな限界に押し上げることです。',
    '12/4/1890'
    4,
)


-- milonga visit excursion
UPDATE experiences SET extendedDescription = '
## There are only a few Milongas that keep the essence of the originals, as they were in the 30s and 40s -known as “the Golden Age of Tango”. In these Milongas, respect for codes and ceremonies, elegance in the way of walking around the dance floor or the way in which you should invite a woman to dance remain unchanged. These are the places we are headed for during our tour.


Through the porteño neighbourhoods with their streets full of people until late night, we will get close to the most emblematic Tango dance clubs, where the greatest dancers (known as milongueros) shined through years and years, through nights and nights of Milonga… those milongueros with whom the new generations are learning to dance.


Everything seems ordinary until we go behind that door, move aside that curtain or walk up those stairs, and the amazing world of the Milongas opens up before us!


We invite you to join us; let’s gather stories and live a real Tango experience!
'  WHERE id = 1;  

UPDATE experiences SET extendeddetails = '
### What is included in the tour?

- Private transport from your Hotel and throughout the entire tour.
- Guided Tango tour through the Milongas in Buenos Aires.
- Reservation and Tickets for two Milongas
- A drink in each of the Milongas


### What is not included in this tour?


- Dinner
- Tango Show
- Tango Lessons
- Taxi Dancer
'  WHERE id = 1;  


-- lear tango with profesional danceers
UPDATE experiences SET extendedDescription = '
In this experience, a real-life professional Tango couple will teach you the basic steps of Tango in a simple and funny way, to became a “Tango dancer”.
“Tango”- designed by UNESCO as “Intangible Cultural Heritage of Humanity”- is an unique and wonderful dance, danced by many people around the world.
Enjoy an amazing live tango exhibition in an authentic traditional Tango School in Buenos Aires with one of the most important professional tango dancers.
'  WHERE id = 4;  

UPDATE experiences SET extendeddetails = '
### What is included in the tour?

- Learn basic steps to develop your own style of dance.
- Discover the secrets of Tango to dance in a Milonga
- Know the origin of this beatiful dance of Buenos Aires in the beginnings of 1900
- No experience necessary. Everyone can dance Tango
'  WHERE id = 4;  


-- roundtrip`airport
UPDATE experiences SET extendedDescription = '
## Forget the long lines and confusion associated with finding transportation from the Airports in Buenos Aires. Skip the taxis and shuttles and travel with confidence -and without worry- by scheduling a private car. Choose from a 3-person sedan or a 5-person Suv or Van. Sit back and relax as the vehicle travels from the Airport to Buenos Aires accommodation.


Getting from the Airport to a local hotel can be complicated, but it doesn´t have to be. There is a convenient option that takes all the hassle and guesswork out of renting a car or arranging for a shared shuttle after a long flight.


Simplify the entire process upon arrival or departure from or to the Airport in Buenos Aires. It couldn´t be easier. After leaving the baggage claim aerea, look for a professional chauffeur that´s holding a personalized sign. That´s it.


- Private arrivals or departures transfer to or from AEP or EZE (Jorge Newbery and Ministro Pistarini Airport in Buenos Aires)
- Skip the stress of taxis or shuttles and enjoy private, affordable airport transportation.
- Simply call your driver upon arrival for immediate pick up.
- Service available 24 hours a day, seven days a week.
- Simply purchase, confirm and meet your driver

'  WHERE id = 2;  

UPDATE experiences SET extendeddetails = '
### What is included in the tour?
s
- One-way private transfer
- All taxes
- Fuel surcharges
- Tolls (if taken)
- Parking or airport fees (if applicable)
- Amenities


### What is not included in this tour?


- Gratuities (up to the customer´s discretion)
'  WHERE id = 2;  

ALTER TABLE reviews ADD COLUMN bookings_id INTEGER;

ALTER TABLE reviews
ADD CONSTRAINT fk_bookings FOREIGN KEY (bookings_id)
REFERENCES bookings (id);

CREATE TABLE bookings ( 
    id serial PRIMARY KEY,
    date DATE NOT NULL,
    experiences_id INTEGER,
    CONSTRAINT fk_experiences FOREIGN KEY (experiences_id)
        REFERENCES experiences (id),
    users_id INTEGER,
    CONSTRAINT fk_users FOREIGN KEY (users_id)
        REFERENCES users (id)
);

-- crear users
-- añadir foreign key de users a booking 
-- crear bookings
-- poner foreign key de bookings a reviews con alter table

-- hacer inserts de usuarios y de bookings
INSERT INTO users (
    userName,
    password,
    mail,
    country
) VALUES (
    'leonidas57',
    '^R*FDSÑflqpñ3krpfq2',
    'leonrodriguezmotta57@gmail.com',
    'argentina'
),
(
    'hipercubus',
    'cuboshiper',
    'cubos@gmail.com',
    'japon'
),
(
    'messi',
    'campeones123',
    'mesi@gmail.com',
    'argentina'
)

INSERT INTO bookings (
    date,
    experiences_id,
    users_id
) VALUES (
    '2025-03-14',
    3,
    1
)

UPDATE reviews SET bookings_id = 1;  

SELECT * FROM reviews
        JOIN bookings ON bookings.id = reviews.bookings_id 
        WHERE bookings.date = "2023-09-28";

SELECT * FROM bookings
        JOIN users ON users.id = bookings.users_id
        WHERE users.username = 'messi';