import React from "react";
import { DictProps } from "@/types/dict";

const SuccessModalUpdateStatus = ({ dict }: { dict: DictProps }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl p-6 w-full max-w-sm mx-auto shadow-2xl">
        <div className="text-center">
          {/* Icon Success */}
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg
              className="w-8 h-8 text-green-600"
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
          <h3 className="text-xl font-semibold text-gray-900 mb-3">
            {dict.common.successMessageUpdateStatusTitle}
          </h3>
          <p className="text-gray-600 text-base leading-relaxed">
            {dict.common.successMessageUpdateStatus}
          </p>
        </div>

        {/* Progress Bar */}
        <div className="mt-6 bg-gray-200 rounded-full h-1">
          <div
            className="bg-green-500 h-1 rounded-full transition-all duration-3000 ease-linear"
            style={{ width: "100%" }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default SuccessModalUpdateStatus;
