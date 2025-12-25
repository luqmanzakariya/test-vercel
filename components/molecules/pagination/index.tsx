import NextIcon from "@/components/atoms/icons/next";
import PreviousIcon from "@/components/atoms/icons/previous";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import React, { ReactNode } from "react";

const Pagination = ({
  hasNextPage,
  hasPrevPage,
  totalCount,
}: {
  hasNextPage: boolean;
  hasPrevPage: boolean;
  totalCount: number;
}) => {
  const searchParams = useSearchParams();
  const currentPathName = usePathname();

  const page = searchParams.get("page") ?? "1";
  const per_page = searchParams.get("per_page") ?? "9";
  const totalPageCount = Math.ceil(totalCount / parseInt(per_page));

  const renderPageNumber = () => {
    const items: ReactNode[] = [];
    const maxVisiblePages = 5;

    if (totalPageCount <= maxVisiblePages) {
      for (let i = 1; i <= totalPageCount; i++) {
        items.push(
          <Link
            href={{
              pathname: `${currentPathName}`,
              query: { page: i, per_page },
            }}
            className={`${parseInt(page) === i ? "pagination-selected" : "pagination-numbered"}`}
            key={i}
          >
            {i}
          </Link>
        );
      }
    } else {
      items.push(
        <Link
          href={{
            pathname: `${currentPathName}`,
            query: { page: 1, per_page },
          }}
          className={`${parseInt(page) === 1 ? "pagination-selected" : "pagination-numbered"}`}
          key={1}
        >
          1
        </Link>
      );

      if (parseInt(page) > 3) {
        items.push(
          <span className="pagination-span max-lg:hidden" key="ellipsis-start">
            ...
          </span>
        );
      }

      const start = Math.max(2, parseInt(page) - 1);
      const end = Math.min(totalPageCount - 1, parseInt(page) + 1);

      for (let i = start; i <= end; i++) {
        items.push(
          <Link
            href={{
              pathname: `${currentPathName}`,
              query: { page: i, per_page },
            }}
            className={`${parseInt(page) === i ? "pagination-selected" : "pagination-numbered"}`}
            key={i}
          >
            {i}
          </Link>
        );
      }

      if (parseInt(page) < totalPageCount - 2) {
        items.push(
          <span className="pagination-span max-lg:hidden" key="ellipsis-end">
            ...
          </span>
        );
      }

      items.push(
        <Link
          href={{
            pathname: `${currentPathName}`,
            query: { page: totalPageCount, per_page },
          }}
          className={`${parseInt(page) === totalPageCount ? "pagination-selected" : "pagination-numbered"}`}
          key={totalPageCount}
        >
          {totalPageCount}
        </Link>
      );
    }
    return items;
  };
  return (
    <nav className="isolate inline-flex -space-x-px rounded-lg shadow-xs">
      <Link
        href={{
          pathname: `${currentPathName}`,
          query: { page: Number(page) - 1, per_page },
        }}
        className={`pagination-prev ${!hasPrevPage ? "pointer-events-none" : ""}`}
      >
        <span className="sr-only">Previous</span>
        <PreviousIcon />
      </Link>
      {renderPageNumber()}
      <Link
        href={{
          pathname: `${currentPathName}`,
          query: { page: Number(page) + 1, per_page },
        }}
        className={`pagination-next ${!hasNextPage ? "pointer-events-none" : ""}`}
      >
        <span className="sr-only">Next</span>
        <NextIcon />
      </Link>
    </nav>
  );
};

export default Pagination;
