import moment from "moment";
import { DictProps } from "@/types/dict";
import { MessageResponse } from "@/types/business";

const ChatWidgetDashboardUser = ({
  dict,
  messageData,
}: {
  dict: DictProps;
  messageData: MessageResponse;
}) => {
  return (
    <div className="bg-white rounded-lg overflow-y-auto shadow-lg p-[34px]">
      <div>{dict?.dashboard?.recentMessage}</div>
      {messageData?.data &&
        messageData?.data.map((item) => (
          <div
            className="text-[16px] py-5 border-separator -mx-8 px-8 cursor-pointer hover:bg-gray-50 transition-colors duration-200"
            key={item.id}
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 w-full justify-items-stretch items-center mb-2">
              <div className="text-[15px] text-gray-400">{item.sender_name}.</div>
              <div className="text-[15px] text-end text-gray-400">
                {moment(item.created_at).format("ll")}
              </div>
            </div>
            <div className="text-[18px] py-1">{item.business_title}.</div>
            <div className="text-[15px] py-1 text-gray-400">{item.message}</div>
          </div>
        ))}
    </div>
  );
};

export default ChatWidgetDashboardUser;
