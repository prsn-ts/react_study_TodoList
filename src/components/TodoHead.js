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
    const undonetasks = todos.filter(todo => !todo.done); //done 키에 저장된 값중 false인 것만 필터링하여 가져와서 undonetasks 변수에 저장
    console.log(undonetasks); //결과 확인해보기

    /* 
        날자와 시간관련 toLocaleDateString 메소드에 관한 내용은 MDN에서 확인가능하다.(아래 주소에서 확인가능)
        https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleDateString
    */
    const today = new Date(); //인수를 전달하지 않으면 현재 날짜와 시간을 가지는 인스턴스를 반환한다.
    const dateString = today.toLocaleDateString('ko-KR', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    }); //년도, 월, 일 등의 날짜를 문자열로 dateString 변수에 저장한다.
    const dayName = today.toLocaleDateString('ko-KR', {weekday: 'long'}); //요일에 해당하는 문자열 값을 dayName 변수에 저장한다.

    console.log(dateString); //결과 확인해보기
    console.log(dayName); //결과 확인해보기

    return(
        <TodoHead>
            <h1>{dateString}</h1>
            <div className="day">{dayName}</div>
            <div className="tasks_left">할 일 {undonetasks.length}개 남음</div>
        </TodoHead>
    );
}

export default Head;