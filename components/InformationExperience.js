import { AiFillStar, AiOutlineStar } from 'react-icons/ai';
import { useEffect, useState } from 'react';
import LoaderSpinner from './LoaderSpinner';
import { useRemark } from 'react-remark';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

//TODO no mostrar el rating cuando no hay comentarios - HECHO
//TODO parsear la fecha de los comments - HECHO A MEDIAS - desde el js cuando se publique el comentario voy a pasar la fecha ya parseada
//TODO optimizar las estrellas de los comentarios - HECHO

const InformationExperience = ({ id }) => {
  const [data, setData] = useState(null);
  const [reviews, setReviews] = useState(null);
  const [averageRating, setAverageRating] = useState(5);
  const [description, setDescription] = useRemark();
  const [details, setDetails] = useRemark();
  const [date, setDate] = useState(new Date());

  const handleDateChange = (newDate) => {
    setDate(newDate);
    console.log(date);
  };

  useEffect(() => {
    // console.log('data inforamationexperience');
    if (!id) return;
    fetch(`http://localhost:3000/api/experiences/${id}`)
      .then((results) => {
        return results.json();
      })
      .then((results) => {
        setData(results.data);
        setDescription(results.data.extendeddescription);
        setDetails(results.data.extendeddetails);
      });
  }, [id]);

  useEffect(() => {
    fetch(`http://localhost:3000/api/reviews?experiences_id=${id}`)
      .then((results) => {
        return results.json();
      })
      .then((results) => {
        setReviews(results.data);
        console.log('reviews', reviews);
      });
  }, []);

  useEffect(() => {
    if (reviews) {
      let promedio = 0;
      reviews.forEach((item) => {
        promedio += parseInt(item.rating);
        // console.log('fecha de review', item.date);
      });
      promedio = promedio / reviews.length;
      promedio = Math.round(promedio);
      setAverageRating(promedio);
    }
  }, [reviews]);

  return (
    <div className="w-full mt-4 grid grid-cols-[3fr_2fr] gap-2 max-[720px]:grid-cols-none max-[720px]:grid-rows-[400px-auto] relative">
      <div className="min-h-[1000px] border border-red-500 pl-6 pr-6 max-[720px]:order-2">
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
            {!reviews && <LoaderSpinner />}
            {reviews && reviews.length == 0 && 'No hay comentarios'}
            {reviews &&
              reviews.length > 0 &&
              reviews.map((item) => {
                return (
                  <div
                    className="min-h-[50px] w-full grid grid-cols-[1fr_4fr] mb-8 "
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
                        <div>{item.fecha}</div>
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
      <div className="h-[400px] border border-blue-500 grid-row max-[720px]:order-1 min-[720px]:sticky min-[720px]:top-0">
        <Calendar onChange={handleDateChange} value={date} />
      </div>
    </div>
  );
};

export default InformationExperience;
