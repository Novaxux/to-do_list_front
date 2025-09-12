import { useState, useEffect } from "react";
import NewTaskForm from "../components/newTaskForm";
import TaskItem from "../components/taskItem";
import Api from "../api/todos.js";

const Home = () => {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState("");

  useEffect(() => {
    Api.getTasks()
      .then((res) => {
        setTasks(res.data);
      })
      .catch((err) => console.error(err));
  }, []);

  const handleAddTask = (e) => {
    e.preventDefault();
    if (input.trim() === "") return;
    Api.createTask({ description: input })
      .then((res) => {
        setTasks([...tasks, res.data]);
        setInput("");
      })
      .catch((err) => console.error(err));
  };

  const handleDeleteTask = (index) => {
    const itemToDelete = tasks.find((task) => task.id == index);
    console.log(itemToDelete);
    Api.deleteTask(itemToDelete.id)
      .then(() => {
        setTasks(tasks.filter((task) => task.id !== itemToDelete.id));
      })
      .catch((err) => console.error(err));
  };

  return (
    <div className="taskSheet">
      <NewTaskForm
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onSubmit={handleAddTask}
      />
      <ul className="taskList" style={{ listStyle: "none", padding: 0 }}>
        {tasks.map((task) => (
          <TaskItem
            key={task.id}
            task={task}
            handleDeleteTask={handleDeleteTask}
          />
        ))}
      </ul>
    </div>
  );
};

export default Home;
