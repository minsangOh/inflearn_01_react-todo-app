import React, {useState} from "react";
import "./App.css";

export default function App() {
  const state = {
    todoData: [],
    value: "",
  };
  // 첫 번째 인수는 변수이름, 두 번째 인수는 State를 정하는 함수 이름
  const [todoData, setTodoData] = useState([])
  const [value, setValue] = useState("")

  const btnStyle = {
    color: "#fff",
    border: "none",
    padding: "5px 9px",
    borderRadius: "50%",
    cursor: "pointer",
    float: "right",
  };

  const getStyle = (complated) => {
    return {
      padding: "10px",
      borderBottom: "1px #ccc dotted",
      textDecoration: complated ? "line-through" : "none",
    };
  };

  const handClick = (id) => {
    let newTodoData = todoData.filter((data) => data.id !== id);
    // this.setState({ todoData: newTodoData });
    setTodoData(newTodoData)
  };

  const handleChange = (e) => {
    // this.setState({ value: e.target.value });
    setValue(e.target.value)
  };

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
    setTodoData(prev =>[...prev, newTodo])
    setValue("")
  };

  const handleClickChange = (id) => {
    let newTodoData = todoData.map((data) => {
      if (data.id === id) {
        data.complated = !data.complated;
      }
      return data;
    });

    // this.setState({ todoData: newTodoData });
    setTodoData(newTodoData)
  };

  return (
    <div className="container">
      <div className="todoBlock">
        <div className="title">
          <h1>할 일 목록</h1>
        </div>
        {todoData.map((data) => (
          <div style={getStyle(data.complated)} key={data.id}>
            <input
              type="checkbox"
              defaultChecked={false}
              onChange={() => handleClickChange(data.id)}
            />
            {data.title}
            <button
              style={btnStyle}
              onClick={() => handClick(data.id)}
            >
              x
            </button>
          </div>
        ))}

        <form style={{ display: "flex" }} onSubmit={handlesubmit}>
          <input
            type="text"
            name="value"
            style={{ flex: "10", padding: "5px" }}
            placeholder="해야 할 일을 입력 하세요"
            value={value}
            onChange={handleChange}
          />
          <input
            type="submit"
            value="입력"
            className="btn"
            style={{ flex: "1" }}
          />
        </form>
      </div>
    </div>
  );
}
