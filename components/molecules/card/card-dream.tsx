import { ReactNode } from "react";

const CardDream = ({
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
      <div className="mt-4 lg:mt-[52px] text-black text-[24px] font-medium leading-[37px]">
        {title}
      </div>
      <div className="mt-4 max-w-[312px] text-[18px] text-center text-black/[0.7] font-normal leading-[31px]">
        {description}
      </div>
    </div>
  );
};

export default CardDream;
