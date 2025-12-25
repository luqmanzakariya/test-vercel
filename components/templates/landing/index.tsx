import Footer from "@/components/organisms/footer";
import { DictProps } from "@/types/dict";

const LandingTemplate = ({ children, dict }: { children: React.ReactNode; dict: DictProps }) => {
  return (
    <div className="min-h-dvh h-full w-full">
      {children}
      <Footer dict={dict} />
    </div>
  );
};

export default LandingTemplate;
