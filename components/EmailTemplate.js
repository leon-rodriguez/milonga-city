import * as React from 'react';

export const EmailTemplate = ({
  reserveType,
  name,
  mail,
  date,
  hour,
  phone,
  hotel,
  price,
  persons,
  nationality,
  observations,
}) => (
  <div>
    <h1>Reserva de {reserveType}!</h1>
    <h2>Nombre: {name}</h2>
    <h2>Precio: {price}</h2>
    <h2>Personas: {persons}</h2>
    <h2>Mail: {mail}</h2>
    <h2>Fecha: {date}</h2>
    <h2>Hora: {hour}</h2>
    <h3>Telefono: {phone}</h3>
    <h3>Nacionalidad: {nationality}</h3>
    <h3>Hotel: {hotel}</h3>
    <h3>Observaciones: {observations}</h3>
  </div>
);
