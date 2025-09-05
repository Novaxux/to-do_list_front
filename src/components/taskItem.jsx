import ButtonDelete from "./buttonDelete";
const TaskItem = ({ task, index, handleToggleTask, handleDeleteTask }) => {
  return (
    <li className="taskItem" key={index}>
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => handleToggleTask(index)}
        className="taskCheckbox"
      />
      <span
        style={{
          flex: 1,
          textDecoration: task.completed ? "line-through" : "none",
          color: task.completed ? "#888" : "#222",
          whiteSpace: "normal", // permite salto de línea
          wordBreak: "break-word", // corta palabras largas si es necesario
        }}
      >
        {task.text}
      </span>
      <ButtonDelete onClick={() => handleDeleteTask(index)} />
    </li>
  );
};

export default TaskItem;
