import ButtonDelete from "./buttonDelete";
const TaskItem = ({ task, handleDeleteTask }) => {
  return (
    <li className="taskItem" key={task.id}>
      <span
        style={{
          flex: 1,
          whiteSpace: "normal", // permite salto de línea
          wordBreak: "break-word", // corta palabras largas si es necesario
        }}
      >
        {task.description}
      </span>
      <ButtonDelete onClick={() => handleDeleteTask(task.id)} />
    </li>
  );
};

export default TaskItem;
