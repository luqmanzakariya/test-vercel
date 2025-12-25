import { Dispatch, SetStateAction } from "react";

const LoginRegisterPill = ({
  login,
  register,
  setIsLogin,
}: {
  login: string;
  register: string;
  setIsLogin: Dispatch<SetStateAction<boolean>>;
}) => {
  return (
    <div className="flex flex-col items-center my-4">
      <div className="grid grid-cols-2 w-full">
        <button
          className="rounded-tl-full rounded-bl-full border border-gray-700 py-1 font-abril text-[14px]"
          onClick={() => setIsLogin(true)}
        >
          {login}
        </button>
        <button
          className="rounded-tr-full rounded-br-full border border-gray-700 py-1 font-abril text-[14px]"
          onClick={() => setIsLogin(false)}
        >
          {register}
        </button>
      </div>
    </div>
  );
};

export default LoginRegisterPill;
