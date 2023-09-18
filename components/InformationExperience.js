import { AiFillStar, AiOutlineStar } from 'react-icons/ai';
import { useEffect, useState } from 'react';
import LoaderSpinner from './LoaderSpinner';
import { useRemark } from 'react-remark';
import Callendar from './Callendar';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import PersonChooser from './PersonChooser';
import HourPicker from './HourPicker';
import CommentForm from './CommentForm';
import ReserveForm from './ReserveForm';

const InformationExperience = ({ id, data }) => {
  const [reviews, setReviews] = useState(null);
  const [averageRating, setAverageRating] = useState(5);
  const [description, setDescription] = useRemark();
  const [details, setDetails] = useRemark();
  const [date, setDate] = useState();
  const [persons, setPersons] = useState(1);
  const [minPersons, setMinPersons] = useState(0);
  const [maxPersons, setMaxPersons] = useState(0);
  const [price, setPrice] = useState(0);
  const [time, setTime] = useState(null);
  const [huboCambio, setHuboCambio] = useState(null);
  const [showReservForm, setShowReservForm] = useState(false);

  useEffect(() => {
    if (!id || !data) return;
    setDescription(data.extendeddescription);
    setDetails(data.extendeddetails);
    setMinPersons(data.minpersons);
    setMaxPersons(data.maxpersons);
  }, [data]);

  useEffect(() => {
    fetch(`http://localhost:3000/api/reviewsByExperience?experiences_id=${id}`)
      .then((results) => {
        return results.json();
      })
      .then((results) => {
        setReviews(results.data);
      });
  }, [huboCambio]);

  useEffect(() => {
    if (reviews) {
      let promedio = 0;
      reviews.forEach((item) => {
        promedio += parseInt(item.rating);
      });
      promedio = promedio / reviews.length;
      promedio = Math.round(promedio);
      setAverageRating(promedio);
    }
  }, [reviews]);

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
    console.log('nueva hora seleecionada', newValue);
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
    }
  };

  const handleReviewsChenge = (newValue) => {
    setHuboCambio(newValue);
  };

  const handleContinueClick = () => {
    if (showReservForm === false) {
      setShowReservForm(true);
    }
  };

  return (
    <div className="w-full mt-4 grid grid-cols-[3fr_2fr] gap-2 max-[720px]:grid-cols-none max-[720px]:grid-rows-[400px-auto] relative">
      <div className="min-h-[1000px] pl-6 pr-6 max-[720px]:order-2">
        <div className="w-full flex">
          <button className="border-b-2 border-b-transparent focus:border-b-black cursor-pointer">
            <a>Description</a>
          </button>
          <button className="mx-6 border-b-2 border-b-transparent focus:border-b-black">
            <a
              className="border-b-2 border-b-transparent active:border-b-black "
              href="#details"
            >
              Details
            </a>
          </button>
          <button className="border-b-2 border-b-transparent focus:border-b-black cursor-pointer">
            <a
              href="#reviews"
              className="border-b-2 border-b-transparent active:border-b-black "
            >
              Reviews
            </a>
          </button>
        </div>
        <div className="mt-4 md-styles">
          <div className="font-bold text-4xl mb-6">Description</div>
          <div className="mt-4 md-styles">{description}</div>
        </div>
        <div className="mt-8 pt-8 border-t-[1px] border-t-gray-400 md-styles">
          <div className="font-bold text-4xl" id="details">
            Details
          </div>
          {details}
        </div>
        <div className="mt-8 pt-8 border-t-[1px] border-t-gray-400">
          <div className="grid grid-cols-2">
            <div className="font-bold text-4xl flex items-center" id="reviews">
              Reviews
            </div>
            <div className="grid place-items-end font-bold text-xl ">
              <div>
                {Number.isNaN(averageRating)
                  ? `No hay valoraciones`
                  : `${averageRating} / 5`}
              </div>
              <div className="flex text-[#0088cc]">
                {[...Array(5)].map((_, index) =>
                  index < averageRating ? (
                    <AiFillStar key={index} />
                  ) : (
                    <AiOutlineStar key={index} />
                  )
                )}
              </div>
            </div>
          </div>
          <div>
            <div>
              <CommentForm onReviewsChange={handleReviewsChenge} />
            </div>
            {!reviews && <LoaderSpinner />}
            {reviews && reviews.length == 0 && 'No hay comentarios'}
            {reviews &&
              reviews.length > 0 &&
              reviews.map((item) => {
                return (
                  <div
                    className="min-h-[50px] w-full grid grid-cols-[1fr_4fr] mb-8"
                    key={item.id}
                  >
                    <div className=" flex justify-end font-bold pr-3">
                      <div>
                        <div className=" text-right flex text-[#0088cc]">
                          {[...Array(5)].map((_, index) =>
                            index < item.rating ? (
                              <AiFillStar key={index} />
                            ) : (
                              <AiOutlineStar key={index} />
                            )
                          )}
                        </div>
                        <div>{item.publisheddate}</div>
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{item.username}</div>
                      <div className="text-md">{item.body}</div>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
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
                <Callendar
                  date={date}
                  onDateChange={handleDateChange}
                  id={id}
                />
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
            {showReservForm ? <ReserveForm /> : ''}
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
    </div>
  );
};

export default InformationExperience;
