import { DictProps } from "@/types/dict";
import Button from "@/components/atoms/button";
import { usePathname, useSearchParams } from "next/navigation";
import { queryString } from "@/utils/queryString";
import Link from "next/link";

const InputEmailWithButton = ({ dict }: { dict: DictProps }) => {
  const currentPathName = usePathname();
  let query = {};
  const searchParams = useSearchParams();

  if (searchParams?.entries) {
    query = Object.fromEntries(searchParams?.entries());
  }
  return (
    <div className="bg-white lg:w-[497px] lg:h-[80.57] rounded-[10px] flex items-center pr-2 pl-[30px] justify-between py-2 lg:py-0">
      <input
        type="text"
        placeholder="Email address"
        className="lg:w-[250px] lg:h-[52px] text-4 font-normal leading-[18.91px] text-grey focus:outline-none"
      />
      <Link
        href={{
          pathname: currentPathName,
          query: queryString({ ...query, login: "show", register: undefined }),
        }}
        replace={true}
      >
        <Button
          variant="primary"
          style="text-center font-abril lg:h-[63.3px] lg:w-[160px] text-white text-4 font-normal leading-[21.58px] px-4 lg:px-0"
        >
          {dict.common.getStarted}
        </Button>
      </Link>
    </div>
  );
};

export default InputEmailWithButton;
