import React, { useState } from "react";
import "./App.css";
import List from "./conponents/List";
import Form from "./conponents/Form";

export default function App() {
  // 첫 번째 인수는 변수이름, 두 번째 인수는 State를 정하는 함수 이름
  const [todoData, setTodoData] = useState([]);
  const [value, setValue] = useState("");

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
    setValue("");
  };

  return (
    <div className="container">
      <div className="todoBlock">
        <div className="title">
          <h1>할 일 목록</h1>
        </div>
        <List todoData={todoData} setTodoData={setTodoData} />
        <Form value={value} setValue={setValue} handlesubmit={handlesubmit} />

        <h1 class="text-3xl font-bold underline">Hello world!</h1>
      </div>
    </div>
  );
}
