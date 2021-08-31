//在react启用emmet提示功能https://medium.com/@eshwaren/enable-emmet-support-for-jsx-in-visual-studio-code-react-f1f5dfe8809c
import './App.css'
import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask' 
import { useState, useEffect } from "react";

function App() {
  const [tasks, setTasks] = useState([])

  //从后端加载初始的数据 副作用 不依赖于任何 为[] 故只会运行一次
  useEffect(()=>{
    const getTasks = async ()=>{
      const data = await fetchTasks()
      setTasks(data);
    }
    getTasks()
  },[])

  // fetch tasks
  const fetchTasks = async ()=>{
    const res = await fetch('https://qcs8vh.fn.thelarkcloud.com/tasks')
    const data = await res.json()
    console.log(data.result)
    return data.result
  }

  // 控制添加表单显示与否
  const [showAddTask,setShowAddTask] = useState(false)

  // Delete Task
  const deleteTask = async (id) => {
    setTasks(tasks.filter((task) => task._id !== id));
    const res = await fetch('https://qcs8vh.fn.thelarkcloud.com/del',{
      headers: {
        'content-type': 'application/json'
      },
      method: 'POST',
      body: JSON.stringify({_id:id})
    })
    console.log(res)
  }

  //Toggle reminder
  const toggleReminder = async (id) => {
    setTasks(
      tasks.map((task) =>
        task._id === id ? { ...task, reminder: !task.reminder } : task
      )
    );
    const res = await fetch('https://qcs8vh.fn.thelarkcloud.com/alter',{
      headers: {
        'content-type': 'application/json'
      },
      method: 'POST',
      body: JSON.stringify({_id:id})
    })
    console.log(res)
  };

  //AddTask
  const addTask = async (task) => {
      const res = await fetch('https://qcs8vh.fn.thelarkcloud.com/add',{
        headers: {
          'content-type': 'application/json'
        },
        method: 'POST',
        body: JSON.stringify({text:task.text,day:task.day,reminder:task.reminder})
      })
      const data = await res.json();
      console.log(data);
      setTasks([...tasks,data.result])
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
