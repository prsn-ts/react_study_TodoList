import React from 'react'; //리액트 컴포넌트를 만들기위해서 꼭 필요함.
//컴포넌트에 스타일을 지정할 수 있게 해주는 styled-components 라이브러리(글로벌 스타일을 추가하고 싶을 땐 {createGlobalStyle} 사용)
import {createGlobalStyle} from 'styled-components'; 
import TodoTemplate from './components/TodoTemplate';
import TodoHead from './components/TodoHead';
import TodoList from './components/TodoList';
import TodoCreate from './components/TodoCreate';

//styled-components를 활용한 배경색상 지정.(글로벌 스타일을 추가하고 싶을 땐 createGlobalStyle 사용)
const GlobalStyle = createGlobalStyle`
    body {
        background: #e9ecef;
    }
`;

//함수 기반의 TodoApp JSX 생성
function TodoApp() {
    return(
        <>
            <GlobalStyle />
            <TodoTemplate>
                <TodoHead/>
                <TodoList/>
                <TodoCreate/>
            </TodoTemplate>
        </>
    );
}

//다른 곳에서 사용할 수 있도록 export(내보내기) 실행
export default TodoApp;