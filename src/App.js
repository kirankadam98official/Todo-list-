import React, { useState } from "react";
import "./App.css";
import TodoList from "./TodoList";

const App = () => {
  const [inputList, setInputList] = useState("");
  const [items, setItems] = useState([]);

  const itemEvent = (event) => {
    setInputList(event.target.value);
  };

  const listOfItems = () => {
    setItems((oldItems) => {
      return [...oldItems, inputList];
    });
    setInputList("");
  };
  const deleteItems = (id) => {
    console.log("Deleted");
    setItems((oldItems) => {
      return oldItems.filter((arrayElement, index) => {
        return index !== id;
      });
    });
  };

  return (
    <>
      <div className="main_div">
        <div className="center_div">
          <br />
          <h1>ToDo List</h1>
          <br />
          <input
            type="text"
            placeholder="Add ToDo"
            value={inputList}
            onChange={itemEvent}
          />
          <button onClick={listOfItems}>Add</button>

          <ol>
            {/* <li>{inputList}</li> */}
            {items.map((itemvalue, index) => {
              return (
                <TodoList
                  key={index}
                  id={index}
                  text={itemvalue}
                  onSelect={deleteItems}
                />
              );
            })}
          </ol>
        </div>
      </div>
    </>
  );
};

export default App;
