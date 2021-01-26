import { React, useState } from "react";
import styled, { css } from "styled-components"; //컴포넌트에 스타일을 지정할 수 있게 해주는 라이브러리
import { MdAdd } from "react-icons/md"; //플러스 모양(+) 아이콘을 가져오는 Meterial Design 라이브러리

//할일을 추가하기위한 CircleButton 컴포넌트의 원 모양 버튼 생성
const CircleButton = styled.button`
    background: #38d9a9;
    &:hover {
        background: #63e6be;
    }
    &:active {
        background: #20c997;
    }

    z-index: 5;
    cursor: pointer;
    width: 80px;
    height: 80px;
    position: absolute;
    left: 50%;
    bottom: 0;

    //자기자신의 width, height 기준(여기서는 CircleButton 컴포넌트)으로 x축으로 -50%, y축으로 50% 이동
    transform: translate(-50%, 50%);
    border-radius: 50%;
    color: white;
    font-size: 60px;
    border: none;
    outline: none; //버튼을 클릭했을 때 외곽 라인을 보이지 않도록 설정.

    //버튼안에 플러스 아이콘이 가로,세로 가운데 정렬되도록 설정하는 부분들.
    display: flex;
    align-items: center;
    justify-content: center;

    //0.125초 동안 transition이 적용될 수 있는 모든 속성에 ease-in-out 효과 지정
    transition: 0.125s all ease-in-out;

    //props.open의 값이 true일 때(할일 추가 버튼을 눌렀을 때) css 효과 지정.
    ${props =>
        props.open &&
        css`
            background: $ff6b6b;
            &:hover {
                background: #ff8787;
            }
            &:active {
                background: #fa5252;
            }
            transform: translate(-50%, 50%) rotate(45deg);
        `
    }
`;

//삽입될 폼의 위치를 잡는 InsertFormPositioner 컴포넌트의 div 요소 
const InsertFormPositioner = styled.div`
  width: 100%;
  bottom: 0;
  left: 0;
  position: absolute;
`;

//삽입될 폼 요소의 css 스타일 지정.
const InsertForm = styled.form`
  background: #f8f9fa;
  padding-left: 32px;
  padding-top: 32px;
  padding-right: 32px;
  padding-bottom: 72px;

  border-bottom-left-radius: 16px; //요소의 맨 왼쪽밑 테투리의 모서리를 둥글게
  border-bottom-right-radius: 16px; //요소의 맨 오른쪽밑 테투리의 모서리를 둥글게
  border-top: 1px solid #e9ecef;
`;

//삽입될 폼안에 input 요소의 css 스타일 지정.
const Input = styled.input`
  padding: 12px;
  border-radius: 4px;
  border: 1px solid #dee2e6;
  width: 100%;
  outline: none;
  font-size: 18px;
  box-sizing: border-box; //width 값에 padding, border 값을 빼서 요소의 가로길이를 나타냄.
`;

function TodoCreate() {
    const [open, setOpen] = useState(false); //react-hooks 기능을 통해 useState 함수로 상태값을 관리
    //console.log(useState); -> 시험용
    //console.log([open, setOpen]); -> 시험용

    //할일 추가 버튼을 눌렀는지 안눌렀는지 확인하는 값(true or false)을 open 변수의 값으로 관리
    const onToggle = () => setOpen(!open); 
  
    return (
      <>
        {/* 
            open 변수의 값이
            true일 때 할일을 추가할 컴포넌트들을 생성
            false일 때는 컴포넌트 생성 X
        */}
        {open && (
          <InsertFormPositioner>
            <InsertForm>
              <Input autoFocus placeholder="할 일을 입력 후, Enter 를 누르세요" />
            </InsertForm>
          </InsertFormPositioner>
        )}
        {/* 
            버튼을 클릭했을 때 onToggle 함수 실행
            단 onClick={onToggle()} 이런 식으로 함수를 직접 실행하면 안된다.
            왜냐하면 상태값을 변경한 후에 렌더링이 돼야하는데 위처럼 직접 실행하면
            렌더링이 되는 시점에서 함수를 호출하여 상태값을 변경하려하기 때문에 오류가 난다.

            open 속성은 할일 추가 버튼을 눌렀는 지(true) 안 눌렀는지(false) 판단한다. 
        */}
        <CircleButton onClick={onToggle} open={open}>
          <MdAdd />
        </CircleButton>
      </>
    );
  }
  
  export default TodoCreate;