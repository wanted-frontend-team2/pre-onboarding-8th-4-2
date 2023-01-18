import { createSlice } from '@reduxjs/toolkit';
import { CommentType, CommentItemType } from '../../types/index';

import {
  getCommentData,
  createCommentData,
  updateCommentData,
  deleteCommentData,
} from './commentActions';

const commentInitialState: CommentType = { comments: [] };

const commentSlice = createSlice({
  name: 'comment',
  initialState: commentInitialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(getCommentData.fulfilled, (state: any, action) => {
      state.comments = action.payload;
    });
    builder.addCase(createCommentData.fulfilled, (state, action: any) => {
      state.comments = [...state.comments, action.payload];
    });
    builder.addCase(updateCommentData.fulfilled, (state: any, action: any) => {
      state.comments = state.comments.map(
        (comment: CommentItemType) =>
          comment.id === action.payload.id && [comment, action.payload],
      );
    });
    builder.addCase(deleteCommentData.fulfilled, (state, action: any) => {
      state.comments = state.comments.filter(
        comment => comment.id !== action.payload.id,
      );
    });
  },
});

export const getComments = (state: any) => state.comment.comments;

export const commentActions = commentSlice.actions;

export default commentSlice.reducer;
