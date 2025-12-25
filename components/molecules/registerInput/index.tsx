import { DictProps } from "@/types/dict";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { IRegisterPayload } from "@/types/authentication";
import { postRegisterClient } from "@/utils/api/client/authentication-client";
import { useRouter, usePathname } from "next/navigation";
import { useToast } from "@/components/templates/toast";

const RegisterInput = ({ dict }: { dict: DictProps }) => {
  const router = useRouter();
  const currentPathName = usePathname();
  const { add } = useToast();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm<IRegisterPayload>({
    defaultValues: {
      name: "",
      email: "",
      password: "",
      phone_number: "",
    },
  });

  const handleRegister = async ({ name, email, password, phone_number }: IRegisterPayload) => {
    const res = postRegisterClient({ name, email, password, phone_number });
    return res;
  };

  const onSubmit = ({ name, email, password, phone_number }: IRegisterPayload) => {
    setIsLoading(true);
    const params = {
      name: name,
      email: email,
      password,
      phone_number,
    };

    handleRegister(params)
      .then(() => {
        setIsLoading(false);
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
  };

  return (
    <>
      <div className="text-center">
        <div className="text-[30px] font-abril">{dict.common.register}</div>
      </div>
      <div className="text-center mb-5">
        <div className="text-[12px] font-secondary">
          {dict.common.alreadyHaveAccount} <span className="font-abril">{dict.common.login}</span>
        </div>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label className="text-sm">{dict.common.name}*</label>
          <input
            type="text"
            className="bg-gray-100 appearance-none border-1 border-gray-100 rounded w-full py-2 px-4 leading-tight focus:outline-none focus:bg-white"
            {...register("name", {
              required: dict.error.nameRequired,
            })}
          />
          <div className="min-h-[24px] text-[12px] text-redError">{errors.name?.message}</div>
        </div>
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
          <label className="text-sm">{dict.common.phoneNumber}*</label>
          <input
            type="text"
            className="bg-gray-100 appearance-none border-1 border-gray-100 rounded w-full py-2 px-4 leading-tight focus:outline-none focus:bg-white"
            {...register("phone_number", {
              required: dict.error.phoneRequired,
            })}
          />
          <div className="min-h-[24px] text-[12px] text-redError">
            {errors.phone_number?.message}
          </div>
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
        <div className="flex items-center mb-5">
          <input className="mr-2" type="checkbox" />
          <label className="text-[8px] font-secondary">{dict.common.byHittingRegister}</label>
        </div>
        <div className="mb-5">
          <button className="bg-blue-950 text-white rounded w-full py-2 px-4" disabled={isLoading}>
            {dict.common.register}
          </button>
        </div>
      </form>
    </>
  );
};

export default RegisterInput;
