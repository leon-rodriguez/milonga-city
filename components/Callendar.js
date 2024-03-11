import { DatePicker } from '@mui/x-date-pickers';
import { useState, useEffect, useRef } from 'react';
import dayjs from 'dayjs';
import { useTranslation } from 'react-i18next';

const Callendar = ({ date, onDateChange, id }) => {
  const [data, setData] = useState(null);
  const [notDays, setNotDays] = useState(null);
  const notAvailableDays = useRef([]);
  const { t } = useTranslation();

  useEffect(() => {
    if (!id) return;
    fetch(`/api/experiences/${id}`)
      .then((results) => {
        return results.json();
      })
      .then((results) => {
        setNotDays(results.data);
        if (results.data.notavailabledays === null) {
          return;
        }
        results.data.notavailabledays.forEach((element) => {
          const parsedDate = dayjs(element);
          notAvailableDays.current.push(parsedDate.format('YYYY-M-DD'));
        });
      });
  }, [id]);

  const isAvailable = (date) => {
    let flag = false;
    if (notAvailableDays.current === null) {
      return false;
    }
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
          label={t('input_day')}
          disablePast
          value={date}
          onChange={(newValue) => {
            onDateChange(newValue);
          }}
          shouldDisableDate={isAvailable}
          className="w-[259px]"
        />
      </div>
    </div>
  );
};

export default Callendar;
