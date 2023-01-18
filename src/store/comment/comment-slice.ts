import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

import {
  getCommentData,
  newCommentData,
  editCommentData,
  deleteCommentData,
} from "./comment-actions";

const commentInitialState: CommentType = { comments: [], page: 1 };

const commentSlice = createSlice({
  name: "comment",
  initialState: commentInitialState,
  reducers: {
    increment(state) {
      state.page++;
    },
    decrement(state) {
      state.page--;
    },
    currentPage(state, action) {
      state.page = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getCommentData.fulfilled, (state, action) => {
      state.comments = action.payload;
    });
    builder.addCase(newCommentData.fulfilled, (state, action: any) => {
      state.comments = [...state.comments, action.payload];
    });
    builder.addCase(editCommentData.fulfilled, (state: any, action: any) => {
      state.comments = state.comments.map(
        (comment: any) =>
          comment.id === action.payload.id && [...comment, action.payload]
      );
    });
    builder.addCase(deleteCommentData.fulfilled, (state, action: any) => {
      state.comments = state.comments.filter(
        (comment) => comment.id !== action.payload.id
      );
    });
  },
});

export const commentList = (state: RootState) => state.comment.comments;
export const currentPage = (state: RootState) => state.comment.page;

export const commentActions = commentSlice.actions;

export default commentSlice.reducer;
