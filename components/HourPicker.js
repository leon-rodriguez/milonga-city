import { AiOutlineClockCircle } from 'react-icons/ai';
import { useState, useEffect, useRef } from 'react';
import dayjs from 'dayjs';
import { set } from 'date-fns';

const HourPicker = ({ min, max, step, id, placeHolder, selectedDay }) => {
  const [data, setData] = useState(null);
  const [hours, setHours] = useState(null);
  const [hourSelected, setHourSelected] = useState(null);
  const [bookings, setBookings] = useState(null);
  const [disabledHour, setDisabledHour] = useState(null);
  const provisionalDisabledHours = useRef([]);
  const provisionalBookings = useRef([]);
  let provisionalHours = useRef([]);
  const picker = useRef(null);
  let change = useRef(false);

  useEffect(() => {
    if (!id) return;
    fetch(`http://localhost:3000/api/experiences/${id}`)
      .then((results) => {
        return results.json();
      })
      .then((results) => {
        setData(results.data);
      });
  }, [id]);

  useEffect(() => {
    fetch(`http://localhost:3000/api/bookingsByDate`)
      .then((results) => {
        return results.json();
      })
      .then((results) => {
        if (bookings === null && provisionalBookings.current[0] === undefined) {
          results.data.forEach((element) => {
            if (element.experiences_id == id) {
              let parsedDate = dayjs(element.date);
              parsedDate = parsedDate.format('YYYY-M-DD');

              const [_, time] = element.date.split('T');
              const [hour, minute] = time.split(':');
              const parsedHour = `${hour}:${minute}`;

              provisionalBookings.current.push({
                date: parsedDate,
                hour: parsedHour,
              });
              setBookings(provisionalBookings.current);
              console.log('p bookings', provisionalBookings);
            }
          });
        }
      });
  }, [id]);

  useEffect(() => {
    if (data && provisionalHours.current[0] === undefined) {
      const [hour, minute] = data.minhour.split(':');
      const [maxHour] = data.maxhour.split(':');
      const step = data.stephour;

      let currentHour = parseInt(hour);
      let currentMinute = parseInt(minute);
      let parsedHour = ``;

      const maxHourParsed = parseInt(maxHour);

      provisionalHours.current.push({
        hour: `${hour}:${minute}`,
        isAvailable: true,
      });
      while (true) {
        if (currentHour < maxHourParsed) {
          currentMinute = currentMinute + step;
          if (currentMinute === 60) {
            currentHour = currentHour + 1;
            currentMinute = 0;
            if (currentHour < 10) {
              // provisionalHours.current.push(
              //   `0${currentHour}:${currentMinute}0`
              // );
              parsedHour = `0${currentHour}:${currentMinute}0`;
            } else {
              //provisionalHours.current.push(`${currentHour}:${currentMinute}0`);
              parsedHour = `${currentHour}:${currentMinute}0`;
            }
          } else {
            if (currentHour < 10) {
              //provisionalHours.current.push(`0${currentHour}:${currentMinute}`);
              parsedHour = `0${currentHour}:${currentMinute}`;
            } else {
              //provisionalHours.current.push(`${currentHour}:${currentMinute}`);
              parsedHour = `${currentHour}:${currentMinute}`;
            }
          }
          provisionalHours.current.push({
            hour: parsedHour,
            isAvailable: true,
          });
          setHours(provisionalHours.current);
        } else {
          setHours(provisionalHours.current);
          return;
        }
      }
    }
  }, [data]);

  useEffect(() => {
    if (selectedDay) {
      console.log('se ejecuta pero');
      const parsedDate = `${selectedDay.$y}-${selectedDay.$M + 1}-${
        selectedDay.$D
      }`;

      provisionalDisabledHours.current = [];
      provisionalHours.current.forEach((item) => {
        item.isAvailable = true;
      });
      setHours(provisionalHours.current);
      setHourSelected(null);

      if (bookings) {
        bookings.forEach((item) => {
          if (item.date == parsedDate) {
            provisionalDisabledHours.current.push(item.hour);
            setDisabledHour(provisionalDisabledHours.current);
            // tengo q recorrer las horas q se printean,a gregarles el atreibuto true o false y setearlo desde aca y desps hacer el conditional con css
          }
        });
        provisionalDisabledHours.current.forEach((item) => {
          provisionalHours.current.forEach((element) => {
            if (item == element.hour) {
              console.log('coincidio la hora', item);
              element.isAvailable = false;
              setHours(provisionalHours.current);
            }
          });
        });
      }
    }
    console.log();
  }, [selectedDay]);

  const handlePicker = () => {
    if (change.current === false) {
      picker.current.classList.remove('opacity-0', 'scale-0');
      picker.current.classList.add('opacity-100', 'scale-100');
      change.current = true;
    } else {
      picker.current.classList.remove('opacity-100', 'scale-100');
      picker.current.classList.add('opacity-0', 'scale-0');
      change.current = false;
    }
  };

  const handleHourSelected = (index) => {
    if (hours[index].isAvailable) {
      setHourSelected(hours[index].hour);
    }
  };
  // border border-gray-500
  return (
    <div
      className="w-[259px] h-[56px] border-[#c4c4c4] border border-solid rounded-md flex items-center justify-between pl-[14px] pr-[9px] relative mt-4 cursor-pointer hover:border-[#000]"
      onClick={handlePicker}
    >
      <div className="cursor-pointer">
        {hourSelected === null ? placeHolder : hourSelected}
      </div>
      <div className="text-2xl cursor-pointer ">
        <AiOutlineClockCircle />
      </div>
      <div
        className="absolute top-14 right-0 w-full max-h-[216px] bg-white overflow-y-scroll shadow-2xl  shadow-[-1px 1px 24px -1px rgba(0,0,0,1)] rounded-lg opacity-0 scale-0 transition-all duration-300 ease-out"
        ref={picker}
      >
        {hours &&
          hours.length > 0 &&
          hours.map((item, index) => (
            <div
              className={`w-full h-12 p-4 flex justify-start items-center hover:bg-[#f5f5f5] ${
                item.hour === hourSelected ? 'text-[#0088cc]' : ''
              } ${
                item.isAvailable === false
                  ? 'bg-[#f5f5f5] cursor-default text-gray-400'
                  : 'bg-white cursor-pointer text-black'
              }`}
              key={index}
              onClick={() => {
                handleHourSelected(index);
              }}
            >
              <div
                className={`w-5 h-5 rounded-full border border-slate-300 ${
                  item.hour === hourSelected ? 'bg-[#0088cc]' : 'bg-transparent'
                }`}
              ></div>
              <div className="ml-3">{item.hour}</div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default HourPicker;
