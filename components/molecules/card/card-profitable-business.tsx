import { ReactNode } from "react";

const CardProfitableBusiness = ({
  icon,
  title,
  description,
}: {
  icon: ReactNode;
  title: string;
  description: string;
}) => {
  return (
    <div className="flex flex-col items-center">
      {icon}
      <div className="mt-4 lg:mt-[35px] text-black/[0.4] text-[24px] lg:text-[16px] font-medium leading-[30px] uppercase">
        {title}
      </div>
      <div
        className="mt-2 lg:mt-4 max-w-[447px] text-[18px] lg:text-[24px] text-center text-black font-normal leading-[100%] lg:leading-[42px]"
        dangerouslySetInnerHTML={{ __html: description }}
      ></div>
    </div>
  );
};

export default CardProfitableBusiness;
