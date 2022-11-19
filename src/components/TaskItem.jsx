import React from 'react'

import './TaskItem.css'

const TaskItem = ({task,desc,handleDelete}) => {
  return (
    <li className='task-item'>
      <p className='title'>{desc}</p>
      <div className='buttons'>
        <button className='edit'><span className="material-symbols-outlined">edit</span></button>
        <button className='delete' onClick={() => handleDelete(task.id)}><span className="material-symbols-outlined">delete</span></button>
      </div>
    </li>
  );
}
export default TaskItem