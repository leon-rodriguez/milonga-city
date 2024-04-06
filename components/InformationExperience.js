import { AiFillStar, AiOutlineStar } from 'react-icons/ai';
import { useEffect, useState } from 'react';
import LoaderSpinner from './LoaderSpinner';
import { useRemark } from 'react-remark';
import ReserveForm from './ReserveForm';
import CommentForm from './CommentForm';
import { useTranslation } from 'react-i18next';

const InformationExperience = ({ id, data }) => {
  const [reviews, setReviews] = useState(null);
  const [averageRating, setAverageRating] = useState(5);
  const [description, setDescription] = useRemark();
  const [details, setDetails] = useRemark();
  const [change, setChange] = useState(null);
  const [minPersons, setMinPersons] = useState(0);
  const [maxPersons, setMaxPersons] = useState(0);
  const [prueba, setPrueba] = useState(null);

  const { t, i18n } = useTranslation();

  useEffect(() => {
    if (!id || !data) return;
    setMinPersons(data.minpersons);
    setMaxPersons(data.maxpersons);
    // setDescription(data.extendeddescription_en);
    // setDetails(data.extendeddetails_en);
  }, [data]);

  useEffect(() => {
    console.log('se ejecuta use');
    if (!id || !data) return;
    if (i18n.language === 'es') {
      setDescription(data.extendeddescription_es);
      setPrueba(description);
      setDetails(data.extendeddetails_es);
    } else if (i18n.language === 'en') {
      setDescription(data.extendeddescription_en);
      setDetails(data.extendeddetails_en);
    } else if (i18n.language === 'de') {
      setDescription(data.extendeddescription_de);
      setDetails(data.extendeddetails_de);
    }
  }, [data, i18n.language]);

  useEffect(() => {
    if (!id) {
      return;
    }
    fetch(`/api/reviewsByExperience?experiences_id=${id}`)
      .then((results) => {
        return results.json();
      })
      .then((results) => {
        setReviews(results.data);
      });
  }, [change, id]);

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

  const handleReviewsChenge = (newValue) => {
    setChange(newValue);
  };

  return (
    <div className="w-full mt-4 grid grid-cols-[3fr_2fr] gap-2 max-[720px]:grid-cols-none max-[720px]:grid-rows-[400px-auto] relative">
      <div className="min-h-[1000px] pl-6 pr-6 max-[720px]:order-2">
        <div className="w-full flex">
          <button className="border-b-2 border-b-transparent focus:border-b-black cursor-pointer">
            <a>{t('information_experience_description')}</a>
          </button>
          <button className="mx-6 border-b-2 border-b-transparent focus:border-b-black">
            <a
              className="border-b-2 border-b-transparent active:border-b-black "
              href="#details"
            >
              {t('information_experience_details')}
            </a>
          </button>
          <button className="border-b-2 border-b-transparent focus:border-b-black cursor-pointer">
            <a
              href="#reviews"
              className="border-b-2 border-b-transparent active:border-b-black "
            >
              {t('information_experience_reviews')}
            </a>
          </button>
        </div>
        <div className="mt-4 md-styles">
          <div className="font-bold text-4xl mb-6">
            {t('information_experience_description')}
          </div>
          <div className="mt-4 md-styles">{description}</div>
        </div>
        <div className="mt-8 pt-8 border-t-[1px] border-t-gray-400 md-styles">
          <div className="font-bold text-4xl" id="details">
            {t('information_experience_details')}
          </div>
          {details}
        </div>
        <div className="mt-8 pt-8 border-t-[1px] border-t-gray-400">
          <div className="grid grid-cols-2">
            <div className="font-bold text-4xl flex items-center" id="reviews">
              {t('information_experience_reviews')}
            </div>
            <div className="grid place-items-end font-bold text-xl ">
              <div>
                {Number.isNaN(averageRating)
                  ? t('comment_noreviews')
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
            {reviews && reviews.length == 0 && t('comment_nocomments')}
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
      <ReserveForm
        data={data}
        id={id}
        minPersons={minPersons}
        maxPersons={maxPersons}
      />
    </div>
  );
};

export default InformationExperience;
