import Callendar from './Callendar';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import PersonChooser from './PersonChooser';
import HourPicker from './HourPicker';
import UserDataForm from './UserDataForm';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';

const ReserveForm = ({ data, id, minPersons, maxPersons }) => {
  const [price, setPrice] = useState(0);
  const [persons, setPersons] = useState(null);
  const [showReservForm, setShowReservForm] = useState(false);
  const [title, setTitle] = useState(null);
  const [date, setDate] = useState();
  const [time, setTime] = useState(null);
  const [showContinueAvailable, setShowContinueAvailable] = useState(false);
  const [dataFormValues, setDataFormValues] = useState({
    name: '',
    mail: '',
    phone: '',
    nationality: '',
    hotel: '',
    observations: '',
  });
  const [urlHash, setUrlHash] = useState(null);
  const [warning, setWarning] = useState('');
  const router = useRouter();
  const { t, i18n } = useTranslation();

  useEffect(() => {
    if (data) {
      if (data.pricepergroup) {
        setPrice(data.pricepergroup);
      } else if (data.id === 1 || data.id === 7) {
        switch (persons) {
          case 1:
            setPrice(data.pricefor1);
            break;
          case 2:
            setPrice(data.pricefor2 * persons);
            break;
          case 3:
            setPrice(data.pricefor3to4 * persons);
            break;
          case 4:
            setPrice(data.pricefor3to4 * persons);
            break;
          case 5:
            setPrice(data.pricefor5to6 * persons);
            break;
          case 6:
            setPrice(data.pricefor5to6 * persons);
            break;
          default:
            setPrice(data.priceforelse * persons);
            break;
        }
      } else {
        switch (persons) {
          case 1:
            setPrice(data.pricefor1);
            break;
          case 2:
            setPrice(data.pricefor2);
            break;
          case 3:
            setPrice(data.pricefor3to4);
            break;
          case 4:
            setPrice(data.pricefor3to4);
            break;
          case 5:
            setPrice(data.pricefor5to6);
            break;
          case 6:
            setPrice(data.pricefor5to6);
            break;
          default:
            setPrice(data.priceforelse * persons);
            break;
        }
      }
    }
  }, [persons, []]);

  useEffect(() => {
    if (date && time && persons && price) {
      setShowContinueAvailable(true);
    }
  }, [date, time, persons, price]);

  useEffect(() => {
    if (!data) return;
    if (i18n.language === 'en') {
      setTitle(data.title_en);
    }
    if (i18n.language === 'es') {
      setTitle(data.title_es);
    }
    if (i18n.language === 'de') {
      setTitle(data.title_de);
    }
  }, [data, i18n.language]);

  const handleDateChange = (newValue) => {
    setDate(newValue);
  };

  const handlePersonsChange = (newValue) => {
    setPersons(newValue);
  };

  const handleTimeChange = (newValue) => {
    setTime(newValue);
  };

  const handleDataFormChange = (newValue) => {
    setDataFormValues(newValue);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      date &&
      time &&
      price &&
      persons &&
      dataFormValues.name &&
      dataFormValues.mail &&
      dataFormValues.phone &&
      dataFormValues.nationality
    ) {
      const bookingData = {
        experiences_id: id,
        date: `${date.$y}-${date.$M + 1}-${date.$D}`,
        time: `${time}:00`,
        price: price,
        persons: persons,
        name: dataFormValues.name,
        mail: dataFormValues.mail,
        country: dataFormValues.country,
        phone: dataFormValues.phone,
        hotel: dataFormValues.hotel,
        observations: dataFormValues.observations,
      };

      fetch('/api/bookings', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(bookingData),
      }).then((response) => {
        if (response.ok) {
          response.json().then((resJson) => {
            setUrlHash(resJson.data.url_hash);
          });
        } else if (response.ok === false) {
          console.log('fail on the db');
        }
      });
    } else {
      setWarning(t('info_incorrect'));
    }
  };

  const handleContinueClick = () => {
    if (showReservForm === false && date && time && price && persons) {
      setShowReservForm(true);
      setWarning('');
    }
  };

  useEffect(() => {
    if (urlHash) {
      // console.log(urlHash);
      fetch('/api/send/route', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          reserveType: data.title,
          name: dataFormValues.name,
          mail: dataFormValues.mail,
          date: `${date.$D}-${date.$M}-${date.$y}`,
          hour: time,
          phone: dataFormValues.phone,
          hotel: dataFormValues.hotel,
          price: price,
          persons: persons,
          nationality: dataFormValues.nationality,
          observations: dataFormValues.observations,
          emailType: 'reserve',
          message: '',
        }),
      }).then((response) => {
        // console.log(response);
      });
      router.push(`/Booking/${urlHash}`);
    }
  }, [urlHash]);

  return (
    <div
      className={`${
        showReservForm ? 'h-[1170px]' : 'h-[590px]'
      } shadow-2xl rounded-3xl relative max-[735px]:order-1 border-2 max-[735px]:top-0 transition-all duration-300 min-[735px]:sticky top-[80px]`}
    >
      <form onSubmit={handleSubmit}>
        <div className="text-3xl text-center mt-3">{title}</div>
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
              placeHolder={t('input_hour')}
              selectedDay={date}
              onTimeChange={handleTimeChange}
            />
          </div>
          <div className="h-[100px] flex justify-center items-center flex-col">
            <div className="text-xs w-4/5 text-orange-600">
              {data && data.id === 2
                ? 'This rate corresponds to the transfer from Ezeiza Airport to Buenos Aires. For other services, send us your message.'
                : ''}
            </div>
            <div className="text-3xl font-bold mt-2">${price}</div>
          </div>
          {showReservForm ? (
            <UserDataForm
              handleDataFormChange={handleDataFormChange}
              dataFormValues={dataFormValues}
            />
          ) : (
            ''
          )}
        </div>
        <div className="text-sm text-red-600 text-center mt-0">{warning}</div>
        <div className="w-full flex justify-center items-end mt-4 max-[800px]:mt-2">
          <button
            className={`w-[200px] h-12 rounded-3xl flex justify-center items-center text-white text-xl cursor-pointer transition-all duration-100 ease-in max-[920px]:h-10 ${
              showContinueAvailable
                ? 'bg-[#0088cc] hover:bg-[#0088ccbb]'
                : 'bg-[#0088cc48] cursor-default'
            }`}
            onClick={handleContinueClick}
          >
            {showReservForm ? t('reserve_reserve') : t('reserve_continue')}
          </button>
        </div>
        <div className="w-full flex justify-center items-end mt-4">
          <Link href={'/contact'}>
            <button className="w-[200px] h-12 bg-transparent border-2 border-[#0088cc] rounded-3xl flex justify-center items-center text-gray-700 text-md cursor-pointer transition-all duration-100 ease-in hover:bg-[#dddddd33] max-[920px]:h-10">
              {t('reserve_message')}
            </button>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default ReserveForm;
