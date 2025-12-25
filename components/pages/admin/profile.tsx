"use client";
import LoadingSpinner from "@/components/atoms/icons/loading-spinner";
import CardAdminProfileInput from "@/components/molecules/card/card-admin-profile-input";
import { useToast } from "@/components/templates/toast";
import { IProfilePayload } from "@/types/authentication";
import { DictProps } from "@/types/dict";
import { UserProps } from "@/types/userInfo";
import { postProfileClient, postUploadImageClient } from "@/utils/api/client/authentication-client";
import { useState } from "react";
import { useForm } from "react-hook-form";

const ProfileAdminPage = ({ dict, userInfo }: { dict: DictProps; userInfo: UserProps }) => {
  const { add } = useToast();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [user] = useState(userInfo);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const { register, handleSubmit } = useForm<IProfilePayload>({
    defaultValues: user,
  });

  const handleRegister = async (input: IProfilePayload) => {
    const res = postProfileClient(input);
    return res;
  };

  const handleUpload = async () => {
    const formData = new FormData();
    formData.append("image", selectedFile || "");

    const res = postUploadImageClient(formData);
    return res;
  };

  const onSubmit = (input: IProfilePayload) => {
    setIsLoading(true);
    const params = {
      id: user.id,
      name: input.name,
      email: input.email,
      phone_number: input.phone_number,
      address_details: {
        address: "",
        city: "",
        state: "",
        country: "",
        zip_code: "",
      },
      type: "",
      photo_profile: "",
      broker_details: {
        job_title: "",
        company: "",
        website: "",
        photo_profile: "",
        about: "",
        social_media_links: [""],
      },
      status: "VERIFIED",
    };

    if (!selectedFile) {
      handleRegister(params)
        .then(() => {
          setIsLoading(false);
          add({
            type: "success",
            message: "Profile Updated",
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
    } else {
      handleUpload()
        .then(({ data }) => {
          const newParams = { ...params, photo_profile: data.data.url };
          handleRegister(newParams)
            .then(() => {
              setIsLoading(false);
              add({
                type: "success",
                message: "Profile Updated",
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
        })
        .catch((err) => {
          setIsLoading(false);
          console.log(err);
        });
    }
  };

  return (
    <div className="px-[16px] md:px-[40px] py-[16px] md:py-[40px]">
      <form onSubmit={handleSubmit(onSubmit)}>
        <CardAdminProfileInput
          dict={dict}
          register={register}
          setSelectedFile={setSelectedFile}
          user={user}
        />
        <div className="flex items-center justify-start gap-3 sm:gap-2 mt-6 sm:mt-8 md:mt-10">
          <button
            className="bg-blue-950 text-white rounded-lg py-3 px-6 sm:px-12 w-full sm:w-auto text-sm sm:text-base text-center disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={isLoading}
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
          {/* Optional cancel button */}
          {/* <button className="bg-none rounded-lg py-3 px-6 sm:px-12 w-full sm:w-auto text-sm sm:text-base text-center border border-gray-300">
            {dict.user.cancel}
          </button> */}
        </div>
      </form>
    </div>
  );
};

export default ProfileAdminPage;
