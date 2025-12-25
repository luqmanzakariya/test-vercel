import { AxiosError } from "axios";

export async function ErrorHandler(error: Error): Promise<Response> {
  if (error instanceof AxiosError) {
    const res = new Response(JSON.stringify(error.response?.data), {
      status: error.response?.status,
      headers: {
        "Content-Type": "application/json",
      },
    });
    return res;
  }

  return new Response("UnknownError", {
    status: 500,
  });
}
