import React from "react";

export default function List({ todoData, setTodoData }) {
  const btnStyle = {
    color: "#fff",
    border: "none",
    padding: "5px 9px",
    borderRadius: "50%",
    cursor: "pointer",
    float: "right",
  };

  const handClick = (id) => {
    let newTodoData = todoData.filter((data) => data.id !== id);
    // this.setState({ todoData: newTodoData });
    setTodoData(newTodoData);
  };

  const handleClickChange = (id) => {
    let newTodoData = todoData.map((data) => {
      if (data.id === id) {
        data.complated = !data.complated;
      }
      return data;
    });

    // this.setState({ todoData: newTodoData });
    setTodoData(newTodoData);
  };

  const getStyle = (complated) => {
    return {
      padding: "10px",
      borderBottom: "1px #ccc dotted",
      textDecoration: complated ? "line-through" : "none",
    };
  };

  return (
    <div>
      {todoData.map((data) => (
        <div style={getStyle(data.complated)} key={data.id}>
          <input
            type="checkbox"
            defaultChecked={false}
            onChange={() => handleClickChange(data.id)}
          />
          {data.title}
          <button style={btnStyle} onClick={() => handClick(data.id)}>
            x
          </button>
        </div>
      ))}
    </div>
  );
}
