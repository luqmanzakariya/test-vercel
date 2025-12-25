import { Suspense } from "react";
import { DictProps } from "@/types/dict";
import NavbarHomeClient from "@/components/organisms/navbar/home/client";
import NavbarHomeServer from "@/components/organisms/navbar/home/server";
import Inquiry from "@/components/organisms/inquiry";
import StartJourney from "@/components/organisms/startJourney";
import WereHereToHelp from "@/components/organisms/wereHereToHelp";
// import ReviewCarousel from "@/components/organisms/review";
import FindOurBestProfitableBusiness from "@/components/organisms/findOurBestProfitableBusiness";
import SecureYourBusinessNow from "@/components/organisms/secureYourBusinessNow";
import ExplorePopularBusinessLocation from "@/components/organisms/explorePopularBusinessLocation";
import NewBusinessListing from "@/components/organisms/newBusinessListing";
import { BusinessListingResponse } from "@/types/business";
import LanguageSwitcher from "@/components/molecules/languageSwitcher/index.tsx";
import ModalBusinessValuation from "@/components/organisms/modalBusinessValuation";
import GetBusinessValuation from "@/components/organisms/getBusinessValuation";
import WereHereToHelpServer from "@/components/organisms/wereHereToHelpServer";
import FindOurBestProfitableBusinessServer from "@/components/organisms/findOurBestProfitableBusinessServer";
// import BusinessCalculator from "@/components/molecules/businessCalculator";
// import ExclusiveMonthlyDeal from "@/components/organisms/exclusiveMonthlyDeal";
// import OurTeam from "@/components/organisms/ourTeam";
// import GetQuickPrice from "@/components/organisms/getQuickPrice";

const HomePages = ({
  dict,
  businessListData,
}: {
  dict: DictProps;
  businessListData: BusinessListingResponse;
}) => {
  return (
    <div>
      <div className="home-landing">
        <div className="bg-bluePrimary flex items-center justify-end text-right pr-4 lg:pr-[47px] lg:h-[45px]">
          <LanguageSwitcher />
        </div>
        <Suspense fallback={<NavbarHomeClient dict={dict} />}>
          <NavbarHomeServer dict={dict} />
        </Suspense>
        <ModalBusinessValuation dict={dict} />
        <div className="pt-[66px] lg:pb-[165px] flex flex-col items-center">
          <div className="text-[45px] md:text-[90px] font-medium leading-[40px] md:leading-[100px] text-center lg:text-center px-4 lg:px-0">
            {dict.common.getTheIdealBusinessForYou}
          </div>
          <div className="mt-10 lg:mt-11 text-[28px] lg:text-[36px] font-normal leading-[32px] lg:leading-[45px] text-center px-4 lg:px-0">
            {dict.common.weveMoreThan145000BusinessAndIdea}
          </div>
          <GetBusinessValuation dict={dict} />
        </div>
      </div>
      {/* <ReviewCarousel dict={dict} /> */}
      <Suspense fallback={<WereHereToHelp dict={dict} />}>
        <WereHereToHelpServer dict={dict} />
      </Suspense>
      <NewBusinessListing dict={dict} businessListData={businessListData} />
      <SecureYourBusinessNow dict={dict} />
      <Suspense fallback={<FindOurBestProfitableBusiness dict={dict} />}>
        <FindOurBestProfitableBusinessServer dict={dict} />
      </Suspense>
      <ExplorePopularBusinessLocation dict={dict} />
      {/* <ExclusiveMonthlyDeal dict={dict} /> */}
      {/* <OurTeam dict={dict} /> */}
      {/* <GetQuickPrice />  */}
      <StartJourney dict={dict} />
      <Inquiry dict={dict} />
    </div>
  );
};

export default HomePages;
