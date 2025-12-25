import MessagePage from "@/components/pages/user/message";
import DashboardTemplate from "@/components/templates/dashboard";
import { getDictionary } from "@/dictionaries";
import { MessageResponse } from "@/types/business";
import { ServerPageProps } from "@/types/server_page";
import { getMessage } from "@/utils/api/server/business";
import React from "react";

const Message = async (props: ServerPageProps) => {
  const params = await props.params;
  const dict = await getDictionary(params.lang);
  const messageData: MessageResponse = await getMessage();
  return (
    <DashboardTemplate dict={dict}>
      <MessagePage dict={dict} messageData={messageData} />
    </DashboardTemplate>
  );
};

export default Message;
