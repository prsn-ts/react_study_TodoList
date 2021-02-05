import React from "react";
import styled from "styled-components";
import { useTodoState } from '../components/TodoContext'; //함수형 컴포넌트를 가져온다.

const TodoHead = styled.div`
    /* 
        TodoHead 컴포넌트에 적용되는 css로 요소 자체에 스타일이 추가될 줄 알았지만
        그게 아니라 react에서 임의로 class이름을 만들어서 거기에 css 스타일을 적용하는 것 같다.(class를 통한 style 적용)
    */
    padding-top: 48px;
    padding-left: 32px;
    padding-right: 32px;
    padding-bottom: 24px;
    border-bottom: 1px solid #e9ecef;

    /*
        h1/.day/.tasks_left 등 TodoHead 컴포넌트의 자식 요소들을
        css 선택자로 골라서 css를 적용할 수 있다.
    */
    h1 {
        font-size: 36px;
        color: #343a40;
        margin: 4px 0;
    }
    .day {
        font-size: 21px;
        color: #868e96;
    }
    .tasks_left {
        color: #20c997;
        font-size: 18px;
        font-weight: bold;
        margin-top: 40px;
    }
`;

function Head() {
    const todos = useTodoState(); //useReducer로 상태를 관리하는 context 가져와서 todos 변수에 저장.
    console.log(todos); //결과 확인해보기
    return(
        <TodoHead>
            <h1>2021년 1월 23일</h1>
            <div className="day">토요일</div>
            <div className="tasks_left">할 일 2개 남음</div>
        </TodoHead>
    );
}

export default Head;