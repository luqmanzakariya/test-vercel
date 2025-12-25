"use client";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";

const FilterType = ({ select }: { select: string }) => {
  const type = [
    "Coffee Shop",
    "Cafe",
    "Bakery",
    "Salon",
    "UMKM",
    "Service",
    "Restaurant",
    "Music",
    "Factory",
    "Industry",
  ];
  const currentPathName = usePathname();
  console.log("Current Path Name", currentPathName);
  const searchParams = useSearchParams();
  const getTypeValue = searchParams?.get("business_type");
  return (
    <div className="px-[20px] py-[40px] border-y border-gray-200">
      <div className="flex items-center justify-evenly">
        <div className="font-abril py-2">{select}</div>
        <Link
          href={{
            pathname: currentPathName,
          }}
        >
          <button
            className={`rounded-full border border-gray-700 font-abril py-2 px-5 ${getTypeValue ? "" : "bg-red-700"}`}
          >
            All
          </button>
        </Link>
        {type &&
          type.map((item, idx) => (
            <Link
              href={{
                pathname: currentPathName,
                query: { business_type: item },
              }}
              key={idx}
            >
              <button
                className={`rounded-full border border-gray-700 font-abril py-2 px-5 ${getTypeValue === item ? "bg-red-700" : ""}`}
              >
                {item}
              </button>
            </Link>
          ))}
      </div>
    </div>
  );
};

export default FilterType;
