import ChevronDown from "../icons/chevronDown";
import { UseFormRegisterReturn } from "react-hook-form";

const SquareDropdown = ({
  label,
  option,
  register,
}: {
  label: string;
  option: string[];
  register: UseFormRegisterReturn<string>;
}) => {
  return (
    <div className="mb-6">
      <label>{label}</label>
      <div className="relative">
        <select
          className="appearance-none border border-gray-950 w-full py-2 pl-4 pr-10 leading-tight focus:outline-none focus:shadow-outline text-[14px]"
          {...register}
        >
          <option value="">-- Select Option --</option>
          {option &&
            option.map((item, idx) => (
              <option key={idx} value={item}>
                {item}
              </option>
            ))}
        </select>
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
          <ChevronDown />
        </div>
      </div>
    </div>
  );
};

export default SquareDropdown;
