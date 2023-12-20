import { AiFillStar, AiOutlineStar } from 'react-icons/ai';
import { useState, useRef } from 'react';

//TODO sacar la fecha y hardcodear el user y completar el body con los datos del review
//TODO evaluar el response y si es correcto mostrar un mensaje reseña agregada

const CommentForm = ({ onReviewsChange }) => {
  const [comment, setComment] = useState('');
  const [rating, setRating] = useState(0);
  const [msgWarning, setMsgWarning] = useState(false);
  let lastValue = useRef(0);

  const WARNING =
    'You need to have completed an experience to be able to comment';

  const handleComment = (e) => {
    const currentText = e.target.value;
    setComment(currentText);
    console.log(comment);
  };

  const cleanForm = () => {
    setComment('');
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
    setMsgWarning(true);
    // cleanForm();
    // const fechaActual = new Date();
    // const año = fechaActual.getFullYear();
    // const mes = fechaActual.getMonth() + 1; // Nota: los meses comienzan desde 0
    // const dia = fechaActual.getDate();
    // const commentData = {
    //   username: 'el admin',
    //   body: comment,
    //   publisheddate: `${año}-${mes}-${dia}`,
    //   rating: rating,
    //   bookings_id: 37,
    // };
    // // TODO throw error on fail su
    // fetch('/api/reviews', {
    //   method: 'PUT',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify(commentData),
    // }).then((response) => {
    //   onReviewsChange(true);
    // });
  };

  return (
    <div className="w-full mt-4 mb-5">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          className="w-full outline-none border p-2 h-10 min-h-0 rounded-lg overflow-y-visible"
          placeholder="Add comment"
          value={comment}
          onChange={(event) => {
            handleComment(event);
          }}
        />
        <div className="flex justify-between mt-2">
          <div className="flex text-xl text-[#0088cc]">
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
              Cancel
            </button>
            <button className="w-28 h-10 border rounded-3xl bg-[#0088cc] text-white font-bold transition-all duration-100 ease-in hover:bg-[#0088ccbb]">
              Comment
            </button>
          </div>
        </div>
        <div className=" text-orange-600">{msgWarning ? WARNING : ''}</div>
      </form>
    </div>
  );
};

export default CommentForm;
