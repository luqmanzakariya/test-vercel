"use client";

import LoginRegisterPill from "@/components/atoms/loginRegisterPill";
// import GoogleFacebookLogin from "@/components/molecules/googleFacebookLogin";
import LoginInput from "@/components/molecules/loginInput";
import RegisterInput from "@/components/molecules/registerInput";
import { DictProps } from "@/types/dict";
import React, { useState } from "react";

const LoginCard = ({ dict }: { dict: DictProps }) => {
  const [isLogin, setIsLogin] = useState(true);
  return (
    <div className="flex flex-col items-center bg-white rounded">
      <div className="rounded overflow-hidden shadow-lg">
        <div className="px-10 py-4">
          <LoginRegisterPill
            setIsLogin={setIsLogin}
            login={dict.common.login}
            register={dict.common.register}
          />
          {isLogin && <LoginInput dict={dict} />}
          {!isLogin && <RegisterInput dict={dict} />}
          {/* <GoogleFacebookLogin /> */}
          {isLogin && (
            <div className="text-center text-[12px] font-secondary">
              {dict.common.dontHaveAccount}{" "}
              <span className="font-abril underline">{dict.common.signUp}</span>
            </div>
          )}
          {!isLogin && (
            <div className="text-center text-[12px] font-secondary">
              {dict.common.haveAnAccount}{" "}
              <span className="font-abril underline">{dict.common.login}</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default LoginCard;
