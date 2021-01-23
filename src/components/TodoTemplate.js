import React from 'react';
import styled from 'styled-components';

const TemplateStyle = styled.div`
    width: 512px;
    height: 768px;

    position: relative; /* 추후 박스 하단에 추가 버튼을 위치시키기 위한 설정 */
    background: white;
    border-radius: 16px;
    box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.04);

    margin: 0 auto; /* 페이지 중앙에 나타나도록 설정 */

    margin-top: 96px;
    margin-bottom: 32px;
    display: flex;
    flex-direction: column;
`;

/*
    함수의 인자값으로 { children }를 넣고 TemplateStyle 컴포넌트 요소안에 {children}를 설정하면
    이 컴포넌트를 import하여 사용하는 곳에서 컴포넌트 요소안에 내용을 넣을 수 있다.
    ex) import TodoTemplate from './components/TodoTemplate'; -> 사용하는 곳에서 import한다.
        <TodoTemplate>안녕하세요</TodoTemplate> -> import한 TodoTemplate 컴포넌트 요소안에 "안녕하세요" 라는 문자열을 대입.

        이렇게 TodoTemplate 컴포넌트 요소안에 내용을 넣을 수 있는 이유는 export하는 함수(Template)의 인자로
        { children } 해주기 때문이다.
*/
function Template({ children }) {
    return(
        <TemplateStyle>{children}</TemplateStyle>
    );
}

export default Template;