import { ErrorHandler } from "@/utils/errorHandler";
import { getStateByCountry } from "@/utils/api/server/location";

export async function POST(request: Request) {
  const payload: { countryId: number } = await request.json();

  try {
    const result = await getStateByCountry(payload?.countryId?.toString());
    return Response.json(result.data);
  } catch (err) {
    return ErrorHandler(err as Error);
  }
}
