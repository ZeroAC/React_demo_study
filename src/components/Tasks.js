import Task from "./Task";
const Tasks = ({ tasks, onDeleteTask, onToggleReminder }) => {
  return (
    <>
      {tasks.length ? tasks.map((item) => (
        <Task
          key={item.id}
          task={item}
          onDeleteTask={onDeleteTask}
          onToggleReminder={onToggleReminder}
        />
      )):'No Task'}
    </>
  );
};

export default Tasks;
