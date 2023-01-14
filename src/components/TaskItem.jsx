import { Link } from 'react-router-dom';
import './TaskItem.css'


const TaskItem = ({task,desc,handleDelete,handleEdit}) => {

  return (
    <li className='task-item'>
      <Link to="/task-item">
      <form onSubmit={e => e.preventDefault()}>
        <p className='title-input'>{desc}</p>
      </form>
      </Link>
      <div className='buttons'>
        <button className='edit' onClick={() => handleEdit(task.id)}><span className="material-symbols-outlined">edit</span></button>
        <button className='delete' value="edit" onClick={() => handleDelete(task.id)}><span className="material-symbols-outlined">delete</span></button>
      </div>
    </li>
  );
}
export default TaskItem