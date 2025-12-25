import PlusIcon from "@/components/atoms/icons/plus";
import { IBusinessListingPayload } from "@/types/authentication";
import { DictProps } from "@/types/dict";
import React from "react";
import { UseFormRegister } from "react-hook-form";

const CardPhotoVideo = ({
  dict,
  register,
  arrayInput,
  addFormFields,
  handleFileChange,
  removeFormFields,
}: {
  dict: DictProps;
  register: UseFormRegister<IBusinessListingPayload>;
  arrayInput: (File | null | string)[];
  addFormFields: (e: React.MouseEvent<HTMLButtonElement>) => void;
  handleFileChange: (e: React.ChangeEvent<HTMLInputElement>, index: number) => void;
  removeFormFields: () => void;
}) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-lg w-full p-4 sm:p-6 md:p-[60px] my-6 sm:my-8 md:my-10">
      <div className="text-lg sm:text-xl md:text-[24px] mb-6 sm:mb-8 font-semibold">
        {dict.addNewProperty.photoVideoAttachment}
      </div>

      <div className="mb-4 sm:mb-5">
        <label className="text-sm sm:text-base block mb-3">
          {dict.addNewProperty.fileAttachment}*
        </label>
        {arrayInput &&
          arrayInput.map((item, idx) => (
            <div key={idx} className="flex flex-col sm:flex-row items-stretch mb-3 ">
              <input
                readOnly
                className={`input-file bg-gray-50 focus:bg-gray-50 py-3 sm:py-[17px] px-3 sm:px-4 rounded-lg sm:rounded-r-none sm:border-r-0 text-sm sm:text-base w-full ${
                  typeof arrayInput[idx] === "string" ? "" : "hidden"
                }`}
                {...register(`media.photos.${idx}`)}
              />
              <input
                type="file"
                id={`file-${idx}`}
                className={`input-file bg-gray-50 focus:bg-gray-50 py-3 px-3 sm:px-4 rounded-lg sm:rounded-r-none sm:border-r-0 text-sm sm:text-base w-full mt-0 ${
                  typeof arrayInput[idx] === "string" ? "hidden" : ""
                }`}
                onChange={(event) => handleFileChange(event, idx)}
                accept="image/*"
              />
              <button
                className="hidden sm:flex bg-gray-200 border border-black rounded-lg sm:rounded-l-none py-3 sm:py-[17px] px-4 text-sm sm:text-base w-full sm:w-auto text-center h-auto items-center justify-center"
                type="button"
              >
                <label htmlFor={`file-${idx}`} className="cursor-pointer">
                  {dict.addNewProperty.addChangeFile}
                </label>
              </button>
            </div>
          ))}
      </div>

      <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
        <button
          className="bg-blue-950 text-white rounded-lg py-3 px-4 flex items-center justify-center w-full sm:w-auto text-sm sm:text-base"
          onClick={(e) => addFormFields(e)}
          type="button"
        >
          <PlusIcon className="mr-2 text-white w-4 h-4 sm:w-5 sm:h-5" />
          <div>{dict.addNewProperty.uploadFile}</div>
        </button>

        <button
          className="bg-none rounded-lg py-3 px-4 flex items-center justify-center w-full sm:w-auto text-sm sm:text-base border border-gray-300"
          onClick={removeFormFields}
          type="button"
        >
          <div>{dict.addNewProperty.deleteFile}</div>
        </button>

        <div className="text-gray-500 text-xs sm:text-[14px] text-center sm:text-left mt-2 sm:mt-0">
          {dict.addNewProperty.fileExample}
        </div>
      </div>
    </div>
  );
};

export default CardPhotoVideo;
