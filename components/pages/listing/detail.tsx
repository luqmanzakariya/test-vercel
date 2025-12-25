import { Suspense } from "react";
import LocationIcon from "@/components/atoms/icons/location";
import ZoomIcon from "@/components/atoms/icons/zoom";
// import CoffeeShopImg from "@/public/assets/image/Coffee-Shop.webp";
import PropertyImage from "@/components/molecules/propertyImage";
import ProfileImage from "@/public/assets/image/ProfileImage.webp";
// import ListingDetailBusinessOverview from "@/components/organisms/listingDetailBusinessOverview";
import ListingDetailOverview from "@/components/organisms/listingDetailOverview";
import ListingDetailPropertyFeatures from "@/components/organisms/listingDetailPropertyFeatures.tsx";
// import ListingDetailAmenities from "@/components/organisms/listingDetailAmenities";
import ListingDetailAgentProfile from "@/components/organisms/listingDetailAgentProfile";
import { DictProps } from "@/types/dict";
import NavbarListingClient from "@/components/organisms/navbar/listing/client";
import NavbarListingServer from "@/components/organisms/navbar/listing/server";
import { BusinessListing, User } from "@/types/business";
import { thousandSeparator } from "@/utils/helper/formatNumber";
import ListingDetailScheduleMeeting from "@/components/organisms/listingDetailScheduleMeeting";
import { UserProps } from "@/types/userInfo";
import ShareLink from "@/components/organisms/shareLink";
import ListingDetailFavorites from "@/components/organisms/listingDetailFavorites";
import CounterMolecules from "@/components/molecules/counterMolecules";

const ListingDetailPage = ({
  dict,
  businessData,
  user,
  userInfo,
  isWishlisted,
  params,
}: {
  dict: DictProps;
  businessData: BusinessListing;
  user: User;
  userInfo: UserProps;
  isWishlisted: boolean;
  params: string;
}) => {
  // const imgArr = [CoffeeShopImg, CoffeeShopImg, CoffeeShopImg, CoffeeShopImg, CoffeeShopImg];
  return (
    <div>
      <CounterMolecules id={params} />
      <Suspense fallback={<NavbarListingClient dict={dict} />}>
        <NavbarListingServer dict={dict} />
      </Suspense>
      <div className="px-4 lg:px-[150px] py-4 lg:py-[40px] font-secondary">
        <div className="grid grid-cols-1 lg:grid-cols-2 w-full justify-items-stretch items-center mb-2">
          <div className="text-[32px] lg:text-[56px]">{businessData?.title}</div>
          <div className="text-[18px] lg:text-[40px] text-start lg:text-end">
            <span>{dict.common.price}:</span> {businessData.currency}{" "}
            {thousandSeparator(businessData?.price)}
          </div>
        </div>
        {/* <div className="text-[16px] text-end mb-8">
          <span className="text-gray-500">{dict.common.estPayment}</span> {businessData.currency}{" "}
          8,343/mo*
        </div> */}
        <div className="grid grid-cols-1 lg:grid-cols-2 w-full justify-items-stretch mb-4 lg:mb-20">
          <div className="flex items-center">
            <div className="rounded-full bg-black text-white px-4 py-1 mr-4 text-[11px]">
              {dict.common.forSell}
            </div>
            <LocationIcon className="mr-1" />
            <div className="text-gray-500">
              {businessData.address}, {businessData.city}
            </div>
          </div>
          <div className="mt-4 lg:mt-0 flex items-center justify-end">
            <ShareLink dict={dict} />
            <ListingDetailFavorites businessData={businessData} isWishlisted={isWishlisted} />
            <button className="border border-gray-950 rounded-full p-2">
              <ZoomIcon />
            </button>
          </div>
        </div>
        <PropertyImage businessData={businessData} />
        {/* <ListingDetailBusinessOverview dict={dict} /> */}
        <ListingDetailOverview dict={dict} businessData={businessData} />
        <div className="grid grid-cols-1 lg:grid-cols-3 w-full justify-items-stretch items-start mb-2 gap-4 lg:gap-20">
          <div className="col-span-1 lg:col-span-2">
            <ListingDetailPropertyFeatures dict={dict} businessData={businessData} />
            {/* <ListingDetailAmenities amenities={amenitiesArr} dict={dict} /> */}
          </div>
          <div className="contact-agent">
            <ListingDetailAgentProfile profileImage={ProfileImage} dict={dict} user={user} />
            <ListingDetailScheduleMeeting
              userInfo={userInfo}
              businessData={businessData}
              dict={dict}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListingDetailPage;
