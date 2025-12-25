import { getDictionary } from "@/dictionaries";
import { ServerPageProps } from "@/types/server_page";
import ListingTemplate from "@/components/templates/listing.tsx";
import ListingDetailPage from "@/components/pages/listing/detail";
import { getBusinessListingByIDHome, getUserById, getWishlist } from "@/utils/api/server/business";
import {
  BusinessListingEditResponse,
  BusinessListing,
  User,
  UserResponse,
  WishlistResponse,
} from "@/types/business";
import { decryptData } from "@/utils/api/server/decrypt-data";

const ListingDetail = async (props: ServerPageProps) => {
  let data: BusinessListingEditResponse = {
    data: {} as BusinessListing,
    message: "",
    status: "",
  };
  let user: UserResponse = {
    data: {} as User,
    message: "",
    status: "",
  };
  let wishlistData: WishlistResponse = {
    data: [],
    message: "",
    status: "",
  };
  let isWishlisted = false;
  const params = await props.params;
  const dict = await getDictionary(params.lang);
  if (params.id) {
    data = await getBusinessListingByIDHome(params.id);
  }
  const getCookies = await decryptData();
  if (Object.keys(getCookies).length !== 0) {
    user = await getUserById(data?.data?.user_id?.toString());
    wishlistData = await getWishlist();
    isWishlisted = wishlistData?.data?.find(
      (wishlist) => wishlist.business_listing_id.toString() === params?.id
    )
      ? true
      : false;
  }

  return (
    <ListingTemplate dict={dict}>
      <ListingDetailPage
        dict={dict}
        businessData={data?.data}
        user={user?.data}
        userInfo={getCookies}
        isWishlisted={isWishlisted}
        params={params?.id || "0"}
      />
    </ListingTemplate>
  );
};

export default ListingDetail;
