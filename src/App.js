import React, { useState, useCallback } from "react";
import Lists from "./conponents/Lists";
import Form from "./conponents/Form";

const initialTodoData = localStorage.getItem("todoData")? JSON.parse(localStorage.getItem("todoData")) : []


export default function App() {
  // 첫 번째 인수는 변수이름, 두 번째 인수는 State를 정하는 함수 이름
  const [todoData, setTodoData] = useState(initialTodoData);
  const [value, setValue] = useState("");

  const handleClick = useCallback(
    (id) => {
      let newTodoData = todoData.filter((data) => data.id !== id);
      // this.setState({ todoData: newTodoData });
      setTodoData(newTodoData);
      localStorage.setItem("todoData", JSON.stringify(newTodoData));
    },
    [todoData]
  );

  const handlesubmit = (e) => {
    e.preventDefault();

    // 새로운 할 일 데이터
    let newTodo = {
      id: Date.now(),
      title: value,
      complated: false,
    };

    // 원래 있던 할 일에 새로운 할 일 추가
    // this.setState({ todoData: [...todoData, newTodo], value: "" });
    setTodoData((prev) => [...prev, newTodo]);
    localStorage.setItem("todoData", JSON.stringify([...todoData, newTodo]));
    // ...prev 대신 ...todoData 쓰는 이유는 setTodoData가 비동기적 작동해서 todoData가 최신인지 모름 그래서 prev를 쓰면 예상치 못한 결과 발생 가능
    // localStorage.setItem은 동기적으로 작동하니까 상태 업데이트 전의 todoData를 참조해서 전 후를 정확하게 반영함

    // 입력란에 있던 글씨 지워주기
    setValue("");
  };

  const handleRemoveClick = () => {
    setTodoData([]);
    localStorage.setItem("todoData", JSON.stringify([]));
  };

  return (
    // 플렉스로, 세로 중앙 정렬, 가로 중앙 정렬, 너비를 화면이랑 동일, 높이를 화면이랑 동일, 배경색 설정
    <div className="flex items-center justify-center w-screen h-screen bg-blue-100">
      {/* 너비를 부모요소 전체로, 패딩, 마진, 배경색, 모서리 둥글게, 그림자효과, 대형 화면에서는 너비를 부모요소의 3/4, 대형 화면에서 최대 너비를 lg 크기로 */}
      <div className="w-full p-6 m-4 bg-white rounded shadow lg:w-3/4 lg:max-w-lg">
        {/* 플렉스로, 플렉스 아이템을 양 끝에 정렬, 아래쪽 마진 */}
        <div className="flex justify-between mb-3">
          <h1>할 일 목록</h1>
          <button onClick={handleRemoveClick}>Delete All</button>
        </div>
        <Lists
          todoData={todoData}
          setTodoData={setTodoData}
          handleClick={handleClick}
        />
        <Form value={value} setValue={setValue} handlesubmit={handlesubmit} />
      </div>
    </div>
  );
}

