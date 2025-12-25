import { DictProps } from "@/types/dict";
import Button from "@/components/atoms/button";
import Line5Icon from "@/components/atoms/icons/line5";
import { BusinessListingResponse } from "@/types/business";
import CardPropertyLandingPage from "@/components/molecules/card/card-property-landing-page";
import Link from "next/link";

const NewBusinessListing = ({
  dict,
  businessListData,
}: {
  dict: DictProps;
  businessListData: BusinessListingResponse;
}) => {
  const getData = businessListData?.data;
  return (
    <div className="pt-6 lg:pt-[81px] pb-6 lg:pb-[158px] bg-cream2 px-4 sm:px-6 lg:px-[198px]">
      {/* Header Section */}
      <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between mb-8 lg:mb-[61px] gap-4">
        <div className="w-full lg:w-auto">
          <div className="text-black3 text-3xl sm:text-4xl lg:text-[64px] font-medium leading-tight lg:leading-[85px] relative">
            <div>{dict?.common?.ourBusinessListing}</div>
            <Line5Icon className="hidden lg:block absolute right-[0px] bottom-[-11px]" />
          </div>
          <div className="mt-2 text-black3 text-base sm:text-lg lg:text-[22px] font-normal leading-relaxed lg:leading-[40px]">
            {dict.common.exploreLatestAndfeaturedBusinessForSale}.
          </div>
        </div>
        <Link
          href={{
            pathname: "/listing",
          }}
        >
          <Button
            variant="black"
            className="w-full lg:w-[186px] text-center py-3 lg:py-[15px] px-6 mt-4 lg:mt-0"
          >
            {dict.common.exploreAll}
          </Button>
        </Link>
      </div>

      {/* Grid Section */}
      <div className="col-span-1 lg:col-span-3 w-full">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-x-[50px] lg:gap-y-[63px]">
          {getData &&
            getData.length > 0 &&
            getData.map((item) => <CardPropertyLandingPage key={item.id} data={item} />)}
        </div>
      </div>
    </div>
  );
};

export default NewBusinessListing;
