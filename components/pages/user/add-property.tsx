"use client";
import CardAddProperty from "@/components/molecules/card/card-add-property";
import CardBusinessDetail from "@/components/molecules/card/card-business-detail";
import CardBusinessType from "@/components/molecules/card/card-business-type";
import CardPhotoVideo from "@/components/molecules/card/card-photo-video";
import { DictProps } from "@/types/dict";
import { IBusinessListingPayload } from "@/types/authentication";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { useToast } from "@/components/templates/toast";
import { MouseEvent, useState, useEffect } from "react";
import {
  postBusinessListingCreateClient,
  postBusinessListingUpdateClient,
  postUploadImageClient,
} from "@/utils/api/client/authentication-client";
import CardAddressBusinessInput from "@/components/molecules/card/card-address-business-input";
import { BusinessListingEditResponse } from "@/types/business";
import { CountryData, StateData } from "@/types/location";
import { postGetStatesClient } from "@/utils/api/client/location-client";
import LoadingSpinner from "@/components/atoms/icons/loading-spinner";
import SuccessModalAddBusiness from "@/components/organisms/successModalAddBusiness";

const AddPropertyUserPage = ({
  dict,
  businessListData,
  countries,
}: {
  dict: DictProps;
  businessListData?: BusinessListingEditResponse;
  countries: CountryData[];
}) => {
  const router = useRouter();
  const { add } = useToast();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [arrayInput, setArrayInput] = useState<(File | null | string)[]>(
    businessListData?.data?.media?.photos || [null]
  );
  const [showSuccessModal, setShowSuccessModal] = useState<boolean>(false); // State untuk modal

  // function sleep(ms: number) {
  //   return new Promise((resolve) => setTimeout(resolve, ms));
  // }

  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
    reset,
    watch,
    setValue,
  } = useForm<IBusinessListingPayload>({
    defaultValues: {
      id: Number(businessListData?.data.id) || 0,
      user_id: Number(businessListData?.data.user_id) || 0,
      title: businessListData?.data.title || "",
      description: businessListData?.data.description || "",
      currency: "IDR",
      price: Number(businessListData?.data.price) || 0,
      reason: businessListData?.data.reason || "",
      year_established: businessListData?.data.year_established || 0,
      business_detail: {
        scales: businessListData?.data.business_detail.scales || "",
        annual_income: Number(businessListData?.data.business_detail.annual_income) || 0,
        legal_entity: businessListData?.data.business_detail.legal_entity || "",
        withholding_tax_report: businessListData?.data.business_detail.withholding_tax_report || "",
        bookkeeping_system: businessListData?.data.business_detail.bookkeeping_system || "",
        shareholder: Number(businessListData?.data.business_detail.shareholder) || 0,
        asset_ownership: businessListData?.data.business_detail.asset_ownership || "",
        rent_information: {
          leased_until:
            businessListData?.data.business_detail.rent_information.leased_until.slice(0, 10) || "",
          average_customer_per_month:
            Number(
              businessListData?.data.business_detail.rent_information.average_customer_per_month
            ) || 0,
          movable: businessListData?.data.business_detail.rent_information.movable || "",
        },
        number_of_employees:
          Number(businessListData?.data.business_detail.number_of_employees) || 0,
        employee_status: businessListData?.data.business_detail.employee_status || "",
        support_and_training: businessListData?.data.business_detail.support_and_training || "",
        competitors: businessListData?.data.business_detail.competitors || "",
        inventory_and_facilities:
          businessListData?.data.business_detail.inventory_and_facilities || "",
        selling_price_status: {
          rent_status:
            businessListData?.data.business_detail.selling_price_status.rent_status || "",
          inventory_status:
            businessListData?.data.business_detail.selling_price_status.inventory_status || "",
        },
      },
      media: {
        videos: [""],
        photos: businessListData?.data?.media?.photos || [""],
        links: [""],
      },
      business_type: businessListData?.data.business_type || "",
      address: businessListData?.data.address || "",
      city: businessListData?.data.city || "",
      state: businessListData?.data.state || "",
      country: businessListData?.data.country || "",
      zip_code: Number(businessListData?.data.zip_code) || 0,
    },
  });

  const [states, setStates] = useState<StateData[]>([]);
  const selectedCountry = watch("country");
  const selectedState = watch("state");
  const cities = states.find((s) => s.state === selectedState)?.cities || [];

  useEffect(() => {
    if (selectedCountry) {
      const countryDetail = countries.find((country) => country.country === selectedCountry);
      postGetStatesClient(Number(countryDetail?.id))
        .then((res) => setStates(res.data))
        .catch((error) => console.log("Error fetching states:", error));
    } else {
      setStates([]);
      setValue("state", "");
      setValue("city", "");
    }
  }, [countries, selectedCountry, setValue]);

  useEffect(() => {
    setValue("city", "");
  }, [selectedState, setValue]);

  const handleAddNew = async (input: IBusinessListingPayload) => {
    const newInput = { ...input, business_type: input?.business_type[0] };
    const res = await postBusinessListingCreateClient(newInput);
    return res;
  };

  const handleUpdate = async (input: IBusinessListingPayload) => {
    let newInput = input;
    if (Array.isArray(input?.business_type)) {
      newInput = { ...input, business_type: input?.business_type[0] };
    }
    const res = await postBusinessListingUpdateClient(newInput);
    return res;
  };

  const handleUpload = async (input: (File | null | string)[]) => {
    const uploadPromises = input.map(async (el: File | null | string) => {
      if (typeof el === "string") {
        return el;
      } else if (typeof el?.name === "string") {
        const formData = new FormData();
        formData.append("image", el);
        try {
          const res = await postUploadImageClient(formData);
          return res.data.data.url;
        } catch (error) {
          console.log(error);
          return "";
        }
      }
      return "";
    });

    const result = await Promise.all(uploadPromises);
    return result.filter(Boolean);
  };

  const addFormFields = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setArrayInput([...arrayInput, null]);
  };

  const removeFormFields = () => {
    setArrayInput((prev) => {
      if (prev.length === 0) return prev; // Prevent error if empty
      return prev.slice(0, -1);
    });
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>, index: number) => {
    if (event.target.files?.[0]) {
      const newFiles = [...arrayInput];
      newFiles[index] = event.target.files[0];
      setArrayInput(newFiles);
    }
  };

  const onSubmit = async (input: IBusinessListingPayload) => {
    setIsLoading(true);
    const params = {
      id: businessListData?.data ? businessListData?.data.id : 0,
      user_id: businessListData?.data ? businessListData?.data.user_id : 0,
      title: input.title,
      description: input.description,
      currency: "IDR",
      price: Number(input.price),
      reason: input.reason,
      year_established: Number(input.year_established),
      business_detail: {
        scales: input.business_detail.scales,
        annual_income: Number(input.business_detail.annual_income),
        legal_entity: input.business_detail.legal_entity,
        withholding_tax_report: input.business_detail.withholding_tax_report,
        bookkeeping_system: input.business_detail.bookkeeping_system,
        shareholder: Number(input.business_detail.shareholder),
        asset_ownership: input.business_detail.asset_ownership,
        rent_information: {
          leased_until: `${input.business_detail.rent_information.leased_until}T00:00:00Z`,
          average_customer_per_month: Number(
            input.business_detail.rent_information.average_customer_per_month
          ),
          movable: input.business_detail.rent_information.movable,
        },
        number_of_employees: Number(input.business_detail.number_of_employees),
        employee_status: input.business_detail.employee_status,
        support_and_training: input.business_detail.support_and_training,
        competitors: input.business_detail.competitors,
        inventory_and_facilities: input.business_detail.inventory_and_facilities,
        selling_price_status: {
          rent_status: input.business_detail.selling_price_status.rent_status,
          inventory_status: input.business_detail.selling_price_status.inventory_status,
        },
      },
      media: {
        videos: [""],
        photos: input.media.photos,
        links: [""],
      },
      business_type: input.business_type,
      address: input.address,
      city: input.city,
      state: input.state,
      country: input.country,
      zip_code: Number(input.zip_code),
    };

    try {
      if (arrayInput) {
        const imageUrls = await handleUpload(arrayInput);
        params.media.photos = imageUrls;
      }
      if (businessListData?.data) {
        const res = await handleUpdate(params);
        if (res) {
          setIsLoading(false);
          add({
            type: "success",
            message: "Business Updated",
            duration: 5000,
            position: "topRight",
          });

          // Tampilkan modal sukses
          setShowSuccessModal(true);

          // Sembunyikan modal setelah 3 detik
          setTimeout(() => {
            setShowSuccessModal(false);
          }, 5000);

          router.push("/user/my-business");
        }
      } else {
        const res = await handleAddNew(params);
        if (res) {
          setIsLoading(false);
          add({
            type: "success",
            message: "Business Created",
            duration: 5000,
            position: "topRight",
          });

          // Tampilkan modal sukses
          setShowSuccessModal(true);

          // Sembunyikan modal setelah 3 detik
          setTimeout(() => {
            setShowSuccessModal(false);
          }, 5000);

          reset();
        }
      }
    } catch (error) {
      setIsLoading(false);

      let errorMessage = "An unknown error occurred";

      // Check if it's an axios-like error
      if (typeof error === "object" && error !== null && "response" in error) {
        errorMessage =
          (error as { response: { data: { message: string } } }).response?.data?.message ||
          errorMessage;
      }

      add({
        type: "error",
        message: errorMessage,
        duration: 5000,
        position: "topRight",
      });
    }
  };

  const businessTypeArr = [
    "Cafe",
    "Rental",
    "Cloud Kitchen",
    "Cleaning",
    "Car Rental",
    "Restaurant",
    "Property",
    "Pet Shop",
    "Service",
    "Event",
    "Food Truck",
    "Food Court",
    "Bakery",
    "Provider",
    "Content Creator",
    "Barbeque",
    "Laundry",
    "Salon",
    "Lawn",
  ];

  return (
    <div>
      {showSuccessModal && <SuccessModalAddBusiness dict={dict} />}
      <div className="px-[16px] md:px-[40px] py-[16px] md:py-[40px]">
        <form onSubmit={handleSubmit(onSubmit)}>
          <CardAddProperty dict={dict} register={register} setError={setError} errors={errors} />
          <CardBusinessDetail dict={dict} register={register} setError={setError} errors={errors} />
          <CardPhotoVideo
            dict={dict}
            register={register}
            arrayInput={arrayInput}
            addFormFields={addFormFields}
            handleFileChange={handleFileChange}
            removeFormFields={removeFormFields}
          />
          <CardBusinessType type={businessTypeArr} dict={dict} register={register} />
          <CardAddressBusinessInput
            dict={dict}
            register={register}
            setError={setError}
            errors={errors}
            countries={countries}
            states={states}
            cities={cities}
          />
          <div className="flex items-center justify-start gap-3 sm:gap-2">
            <button
              className="bg-blue-950 text-white rounded-lg py-3 px-6 sm:px-12 w-full sm:w-auto text-sm sm:text-base text-center disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={isLoading}
            >
              {isLoading ? (
                <span className="flex items-center justify-center gap-2">
                  {/* Optional loading spinner */}
                  <LoadingSpinner />
                  {dict.addNewProperty.submitting}
                </span>
              ) : (
                dict.addNewProperty.submitBusiness
              )}
            </button>
            {/* Optional cancel button */}
            {/* <button className="bg-none rounded-lg py-3 px-6 sm:px-12 w-full sm:w-auto text-sm sm:text-base text-center border border-gray-300">
            {dict.user.cancel}
          </button> */}
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddPropertyUserPage;
