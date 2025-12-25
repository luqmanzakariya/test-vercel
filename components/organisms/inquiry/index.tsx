import LineIcon from "@/components/atoms/icons/line";
import { DictProps } from "@/types/dict";

const Inquiry = ({ dict }: { dict: DictProps }) => {
  return (
    <div className="pt-[20px] lg:pt-[154px] pb-[20px] lg:pb-[280px] flex flex-col items-center border-b-[1.3px] border-b-black">
      <div className="text-[32px] lg:text-[72px] text-center font-medium lg:leading-[95px] relative">
        <div>{dict.common.anyInquiryFeelFree}</div>
        <LineIcon className="hidden lg:block absolute right-[-116px] top-[74px]" />
        <div>{`${dict.common.toContactUs}.`}</div>
      </div>
    </div>
  );
};

export default Inquiry;
