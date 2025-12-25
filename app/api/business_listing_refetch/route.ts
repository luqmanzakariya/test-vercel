import { getBusinessListingAdmin } from "@/utils/api/server/business";
import { ErrorHandler } from "@/utils/errorHandler";

export async function POST() {
  try {
    const result = await getBusinessListingAdmin();
    return Response.json(result.data);
  } catch (err) {
    return ErrorHandler(err as Error);
  }
}
