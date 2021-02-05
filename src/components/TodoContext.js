import React, { useReducer, createContext, useContext, useRef } from 'react';

const initialTodos = [
  {
    id: 1,
    text: '프로젝트 생성하기',
    done: true
  },
  {
    id: 2,
    text: '컴포넌트 스타일링하기',
    done: true
  },
  {
    id: 3,
    text: 'Context 만들기',
    done: false
  },
  {
    id: 4,
    text: '기능 구현하기',
    done: false
  }
];

function todoReducer(state, action) {
    console.log(action);
  switch (action.type) {
    case 'CREATE':
      return state.concat(action.todo);
    case 'TOGGLE':
      return state.map(todo =>
        todo.id === action.id ? { ...todo, done: !todo.done } : todo
      );
    case 'REMOVE':
      return state.filter(todo => todo.id !== action.id);
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
}

//context를 생성하여 각 변수에 담는다.
const TodoStateContext = createContext();
const TodoDispatchContext = createContext();
const TodoNextIdContext = createContext();

/* 
  {children} 을 쓰는 이유(추측)

  APP component에서 component들을 TodoProvider를 통해 감싸주기 때문에
  그 안에 있는 컴포넌트들이 나오게 하기 위해서는 children props를 넣어주어야
  감싸진 component들이 보여진다.
*/
export function TodoProvider({ children }) {
  const [state, dispatch] = useReducer(todoReducer, initialTodos);
  const nextId = useRef(5); //새로운 항목을 추가 할 때 사용 할 고유 ID. 이 값은, useRef 를 사용하여 관리
  return (
    <TodoStateContext.Provider value={state}>
      <TodoDispatchContext.Provider value={dispatch}>
        <TodoNextIdContext.Provider value={nextId}>
          {children}
        </TodoNextIdContext.Provider>
      </TodoDispatchContext.Provider>
    </TodoStateContext.Provider>
  );
}

//생성한 context를 사용할 수 있도록 useContext() 함수를 통해 내보내기
/*
  에러메세지를 출력하는 코드를 작성한 이유(추측)

  -> useContext(어떤 Context); 이런 식으로 TodoContext.js 파일안에서 내부적으로 사용하여
  그 결과를 context 변수에 담아서 내보내기(export)때문에 만약 TodoProvider 컴포넌트 영역 밖에서
  useTodoState(), useTodoDispatch(), useTodoNextId() 등의 함수를 사용하는 곳에서 임포트해서 사용하면
  지정된 범위가 아니므로 에러가 난다. (TodoApp.js 파일에 TodoProvider 컴포넌트의 범위를 확인해보면 좋음)
*/
export function useTodoState() {
  const context = useContext(TodoStateContext);
  if(!context) { //컨텍스트가 존재하는 지 여부 확인
    throw new Error('Cannot find TodoProvider'); //없으면 에러메세지 출력
  }
  return context;
}
export function useTodoDispatch() {
  const context = useContext(TodoStateContext);
  if(!context) { //컨텍스트가 존재하는 지 여부 확인
    throw new Error('Cannot find TodoProvider'); //없으면 에러메세지 출력
  }
  return context;
}
export function useTodoNextId() {
  const context = useContext(TodoStateContext);
  if(!context) { //컨텍스트가 존재하는 지 여부 확인
    throw new Error('Cannot find TodoProvider'); //없으면 에러메세지 출력
  }
  return context;
}