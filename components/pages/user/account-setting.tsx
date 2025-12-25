import { DictProps } from "@/types/dict";
import Link from "next/link";

const AccountSettingUserPage = ({ dict }: { dict: DictProps }) => {
  return (
    <div className="px-[16px] md:px-[40px] py-[16px] md:py-[40px]">
      <div className="bg-white rounded-lg overflow-hidden shadow-lg w-full p-[60px]">
        <div className="grid grid-cols-2 w-full gap-5">
          <div>
            <label>{dict.user.firstName}*</label>
            <input
              type="text"
              className="appearance-none border border-black rounded-lg w-full py-[14px] px-[25px] mt-2 leading-tight focus:outline-none focus:bg-white"
              defaultValue="Octavianus"
            />
          </div>
          <div>
            <label>{dict.user.lastName}*</label>
            <input
              type="text"
              className="appearance-none border border-black rounded-lg w-full py-[14px] px-[25px] mt-2 leading-tight focus:outline-none focus:bg-white"
              defaultValue="Matthew"
            />
          </div>
        </div>
        <div className="mt-5">
          <label>{dict.user.email}*</label>
          <input
            type="text"
            className="appearance-none border border-black rounded-lg w-full py-[14px] px-[25px] mt-2 leading-tight focus:outline-none focus:bg-white"
            defaultValue="companyinc@gmail.com"
          />
        </div>
        <div className="mt-5">
          <label>{dict.user.phoneNumber}*</label>
          <input
            type="text"
            className="appearance-none border border-black rounded-lg w-full py-[14px] px-[25px] mt-2 leading-tight focus:outline-none focus:bg-white"
            defaultValue="+62 81723801729"
          />
        </div>
        <div className="mt-5">
          <label>{dict.user.password}*</label>
          <input
            type="password"
            className="appearance-none border border-black rounded-lg w-full py-[14px] px-[25px] mt-2 leading-tight focus:outline-none focus:bg-white"
            defaultValue="123456"
          />
          <div className="text-gray-500 text-[14px]">
            {dict.user.changePassword}{" "}
            <Link href="/user/change-password" className="text-red-900">
              {dict.user.click}
            </Link>
          </div>
        </div>
        <div className="flex items-center justify-start gap-2 mt-10">
          <button className="bg-blue-950 text-white rounded-lg py-3 px-12">{dict.user.save}</button>
          <button className="bg-none rounded-lg py-3 px-12">{dict.user.cancel}</button>
        </div>
      </div>
    </div>
  );
};

export default AccountSettingUserPage;
