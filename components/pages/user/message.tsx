"use client";
import { Message, MessageResponse } from "@/types/business";
import { useState } from "react";
import moment from "moment";
import { DictProps } from "@/types/dict";

const MessagePage = ({ dict, messageData }: { dict: DictProps; messageData: MessageResponse }) => {
  const getData = messageData?.data;
  const [entries, setEntries] = useState(getData[0]);
  const [showDetail, setShowDetail] = useState(false);
  const handleItemClick = async (item: Message) => {
    setEntries(item);
    setShowDetail(true);
  };
  const handleBackToList = () => {
    setShowDetail(false);
  };
  return (
    <>
      {/* Mobile UI */}
      <div className="lg:hidden mx-5 my-5 h-[calc(100vh-80px)]">
        {!showDetail ? (
          <div className="bg-white rounded-lg overflow-hidden w-full p-4 flex flex-col h-full">
            <div className="text-xl pb-4 border-b border-gray-200 flex-shrink-0">
              {dict.message.inbox}
            </div>
            <div className="flex-1 overflow-y-auto overflow-x-hidden">
              {messageData?.data &&
                messageData.data.map((item) => (
                  <div
                    className="text-base py-4 border-b border-gray-200 cursor-pointer hover:bg-gray-50 transition-colors duration-200"
                    onClick={() => handleItemClick(item)}
                    key={item.id}
                  >
                    <div className="flex justify-between items-center mb-2">
                      <div className="text-sm text-gray-400">{item.sender_name}.</div>
                      <div className="text-sm text-gray-400">
                        {moment(item.created_at).format("ll")}
                      </div>
                    </div>
                    <div className="text-lg py-1 truncate">{item.business_title}.</div>
                    <div className="text-sm py-1 text-gray-400 truncate">{item.message}</div>
                  </div>
                ))}
            </div>
          </div>
        ) : (
          <div className="bg-white rounded-lg overflow-hidden w-full h-full flex flex-col">
            {/* Back Button */}
            <div className="p-4 border-b border-gray-200 flex items-center gap-3 flex-shrink-0">
              <button
                onClick={handleBackToList}
                className="flex items-center gap-2 text-blue-600 hover:text-blue-800 transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
                {dict.message.backToInbox}
              </button>
            </div>
            <div className="flex-1 overflow-y-auto p-4">
              {entries && (
                <>
                  <div className="pb-4 border-b border-gray-200">
                    <div className="flex flex-col mb-2">
                      <div className="text-lg font-medium">{entries.sender_name}.</div>
                      <div className="text-xs text-gray-400 mt-1">
                        {moment(entries.created_at).calendar()}
                      </div>
                    </div>
                    <div className="text-sm text-gray-400">{entries.sender_email}</div>
                  </div>
                  <div className="pt-4 pb-2 text-xl font-semibold">{entries.business_title}.</div>
                  <div className="text-sm whitespace-pre-wrap text-gray-600">{entries.message}</div>
                </>
              )}
            </div>
          </div>
        )}
      </div>

      {/* Desktop UI */}
      <div className="hidden lg:block lg:mx-10 lg:my-10 h-[calc(100vh-80px)]">
        <div className="grid grid-cols-3 w-full h-full">
          {/* First card - inbox list */}
          <div className="bg-white rounded-l-lg overflow-hidden col-span-1 border-r flex flex-col h-full">
            {/* Header - with padding */}
            <div className="text-[24px] pb-[53px] border-b border-gray-200 p-8 flex-shrink-0">
              {dict.message.inbox}
            </div>

            {/* Scrollable content area - without padding */}
            <div className="flex-1 overflow-y-auto overflow-x-hidden">
              {messageData?.data &&
                messageData?.data.map((item) => (
                  <div
                    className="text-[16px] py-5 border-b border-gray-200 px-8 cursor-pointer hover:bg-gray-50 transition-colors duration-200 w-full"
                    onClick={() => handleItemClick(item)}
                    key={item.id}
                  >
                    <div className="grid grid-cols-2 w-full justify-items-stretch items-center mb-2">
                      <div className="text-[15px] text-gray-400">{item.sender_name}.</div>
                      <div className="text-[15px] text-end text-gray-400">
                        {moment(item.created_at).format("ll")}
                      </div>
                    </div>
                    <div className="text-[18px] py-1 truncate">{item.business_title}.</div>
                    <div className="text-[15px] py-1 text-gray-400 truncate">{item.message}</div>
                  </div>
                ))}
            </div>
          </div>

          {/* Second card - message detail */}
          <div className="bg-white rounded-r-lg overflow-hidden p-8 col-span-2 flex flex-col h-full">
            {entries ? (
              <>
                <div className="pb-6 border-b border-gray-200 -mx-8 px-8">
                  <div className="grid grid-cols-2 w-full justify-items-stretch items-center mb-2">
                    <div className="text-[20px]">{entries.sender_name}.</div>
                    <div className="text-[15px] text-end text-gray-400">
                      {moment(entries.created_at).calendar()}
                    </div>
                  </div>
                  <div className="text-[18px] text-gray-400">{entries.sender_email}</div>
                </div>
                <div className="flex-1 overflow-y-auto overflow-x-hidden">
                  <div className="pt-6 pb-4 text-[25px]">{entries.business_title}.</div>
                  <div className="text-[15px] whitespace-pre-wrap text-gray-600">
                    {entries.message}
                  </div>
                </div>
              </>
            ) : (
              <div className="pb-10 border-b border-gray-200 -mx-8 px-8">
                <div className="text-[18px] text-gray-500">No Data</div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default MessagePage;
