export const homeList = [
  {
    id: 1,
    imgSrc: "../public/Images/bailarines.jpg",
    title: "Milonga Visit Excursion",
    type: "Tour",
    body: "If you start going deep into the City of Buenos Aires you will find Tango and Milonga as they were decades ago; Tango dance and music are alive in this city’s nightlife, waiting for you to discover them.",
    cta: "Explore",
    price: 90,
    currency: "USD",
  },
  {
    id: 2,
    imgSrc: "../public/Images/bailarines.jpg",
    title: "ping pong",
    type: "Tour",
    body: "If you start going deep into the City of Buenos Aires you will find Tango and Milonga as they were decades ago; Tango dance and music are alive in this city’s nightlife, waiting for you to discover them.",
    cta: "Explore",
    price: 175,
    currency: "USD",
  },
  {
    id: 3,
    imgSrc: "../public/Images/bailarines.jpg",
    title: "Visit the pink house",
    type: "Tour",
    body: "If you start going deep into the City of Buenos Aires you will find Tango and Milonga as they were decades ago; Tango dance and music are alive in this city’s nightlife, waiting for you to discover them.",
    cta: "Explore",
    price: 10,
    currency: "PESOS",
  },
];

export default function handler(req, res) {
  res.status(200).json({ data: homeList });
}
