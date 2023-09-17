import { useState } from 'react';

const ReserveForm = () => {
  const [isTextValid, setIsTextValid] = useState(null);
  const [isEmailValid, setIsEmailValid] = useState(null);
  const [isPhoneValid, setIsPhoneValid] = useState(null);

  const verifyValidName = (e) => {
    //verifica que solo tenga letras de la a a la z
    setIsTextValid(
      /^[a-zA-Z]+$/.test(e.target.value) &&
        !/[0-9\|{}\[\]_\\]/.test(e.target.value)
    );
  };

  const verifyValidEmail = (e) => {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    setIsEmailValid(regex.test(e.target.value));
    // console.log(regex.test(e.target.value));
  };

  const verifyValidPhone = (e) => {
    // Expresión regular para verificar un número de teléfono en formato internacional
    const regex = /^\+?[0-9()\s-]+$/;

    console.log(regex.test(e.target.value));
    setIsPhoneValid(regex.test(e.target.value));
  };

  return (
    <div className="w-full h-[400px] mt-4 grid grid-rows-5">
      <div className="container-input-field">
        <div class="input-field ">
          <input
            type="text"
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
        <div class="input-field">
          <input
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
        <div class="input-field">
          <input
            type="text"
            id="name"
            required
            onChange={(e) => {
              verifyValidPhone(e);
            }}
          />
          <label for="name">Phone number:</label>
        </div>
      </div>
      <div className="container-input-field">
        <div class="input-field">
          <input type="text" id="name" required />
          <label for="name">Nationality:</label>
        </div>
      </div>
      <div className="container-input-field">
        <div class="input-field">
          <input type="text" id="name" required />
          <label for="name">Hotel / Accommodation:</label>
        </div>
      </div>
    </div>
  );
};

export default ReserveForm;
