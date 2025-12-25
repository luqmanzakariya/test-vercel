"use client";
import { useToast } from "@/components/templates/toast";
import ShareIcon from "@/components/atoms/icons/share";
import { DictProps } from "@/types/dict";
import { usePathname, useSearchParams } from "next/navigation";
import { useState } from "react";

const ShareLink = ({ dict }: { dict: DictProps }) => {
  const { add } = useToast();
  const [isCopied, setIsCopied] = useState(false);
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const getFullUrl = () => {
    const currentUrl = new URL(window.location.origin);
    currentUrl.pathname = pathname;
    currentUrl.search = searchParams.toString();
    return currentUrl.toString(); // "https://example.com/path?query=123"
  };
  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(getFullUrl());
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
      add({
        type: "success",
        message: "Copied to clipboard",
        duration: 5000,
        position: "topRight",
      });
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
  };

  return (
    <button className="flex items-center mr-40" onClick={handleCopy} disabled={isCopied}>
      <ShareIcon className="h-[18 px] mr-2" />
      <div className="text-center">{dict.common.share}</div>
    </button>
  );
};

export default ShareLink;
