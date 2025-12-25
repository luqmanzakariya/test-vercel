import { DictProps } from "@/types/dict";
import CheckIcon from "@/components/atoms/icons/check";
// import Button from "@/components/atoms/button";
// import ArrowNextIcon from "@/components/atoms/icons/arrow-next";

const SecureYourBusinessNow = ({ dict }: { dict: DictProps }) => {
  return (
    <div className="relative h-full lg:min-h-[824px] px-4 lg:px-[90px] my-8 lg:mt-[170px] lg:mb-[143px] flex gap-[0px] lg:gap-[52px] justify-center items-stretch">
      <div className="secure-business-left hidden lg:block">
        <div className="relative z-10 pt-8 pl-24 h-full flex flex-col justify-between">
          {/* <div>
            <h1 className="text-5xl font-primary font-medium mb-6">{dict.common.secure}</h1>
          </div> */}
        </div>
      </div>
      <div className="secure-business-right">
        <div className="h-full rounded-[30] px-[45px] py-[43px] bg-white relative">
          <div className="text-[32px] lg:text-[48px] font-medium leading-[41px] lg:mt-[70px] lg:mb-[17px]">
            {dict.common.whoWeAre}
          </div>
          <div className="text-black/70 text-[18px] lg:text-[32px] font-normal leading-[20px] lg:leading-[41px] pb-[20px] lg:pb-[88px] border-b border-black">
            {dict.common.yourPremierPartnerInBusiness}
          </div>
          {/* <div className="p-[15px] flex align-items justify-between pb-[24px] border-b border-black">
            <div>
              <div className="text-[58px] font-medium leading-[70px]">1.7K+</div>
              <div className="text-black/70 text-[18px] font-normal leading-[35px]">
                {dict.common.completedProject}
              </div>
            </div>
            <div>
              <div className="text-[58px] font-medium leading-[70px]">1.3mil+</div>
              <div className="text-black/70 text-[18px] font-normal leading-[35px]">
                {dict.common.happyCustomers}
              </div>
            </div>
          </div> */}
          <div className="pt-[28px] lg:pt-[50px] flex flex-col gap-[4px] lg:gap-[25px] text-[18px] lg:text-[28px] font-normal leading-[24px] lg:leading-[30px]">
            <div className="flex items-center gap-4">
              <CheckIcon className="min-w-[18px] min-h-[15px]" />{" "}
              <div>{dict.common.loanAndLowInterestFacility}</div>
            </div>
            <div className="flex items-center gap-4">
              <CheckIcon className="min-w-[18px] min-h-[15px]" />{" "}
              <div>{dict.common.over100kBusiness}</div>
            </div>
            <div className="flex items-center gap-4">
              <CheckIcon className="min-w-[18px] min-h-[15px]" />{" "}
              <div>{dict.common.expertBusinessConsultation}</div>
            </div>
            <div className="flex items-center gap-4">
              <CheckIcon className="min-w-[18px] min-h-[15px]" />{" "}
              <div>{dict.common.strategicAdvisory}</div>
            </div>
          </div>
          {/* <div className="flex flex-col lg:flex-row mt-4 lg:mt-0 lg:absolute bottom-[43px] items-center gap-[21px]">
            <Button variant="primary" style="w-[190px] h-[60px]">
              {dict.common.getBusinessValuation}
            </Button>
            <div className="flex items-center gap-4 text-black2 text-5 font-bold leading-[26.67px]">
              <div>{dict.common.requestACallback}</div>
              <ArrowNextIcon />
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default SecureYourBusinessNow;
