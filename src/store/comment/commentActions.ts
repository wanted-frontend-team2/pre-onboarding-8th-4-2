import { createAsyncThunk } from '@reduxjs/toolkit';
import apis from 'src/service/request';
import { CommentItemType, UpdateDataType } from 'src/types';

export const getCommentData = createAsyncThunk('getCommentData', async () => {
  try {
    const res = await apis.get();
    return res.data;
  } catch (err) {
    if (err instanceof Error) {
      alert(`통신에 실패했습니다. 다시 시도해주세요: ${err.message}`);
    }
  }
  return Promise.resolve();
});

export const createCommentData = createAsyncThunk(
  'createCommentData',
  async (comment: CommentItemType) => {
    try {
      await apis.create(comment);
    } catch (err) {
      if (err instanceof Error) {
        alert(`통신에 실패했습니다. 다시 시도해주세요: ${err.message}`);
      }
    }
  },
);

export const updateCommentData = createAsyncThunk(
  'updateCommentData',
  async ({ id, comment }: UpdateDataType) => {
    try {
      await apis.update(id, comment);
    } catch (err) {
      if (err instanceof Error) {
        alert(`통신에 실패했습니다. 다시 시도해주세요: ${err.message}`);
      }
    }
  },
);

export const deleteCommentData = createAsyncThunk(
  'deleteCommentData',
  async (id: string) => {
    try {
      await apis.delete(id);
    } catch (err) {
      if (err instanceof Error) {
        alert(`통신에 실패했습니다. 다시 시도해주세요: ${err.message}`);
      }
    }
  },
);
