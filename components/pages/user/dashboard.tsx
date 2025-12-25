import React from "react";
import moment from "moment";
import { DictProps } from "@/types/dict";
import { DashboardSummaryResponse, MessageResponse, ListingViewStat } from "@/types/business";
import SummaryDashboard from "@/components/molecules/summary";
import ChartDashboard from "@/components/molecules/chart/dashboard";
import ChatWidgetDashboardUser from "@/components/molecules/chatWidget";

const UserDashboardPage = ({
  dict,
  summaryData,
  listingViewdata,
  messageData,
}: {
  dict: DictProps;
  summaryData: DashboardSummaryResponse;
  listingViewdata: ListingViewStat[];
  messageData: MessageResponse;
}) => {
  const chartData = listingViewdata.map((item) => ({
    ...item,
    day: moment(item.date).format("ddd"), // Format date to 'Mon', 'Tue', etc.
  }));

  return (
    <div className="px-4 sm:px-6 md:px-[40px] py-4 sm:py-6 md:py-[40px]">
      <SummaryDashboard dict={dict} data={summaryData?.data} />

      <div className="mt-6 sm:mt-8 md:mt-10 flex flex-col lg:flex-row gap-4 sm:gap-6 md:gap-[40px]">
        {/* Chart Section */}
        <div className="bg-white rounded-lg overflow-hidden shadow-lg w-full lg:w-2/3 p-4 sm:p-6 md:p-[34px] relative">
          <div className="absolute text-lg sm:text-xl md:text-[24px] text-black font-normal leading-7 sm:leading-8 md:leading-[40px]">
            {dict?.dashboard?.businessView}
          </div>
          <div className="w-full h-full pt-12 sm:pt-14 md:pt-[52px]">
            <ChartDashboard data={chartData} />
          </div>
        </div>

        {/* Chat Widget */}
        <div className="w-full lg:w-1/3">
          <ChatWidgetDashboardUser dict={dict} messageData={messageData} />
        </div>
      </div>
    </div>
  );
};

export default UserDashboardPage;
