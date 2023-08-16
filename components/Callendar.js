import { DatePicker, TimePicker } from '@mui/x-date-pickers';
import { useState, useEffect, useRef } from 'react';
import dayjs from 'dayjs';
import HourPicker from './HourPicker';

const Callendar = ({ dataForm, onDataFormChange, id }) => {
  const [data, setData] = useState(null);
  const [notDays, setNotDays] = useState(null);
  const notAvailableDays = useRef([]);

  // useEffect(() => {
  //   fetch(`http://localhost:3000/api/bookingsByDate`)
  //     .then((results) => {
  //       return results.json();
  //     })
  //     .then((results) => {
  //       setData(results.data);
  //       results.data.forEach((element) => {
  //         const parsedDate = dayjs(element.date);
  //         notAvailableDays.current.push(parsedDate.format('YYYY-M-DD'));
  //       });
  //     });
  // }, []);

  useEffect(() => {
    if (!id) return;
    fetch(`http://localhost:3000/api/experiences/${id}`)
      .then((results) => {
        return results.json();
      })
      .then((results) => {
        setNotDays(results.data);
        results.data.notavailabledays.forEach((element) => {
          const parsedDate = dayjs(element);
          notAvailableDays.current.push(parsedDate.format('YYYY-M-DD'));
        });
      });
  }, [id]);

  const isAvailable = (date) => {
    let flag = false;
    const parsedDate = `${date.$y}-${date.$M + 1}-${date.$D}`;
    notAvailableDays.current.forEach((element) => {
      if (element == parsedDate) {
        flag = true;
        return;
      }
    });
    return flag;
  };

  return (
    <div className="w-full">
      <div className="w-full flex justify-center">
        <DatePicker
          label="Select day"
          disablePast
          value={dataForm}
          onChange={(newValue) => {
            onDataFormChange(newValue);
          }}
          shouldDisableDate={isAvailable}
        />
      </div>
    </div>
  );
};

export default Callendar;
