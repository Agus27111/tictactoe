import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Container from "./components/Container";
import SearchInput from "./components/SearchInput";

import { useState } from "react";
import classnames from "classnames";

import plusIcon from "./assets/plus-icon.svg";
import minusIcon from "./assets/minus-icon.svg";

function App() {
  const [value, setValue] = useState("");
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: "Susu",
      completed: false,
      count: 1,
    },
    {
      id: 2,
      title: "Kopi",
      completed: false,
      count: 1,
    },
    {
      id: 3,
      title: "Teh",
      completed: false,
      count: 1,
    },
  ]);
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!value) {
      alert("List cannot be empty");
      return;
    }

    const addTodos = [
      ...todos,
      {
        title: value,
        count: 1,
      },
    ];
    setTodos(addTodos);
    setValue("");
  };

  const handleAdditionCount = (index) => {
    const newTodos = [...todos];
    newTodos[index].count = newTodos[index].count + 1;
    setTodos(newTodos);
  };
  const handleSubtractionCount = (index) => {
    const newTodos = [...todos];
    if (newTodos[index].count > 0) {
      //pengurangan dilakukan jika value masih > dari 0
      newTodos[index].count = newTodos[index].count - 1;
    } else {
      //Jika sudah nol tapi masih dikurangi maka akan menghapus data
      newTodos.splice(index, 1);
    }

    setTodos(newTodos);
  };
  return (
    <>
      <Navbar />
      <Container>
        <SearchInput
          onSubmit={handleSubmit}
          onChange={(e) => setValue(e.target.value)}
          value={value}
        />
        <div className="info">
          <div className="info-total">
            <p>Total List</p>
          </div>
          <div className="info-total">
            <p>Total List</p>
          </div>
          <button className="delete-all-button">
            <p>Delete All List</p>
          </button>
        </div>

        {todos.length > 0 ? (
          <div className="todos">
            {todos.map((todo, index, arr) => {
              return (
                <div
                  //dont forget key for method map
                  key={index}
                  //to add class with JS
                  className={`todo ${
                    !(arr.length === index + 1) && `todo-divider`
                  }`}
                >
                  {todo.title}
                  <div className="todo-icon-wrapper">
                    <div className="todo-count">{todo.count}</div>
                    <button
                      className="todo-action-button"
                      onClick={() => {
                        handleSubtractionCount(index);
                      }}
                    >
                      <img src={minusIcon} alt="minus-icon" />
                    </button>
                    <button
                      className="todo-action-button"
                      onClick={() => {
                        handleAdditionCount(index);
                      }}
                    >
                      <img src={plusIcon} alt="plus-icon" />
                    </button>
                  </div>
                </div>
              );
            })}
            ;
          </div>
        ) : (
          <div>Kosong</div>
        )}
      </Container>
    </>
  );
}

export default App;
