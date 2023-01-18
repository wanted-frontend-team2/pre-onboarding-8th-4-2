import { combineReducers, configureStore } from '@reduxjs/toolkit';
import commentReducer from './commentSlice';

export const rootReducer = combineReducers({
  comment: commentReducer,
});
export default configureStore({
  reducer: {
    rootReducer,
  },
});

export type RootState = ReturnType<typeof rootReducer>;
