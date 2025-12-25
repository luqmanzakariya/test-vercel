import React from "react";
import { DictProps } from "@/types/dict";

const SuccessModalAddBusiness = ({ dict }: { dict: DictProps }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4 sm:absolute sm:items-end">
      <div className="bg-white rounded-2xl sm:rounded-2xl shadow-2xl mx-4 mb-4 sm:mx-auto sm:max-w-md sm:mb-80">
        <div className="p-6">
          <div className="text-center">
            {/* Icon Success */}
            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
              <svg
                className="w-6 h-6 text-green-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>

            {/* Pesan Success */}
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              {dict.common.successMessageAddBusinessTitle}
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              {dict.common.successMessageAddBusiness}
            </p>
          </div>

          {/* Progress Bar */}
          <div className="mt-4 bg-gray-200 rounded-full h-1">
            <div
              className="bg-green-500 h-1 rounded-full transition-all duration-3000 ease-linear"
              style={{ width: "100%" }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuccessModalAddBusiness;
