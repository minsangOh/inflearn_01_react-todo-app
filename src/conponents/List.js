import React from "react";

export default function List({ todoData, setTodoData }) {
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

  return (
    <div>
      {todoData.map((data) => (
        <div key={data.id}>
          <div className="flex items-center justify-between w-full px-4 py-1 my-2 text-gray-600 bg-gray-100 border rounded ">
            <div className=" items-center">
              <input
                type="checkbox"
                defaultChecked={false}
                onChange={() => handleClickChange(data.id)}
              />
              <span className={data.complated? "line-through" : undefined}>{data.title}</span>
            </div>
            <div className="items-center">
              <button className="px-4 py-2 float-right" onClick={() => handClick(data.id)}>x</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
