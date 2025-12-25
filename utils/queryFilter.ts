import { ParsedUrlQueryInput } from "querystring";

export function queryFilter(query: string | ParsedUrlQueryInput) {
  let str = "";
  if (typeof query === "object") {
    for (const key in query) {
      if (query[key] === "") {
        delete query[key];
      }
    }

    str =
      "?" +
      Object.entries(query)
        .map(([key, val]) => `${key}=${val}`)
        .join("&");
  }
  return str;
}
