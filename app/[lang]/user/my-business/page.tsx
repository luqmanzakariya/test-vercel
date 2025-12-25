import MyBusinessPage from "@/components/pages/user/my-business";
import DashboardTemplate from "@/components/templates/dashboard";
import { getDictionary } from "@/dictionaries";
import { ServerPageProps } from "@/types/server_page";
import { BusinessListingResponse } from "@/types/business";
import { getBusinessListingUSER } from "@/utils/api/server/business";

const MyBusiness = async (props: ServerPageProps) => {
  const params = await props.params;
  const dict = await getDictionary(params.lang);
  const businessListData: BusinessListingResponse = await getBusinessListingUSER();

  return (
    <DashboardTemplate dict={dict}>
      <MyBusinessPage dict={dict} businessListData={businessListData} />
    </DashboardTemplate>
  );
};

export default MyBusiness;
