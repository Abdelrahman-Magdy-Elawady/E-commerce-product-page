import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const productsApi = createApi({
  reducerPath: "products",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://fakestoreapi.com/products",
  }),
  endpoints: (builder) => ({
    fetchProducts: builder.query({
      query: () => ({
        method: "GET",
      }),
    }),
  }),
});

export const { useFetchProductsQuery } = productsApi;
export { productsApi };
