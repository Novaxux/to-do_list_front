import { useState } from "react";
import NewTaskInput from "../components/newTaskInput";
import TaskItem from "../components/taskItem";
import ButtonAdd from "../components/buttonAdd";

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
      <form
        onSubmit={handleAddTask}
        style={{ display: "flex", marginBottom: 16 }}
      >
        <NewTaskInput
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <ButtonAdd />
      </form>
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
