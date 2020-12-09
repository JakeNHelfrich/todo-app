import React, { useEffect, useState } from "react";
import Item from "./Item.js";

function Todo() {
  const [items, setItems] = useState([]);
  const [todoInput, setTodoInput] = useState("");
  const backendUrl = "http://localhost:3035";
  const handleInputChange = ({ target }) => {
    setTodoInput(target.value);
  };

  const makeRequest = async (url, method, reqData) => {
    const response = await fetch(url, {
      method: method,
      body: JSON.stringify(reqData),
      headers: {
        "Content-Type": "application/json",
      },
    });
    return await response.json();
  };

  const removeItem = async (id) => {
    const item = items.find((item) => item._id === id);
    const json = await makeRequest(
      `${backendUrl}/api/tasks/remove`,
      "POST",
      item
    );
    setItems(json.data);
  };

  const addItem = () => {
    if (todoInput === "") {
      alert("Please ensure you have entered a task before adding it :)");
      return;
    }
    const newItem = { name: todoInput };
    sendDataToServer(newItem);
    setTodoInput("");
  };

  const sendDataToServer = async (item) => {
    const json = await makeRequest(`${backendUrl}/api/tasks`, "POST", item);
    setItems([...items, json.data]);
  };

  const toggleComplete = async (id) => {
    const item = items.find((item) => item._id === id);
    const json = await makeRequest(
      `${backendUrl}/api/tasks/update`,
      "POST",
      item
    );
    setItems(json.data);
  };

  useEffect(() => {
    const loadData = async () => {
      const response = await (await fetch(`${backendUrl}/api/tasks`)).json();
      setItems(response.data);
    };
    loadData();
    //eslint-disable-next-line
  }, []);

  return (
    <div className="todoapp">
      <h2 className="todoapp__header">ToDo App!</h2>
      <div className="input">
        <input
          className="input__text"
          type="text"
          id="input"
          onChange={handleInputChange}
          value={todoInput}
        />
        <button className="input__button" onClick={addItem}>
          Enter
        </button>
      </div>
      <div className="todoapp__tasklist">
        {items.map((item, ind) => (
          <Item
            key={item._id}
            {...item}
            removeItem={removeItem}
            toggleComplete={toggleComplete}
          />
        ))}
      </div>
    </div>
  );
}

export default Todo;
