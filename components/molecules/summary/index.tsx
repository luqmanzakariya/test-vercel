import { DictProps } from "@/types/dict";
import { DashboardSummaryData } from "@/types/business";
import DashboardBusinessIcon from "@/components/atoms/icons/dashboard-business";
import DashboardTotalPendingIcon from "@/components/atoms/icons/dashboard-total-pending";
import DashboardTotalViewsIcon from "@/components/atoms/icons/dashboard-total-views";
import DashboardTotalFavoritesIcon from "@/components/atoms/icons/dashboard-total-favorite";
import Line7Icon from "@/components/atoms/icons/line7";

const SummaryDashboard = ({ dict, data }: { dict: DictProps; data: DashboardSummaryData }) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-lg w-full p-[34px]">
      <div className="grid grid-cols-4 gap-8 w-full">
        <div className="flex items-center justify-between">
          <div>
            <div className="text-[17px] font-normal leading-[30px] text-black/50">
              {dict.dashboard.totalBusiness}
            </div>
            <div className="text-[42px] font-normal leading-[50px] text-black">
              {data.total_business}
            </div>
          </div>
          <DashboardBusinessIcon />
          <Line7Icon />
        </div>
        <div className="flex items-center justify-between">
          <div>
            <div className="text-[17px] font-normal leading-[30px] text-black/50">
              {dict.dashboard.totalPending}
            </div>
            <div className="text-[42px] font-normal leading-[50px] text-black">
              {data.total_pending}
            </div>
          </div>
          <DashboardTotalPendingIcon />
          <Line7Icon />
        </div>
        <div className="flex items-center justify-between">
          <div>
            <div className="text-[17px] font-normal leading-[30px] text-black/50">
              {dict.dashboard.totalViews}
            </div>
            <div className="text-[42px] font-normal leading-[50px] text-black">
              {data.total_view}
            </div>
          </div>
          <DashboardTotalViewsIcon />
          <Line7Icon />
        </div>
        <div className="flex items-center justify-between">
          <div>
            <div className="text-[17px] font-normal leading-[30px] text-black/50">
              {dict.dashboard.totalFavorites}
            </div>
            <div className="text-[42px] font-normal leading-[50px] text-black">
              {data.total_favorite}
            </div>
          </div>
          <DashboardTotalFavoritesIcon />
          <Line7Icon />
        </div>
      </div>
    </div>
  );
};

export default SummaryDashboard;
