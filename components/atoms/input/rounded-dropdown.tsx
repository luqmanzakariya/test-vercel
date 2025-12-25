import { UseFormRegisterReturn } from "react-hook-form";
import ChevronDown from "../icons/chevronDown";

const RoundedDropdown = ({
  label,
  option,
  register,
}: {
  label: string;
  option: string[];
  register: UseFormRegisterReturn<string>;
}) => {
  return (
    <div>
      <label>{label}</label>
      <div className="relative">
        <select
          {...register}
          className="appearance-none border border-black rounded-lg w-full py-[14px] px-[25px] mt-2 leading-tight focus:outline-none focus:bg-white"
        >
          <option value="">-- Select Option --</option>
          {option &&
            option.map((item, idx) => (
              <option key={idx} value={item} className="capitalize">
                {item}
              </option>
            ))}
        </select>
        <div className="pointer-events-none absolute inset-y-8 right-1 flex items-center px-2 text-gray-700">
          <ChevronDown />
        </div>
      </div>
    </div>
  );
};

export default RoundedDropdown;
