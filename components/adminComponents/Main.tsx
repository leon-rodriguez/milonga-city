import { signIn } from 'next-auth/react';

const Main = () => {
  return (
    <div className="h-screen w-full flex justify-center items-center bg-slate-500">
      <div className="w-[450px] h-[550px] bg-gray-300 shadow-lg rounded-lg">
        <button
          onClick={() => {
            signIn();
          }}
          className="mt-20 mx-auto w-32 h-20 rounded-lg bg-black text-white"
        >
          Sign in
        </button>
      </div>
    </div>
  );
};

export default Main;
