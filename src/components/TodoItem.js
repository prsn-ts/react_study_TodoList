import { React } from "react";
import styled, { css } from "styled-components";
/*
    리액트에서 제공하는 아이콘 디자인 중 Material Design icons(md) 불러오기
    MdDone는 할일 했다는 의미로 체크표시(✓) svg 이미지를 가져온다.
    MdDelete는 할일을 지우기위한 휴지통 svg 이미지를 가져온다.
*/
import { MdDone, MdDelete } from "react-icons/md"; 
import { UseTodoDispatch } from "./TodoContext";

const Remove = styled.div`
    display:flex; //flex 스타일 지정
    align-items: center; //교차 축(cross-axis, default로 세로 축)에서 Items의 정렬 방법을 설정(1줄)
    justify-contents: center; //주 축(main-axis, default로 가로 축)에서 Items의 정렬 방법을 설정
    color: #dee2e6;
    font-size: 24px;
    cursor: pointer;
    &:hover {
        color: #ff6b6b;
    }
    display: none;
`;

const TodoItem = styled.div`
    display:flex;
    align-items: center;
    padding-top: 12px;
    padding-bottom: 12px;
    &:hover { //TodoItem 컴포넌트에 마우스가 올라갔을 때
        ${Remove}{ //Remove 컴포넌트를 선택자로 지정
            display: initial; //Remove의 원래 display 값인 flex로 되돌리는 설정
        }
    }
`;

const CheckCircle = styled.div`
    width: 32px;
    height: 32px;
    border-radius: 16px;
    border: 1px solid #ced4da;
    font-size: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
    cursor: pointer;

    /*
        람다식 함수를 이용해 props의 done 속성의 결과를 통해 border과 color 속성을 줄 지 말지 결정.
        여기서는 props.done의 결과가 true일 때 css 효과가 적용됨.
    */
    ${props => 
        props.done && 
        css`
        border: 1px solid #38d9a9;
        color: #38d9a9;
    `}
        
`;

const Text = styled.div`
    flex: 1;
    font-size: 21px;
    color: #495057;
    
    /*
        람다식 함수를 이용해 props의 done 속성의 결과를 통해 border과 color 속성을 줄 지 말지 결정.
        여기서는 props.done의 결과가 true일 때 css 효과가 적용됨.
    */
    ${props =>
        props.done &&
        css`
        color: #ced4da;
    `}
`;

//할일 체크 및 지우기 기능 추가, 자세한 내용 분석은 나중에 따로하기..(지금은 따라해보고 만들어지는 과정을 눈에 익혀두자)
function todoItem({ id, done, text }) {
    const dispatch = UseTodoDispatch();
    const onToggle = () => dispatch({ type: 'TOGGLE', id });
    const onRemove = () => dispatch({ type: 'REMOVE', id });

    console.log(dispatch);
    console.log(id);
    console.log(done);
    console.log(text);
    console.log(onToggle);
    console.log(onRemove);

    return (
        <TodoItem>
            <CheckCircle done={done} onClick={onToggle}>{done && <MdDone />}</CheckCircle>
            <Text done={done}>{text}</Text>
            <Remove onClick={onRemove}>
                <MdDelete />
            </Remove>
        </TodoItem>
    );
};

export default todoItem;