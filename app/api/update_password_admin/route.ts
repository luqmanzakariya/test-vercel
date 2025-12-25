import { IChangePasswordAdminPayload } from "@/types/authentication";
import { postUpdatePasswordAdminServer } from "@/utils/api/server/authentication-server";
import { ErrorHandler } from "@/utils/errorHandler";

export async function POST(request: Request) {
  const payload: IChangePasswordAdminPayload = await request.json();
  try {
    const result = await postUpdatePasswordAdminServer(payload);
    return Response.json(result.data);
  } catch (err) {
    return ErrorHandler(err as Error);
  }
}
