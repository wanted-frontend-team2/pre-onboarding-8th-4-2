import { ChangeEvent, FormEvent, useState } from "react";
import { useSelector } from "react-redux";

import { useAppDispatch } from "../../store/hooks";
import { editCommentData } from "../../store/comment/comment-actions";
import { currentPage, commentActions } from "../../store/comment/comment-slice";

const Update = ({ comment }: CommentItemPropsType) => {
  const dispatch = useAppDispatch();
  const counter = useSelector(currentPage);

  const [inputValue, setInputValue] = useState<CommentItemType>({
    id: comment.id,
    author: comment.author,
    content: comment.content,
    createdAt: comment.createdAt,
    profile_url: "https://picsum.photos/id/21/50/50",
  });

  const inputValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue({
      ...inputValue,
      [e.target.name]: e.target.value,
    });
  };

  const submitHandler = (e: FormEvent) => {
    e.preventDefault();

    dispatch(commentActions.currentPage(counter));
    dispatch(editCommentData(inputValue));
  };

  console.log(counter);

  return (
    <div>
      <form onSubmit={submitHandler}>
        <input
          type="text"
          name="author"
          placeholder="author"
          value={inputValue.author}
          onChange={inputValueHandler}
        />
        <input
          type="text"
          name="content"
          placeholder="content"
          value={inputValue.content}
          onChange={inputValueHandler}
        />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default Update;
