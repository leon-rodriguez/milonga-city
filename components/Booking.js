import { useEffect, useState, useRef } from 'react';
import Payment from './Payment';
import BookingPayed from './BookingPayed';

const Booking = ({ data }) => {
  const [bookingState, setBookingState] = useState(null);
  const bookingDate = useRef(null);
  const bookingHour = useRef(null);

  useEffect(() => {
    if (!data) {
      return;
    }

    // if (data.confirmed === false && fechaActual < dateFromString) {
    //   //no pagado todavia
    //   setBookingState('payment');
    // }

    // if (data.confirmed === false && fechaActual > dateFromString) {
    //   //caducado
    //   setBookingState('caducated');
    // }

    // if (data.cofirmed && fechaActual < dateFromString) {
    //   //pagado pero no realizado
    //   setBookingState('information');
    // }

    // if (data.cofirmed && fechaActual > dateFromString) {
    //   //pagado y realizado
    //   setBookingState('review');
    // }

    //parse date and hour

    setBookingState('information');
    const date = new Date(data?.date);
    const formatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
    const formattedDate = date.toLocaleDateString('en-EN', formatOptions);

    //hour
    const hour = new Date(data?.date);
    const formatHourOptions = {
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric',
      hour12: false,
    };
    const formattedHour = hour.toLocaleTimeString('es-ES', formatHourOptions);

    bookingDate.current = formattedDate;
    bookingHour.current = formattedHour;
  }, [data]);

  return (
    <div>
      {bookingState === 'payment' ? (
        <Payment data={data} date={bookingDate.current} />
      ) : bookingState === 'information' ? (
        <BookingPayed
          data={data}
          date={bookingDate.current}
          hour={bookingHour.current}
        />
      ) : (
        ''
      )}
    </div>
  );
};

export default Booking;
