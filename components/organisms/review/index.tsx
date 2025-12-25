import Image from "next/image";
import Divider from "@/components/atoms/divider";
import { DictProps } from "@/types/dict";

const ReviewCarousel = ({ dict }: { dict: DictProps }) => {
  return (
    <>
      <div className="flex px-[109px] py-[55px] flex justify-between items-center">
        <Image src="/assets/image/user-review.webp" width={162} height={129} alt="img" />
        <div className="max-w-[792px] text-center text-black text-[36px] font-normal leading-[56px]">
          {dict.common.efficientKnowledgeableAnd}!
        </div>
        <Image src="/assets/image/trustpilot-review.webp" width={255} height={128} alt="img" />
      </div>
      <Divider />
    </>
  );
};

export default ReviewCarousel;
