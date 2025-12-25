import { IMessagePayload } from "@/types/authentication";
import { postMessageServer } from "@/utils/api/server/authentication-server";
import { ErrorHandler } from "@/utils/errorHandler";

export async function POST(request: Request) {
  const payload: IMessagePayload = await request.json();
  try {
    const result = await postMessageServer(payload);
    return Response.json(result.data);
  } catch (err) {
    return ErrorHandler(err as Error);
  }
}
