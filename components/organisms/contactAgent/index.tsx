"use client";

import { User } from "@/types/business";
import { DictProps } from "@/types/dict";

const ContactAgent = ({ dict, user }: { dict: DictProps; user: User }) => {
  const whatsappHandler = () => {
    try {
      // Check if window exists (server-side rendering safety)
      if (typeof window === "undefined") {
        console.warn("Window object not available");
        return;
      }

      // Validate user data
      if (!user?.phone_number) {
        throw new Error("No phone number available");
      }

      const text = `Hi ${user?.name}`;
      let changeNumber = user.phone_number;

      // Format phone number
      if (changeNumber.startsWith("0")) {
        changeNumber = "62" + changeNumber.slice(1);
      } else if (!changeNumber.startsWith("62")) {
        changeNumber = "62" + changeNumber;
      }

      // Validate formatted number
      if (!/^62\d+$/.test(changeNumber)) {
        throw new Error("Invalid phone number format");
      }

      // Encode text for URL safety
      const encodedText = encodeURIComponent(text);
      const whatsappUrl = `https://wa.me/${changeNumber}?text=${encodedText}`;

      // Attempt to open window
      const win = window.open(whatsappUrl, "_blank");

      if (win) {
        win.focus();
      } else {
        // Fallback if popup blocked
        window.location.href = whatsappUrl;
      }
    } catch (error) {
      console.error("WhatsApp share failed:", error);
      // Optional: Show user feedback
      alert("Couldn't open WhatsApp. Please try again or contact support.");
    }
  };

  return (
    <button
      className="bg-blue-950 text-white w-full py-4 px-4 flex items-center justify-center rounded"
      onClick={whatsappHandler}
      disabled={!user?.phone_number}
    >
      <div>{dict.common.contactAgent}</div>
    </button>
  );
};

export default ContactAgent;
