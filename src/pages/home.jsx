import { useState, useEffect } from "react";
import NewTaskForm from "../components/newTaskForm";
import TaskItem from "../components/taskItem";
import Api from "../api/todos.js";

const Home = () => {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState("");

  // cargar tareas
  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("tasks")) || [];
    setTasks(saved);

    if (navigator.onLine) {
      Api.getTasks()
        .then((res) => {
          setTasks(res.data);
        })
        .catch((err) => console.error(err));
    }
  }, []);

  // persistir en localStorage
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  // sincronizar pendientes al volver la conexión
  useEffect(() => {
    const sync = async () => {
      const pendingTasks = tasks.filter((t) => t.pending);
      for (const t of pendingTasks) {
        try {
          const res = await Api.createTask({ description: t.description });
          setTasks((prev) =>
            prev.map((task) => (task.id == t.id ? res.data : task))
          );
        } catch (err) {
          console.error("Error sincronizando:", err);
        }
      }
    };

    window.addEventListener("online", sync);
    return () => window.removeEventListener("online", sync);
  }, [tasks]);

  const handleAddTask = (e) => {
    e.preventDefault();
    if (input.trim() === "") return;

    if (!navigator.onLine) {
      const newTask = {
        id: Date.now(),
        description: input,
        pending: true,
      };
      setTasks((prev) => [...prev, newTask]);
      setInput("");
      return;
    }

    Api.createTask({ description: input })
      .then((res) => {
        setTasks([...tasks, res.data]);
        setInput("");
      })
      .catch((err) => console.error(err));
  };

  const handleDeleteTask = (id) => {
    const itemToDelete = tasks.find((task) => task.id === id);
    if (!itemToDelete) return;

    if (itemToDelete.pending) {
      setTasks(tasks.filter((t) => t.id !== id));
      return;
    }

    Api.deleteTask(itemToDelete.id)
      .then(() => {
        setTasks(tasks.filter((t) => t.id !== id));
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
            handleDeleteTask={() => handleDeleteTask(task.id)}
          />
        ))}
      </ul>
    </div>
  );
};

export default Home;
