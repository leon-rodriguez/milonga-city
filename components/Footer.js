const Footer = () => {
  return (
    <div className="w-full">
      <div className=" bg-[#0088cc] h-96 grid grid-cols-4">
        <div className=" grid grid-rows-[128px_auto]">
          <div className="grid place-items-center text-3xl font-bold text-white">
            About us
          </div>
          <div className="flex justify-center">
            <div className="w-56 text-white font-bold leading-7">
              We have more than 15 years of trajectory in tango shows and
              services, combining in our work, commitment, confidence and
              passion for what we do.
            </div>
          </div>
        </div>
        <div className="grid grid-rows-[128px_auto]">
          <div className="grid place-items-center text-3xl font-bold text-white">
            Activities
          </div>
          <div className="flex justify-center">
            <ul className="list-disc text-white font-bold list-outside leading-8">
              <li>
                <a>Milongas Visit Excursion</a>
              </li>
              <li>
                <a>Tango classes</a>
              </li>
              <li>
                <a>Wine Tastings</a>
              </li>
              <li>
                <a>Visit KAYAK for Air tickets</a>
              </li>
              <li>
                <a>Visit MOMONDO for more activities</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="grid grid-rows-[128px_auto]">
          <div className="grid place-items-center text-3xl font-bold text-white">
            Follow Us
          </div>
          <div className="flex justify-center pb-10">
            <div className="text-white text-xl font-bold">
              <span>@</span>
              <span className="mx-6">+</span>
              <span>Ç</span>
            </div>
          </div>
        </div>
        <div className="grid grid-rows-[128px_auto]">
          <div className="grid place-items-center text-3xl font-bold text-white">
            Contact
          </div>
          <div className="flex justify-center mt-1 leading-8 text-white font-bold">
            <ul>
              <li>
                <span className="mr-4">@</span>
                <span>15 3730 3056</span>
              </li>
              <li>
                <span className="mr-4">@</span>
                <span>+54 911 37303056</span>
              </li>
              <li>
                <span className="mr-4">@</span>
                <span>info@milonga-city.com.ar</span>
              </li>
              <li>
                <span className="mr-4">@</span>
                <span>Buenos Aires – Argentina</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="h-20 bg-[#01bdba]">
        <div> Copyright 2019 - All Rights Reserved. | Developed by edrweb</div>
      </div>
    </div>
  );
};

export default Footer;
