import React, { useState, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import getComments from "../utils/getComments";
import styled from "styled-components";
import uuid from "react-uuid";
import Pagination from "../components/Pagination";

import { addComment, editComment, removeComment } from "../redux/comment";

import ReplyComment from "./ReplyComment";

// dot icon
//import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import { Stack, Button, Divider, Paper } from "@mui/material";

import { Box } from "@mui/system";

// markdown, toast editor
import "@toast-ui/editor/dist/toastui-editor.css";
import { Editor } from "@toast-ui/react-editor";

import Markdown from "../components/Markdown";

import {
  check_kor,
  timeForToday,
  Item,
  ProfileIcon,
  timeToDate,
} from "../components/CommentTool";

const Comment = () => {
  const [contentInfo, setContentInfo] = useState([]);

  const [page, setPage] = useState(1); //페이지
  const limit = 4; // posts가 보일 최대한의 갯수
  const offset = (page - 1) * limit; // postid 시작점과 끝점을 구하는 offset

  const postsData = (posts) => {
    if (posts) {
      let result = posts.slice(offset, offset + limit);
      console.log("offset", offset);
      console.log("result", result);
      return result;
    }
  };

  const info = postsData(contentInfo);

  const [beforeComment, setBeforeComment] = useState([]);
  // 기존 코멘트 불러오기

  const dispatch = useDispatch();
  const comments = useSelector((state) => state.comment);
  const editorRef = useRef();

  const date = new Date(); // 작성 시간

  const [local, setLocal] = useState([]); // local storage
  const [display, setDisplay] = useState(false); // edit modal

  // open editor to edit comment
  const [openEditor, setOpenEditor] = useState("");

  const [author, setAuthor] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    e.target.value = "";

    // 마크다운 변환
    const editorInstance = editorRef.current.getInstance();
    const getContent = editorInstance.getMarkdown();
    setDisplay(!display);

    // Add comment
    const data = {
      commentId: uuid(),
      content: getContent,
      author: author,
      responseTo: "root",
      createdAt: `${date}`,
    };
    dispatch(addComment(data));
  };

  // Edit comment
  const onEdit = (commentId) => {
    const editorInstance = editorRef.current.getInstance();
    const getContent = editorInstance.getMarkdown();

    let data = { commentId: commentId, content: getContent };
    dispatch(editComment(data));
  };

  // Remove comment
  const onRemove = (commentId) => {
    dispatch(removeComment(commentId));
  };

  // 기존 코멘트 불러오기
  useEffect(() => {
    (async () => {
      const { data } = await getComments();
      setBeforeComment(data);
      console.log("data", data);
      // setContentInfo(data);
    })();

    // localStorage.setItem("reply", JSON.stringify(data));
    setLocal(comments.filter((comment) => comment.responseTo === "root"));
  }, []);

  useEffect(() => {
    localStorage.setItem("reply", JSON.stringify(comments));
    setLocal(comments.filter((comment) => comment.responseTo === "root"));
  }, [comments]);

  useEffect(() => {
    console.log("local", local);
    setContentInfo(local);
  }, [local]);

  return (
    <Paper sx={{ m: 15, p: 3 }}>
      {info !== undefined
        ? info.map((comment, index) => (
            <Box sx={{ m: 2 }} key={comment.commentId}>
              {/* author 정보, 작성 시간 */}
              <Stack direction="row" spacing={2}>
                <ProfileIcon>
                  {check_kor.test(comment.author)
                    ? comment.author.slice(0, 1)
                    : comment.author.slice(0, 2)}
                </ProfileIcon>

                <Item>{comment.author}</Item>

                <Item>{timeForToday(comment.createdAt)}</Item>
                <Item>{timeToDate(comment.createdAt)}</Item>
              </Stack>

              {/* comment 글 내용 */}
              <Box
                key={index}
                sx={{ padding: "0px 20px", color: comment.exist || "grey" }}
                // exist는 초기값으로 true를 가지며, removeComment를 통해 false로 변경된다.
              >
                <Markdown comment={comment} />
              </Box>

              {/* comment 수정 */}
              {comment.exist && (
                <>
                  {openEditor === comment.commentId && (
                    <Editor initialValue={comment.content} ref={editorRef} />
                  )}
                  <Button
                    onClick={() => {
                      if (comment.commentId === openEditor) {
                        onEdit(comment.commentId);
                        setOpenEditor("");
                      } else {
                        setOpenEditor(comment.commentId);
                      }
                    }}
                  >
                    수정
                  </Button>

                  {/* comment 삭제 */}
                  <Button
                    onClick={() => {
                      onRemove(comment.commentId);
                    }}
                  >
                    삭제
                  </Button>
                </>
              )}

              {/* 대댓글 컴포넌트 */}
              <ReplyComment responseTo={comment.commentId} />

              <Divider variant="middle" />
            </Box>
          ))
        : "Loading..."}
      <Pagination
        limit={limit}
        page={page}
        totalPosts={contentInfo.length}
        setPage={setPage}
      />
      <Button
        className="rounded-md border-transparent"
        onClick={() => {
          setDisplay(!display);
        }}
        sx={{ width: "10rem" }}
      >
        댓글 쓰기
      </Button>
      {display && (
        <>
          <div>
            <input
              type="text"
              name="author"
              placeholder="작성자"
              value={author}
              onChange={(e) => {
                setAuthor(e.target.value);
              }}
              required
            />
          </div>
          <br />
          <Editor ref={editorRef} />
          <div>
            <button type="button" onClick={onSubmit}>
              저장
            </button>
          </div>
        </>
      )}
    </Paper>
  );
};

export default Comment;

const CommentDiv = styled.div`
  padding: 7px 10px;
  text-align: left;

  & > img {
    vertical-align: middle;
    margin-right: 10px;
    border-radius: 50%;
    width: 50px;
    height: 50px;
  }
`;

const CreatedAt = styled.div`
  float: right;
  vertical-align: middle;
`;

const Content = styled.div`
  margin: 10px 0;
`;

// const Button = styled.button``;
