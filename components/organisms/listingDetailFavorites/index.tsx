"use client";
import LovedIcon from "@/components/atoms/icons/loved";
import LovedReversedIcon from "@/components/atoms/icons/loved-reversed";
// import LovedReversedIcon from "@/components/atoms/icons/loved-reversed";
import { useToast } from "@/components/templates/toast";
import { IWishlistPayload } from "@/types/authentication";
import { BusinessListing } from "@/types/business";
import { postWishlistClient } from "@/utils/api/client/authentication-client";
import { postWishlistDeleteClient } from "@/utils/api/client/wishlist-client";
import { useParams, useRouter } from "next/navigation";
import React, { useState } from "react";
import { useForm } from "react-hook-form";

const ListingDetailFavorites = ({
  businessData,
  isWishlisted,
}: {
  businessData: BusinessListing;
  isWishlisted: boolean;
}) => {
  const { add } = useToast();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const router = useRouter();
  const queryParams = useParams<{ id: string }>();

  const { handleSubmit } = useForm<IWishlistPayload>({
    defaultValues: {
      business_listing_id: businessData?.id,
    },
  });

  const handleRegister = async (input: IWishlistPayload) => {
    if (isWishlisted) {
      const res = postWishlistDeleteClient(input.business_listing_id);
      return res;
    } else {
      const res = postWishlistClient(input);
      return res;
    }
  };

  const onSubmit = () => {
    setIsLoading(true);
    const params = {
      business_listing_id: businessData?.id,
    };

    handleRegister(params)
      .then(() => {
        setIsLoading(false);
        add({
          type: "success",
          message: isWishlisted ? "Remove from favorite" : "Added to favorite",
          duration: 5000,
          position: "topRight",
        });
        router.replace(`/listing/${queryParams?.id}`);
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
      {isWishlisted ? (
        <button
          className="bg-blue-950 border border-gray-950 rounded-full p-2 mr-2"
          onClick={handleSubmit(onSubmit)}
          disabled={isLoading}
        >
          <LovedIcon className="text-white" />
        </button>
      ) : (
        <button
          className=" border border-gray-950 rounded-full p-2 mr-2"
          onClick={handleSubmit(onSubmit)}
          disabled={isLoading}
        >
          <LovedReversedIcon className="text-white" />
        </button>
      )}
    </>
  );
};

export default ListingDetailFavorites;
