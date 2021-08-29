import React from "react";
import { AiTwotoneDelete } from "react-icons/ai";/* install icon > npm install react-icons */

const Task = ({ task, onDeleteTask, onToggleReminder }) => {
  return (
    <div className={`task ${task.reminder ? 'reminder':''}`} onDoubleClick={()=>onToggleReminder(task.id)}>
      <h3>
        {task.text}
        <AiTwotoneDelete
          style={{ color: "red", cursor: "pointer" }}
          onClick={() => onDeleteTask(task.id)}
        />
      </h3>
      <p>{task.day}</p>
    </div>
  );
};

export default Task;
