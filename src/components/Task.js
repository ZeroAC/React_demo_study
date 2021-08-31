import React from "react";
// import { AiTwotoneDelete } from "react-icons/ai";/* install icon > npm install react-icons */
import BackspaceIcon from '@material-ui/icons/Backspace';
const Task = ({ task, onDeleteTask, onToggleReminder }) => {
  return (
    <div className={`task ${task.reminder ? 'reminder':''}`} onDoubleClick={()=>onToggleReminder(task._id)}>
      <h3>
        {task.text}
        <BackspaceIcon
          style={{ color: "red", cursor: "pointer" }}
          onClick={() => onDeleteTask(task._id)}
        />
      </h3>
      <p>{task.day}</p>
    </div>
  );
};

export default Task;
