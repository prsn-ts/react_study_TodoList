import React from 'react';
import {createGlobalStyle} from 'styled-components';

//styled-components를 활용한 배경색상 지정.
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
            <div>안녕하세요</div>
        </>
    );
}

//다른 곳에서 사용할 수 있도록 export(내보내기) 실행
export default TodoApp;