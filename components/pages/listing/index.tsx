import { Suspense } from "react";
import { DictProps } from "@/types/dict";
import NavbarListingServer from "@/components/organisms/navbar/listing/server";
import NavbarListingClient from "@/components/organisms/navbar/listing/client";
import { BusinessListingResponse } from "@/types/business";
import { UserProps } from "@/types/userInfo";
import ListingPublicClient from "@/components/organisms/listingPublic/client";
import { StateData } from "@/types/location";

const ListingPage = ({
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
  return (
    <div>
      <Suspense fallback={<NavbarListingClient dict={dict} />}>
        <NavbarListingServer dict={dict} />
      </Suspense>
      <ListingPublicClient
        businessListData={businessListData}
        userInfo={userInfo}
        dict={dict}
        states={states}
      />
    </div>
  );
};

export default ListingPage;
