import React from "react";
import UserDashboardPage from "@/components/pages/user/dashboard";
import DashboardTemplate from "@/components/templates/dashboard";
import { getDictionary } from "@/dictionaries";
import { ServerPageProps } from "@/types/server_page";
import {
  DashboardSummaryResponse,
  MessageResponse,
  ListingViewStatResponse,
  ListingViewStat,
} from "@/types/business";
import { getDashboardSummary, getMessage, getListingViewStat } from "@/utils/api/server/business";
import moment from "moment";

const Dashboard = async (props: ServerPageProps) => {
  const params = await props.params;
  const dict = await getDictionary(params.lang);

  let summaryData: DashboardSummaryResponse = {
    data: { total_business: 0, total_pending: 0, total_view: 0, total_favorite: 0 },
    message: "",
    status: "",
  };
  summaryData = await getDashboardSummary();

  let listingViewdata: ListingViewStatResponse = { data: [], message: "", status: "" };
  listingViewdata = await getListingViewStat();
  const parsedListingViewData: ListingViewStat[] = [];
  if (listingViewdata.data?.length > 0) {
    for (let i = 0; i < 7; i++) {
      const currentDateMinusI = moment(new Date()).subtract(i, "days").format("YYYY-MM-DD");
      const findDate = listingViewdata.data.find(
        (item) => moment(item.date).format("YYYY-MM-DD") === currentDateMinusI
      );
      if (findDate) {
        parsedListingViewData.push({
          date: currentDateMinusI,
          count: findDate.count,
        });
      } else {
        parsedListingViewData.push({
          date: currentDateMinusI,
          count: 0,
        });
      }
    }
  }

  const messageData: MessageResponse = await getMessage(3);

  return (
    <DashboardTemplate dict={dict}>
      <UserDashboardPage
        dict={dict}
        summaryData={summaryData}
        listingViewdata={parsedListingViewData}
        messageData={messageData}
      />
    </DashboardTemplate>
  );
};

export default Dashboard;
