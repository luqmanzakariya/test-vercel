"use client";
import { WishlistResponse } from "@/types/business";
import CardWishlistProperty from "@/components/molecules/card/card-wishlist-property";
import { useSearchParams } from "next/navigation";
import Pagination from "@/components/molecules/pagination";
import { useState } from "react";

const FavoritesPage = ({ wishlistData }: { wishlistData: WishlistResponse }) => {
  const searchParams = useSearchParams();
  // Pagination
  const page = searchParams.get("page") ?? "1";
  const per_page = searchParams.get("per_page") ?? "9";

  const start = (Number(page) - 1) * Number(per_page);
  const end = start + Number(per_page);

  const [entries] = useState(wishlistData?.data.slice(start, end));
  const [totalData] = useState(wishlistData?.data.length);
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 font-secondary mt-10 mb-5 px-5 gap-5">
        {entries && entries.map((item) => <CardWishlistProperty key={item.id} data={item} />)}
      </div>
      <div className="mx-4 sm:mx-6 md:mx-[40px] my-6 sm:my-8 md:my-[40px] text-center">
        <Pagination
          hasNextPage={end < totalData}
          hasPrevPage={start > 0}
          totalCount={totalData || 0}
        />
      </div>
    </div>
  );
};

export default FavoritesPage;
