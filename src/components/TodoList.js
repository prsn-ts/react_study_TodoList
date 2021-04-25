import { React } from "react";
import styled from "styled-components";
import TodoItem from './TodoItem';
import { UseTodoState } from './TodoContext';

//특정 스타일이 적용된 TodoList 컴포넌트를 만들기 위한 const TodoList 생성.
const TodoList = styled.div`
    /*
        flex 속성의 종류로는 flex-grow, flex-shrink, flex-basis 3개가 있고
        간소화한 표현으로는 위에 3개를 순서대로 나열하여 flex: 1 1 auto 이런 식으로 쓴다.
        기본적으로 flex: 1 하게되면
        flex-grow: 1; //1이 flex-grow의 기본값
        flex-shrink: 1; //1이 flex-shrink의 기본값
        flex-basis: 0; //auto는 flex-basis의 기본값

        이렇게 되는데 여기서 의문점은 flex-basis는 기본값이 auto 임에도 불구하고
        flex: 1 같이 세부항목들을 생략하여쓴다면 flex-basis는 0으로 적용된다고 한다.
        따라서 flex: 1 or flex: 1 1 or flex: 1 1 0; 이 세개의 표현은 같은 표현이 된다.
    */
    flex: 1;
    padding: 20px 32px;
    padding-bottom: 48px;
    overflow-y: auto; /* 위 또는 아래의 내용이 넘칠 때 스크롤바 처리 */
    //background: gray; /* 사이즈 조절이 잘 되고 있는지 확인하기위한 용도 */
`;

//JSX로 정의된 함수 생성
function List() {
    const todos = UseTodoState();
    console.log(todos);

    return (
        <>
        {/* 
            아래의 태그들과 같이 화면에 보여주기위해 todos 배열에 map 함수를 통해 순서대로 배열에 있는
            값들을 꺼내 TodoItem 컴포넌트 안에 속성으로 지정해준다.

            <TodoItem text="프로젝트 생성하기" done={true} />
            <TodoItem text="컴포넌트 스타일링 하기" done={true} />
            <TodoItem text="Context 만들기" done={false} />
            <TodoItem text="기능 구현하기" done={false} /> 
        */}

        {/* 
            TodoItem 컴포넌트의 key 속성은 각 어아탬(항목)을 구분하기위한 key 값 설정으로
            각 엘리먼트의 고유성을 부여하기위한 방법이다.

            TodoItem 컴포넌트의 text 속성은 todo 안에 있는 배열의 "text"라는 키에 담겨있는 값을
            갖게되고 이를 출력하면 innerText로 나오게 된다.
         */}
        <TodoList>
            {todos.map(todo => (
                <TodoItem 
                key={todo.id} 
                id={todo.id} 
                done={todo.done}
                text={todo.text}>
                </TodoItem>
            ))}
        </TodoList>
        </>
    );
};

//JSX를 담은 함수 방출
export default List;