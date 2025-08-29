// store.ts
import { configureStore } from "@reduxjs/toolkit";
import { mbaApi } from "../service/axios"; 

export const store = configureStore({
  reducer: {
    // Add the API reducer
    [mbaApi.reducerPath]: mbaApi.reducer,
  
  },
  // Add the API middleware
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(mbaApi.middleware),
});

// Types for hooks
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
