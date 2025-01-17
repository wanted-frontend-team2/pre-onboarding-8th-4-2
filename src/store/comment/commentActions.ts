import { createAsyncThunk } from '@reduxjs/toolkit';

import apis from 'src/service/request';
import { CommentItemType, InputValue } from 'src/types';

export const actions = {
  getCommentData: createAsyncThunk('getCommentData', async () => {
    try {
      const res = await apis.get();
      return res.data;
    } catch (err) {
      if (err instanceof Error) {
        alert(`통신에 실패했습니다. 다시 시도해주세요: ${err.message}`);
      }
    }
    return null;
  }),

  fetchCommentsByPage: createAsyncThunk(
    'fetchCommentsByPage',
    async (currentPage: number) => {
      const response = await apis.getComments(
        currentPage === 0 ? 1 : currentPage,
      );
      return response.data;
    },
  ),

  createCommentData: createAsyncThunk(
    'createCommentData',
    async (comment: CommentItemType) => {
      try {
        await apis.create(comment);
        return { ...comment };
      } catch (err) {
        if (err instanceof Error) {
          alert(`통신에 실패했습니다. 다시 시도해주세요: ${err.message}`);
        }
      }
      return null;
    },
  ),
  updateCommentData: createAsyncThunk(
    'updateCommentData',
    async (inputValues: InputValue) => {
      try {
        const response = await apis.update(inputValues);
        return response.data;
      } catch (err) {
        if (err instanceof Error) {
          alert(`통신에 실패했습니다. 다시 시도해주세요: ${err.message}`);
        }
      }
      return null;
    },
  ),
  deleteCommentData: createAsyncThunk(
    'deleteCommentData',
    async (id: number) => {
      try {
        await apis.delete(id);
        return id;
      } catch (err) {
        if (err instanceof Error) {
          alert(`통신에 실패했습니다. 다시 시도해주세요: ${err.message}`);
        }
      }
      return null;
    },
  ),
};
