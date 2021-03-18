import React from "react";

export const ComTodo = (props) => {
  const { todo, onClickBack } = props;
  return (
    <div className="complete-area">
      <p className="title">完了</p>
      <ul>
        {todo.map((todo, index) => {
          return (
            <div key={todo} classname="list-row">
              <li>{todo}</li>
              <button onClick={() => onClickBack(index)}>戻す</button>
            </div>
          );
        })}
      </ul>
    </div>
  );
};
