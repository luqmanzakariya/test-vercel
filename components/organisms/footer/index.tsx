import BelibizIcon from "@/components/atoms/icons/belibiz";
// import Link from "next/link";
import { DictProps } from "@/types/dict";

const Footer = ({ dict }: { dict: DictProps }) => {
  return (
    <div className="px-4 lg:px-[195px] py-4 lg:py-[46px] ">
      <div className="flex justify-between">
        <div>
          <BelibizIcon />
          <div className="mt-6 font-secondary text-black/[0.6] text-[18px] font-normal leading-[33px]">
            Sampoerna Strategic Square <br />
            Lantai 25 <br />
            Jalan Jend. Sudirman Kav. 45 <br />
            Jakarta Selatan <br />
            12930
          </div>
          <div className="mt-10 font-secondary font-normal leading-[33.1px]">
            {process.env.EMAIL_BELIBIZ}
          </div>
        </div>
        {/* <div className="flex justify-between w-[650px]">
          <div>
            <div className="font-abril text-[24px] font-normal leading-[32.38px]">Link</div>
            <div className="mt-5 text-black/[0.6] text-[18px] font-normal leading-[44px]">
              <Link href="/" className="block">
                {dict.footer.home}
              </Link>
              <Link href="/" className="block">
                {dict.footer.membership}
              </Link>
              <Link href="/" className="block">
                {dict.footer.about}
              </Link>
              <Link href="/" className="block">
                {dict.footer.buyBusiness}
              </Link>
              <Link href="/" className="block">
                {dict.footer.exploreBusiness}
              </Link>
              <Link href="/" className="block">
                {dict.footer.sellBusiness}
              </Link>
            </div>
          </div>
          <div>
            <div className="font-abril text-[24px] font-normal leading-[32.38px]">Legal</div>
            <div className="mt-5 text-black/[0.6] text-[18px] font-normal leading-[44px]">
              <Link href="/" className="block">
                {dict.footer.termsAndConditions}
              </Link>
              <Link href="/" className="block">
                {dict.footer.cookie}
              </Link>
              <Link href="/" className="block">
                {dict.footer.privacyPolicy}
              </Link>
              <Link href="/" className="block">
                {dict.footer.faq}
              </Link>
            </div>
          </div>
          <div>
            <div className="font-abril text-[24px] font-normal leading-[32.38px]">Products</div>
            <div className="mt-5 text-black/[0.6] text-[18px] font-normal leading-[44px]">
              <Link href="/" className="block">
                {dict.footer.takeTheTour}
              </Link>
              <Link href="/" className="block">
                {dict.footer.exploreBusiness}
              </Link>
              <Link href="/" className="block">
                {dict.footer.selfService}
              </Link>
              <Link href="/" className="block">
                {dict.footer.sellBusiness}
              </Link>
              <Link href="/" className="block">
                {dict.footer.expertAgent}
              </Link>
              <Link href="/" className="block">
                {dict.footer.reviews}
              </Link>
            </div>
          </div>
        </div> */}
      </div>
      <div className="mt-[79px] border-b border-b-black"></div>
      <div className="mt-8 text-black/[0.6] font-secondary text-4 font-normal leading-[18.91px] text-center">
        {dict.footer.copyright}
      </div>
    </div>
  );
};

export default Footer;
