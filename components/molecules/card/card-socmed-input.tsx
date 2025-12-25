import PlusIcon from "@/components/atoms/icons/plus";
import { DictProps } from "@/types/dict";
import { UseFormRegister } from "react-hook-form";
import { IProfilePayload } from "@/types/authentication";

const CardSocmedInput = ({
  dict,
  register,
  arrayInput,
  addFormFields,
}: {
  dict: DictProps;
  register: UseFormRegister<IProfilePayload>;
  arrayInput: string[];
  addFormFields: (e: React.MouseEvent<HTMLButtonElement>) => void;
}) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-lg w-full p-4 sm:p-6 md:p-[60px] my-6 sm:my-8 md:my-10">
      <div className="text-lg sm:text-xl md:text-[24px] mb-6 sm:mb-8 font-semibold">
        {dict.user.socialMedia}
      </div>

      {arrayInput &&
        arrayInput.map((item, idx) => (
          <div key={idx}>
            <div className="mb-4 sm:mb-5">
              <label className="text-sm sm:text-base">
                {dict.user.network} {idx + 1}
              </label>
              <input
                type="text"
                className="appearance-none border border-black rounded-lg w-full py-3 sm:py-[14px] px-4 sm:px-[25px] mt-2 leading-tight focus:outline-none focus:bg-white text-sm sm:text-base"
                placeholder={`https://example.com/profile`}
                {...register(`broker_details.social_media_links.${idx}`)}
              />
            </div>
          </div>
        ))}

      <div className="flex items-center">
        <button
          className="bg-blue-950 text-white rounded-lg py-3 px-4 sm:px-6 flex items-center justify-center w-full sm:w-auto text-sm sm:text-base"
          onClick={(e) => addFormFields(e)}
          type="button"
        >
          <PlusIcon className="mr-2 text-white w-4 h-4 sm:w-5 sm:h-5" />
          <div>{dict.user.addMoreLink}</div>
        </button>
      </div>
    </div>
  );
};

export default CardSocmedInput;
