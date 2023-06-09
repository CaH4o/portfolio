import { configureStore } from "@reduxjs/toolkit";

import appReducer from "./reducers/app";

const store = configureStore({
    reducer: {
      app: appReducer,
    },
  });

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;