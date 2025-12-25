import NavbarHomeClient from "@/components/organisms/navbar/home/client";
import { DictProps } from "@/types/dict";
import { cookieUtils } from "@/utils/cookie";
import { COOKIE_KEYS } from "@/constant";
import { decrypt } from "@/utils/crypto";
import { UserProps } from "@/types/userInfo";

const NavbarHomeServer = async ({ dict }: { dict: DictProps }) => {
  try {
    const userHash = await cookieUtils.get(COOKIE_KEYS.USER_INFO);
    const userInfo: UserProps = JSON.parse(decrypt(userHash as string));

    return <NavbarHomeClient dict={dict} userInfo={userInfo} />;
  } catch (err) {
    console.log("errorNavbarHome server: ", err);
    return <NavbarHomeClient dict={dict} />;
  }
};

export default NavbarHomeServer;
