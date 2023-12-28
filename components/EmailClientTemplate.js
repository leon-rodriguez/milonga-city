import * as React from 'react';

export const EmailClientTemplate = ({
  reserveType,
  name,
  date,
  hour,
  price,
}) => (
  <div>
    <h1>Booking {reserveType}!</h1>
    <div>
      <h2>Thank you for your booking with Milonga City</h2>
      <div>
        <div>Here the details of your reservation</div>
        <ul>
          <li>Name: {name}</li>
          <li>Date: {date}</li>
          <li>Hour: {hour}</li>
          <li>Price: {price}</li>
        </ul>
        <p>
          If you have any questions or specific requests leading up to your
          reservation, please don't hesitate to reach out to us.
        </p>
        <p>Thank you once again for choosing us.</p>
      </div>
    </div>
  </div>
);
