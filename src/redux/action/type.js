import * as commentsApi from '../../api/comment';
import { createPromiseThunk, handleAsyncActions } from '../../lib/asyncUtils';

export const GET_COMMENTS = 'GET_COMMENTS';
export const GET_COMMENTS_SUCCESS = 'GET_COMMENTS_SUCCESS';
export const GET_COMMENTS_ERROR = 'GET_COMMENTS_ERROR';

export const GET_COMMENT = 'GET_COMMENT';
export const GET_COMMENT_SUCCESS = 'GET_COMMENT_SUCCESS';
export const GET_COMMENT_ERROR = 'GET_COMMENT_ERROR';

export const CREATE_COMMENT = 'CREATE_COMMENT';
export const CREATE_COMMENT_SUCCESS = 'CREATE_COMMENT_SUCCESS';
export const CREATE_COMMENT_ERROR = 'CREATE_COMMENT_ERROR';

export const UPDATE_COMMENT = 'UPDATE_COMMENT';
export const UPDATE_COMMENT_SUCCESS = 'UPDATE_COMMENT_SUCCESS';
export const UPDATE_COMMENT_ERROR = 'UPDATE_COMMENT_ERROR';

export const REMOVE_COMMENT = 'REMOVE_COMMENT';
export const REMOVE_COMMENT_SUCCESS = 'REMOVE_COMMENT_SUCCESS';
export const REMOVE_COMMENT_ERROR = 'REMOVE_COMMENT_ERROR';

export const PAGE_COMMNETS = 'PAGE_COMMNETS';
export const PAGE_COMMNETS_SUCCESS = 'PAGE_COMMNETS_SUCCESS';
export const PAGE_COMMNETS_ERROR = 'PAGE_COMMNETS_ERROR';

export const getComments = createPromiseThunk(
  GET_COMMENTS,
  commentsApi.getCommentsAPI,
);

export const getComment = createPromiseThunk(
  GET_COMMENT,
  commentsApi.getCommentIdAPI,
);

export const pageComments = num => async dispatch => {
  dispatch({ type: PAGE_COMMNETS });
  try {
    const payload = await commentsApi.pagingCommentAPI(num);
    dispatch({
      type: PAGE_COMMNETS_SUCCESS,
      payload,
      currentPage: num,
    });
  } catch (e) {
    dispatch({
      type: PAGE_COMMNETS_ERROR,
      error: e,
    });
  }
};

export const createComment = createPromiseThunk(
  CREATE_COMMENT,
  commentsApi.createCommentAPI,
);

export const updateComment = createPromiseThunk(
  UPDATE_COMMENT,
  commentsApi.updateCommentAPI,
);

export const deleteComment = createPromiseThunk(
  REMOVE_COMMENT,
  commentsApi.deleteCommentAPI,
);

export const getTotalCommentsReducer = handleAsyncActions(
  GET_COMMENTS,
  'totalComments',
);

export const getCommentReducer = handleAsyncActions(GET_COMMENT, 'comment');
export const createCommentReducer = handleAsyncActions(
  CREATE_COMMENT,
  'totalComments',
);
export const deleteCommentReducer = handleAsyncActions(
  REMOVE_COMMENT,
  'totalComments',
);
