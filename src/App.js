//在react启用emmet提示功能https://medium.com/@eshwaren/enable-emmet-support-for-jsx-in-visual-studio-code-react-f1f5dfe8809c
import './App.css'
import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask' 
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
  ])
  // 控制添加表单显示与否
  const [showAddTask,setShowAddTask] = useState(false)
  // Delete Task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  }
  //Toggle reminder
  const toggleReminder = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      )
    );
  };
  //AddTask
  const addTask = (task) => {
      let newTask = {id:Math.floor(Math.random()*1000)+1,...task }
      setTasks([...tasks,newTask])
  }
  return (
    <div className="container">
      {/* 注意 必须要包裹在一个父元素内 */}
      <Header onAdd = {()=>{setShowAddTask(!showAddTask)}} showAdd = {showAddTask}/>
      {showAddTask && <AddTask onAdd = {addTask}/>}
      <Tasks
        tasks={tasks}
        onDeleteTask={deleteTask}
        onToggleReminder={toggleReminder}
      />
    </div>
  );
}
export default App;
