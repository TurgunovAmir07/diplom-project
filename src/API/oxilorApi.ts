import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { oxilorBaseUrl } from "../utils/oxilorBaseUrl";

type Node = {
  id: number | null;
  name: string | null;
  // Определите свойства узла
};

type Edge = {
  node: Node;
  cursor: string;
};

type PageInfo = {
  hasNextPage: boolean;
  hasPreviousPage: boolean;
  startCursor: string;
  endCursor: string;
};

type Response = {
  edges: Edge[];
  pageInfo: PageInfo;
};

const apiKey = "7hIRWSnNtRtnGag0J2NnyLJ4CnFyTx";

export const oxilorApi = createApi({
  reducerPath: "oxilorApi",
  baseQuery: fetchBaseQuery({
    baseUrl: oxilorBaseUrl,
    prepareHeaders: (headers) => {
      headers.set("Authorization", `Bearer ${apiKey}`);
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getCities: builder.query<Response, string>({
      query: (countryCode: string) =>
        `regions?first=10&countryCode=${countryCode}`,
    }),
  }),
});

export const { useGetCitiesQuery } = oxilorApi;

export default oxilorApi;
