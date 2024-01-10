import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseUrl } from "../utils/baseUrl";

const apiKey = "e26efa5338msh316c617c4c60eaep107696jsn7871eaaac720";

interface Detals {
  data: [];

  id: number;
  wikiDataId: string;
  type: string;
  city: string;
  name: string;
  country: string;
  countryCode: string;
  region: string;
  regionCode: string;
  elevationMeters: number;
  latitude: number;
  longitude: number;
  population: number;
  timezone: string;
  distance: number | null;
  deleted: boolean;
  placeType: string;
}

export const detalsApi = createApi({
  reducerPath: "detalsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: baseUrl,
    prepareHeaders: (headers) => {
      headers.set("X-RapidAPI-Key", apiKey);
      headers.set("X-RapidAPI-Host", "wft-geo-db.p.rapidapi.com");
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getDetals: builder.query<Detals, string>({
      query: (wikiDataId) => `/v1/geo/cities/${wikiDataId}`,
    }),
  }),
});

export const { useGetDetalsQuery } = detalsApi;
