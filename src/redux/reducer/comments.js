import * as type from '../action/type';
import { reducerUtils } from '../../lib/asyncUtils';

const initialState = {
  totalComments: reducerUtils.initial(),
  comments: reducerUtils.initial(),
  comment: reducerUtils.initial(),
  currentPage: 1,
};

export default function comments(state = initialState, action) {
  switch (action.type) {
    case type.GET_COMMENTS:
    case type.GET_COMMENTS_SUCCESS:
    case type.GET_COMMENTS_ERROR:
      return type.getTotalCommentsReducer(state, action);

    case type.GET_COMMENT:
    case type.GET_COMMENT_SUCCESS:
    case type.GET_COMMENT_ERROR:
      return type.getCommentReducer(state, action);

    case type.PAGE_COMMNETS:
      return {
        ...state,
        comments: {
          loading: true,
          data: null,
          error: null,
        },
        currentPage: action.currentPage,
      };
    case type.PAGE_COMMNETS_SUCCESS:
      return {
        ...state,
        comments: {
          loading: false,
          data: action.payload,
          error: null,
        },
        currentPage: action.currentPage,
      };
    case type.PAGE_COMMNETS_ERROR:
      return {
        ...state,
        comments: {
          loading: false,
          data: null,
          error: action.error,
        },
        currentPage: action.currentPage,
      };

    case type.CREATE_COMMENT:
    case type.CREATE_COMMENT_SUCCESS:
    case type.CREATE_COMMENT_ERROR:
      return type.createCommentReducer(state, action);

    case type.UPDATE_COMMENT:
      return {
        ...state,
        totalComments: {
          loading: true,
          data: state.totalComments.data,
          error: null,
        },
      };
    case type.UPDATE_COMMENT_SUCCESS:
      return {
        ...state,
        totalComments: {
          loading: false,
          data: state.totalComments.data.map(comment =>
            comment.id === action.payload ? action.payload : comment,
          ),
          error: null,
        },
        comment: {
          loading: false,
          data: [],
          error: null,
        },
      };
    case type.UPDATE_COMMENT_ERROR:
      return {
        ...state,
        totalComments: {
          loading: false,
          data: state.totalComments.data,
          error: action.error,
        },
      };

    case type.REMOVE_COMMENT:
    case type.REMOVE_COMMENT_SUCCESS:
    case type.REMOVE_COMMENT_ERROR:
      return type.deleteCommentReducer(state, action);

    default:
      return state;
  }
}
