import { IAccountSettingPayload } from "@/types/authentication";
import { postAccountSettingServer } from "@/utils/api/server/authentication-server";
import { ErrorHandler } from "@/utils/errorHandler";

export async function POST(request: Request) {
  const payload: IAccountSettingPayload = await request.json();
  try {
    const result = await postAccountSettingServer(payload);
    return Response.json(result.data);
  } catch (err) {
    return ErrorHandler(err as Error);
  }
}
