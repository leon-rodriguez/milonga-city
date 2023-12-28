import * as React from 'react';

export const EmailContactTemplate = ({ name, mail, phone, message }) => (
  <div>
    <h1>Consulta</h1>
    <div>
      <ul>
        <li>Name: {name}</li>
        <li>Email: {mail}</li>
        <li>Phone: {phone}</li>
        <li>Message: {message}</li>
      </ul>
    </div>
  </div>
);
