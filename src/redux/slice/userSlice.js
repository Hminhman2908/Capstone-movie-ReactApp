import { createSlice } from "@reduxjs/toolkit";
import { userLocalStore } from "../../api/localService";

const initialState = {
  user: userLocalStore.get(),
};

const userSlice = createSlice({
  name: "userSlice",
  initialState,
  reducers: {
    setLogin: (state, action) => {
      state.user = action.payload;
    },
  },
});

export const { setLogin } = userSlice.actions;

export default userSlice.reducer;
