import {
  createAsyncThunk,
  createSlice,
  nanoid,
  PayloadAction,
} from '@reduxjs/toolkit';
import { apis } from '../util/apis';

interface IInitialState {
  comments: {
    id: number;
    profile_url: string;
    author: string;
    content: string;
    createdAt: string;
  }[];
  status: string;
  error: string | undefined | null;
}
const initialState: IInitialState = {
  comments: [],
  status: 'idle',
  error: null,
};

export const commentSlice = createSlice({
  name: 'comments',
  initialState,
  reducers: {
    commnetAdd: {
      reducer: (
        state,
        {
          payload,
        }: PayloadAction<{
          id: number;
          profile_url: string;
          author: string;
          content: string;
          createdAt: string;
        }>,
      ) => {
        state.comments.push(payload);
      },
      prepare: (profile_url, author, content, createdAt) => {
        return {
          payload: {
            id: Number(nanoid()),
            profile_url,
            author,
            content,
            createdAt,
          },
        };
      },
    },
    commentUpdate: (state, action) => {
      const { id, profile_url, author, content, createdAt } = action.payload;
      const existingPost = state.comments.find(comment => comment.id === id);
      if (existingPost) {
        existingPost.profile_url = profile_url;
        existingPost.author = author;
        existingPost.createdAt = createdAt;
        existingPost.content = content;
      }
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchComments.pending, (state, action) => {
        state.status = 'loading';
      })
      .addCase(fetchComments.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.comments = state.comments.concat(action.payload);
      })
      .addCase(fetchComments.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export const { commentAdd, commentUpdate } = commentSlice.actions;

export const fetchComments = createAsyncThunk(
  'fetchComments',
  async (page: number = 1) => {
    try {
      const response = await apis.getList(page);
      console.log(response.data);
      return response.data;
    } catch (e) {
      if (e instanceof Error) {
        alert(`통신에 실패했습니다. 다시 시도해주세요: ${e.message}`);
      }
    }
  },
);

export const selectComment = (state: any) => state.comments;

export default commentSlice.reducer;
