import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { IappState } from "../../interfaces/IinitialState";

const initialState: IappState = {
  theme: {
    light: {
      mode: "light",
      primary: { main: "#D0B8A8" },
      secondary: { main: "#F8EDE3" },
      divider: "#DFD3C3",
      text: {
        primary: "#7D6E83",
        secondary: "#7D6E83",
      },
      background: { default: "#fff" },
    },
    dark: {
      mode: "dark",
      primary: { main: "#9F73AB" },
      secondary: { main: "#24214d" },
      divider: "#624F82",
      text: {
        primary: "#A3C7D6",
        secondary: "#A3C7D6",
      },
      background: { default: "#282c34" },
    },
    mode: "dark",
  },
};

const appSlicer = createSlice({
  name: "app",
  initialState,
  reducers: {
    toggleColorMode: function (state: IappState) {
      state.theme.mode = state.theme.mode === "light" ? "dark" : "light";
    },
  },
});

const appReducer = appSlicer.reducer;
export const { toggleColorMode } = appSlicer.actions;
export default appReducer;
