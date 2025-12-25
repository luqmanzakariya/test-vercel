import Divider from "@/components/atoms/divider";
import Button from "@/components/atoms/button";
import Team1 from "@/public/assets/image/team-1.webp";
import Team2 from "@/public/assets/image/team-2.webp";
import Team3 from "@/public/assets/image/team-3.webp";
import Team4 from "@/public/assets/image/team-4.webp";
import Image from "next/image";
import { DictProps } from "@/types/dict";

const teams = [
  {
    id: 1,
    img: Team1,
    name: "Mark Filo",
    position: "CEO & Founder",
  },
  {
    id: 2,
    img: Team2,
    name: "Janet",
    position: "Realtor",
  },
  {
    id: 3,
    img: Team3,
    name: "Jubayer Al Hasan",
    position: "Marketing Expert",
  },
  {
    id: 4,
    img: Team4,
    name: "Jannatul Ferdaus",
    position: "Finance",
  },
];

const OurTeam = ({ dict }: { dict: DictProps }) => {
  return (
    <div className="mt-[170px] px-[150px]">
      <div className="flex items-center justify-between">
        <div className="text-black text-[64px] font-medium leading-[80px]">
          {dict.common.ourTeam}
        </div>
        <Button className="border border-bluePrimary w-[230px] h-[60px]">
          {dict.common.meetEntireTeam}
        </Button>
      </div>
      <div className="mt-[73px] mb-[59px] flex items-center justify-between relative">
        <div className="bg-image-container w-[calc(100%+80px)] h-[254px] absolute top-[-35px] left-[-40px]"></div>
        {teams.map((val) => (
          <div key={val.id} className="text-center">
            <div className="w-[332px] h-[400px] relative">
              <Image src={val.img} alt="img" layout="fill" />
            </div>
            <div className="mt-9 text-black text-[22px] font-medium">{val.name}</div>
            <div className="mt-[9px] text-grey3 text-[18px] font-normal">{val.position}</div>
          </div>
        ))}
      </div>
      <Divider />
    </div>
  );
};

export default OurTeam;
