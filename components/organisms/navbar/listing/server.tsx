// import NavbarListingClient from "./client";
import NavbarListingClient from "@/components/organisms/navbar/listing/client";
import { DictProps } from "@/types/dict";
import { cookieUtils } from "@/utils/cookie";
import { COOKIE_KEYS } from "@/constant";
import { decrypt } from "@/utils/crypto";
import { UserProps } from "@/types/userInfo";

const NavbarListingServer = async ({ dict }: { dict: DictProps }) => {
  try {
    const userHash = await cookieUtils.get(COOKIE_KEYS.USER_INFO);
    const userInfo: UserProps = JSON.parse(decrypt(userHash as string));

    return <NavbarListingClient dict={dict} userInfo={userInfo} />;
  } catch (err) {
    console.log("errorNavbarListing server: ", err);
    return <NavbarListingClient dict={dict} />;
  }
};

export default NavbarListingServer;
