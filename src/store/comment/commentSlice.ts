import { createSlice } from '@reduxjs/toolkit';
import { DEFAULT_INPUT_VALUES } from 'src/constants';
import { CommentState } from '../../types/index';
import { actions } from './commentActions';

const commentInitialState: CommentState = {
  comments: [],
  currentPage: 1,
  inputValues: DEFAULT_INPUT_VALUES,
  totalPage: 1,
  currentSection: 1,
  totalSection: 1,
  pageCount: 5,
  firstPage: 1,
  lastPage: 5,
  buttonDisabled: false,
};

const commentSlice = createSlice({
  name: 'comment',
  initialState: commentInitialState,
  reducers: {
    setInputValues(state, action) {
      state.inputValues[action.payload.name] = action.payload.value;
    },
    resetInputValues(state) {
      state.inputValues = DEFAULT_INPUT_VALUES;
    },
    editComment(state, action) {
      const target = state.comments.find(
        comment => comment.id === action.payload,
      );
      if (target) state.inputValues = target;
    },
    setCurrentPage(state, action) {
      state.currentPage = action.payload;
    },
    setPageSection(state, action) {
      if (action.payload === 'next') {
        state.currentSection += 1;
        state.currentPage = (state.currentSection - 1) * state.pageCount + 1;
      }
      if (action.payload === 'prev') {
        state.currentSection -= 1;
        state.currentPage =
          state.currentSection * state.pageCount - (state.pageCount - 1);
      }
      state.lastPage =
        state.currentSection * state.pageCount > state.totalPage
          ? state.totalPage
          : state.currentSection * state.pageCount;

      state.firstPage =
        state.currentSection === 1
          ? 1
          : state.currentSection * state.pageCount - state.pageCount + 1;
    },
    setButtonDisabled(state, action) {
      state.buttonDisabled = action.payload;
    },
  },
  extraReducers: builder => {
    builder.addCase(actions.getCommentData.fulfilled, (state, action) => {
      const totalPageNumber = Math.ceil(action.payload.length / 4);
      state.totalPage = totalPageNumber;
      state.totalSection = Math.ceil(totalPageNumber / 5);
    });

    builder.addCase(actions.fetchCommentsByPage.fulfilled, (state, action) => {
      state.comments = action.payload;
      if (state.currentPage === 0) state.currentPage = 1;
    });

    builder.addCase(actions.createCommentData.fulfilled, state => {
      state.inputValues = DEFAULT_INPUT_VALUES;
      state.currentPage = 0;
      state.currentSection = 1;
      state.firstPage = 1;
      state.lastPage = 5;
    });

    builder.addCase(actions.updateCommentData.fulfilled, (state, action) => {
      const targetIndex = state.comments.findIndex(
        comment => comment.id === action.payload.id,
      );
      state.comments[targetIndex] = action.payload;
    });

    builder.addCase(actions.deleteCommentData.fulfilled, (state, action) => {
      state.comments = state.comments.filter(
        comment => comment.id !== action.payload,
      );
      state.currentPage = 0;
      state.inputValues = DEFAULT_INPUT_VALUES;
    });
  },
});

export const getComments = (state: any) => state.comment.comments;

export const {
  setInputValues,
  resetInputValues,
  setCurrentPage,
  setPageSection,
  editComment,
  setButtonDisabled,
} = commentSlice.actions;

export default commentSlice.reducer;
