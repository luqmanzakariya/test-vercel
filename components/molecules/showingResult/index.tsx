import ChevronDown from "@/components/atoms/icons/chevronDown";
import { DictProps } from "@/types/dict";

const ShowingResult = ({ dict }: { dict: DictProps }) => {
  return (
    <div className="grid grid-cols-3 font-secondary mt-10 mb-5">
      <div className="ml-5">{dict.common.showingresult}</div>
      <div className="col-start-3 mr-5">
        <div className="flex items-center justify-end">
          <div className="mr-4">{dict.common.sortby}</div>
          <div className="relative">
            <select className="appearance-none border border-gray-950 py-2 pl-4 pr-10 leading-tight focus:outline-none focus:shadow-outline text-[14px]">
              <option>Popular</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <ChevronDown />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowingResult;
