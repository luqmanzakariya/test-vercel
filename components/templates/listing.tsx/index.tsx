import Footer from "@/components/organisms/footer";
import { DictProps } from "@/types/dict";
import StartJourney from "@/components/organisms/startJourney";
import LanguageSwitcher from "@/components/molecules/languageSwitcher/index.tsx";

const ListingTemplate = ({ children, dict }: { children: React.ReactNode; dict: DictProps }) => {
  return (
    <div className="min-h-dvh h-full w-full">
      <div className="bg-bluePrimary flex items-center justify-end text-right pr-4 lg:pr-[47px] lg:h-[45px]">
        <LanguageSwitcher />
      </div>
      {children}
      <StartJourney dict={dict} />
      <Footer dict={dict} />
    </div>
  );
};

export default ListingTemplate;
