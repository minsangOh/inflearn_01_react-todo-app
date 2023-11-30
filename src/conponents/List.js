import React from "react";

const List = React.memo (({
  id, title, complete, todoData, setTodoData, provided, snapshot, handleClick
}) => {

  const handleClickChange = (id) => {
    let newTodoData = todoData.map((data) => {
      if (data.id === id) {
        // 객체를 복사하고, complete 속성을 변경
        return { ...data, complete: !data.complete };
      }
      return data;
    });
  
    // 업데이트된 상태로 setTodoData 호출
    setTodoData(newTodoData);
  };

  return (
    <div>
      <div
        key={id}
        {...provided.draggableProps}
        ref={provided.innerRef}
        {...provided.dragHandleProps}
        className={`${
          snapshot.isDragging ? "bg-gray-400" : "bg-gray-100"
        } flex items-center justify-between w-full px-4 py-1 my-2 text-gray-600 border rounded`}
      >
        <div className=" items-center">
          <input
            type="checkbox"
            defaultChecked={false}
            onChange={() => handleClickChange(id)}
          />
          <span className={complete ? "line-through" : undefined}>
            {title}
          </span>
        </div>
        <div className="items-center">
          <button
            className="px-4 py-2 float-right"
            onClick={() => handleClick(id)}
          >
            x
          </button>
        </div>
      </div>
    </div>
  );
})


export default List

