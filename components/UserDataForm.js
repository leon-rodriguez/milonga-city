import { useState } from 'react';
import NationalityPicker from './NationalityPicker';

const UserDataForm = ({ handleDataFormChange, dataFormValues }) => {
  const [isTextValid, setIsTextValid] = useState(null);
  const [isEmailValid, setIsEmailValid] = useState(null);
  const [isPhoneValid, setIsPhoneValid] = useState(null);
  const [isHotelValid, setIsHotelValid] = useState(null);

  const verifyValidName = (e) => {
    //verifica que solo tenga letras de la a a la z
    setIsTextValid(
      /^[a-zA-Z\s]+$/.test(e.target.value) &&
        !/[0-9\|{}\[\]_\\]/.test(e.target.value) &&
        /[a-zA-Z]/.test(e.target.value)
    );
    if (isTextValid) {
      handleDataFormChange({
        ...dataFormValues,
        name: e.target.value,
      });
    }
  };

  const verifyValidEmail = (e) => {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    setIsEmailValid(regex.test(e.target.value));
    if (regex.test(e.target.value)) {
      handleDataFormChange({
        ...dataFormValues,
        mail: e.target.value,
      });
    }
  };

  const verifyValidPhone = (e) => {
    // Expresión regular para verificar un número de teléfono en formato internacional
    const regex = /^\+?[0-9()\s-]+$/;

    setIsPhoneValid(regex.test(e.target.value));
    if (isPhoneValid) {
      handleDataFormChange({
        ...dataFormValues,
        phone: e.target.value,
      });
    }
  };

  const verifyValidHotel = (e) => {
    setIsHotelValid(e.target.value.trim().length > 0 ? true : false);
    if (isHotelValid) {
      handleDataFormChange({
        ...dataFormValues,
        hotel: e.target.value,
      });
    }
  };

  const verifyObservations = (e) => {
    handleDataFormChange({
      ...dataFormValues,
      observations: e.target.value,
    });
  };

  return (
    <div>
      <div className="w-full h-[380px] mt-4 grid grid-rows-4">
        <div className="container-input-field">
          <div
            className={`${
              isTextValid ? 'input-field' : 'input-field-incorrect'
            }`}
          >
            <input
              type="text"
              autoComplete="off"
              id="name"
              required
              onChange={(e) => {
                verifyValidName(e);
              }}
            />
            <label for="name">Name:</label>
          </div>
        </div>
        <div className="container-input-field">
          <div
            className={`${
              isEmailValid ? 'input-field' : 'input-field-incorrect'
            }`}
          >
            <input
              autoComplete="off"
              type="text"
              id="name"
              required
              onChange={(e) => {
                verifyValidEmail(e);
              }}
            />
            <label for="name">Email:</label>
          </div>
        </div>
        <div className="container-input-field">
          <div
            className={`${
              isPhoneValid ? 'input-field' : 'input-field-incorrect'
            }`}
          >
            <input
              type="text"
              autoComplete="off"
              id="name"
              required
              onChange={(e) => {
                verifyValidPhone(e);
              }}
            />
            <label for="name">Phone number:</label>
          </div>
        </div>
        <NationalityPicker
          handleDataFormChange={handleDataFormChange}
          dataFormValues={dataFormValues}
        />
        {/* <div className="container-input-field">
          <div className={`input-field ${isHotelValid ? '' : ''}`}>
            <div>
              <input
                type="text"
                required={false}
                id="name"
                autoComplete="off"
                onChange={(e) => {
                  verifyValidHotel(e);
                }}
              />
              <label for="name">Hotel / Accommodation:</label>
            </div>
          </div>
        </div> */}
      </div>
      <div className="w-full flex justify-center items-end mt-4 mb-7">
        <textarea
          placeholder="Hotel / Accommodation"
          rows="4"
          cols="50"
          className="w-[260px] h-12 border-2 border-[#bbb] rounded-lg p-2 outline-none resize-none"
          onChange={(e) => {
            verifyObservations(e);
          }}
        ></textarea>
      </div>
      <div className="w-full flex justify-center items-end mt-0">
        <textarea
          placeholder="Observations"
          rows="4"
          cols="50"
          className="w-[260px] h-24 border-2 border-[#bbb] rounded-lg p-2 outline-none resize-none"
          onChange={(e) => {
            verifyObservations(e);
          }}
        ></textarea>
      </div>
    </div>
  );
};

export default UserDataForm;
