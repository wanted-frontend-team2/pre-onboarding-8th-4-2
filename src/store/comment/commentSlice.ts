import { createSlice } from '@reduxjs/toolkit';
import { CommentType, CommentItemType } from '../../types/index';

import { actions } from './commentActions';

const commentInitialState: CommentType = { comments: [] };

const commentSlice = createSlice({
  name: 'comment',
  initialState: commentInitialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(actions.getCommentData.fulfilled, (state: any, action) => {
      state.comments = action.payload;
    });
    builder.addCase(
      actions.createCommentData.fulfilled,
      (state, action: any) => {
        state.comments = [...state.comments, action.payload];
      },
    );
    builder.addCase(
      actions.updateCommentData.fulfilled,
      (state: any, action: any) => {
        state.comments = state.comments.map(
          (comment: CommentItemType) =>
            comment.id === action.payload.id
              ? { ...comment, ...action.payload.comment }
              : comment,
          action.payload,
        );
      },
    );
    builder.addCase(
      actions.deleteCommentData.fulfilled,
      (state, action: any) => {
        state.comments = state.comments.filter(
          comment => comment.id !== action.payload.id,
        );
      },
    );
  },
});

export const getComments = (state: any) => state.comment.comments;

export const commentActions = commentSlice.actions;

export default commentSlice.reducer;
