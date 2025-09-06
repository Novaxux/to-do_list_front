import ButtonDelete from "./buttonDelete";
const TaskItem = ({ task, index, handleDeleteTask }) => {
  return (
    <li className="taskItem" key={index}>
      <span
        style={{
          flex: 1,
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
