import { DictProps } from "@/types/dict";
import { cookieUtils } from "@/utils/cookie";
import { COOKIE_KEYS } from "@/constant";
import { decrypt } from "@/utils/crypto";
import { UserProps } from "@/types/userInfo";
import FindOurBestProfitableBusiness from "../findOurBestProfitableBusiness";

const FindOurBestProfitableBusinessServer = async ({ dict }: { dict: DictProps }) => {
  try {
    const userHash = await cookieUtils.get(COOKIE_KEYS.USER_INFO);
    const userInfo: UserProps = JSON.parse(decrypt(userHash as string));

    return <FindOurBestProfitableBusiness dict={dict} userInfo={userInfo} />;
  } catch (err) {
    console.log("errorNavbarHome server: ", err);
    return <FindOurBestProfitableBusiness dict={dict} />;
  }
};

export default FindOurBestProfitableBusinessServer;
