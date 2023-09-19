import Callendar from './Callendar';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import PersonChooser from './PersonChooser';
import HourPicker from './HourPicker';
import UserDataForm from './UserDataForm';
import { useState, useEffect } from 'react';

const ReserveForm = ({ data, id, minPersons, maxPersons }) => {
  const [price, setPrice] = useState(0);
  const [persons, setPersons] = useState(1);
  const [showReservForm, setShowReservForm] = useState(false);
  const [date, setDate] = useState();
  const [time, setTime] = useState(null);

  useEffect(() => {
    if (data) {
      if (data.pricepergroup) {
        setPrice(data.pricepergroup);
      } else {
        switch (persons) {
          case 1:
            setPrice(data.pricefor1);
            break;
          case 2:
            setPrice(data.pricefor2 * persons);
            break;
          case 3 || 4:
            setPrice(data.pricefor3to4 * persons);
            break;
          case 5 || 6:
            setPrice(data.pricefor5to6 * persons);
            break;
          default:
            setPrice(data.priceforelse * persons);
            break;
        }
      }
    }
  }, [persons, []]);

  const handleDateChange = (newValue) => {
    setDate(newValue);
    console.log(newValue);
  };

  const handlePersonsChange = (newValue) => {
    setPersons(newValue);
  };

  const handleTimeChange = (newValue) => {
    setTime(newValue);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (date && time && price && persons) {
      const bookingData = {
        experiences_id: id,
        users_id: 1, //TODO tomar id usuario
        date: `${date.$y}-${date.$M + 1}-${date.$D}`,
        time: `${time}:00`,
        price: price,
        persons: persons,
      };

      fetch('http://localhost:3000/api/bookings', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(bookingData),
      }).then((response) => {
        console.log(response);
      });

      fetch('http://localhost:3000/api/bookings', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(bookingData),
      }).then((response) => {
        console.log(response);
      });
    }
  };

  const handleContinueClick = () => {
    if (showReservForm === false) {
      setShowReservForm(true);
    }
  };
  return (
    <div
      className={`${
        showReservForm ? 'h-[900px]' : 'h-[500px]'
      } shadow-2xl rounded-3xl relative max-[720px]:order-1 ${
        showReservForm ? '' : 'min-[720px]:sticky'
      } min-[720px]:top-0 transition-all duration-300`}
    >
      <form onSubmit={handleSubmit}>
        <div className="text-3xl text-center mt-3">
          {!data ? '' : data.title}
        </div>
        <div className="mt-8">
          <div className="flex justify-center">
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <Callendar date={date} onDateChange={handleDateChange} id={id} />
            </LocalizationProvider>
          </div>
          <div className="flex justify-center mt-4">
            <PersonChooser
              min={minPersons}
              max={maxPersons}
              onPersonChange={handlePersonsChange}
            />
          </div>
          <div className="flex justify-center">
            <HourPicker
              id={id}
              dataExperience={data}
              placeHolder={'Select hour'}
              selectedDay={date}
              onTimeChange={handleTimeChange}
            />
          </div>
          <div className="h-20 flex justify-center items-center">
            <div className="text-3xl font-bold">${price}</div>
          </div>
          {showReservForm ? <UserDataForm /> : ''}
          <div className="w-full flex justify-center items-end mt-8 absolute bottom-10 left-0">
            <button
              className="w-[200px] h-12 bg-[#0088cc] rounded-3xl flex justify-center items-center text-white text-xl cursor-pointer transition-all duration-100 ease-in hover:bg-[#0088ccbb]"
              onClick={handleContinueClick}
            >
              {showReservForm ? 'Reserve' : 'Continue'}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ReserveForm;
