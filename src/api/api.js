// api - 데이터를 주고받는 방법
// API를 짠다~ -> crud를 어떻게 할지 짜본다~ / 이 연습  프로젝트 내에서의 예제

import axios from "axios";
// 서버와의 비동기 통신을 도와주는 친구

const todoApi = axios.create({
  // 서버 주소
  baseURL: "http://localhost:3500",
});

// CRUD 함수를 React Query로 만든다.

// R - get
export const getTodos = async () => {
  // /todos - api 주소, 데이터를 받아올 주소,  response - 서버가 준 데이터를 저장
  const response = await todoApi.get("/todos");
  // response가 객체로 온다. 그 객체를 까보니 안에 data가있어서 data에 접근하려면 data도 써준다.
  return response.data;
};

// C - post
export const addTodo = async (todo) => {
  // todo - 내가 서버에 줄 정보
  return await todoApi.post("/todos", todo);
};

// U - patch/put
export const updateTodo = async (todo) => {
  // todo - 내가 서버에 줄 데이터 (수정이 필요한)
  // todo.id - 내가 어떤 데이터를 수정할지 서버에 알려준다.
  return await todoApi.patch(`/todos/${todo.id}`, todo);
};

// D - delete
export const deleteTodo = async ({ id }) => {
  // {id} - 객체 비 구조화로 새롭게 태어난 친구
  // 객체 비구화를 쓰지않으면 todo.id
  return await todoApi.delete(`/todos/${id}`, id);
};

export default todoApi;
