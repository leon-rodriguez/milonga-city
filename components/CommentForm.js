import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { useState, useRef } from "react";
import { useTranslation } from "react-i18next";

//TODO sacar la fecha y hardcodear el user y completar el body con los datos del review
//TODO evaluar el response y si es correcto mostrar un mensaje reseña agregada

const CommentForm = ({ onReviewsChange }) => {
  const [comment, setComment] = useState("");
  const [rating, setRating] = useState(0);
  const [msgWarning, setMsgWarning] = useState(false);
  let lastValue = useRef(0);

  const { t } = useTranslation();

  const WARNING =
    "You need to have completed an experience to be able to comment";

  const handleComment = (e) => {
    const currentText = e.target.value;
    setComment(currentText);
  };

  const cleanForm = () => {
    setComment("");
    setRating(0);
    lastValue.current = 0;
  };

  const handleRating = (index) => {
    setRating(index + 1);
    lastValue.current = index + 1;
  };

  const handleMouseHover = (index) => {
    // console.log('entro', index + 1);
    setRating(index + 1);
  };

  const handleMouseLeave = () => {
    setRating(lastValue.current);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // setMsgWarning(true);
    // const review = {
    //   username: 'Catherine H',
    //   body: comment,
    //   publisheddate: '12-03-2023',
    //   rating: rating,
    //   bookings_id: 174,
    // };

    // fetch('/api/reviews', {
    //   method: 'PUT',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify(review),
    // }).then((response) => {
    //   if (response.ok) {
    //     console.log('tobo bom');
    //   } else if (response.ok === false) {
    //     console.log('fail on the db');
    //   }
    // });
  };

  return (
    <div className="w-full mt-4 mb-5">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          className="w-full outline-none border p-2 h-10 min-h-0 rounded-lg overflow-y-visible"
          placeholder={t("comment_placeholder")}
          value={comment}
          onChange={(event) => {
            handleComment(event);
          }}
        />
        <div className="flex justify-between mt-2">
          <div className="flex text-xl text-primary">
            {[...Array(5)].map((_, index) =>
              index < rating ? (
                <AiFillStar
                  key={index}
                  className="cursor-pointer"
                  onMouseEnter={() => {
                    handleMouseHover(index);
                  }}
                  onMouseLeave={handleMouseLeave}
                  onClick={() => {
                    handleRating(index);
                  }}
                />
              ) : (
                <AiOutlineStar
                  key={index}
                  className="cursor-pointer"
                  onMouseEnter={() => {
                    handleMouseHover(index);
                  }}
                  onMouseLeave={handleMouseLeave}
                  onClick={() => {
                    handleRating(index);
                  }}
                />
              )
            )}
          </div>
          <div className="max-[380px]:grid max-[380px]:grid-rows-2">
            <button
              className="w-24 h-10 mr-4 border rounded-3xl transition-all duration-100 ease-in hover:bg-gray-100"
              onClick={cleanForm}
            >
              {t("comment_cancel")}
            </button>
            <button className="w-28 h-10 border rounded-3xl bg-primary text-white font-bold transition-all duration-100 ease-in hover:bg-primary_light">
              {t("comment_publish")}
            </button>
          </div>
        </div>
        <div className=" text-orange-600">{msgWarning ? WARNING : ""}</div>
      </form>
    </div>
  );
};

export default CommentForm;
