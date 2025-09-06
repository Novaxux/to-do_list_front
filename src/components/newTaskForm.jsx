import ButtonAdd from "./buttonAdd";

const newTaskForm = ({ value, onChange, onSubmit }) => {
  return (
    <form className="newTaskForm" onSubmit={onSubmit}>
      <input
        type="text"
        value={value}
        onChange={onChange}
        placeholder="Add a new task"
      />
      <ButtonAdd />
    </form>
  );
};

export default newTaskForm;
