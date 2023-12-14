import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./slice/userSlice";
import spinnerSlice from "./slice/spinnerSlice";

export let store = configureStore({
  reducer: {
    userSlice,
    spinnerSlice,
  },
});
