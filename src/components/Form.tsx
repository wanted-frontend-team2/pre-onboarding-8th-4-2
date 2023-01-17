import React from 'react';

function Form() {
  return (
    <div>
      <form className="px-2.5 mb-12">
        <input
          type="text"
          name="profile_url"
          placeholder="https://picsum.photos/id/1/50/50"
          required
        />
        <br />
        <input
          type="text"
          name="author"
          placeholder="작성자"
          className="py-1 px-[1%] mb-2.5"
        />
        <br />
        <textarea
          name="content"
          placeholder="내용"
          required
          className="py-1 px-[1%]"
        ></textarea>
        <br />
        <input
          type="text"
          name="createdAt"
          placeholder="2020-05-30"
          required
          className="py-1 px-[1%] mb-2.5"
        />
        <br />
        <button type="submit" className="btn">
          등록
        </button>
      </form>
    </div>
  );
}

export default Form;
