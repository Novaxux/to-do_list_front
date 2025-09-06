import { useState } from "react";
import NewTaskForm from "../components/newTaskForm";
import TaskItem from "../components/taskItem";

const Home = () => {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState("");

  const handleAddTask = (e) => {
    e.preventDefault();
    if (input.trim() === "") return;
    setTasks([...tasks, { text: input }]);
    setInput("");
  };
  
  const handleDeleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  return (
    <div className="taskSheet">
      <NewTaskForm value={input} onChange={(e) => setInput(e.target.value)} onSubmit={handleAddTask} />
      <ul className="taskList" style={{ listStyle: "none", padding: 0 }}>
        {tasks.map((task, index) => (
          <TaskItem
            key={index}
            task={task}
            index={index}
            handleDeleteTask={handleDeleteTask}
          />
        ))} 
      </ul>
    </div>
  );
};

export default Home;
