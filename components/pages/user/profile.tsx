"use client";
import CardAddressInput from "@/components/molecules/card/card-address-input";
import CardProfileInput from "@/components/molecules/card/card-profile-input";
import CardSocmedInput from "@/components/molecules/card/card-socmed-input";
import { IProfilePayload } from "@/types/authentication";
import { DictProps } from "@/types/dict";
import { UserProps } from "@/types/userInfo";
import { postProfileClient, postUploadImageClient } from "@/utils/api/client/authentication-client";
import { MouseEvent, useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useToast } from "@/components/templates/toast";
import { CountryData, StateData } from "@/types/location";
import { postGetStatesClient } from "@/utils/api/client/location-client";
import LoadingSpinner from "@/components/atoms/icons/loading-spinner";

const ProfileUserPage = ({
  dict,
  userInfo,
  countries,
}: {
  dict: DictProps;
  userInfo: UserProps;
  countries: CountryData[];
}) => {
  const { add } = useToast();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [user] = useState(userInfo);
  const [arrayInput, setArrayInput] = useState(user?.broker_details?.social_media_links || [""]);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const { register, handleSubmit, watch, setValue } = useForm<IProfilePayload>({
    defaultValues: user,
  });

  const [states, setStates] = useState<StateData[]>([]);
  const selectedCountry = watch("address_details.country");
  const selectedState = watch("address_details.state");
  const cities = states.find((s) => s.state === selectedState)?.cities || [];

  useEffect(() => {
    if (selectedCountry) {
      const countryDetail = countries.find((country) => country.country === selectedCountry);
      postGetStatesClient(Number(countryDetail?.id))
        .then((res) => setStates(res.data))
        .catch((error) => console.log("Error fetching states:", error));
    } else {
      setStates([]);
      setValue("address_details.state", "");
      setValue("address_details.city", "");
    }
  }, [countries, selectedCountry, setValue]);

  useEffect(() => {
    setValue("address_details.city", "");
  }, [selectedState, setValue]);

  const handleRegister = async (input: IProfilePayload) => {
    const array = input?.broker_details?.social_media_links || [];
    let filtered: string[] = [];
    if (array.length) {
      filtered = array.filter(function (el) {
        return el != "";
      });
    }
    const newInput = {
      ...input,
      broker_details: {
        ...input.broker_details,
        social_media_links: filtered,
      },
    };
    const res = postProfileClient(newInput);
    return res;
  };

  const handleUpload = async () => {
    const formData = new FormData();
    formData.append("image", selectedFile || "");

    const res = postUploadImageClient(formData);
    return res;
  };

  const addFormFields = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setArrayInput([...arrayInput, ""]);
  };

  const onSubmit = (input: IProfilePayload) => {
    setIsLoading(true);
    const params = {
      id: user.id,
      name: input.name,
      email: input.email,
      phone_number: input.phone_number,
      address_details: {
        address: input.address_details.address,
        city: input.address_details.city,
        state: input.address_details.state,
        country: input.address_details.country,
        zip_code: input.address_details.zip_code,
      },
      type: input.type,
      photo_profile: "",
      broker_details: {
        job_title: input.broker_details.job_title,
        company: input.broker_details.company,
        website: input.broker_details.website,
        photo_profile: input.broker_details.photo_profile,
        about: input.broker_details.about,
        social_media_links: input.broker_details.social_media_links,
      },
      status: "UNVERIFIED",
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
      <form id="profile-form">
        <CardProfileInput
          dict={dict}
          register={register}
          setSelectedFile={setSelectedFile}
          user={user}
        />
        <CardSocmedInput
          dict={dict}
          register={register}
          arrayInput={arrayInput}
          addFormFields={addFormFields}
        />
        <CardAddressInput
          dict={dict}
          register={register}
          countries={countries}
          states={states}
          cities={cities}
        />
        <div className="flex items-center justify-start gap-3 sm:gap-2">
          <button
            form="profile-form"
            className="bg-blue-950 text-white rounded-lg py-3 px-6 sm:px-12 w-full sm:w-auto text-sm sm:text-base text-center disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={isLoading}
            onClick={handleSubmit(onSubmit)}
            type="submit"
          >
            {isLoading ? (
              <span className="flex items-center justify-center gap-2">
                {/* Optional loading spinner */}
                <LoadingSpinner />
                {dict.user.saving}
              </span>
            ) : (
              dict.user.save
            )}
          </button>
          {/* Optional cancel button */}
          {/* <button
            className="bg-none rounded-lg py-3 px-6 sm:px-12 w-full sm:w-auto text-sm sm:text-base text-center border border-gray-300 disabled:opacity-50"
            disabled={isLoading}
          >
            {dict.user.cancel}
          </button> */}
        </div>
      </form>
    </div>
  );
};

export default ProfileUserPage;
