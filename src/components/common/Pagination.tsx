import { useSelector } from "react-redux";

import { commentActions } from "../../store/comment/comment-slice";
import { useAppDispatch } from "../../store/hooks";
import { currentPage } from "../../store/comment/comment-slice";

const Pagination = () => {
  const dispatch = useAppDispatch();
  const page = useSelector(currentPage);

  const incrementHandler = () => {
    dispatch(commentActions.increment());
  };

  const decrementHandler = () => {
    dispatch(commentActions.decrement());
  };

  return (
    <div className="flex justify-center items-center my-8">
      <button
        className="text-4xl mx-3 px-3 hover:bg-slate-200 hover:rounded cursor-pointer disabled:bg-white disabled:cursor-auto"
        disabled={page <= 1}
        onClick={decrementHandler}
      >
        &#8249;
      </button>
      <strong className="text-2xl">{page}</strong>
      <button
        className="text-4xl mx-3 px-3 hover:bg-slate-200 hover:rounded cursor-pointer disabled:bg-white disabled:cursor-auto"
        disabled={page > 4}
        onClick={incrementHandler}
      >
        &#8250;
      </button>
    </div>
  );
};

export default Pagination;
