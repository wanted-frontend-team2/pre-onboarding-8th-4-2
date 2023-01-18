import { ChangeEvent, FormEvent, useState } from "react";
import { useAppDispatch } from "../../store/hooks";

import { editCommentData } from "../../store/comment/comment-actions";

const Create = () => {
  const dispatch = useAppDispatch();
  const date = new Date().toISOString();

  const [inputValue, setInputValue] = useState<CommentItemType>({
    id: date,
    author: "",
    content: "",
    createdAt: date.slice(0, 10),
    profile_url: "",
  });

  const inputValueHandler = (
    e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>
  ) => {
    setInputValue({
      ...inputValue,
      [e.target.name]: e.target.value,
    });
  };

  const submitHandler = (e: FormEvent) => {
    e.preventDefault();
    dispatch(editCommentData(inputValue));
  };

  return (
    <form onSubmit={submitHandler} className="flex flex-col">
      <input
        type="text"
        name="author"
        placeholder="author"
        value={inputValue.author}
        onChange={inputValueHandler}
        className="p-1 mb-2 border rounded"
      />
      <textarea
        name="content"
        placeholder="content"
        value={inputValue.content}
        onChange={inputValueHandler}
        className="p-1 mb-2 border rounded"
      />
      <input
        type="url"
        name="profile_url"
        placeholder="profile_url"
        value={inputValue.profile_url}
        onChange={inputValueHandler}
        className="p-1 mb-2 border rounded"
      />
      <button className="p-1 mb-2 border rounded">Submit</button>
    </form>
  );
};

export default Create;
