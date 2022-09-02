import { configureStore, createSlice } from "@reduxjs/toolkit";
interface MainStore {
  activePage: String;
  loginPopupActive: boolean;
  signupPopupActive: boolean;
}

const initialState: MainStore = {
  activePage: "Main",
  loginPopupActive: true,
  signupPopupActive: false,
};

const mainSlice = createSlice({
  name: "mainSlice",
  initialState,
  reducers: {
    setActivePage(state, { payload }) {
      state.activePage = payload;
    },
    setLoginPopupActive(state, { payload }) {
      state.loginPopupActive = payload;
    },
    setSignupPopupActive(state, { payload }) {
      state.signupPopupActive = payload;
    },
  },
});

export const store = configureStore({
  reducer: {
    mainSlice: mainSlice.reducer,
  },
});
export const mainSliceActions = mainSlice.actions;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
