import { useEffect } from "react";
import { useSelector } from "react-redux";

import { commentList } from "../../store/comment/comment-slice";
import { getCommentData } from "../../store/comment/comment-actions";
import { useAppDispatch } from "../../store/hooks";
import { currentPage } from "../../store/comment/comment-slice";

import CommentItem from "./CommentItem";
import Create from "../crud/Create";
import Pagination from "../common/Pagination";

const Comment = () => {
  const dispatch = useAppDispatch();
  const comments = useSelector(commentList);
  const page = useSelector(currentPage);

  const limit = 5;

  useEffect(() => {
    dispatch(getCommentData({ page, limit }));
  }, [dispatch, page]);

  return (
    <main className="m-5 flex flex-col justify-center itmes-center">
      <div className="flex flex-col">
        {comments.map((comment: CommentItemType) => (
          <CommentItem key={comment.id} comment={comment} />
        ))}
      </div>
      <Pagination />
      <Create />
    </main>
  );
};

export default Comment;
