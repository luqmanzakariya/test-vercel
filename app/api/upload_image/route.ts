import { postUploadImageServer } from "@/utils/api/server/authentication-server";
import { ErrorHandler } from "@/utils/errorHandler";

export async function POST(request: Request) {
  const payload: FormData = await request.formData();
  try {
    const result = await postUploadImageServer(payload);
    return Response.json(result.data);
  } catch (err) {
    return ErrorHandler(err as Error);
  }
}
