import { useState } from "react";
import { DictProps } from "@/types/dict";
import { useForm } from "react-hook-form";
import { ILoginPayload } from "@/types/authentication";
import { postLoginClient } from "@/utils/api/client/authentication-client";
import { useRouter, usePathname } from "next/navigation";
import { useToast } from "@/components/templates/toast";

const LoginInput = ({ dict }: { dict: DictProps }) => {
  const router = useRouter();
  const currentPathName = usePathname();
  const { add } = useToast();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm<ILoginPayload>({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const handleLogin = async ({ email, password }: ILoginPayload) => {
    const res = postLoginClient({ email, password });
    return res;
  };

  const onSubmit = ({ email, password }: ILoginPayload) => {
    setIsLoading(true);
    const params = {
      email: email,
      password,
    };

    handleLogin(params)
      .then(() => {
        setIsLoading(false);
        router.replace(currentPathName);
        router.refresh();
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
  };

  return (
    <>
      <div className="text-center">
        <div className="text-[30px] font-abril">{dict.common.welcomeBack}</div>
      </div>
      <div className="text-center mb-5">
        <div className="text-[12px] font-secondary">
          {dict.common.stillDontHaveAccount}{" "}
          <span className="font-abril">{dict.common.signUp}</span>
        </div>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label className="text-sm">{dict.common.email}*</label>
          <input
            type="text"
            className="bg-gray-100 appearance-none border-1 border-gray-100 rounded w-full py-2 px-4 leading-tight focus:outline-none focus:bg-white"
            {...register("email", {
              required: dict.error.emailRequired,
              onChange: (e: { currentTarget: { value: string } }) => {
                setError("email", { message: "" });
                e.currentTarget.value = e.currentTarget.value.substring(0, 50);
                e.currentTarget.value = e.currentTarget.value.toLowerCase();
              },
            })}
          />
          <div className="min-h-[24px] text-[12px] text-redError">{errors.email?.message}</div>
        </div>
        <div>
          <label className="text-sm">{dict.common.password}*</label>
          <input
            type="password"
            className="bg-gray-100 appearance-none border-1 border-gray-100 rounded w-full py-2 px-4 leading-tight focus:outline-none focus:bg-white"
            {...register("password", {
              required: dict.error.passwordRequired,
              onChange: () => {
                setError("password", { message: "" });
              },
            })}
          />
          <div className="min-h-[24px] text-[12px] text-redError">{errors.password?.message}</div>
        </div>
        <div className="grid grid-cols-2 mb-5">
          <div className="flex items-center">
            <input className="mr-2" type="checkbox" />
            <label className="text-[10px] font-abril">{dict.common.keepMeLogin}</label>
          </div>
          <div className="text-gray-500 text-[10px] text-right font-secondary">
            {dict.common.forgetPassword}
          </div>
        </div>
        <div className="mb-5">
          <button className="bg-blue-950 text-white rounded w-full py-2 px-4" disabled={isLoading}>
            {dict.common.login}
          </button>
        </div>
      </form>
    </>
  );
};

export default LoginInput;
