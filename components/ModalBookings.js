import { useEffect, useRef } from 'react';

const ModalBookings = ({ isActive }) => {
  const modal = useRef(null);

  useEffect(() => {
    if (isActive) {
      modal.current.classList.remove('opacity-0', 'scale-0');
      modal.current.classList.add('opacity-100', 'scale-100');
    } else {
      modal.current.classList.remove('opacity-100', 'scale-100');
      modal.current.classList.add('opacity-0', 'scale-0');
    }
  }, [isActive]);

  return (
    <div
      className="w-[400px] min-h-[208px] bg-white absolute top-8 right-0 grid grid-rows-[52px_6fr] text-[#505050] rounded-2xl opacity-0 scale-0 transition-all duration-200 ease-out"
      ref={modal}
    >
      <div className="flex justify-between border-b p-3 text-lg">
        <div>Your Bookings</div>
        <div>X</div>
      </div>
      <div>
        <div className="w-full h-[70px] borde grid grid-cols-[1fr_3fr_2fr] border-b cursor-pointer transition-all duration-200 ease-out hover:bg-[#00000011]">
          <div className="flex justify-center items-center">
            <img
              src="../Images/bailarines.jpg"
              className="w-[60px] h-[60px] rounded-full object-cover"
            />
          </div>
          <div className="text-sm flex items-center pl-2">
            Roundtrip Airport Private Transfer in Buenos Aires
          </div>
          <div className="text-sm flex items-center">20/08/2023</div>
        </div>
      </div>
    </div>
  );
};

export default ModalBookings;
