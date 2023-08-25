import { AiOutlineClockCircle } from "react-icons/ai";
import { useState, useEffect, useRef } from "react";
import dayjs from "dayjs";
import { getExperiences } from "../lib/experiences";

//TODO: LIMPIAR EL CODIGO!!!!!!

const getBookings = (date, experience) => {
  return fetch(
    `http://localhost:3000/api/bookingsByDate?date=${date}&experience=${experience}`
  ).then((results) => {
    return results.json();
  });
};

//TODO: recibir por parametros minhour maxhour stephour
const getAvailableHours = (minhour = 10, maxhour = 17, takenHours) => {
  const takenHoursParsed = takenHours.map((item) => {
    const [_, time] = item.date.split("T");
    const [hour, minute] = time.split(":");
    return `${hour}:${minute}`;
  });

  //TODO: generar el array dinamicamente
  return ["10:00", "11:00", "12:00"].map((hour) => {
    return {
      hour,
      isAvailable: !takenHoursParsed.includes(hour),
    };
  });
};

//TODO: arreglar el hover de select hour cuando esta disabled

const HourPicker = ({ id, placeHolder, selectedDay }) => {
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
    getExperiences(id).then((results) => {
      setData(results.data);
    });
  }, [id]);

  useEffect(() => {
    if (!selectedDay) return;

    getBookings(selectedDay, id).then((results) => {
      console.log("🔎  >> getBookings  >> results:", results);
      setHours(getAvailableHours(10, 17, results.data));

      // if (
      //   bookings === null &&
      //   provisionalBookings.current[0] === undefined &&
      //   results.data.length > 0
      // ) {
      //   //TODO sacar el foreach y setear los bookings del selectedday
      //   // console.log(">> data ", results.data[0].date);
      //   let element = results.data[0];
      //   if (element.experiences_id == id) {
      //     let parsedDate = dayjs(element.date);
      //     parsedDate = parsedDate.format("YYYY-M-DD");

      //     const [_, time] = element.date.split("T");
      //     const [hour, minute] = time.split(":");
      //     const parsedHour = `${hour}:${minute}`;

      //     provisionalBookings.current.push({
      //       date: parsedDate,
      //       hour: parsedHour,
      //     });
      //     console.log(provisionalBookings.current);
      //     setBookings(provisionalBookings.current);
      //   }
      // }
    });

    // if (selectedDay) {
    //   const parsedDate = `${selectedDay.$y}-${selectedDay.$M + 1}-${
    //     selectedDay.$D
    //   }`;

    //   provisionalDisabledHours.current = [];
    //   provisionalHours.current.forEach((item) => {
    //     item.isAvailable = true;
    //   });
    //   setHours(provisionalHours.current);
    //   setHourSelected(null);

    //   if (bookings) {
    //     bookings.forEach((item) => {
    //       if (item.date == parsedDate) {
    //         provisionalDisabledHours.current.push(item.hour);
    //         setDisabledHour(provisionalDisabledHours.current);
    //       }
    //     });
    //     provisionalDisabledHours.current.forEach((item) => {
    //       provisionalHours.current.forEach((element) => {
    //         if (item == element.hour) {
    //           console.log("coincidio la hora", item);
    //           element.isAvailable = false;
    //           setHours(provisionalHours.current);
    //         }
    //       });
    //     });
    //   }
    // }
  }, [id, selectedDay]);

  // useEffect(() => {
  //   if (data && provisionalHours.current[0] === undefined) {
  //     const [hour, minute] = data.minhour.split(":");
  //     const [maxHour] = data.maxhour.split(":");
  //     const step = data.stephour;

  //     let currentHour = parseInt(hour);
  //     let currentMinute = parseInt(minute);
  //     let parsedHour = ``;

  //     const maxHourParsed = parseInt(maxHour);

  //     provisionalHours.current.push({
  //       hour: `${hour}:${minute}`,
  //       isAvailable: true,
  //     });
  //     while (true) {
  //       if (currentHour < maxHourParsed) {
  //         currentMinute = currentMinute + step;
  //         if (currentMinute === 60) {
  //           currentHour = currentHour + 1;
  //           currentMinute = 0;
  //           if (currentHour < 10) {
  //             // provisionalHours.current.push(
  //             //   `0${currentHour}:${currentMinute}0`
  //             // );
  //             parsedHour = `0${currentHour}:${currentMinute}0`;
  //           } else {
  //             //provisionalHours.current.push(`${currentHour}:${currentMinute}0`);
  //             parsedHour = `${currentHour}:${currentMinute}0`;
  //           }
  //         } else {
  //           if (currentHour < 10) {
  //             //provisionalHours.current.push(`0${currentHour}:${currentMinute}`);
  //             parsedHour = `0${currentHour}:${currentMinute}`;
  //           } else {
  //             //provisionalHours.current.push(`${currentHour}:${currentMinute}`);
  //             parsedHour = `${currentHour}:${currentMinute}`;
  //           }
  //         }
  //         provisionalHours.current.push({
  //           hour: parsedHour,
  //           isAvailable: true,
  //         });
  //         setHours(provisionalHours.current);
  //       } else {
  //         setHours(provisionalHours.current);
  //         return;
  //       }
  //     }
  //   }
  // }, [data]);

  const handlePicker = () => {
    if (change.current === false) {
      picker.current.classList.remove("opacity-0", "scale-0");
      picker.current.classList.add("opacity-100", "scale-100");
      change.current = true;
    } else {
      picker.current.classList.remove("opacity-100", "scale-100");
      picker.current.classList.add("opacity-0", "scale-0");
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
      <div
        className={`cursor-pointer ${
          hours ? "" : "text-gray-300 cursor-default"
        }`}
      >
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
                item.hour === hourSelected ? "text-[#0088cc]" : ""
              } ${
                item.isAvailable === false
                  ? "bg-[#f5f5f5] cursor-default text-gray-400"
                  : "bg-white cursor-pointer text-black"
              }`}
              key={index}
              onClick={() => {
                handleHourSelected(index);
              }}
            >
              <div
                className={`w-5 h-5 rounded-full border border-slate-300 ${
                  item.hour === hourSelected ? "bg-[#0088cc]" : "bg-transparent"
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
