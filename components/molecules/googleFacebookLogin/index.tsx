import GoogleIcon from "@/components/atoms/icons/google";
import FacebookIcon from "@/components/atoms/icons/facebook";

const GoogleFacebookLogin = () => {
  return (
    <>
      <div className="grid grid-cols-3 items-center mb-5">
        <hr />
        <div className="text-center text-[12px]">OR</div>
        <hr />
      </div>
      <div className="grid grid-cols-2 gap-4 mb-5">
        <button className="rounded w-full pl-5 py-2 border text-[10px] flex items-center font-secondary">
          <GoogleIcon className="mr-2 ml-2 w-4 h-4" />
          <div className="mt-[2px]">Login with Google</div>
        </button>
        <button className="rounded w-full pl-4 py-2 border text-[10px] flex items-center font-secondary">
          <FacebookIcon className="mr-2 ml-2 w-4 h-4" />
          <div className="mt-[2px]">Login with Facebook</div>
        </button>
      </div>
    </>
  );
};

export default GoogleFacebookLogin;
