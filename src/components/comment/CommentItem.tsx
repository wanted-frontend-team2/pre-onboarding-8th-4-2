import { useState } from "react";

import Delete from "../crud/Delete";
import Update from "../crud/Update";

const CommentItem = ({ comment }: CommentItemPropsType) => {
  const [isEdit, setIsEdit] = useState(false);

  const isEditHandler = () => {
    setIsEdit((prev) => !prev);
  };
  return (
    <>
      {isEdit && <Update comment={comment} />}
      {!isEdit && (
        <div className="border">
          <section className="flex justify-between m-2">
            <section className="flex justify-center items-center m-2">
              <img
                src={comment.profile_url}
                alt={comment.profile_url}
                className="rounded-full"
              />
              <p className="ml-2">{comment.author}</p>
            </section>
            <span>{comment.createdAt}</span>
          </section>
          <section>
            <p className="m-2">{comment.content}</p>
          </section>
          <section className="flex justify-end">
            <button onClick={isEditHandler} className="p-1 m-1 border rounded">
              Update
            </button>
            <Delete id={comment.id} />
          </section>
        </div>
      )}
    </>
  );
};

export default CommentItem;
