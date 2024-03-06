import { useState } from 'react';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';

const ContactForm = () => {
  const [isTextValid, setIsTextValid] = useState(null);
  const [isEmailValid, setIsEmailValid] = useState(null);
  const [message, setMessage] = useState(null);
  const [name, setName] = useState(null);
  const [mail, setMail] = useState(null);
  const [phone, setPhone] = useState(null);
  const [isMailSent, setIsMailSent] = useState(false);
  const [warning, setWarning] = useState('');

  const { t } = useTranslation();

  const verifyValidName = (e) => {
    //verifica que solo tenga letras de la a a la z
    setIsTextValid(
      /^[a-zA-Z\s]+$/.test(e.target.value) &&
        !/[0-9\|{}\[\]_\\]/.test(e.target.value) &&
        /[a-zA-Z]/.test(e.target.value)
    );
    setName(e.target.value);
  };

  const verifyValidEmail = (e) => {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    setIsEmailValid(regex.test(e.target.value));
    setMail(e.target.value);
  };

  const handleMessage = (e) => {
    setMessage(e.target.value);
  };

  const handlePhone = (e) => {
    setPhone(e.target.value);
  };

  const handleSubmit = async () => {
    if (message && isTextValid && isEmailValid) {
      fetch('/api/send/route', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          reserveType: '',
          name: name,
          mail: mail,
          date: ``,
          hour: '',
          phone: phone,
          hotel: '',
          price: '',
          persons: '',
          nationality: '',
          observations: '',
          emailType: 'contact',
          message: message,
        }),
      }).then((response) => {
        // console.log(response);
      });
      const res = await fetch('/api/messages', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message: message,
          name: name,
          mail: mail,
          phone: phone,
        }),
      });
      if (res.ok) {
        setIsMailSent(true);
      } else if (!res.ok) {
        console.log('fail on the database');
      }
    } else {
      setWarning(t('contact_info_incorrect'));
    }
  };

  return (
    <div>
      {!isMailSent ? (
        <div className=" max-w-[600px] h-[800px] mx-auto border rounded-md shadow-md pt-4">
          <div className="">
            <h3 className="text-3xl font-semibold text-center">
              {t('contact_title')}
            </h3>
            <h3 className="text-md text-center mt-4 text-[#8d8d8f]">
              {t('contact_subtitle')}
            </h3>
          </div>
          <div className=" pt-12">
            <div className="container-input-field">
              <div
                className={`${
                  isTextValid ? 'input-field' : 'input-field-incorrect'
                }`}
              >
                <input
                  type="text"
                  autoComplete="off"
                  required
                  onChange={(e) => {
                    verifyValidName(e);
                  }}
                />
                <label htmlFor="name">{t('contact_name')}:</label>
              </div>
            </div>
            <div className="container-input-field my-20">
              <div
                className={`${
                  isEmailValid ? 'input-field' : 'input-field-incorrect'
                }`}
              >
                <input
                  type="text"
                  autoComplete="off"
                  required
                  onChange={(e) => {
                    verifyValidEmail(e);
                  }}
                />
                <label htmlFor="email">{t('contact_email')}:</label>
              </div>
            </div>
            <div className="container-input-field">
              <div className="input-field ">
                <input
                  type="text"
                  autoComplete="off"
                  required
                  onChange={(e) => {
                    handlePhone(e);
                  }}
                />
                <label htmlFor="phone">{t('contact_phone')}</label>
              </div>
            </div>
            <div className="w-full flex justify-center items-end mt-20">
              <textarea
                placeholder={t('contact_placeholder')}
                rows="4"
                cols="50"
                className="w-[260px] h-24 border-2 border-[#bbb] rounded-lg p-2 outline-none resize-none"
                onChange={handleMessage}
              ></textarea>
            </div>
            <div className="text-sm text-red-600 text-center mt-4 mb-14">
              {warning}
            </div>
            <div className="w-full flex justify-center items-end">
              <button
                className="w-[130px] h-12 bg-[#0088cc] rounded-3xl flex justify-center items-center text-white text-md cursor-pointer transition-all duration-100 ease-in max-[920px]:h-10 hover:bg-[#0088ccbb]"
                onClick={handleSubmit}
              >
                {t('contact_cta')}
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="relative py-3 sm:max-w-xl sm:mx-auto">
          <div
            className="rounded-lg border bg-card text-card-foreground shadow-sm mx-auto"
            data-v0-t="card"
          >
            <div className="p-6 px-8 py-12 text-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-16 h-16 mx-auto mb-4"
              >
                <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
              </svg>
              <h2 className="text-3xl font-semibold text-gray-900 mb-2">
                The email has been sent.
              </h2>
              <p className="text-gray-600 text-md">
                We will get back to you as soon as possible
              </p>
              <Link href="/">
                <button className="w-[200px] mx-auto mt-8 h-12 rounded-3xl flex justify-center items-center border-2 border-black text-black text-xl font-bold cursor-pointer transition-all duration-100 ease-in bg-transparent hover:bg-[#000] hover:text-[#fff] ">
                  Return to Home
                </button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ContactForm;
