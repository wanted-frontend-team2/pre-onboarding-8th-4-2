import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";

import commentReducer from "./comment/comment-slice";

export const store = configureStore({
  reducer: {
    comment: commentReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
