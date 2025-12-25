import { getDictionary } from "@/dictionaries";
import { ServerPageProps } from "@/types/server_page";
import HomePages from "@/components/pages/home";
import LandingTemplate from "@/components/templates/landing";
import { BusinessListingResponse } from "@/types/business";
import { getBusinessListingPublicLandingPage } from "@/utils/api/server/business";

export default async function Home(props: ServerPageProps) {
  const params = await props.params;
  const dict = await getDictionary(params.lang);
  const businessListData: BusinessListingResponse = await getBusinessListingPublicLandingPage();

  return (
    <LandingTemplate dict={dict}>
      <HomePages dict={dict} businessListData={businessListData} />
    </LandingTemplate>
  );
}
