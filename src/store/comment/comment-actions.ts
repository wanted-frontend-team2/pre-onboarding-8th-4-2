import { createAsyncThunk } from "@reduxjs/toolkit";
import instance from "../../service/request";

// const cache = new Map();

// const comments: string = "comments";

// export const getCommentData = createAsyncThunk(
//   "getCommentData",
//   async (page: number) => {
//     try {
//       const res = await instance.get(
//         `?_page=${page}&_limit=5&_order=desc&_sort=id`
//       );
//       console.log(res);
//       return res.data;
//     } catch (err) {
//       console.log("err", err);
//     }
//   }
// );
export const getCommentData = createAsyncThunk(
  "getCommentData",
  async ({ page, limit }: getPropsType) => {
    try {
      const res = await instance.get(
        `?_page=${page}&_limit=${limit}&_order=desc&_sort=id`
      );
      return res.data;
    } catch (err) {
      console.log("err", err);
    }
  }
);

export const showCommentData = createAsyncThunk(
  "showCommentData",
  async (id: string) => {
    try {
      const res = await instance.get(`/${id}`);
      return res.data;
    } catch (err) {
      console.log("err", err);
    }
  }
);

export const newCommentData = createAsyncThunk(
  "newCommentData",
  async (item: CommentItemType) => {
    try {
      await instance.post("/", item);
    } catch (err) {
      console.log("err", err);
    }
  }
);

export const editCommentData = createAsyncThunk(
  "editCommentData",
  async (item: CommentItemType) => {
    try {
      await instance.put(`/${item.id}`, item);
    } catch (err) {
      console.log("err", err);
    }
  }
);

export const deleteCommentData = createAsyncThunk(
  "removeCommentData",
  async (id: string) => {
    try {
      await instance.delete(`/${id}`);
    } catch (err) {
      console.log("err", err);
    }
  }
);
