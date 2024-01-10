import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseUrl } from "../utils/baseUrl";

const apiKey = "0d4980606emsha59bd49021804ffp18e2d9jsne2b5c3ddb244";

interface City {
  data: [];

  wikiDataId: string;
  countryCode: string;
  regionCode: string;
  population: string;

  name: string;
  country: string;
  region: string;
  latitude: number;
  longitude: number;
}

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: baseUrl,
    prepareHeaders: (headers) => {
      headers.set("X-RapidAPI-Key", apiKey);
      headers.set("X-RapidAPI-Host", "wft-geo-db.p.rapidapi.com");
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getCities: builder.query<City, string>({
      query: () => "/v1/geo/cities",
    }),
  }),
});

export const { useGetCitiesQuery } = api;
