import { AiOutlineClockCircle } from 'react-icons/ai';
import { useState, useEffect, useRef } from 'react';
import { getExperiences } from '../lib/experiences';

const getBookings = (date, experience) => {
  return fetch(
    `http://localhost:3000/api/bookingsByDate?date=${date}&experience=${experience}`
  ).then((results) => {
    return results.json();
  });
};

const getAvailableHours = (minhour, maxhour, step, takenHours) => {
  const takenHoursParsed = takenHours.map((item) => {
    const [_, time] = item.date.split('T');
    const [hour, minute] = time.split(':');
    return `${hour}:${minute}`;
  });

  const hoursToPrint = [];
  let [parsedMinHour, parsedMinMinute] = minhour.split(':');
  let [parsedMaxHour, parsedMaxMinute] = maxhour.split(':');
  parsedMinHour = parseInt(parsedMinHour);
  parsedMaxHour = parseInt(parsedMaxHour);
  parsedMinMinute = parseInt(parsedMinMinute);
  parsedMaxMinute = parseInt(parsedMaxMinute);

  const startTime = new Date();
  startTime.setHours(parsedMinHour, parsedMinMinute, 0, 0);

  const endTime = new Date();
  endTime.setHours(parsedMaxHour, parsedMaxMinute, 0, 0);

  let currentTime = new Date(startTime);

  while (currentTime <= endTime) {
    const hours = currentTime.getHours();
    const minutes = currentTime.getMinutes();

    let parsedMinute = minutes;
    let parsedHour = hours;

    currentTime.setMinutes(currentTime.getMinutes() + step);
    if (hours < 10) {
      parsedHour = `0${hours}`;
    }
    if (minutes < 10) {
      parsedMinute = `0${minutes}`;
    }

    let hourToPrint = `${parsedHour}:${parsedMinute}`;
    hoursToPrint.push(hourToPrint);
  }
  return hoursToPrint.map((hour) => {
    return {
      hour,
      isAvailable: !takenHoursParsed.includes(hour),
    };
  });
};

const HourPicker = ({
  id,
  placeHolder,
  selectedDay,
  dataExperience,
  onTimeChange,
}) => {
  const [data, setData] = useState(null);
  const [hours, setHours] = useState(null);
  const [hourSelected, setHourSelected] = useState(null);
  const picker = useRef(null);
  let change = useRef(false);

  useEffect(() => {
    if (!id) return;
    getExperiences(id).then((results) => {
      setData(results.data);
    });
  }, [id]);

  useEffect(() => {
    if (!selectedDay || !dataExperience) return;
    setHourSelected(null);
    getBookings(selectedDay, id).then((results) => {
      setHours(
        getAvailableHours(
          dataExperience.minhour,
          dataExperience.maxhour,
          dataExperience.stephour,
          results.data
        )
      );
    });
  }, [id, selectedDay]);

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
      onTimeChange(hours[index].hour);
    }
  };
  // border border-gray-500
  return (
    <div
      className="w-[259px] h-[56px] border-[#c4c4c4] border border-solid rounded-md flex items-center justify-between pl-[14px] pr-[9px] relative mt-4 cursor-pointer hover:border-[#000]"
      onClick={handlePicker}
    >
      <div
        className={`cursor-pointer ${
          hours ? '' : 'text-gray-300 cursor-default'
        }`}
      >
        {hourSelected === null ? placeHolder : hourSelected}
      </div>
      <div className="text-2xl cursor-pointer ">
        <AiOutlineClockCircle />
      </div>
      <div
        className="absolute z-10 top-14 right-0 w-full max-h-[216px] bg-white overflow-y-scroll shadow-2xl  shadow-[-1px 1px 24px -1px rgba(0,0,0,1)] rounded-lg opacity-0 scale-0 transition-all duration-300 ease-out"
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
