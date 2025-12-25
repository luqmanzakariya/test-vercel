import { DictProps } from "@/types/dict";
import Button from "@/components/atoms/button";
import CardStacked from "@/components/molecules/card/card-stacked";
import Line6Icon from "@/components/atoms/icons/line6";

const ExclusiveMonthlyDeal = ({ dict }: { dict: DictProps }) => {
  return (
    <div className="container-monthly-deal">
      <div className="max-w-[597px]">
        <div className="text-white text-[64px] font-medium leading-[80px] relative">
          <div>{dict.common.exclusiveMonthlyDealForYou}.</div>
          <Line6Icon className="absolute right-[0px] top-[77px]" />
        </div>
        <div className="mt-[26px] text-white text-6 font-normal leading-[45px]">
          {dict.common.dontMissOutOnThisPersonalized}.
        </div>
        <Button className="w-[190px] h-[60px] mt-[42px] rounded-[40px] text-center text-white text-[18px] leading-[40px] bg-bluePrimary">
          {dict.common.moreDetails}
        </Button>
      </div>
      <div>
        <CardStacked dict={dict} />
      </div>
    </div>
  );
};

export default ExclusiveMonthlyDeal;
