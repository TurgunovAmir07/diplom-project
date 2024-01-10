import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseUrl } from "../utils/baseUrl";

const apiKey = "e26efa5338msh316c617c4c60eaep107696jsn7871eaaac72";

interface City {
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
      query: (wikiDataId) => `/v1/geo/${wikiDataId}`,
    }),
  }),
});

export const { useGetCitiesQuery } = api;
