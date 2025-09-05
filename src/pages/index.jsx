import { useState } from "react";
import ButtonDelete from "../components/buttonDelete";
import NewTaskInput from "../components/newTaskInput";

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
        <button type="submit" style={{ marginLeft: 8, padding: "8px 16px" }}>
          Add
        </button>
      </form>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {tasks.map((task, index) => (
          <li
            key={index}
            style={{
              display: "flex",
              alignItems: "center",
              marginBottom: 8,
              textDecoration: task.completed ? "line-through" : "none",
              color: task.completed ? "#888" : "#222",
            }}
          >
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => handleToggleTask(index)}
              style={{ marginRight: 8 }}
            />
            <span style={{ flex: 1 }}>{task.text}</span>
            <ButtonDelete onClick={() => handleDeleteTask(index)} />
          </li>
        ))}
      </ul>
      {tasks.length === 0 && <p>No tasks yet. Add one above!</p>}
    </div>
  );
};

export default Home;
