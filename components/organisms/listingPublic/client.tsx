"use client";
import CardProperty from "@/components/molecules/card/card-property";
import { BusinessListingResponse } from "@/types/business";
import { UserProps } from "@/types/userInfo";
import Pagination from "@/components/molecules/pagination";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import FilterListing from "../filterListing";
import { DictProps } from "@/types/dict";
import { useEffect, useState } from "react";
import { queryFilter } from "@/utils/queryFilter";
import { postBusinessListingWithFilterClient } from "@/utils/api/client/authentication-client";
import { useForm } from "react-hook-form";
import { IFilterPayload, ISearchParamPayload } from "@/types/authentication";
import { StateData } from "@/types/location";

const ListingPublicClient = ({
  dict,
  businessListData,
  userInfo,
  states,
}: {
  dict: DictProps;
  businessListData: BusinessListingResponse;
  userInfo: UserProps;
  states: StateData[];
}) => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  const getData = businessListData?.data;

  // Pagination
  const page = searchParams.get("page") ?? "1";
  const per_page = searchParams.get("per_page") ?? "9";

  const start = (Number(page) - 1) * Number(per_page);
  const end = start + Number(per_page);

  const [entries, setEntries] = useState(getData.slice(start, end));
  const [filterData, setFilterData] = useState([]);
  const [totalData, setTotalData] = useState(getData.length);

  // Filter
  const DEFAULT_VALUE = {
    business_type: "",
    country: "",
    state: "",
    city: "",
    year_established: "",
    min_price: "",
    max_price: "",
  };
  const [isLoading, setIsLoading] = useState(false);
  const [isFilter, setIsFilter] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
    setError,
    watch,
    setValue,
  } = useForm<IFilterPayload>({
    defaultValues: DEFAULT_VALUE,
  });

  const selectedState = watch("state");
  const cities = states.find((s) => s.state === selectedState)?.cities || [];

  useEffect(() => {
    setValue("city", "");
  }, [selectedState, setValue]);

  const handleRegister = async (input: ISearchParamPayload) => {
    const res = postBusinessListingWithFilterClient(input);
    return res;
  };
  const handleReset = () => {
    setIsLoading(true);
    router.replace(`${pathname}?page=1&per_page=9`);
    setEntries(getData.slice(start, end));
    setTotalData(getData.length);
    reset();
    setIsFilter(false);
    setIsLoading(false);
  };

  const onSubmit = (input: IFilterPayload) => {
    setIsLoading(true);
    const params = {
      business_type: input.business_type,
      country: input.country,
      state: input.state,
      city: input.city,
      year_established: input.year_established,
      min_price: input.min_price,
      max_price: input.max_price,
    };

    const filterString = { searchParams: queryFilter(params) };

    if ((input.min_price !== "" || input.max_price !== "") && input.min_price > input.max_price) {
      setError("max_price", { message: "Min price must be smaller than max price" });
      setIsLoading(false);
    } else {
      handleRegister(filterString)
        .then((data) => {
          router.replace(`${pathname}?page=1&per_page=9`);
          setEntries(data?.data?.slice(start, end));
          setFilterData(data?.data);
          setTotalData(data?.data?.length);
          setIsFilter(true);
          setIsLoading(false);
        })
        .catch((err) => {
          setIsLoading(false);
          console.log("error", err);
        });
    }
  };

  useEffect(() => {
    if (!isFilter) setEntries(getData.slice(start, end));
    if (isFilter) setEntries(filterData.slice(start, end));
  }, [end, filterData, getData, isFilter, page, per_page, start]);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 justify-items-center border-t">
      <div className="hidden lg:block w-full px-10 border-x border-gray-200 bg-gray-100">
        <div className="font-secondary mt-5">
          <form onSubmit={handleSubmit(onSubmit)}>
            <FilterListing
              dict={dict}
              register={register}
              handleReset={handleReset}
              isLoading={isLoading}
              errors={errors}
              setError={setError}
              states={states}
              cities={cities}
            />
          </form>
        </div>
      </div>
      <div className="col-span-1 lg:col-span-3 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 font-secondary mt-10 mb-5 px-5 gap-5">
          {entries &&
            entries.length > 0 &&
            entries.map((item) => <CardProperty key={item.id} data={item} userInfo={userInfo} />)}
        </div>
        <div className="lg:ml-5 mb-20 text-center">
          <Pagination
            hasNextPage={end < totalData}
            hasPrevPage={start > 0}
            totalCount={totalData || 0}
          />
        </div>
      </div>
    </div>
  );
};

export default ListingPublicClient;
