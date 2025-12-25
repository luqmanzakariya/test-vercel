import image1 from "@/public/assets/image/business-location-1-new.webp";
import image2 from "@/public/assets/image/business-location-2-new.webp";
import image3 from "@/public/assets/image/business-location-3-new.webp";
import image4 from "@/public/assets/image/business-location-4-new.webp";
import Image from "next/image";
import Line4Icon from "@/components/atoms/icons/line4";
import { DictProps } from "@/types/dict";

const cards = [
  {
    id: 0,
    imageUrl: image2,
    location: "Jakarta",
  },
  {
    id: 1,
    imageUrl: image3,
    location: "Bali",
  },
  {
    id: 2,
    imageUrl: image4,
    location: "Bandung",
  },
  {
    id: 3,
    imageUrl: image1,
    location: "Yogyakarta",
  },
];

const ExplorePopularBusinessLocation = ({ dict }: { dict: DictProps }) => {
  return (
    <div className="my-4 lg:my-[150px]">
      <div className="m-auto w-fit text-center relative">
        <div className="text-black text-[32px] lg:text-[64px] font-medium px-4 lg:px-0">
          {dict.common.explorePopularBusinessLocation}
        </div>
        {/* <div className="mt-[13px] text-black/0.7 text-[22px] font-normal leading-[40px]">
          {dict?.common?.exploreTheLatestListings}
        </div> */}
        <Line4Icon className="hidden lg:block absolute right-[-4px] top-[73px]" />
      </div>
      <div className="mt-4 lg:mt-[69px] flex flex-col lg:flex-row items-center justify-center gap-4 lg:gap-8">
        {cards.map((card) => (
          <div key={card.id} className="relative w-[330px] h-[403px]">
            <Image
              src={card.imageUrl}
              width={330}
              height={403}
              alt="img"
              className={`rounded-3xl object-cover w-full h-full ${
                card.id === 1 ? "object-top" : "object-center"
              }`}
              placeholder="blur" // Add blur placeholder
              blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaUMk9faLTXKHa8zkjyJxcq8XgSO6EohLbMcl8qMqyrmP0SgSf/2Q=="
            />

            {/* Text di 2/3 bagian dari atas */}
            <div className="absolute top-[85%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full px-4">
              <p className="font-semibold text-white text-2xl text-center drop-shadow-lg">
                {card.location}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExplorePopularBusinessLocation;
