import { useEffect, useState } from 'react';
import Payment from './Payment';
import BookingPayed from './BookingPayed';

const Booking = ({ data }) => {
  const [bookingState, setBookingState] = useState(null);

  useEffect(() => {
    if (!data) {
      return;
    }

    const fechaActual = new Date();
    const dateFromString = new Date(data.date);

    if (data.confirmed === false && fechaActual < dateFromString) {
      //no pagado todavia
      setBookingState('payment');
    }

    if (data.confirmed === false && fechaActual > dateFromString) {
      //caducado
      setBookingState('caducated');
    }

    if (data.cofirmed && fechaActual < dateFromString) {
      //pagado pero no realizado
      setBookingState('information');
    }

    if (data.cofirmed && fechaActual > dateFromString) {
      //pagado y realizado
      setBookingState('review');
    }
  }, [data]);

  return (
    <div>
      {bookingState === 'payment' ? (
        <Payment />
      ) : bookingState === 'information' ? (
        <BookingPayed />
      ) : (
        ''
      )}
    </div>
  );
};

export default Booking;
