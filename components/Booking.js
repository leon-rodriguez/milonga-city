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
    console.log(data.url_hash);
    const currentDate = new Date();
    const dateFromString = new Date(data?.date);

    if (data.confirmed === false && currentDate < dateFromString) {
      //no pagado todavia
      setBookingState('payment');
    }

    if (data.confirmed === false && currentDate > dateFromString) {
      //caducado
      setBookingState('caducated');
    }

    if (data.confirmed && currentDate < dateFromString) {
      //pagado pero no realizado
      setBookingState('information');
    }

    if (data.confirmed && currentDate > dateFromString) {
      //pagado y realizado
      setBookingState('review');
    }

    //parse date and hour

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
    console.log(bookingState);
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
