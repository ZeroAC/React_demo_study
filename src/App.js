//在react启用emmet提示功能https://medium.com/@eshwaren/enable-emmet-support-for-jsx-in-visual-studio-code-react-f1f5dfe8809c
import "./App.css";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import { useState } from "react";

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "zero ac",
      day: "2021-8-29",
      reminder: true,
    },
    {
      id: 2,
      text: "hello kitty",
      day: "2021-8-28",
      reminder: true,
    },
    {
      id: 3,
      text: "wrong study nlp",
      day: "2021-8-27",
      reminder: true,
    },
  ]);
  // Delete Task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };
  //Toggle reminder
  const toggleReminder = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      )
    );
  };
  return (
    <div className="container">
      {/* 注意 必须要包裹在一个父元素内 */}
      <Header />
      <Tasks
        tasks={tasks}
        onDeleteTask={deleteTask}
        onToggleReminder={toggleReminder}
      />
    </div>
  );
}
export default App;
