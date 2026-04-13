import React from "react";
import Todo from "./Todo";

function Todos(props) {
  return (
    <div className="accordion accordion-flush" id="accordionFlushExample">
      <h1>Todo list</h1>
      {props.items.length == 0
        ? "no todos to display"
        : props.items.map((item) => {
            return (
              <Todo
                item={item}
                key={item.id}
                onDelete={() => {
                  props.onDelete(item);
                }}
              />
            );
          })}
    </div>
  );
}

export default Todos;
