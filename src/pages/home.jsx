import { useState, useEffect } from "react";
import NewTaskForm from "../components/newTaskForm";
import TaskItem from "../components/taskItem";
import Api from "../api/todos.js";
import ApiAuth from "../api/auth.js";

const Home = () => {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState("");
  const [user, setUser] = useState(null);
  // cargar tareas
  useEffect(() => {
    const checkAuth = async () => {
      try {
        const res = await ApiAuth.verify();
        if (res.data.authenticated) {
          console.log("Usuario autenticado:", res.data.user);
          setUser(res.data.user);
        } else {
          console.log(
            "No estás autenticado, redirigiendo..." + JSON.stringify(res.data)
          );
          window.location.href =
            import.meta.env.VITE_AUTH.toString() + "/login.php";
          return; // detener aquí
        }
      } catch (err) {
        console.error("Error al verificar autenticación:", err);
      }
    };
    checkAuth();
  }, []);

  // esperar a que cargue el user
  useEffect(() => {
    if (!user?.id) return; // espera hasta que user tenga id
    if (!navigator.onLine) return; // opcional: solo si hay conexión

    Api.getTasks(user.id)
      .then((res) => setTasks(res.data))
      .catch((err) => console.error(err));
  }, [user]);

  // persistir en localStorage
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  // sincronizar pendientes al volver la conexión
  useEffect(() => {
    if (!user?.id) return;
    const sync = async () => {
      const pendingTasks = tasks.filter((t) => t.pending);
      for (const t of pendingTasks) {
        try {
          const res = await Api.createTask({
            description: t.description,
            userId: user.id,
          });
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
  }, [tasks, user]);

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

    Api.createTask({ description: input, userId: user.id })
      .then((res) => {
        setTasks([...tasks, res.data]);
        setInput("");
      })
      .catch((err) => console.error(err));
  };

  const handleDeleteTask = (id) => {
    const itemToDelete = tasks.find((task) => task.id == id);
    if (!itemToDelete) return;

    if (itemToDelete.pending) {
      setTasks(tasks.filter((t) => t.id != id));
      return;
    }

    Api.deleteTask({ id: itemToDelete.id, userId: user.id })
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
