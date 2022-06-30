import "./App.css";
import TodoList from "./feature/TodoList";

function App() {
  return (
    <div>
      <TodoList />
    </div>
  );
}

export default App;

// 리액트쿼리 - 상태관리
// 상태관리란?
// 주어진 시간내에 시스템(view)에 나타내는거

// Redux vs SWR vs ReactQuery
// store를 만든다, reducer를 만드는게 까다롭고, 모든걸 하나하나 만들어주느게 까다롭다
// 하나의 흐름이지만, 그 흐름을 파악하기 전까지는 데이터가 어떻게 전이되는지 파악하기도 어려웠고 코드가 많았다.
// Redux -> Thunk, Saga -> 추가다운로드, 코드가 김
// SWR vs React Query

// Swr 훨씬 가볍다, React Query
// SWR 은 GC가 없다
// SWR mutation hook이 없다. -> CRUD할때 고생한다.

// React Query
// api 통신로직을 직접 다루지 않아요.
// api 통신을 하려면 axios, fetch then 이런걸 직접 만들어야한다.

// 1. Query - R한다, 데이터를 가져온다.
// 2. Mutation - CUD한다. 데이터를 추가 수정 삭제한다.
// 3. invalidation -

// React Query에서 주장하는 개념
// Client State - 동기적으로 저장되는 데이터, Redux Store, 지속되지 않는 데이터
// Server State - 리액트 앱에서 비동기 요청으로 받아올수있는 데이터 (백엔드 DB에 저장된 데이터),
// SPA - 싱글 페이지 어플리케이션, 우리는 서버와 자주통신 하면 안되요.

// 데이터 캐싱 - 고속 data storage를 사용해서 이전에 검색하거나 이미 계산한 데이터를 효율적으로 재사용함

// Query의 5가지 상태
// fresh - 만료되지 않은 쿼리
// fetching - 요청중인 쿼리
// stale - 만료된 쿼리
// inactive - 사용하지 않는 쿼리
// delete - GC에 의해서 캐시에서 제거된 쿼리
