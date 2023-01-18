import axios from "axios";
// import { useState } from "react";

async function getComments() {
  // const [contentInfo, setContentInfo] = useState([]);
  try {
    console.info("calling api");

    const response = await axios.get(`http://localhost:4000/comments`);

    const successResult = { state: "success", data: response.data };

    // localStorage.setItem("reply", JSON.stringify(response.data));

    // setContentInfo(response.data);
    // console.log("res", response);

    return successResult;
  } catch (e) {
    if (e instanceof Error) {
      alert(`통신에 실패했습니다. 다시 시도해주세요: ${e.message}`);
    }
    const failResult = { state: "fail", data: [] };
    return failResult;
  }
}

export default getComments;
