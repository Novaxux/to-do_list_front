import { useState } from "react";
import NewTaskForm from "../components/newTaskForm";
import TaskItem from "../components/taskItem";

const Home = () => {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState("");

  const handleAddTask = (e) => {
    e.preventDefault();
    if (input.trim() === "") return;
    setTasks([...tasks, { text: input, completed: false }]);
    setInput("");
  };

  const handleToggleTask = (index) => {
    setTasks(
      tasks.map((task, i) =>
        i === index ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const handleDeleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  return (
    <div className="taskSheet">
      <NewTaskForm value={input} onChange={(e) => setInput(e.target.value)} onSubmit={handleAddTask} />
      <ul style={{ listStyle: "none", padding: 0 }}>
        {tasks.map((task, index) => (
          <TaskItem
            key={index}
            task={task}
            index={index}
            handleToggleTask={handleToggleTask}
            handleDeleteTask={handleDeleteTask}
          />
        ))}
      </ul>
      {tasks.length === 0 && <p>No tasks yet. Add one above!</p>}
    </div>
  );
};

export default Home;
