"use client";

import LoadingSpinner from "@/components/atoms/icons/loading-spinner";
import RoundedDropdown from "@/components/atoms/input/rounded-dropdown";
import { useToast } from "@/components/templates/toast";
import { IAdminUpdateBusinessPayload } from "@/types/authentication";
import { DictProps } from "@/types/dict";
import { postAdminUpdateBusinessClient } from "@/utils/api/client/authentication-client";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";

const CardUpdateStatus = ({
  dict,
  getIdValue,
  getStatusValue,
  handleRefetch,
}: {
  dict: DictProps;
  getIdValue: string | null;
  getStatusValue: string | null | undefined;
  handleRefetch: () => void;
}) => {
  const router = useRouter();
  const currentPathName = usePathname();
  const { add } = useToast();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const changeStatusString = getStatusValue
    ?.toLowerCase()
    .replace(/_/g, " ")
    .replace(/\b\w/g, (char) => char.toUpperCase());

  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm<IAdminUpdateBusinessPayload>({
    defaultValues: {
      id: Number(getIdValue),
      status: changeStatusString,
      notes: "",
    },
  });

  const handleUpdate = async (input: IAdminUpdateBusinessPayload) => {
    const newInput = {
      ...input,
      status: input.status.toUpperCase(),
    };
    const res = postAdminUpdateBusinessClient(newInput);
    return res;
  };

  const onSubmit = ({ id, status, notes }: IAdminUpdateBusinessPayload) => {
    setIsLoading(true);
    const params = {
      id: id,
      status,
      notes,
    };

    handleUpdate(params)
      .then(() => {
        setIsLoading(false);
        add({
          type: "success",
          message: "Status Updated",
          duration: 5000,
          position: "topRight",
        });
        handleRefetch();
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
    <div className="flex flex-col items-center bg-white rounded">
      <div className="rounded overflow-hidden shadow-lg w-full">
        <div className="px-4 sm:px-6 md:px-10 py-4 sm:py-6">
          <form onSubmit={handleSubmit(onSubmit)}>
            {/* Status Dropdown */}
            <RoundedDropdown
              label={dict.sidebar.changeStatus}
              option={["Unverified", "Waiting For Verification", "Reject", "Verified", "Sold"]}
              register={{
                ...register("status", {
                  required: dict.error.statusRequired,
                  onChange: () => {
                    setError("status", { message: "" });
                  },
                }),
              }}
            />

            {/* Error Message */}
            <div className="min-h-[20px] sm:min-h-[24px] text-xs sm:text-[12px] text-redError mt-1">
              {errors.status?.message}
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
                  dict.user.save
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CardUpdateStatus;
