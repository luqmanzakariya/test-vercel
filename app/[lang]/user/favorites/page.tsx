import FavoritesPage from "@/components/pages/user/favorites";
import DashboardTemplate from "@/components/templates/dashboard";
import { getDictionary } from "@/dictionaries";
import { WishlistResponse } from "@/types/business";
import { ServerPageProps } from "@/types/server_page";
import { getWishlist } from "@/utils/api/server/business";
import React from "react";

const Favorites = async (props: ServerPageProps) => {
  const params = await props.params;
  const dict = await getDictionary(params.lang);
  const wishlistData: WishlistResponse = await getWishlist();

  return (
    <DashboardTemplate dict={dict}>
      <FavoritesPage wishlistData={wishlistData} />
    </DashboardTemplate>
  );
};

export default Favorites;
