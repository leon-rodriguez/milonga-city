import { useState } from 'react';

const ContactForm = () => {
  const [isTextValid, setIsTextValid] = useState(null);
  const [isEmailValid, setIsEmailValid] = useState(null);
  const [message, setMessage] = useState(null);

  const verifyValidName = (e) => {
    //verifica que solo tenga letras de la a a la z
    setIsTextValid(
      /^[a-zA-Z\s]+$/.test(e.target.value) &&
        !/[0-9\|{}\[\]_\\]/.test(e.target.value) &&
        /[a-zA-Z]/.test(e.target.value)
    );
  };

  const verifyValidEmail = (e) => {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    setIsEmailValid(regex.test(e.target.value));
  };

  const handleMessage = (e) => {
    setMessage(e.target.value);
  };

  const handleSubmit = () => {
    if (message && isTextValid && isEmailValid) {
      alert(message);
    }
  };

  return (
    <div className=" max-w-[600px] h-[800px] mx-auto border rounded-md shadow-md pt-4">
      <div className="">
        <h3 class="text-3xl font-semibold text-center">Send us your message</h3>
        <h3 class="text-md text-center mt-4 text-[#8d8d8f]">
          We will be answering in the following days
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
            <label for="name">Name:</label>
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
            <label for="email">Email:</label>
          </div>
        </div>
        <div className="container-input-field">
          <div className="input-field ">
            <input type="text" autoComplete="off" required />
            <label for="phone">Phone: (optional)</label>
          </div>
        </div>
        <div className="w-full flex justify-center items-end mt-20">
          <textarea
            placeholder="Message"
            rows="4"
            cols="50"
            className="w-[260px] h-24 border-2 border-[#bbb] rounded-lg p-2 outline-none resize-none"
            onChange={handleMessage}
          ></textarea>
        </div>
        <div className="w-full flex justify-center items-end mt-20">
          <button
            className="w-[130px] h-12 bg-[#0088cc] rounded-3xl flex justify-center items-center text-white text-md cursor-pointer transition-all duration-100 ease-in max-[920px]:h-10 hover:bg-[#0088ccbb]"
            onClick={handleSubmit}
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
