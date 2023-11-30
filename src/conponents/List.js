import React from "react";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";

export default function List({ todoData, setTodoData }) {
  const handleClick = (id) => {
    let newTodoData = todoData.filter((data) => data.id !== id);
    // this.setState({ todoData: newTodoData });
    setTodoData(newTodoData);
  };

  const handleClickChange = (id) => {
    let newTodoData = todoData.map((data) => {
      if (data.id === id) {
        return { ...data, complated: !data.complated };
      }
      return data;
    });

    // this.setState({ todoData: newTodoData });
    setTodoData(newTodoData);
  };

  const handleEnd = (result) => {
    // 목적지가 없으면 함수 종료
    if (!result.destination) return;

    // 리액트 불변성을 지켜주기 위해 새로운 todoData 생성
    const newTodoData = [...todoData];

    // 1. 변경시키는 아이템을 배열에서 삭제. 숫자 1은 1개를 지우겠다는 뜻
    // 2. return 값으로 지워진 아이템 잡아주기
    const [reorderedItem] = newTodoData.splice(result.source.index, 1);

    // 원하는 자리에 reorderedItem을 insert. 숫자 0은 0개를 지우겠다는 뜻
    newTodoData.splice(result.destination.index, 0, reorderedItem);
    setTodoData(newTodoData);
  };

  return (
    <div>
      <DragDropContext onDragEnd={handleEnd}>
        <Droppable droppableId="todo">
          {(provided) => (
            <div {...provided.droppableProps} ref={provided.innerRef}>
              {todoData.map((data, index) => (
                <Draggable
                  key={data.id}
                  draggableId={data.id.toString()}
                  index={index}
                >
                  {(provided, snapshot) => (
                    <div
                      key={data.id}
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
                          onChange={() => handleClickChange(data.id)}
                        />
                        <span
                          className={
                            data.complated ? "line-through" : undefined
                          }
                        >
                          {data.title}
                        </span>
                      </div>
                      <div className="items-center">
                        <button
                          className="px-4 py-2 float-right"
                          onClick={() => handleClick(data.id)}
                        >
                          x
                        </button>
                      </div>
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
}
