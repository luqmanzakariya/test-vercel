"use client";
import { useToast } from "@/components/templates/toast";
import { IMessagePayload } from "@/types/authentication";
import { BusinessListing } from "@/types/business";
import { DictProps } from "@/types/dict";
import { UserProps } from "@/types/userInfo";
import { postMessageClient } from "@/utils/api/client/authentication-client";
import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import LockedComponent from "@/components/molecules/lockedComponent";

const ListingDetailScheduleMeeting = ({
  userInfo,
  businessData,
  dict,
}: {
  userInfo: UserProps;
  businessData: BusinessListing;
  dict: DictProps;
}) => {
  const { add } = useToast();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [user, setUser] = useState<UserProps | null>(null);

  useEffect(() => {
    setUser(userInfo);
  }, [userInfo]);

  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
    reset,
  } = useForm<IMessagePayload>({
    defaultValues: {
      business_listing_id: businessData?.id,
      message: "",
    },
  });

  const handleRegister = async (input: IMessagePayload) => {
    const res = postMessageClient(input);
    return res;
  };

  const onSubmit = (input: IMessagePayload) => {
    setIsLoading(true);
    const params = {
      business_listing_id: businessData?.id,
      message: input.message,
    };

    handleRegister(params)
      .then(() => {
        setIsLoading(false);
        add({
          type: "success",
          message: "Message Sent",
          duration: 5000,
          position: "topRight",
        });
        reset(
          { message: "" },
          {
            keepValues: false,
          }
        );
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
    <div className="rounded overflow-hidden shadow-lg w-full bg-white p-5 mt-6 relative">
      {userInfo && !userInfo.id && <LockedComponent dict={dict} />}
      <div className="text-[24px] mb-4">Schedule Meeting</div>
      <form onSubmit={handleSubmit(onSubmit)} className="mx-5">
        <div className="mt-5">
          <label>{dict.message.yourName}*</label>
          <input
            type="text"
            className="appearance-none border border-black rounded-lg w-full py-[14px] px-[25px] mt-2 leading-tight focus:outline-none focus:bg-white"
            disabled
            readOnly
            value={user?.name || ""}
          />
        </div>
        <div className="mt-5">
          <label>{dict.message.yourEmail}*</label>
          <input
            type="text"
            className="appearance-none border border-black rounded-lg w-full py-[14px] px-[25px] mt-2 leading-tight focus:outline-none focus:bg-white"
            disabled
            readOnly
            value={user?.email || ""}
          />
        </div>
        <div className="mt-5">
          <label>{dict.message.yourPhone}*</label>
          <input
            type="text"
            className="appearance-none border border-black rounded-lg w-full py-[14px] px-[25px] mt-2 leading-tight focus:outline-none focus:bg-white"
            disabled
            readOnly
            value={user?.phone_number || ""}
          />
        </div>
        <div className="mt-5">
          <label>{dict.message.yourMessage}*</label>
          <textarea
            className="appearance-none border border-black rounded-lg w-full h-[150px] py-[14px] px-[25px] mt-2 leading-tight focus:outline-none focus:bg-white"
            placeholder="Write your message here ..."
            {...register("message", {
              required: dict.error.messageRequired,
              onChange: () => {
                setError("message", { message: "" });
              },
            })}
          />
          <div className="min-h-[24px] text-[12px] text-redError">{errors.message?.message}</div>
        </div>
        <div className="mb-4 mt-4">
          <button
            className="bg-blue-950 text-white w-full py-4 px-4 flex items-center justify-center rounded"
            disabled={isLoading}
          >
            {dict.message.inquiry}
          </button>
        </div>
      </form>
    </div>
  );
};

export default ListingDetailScheduleMeeting;
