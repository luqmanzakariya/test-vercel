"use client";

import LoadingSpinner from "@/components/atoms/icons/loading-spinner";
import { useToast } from "@/components/templates/toast";
import { IChangePasswordAdminPayload } from "@/types/authentication";
import { DictProps } from "@/types/dict";
import { postUpdatePasswordAdminClient } from "@/utils/api/client/authentication-client";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";

const CardUpdatePasswordAdmin = ({
  dict,
  getIdValue,
}: {
  dict: DictProps;
  getIdValue: string | null;
}) => {
  const router = useRouter();
  const currentPathName = usePathname();
  const { add } = useToast();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  console.log(getIdValue);

  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm<IChangePasswordAdminPayload>({
    defaultValues: {
      user_id: Number(getIdValue),
      new_password: "",
    },
  });

  const handleRegister = async ({
    user_id,
    new_password,
    confirm_password,
  }: IChangePasswordAdminPayload) => {
    const res = postUpdatePasswordAdminClient({ user_id, new_password, confirm_password });
    return res;
  };

  const onSubmit = ({ user_id, new_password, confirm_password }: IChangePasswordAdminPayload) => {
    setIsLoading(true);
    const params = {
      user_id,
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
          router.replace(currentPathName);
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
    <div className="flex flex-col items-center bg-white rounded">
      <div className="rounded overflow-hidden shadow-lg w-full">
        <div className="px-4 sm:px-6 md:px-10 py-4 sm:py-6">
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
            <div className="my-4 sm:my-5">
              <button
                className="bg-blue-950 text-white rounded-xl w-full py-3 px-4 text-sm sm:text-base disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={isLoading}
                type="submit"
              >
                {isLoading ? (
                  <span className="flex items-center justify-center gap-2">
                    {/* Loading spinner */}
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
    </div>
  );
};

export default CardUpdatePasswordAdmin;
