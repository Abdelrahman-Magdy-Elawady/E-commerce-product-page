import { caretReducer } from "./Slices/caretSlice";
import { configureStore } from "@reduxjs/toolkit";
import { productsApi } from "./APIS/ProductsApi";
import { setupListeners } from "@reduxjs/toolkit/query";

export const store = configureStore({
  reducer: {
    caret: caretReducer,
    [productsApi.reducerPath]: productsApi.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(productsApi.middleware);
  },
});

setupListeners(store.dispatch);

export { useFetchProductsQuery } from "./APIS/ProductsApi";
export { addToCaret, removeFromCaret, resetCaret } from "./Slices/caretSlice";
