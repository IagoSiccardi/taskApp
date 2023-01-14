import React, { useEffect, useReducer, useRef } from "react";
import TaskItem from "./TaskItem";
import reducer from "../helpers/reducer";

import "./TaskSection.css";
import useForm from "../hooks/useForm";

const TaskSection = () => {

  const [inputValue, handleInputChange, reset] = useForm();

  const init = () => {
    return JSON.parse(localStorage.getItem('tasks') || [])
  }

  const [state, dispatch] = useReducer(reducer, [], init);

  const inputRef = useRef();

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(state))
  },[state])

  const handleSubmit = (e) => {
    e.preventDefault();

    const newTask = {
      id: new Date().getTime(),
      desc: inputRef.current.value.trim(),
      done: false,
    };

    if (inputRef.current.value.trim().length >= 3) {
      dispatch({
        type: "add",
        payload: newTask,
      });
      reset();
    }

  };

  const handleEdit = (id) => {
    
    inputRef.current.focus()

      dispatch({
        type: "edit",
        payload: {
          desc: inputValue,
          id,
        },
      });
  }

  const handleDelete = (id) => {
    dispatch({
      type: "delete",
      payload: id,
    });
  }


  

  

  return (
    <section className="task-section">
      <span className="new-task">Add new task</span>
      <form action="" className="task-form" onSubmit={handleSubmit}>
        <input
          type="text"
          className="task-input"
          autoComplete="off"
          ref={inputRef}
          onChange={handleInputChange}
          value={inputValue}
          placeholder="Write your task!"
        />
     
        <button type="submit" className="add" value="add">
          <span className="material-symbols-outlined">add</span>
        </button>
      </form>
      <span className="new-task">My tasks</span>

      <ul className="task-ul">
        {state.map((task) => {
          return (
            <TaskItem
              key={task.id}
              desc={task.desc}
              task={task}
              handleDelete={handleDelete}
              handleEdit={handleEdit}
            />
          );
        })}
      </ul>
    </section>
  );
};

export default TaskSection;
