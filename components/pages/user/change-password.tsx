"use client";
import LoadingSpinner from "@/components/atoms/icons/loading-spinner";
import { useToast } from "@/components/templates/toast";
import { IAccountSettingPayload } from "@/types/authentication";
import { DictProps } from "@/types/dict";
import { postAccountSettingClient } from "@/utils/api/client/authentication-client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";

const ChangePasswordUserPage = ({ dict }: { dict: DictProps }) => {
  const { add } = useToast();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm<IAccountSettingPayload>({
    defaultValues: {
      new_password: "",
      confirm_password: "",
    },
  });

  const handleRegister = async ({ new_password, confirm_password }: IAccountSettingPayload) => {
    const res = postAccountSettingClient({ new_password, confirm_password });
    return res;
  };

  const onSubmit = ({ new_password, confirm_password }: IAccountSettingPayload) => {
    setIsLoading(true);
    const params = {
      new_password,
      confirm_password,
    };

    if (new_password !== confirm_password) {
      setError("new_password", { message: "Password must be match" });
      setError("confirm_password", { message: "Password must be match" });
      setIsLoading(false);
    } else {
      handleRegister(params)
        .then(() => {
          setIsLoading(false);
          add({
            type: "success",
            message: "Password Updated",
            duration: 5000,
            position: "topRight",
          });
        })
        .catch((err) => {
          setIsLoading(false);
          add({
            type: "error",
            message: err.response?.data?.message,
            duration: 5000,
            position: "topRight",
          });
        });
    }
  };

  return (
    <div className="px-4 sm:px-6 md:px-[40px] py-4 sm:py-6 md:py-[40px]">
      <div className="bg-white rounded-lg overflow-hidden shadow-lg w-full p-4 sm:p-6 md:p-[60px]">
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* New Password Field */}
          <div className="mt-4 sm:mt-5">
            <label className="text-sm sm:text-base">{dict.user.newPassword}*</label>
            <input
              type="password"
              className="appearance-none border border-black rounded-lg w-full py-3 sm:py-[14px] px-4 sm:px-[25px] mt-2 leading-tight focus:outline-none focus:bg-white text-sm sm:text-base"
              {...register("new_password", {
                required: dict.error.passwordRequired,
                onChange: () => {
                  setError("new_password", { message: "" });
                },
              })}
            />
            <div className="min-h-[20px] sm:min-h-[24px] text-xs sm:text-[12px] text-redError mt-1">
              {errors.new_password?.message}
            </div>
          </div>

          {/* Confirm Password Field */}
          <div className="mt-4 sm:mt-5">
            <label className="text-sm sm:text-base">{dict.user.confirmPassword}*</label>
            <input
              type="password"
              className="appearance-none border border-black rounded-lg w-full py-3 sm:py-[14px] px-4 sm:px-[25px] mt-2 leading-tight focus:outline-none focus:bg-white text-sm sm:text-base"
              {...register("confirm_password", {
                required: dict.error.passwordRequired,
                onChange: () => {
                  setError("confirm_password", { message: "" });
                },
              })}
            />
            <div className="min-h-[20px] sm:min-h-[24px] text-xs sm:text-[12px] text-redError mt-1">
              {errors.confirm_password?.message}
            </div>
          </div>

          {/* Submit Button */}
          <div className="flex items-center justify-start mt-6 sm:mt-8 md:mt-10">
            <button
              className="bg-blue-950 text-white rounded-lg py-3 px-6 sm:px-12 w-full sm:w-auto text-sm sm:text-base text-center disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={isLoading}
            >
              {isLoading ? (
                <span className="flex items-center justify-center gap-2">
                  {/* Optional loading spinner */}
                  <LoadingSpinner />
                  {dict.user.saving}
                </span>
              ) : (
                dict.user.saveUpdate
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ChangePasswordUserPage;
