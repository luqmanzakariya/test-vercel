import { IRegisterPayload } from "@/types/authentication";
import { postRegisterServer } from "@/utils/api/server/authentication-server";
import { ErrorHandler } from "@/utils/errorHandler";

export async function POST(request: Request) {
  const payload: IRegisterPayload = await request.json();

  try {
    const result = await postRegisterServer(payload);
    return Response.json(result.data);
  } catch (err) {
    return ErrorHandler(err as Error);
  }
}
