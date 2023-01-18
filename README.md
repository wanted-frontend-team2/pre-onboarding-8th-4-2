# Comment Section and Pagination with Redux

> API 서버와 통신하여 댓글과 페이지네이션을 Redux를 통해 구현한 프로젝트 입니다.

[서비스 바로가기]()  
// 배포링크 작성

<br>

## 사용 스택

<img src="https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=React&logoColor=black"/> <img src="https://img.shields.io/badge/Typescript-3178C6?style=flat-square&logo=Typescript&logoColor=white"/> <img src="https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white"/> <img src="https://img.shields.io/badge/JsonServer-000000?style=flat-square&logo=JSON&logoColor=white"/>  
<img src="https://img.shields.io/badge/Redux-764ABC?style=flat-square&logo=Redux&logoColor=white"/> <img src="https://img.shields.io/badge/Tailwind CSS-06B6D4?style=flat-square&logo=Tailwind CSS&logoColor=white"/>

<br>

<br>

## 설치 및 실행 방법

### 클라이언트

```javascript
// start with port 3000
 $ git clone https://github.com/wanted-frontend-team2/pre-onboarding-8th-4-2.git
 $ npm i
 $ npm run start
```

### 서버

```javascript
// start with port 4000
 $ npm run api
```

<br>

## 세부 기능

### 코드 상세설명

[1. 댓글 CRUD 와 API 요청](https://github.com/wanted-frontend-team2/pre-onboarding-8th-4-2/wiki/1.-%EB%8C%93%EA%B8%80-CRUD-%EC%99%80-API-%EC%9A%94%EC%B2%AD)  
[2. Pagination]()  
[3. 댓글 CREATE, UPDATE, DELETE 후 Pagination 처리]()

<br>

### 댓글 CRUD 와 API 요청

댓글 CREATE, READ, UPDATE, DELETE와 API 요청을 구현하였습니다.  
<br>  
[화면 캡처 GIF]  
<br>

- API를 요청할 때 Redux-thunk middleware를 사용하였습니다.
  - toolkit의 createAsyncThunk를 이용하여 Action 함수도 또한 객체 형태로 구현하였습니다.
  - 데이터 요청을 받아오기 위한 비동기 요청을 객체 형태로 만들어 다른 컴포넌트 내에서 보기 편하고 쉽게 접근할 수 있도록 하였습니다.
- extraReducers를 사용하여 댓글의 읽기, 생성, 수정, 삭제 기능 reducer를 관리하였습니다.

<br>

### Pagination

Redux를 이용하여 페이지네이션을 구현하였습니다.

<br>  
[화면 캡처 GIF]  
<br>

### 댓글 CREATE, UPDATE, DELETE 후 Pagination 처리

- 댓글을 작성하고 난 뒤, 다른 페이지에 위치하고 있었더라도 1페이지로 이동하고 입력 폼이 초기화되도록 구현하였습니다.
- 댓글을 수정하고 난 뒤, 현재 보고있는 페이지를 유지하고 입력 폼이 초기화되도록 구현하였습니다.
- 댓글을 삭제하고 난 뒤, 1페이지로 이동하도록 구현하였습니다.

<br>   
[화면 캡처 GIF]
<br>
<br>

### 기타 고려한 항목

// 추가적인 내용 작성 하거나 삭제 <br>  
[화면 캡처 GIF]

<br>

## 디렉토리 구조

<details>
    <summary>Repository Overview</summary>
        
        └─ 📂 src
           ├─ 📂 components
           │  └─ 📂 comment
           │     ├─ 📝 CommentForm.tsx
           │     ├─ 📝 CommentItem.tsx
           │     ├─ 📝 Comments.tsx
           │     ├─ 📝 DeleteButton.tsx
           │     └─ 📝 PageList.tsx
           ├─ 📂 constants
           │  └─ 📝 index.ts
           ├─ 📂 service
           │  └─ 📝 request.ts
           ├─ 📂 store
           │  ├─ 📂 comment
           │  │  ├─ 📝 commentActions.ts
           │  │  └─ 📝 commentSlice.ts
           │  └─ 📝 index.ts
           ├─ 📂 types
           │  └─ 📝 index.d.ts
           ├─ 📝 App.tsx
           └─ 📝 index.tsx

</details>

<br><br>

## 팀원

<table>
  <tbody>
    <tr>
      <td align="center"><a href="https://github.com/trondi"><img src="https://avatars.githubusercontent.com/u/42338190?v=4" width="100px;" alt="김수경 프로필"/><br /><sub><b>김수경</b></sub></a><br />팀원<br /></td>
      <td align="center"><a href="https://github.com/Iandayy"><img src="https://avatars.githubusercontent.com/u/104152583?v=4" width="100px;" alt="박수연 프로필"/><br /><sub><b>박수연</b></sub></a><br />팀원<br /></td>
      <td align="center"><a href="https://github.com/ahn0min"><img src="https://avatars.githubusercontent.com/u/89904226?v=4" width="100px;" alt="안영민 프로필"/><br /><sub><b>안영민</b></sub></a><br />팀원<br /></td>
          <td align="center"><a href="https://github.com/heony704"><img src="https://avatars.githubusercontent.com/u/36994104?v=4" width="100px;" alt="이승헌 프로필"/><br /><sub><b>이승헌</b></sub></a><br />팀원<br /></td>
     <tr/>
      <td align="center"><a href="https://github.com/Jooseulgi"><img src="https://avatars.githubusercontent.com/u/54945205?v=4" width="100px;" alt="주슬기 프로필"/><br /><sub><b>주슬기</b></sub></a><br />팀원<br /></td>
      <td align="center"><a href="https://github.com/dukjjang"><img src="https://avatars.githubusercontent.com/u/102455275?v=4" width="100px;" alt="진현덕 프로필"/><br /><sub><b>진현덕</b></sub></a><br />팀원<br /></td>
      <td align="center"><a href="https://github.com/cofla159"><img src="https://avatars.githubusercontent.com/u/70076564?v=4" width="100px;" alt="황채림 프로필"/><br /><sub><b>황채림</b></sub></a><br />팀장<br /></td>
    </tr>
  </tbody>
</table>
