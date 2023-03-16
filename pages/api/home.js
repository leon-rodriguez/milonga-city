export const homeList = [
  {
    id: 1,
    imgSrc: '../public/Images/bailarines.jpg',
    title: 'Milonga Visit Excursion',
    type: 'Tour',
    body: 'If you start going deep into the City of Buenos Aires you will find Tango and Milonga as they were decades ago; Tango dance and music are alive in this city’s nightlife, waiting for you to discover them.',
    cta: 'Explore',
    price: 90,
    currency: 'USD',
  },
  {
    id: 2,
    imgSrc: '../public/Images/bailarines.jpg',
    title: 'Roundtrip Airport Private Transfer in Buenos Aires',
    type: 'Services',
    body: 'Forget the long lines and confusion associated with finding transportation to or from the Airports in Buenos Aires. Pre-book your car and meet your Driver at the Airport/Hotel!.',
    cta: 'Explore',
    price: 20,
    currency: 'USD',
  },
  {
    id: 3,
    imgSrc: '../public/Images/bailarines.jpg',
    title: 'Dinner and Milonga Visit Excursion',
    type: 'Dinner and Show, Services',
    body: 'Enjoy an amazing Dinner at Puerto Madero, one of the most exclusive Neighbourhoods in Buenos Aires with a wonderful river view, and discover the real Tango dance in a Milonga porteña.',
    cta: 'Explore',
    price: 170,
    currency: 'USD',
  },
  {
    id: 4,
    imgSrc: '../public/Images/bailarines.jpg',
    title: 'Dinner and Milonga Visit Excursion',
    type: 'Dinner and Show, Services',
    body: 'Enjoy an amazing Dinner at Puerto Madero, one of the most exclusive Neighbourhoods in Buenos Aires with a wonderful river view, and discover the real Tango dance in a Milonga porteña.',
    cta: 'Explore',
    price: 170,
    currency: 'USD',
  },
];

export default function handler(req, res) {
  res.status(200).json({ data: homeList });
}
