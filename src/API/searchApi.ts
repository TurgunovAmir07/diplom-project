import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseUrl } from "../utils/baseUrl";

interface CountriesResponse {
  data(data: string): unknown;
  type: "object";
  properties: {
    data: {
      type: "object";
      properties: {
        code: {
          type: "string";
        };
        callingCode: {
          type: "string";
        };
        currencyCodes: {
          type: "array";
        };
        flagImageUri: {
          type: "string";
        };
        name: {
          type: "string";
        };
        numRegions: {
          type: "integer";
        };
        wikiDataId: {
          type: "string";
        };
      };
    };
  };
}

const apiKey = "e26efa5338msh316c617c4c60eaep107696jsn7871eaaac72";

export const geoApi = createApi({
  reducerPath: "geoApi",
  baseQuery: fetchBaseQuery({
    baseUrl: baseUrl,
    prepareHeaders: (headers) => {
      headers.set("X-RapidAPI-Key", apiKey);
      headers.set("X-RapidAPI-Host", "wft-geo-db.p.rapidapi.com");
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getCountry: builder.query<CountriesResponse, string>({
      query: (countryCode: string) => `/v1/geo/countries/${countryCode}`,
    }),
  }),
});

export const { useGetCountryQuery } = geoApi;
