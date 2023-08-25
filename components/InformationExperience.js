import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { useEffect, useState } from "react";
import LoaderSpinner from "./LoaderSpinner";
import { useRemark } from "react-remark";
import Callendar from "./Callendar";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import PersonChooser from "./PersonChooser";
import HourPicker from "./HourPicker";
import CommentForm from "./CommentForm";

//TODO no mostrar el rating cuando no hay comentarios - HECHO
//TODO parsear la fecha de los comments - HECHO A MEDIAS - desde el js cuando se publique el comentario voy a pasar la fecha ya parseada
//TODO optimizar las estrellas de los comentarios - HECHO

const InformationExperience = ({ id }) => {
  const [data, setData] = useState(null);
  const [reviews, setReviews] = useState(null);
  const [averageRating, setAverageRating] = useState(5);
  const [description, setDescription] = useRemark();
  const [details, setDetails] = useRemark();
  const [selectedDate, setSelectedDate] = useState();
  const [persons, setPersons] = useState(1);
  const [minPersons, setMinPersons] = useState(0);
  const [maxPersons, setMaxPersons] = useState(0);
  const [price, setPrice] = useState(0);

  useEffect(() => {
    if (!id) return;
    fetch(`http://localhost:3000/api/experiences/${id}`)
      .then((results) => {
        return results.json();
      })
      .then((results) => {
        setData(results.data);
        setDescription(results.data.extendeddescription);
        setDetails(results.data.extendeddetails);
        setMinPersons(results.data.minpersons);
        setMaxPersons(results.data.maxpersons);
      });
  }, [id]);

  useEffect(() => {
    fetch(`http://localhost:3000/api/reviews?experiences_id=${id}`)
      .then((results) => {
        return results.json();
      })
      .then((results) => {
        setReviews(results.data);
      });
  }, []);

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

  const handleSelectedDateChange = (newValue) => {
    setSelectedDate(newValue);
  };

  const handlePersonsChange = (newValue) => {
    setPersons(newValue);
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
              <CommentForm />
            </div>
            {!reviews && <LoaderSpinner />}
            {reviews && reviews.length == 0 && "No hay comentarios"}
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
      <div className="h-[500px] shadow-2xl rounded-3xl max-[720px]:order-1 min-[720px]:sticky min-[720px]:top-0">
        <div className="text-3xl text-center mt-3">
          {!data ? "" : data.title}
        </div>
        <div className="mt-8">
          <div className="flex justify-center">
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <Callendar
                dataForm={selectedDate}
                onDataFormChange={handleSelectedDateChange}
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
              placeHolder={"Select hour"}
              selectedDay={selectedDate}
            />
          </div>
          <div className="flex justify-center items-end mt-8">
            <div className="w-[200px] h-12 bg-[#0088cc] rounded-3xl flex justify-center items-center text-white text-xl cursor-pointer transition-all duration-100 ease-in hover:bg-[#0088ccbb]">
              Reserve
            </div>
          </div>
          <div className="h-20 flex justify-center items-center">
            <div className="text-3xl font-bold">${price}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InformationExperience;
